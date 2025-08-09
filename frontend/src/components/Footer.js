import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Clock, Youtube } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Footer = () => {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  const getLocalizedPath = (path) => {
    if (isEnglish) {
      return path === "/" ? "/en" : `/en${path}`;
    }
    return path;
  };

  // Function to handle navigation clicks
  const handleNavClick = () => {
    // Multiple attempts to ensure scroll to top
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Fallback for immediate scroll if smooth doesn't work
      setTimeout(() => {
        if (window.pageYOffset > 0) {
          window.scrollTo(0, 0);
        }
      }, 500);
    }, 100);
  };

  // Also scroll to top when location changes (for direct navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    // Fallback for immediate scroll
    setTimeout(() => {
      if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
      }
    }, 500);
  }, [location]);

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/logo.jpg"
                alt="NK Board Game"
                className="footer-logo-image"
              />
            </div>
            <p className="footer-description">
              {t("footer.description")}
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/nkboardgame" target="_blank" rel="noopener noreferrer" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/nkboardgame/" target="_blank" rel="noopener noreferrer" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="https://www.youtube.com/@NKBoardGame" target="_blank" rel="noopener noreferrer" className="social-link">
                <Youtube size={20} />
              </a>
              <a href="https://www.tiktok.com/@nkboardgame" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43V7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.43z"/>
                </svg>
              </a>
              <a href="https://lin.ee/H4D9qos" target="_blank" rel="noopener noreferrer" className="social-link">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#00C300"/>
                  <path d="M18.5 11.2c0-3.4-3.4-6.2-7.5-6.2s-7.5 2.8-7.5 6.2c0 3.1 2.7 5.7 6.4 6.1.2 0 .6.1.7.3 0 .1 0 .4 0 .6v.3c0 .1 0 .4.4.2.5-.2 2.8-1.6 3.9-2.8 1.4-1.5 2-3.1 2-4.7zm-11.8 1.3h-1.5c-.1 0-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1h1.5c.1 0 .1.1.1.1s-.1.1-.1.1H5.4v.9h1.3c.1 0 .1.1.1.1s-.1.1-.1.1H5.4v.9h1.3c.1 0 .1.1.1.1s-.1.1-.1.1zm1.3 0h-.1c-.1 0-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1s.1.1.1.1v2.3c0 .1-.1.1-.1.1zm3.1 0h-1.4c-.1 0-.1-.1-.1-.1l-1.5-1.7v1.7c0 .1-.1.1-.1.1s-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1h.1l1.5 1.7v-1.6c0-.1.1-.1.1-.1s.1.1.1.1v2.3c0 .1-.1.1-.1.1zm3.4 0h-1.5c-.1 0-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1h1.5c.1 0 .1.1.1.1s-.1.1-.1.1h-1.2v.9h1.2c.1 0 .1.1.1.1s-.1.1-.1.1h-1.2v.9h1.2c.1 0 .1.1.1.1s-.1.1-.1.1z" fill="white"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">{t("footer.quick_links")}</h3>
            <ul className="footer-links">
              <li><Link to={getLocalizedPath("/")} onClick={handleNavClick}>{t("nav.home")}</Link></li>
              <li><Link to={getLocalizedPath("/about")} onClick={handleNavClick}>{t("nav.about")}</Link></li>
              <li><Link to={getLocalizedPath("/contact")} onClick={handleNavClick}>{t("nav.contact")}</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">{t("nav.services")}</h3>
            <ul className="footer-links">
              <li><Link to={getLocalizedPath("/services/play-at-shop")} onClick={handleNavClick}>{t("nav.play_at_shop")}</Link></li>
              <li><Link to={getLocalizedPath("/services/board-game-script")} onClick={handleNavClick}>{t("nav.board_game_script")}</Link></li>
              <li><Link to={getLocalizedPath("/services/photo-booth")} onClick={handleNavClick}>{t("nav.photo_booth")}</Link></li>
              <li><Link to={getLocalizedPath("/services/food-drink")} onClick={handleNavClick}>{t("nav.nk_cafe")}</Link></li>
              <li><Link to={getLocalizedPath("/services/team-building")} onClick={handleNavClick}>{t("nav.team_building")}</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">{t("nav.contact")}</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>{t("gallery.branches.secon_bangkae")}, {t("gallery.branches.secon_srinakarin")}, {t("gallery.branches.samyan_mitrtown")}, {t("gallery.branches.phra_nakhon")}</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>065-412-3939</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="12" fill="#00C300"/>
                  <path d="M18.5 11.2c0-3.4-3.4-6.2-7.5-6.2s-7.5 2.8-7.5 6.2c0 3.1 2.7 5.7 6.4 6.1.2 0 .6.1.7.3 0 .1 0 .4 0 .6v.3c0 .1 0 .4.4.2.5-.2 2.8-1.6 3.9-2.8 1.4-1.5 2-3.1 2-4.7zm-11.8 1.3h-1.5c-.1 0-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1h1.5c.1 0 .1.1.1.1s-.1.1-.1.1H5.4v.9h1.3c.1 0 .1.1.1.1s-.1.1-.1.1H5.4v.9h1.3c.1 0 .1.1.1.1s-.1.1-.1.1zm1.3 0h-.1c-.1 0-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1s.1.1.1.1v2.3c0 .1-.1.1-.1.1zm3.1 0h-1.4c-.1 0-.1-.1-.1-.1l-1.5-1.7v1.7c0 .1-.1.1-.1.1s-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1h.1l1.5 1.7v-1.6c0-.1.1-.1.1-.1s.1.1.1.1v2.3c0 .1-.1.1-.1.1zm3.4 0h-1.5c-.1 0-.1-.1-.1-.1v-2.3c0-.1.1-.1.1-.1h1.5c.1 0 .1.1.1.1s-.1.1-.1.1h-1.2v.9h1.2c.1 0 .1.1.1.1s-.1.1-.1.1h-1.2v.9h1.2c.1 0 .1.1.1.1s-.1.1-.1.1z" fill="white"/>
                </svg>
                <span>@nkboardgame</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>10:00 - 22:00 ({isEnglish ? "Daily" : "ทุกวัน"})</span>
              </div>
            </div>

            {/* Language Switcher in Footer */}
            <div className="footer-language mt-4">
              <LanguageSwitcher showIcon={true} />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;