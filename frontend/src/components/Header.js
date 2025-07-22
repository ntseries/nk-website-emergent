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
            <svg width="200" height="60" viewBox="0 0 200 60" className="logo-svg">
              {/* Blue Background Shape */}
              <path d="M10 10 Q10 5 15 5 L180 5 Q190 5 195 10 L195 45 Q195 50 190 50 L15 50 Q10 50 10 45 Z" fill="#3B4CCA"/>
              
              {/* NK Letters in 3D Style */}
              <g transform="translate(15, 12)">
                {/* N Letter */}
                <path d="M0 0 L8 0 L8 25 L18 5 L26 5 L26 30 L18 30 L18 8 L8 28 L0 28 Z" fill="#87CEEB"/>
                <path d="M2 2 L6 2 L6 23 L16 7 L24 7 L24 28 L20 28 L20 10 L10 26 L2 26 Z" fill="#FFFFFF"/>
                
                {/* K Letter */}
                <path d="M30 0 L38 0 L38 12 L46 0 L56 0 L46 14 L57 30 L47 30 L40 18 L38 18 L38 30 L30 30 Z" fill="#3B4CCA"/>
                <path d="M32 2 L36 2 L36 14 L44 2 L54 2 L44 16 L55 28 L45 28 L38 16 L36 16 L36 28 L32 28 Z" fill="#87CEEB"/>
              </g>
              
              {/* Meeple Character */}
              <g transform="translate(110, 8)">
                {/* Game Board Base */}
                <rect x="-8" y="20" width="24" height="8" rx="2" fill="#FFFFFF" stroke="#8B4513" strokeWidth="1"/>
                <rect x="-6" y="22" width="20" height="4" fill="#F0F0F0"/>
                <line x1="-6" y1="24" x2="14" y2="24" stroke="#8B4513" strokeWidth="0.5"/>
                <line x1="4" y1="22" x2="4" y2="26" stroke="#8B4513" strokeWidth="0.5"/>
                
                {/* Meeple Body */}
                <ellipse cx="4" cy="15" rx="6" ry="8" fill="#87CEEB"/>
                <ellipse cx="4" cy="15" rx="5" ry="7" fill="#B0E0E6"/>
                
                {/* Meeple Head */}
                <circle cx="4" cy="6" r="5" fill="#87CEEB"/>
                <circle cx="4" cy="6" r="4" fill="#B0E0E6"/>
                
                {/* Face */}
                <circle cx="2" cy="5" r="1" fill="#8B4513"/>
                <circle cx="6" cy="5" r="1" fill="#8B4513"/>
                <path d="M2 8 Q4 10 6 8" stroke="#8B4513" strokeWidth="1" fill="none"/>
                
                {/* Arms */}
                <ellipse cx="-2" cy="12" rx="2" ry="5" fill="#87CEEB"/>
                <ellipse cx="10" cy="12" rx="2" ry="5" fill="#87CEEB"/>
                
                {/* Dice in left hand */}
                <g transform="translate(-6, 8)">
                  <rect x="0" y="0" width="4" height="4" rx="0.5" fill="#FFFFFF" stroke="#8B4513" strokeWidth="0.5"/>
                  <circle cx="1" cy="1" r="0.3" fill="#8B4513"/>
                  <circle cx="3" cy="3" r="0.3" fill="#8B4513"/>
                  <circle cx="1" cy="3" r="0.3" fill="#8B4513"/>
                  <circle cx="3" cy="1" r="0.3" fill="#8B4513"/>
                </g>
                
                {/* Cards in right hand */}
                <g transform="translate(12, 9)">
                  <rect x="0" y="0" width="3" height="4" rx="0.3" fill="#FF6B35"/>
                  <rect x="1" y="-1" width="3" height="4" rx="0.3" fill="#F7931E"/>
                  <rect x="2" y="-2" width="3" height="4" rx="0.3" fill="#FFD700"/>
                </g>
              </g>
              
              {/* BOARD GAME Text */}
              <g transform="translate(15, 40)">
                <text x="0" y="0" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#FFD700">BOARD</text>
                <text x="60" y="0" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="14" fill="#F7931E">GAME</text>
              </g>
              
              {/* Red Game Pawn */}
              <g transform="translate(5, 35)">
                <circle cx="0" cy="0" r="3" fill="#DC143C"/>
                <ellipse cx="0" cy="-2" rx="1.5" ry="2" fill="#B22222"/>
                <circle cx="0" cy="-4" r="1" fill="#DC143C"/>
              </g>
              
              {/* Yellow Stars/Sparkles */}
              <g fill="#FFD700">
                <path d="M170 15 L172 18 L175 18 L172.5 20 L173.5 23 L170 21 L166.5 23 L167.5 20 L165 18 L168 18 Z"/>
                <circle cx="185" cy="25" r="1.5"/>
                <path d="M175 35 L176 37 L178 37 L176.5 38.5 L177 40.5 L175 39.5 L173 40.5 L173.5 38.5 L172 37 L174 37 Z"/>
              </g>
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