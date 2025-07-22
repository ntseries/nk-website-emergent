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
              <div className="stat-number">50K+</div>
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
                    ดูรายละเอียดเพิ่มเติม <ArrowRight size={14} />
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

      {/* Gallery Section - บรรยากาศความสนุก */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">บรรยากาศความสนุก</h2>
            <p className="section-subtitle">
              เสียงหัวเราะและความสนุกสนานจากลูกค้าที่มาเล่นที่ NK Board Game
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop" alt="ลูกค้าเล่นบอร์ดเกมอย่างสนุกสนาน" />
              <div className="gallery-overlay">
                <div className="gallery-caption">เพื่อนๆ สนุกกับเกมกลยุทธ์</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" alt="บรรยากาศภายในร้าน" />
              <div className="gallery-overlay">
                <div className="gallery-caption">บรรยากาศสบายๆ ในร้าน</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?w=600&h=400&fit=crop" alt="ครอบครัวเล่นเกมด้วยกัน" />
              <div className="gallery-overlay">
                <div className="gallery-caption">ครอบครัวสนุกไปด้วยกัน</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop" alt="กิจกรรม Photo Booth" />
              <div className="gallery-overlay">
                <div className="gallery-caption">Photo Booth สุดเจ๋ง</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop" alt="อาหารและเครื่องดื่ม" />
              <div className="gallery-overlay">
                <div className="gallery-caption">อาหารและเครื่องดื่มอร่อย</div>
              </div>
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop" alt="Team Building Activity" />
              <div className="gallery-overlay">
                <div className="gallery-caption">กิจกรรม Team Building</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;