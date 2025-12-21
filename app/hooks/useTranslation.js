"use client";
import { useState, useEffect } from 'react';
import translations from '../translations.json';

export default function useTranslation() {
  const [language, setLanguage] = useState('English');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('preferredLanguage');
      if (saved && (saved === 'English' || saved === 'German')) {
        setLanguage(saved);
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
    return translations[language]?.[key] || translations['English']?.[key] || key;
  };

  return { t, language, changeLanguage };
}
