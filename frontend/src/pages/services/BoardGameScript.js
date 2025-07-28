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
      <section className="scripts-collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">สคริปต์ยอดนิยม</h2>
            <p className="section-subtitle">
              เลือกสคริปต์ที่เหมาะกับกลุ่มและเวลาของคุณ
            </p>
          </div>
          <div className="scripts-grid">
            {scripts.map((script, index) => (
              <div key={index} className="script-card">
                <div className="script-header">
                  <h4 className="script-name">{script.name}</h4>
                  <div className="script-badge">ใหม่</div>
                </div>
                <p className="script-description">{script.description}</p>
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
                <button className="script-select-btn">เลือกสคริปต์นี้</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="how-it-works">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ขั้นตอนการเล่น</h2>
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-number">1</div>
              <h3>เลือกสคริปต์</h3>
              <p>เลือกสคริปต์ที่เหมาะกับจำนวนคนและเวลาที่มี</p>
            </div>
            <div className="step-item">
              <div className="step-number">2</div>
              <h3>แจกบทบาท</h3>
              <p>ผู้เล่นแต่ละคนจะได้รับบทบาทและข้อมูลลับพิเศษ</p>
            </div>
            <div className="step-item">
              <div className="step-number">3</div>
              <h3>เริ่มเล่น</h3>
              <p>ติดตามเรื่องราวและทำภารกิจตามที่กำหนดในสคริปต์</p>
            </div>
            <div className="step-item">
              <div className="step-number">4</div>
              <h3>เปิดผล</h3>
              <p>เปิดเผยความจริงและดูว่าใครเป็นผู้ชนะ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">รีวิวจากผู้เล่น</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "Murder Mystery สนุกมากกกก! เดาไม่ถูกเลยว่าใครเป็นฆาตกร ทำให้รู้สึกตื่นเต้นตลอด 3 ชั่วโมง"
              </p>
              <div className="testimonial-author">
                <div className="author-name">มิน</div>
                <div className="author-age">อายุ 19 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "Space Station Crisis ท้าทายมาก ต้องใช้ความร่วมมือกันจริงๆ รู้สึกเหมือนอยู่ในหนัง sci-fi"
              </p>
              <div className="testimonial-author">
                <div className="author-name">แจค</div>
                <div className="author-age">อายุ 22 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "เป็นประสบการณ์ใหม่ที่ไม่เคยเจอ แตกต่างจากบอร์ดเกมทั่วไปมาก ชอบการมี Role Playing ในเกม"
              </p>
              <div className="testimonial-author">
                <div className="author-name">ปลื้ม</div>
                <div className="author-age">อายุ 20 ปี</div>
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
              <h3 className="pricing-title">สคริปต์สั้น</h3>
              <div className="pricing-price">
                <span className="price-value">200</span>
                <span className="price-unit">บาท/เกม</span>
              </div>
              <ul className="pricing-features">
                <li>ระยะเวลา 1-2 ชั่วโมง</li>
                <li>ผู้เล่น 4-6 คน</li>
                <li>อุปกรณ์ครับครัน</li>
                <li>คำแนะนำจาก Game Master</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">แนะนำ</div>
              <h3 className="pricing-title">สคริปต์ยาว</h3>
              <div className="pricing-price">
                <span className="price-value">350</span>
                <span className="price-unit">บาท/เกม</span>
              </div>
              <ul className="pricing-features">
                <li>ระยะเวลา 3-4 ชั่วโมง</li>
                <li>ผู้เล่น 5-8 คน</li>
                <li>อุปกรณ์พิเศษเพิ่มเติม</li>
                <li>ของรางวัลพิเศษ</li>
                <li>ถ่ายรูปที่ระลึกฟรี</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-title">แพ็คเกจกลุ่ม</h3>
              <div className="pricing-price">
                <span className="price-value">300</span>
                <span className="price-unit">บาท/คน</span>
              </div>
              <ul className="pricing-features">
                <li>สำหรับกลุ่ม 8 คนขึ้นไป</li>
                <li>เลือกสคริปต์ได้ 2 เกม</li>
                <li>เครื่องดื่มส่วนลด 20%</li>
                <li>รูปถ่ายกลุ่มฟรี</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมลองประสบการณ์ใหม่แล้วหรือยัง?</h2>
            <p className="cta-description">
              จองสคริปต์เกมพิเศษและสร้างความทรงจำที่ไม่เหมือนใครกับเพื่อนๆ
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                จองเลย <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
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