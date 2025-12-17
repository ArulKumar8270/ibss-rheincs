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
    }
  }, []);

  const changeLanguage = (lang) => {
    setLanguage(lang);
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  const t = (key) => {
    return translations[language]?.[key] || translations['English']?.[key] || key;
  };

  return { t, language, changeLanguage };
}
