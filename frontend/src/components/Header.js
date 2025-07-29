import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  const isActive = (path) => {
    if (isEnglish) {
      return location.pathname === `/en${path}` || (path === "/" && location.pathname === "/en");
    }
    return location.pathname === path;
  };

  const getLocalizedPath = (path) => {
    if (isEnglish) {
      return path === "/" ? "/en" : `/en${path}`;
    }
    return path;
  };

  // Function to handle navigation clicks
  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu
    setIsServicesOpen(false); // Close services dropdown
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  const serviceItems = [
    { title: t("nav.play_at_shop"), path: "/services/play-at-shop" },
    { title: t("nav.board_game_script"), path: "/services/board-game-script" },
    { title: t("nav.photo_booth"), path: "/services/photo-booth" },
    { title: t("nav.nk_cafe"), path: "/services/food-drink" },
    { title: t("nav.team_building"), path: "/services/team-building" }
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="nav-wrapper">
          {/* Logo */}
          <Link to="/" className="logo" onClick={handleNavClick}>
            <img 
              src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/nk_logo_transparent.png"
              alt="NK Board Game"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`} onClick={handleNavClick}>
              หน้าแรก
            </Link>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`} onClick={handleNavClick}>
              เกี่ยวกับเรา
            </Link>
            
            {/* Services Dropdown */}
            <div 
              className="nav-dropdown"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className={`nav-link dropdown-trigger ${location.pathname.startsWith("/services") ? "active" : ""}`}>
                บริการ <ChevronDown className="dropdown-icon" size={16} />
              </button>
              {isServicesOpen && (
                <div className="dropdown-menu">
                  {serviceItems.map((item) => (
                    <Link
                      key={item.path}
                      to={item.path}
                      className="dropdown-item"
                      onClick={handleNavClick}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`} onClick={handleNavClick}>
              ติดต่อสาขา
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="mobile-menu-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="nav-mobile">
            <Link to="/" className={`nav-link-mobile ${isActive("/") ? "active" : ""}`} onClick={handleNavClick}>
              หน้าแรก
            </Link>
            <Link to="/about" className={`nav-link-mobile ${isActive("/about") ? "active" : ""}`} onClick={handleNavClick}>
              เกี่ยวกับเรา
            </Link>
            
            <div className="nav-section-mobile">
              <span className="nav-section-title">บริการ</span>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link-mobile sub ${isActive(item.path) ? "active" : ""}`}
                  onClick={handleNavClick}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Link to="/contact" className={`nav-link-mobile ${isActive("/contact") ? "active" : ""}`} onClick={handleNavClick}>
              ติดต่อสาขา
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;