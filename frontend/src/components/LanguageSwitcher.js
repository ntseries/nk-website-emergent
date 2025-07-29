import React from 'react';
import { useTranslation } from 'react-i18next';
import { Languages } from 'lucide-react';

const LanguageSwitcher = ({ className = '', showIcon = true }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    // Update URL path for language
    const currentPath = window.location.pathname;
    let newPath;
    
    if (lng === 'en') {
      // Add /en prefix if not already there
      if (!currentPath.startsWith('/en/') && currentPath !== '/en') {
        newPath = currentPath === '/' ? '/en' : `/en${currentPath}`;
      } else {
        newPath = currentPath;
      }
    } else {
      // Remove /en prefix for Thai (default)
      if (currentPath.startsWith('/en/')) {
        newPath = currentPath.substring(3) || '/';
      } else if (currentPath === '/en') {
        newPath = '/';
      } else {
        newPath = currentPath;
      }
    }
    
    if (newPath !== currentPath) {
      window.history.pushState({}, '', newPath);
    }
  };

  const currentLanguage = i18n.language || 'th';

  return (
    <div className={`language-switcher ${className}`}>
      <div className="flex items-center gap-2">
        {showIcon && <Languages size={16} />}
        <div className="flex items-center gap-1">
          <button
            onClick={() => changeLanguage('th')}
            className={`language-btn ${
              currentLanguage === 'th' 
                ? 'active text-blue-600 font-semibold' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
          >
            TH
          </button>
          <span className="text-gray-400">|</span>
          <button
            onClick={() => changeLanguage('en')}
            className={`language-btn ${
              currentLanguage === 'en' 
                ? 'active text-blue-600 font-semibold' 
                : 'text-gray-600 hover:text-blue-600'
            }`}
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              border: 'none',
              background: 'transparent',
              cursor: 'pointer',
              fontSize: '14px',
              transition: 'all 0.2s ease'
            }}
          >
            EN
          </button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;