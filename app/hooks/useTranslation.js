"use client";
import { useState, useEffect } from 'react';
import translations from '../translations.json';

export const useTranslation = () => {
  // Initialize with value from localStorage if available, otherwise default to 'English'
  // On first visit, ignore localStorage and use default
  const [language, setLanguage] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if user has visited before
      const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
      if (hasVisitedBefore) {
        // Not first visit - use saved preference
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && (saved === 'English' || saved === 'German')) {
          return saved;
        }
      }
      // First visit or no saved preference - use default
    }
    return 'English';
  });

  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Check if this is the first visit to the domain
      const hasVisitedBefore = localStorage.getItem('hasVisitedBefore');
      if (!hasVisitedBefore) {
        // First time visiting - remove preferredLanguage and set flag
        localStorage.removeItem('preferredLanguage');
        localStorage.setItem('hasVisitedBefore', 'true');
        // Reset to default language
        setLanguage('English');
      } else {
        // Not first visit - load saved preference
        const saved = localStorage.getItem('preferredLanguage');
        if (saved && (saved === 'English' || saved === 'German')) {
          setLanguage(saved);
        }
      }

      const handlePreferredLanguageChange = (e) => {
        const next = e.detail;
        if (next && (next === 'English' || next === 'German')) {
          setLanguage(next);
        }
      };
      window.addEventListener('preferredLanguageChange', handlePreferredLanguageChange);

      const handleVisibility = () => {
        const current = localStorage.getItem('preferredLanguage');
        if (current && (current === 'English' || current === 'German')) {
          setLanguage(current);
        }
      };
      document.addEventListener('visibilitychange', handleVisibility);

      return () => {
        window.removeEventListener('preferredLanguageChange', handlePreferredLanguageChange);
        document.removeEventListener('visibilitychange', handleVisibility);
      };
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
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
