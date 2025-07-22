import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          {/* Company Info */}
          <div className="footer-section">
            <div className="footer-logo">
              <div className="logo-text">
                <span className="logo-nk">NK</span>
                <span className="logo-board">BOARD GAME</span>
              </div>
            </div>
            <p className="footer-description">
              ร้านบอร์ดเกมที่ให้บริการครบครัน พร้อมสร้างประสบการณ์สนุกสนานให้กับคุณและเพื่อน ๆ
            </p>
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook size={20} />
              </a>
              <a href="#" className="social-link">
                <Instagram size={20} />
              </a>
              <a href="#" className="social-link">
                <Twitter size={20} />
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
                <span>สยามสแควร์, เซ็นทรัลเวอร์ลด์, เมกะ บางนา</span>
              </div>
              <div className="contact-item">
                <Phone size={16} />
                <span>02-123-4567</span>
              </div>
              <div className="contact-item">
                <Mail size={16} />
                <span>info@nkboardgame.com</span>
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