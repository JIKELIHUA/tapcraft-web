import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from './translations';

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [lang, setLangState] = useState(() => {
    try {
      // 1. First check URL query parameter ?lang=en or ?lang=zh
      if (typeof window !== 'undefined') {
        const params = new URLSearchParams(window.location.search);
        const urlLang = params.get('lang');
        if (urlLang === 'zh' || urlLang === 'en') {
          localStorage.setItem('tapcraft_lang', urlLang);
          return urlLang;
        }
      }

      // 2. Next check saved localStorage
      const saved = localStorage.getItem('tapcraft_lang');
      if (saved === 'zh' || saved === 'en') return saved;

      // 3. Fallback to browser language
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
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('lang', newLang);
        window.history.replaceState({}, '', url.toString());
      }
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
