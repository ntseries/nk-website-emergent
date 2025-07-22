import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin, Phone, Clock, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <svg width="160" height="48" viewBox="0 0 160 48" className="footer-logo-svg">
                {/* Blue Background Shape */}
                <path d="M8 8 Q8 4 12 4 L145 4 Q150 4 155 8 L155 36 Q155 40 150 40 L12 40 Q8 40 8 36 Z" fill="#3B4CCA"/>
                
                {/* NK Letters in 3D Style */}
                <g transform="translate(12, 10)">
                  {/* N Letter */}
                  <path d="M0 0 L6 0 L6 20 L14 4 L20 4 L20 24 L14 24 L14 6 L6 22 L0 22 Z" fill="#87CEEB"/>
                  <path d="M1 1 L5 1 L5 18 L13 5 L19 5 L19 22 L15 22 L15 8 L7 21 L1 21 Z" fill="#FFFFFF"/>
                  
                  {/* K Letter */}
                  <path d="M24 0 L30 0 L30 10 L36 0 L44 0 L36 11 L45 24 L37 24 L32 14 L30 14 L30 24 L24 24 Z" fill="#3B4CCA"/>
                  <path d="M25 1 L29 1 L29 11 L35 1 L43 1 L35 12 L44 22 L36 22 L30 12 L29 12 L29 22 L25 22 Z" fill="#87CEEB"/>
                </g>
                
                {/* Meeple Character */}
                <g transform="translate(88, 6)">
                  {/* Game Board Base */}
                  <rect x="-6" y="16" width="18" height="6" rx="1.5" fill="#FFFFFF" stroke="#8B4513" strokeWidth="0.8"/>
                  <rect x="-4" y="17" width="14" height="3" fill="#F0F0F0"/>
                  <line x1="-4" y1="18.5" x2="10" y2="18.5" stroke="#8B4513" strokeWidth="0.3"/>
                  <line x1="3" y1="17" x2="3" y2="20" stroke="#8B4513" strokeWidth="0.3"/>
                  
                  {/* Meeple Body */}
                  <ellipse cx="3" cy="12" rx="4.5" ry="6" fill="#87CEEB"/>
                  <ellipse cx="3" cy="12" rx="3.5" ry="5" fill="#B0E0E6"/>
                  
                  {/* Meeple Head */}
                  <circle cx="3" cy="5" r="3.5" fill="#87CEEB"/>
                  <circle cx="3" cy="5" r="2.8" fill="#B0E0E6"/>
                  
                  {/* Face */}
                  <circle cx="1.5" cy="4" r="0.7" fill="#8B4513"/>
                  <circle cx="4.5" cy="4" r="0.7" fill="#8B4513"/>
                  <path d="M1.5 6 Q3 7.5 4.5 6" stroke="#8B4513" strokeWidth="0.8" fill="none"/>
                  
                  {/* Arms */}
                  <ellipse cx="-1" cy="9" rx="1.5" ry="3.5" fill="#87CEEB"/>
                  <ellipse cx="7" cy="9" rx="1.5" ry="3.5" fill="#87CEEB"/>
                  
                  {/* Dice in left hand */}
                  <g transform="translate(-4, 6)">
                    <rect x="0" y="0" width="3" height="3" rx="0.3" fill="#FFFFFF" stroke="#8B4513" strokeWidth="0.3"/>
                    <circle cx="0.7" cy="0.7" r="0.2" fill="#8B4513"/>
                    <circle cx="2.3" cy="2.3" r="0.2" fill="#8B4513"/>
                    <circle cx="0.7" cy="2.3" r="0.2" fill="#8B4513"/>
                  </g>
                  
                  {/* Cards in right hand */}
                  <g transform="translate(9, 7)">
                    <rect x="0" y="0" width="2.5" height="3" rx="0.2" fill="#FF6B35"/>
                    <rect x="0.8" y="-0.8" width="2.5" height="3" rx="0.2" fill="#F7931E"/>
                    <rect x="1.6" y="-1.6" width="2.5" height="3" rx="0.2" fill="#FFD700"/>
                  </g>
                </g>
                
                {/* BOARD GAME Text */}
                <g transform="translate(12, 32)">
                  <text x="0" y="0" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="#FFD700">BOARD</text>
                  <text x="40" y="0" fontFamily="Arial, sans-serif" fontWeight="bold" fontSize="10" fill="#F7931E">GAME</text>
                </g>
                
                {/* Red Game Pawn */}
                <g transform="translate(4, 28)">
                  <circle cx="0" cy="0" r="2" fill="#DC143C"/>
                  <ellipse cx="0" cy="-1.5" rx="1" ry="1.5" fill="#B22222"/>
                  <circle cx="0" cy="-3" r="0.7" fill="#DC143C"/>
                </g>
                
                {/* Yellow Stars/Sparkles */}
                <g fill="#FFD700">
                  <path d="M135 12 L136.5 14 L138.5 14 L137 15.5 L137.5 17.5 L135 16.5 L132.5 17.5 L133 15.5 L131.5 14 L133.5 14 Z"/>
                  <circle cx="145" cy="20" r="1"/>
                  <path d="M140 28 L141 30 L143 30 L141.5 31.5 L142 33.5 L140 32.5 L138 33.5 L138.5 31.5 L137 30 L139 30 Z"/>
                </g>
              </svg>
            </div>
            <p className="footer-description">
              ร้านบอร์ดเกมที่ให้บริการครบครัน พร้อมสร้างประสบการณ์สนุกสนานให้กับคุณและเพื่อน ๆ
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
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3 className="footer-title">เมนูหลัก</h3>
            <ul className="footer-links">
              <li><Link to="/">หน้าแรก</Link></li>
              <li><Link to="/about">เกี่ยวกับเรา</Link></li>
              <li><Link to="/services">บริการ</Link></li>
              <li><Link to="/activities">กิจกรรม</Link></li>
              <li><Link to="/contact">ติดต่อสาขา</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3 className="footer-title">บริการของเรา</h3>
            <ul className="footer-links">
              <li><Link to="/services/play-at-shop">เล่นที่ร้าน</Link></li>
              <li><Link to="/services/board-game-script">Board Game Script</Link></li>
              <li><Link to="/services/dungeons-dragons">Dungeons & Dragons</Link></li>
              <li><Link to="/services/photo-booth">Photo Booth</Link></li>
              <li><Link to="/services/food-drink">Food & Drink</Link></li>
              <li><Link to="/services/team-building">Team Building</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-section">
            <h3 className="footer-title">ติดต่อเรา</h3>
            <div className="contact-info">
              <div className="contact-item">
                <MapPin size={16} />
                <span>ซีคอนบางแค, ซีคอนศรีนครินทร์, สามย่านมิตรทาวน์</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>065-412-3939</span>
              </div>
              <div className="contact-item">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                </svg>
                <span>@nkboardgame</span>
              </div>
              <div className="contact-item">
                <Clock size={16} />
                <span>10:00 - 22:00 (ทุกวัน)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p>&copy; 2025 NK Board Game. สงวนลิขสิทธิ์ทุกประการ</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;