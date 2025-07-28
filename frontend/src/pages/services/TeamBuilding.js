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
                <span className="price-value">สอบถามแพ็คเกจเพิ่มเติม</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary" onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}>
                  สอบถามโปรแกรม <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  ดูตัวอย่างกิจกรรม
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-9.jpg" 
                alt="Team Building"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section team-building-benefits">
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
                <Users size={32} />
              </div>
              <h3>พัฒนาทักษะการทำงานเป็นทีม</h3>
              <p>พัฒนาความร่วมมือในการวางแผนและการตัดสินใจร่วมกันในทีม ผู้เล่นจะเรียนรู้บทบาทหน้าที่ของตน รวมถึงการสนับสนุนเพื่อนร่วมทีม</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Trophy size={32} />
              </div>
              <h3>กระตุ้นการคิดวิเคราะห์และแก้ปัญหา</h3>
              <p>ฝึกการคิดกลยุทธ์เพื่อแก้ไขปัญหา อย่างมีเหตุผลภายใต้ข้อจำกัดบางอย่าง</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Star size={32} />
              </div>
              <h3>ส่งเสริมความคิดสร้างสรรค์</h3>
              <p>ให้ผู้เล่นได้ใช้จินตนาการ พัฒนาความคิดนอกกรอบ เพื่อใช้ในการทำงานจริง</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Clock size={32} />
              </div>
              <h3>เสริมทักษะการจัดการเวลาและความกดดัน</h3>
              <p>เกมที่มีเวลาจำกัดช่วยฝึกการตัดสินใจเร็วภายใต้แรงกดดัน</p>
            </div>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ขั้นตอนการจัดกิจกรรม</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">1</div>
              </div>
              <div className="process-content">
                <h3>ปรึกษาและวางแผน</h3>
                <p>สอบถามความต้องการ จำนวนคน งบประมาณ และวัตถุประสงค์</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">2</div>
              </div>
              <div className="process-content">
                <h3>ออกแบบโปรแกรม</h3>
                <p>เลือกเกมและกิจกรรมที่เหมาะกับทีมและเป้าหมายของคุณ</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">3</div>
              </div>
              <div className="process-content">
                <h3>จัดกิจกรรม</h3>
                <p>ทีมงาน Facilitator มืออาชีพจะคอยดูแลและอำนวยความสะดวก</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">4</div>
              </div>
              <div className="process-content">
                <h3>สรุปผลและประเมิน</h3>
                <p>วิเคราะห์ผลและให้คำแนะนำเพื่อพัฒนาทีมต่อไป</p>
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
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Building-01.jpg" 
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
              <p>เช้า 9:00-12:00 หรือ บ่าย 13:00-16:00 เหมาะสำหรับกิจกรรมองค์กร</p>
            </div>
            <div className="booking-card">
              <h3>👥 จำนวนคนขั้นต่ำ</h3>
              <p>รับจัดกิจกรรมตั้งแต่ 8 คนขึ้นไป สูงสุด 50 คนต่อรอบ</p>
            </div>
            <div className="booking-card">
              <h3>💰 การชำระเงิน</h3>
              <p>มัดจำ 50% เมื่อยืนยันการจอง ส่วนที่เหลือชำระในวันจัดกิจกรรม</p>
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
              <button className="btn-primary" onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}>
                สอบถามรายละเอียด <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                โทร 065-412-3939
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamBuilding;