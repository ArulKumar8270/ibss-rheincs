import React, { createContext, useContext, useState, useEffect } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children, translations }) => {
  const [currentLanguage, setCurrentLanguage] = useState('English');
  const [t, setT] = useState(() => (key) => key);

  useEffect(() => {
    // Attempt to load preferred language from localStorage on initial mount
    if (typeof window !== 'undefined') {
      const storedLanguage = localStorage.getItem('preferredLanguage');
      if (storedLanguage) {
        setCurrentLanguage(storedLanguage);
      }
    }
  }, []);

  useEffect(() => {
    if (translations && translations[currentLanguage]) {
      setT(() => (key) => translations[currentLanguage][key] || key);
    } else {
      // Fallback to English or just the key if translations are not loaded or language is missing
      setT(() => (key) => (translations && translations.English && translations.English[key]) ? translations.English[key] : key);
    }
  }, [currentLanguage, translations]);

  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    // Store language preference in localStorage whenever it changes
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferredLanguage', lang);
    }
  };

  return (
    <TranslationContext.Provider value={{ t, currentLanguage, changeLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  return useContext(TranslationContext);
};