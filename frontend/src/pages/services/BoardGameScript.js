import React from "react";
import { Clock, Users, Star, ArrowRight, ScrollText, Sparkles } from "lucide-react";

const BoardGameScript = () => {
  const scripts = [
    {
      name: "Murder Mystery Night",
      duration: "2-3 ชั่วโมง", 
      players: "6-8 คน",
      description: "เกมไขปริศนาฆาตกรรมในคฤหาสน์เก่า ผู้เล่นต้องหาตัวฆาตกรก่อนเที่ยงคืน"
    },
    {
      name: "Space Station Crisis",
      duration: "1.5-2 ชั่วโมง",
      players: "4-6 คน", 
      description: "เอาตัวรอดจากสถานีอวกาศที่กำลังจะระเบิด ต้องร่วมมือกันแก้ปัญหา"
    },
    {
      name: "Medieval Quest",
      duration: "3-4 ชั่วโมง",
      players: "5-7 คน",
      description: "การผจญภัยในยุคกลางเพื่อค้นหาสมบัติที่สาบสูญ"
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
                <ScrollText size={16} />
                <span>บริการพิเศษ</span>
              </div>
              <h1 className="service-title">Board Game Script</h1>
              <p className="service-description">
                สคริปต์เกมพิเศษที่ออกแบบโดยทีมของเรา สร้างประสบการณ์เล่นเกมที่ไม่เหมือนใคร 
                ผสมผสานองค์ประกอบของ Role Playing และ Board Game เข้าด้วยกัน
              </p>
              <div className="service-price">
                <span className="price-value">200 บาท</span>
                <span className="price-unit">/เกม</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary">
                  จองเกมเลย <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  ดูตัวอย่างสคริปต์
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
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">จุดเด่นของสคริปต์เกม</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={32} />
              </div>
              <h3>สคริปต์ออริจินัล</h3>
              <p>เรื่องราวและกลไกเกมที่สร้างขึ้นโดยทีมออกแบบเกมมืออาชีพ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>เหมาะกับกลุ่ม</h3>
              <p>ออกแบบมาให้เล่นเป็นกลุ่ม สร้างปฏิสัมพันธ์และความสนุกสนาน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>ระยะเวลาที่หลากหลาย</h3>
              <p>มีสคริปต์ทั้งแบบสั้นและยาว เหมาะกับเวลาที่คุณมี</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>ประสบการณ์พิเศษ</h3>
              <p>ได้รับรางวัลและของที่ระลึกพิเศษเมื่อจบเกม</p>
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