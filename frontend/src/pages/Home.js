import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Star, Gamepad2, ScrollText, Shield, Camera, Coffee, UsersIcon } from "lucide-react";
import { services, testimonials } from "../data/mock";

const Home = () => {
  const heroServices = services.slice(0, 3);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ ร้านบอร์ดเกมอันดับ 1 ในใจวัยรุ่น</span>
          </div>
          <h1 className="hero-title">
            สนุกสนาน <span className="hero-highlight">ไปด้วยกัน</span><br />
            ที่ NK Board Game
          </h1>
          <p className="hero-subtitle">
            สนุกทุกเกม ประทับใจทุกสาขา – พบประสบการณ์บอร์ดเกมที่แตกต่างได้ที่ NK Board Game
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">
              เริ่มเล่นเลย <ArrowRight size={16} />
            </Link>
            <Link to="/about" className="btn-secondary">
              เรียนรู้เพิ่มเติม
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">เกมให้เลือก</div>
            </div>
            <div className="stat">
              <div className="stat-number">3</div>
              <div className="stat-label">สาขาในกรุงเทพ</div>
            </div>
            <div className="stat">
              <div className="stat-number">10K+</div>
              <div className="stat-label">ลูกค้าที่พอใจ</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">บริการที่คุณจะหลงรัก</h2>
            <p className="section-subtitle">
              ทุกบริการถูกออกแบบมาเพื่อให้คุณได้สนุกอย่างเต็มที่
            </p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = {
                "gamepad-2": Gamepad2,
                "scroll-text": ScrollText,
                "shield": Shield,
                "camera": Camera,
                "coffee": Coffee,
                "users": UsersIcon
              }[service.icon];

              return (
                <div key={service.id} className="service-card">
                  <div className="service-icon">
                    <IconComponent size={24} />
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-price">{service.price}</div>
                  <Link to={`/services/${service.title.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '')}`} 
                        className="service-link">
                    เรียนรู้เพิ่มเติม <ArrowRight size={14} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">สิ่งที่ลูกค้าพูดถึงเรา</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
                  <div className="author-age">อายุ {testimonial.age} ปี</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมเริ่มผจญภัยแล้วหรือยัง?</h2>
            <p className="cta-description">
              มาสร้างความทรงจำสุดพิเศษกับเพื่อน ๆ ที่ NK Board Game วันนี้
            </p>
            <div className="cta-actions">
              <Link to="/contact" className="btn-primary">
                ติดต่อเราเลย <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary">
                ดูบริการทั้งหมด
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;