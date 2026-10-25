import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      const saved = localStorage.getItem('tapcraft_lang');
      if (saved === 'zh' || saved === 'en') return saved;
      // Detect browser language if first time
      if (typeof navigator !== 'undefined' && navigator.language && navigator.language.startsWith('zh')) {
        return 'zh';
      }
    } catch (e) {}
    return 'en';
  });

  const setLang = (newLang) => {
    setLangState(newLang);
    try {
      localStorage.setItem('tapcraft_lang', newLang);
      document.documentElement.lang = newLang;
    } catch (e) {}
  };

  const toggleLang = () => {
    setLang(lang === 'en' ? 'zh' : 'en');
  };

  useEffect(() => {
    try {
      document.documentElement.lang = lang;
    } catch (e) {}
  }, [lang]);

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
