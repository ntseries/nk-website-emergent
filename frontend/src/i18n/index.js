import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import translationTH from './locales/th.json';
import translationEN from './locales/en.json';

const resources = {
  th: {
    translation: translationTH
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'th', // default language
    fallbackLng: 'th',
    
    detection: {
      order: ['cookie', 'path', 'localStorage', 'navigator'],
      caches: ['cookie', 'localStorage'],
      lookupCookie: 'nk-language',
      lookupLocalStorage: 'nk-language',
      cookieMinutes: 160,
      cookieDomain: 'nkboardgame.com'
    },

    interpolation: {
      escapeValue: false
    },

    debug: process.env.NODE_ENV === 'development'
  });

export default i18n;