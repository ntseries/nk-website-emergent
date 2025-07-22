import React from "react";
import { Clock, Users, Star, ArrowRight, Shield, Sword, Zap } from "lucide-react";

const DungeonsAndDragons = () => {
  const campaigns = [
    {
      name: "Lost Mine of Phandelver",
      level: "ระดับ 1-5",
      duration: "4-6 เซสชัน",
      description: "การผจญภัยคลาสสิกสำหรับผู้เล่นใหม่ ค้นหาเหมืองที่สูญหายและเผชิญกับ Black Spider"
    },
    {
      name: "Curse of Strahd", 
      level: "ระดับ 3-10",
      duration: "8-12 เซสชัน",
      description: "การผจญภัยสุดระทึกในดินแดน Barovia พร้อมเผชิญหน้ากับ Vampire Lord Strahd"
    },
    {
      name: "Custom Adventure",
      level: "ทุกระดับ",
      duration: "ตามความต้องการ",
      description: "การผจญภัยที่ออกแบบเฉพาะสำหรับกลุ่มของคุณ ปรับเนื้อหาตามความชอบ"
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
                <Shield size={16} />
                <span>การผจญภัย</span>
              </div>
              <h1 className="service-title">Dungeons & Dragons</h1>
              <p className="service-description">
                เซสชัน D&D สำหรับผู้เล่นทุกระดับ พร้อม Dungeon Master มืออาชีพ อุปกรณ์ครบครัน 
                และการผจญภัยที่จะทำให้คุณไม่มีวันลืม
              </p>
              <div className="service-price">
                <span className="price-value">300 บาท</span>
                <span className="price-unit">/เซสชัน</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary">
                  เข้าร่วมเซสชัน <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  เรียนรู้วิธีเล่น
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" 
                alt="Dungeons & Dragons"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">ประสบการณ์ D&D ที่แท้จริง</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Shield size={32} />
              </div>
              <h3>Dungeon Master มืออาชีพ</h3>
              <p>DM ที่มีประสบการณ์มากกว่า 5 ปี พร้อมสร้างเรื่องราวที่น่าตื่นเต้น</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Sword size={32} />
              </div>
              <h3>อุปกรณ์ครบครัน</h3>
              <p>ลูกเต๋าครบชุด, Character Sheet, Miniatures, และ Battle Map</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>เหมาะกับทุกระดับ</h3>
              <p>รองรับทั้งผู้เล่นใหม่และผู้เล่นมืออาชีพ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Zap size={32} />
              </div>
              <h3>เรื่องราวที่หลากหลาย</h3>
              <p>มี Campaign และ One-Shot Adventure ให้เลือกหลายแบบ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Campaign Options */}
      <section className="campaigns-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Campaign ที่เปิดให้บริการ</h2>
            <p className="section-subtitle">
              เลือกการผจญภัยที่เหมาะกับระดับและความสนใจของคุณ
            </p>
          </div>
          <div className="campaigns-grid">
            {campaigns.map((campaign, index) => (
              <div key={index} className="campaign-card">
                <div className="campaign-header">
                  <h4 className="campaign-name">{campaign.name}</h4>
                  <div className="campaign-level">{campaign.level}</div>
                </div>
                <p className="campaign-description">{campaign.description}</p>
                <div className="campaign-info">
                  <div className="campaign-duration">
                    <Clock size={16} />
                    <span>{campaign.duration}</span>
                  </div>
                </div>
                <button className="campaign-join-btn">เข้าร่วม Campaign</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section className="schedule-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ตารางเซสชัน</h2>
            <p className="section-subtitle">
              ตารางเซสชัน D&D ประจำสัปดาห์
            </p>
          </div>
          <div className="schedule-grid">
            <div className="schedule-card">
              <div className="schedule-day">วันเสาร์</div>
              <h4 className="schedule-title">Beginner Session</h4>
              <div className="schedule-time">14:00 - 18:00</div>
              <p className="schedule-description">
                เซสชันสำหรับผู้เล่นใหม่ เรียนรู้กฎพื้นฐานและการเล่นครั้งแรก
              </p>
              <div className="schedule-slots">เหลือที่นั่ง: 2/6</div>
            </div>
            
            <div className="schedule-card">
              <div className="schedule-day">วันเสาร์</div>
              <h4 className="schedule-title">Advanced Campaign</h4>
              <div className="schedule-time">19:00 - 23:00</div>
              <p className="schedule-description">
                Campaign ระดับสูงสำหรับผู้เล่นที่มีประสบการณ์
              </p>
              <div className="schedule-slots">เต็มแล้ว</div>
            </div>

            <div className="schedule-card">
              <div className="schedule-day">วันอาทิตย์</div>
              <h4 className="schedule-title">One-Shot Adventure</h4>
              <div className="schedule-time">13:00 - 17:00</div>
              <p className="schedule-description">
                การผจญภัยแบบครั้งเดียวจบ ไม่ต้องมีประสบการณ์
              </p>
              <div className="schedule-slots">เหลือที่นั่ง: 4/6</div>
            </div>
          </div>
        </div>
      </section>

      {/* Character Creation */}
      <section className="character-section">
        <div className="container">
          <div className="character-content">
            <div className="character-text">
              <h2 className="section-title">สร้างตัวละครของคุณ</h2>
              <p>
                ไม่รู้วิธีสร้างตัวละคร? ไม่ต้องกังวล! ทีมงานของเราพร้อมช่วยคุณสร้างตัวละคร
                ที่เหมาะกับสไตล์การเล่นของคุณ
              </p>
              <ul className="character-features">
                <li>✨ ช่วยเลือก Race และ Class ที่เหมาะกับคุณ</li>
                <li>✨ แนะนำ Backstory ที่น่าสนใจ</li>
                <li>✨ เตรียม Equipment และ Spell ให้พร้อม</li>
                <li>✨ อธิบายทักษะและความสามารถต่างๆ</li>
              </ul>
              <button className="btn-primary">
                เริ่มสร้างตัวละคร <ArrowRight size={16} />
              </button>
            </div>
            <div className="character-image">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop" 
                alt="สร้างตัวละคร"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">รีวิวจาก Adventurers</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "DM แจคสุดยอดมาก! เล่าเรื่องได้น่าตื่นเต้น รู้สึกเหมือนได้ดูหนังแฟนตาซี ติดมาก!"
              </p>
              <div className="testimonial-author">
                <div className="author-name">พลอย</div>
                <div className="author-age">อายุ 18 ปี • Wizard</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "ผมไม่เคยเล่น D&D มาก่อน แต่ทีมงานช่วยสอนดีมาก ตอนนี้เล่นทุกสัปดาห์แล้ว"
              </p>
              <div className="testimonial-author">
                <div className="author-name">ต้น</div>
                <div className="author-age">อายุ 21 ปี • Fighter</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "Curse of Strahd campaign เจ๋งมาก! เล่นมา 3 เดือนแล้วยังตื่นเต้นทุกครั้ง"
              </p>
              <div className="testimonial-author">
                <div className="author-name">เอิร์ธ</div>
                <div className="author-age">อายุ 24 ปี • Rogue</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">อัตราค่าบริการ</h2>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3 className="pricing-title">One-Shot Session</h3>
              <div className="pricing-price">
                <span className="price-value">300</span>
                <span className="price-unit">บาท/คน</span>
              </div>
              <ul className="pricing-features">
                <li>เซสชันเดียวจบ 4 ชั่วโมง</li>
                <li>Character พร้อมเล่น</li>
                <li>อุปกรณ์ครบชุด</li>
                <li>เหมาะสำหรับมือใหม่</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">แนะนำ</div>
              <h3 className="pricing-title">Campaign Package</h3>
              <div className="pricing-price">
                <span className="price-value">1,200</span>
                <span className="price-unit">บาท/คน</span>
                <span className="price-discount">จ่ายครั้งเดียวคุ้ม!</span>
              </div>
              <ul className="pricing-features">
                <li>5 เซสชัน (20 ชั่วโมง)</li>
                <li>Character Development</li>
                <li>บันทึกเซสชันฟรี</li>
                <li>อุปกรณ์พิเศษ</li>
                <li>รูปถ่ายที่ระลึก</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-title">Private Group</h3>
              <div className="pricing-price">
                <span className="price-value">400</span>
                <span className="price-unit">บาท/คน</span>
              </div>
              <ul className="pricing-features">
                <li>จอง DM เฉพาะกลุ่ม</li>
                <li>กำหนดเวลาได้เอง</li>
                <li>Custom Adventure</li>
                <li>กลุ่ม 4-6 คน</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมเริ่มการผจญภัยแล้วหรือยัง?</h2>
            <p className="cta-description">
              เข้าร่วมโลกแห่งจินตนาการและสร้างเรื่องราวของคุณเองใน D&D
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                เข้าร่วมเซสชัน <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                เรียนรู้เพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DungeonsAndDragons;