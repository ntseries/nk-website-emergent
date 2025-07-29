import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

const useLanguageDetection = () => {
  const { i18n } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname;
    let detectedLang = 'th'; // default

    // Detect language from URL
    if (path.startsWith('/en')) {
      detectedLang = 'en';
    } else {
      detectedLang = 'th';
    }

    // Only change language if it's different from current
    if (i18n.language !== detectedLang) {
      i18n.changeLanguage(detectedLang);
    }
  }, [location.pathname, i18n]);

  return i18n.language;
};

export default useLanguageDetection;