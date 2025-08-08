import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEOHead = ({ 
  title = "NK Board Game - ร้านบอร์ดเกม อันดับ 1 ในใจ Gen Z | บางแค ศรีนครินทร์ สามย่าน พระนคร",
  description = "NK Board Game ร้านบอร์ดเกมอันดับ 1 ในใจชาว Gen Z พร้อมบริการครบครัน 4 สาขา บางแค ศรีนครินทร์ สามย่าน พระนคร เกมกว่า 1000+ เกม",
  keywords = "ร้านบอร์ดเกม, บอร์ดเกม, ปาร์ตี้เกม, การ์ดเกม, NK Board Game, บางแค, ศรีนครินทร์, สามย่าน, พระนคร",
  image = "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/NK-Logo.png",
  url = "https://nkboardgame.com",
  type = "website"
}) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  // Generate hreflang URLs
  const generateHrefLangUrls = (currentUrl) => {
    if (currentUrl.includes('/en/')) {
      // English URL, generate Thai version
      const thaiUrl = currentUrl.replace('/en/', '/').replace('/en', '/');
      return {
        thai: thaiUrl === 'https://nkboardgame.com/' ? 'https://nkboardgame.com' : thaiUrl,
        english: currentUrl
      };
    } else {
      // Thai URL, generate English version
      const baseUrl = currentUrl === 'https://nkboardgame.com' ? 'https://nkboardgame.com/' : currentUrl;
      const englishUrl = baseUrl.replace('https://nkboardgame.com/', 'https://nkboardgame.com/en/');
      return {
        thai: currentUrl,
        english: englishUrl === 'https://nkboardgame.com/en/' ? 'https://nkboardgame.com/en' : englishUrl
      };
    }
  };

  const hrefLangUrls = generateHrefLangUrls(url);

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Hreflang tags */}
      <link rel="alternate" hrefLang="th" href={hrefLangUrls.thai} />
      <link rel="alternate" hrefLang="en" href={hrefLangUrls.english} />
      <link rel="alternate" hrefLang="x-default" href={hrefLangUrls.thai} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="NK Board Game" />
      <meta property="og:locale" content={isEnglish ? "en_US" : "th_TH"} />
      {isEnglish && <meta property="og:locale:alternate" content="th_TH" />}
      {!isEnglish && <meta property="og:locale:alternate" content="en_US" />}
      
      {/* Twitter Card */}  
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Language meta */}
      <meta httpEquiv="content-language" content={currentLanguage} />
      <html lang={currentLanguage} />
    </Helmet>
  );
};

export default SEOHead;