import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  // Function to handle navigation clicks
  const handleNavClick = () => {
    setIsMenuOpen(false); // Close mobile menu
    setIsServicesOpen(false); // Close services dropdown
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  const serviceItems = [
    { title: "เล่นที่ร้าน", path: "/services/play-at-shop" },
    { title: "Board Game Script", path: "/services/board-game-script" },
    { title: "Dungeons & Dragons", path: "/services/dungeons-dragons" },
    { title: "Photo Booth", path: "/services/photo-booth" },
    { title: "Food & Drink", path: "/services/food-drink" },
    { title: "Team Building", path: "/services/team-building" }
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

            <Link to="/activities" className={`nav-link ${isActive("/activities") ? "active" : ""}`} onClick={handleNavClick}>
              กิจกรรม
            </Link>
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

            <Link to="/activities" className={`nav-link-mobile ${isActive("/activities") ? "active" : ""}`} onClick={handleNavClick}>
              กิจกรรม
            </Link>
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