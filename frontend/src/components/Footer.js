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
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/logo.jpg"
                alt="NK Board Game"
                className="footer-logo-image"
              />
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
                  <path d="M20.6 11.9c0-4.7-4.4-8.5-9.8-8.5S1 7.2 1 11.9c0 4.2 3.6 7.7 8.4 8.4.3.1.8.2.9.5.1.2.1.6.1.9l-.1.4c0 .2-.1.6.6.3.7-.3 3.7-2.2 5.1-3.8 1.9-2.1 2.6-4.2 2.6-6.7zm-15.4 1.8h-2c-.1 0-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2h2c.1 0 .2.1.2.2s-.1.2-.2.2H3.4v1.2h1.8c.1 0 .2.1.2.2s-.1.2-.2.2H3.4v1.2h2c.1 0 .2.1.2.2s-.1.2-.2.2zm1.8 0h-.2c-.1 0-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2s.2.1.2.2v3.2c0 .1-.1.2-.2.2zm4.2 0H9.4c-.1 0-.2-.1-.2-.2l-2-2.4v2.4c0 .1-.1.2-.2.2s-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2h.2c0 0 .1 0 .1.1l2 2.4v-2.3c0-.1.1-.2.2-.2s.2.1.2.2v3.1c0 .1-.1.2-.2.2zm4.6 0h-2c-.1 0-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2h2c.1 0 .2.1.2.2s-.1.2-.2.2h-1.6v1.2h1.6c.1 0 .2.1.2.2s-.1.2-.2.2h-1.6v1.2h1.6c.1 0 .2.1.2.2s-.1.2-.2.2z"/>
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
                  <path d="M20.6 11.9c0-4.7-4.4-8.5-9.8-8.5S1 7.2 1 11.9c0 4.2 3.6 7.7 8.4 8.4.3.1.8.2.9.5.1.2.1.6.1.9l-.1.4c0 .2-.1.6.6.3.7-.3 3.7-2.2 5.1-3.8 1.9-2.1 2.6-4.2 2.6-6.7zm-15.4 1.8h-2c-.1 0-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2h2c.1 0 .2.1.2.2s-.1.2-.2.2H3.4v1.2h1.8c.1 0 .2.1.2.2s-.1.2-.2.2H3.4v1.2h2c.1 0 .2.1.2.2s-.1.2-.2.2zm1.8 0h-.2c-.1 0-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2s.2.1.2.2v3.2c0 .1-.1.2-.2.2zm4.2 0H9.4c-.1 0-.2-.1-.2-.2l-2-2.4v2.4c0 .1-.1.2-.2.2s-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2h.2c0 0 .1 0 .1.1l2 2.4v-2.3c0-.1.1-.2.2-.2s.2.1.2.2v3.1c0 .1-.1.2-.2.2zm4.6 0h-2c-.1 0-.2-.1-.2-.2v-3.2c0-.1.1-.2.2-.2h2c.1 0 .2.1.2.2s-.1.2-.2.2h-1.6v1.2h1.6c.1 0 .2.1.2.2s-.1.2-.2.2h-1.6v1.2h1.6c.1 0 .2.1.2.2s-.1.2-.2.2z"/>
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