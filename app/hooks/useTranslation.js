"use client";
import { useState, useEffect } from 'react';
import translations from '../translations.json';

// German-speaking countries (ISO 3166-1 alpha-2)
const GERMAN_COUNTRY_CODES = new Set(['DE', 'AT', 'CH', 'LI', 'LU']);

function getLanguageFromBrowserLocale() {
  if (typeof navigator === 'undefined') return 'English';
  const locale = (navigator.language || navigator.userLanguage || '').toLowerCase();
  return locale.startsWith('de') ? 'German' : 'English';
}

function fetchWithTimeout(url, ms = 5000) {
  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), ms);
  return fetch(url, { signal: controller.signal }).finally(() => clearTimeout(id));
}

async function getLanguageFromLocation() {
  let fromIp = 'English';
  try { 
    const res = await fetchWithTimeout('https://ipapi.co/json/');
    const data = await res.json();
    const code = data?.country_code;
    if (code && GERMAN_COUNTRY_CODES.has(String(code).toUpperCase())) fromIp = 'German';
  } catch {
    try {
      const fallback = await fetchWithTimeout('https://ip-api.com/json/?fields=countryCode');
      const fallbackData = await fallback.json();
      const code = fallbackData?.countryCode;
      if (code && GERMAN_COUNTRY_CODES.has(String(code).toUpperCase())) fromIp = 'German';
    } catch { 
      // ignore
    }
  }
  // Browser locale: German abroad or non-DE IP with de-* system language → German
  const fromBrowser = getLanguageFromBrowserLocale();
  if (fromIp === 'German' || fromBrowser === 'German') return 'German';
  return 'English';
}

const STORAGE_LANG = 'preferredLanguage';

export const useTranslation = () => {
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem(STORAGE_LANG);
      if (saved && (saved === 'English' || saved === 'German')) return saved;
    }
    return 'English';
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const saved = localStorage.getItem(STORAGE_LANG);
    const hasValidSaved = saved === 'English' || saved === 'German';

    function applyDetectedLanguage(detected) {
      setLanguage(detected);
      localStorage.setItem(STORAGE_LANG, detected);
      try {
        window.dispatchEvent(new CustomEvent('preferredLanguageChange', { detail: detected }));
      } catch {}
    }

    // First visit (no stored preference): pick language from IP region + browser locale
    if (hasValidSaved) {
      setLanguage(saved);
    } else {
      getLanguageFromLocation()
        .then(applyDetectedLanguage)
        .catch(() => {
          applyDetectedLanguage(getLanguageFromBrowserLocale());
        });
    }

    const handlePreferredLanguageChange = (e) => {
      const next = e.detail;
      if (next && (next === 'English' || next === 'German')) setLanguage(next);
    };
    window.addEventListener('preferredLanguageChange', handlePreferredLanguageChange);

    const handleVisibility = () => {
      const current = localStorage.getItem(STORAGE_LANG);
      if (current && (current === 'English' || current === 'German')) setLanguage(current);
    };
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      window.removeEventListener('preferredLanguageChange', handlePreferredLanguageChange);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_LANG, lang);
      try {
        window.dispatchEvent(new CustomEvent('preferredLanguageChange', { detail: lang }));
      } catch {}
    }
  };

  const t = (key) => {
    // If no key provided, return empty string
    if (!key) return '';
    
    // Get translations for current language
    const langTranslations = translations[language];
    
    // If translations exist for this language and key exists, return translation
    if (langTranslations && langTranslations[key]) {
      return langTranslations[key];
    }
    
    // Fallback to English if translation not found
    const englishTranslations = translations['English'];
    if (englishTranslations && englishTranslations[key]) {
      return englishTranslations[key];
    }
    
    // If no translation found at all, return the key
    return key;
  };

  return { t, language, changeLanguage };
}
