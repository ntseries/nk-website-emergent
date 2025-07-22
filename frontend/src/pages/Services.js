import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Gamepad2, ScrollText, Shield, Camera, Coffee, Users } from "lucide-react";
import { services } from "../data/mock";

const Services = () => {
  const getIconComponent = (iconName) => {
    const icons = {
      "gamepad-2": Gamepad2,
      "scroll-text": ScrollText,
      "shield": Shield,
      "camera": Camera,
      "coffee": Coffee,
      "users": Users
    };
    return icons[iconName] || Gamepad2;
  };

  const getServiceSlug = (title) => {
    return title.toLowerCase()
      .replace(/\s+/g, '-')
      .replace(/&/g, '')
      .replace(/dungeons-dragons/, 'dungeons-dragons');
  };

  return (
    <div className="services-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            บริการของ <span className="hero-highlight">NK Board Game</span>
          </h1>
          <p className="hero-subtitle">
            ค้นพบบริการครบครันที่จะทำให้การเล่นเกมของคุณสนุกและน่าจดจำ<br />
            พร้อมประสบการณ์ที่ไม่เหมือนใครสำหรับทุกคน
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-section">
        <div className="container">
          <div className="services-grid-detailed">
            {services.map((service) => {
              const IconComponent = getIconComponent(service.icon);
              const slug = getServiceSlug(service.title);
              
              return (
                <div key={service.id} className="service-card-detailed">
                  <div className="service-image">
                    <img src={service.image} alt={service.title} />
                    <div className="service-overlay">
                      <div className="service-icon">
                        <IconComponent size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="service-content">
                    <h3 className="service-title">{service.title}</h3>
                    <p className="service-description">{service.description}</p>
                    <div className="service-price-tag">
                      <span className="price-label">ราคาเริ่มต้น</span>
                      <span className="price-value">{service.price}</span>
                    </div>
                    <Link 
                      to={`/services/${slug}`} 
                      className="service-button"
                    >
                      เรียนรู้เพิ่มเติม <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ทำไมต้องเลือก NK Board Game?</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-number">1,000+</div>
              <h3 className="feature-title">เกมให้เลือก</h3>
              <p className="feature-description">
                คอลเลกชันเกมมากกว่า 1,000+ เกมจากทั่วโลก ตั้งแต่เกมง่ายๆ ไปจนถึงเกมซับซ้อน
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">24/7</div>
              <h3 className="feature-title">รองรับการจอง</h3>
              <p className="feature-description">
                ระบบจองออนไลน์ตลอด 24 ชั่วโมง พร้อมยืนยันการจองทันที
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">100%</div>
              <h3 className="feature-title">ความพึงพอใจ</h3>
              <p className="feature-description">
                การันตีความพึงพอใจ หรือคืนเงิน พร้อมทีมงานมืออาชีพคอยให้บริการ
              </p>
            </div>
            <div className="feature-item">
              <div className="feature-number">3</div>
              <h3 className="feature-title">สาขาในกรุงเทพ</h3>
              <p className="feature-description">
                ตำแหน่งที่สะดวกในห้างดัง เดินทางง่าย จอดรถสะดวก
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมเริ่มเล่นแล้วหรือยัง?</h2>
            <p className="cta-description">
              เลือกบริการที่คุณสนใจ และมาสร้างความทรงจำดีๆ กับเพื่อนๆ
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                ติดต่อสาขา <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;