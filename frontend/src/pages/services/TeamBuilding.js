import React from "react";
import { Clock, Users, Star, ArrowRight, Trophy, Target, Heart } from "lucide-react";

const TeamBuilding = () => {
  const packages = [
    {
      name: "Mini Team Building",
      duration: "2 ชั่วโมง",
      participants: "8-15 คน",
      games: "3-4 เกม",
      price: "500 บาท/คน",
      description: "เหมาะสำหรับทีมเล็ก หรือการทำกิจกรรมช่วงพักเบรก"
    },
    {
      name: "Standard Package", 
      duration: "4 ชั่วโมง",
      participants: "15-30 คน",
      games: "6-8 เกม",
      price: "750 บาท/คน",
      description: "แพ็คเกจยอดนิยม เหมาะสำหรับบริษัทและองค์กรขนาดกลาง",
      popular: true
    },
    {
      name: "Premium Experience",
      duration: "6 ชั่วโมง",
      participants: "20-50 คน",
      games: "10+ เกม",
      price: "1,200 บาท/คน",
      description: "ประสบการณ์เต็มรูปแบบ รวมอาหาร เครื่องดื่ม และของที่ระลึก"
    }
  ];

  const activities = [
    {
      category: "🤝 สร้างความสัมพันธ์",
      games: ["Wavelength", "Just One", "Telestrations", "Spaceteam"]
    },
    {
      category: "🧠 แก้ปัญหาร่วมกัน", 
      games: ["Pandemic", "Forbidden Island", "The Mind", "Hanabi"]
    },
    {
      category: "💬 สื่อสารและความเข้าใจ",
      games: ["Codenames", "Concept", "Dixit", "Mysterium"]
    },
    {
      category: "🎯 ภาวะผู้นำ",
      games: ["Captain Sonar", "Space Team", "The Resistance", "One Night Ultimate Werewolf"]
    }
  ];

  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Users size={16} />
                <span>สร้างทีมเวิร์ค</span>
              </div>
              <h1 className="service-title">Team Building</h1>
              <p className="service-description">
                กิจกรรมสร้างทีมเวิร์คผ่านบอร์ดเกม เหมาะสำหรับองค์กรและกลุ่มเพื่อน 
                พัฒนาความสัมพันธ์ การสื่อสาร และการทำงานเป็นทีม
              </p>
              <div className="service-price">
                <span className="price-value">500 บาท</span>
                <span className="price-unit">/คน</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary">
                  สอบถามโปรแกรม <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  ดูตัวอย่างกิจกรรม
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop" 
                alt="Team Building"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ประโยชน์ของ Team Building</h2>
            <p className="section-subtitle">
              เสริมสร้างทีมเวิร์คผ่านกิจกรรมที่สนุกและมีประสิทธิภาพ
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Heart size={32} />
              </div>
              <h3>สร้างความสัมพันธ์</h3>
              <p>เสริมสร้างความผูกพันและความเข้าใจกันระหว่างสมาชิกในทีม</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Target size={32} />
              </div>
              <h3>พัฒนาการสื่อสาร</h3>
              <p>ฝึกทักษะการสื่อสารที่ชัดเจนและมีประสิทธิภาพ</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Trophy size={32} />
              </div>
              <h3>เสริมสร้างขวัญกำลังใจ</h3>
              <p>สร้างบรรยากาศที่ดี เพิ่มความสุขในการทำงาน</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3>ทีมเวิร์คที่แข็งแกร่ง</h3>
              <p>เรียนรู้การทำงานร่วมกันและการแก้ปัญหาเป็นทีม</p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">แพ็คเกจ Team Building</h2>
            <p className="section-subtitle">
              เลือกแพ็คเกจที่เหมาะกับจำนวนคนและงบประมาณของคุณ
            </p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-card ${pkg.popular ? 'featured' : ''}`}>
                {pkg.popular && <div className="package-badge">ยอดนิยม</div>}
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <p className="package-description">{pkg.description}</p>
                <div className="package-details">
                  <div className="package-detail">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="package-detail">
                    <Users size={16} />
                    <span>{pkg.participants}</span>
                  </div>
                  <div className="package-detail">
                    <Trophy size={16} />
                    <span>{pkg.games}</span>
                  </div>
                </div>
                <button className="package-select-btn">เลือกแพ็คเกจนี้</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section className="activities-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">กิจกรรมและเกม</h2>
            <p className="section-subtitle">
              เกมที่คัดสรรมาเฉพาะเพื่อพัฒนาทักษะต่างๆ ของทีม
            </p>
          </div>
          <div className="activities-grid">
            {activities.map((activity, index) => (
              <div key={index} className="activity-category-card">
                <h3 className="category-title">{activity.category}</h3>
                <div className="games-list">
                  {activity.games.map((game, gameIndex) => (
                    <div key={gameIndex} className="game-item">
                      <span className="game-name">{game}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ขั้นตอนการจัดกิจกรรม</h2>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="step-number">1</div>
              <div className="step-content">
                <h3>ปรึกษาและวางแผน</h3>
                <p>สอบถามความต้องการ จำนวนคน งบประมาณ และวัตถุประสงค์</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <div className="step-content">
                <h3>ออกแบบโปรแกรม</h3>
                <p>เลือกเกมและกิจกรรมที่เหมาะกับทีมและเป้าหมายของคุณ</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <div className="step-content">
                <h3>จัดกิจกรรม</h3>
                <p>ทีมงาน Facilitator มืออาชีพจะคอยดูแลและอำนวยความสะดวก</p>
              </div>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <div className="step-content">
                <h3>สรุปผลและประเมิน</h3>
                <p>วิเคราะห์ผลและให้คำแนะนำเพื่อพัฒนาทีมต่อไป</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">รีวิวจากลูกค้าองค์กร</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "กิจกรรมดีมาก ทีมผมสนิทกันมากขึ้น ทำงานร่วมกันได้ดีขึ้นชัดเจน แนะนำเลย!"
              </p>
              <div className="testimonial-author">
                <div className="author-name">คุณสมชาย</div>
                <div className="author-age">HR Manager • บริษัท ABC</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "พนักงานในทีมได้รู้จักกันมากขึ้น การสื่อสารดีขึ้น บรรยากาศการทำงานเปลี่ยนไปในทางที่ดี"
              </p>
              <div className="testimonial-author">
                <div className="author-name">คุณวิไล</div>
                <div className="author-age">Team Leader • บริษัท XYZ</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "ทีม Facilitator มืออาชีพมาก รู้จังหวะดี ทำให้กิจกรรมสนุกและได้ประโยชน์จริงๆ"
              </p>
              <div className="testimonial-author">
                <div className="author-name">คุณณัฐ</div>
                <div className="author-age">Project Manager • Startup DEF</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="custom-section">
        <div className="container">
          <div className="custom-content">
            <div className="custom-text">
              <h2 className="section-title">โซลูชันเฉพาะองค์กร</h2>
              <p>
                เรามีบริการออกแบบกิจกรรมเฉพาะตามความต้องการขององค์กร 
                ไม่ว่าจะเป็นการแก้ปัญหาเฉพาะ หรือเสริมสร้างทักษะที่ต้องการ
              </p>
              <div className="custom-features">
                <div className="custom-feature">
                  <span>🎯</span>
                  <p>วิเคราะห์ปัญหาและออกแบบกิจกรรม</p>
                </div>
                <div className="custom-feature">
                  <span>📊</span>
                  <p>มีการประเมินผลและติดตามหลังกิจกรรม</p>
                </div>
                <div className="custom-feature">
                  <span>👥</span>
                  <p>Facilitator ที่มีประสบการณ์เฉพาะด้าน</p>
                </div>
              </div>
              <button className="btn-primary">
                ขอคำปรึกษา <ArrowRight size={16} />
              </button>
            </div>
            <div className="custom-image">
              <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop" 
                alt="โซลูชันเฉพาะองค์กร"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="booking-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ข้อมูลการจอง</h2>
          </div>
          <div className="booking-cards">
            <div className="booking-card">
              <h3>📅 การจองล่วงหน้า</h3>
              <p>แนะนำให้จองล่วงหน้าอย่างน้อย 2 สัปดาห์ เพื่อการเตรียมการที่ดีที่สุด</p>
            </div>
            <div className="booking-card">
              <h3>⏰ เวลาที่เหมาะสม</h3>
              <p>เช้า 9:00-12:00 หรือ บ่าย 13:00-17:00 เหมาะสำหรับกิจกรรมองค์กร</p>
            </div>
            <div className="booking-card">
              <h3>👥 จำนวนคนขั้นต่ำ</h3>
              <p>รับจัดกิจกรรมตั้งแต่ 8 คนขึ้นไป สูงสุด 50 คนต่อรอบ</p>
            </div>
            <div className="booking-card">
              <h3>💰 การชำระเงิน</h3>
              <p>มัดจำ 30% เมื่อยืนยันการจอง ส่วนที่เหลือชำระในวันจัดกิจกรรม</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมสร้างทีมที่แข็งแกร่งแล้วหรือยัง?</h2>
            <p className="cta-description">
              ติดต่อเราเพื่อขอคำปรึกษาและวางแผนกิจกรรม Team Building ที่เหมาะกับองค์กรของคุณ
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                สอบถามรายละเอียด <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                โทร 02-123-4567
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamBuilding;