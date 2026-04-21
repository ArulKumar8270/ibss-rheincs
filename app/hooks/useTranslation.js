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

function normalizeCountryCode(raw) {
  if (!raw) return '';
  const c = String(raw).trim().toUpperCase();
  if (c.length === 2 && /^[A-Z]{2}$/.test(c)) return c;
  return '';
}

/** One probe: returns ISO2 country or '' */
async function probeCountryJson(url, pickCode) {
  try {
    const res = await fetchWithTimeout(url, 4500);
    if (!res.ok) return '';
    const data = await res.json();
    return normalizeCountryCode(pickCode(data));
  } catch {
    return '';
  }
}

/** Cloudflare trace: loc=DE (often matches VPN exit IP) */
async function probeCloudflareTrace() {
  try {
    const res = await fetchWithTimeout('https://www.cloudflare.com/cdn-cgi/trace', 4500);
    if (!res.ok) return '';
    const text = await res.text();
    const line = text.split('\n').find((l) => l.startsWith('loc='));
    if (!line) return '';
    return normalizeCountryCode(line.slice(4).trim());
  } catch {
    return '';
  }
}

async function getLanguageFromLocation() {
  // Run several geo sources in parallel — VPN / adblock often breaks some endpoints;
  // if ANY reports a DACH+ country, prefer German before falling back to browser locale.
  const codes = await Promise.all([
    probeCountryJson('https://ipwho.is/?fields=success,country_code', (d) => {
      if (d && Object.prototype.hasOwnProperty.call(d, 'success') && d.success === false) return '';
      return d?.country_code;
    }),
    probeCountryJson('https://get.geojs.io/v1/ip/country.json', (d) => d?.country),
    probeCountryJson('https://ipapi.co/json/', (d) => d?.country_code),
    probeCountryJson('https://ip-api.com/json/?fields=countryCode', (d) => d?.countryCode),
    probeCloudflareTrace(),
  ]);

  if (codes.some((c) => c && GERMAN_COUNTRY_CODES.has(c))) {
    return 'German';
  }

  return getLanguageFromBrowserLocale();
}

const STORAGE_LANG = 'preferredLanguage';
const STORAGE_LOCKED = 'preferredLanguageLocked'; // '1' means user explicitly selected

// One geo/IP detection per page load — multiple useTranslation() mounts share the same result
// so parallel fetches cannot finish out of order and overwrite German with English.
let sharedLanguageDetectionPromise = null;

function getOrRunLanguageDetection() {
  if (!sharedLanguageDetectionPromise) {
    sharedLanguageDetectionPromise = getLanguageFromLocation().catch(() =>
      getLanguageFromBrowserLocale()
    );
  }
  return sharedLanguageDetectionPromise;
}

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

    let cancelled = false;

    if (isLocked && hasValidSaved) {
      setLanguage(saved);
    } else {
      getOrRunLanguageDetection().then((detected) => {
        if (cancelled) return;
        if (localStorage.getItem(STORAGE_LOCKED) === '1') {
          const lockedLang = localStorage.getItem(STORAGE_LANG);
          if (lockedLang === 'English' || lockedLang === 'German') setLanguage(lockedLang);
          return;
        }
        applyDetectedLanguage(detected);
      });
    }

    return () => {
      cancelled = true;
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
