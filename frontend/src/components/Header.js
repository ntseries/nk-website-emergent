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
            <svg width="160" height="50" viewBox="0 0 160 50" className="logo-svg">
              {/* Background */}
              <rect x="0" y="0" width="160" height="50" rx="8" fill="#3B4CCA"/>
              
              {/* NK Text */}
              <text x="15" y="32" fontFamily="Kanit, sans-serif" fontWeight="700" fontSize="24" fill="#FFFFFF">NK</text>
              
              {/* Meeple Character */}
              <g transform="translate(50, 8)">
                <ellipse cx="10" cy="8" rx="6" ry="8" fill="#87CEEB"/>
                <circle cx="8" cy="6" r="1.5" fill="#3B4CCA"/>
                <circle cx="12" cy="6" r="1.5" fill="#3B4CCA"/>
                <ellipse cx="10" cy="9" rx="1" ry="0.5" fill="#3B4CCA"/>
                <rect x="6" y="16" width="8" height="12" rx="4" fill="#87CEEB"/>
                <rect x="4" y="20" width="4" height="8" rx="2" fill="#87CEEB"/>
                <rect x="16" y="20" width="4" height="8" rx="2" fill="#87CEEB"/>
              </g>
              
              {/* Dice */}
              <g transform="translate(75, 12)">
                <rect x="0" y="0" width="8" height="8" rx="1" fill="#FFD700" stroke="#3B4CCA" strokeWidth="0.5"/>
                <circle cx="2" cy="2" r="0.5" fill="#3B4CCA"/>
                <circle cx="6" cy="6" r="0.5" fill="#3B4CCA"/>
              </g>
              
              {/* Game Piece */}
              <g transform="translate(88, 15)">
                <polygon points="4,0 8,3 4,6 0,3" fill="#FFD700" stroke="#3B4CCA" strokeWidth="0.5"/>
              </g>
              
              {/* Board Game Text */}
              <text x="15" y="44" fontFamily="Kanit, sans-serif" fontWeight="500" fontSize="8" fill="#87CEEB" letterSpacing="1">BOARD GAME</text>
              
              {/* Decorative Elements */}
              <circle cx="140" cy="15" r="2" fill="#FFD700" opacity="0.8"/>
              <circle cx="150" cy="25" r="1.5" fill="#87CEEB" opacity="0.8"/>
              <circle cx="145" cy="35" r="1" fill="#FFD700" opacity="0.8"/>
            </svg>
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