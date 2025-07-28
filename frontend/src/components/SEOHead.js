import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title = "NK Board Game - ร้านบอร์ดเกม อันดับ 1 ในไทย",
  description = "NK Board Game ร้านบอร์ดเกมอันดับ 1 ในใจชาว Gen Z พร้อมบริการครบครัน 3 สาขา บางแค ศรีนครินทร์ สามย่าน เกมกว่า 1000+ เกม",
  keywords = "ร้านบอร์ดเกม, บอร์ดเกม, ปาร์ตี้เกม, การ์ดเกม, NK Board Game",
  image = "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/NK-Logo.png",
  url = "https://nkboardgame.com",
  type = "website"
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={url} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="NK Board Game" />
      <meta property="og:locale" content="th_TH" />
      
      {/* Twitter Card */}  
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEOHead;