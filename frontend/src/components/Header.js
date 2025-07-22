import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

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
          <Link to="/" className="logo">
            <img 
              src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/logo.jpg"
              alt="NK Board Game"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="nav-desktop">
            <Link to="/" className={`nav-link ${isActive("/") ? "active" : ""}`}>
              หน้าแรก
            </Link>
            <Link to="/about" className={`nav-link ${isActive("/about") ? "active" : ""}`}>
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
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/activities" className={`nav-link ${isActive("/activities") ? "active" : ""}`}>
              กิจกรรม
            </Link>
            <Link to="/contact" className={`nav-link ${isActive("/contact") ? "active" : ""}`}>
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
            <Link to="/" className={`nav-link-mobile ${isActive("/") ? "active" : ""}`}>
              หน้าแรก
            </Link>
            <Link to="/about" className={`nav-link-mobile ${isActive("/about") ? "active" : ""}`}>
              เกี่ยวกับเรา
            </Link>
            
            <div className="nav-section-mobile">
              <span className="nav-section-title">บริการ</span>
              {serviceItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-link-mobile sub ${isActive(item.path) ? "active" : ""}`}
                >
                  {item.title}
                </Link>
              ))}
            </div>

            <Link to="/activities" className={`nav-link-mobile ${isActive("/activities") ? "active" : ""}`}>
              กิจกรรม
            </Link>
            <Link to="/contact" className={`nav-link-mobile ${isActive("/contact") ? "active" : ""}`}>
              ติดต่อสาขา
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;