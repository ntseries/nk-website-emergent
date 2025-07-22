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
              <div className="logo-container">
                <div className="logo-main">
                  <span className="logo-nk">NK</span>
                  <div className="logo-meeple">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#87CEEB">
                      <path d="M12 2C10.9 2 10 2.9 10 4C10 5.1 10.9 6 12 6C13.1 6 14 5.1 14 4C14 2.9 13.1 2 12 2M21 9V7L15 1H5C3.9 1 3 1.9 3 3V21C3 22.1 3.9 23 5 23H19C20.1 23 21 22.1 21 21V9H21Z"/>
                    </svg>
                  </div>
                </div>
                <div className="logo-sub">BOARD GAME</div>
              </div>
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