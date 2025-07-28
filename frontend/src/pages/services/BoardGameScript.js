import React from "react";
import { Clock, Users, Star, ArrowRight, ScrollText, Sparkles, Skull, Shield, Eye, Map } from "lucide-react";

const BoardGameScript = () => {
  const scripts = [
    {
      name: "ปริศนาโรงเรียนมรณะ",
      theme: "นักเรียน ม. ปลาย", 
      difficulty: 2,
      investigation: 3,
      roleplay: 3,
      players: "6-15 คน",
      duration: "90 นาที",
      image: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Script-Deathly-High-School-Mystery.jpg"
    },
    {
      name: "คืนสุดท้ายฮิตเลอร์หายไป",
      theme: "สายลับ",
      difficulty: 3,
      investigation: 4,
      roleplay: 4,
      players: "8-10 คน", 
      duration: "90 นาที",
      image: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Script-Deathly-High-School-Mystery.jpg"
    },
    {
      name: "คาถาพิฆาตในห้องต้องประสงค์",
      theme: "โรงเรียนเวทมนต์",
      difficulty: 4,
      investigation: 4,
      roleplay: 4,
      players: "6-10 คน",
      duration: "120 นาที",
      image: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Script-Deathly-High-School-Mystery.jpg"
    }
  ];

  const steps = [
    "เลือกเนื้อเรื่อง และจองรอบ",
    "แจกบทบาท และแต่งตัว", 
    "เริ่มเล่น",
    "สรุปผล",
    "ถ่ายรูปเป็นที่ระลึก"
  ];

  const handleBooking = () => {
    window.open('https://lin.ee/H4D9qos', '_blank');
  };

  const handleTeaser = () => {
    window.open('https://www.tiktok.com/@nkboardgame/video/7525718568109886728', '_blank');
  };

  return (
    <div className="service-detail-page script-mystery-theme">
      {/* Hero Section */}
      <section className="service-hero script-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge script-badge">
                <Skull size={16} />
                <span>Murder Mystery</span>
              </div>
              <h1 className="service-title script-title">Board Game Script</h1>
              <p className="service-description script-description">
                ก้าวเข้าสู่โลกแห่งความลึกลับ ไขปริศนาการฆาตกรรม และเปิดเผยความจริงที่ซ่อนเร้น
                ด้วยสคริปต์เกม Murder Mystery ที่จะพาคุณดำดิ่งสู่เรื่องราวสุดระทึกขวัญ
              </p>
              <div className="service-price script-price">
                <span className="price-value">299 บาท</span>
                <span className="price-unit">/เกม</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary script-btn-primary" onClick={handleBooking}>
                  จองเกมเลย <ArrowRight size={16} />
                </button>
                <button className="btn-secondary script-btn-secondary" onClick={handleTeaser}>
                  ดู Teaser
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=400&fit=crop" 
                alt="Board Game Script"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features script-features">
        <div className="container">
          <h2 className="section-title script-section-title">จุดเด่น Board Game Script</h2>
          <div className="features-grid">
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <ScrollText size={32} />
              </div>
              <h3>สคริปต์ออริจินัล</h3>
              <p>เรื่องราวและกลไกเกมที่สร้างขึ้นโดยทีมงาน NK Board Game</p>
            </div>
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <Eye size={32} />
              </div>
              <h3>การเล่นเกมที่สมจริง</h3>
              <p>ดำเนินเกมโดย GM มืออาชีพ เหมือนคุณได้หลุดเข้าไปอยู่ในโลกของเกมโดยสมบูรณ์</p>
            </div>
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <Users size={32} />
              </div>
              <h3>คอสเพลย์เป็นตัวละคร</h3>
              <p>เปลี่ยนชุดเพื่อคอสเพลย์เป็นตัวละครที่เรารับบท เพิ่มความอินในเนื้อเรื่องให้ถึงขีดสุด</p>
            </div>
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <Star size={32} />
              </div>
              <h3>ที่เดียวในประเทสไทย</h3>
              <p>หากต้องการเล่นบอร์ดเกมสคริปต์ ตอนนี้มีแค่เพียงที่ NK Board Game เท่านั้น</p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripts Collection */}
      <section className="scripts-collection script-collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title script-section-title">เนื้อเรื่องทั้งหมด</h2>
            <p className="section-subtitle script-subtitle">
              เลือกเนื้อเรื่องที่เหมาะกับกลุ่มและระยะเวลาของคุณ
            </p>
          </div>
          <div className="scripts-grid">
            {scripts.map((script, index) => (
              <div key={index} className="script-card mystery-script-card">
                <div className="script-image">
                  <img src={script.image} alt={script.name} />
                </div>
                <div className="script-content">
                  <div className="script-header">
                    <h4 className="script-name">{script.name}</h4>
                    <div className="script-theme">ธีม: {script.theme}</div>
                  </div>
                  <div className="script-ratings">
                    <div className="rating-item">
                      <span className="rating-label">ความยาก</span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < script.difficulty ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="rating-text">{script.difficulty}/5</span>
                    </div>
                    <div className="rating-item">
                      <span className="rating-label">สืบสวน</span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < script.investigation ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="rating-text">{script.investigation}/5</span>
                    </div>
                    <div className="rating-item">
                      <span className="rating-label">สวมบทบาท</span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < script.roleplay ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="rating-text">{script.roleplay}/5</span>
                    </div>
                  </div>
                  <div className="script-info">
                    <div className="script-meta">
                      <div className="meta-item">
                        <Users size={16} />
                        <span>{script.players}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{script.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button className="script-select-btn" onClick={handleBooking}>เลือกเนื้อเรื่องนี้</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works script-how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title script-section-title">ขั้นตอนการเล่น</h2>
          </div>
          <div className="steps-grid script-steps-grid">
            {steps.map((step, index) => (
              <div key={index} className="step-item script-step-item">
                <div className="step-number script-step-number">{index + 1}</div>
                <h3>{step}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section script-cta-section">
        <div className="container">
          <div className="cta-content script-cta-content">
            <h2 className="cta-title script-cta-title">พร้อมเปิดประสบการณ์ใหม่แล้วหรือยัง?</h2>
            <p className="cta-description script-cta-description">
              จองรอบ Board Game Script มาสร้างความทรงจำร่วมกับเดอะแก๊งแบบไม่เหมือนใคร
            </p>
            <div className="cta-actions">
              <button className="btn-primary script-btn-primary" onClick={handleBooking}>
                จองเลย <ArrowRight size={16} />
              </button>
              <button className="btn-secondary script-btn-secondary" onClick={() => window.open('https://lin.ee/H4D9qos', '_blank')}>
                สอบถามเพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardGameScript;