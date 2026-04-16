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
  // Client-side geo detection (static export has no API routes).
  // Prefer providers that allow browser CORS and work with VPN.
  const tryCountryCode = async (url, getCode) => {
    const res = await fetchWithTimeout(url, 4500);
    const data = await res.json();
    const code = getCode(data);
    return code ? String(code).toUpperCase() : '';
  };

  try {
    const code = await tryCountryCode(
      'https://ipwho.is/?fields=country_code',
      (d) => d?.country_code
    );
    if (code && GERMAN_COUNTRY_CODES.has(code)) return 'German';
  } catch {}

  // Fallbacks (may be blocked by some adblockers)
  try {
    const code = await tryCountryCode('https://ipapi.co/json/', (d) => d?.country_code);
    if (code && GERMAN_COUNTRY_CODES.has(code)) return 'German';
  } catch {}

  try {
    const code = await tryCountryCode(
      'https://ip-api.com/json/?fields=countryCode',
      (d) => d?.countryCode
    );
    if (code && GERMAN_COUNTRY_CODES.has(code)) return 'German';
  } catch {}

  // Final fallback: browser locale
  return getLanguageFromBrowserLocale();
}

const STORAGE_LANG = 'preferredLanguage';
const STORAGE_LOCKED = 'preferredLanguageLocked'; // '1' means user explicitly selected

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
    const isLocked = localStorage.getItem(STORAGE_LOCKED) === '1';

    function applyDetectedLanguage(detected) {
      setLanguage(detected);
      localStorage.setItem(STORAGE_LANG, detected);
      try {
        window.dispatchEvent(new CustomEvent('preferredLanguageChange', { detail: detected }));
      } catch {}
    }

    // If user explicitly chose a language, never overwrite it with auto-detection.
    if (isLocked && hasValidSaved) {
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
      localStorage.setItem(STORAGE_LOCKED, '1');
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
