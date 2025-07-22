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
                  <path d="M12.04 2.5c-5.45 0-9.87 4.14-9.87 9.24 0 4.57 4.05 8.4 9.53 9.14.37-.08.87-.26.99-.59.11-.3.07-.8.03-1.13l-.18-.75c-.03-.1-.14-.16-.24-.12-.65.35-1.33.53-2.07.53-2.77 0-5.02-2.11-5.02-4.71S7.25 9.4 10.02 9.4s5.02 2.11 5.02 4.71c0 1.37-.6 2.6-1.55 3.44-.28.25-.37.68-.22 1.02.15.34.51.56.9.56 1.73 0 3.13-1.32 3.13-2.94 0-5.1-4.42-9.24-9.87-9.24zm-3.6 7.8c-.22 0-.4.18-.4.4v2.15c0 .22.18.4.4.4h2.15c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H8.84v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H8.84v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H8.44zm4.4-.4c-.22 0-.4.18-.4.4v2.95c0 .22.18.4.4.4s.4-.18.4-.4V9.9zm2.16 0c-.22 0-.4.18-.4.4v2.95c0 .14.07.26.18.33.11.07.25.08.37.02l1.95-1v2.2c0 .22.18.4.4.4s.4-.18.4-.4V9.9c0-.14-.07-.26-.18-.33-.11-.07-.25-.08-.37-.02l-1.95 1V9.9c0-.22-.18-.4-.4-.4zm5.6 0c-.22 0-.4.18-.4.4v2.15c0 .22.18.4.4.4h2.15c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H20v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H20v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H19.6z"/>
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
                  <path d="M12.04 2.5c-5.45 0-9.87 4.14-9.87 9.24 0 4.57 4.05 8.4 9.53 9.14.37-.08.87-.26.99-.59.11-.3.07-.8.03-1.13l-.18-.75c-.03-.1-.14-.16-.24-.12-.65.35-1.33.53-2.07.53-2.77 0-5.02-2.11-5.02-4.71S7.25 9.4 10.02 9.4s5.02 2.11 5.02 4.71c0 1.37-.6 2.6-1.55 3.44-.28.25-.37.68-.22 1.02.15.34.51.56.9.56 1.73 0 3.13-1.32 3.13-2.94 0-5.1-4.42-9.24-9.87-9.24zm-3.6 7.8c-.22 0-.4.18-.4.4v2.15c0 .22.18.4.4.4h2.15c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H8.84v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H8.84v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H8.44zm4.4-.4c-.22 0-.4.18-.4.4v2.95c0 .22.18.4.4.4s.4-.18.4-.4V9.9zm2.16 0c-.22 0-.4.18-.4.4v2.95c0 .14.07.26.18.33.11.07.25.08.37.02l1.95-1v2.2c0 .22.18.4.4.4s.4-.18.4-.4V9.9c0-.14-.07-.26-.18-.33-.11-.07-.25-.08-.37-.02l-1.95 1V9.9c0-.22-.18-.4-.4-.4zm5.6 0c-.22 0-.4.18-.4.4v2.15c0 .22.18.4.4.4h2.15c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H20v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H20v-.55h1.6c.22 0 .4-.18.4-.4s-.18-.4-.4-.4H19.6z"/>
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