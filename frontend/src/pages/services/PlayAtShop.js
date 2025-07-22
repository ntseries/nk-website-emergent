import React from "react";
import { Clock, Users, Star, ArrowRight, Gamepad2 } from "lucide-react";
import { gameCollection } from "../../data/mock";

const PlayAtShop = () => {
  return (
    <div className="service-detail-page">
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Gamepad2 size={16} />
                <span>บริการยอดนิยม</span>
              </div>
              <h1 className="service-title">เล่นที่ร้าน</h1>
              <p className="service-description">
                พื้นที่กว้างขวางสำหรับเล่นบอร์ดเกมกับเพื่อน ๆ มีเกมให้เลือกมากกว่า 500 เกม 
                พร้อมบรรยากาศสุดเจ๋งและทีมงานคอยให้คำแนะนำ
              </p>
              <div className="service-price">
                <span className="price-value">150 บาท</span>
                <span className="price-unit">/ชั่วโมง</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary">
                  จองโต๊ะเลย <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  โทรสอบถาม
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=600&h=400&fit=crop" 
                alt="เล่นที่ร้าน"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">สิ่งที่คุณจะได้รับ</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Gamepad2 size={32} />
              </div>
              <h3>เกมมากกว่า 500 เกม</h3>
              <p>คอลเลกชันเกมครบครันจากทั่วโลก อัพเดทเกมใหม่ทุกเดือน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>ทีมงานคอยช่วยเหลือ</h3>
              <p>พนักงานมืออาชีพพร้อมสอนเกมและให้คำแนะนำ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>เปิดบริการยาว</h3>
              <p>เปิดบริการ 10:00-22:00 ทุกวัน รองรับการเล่นทั้งกลางวันและกลางคืน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>บรรยากาศสุดเจ๋ง</h3>
              <p>ออกแบบพื้นที่ให้เหมาะสำหรับวัยรุ่น พร้อมแสงสีเสียงที่น่าตื่นเต้น</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Collection */}
      <section className="game-collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">เกมยอดนิยมในร้าน</h2>
            <p className="section-subtitle">
              เลือกดูเกมที่ลูกค้าชื่นชอบมากที่สุด
            </p>
          </div>
          <div className="games-grid">
            {gameCollection.map((game, index) => (
              <div key={index} className="game-card">
                <h4 className="game-name">{game.name}</h4>
                <div className="game-info">
                  <div className="game-meta">
                    <span className="game-category">{game.category}</span>
                    <span className="game-players">{game.players} คน</span>
                  </div>
                  <div className="game-duration">{game.duration}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="games-footer">
            <p>และอีกมากกว่า 494 เกม รอให้คุณมาสำรวจ!</p>
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
              <h3 className="pricing-title">ราคามาตรฐาน</h3>
              <div className="pricing-price">
                <span className="price-value">150</span>
                <span className="price-unit">บาท/ชั่วโมง</span>
              </div>
              <ul className="pricing-features">
                <li>เล่นเกมได้ไม่จำกัด</li>
                <li>ทีมงานคอยช่วยเหลือ</li>
                <li>น้ำดื่มฟรี</li>
                <li>Wi-Fi ความเร็วสูง</li>
              </ul>
            </div>
            <div className="pricing-card featured">
              <div className="pricing-badge">แนะนำ</div>
              <h3 className="pricing-title">แพ็คเกจ 4 ชั่วโมง</h3>
              <div className="pricing-price">
                <span className="price-value">500</span>
                <span className="price-unit">บาท</span>
                <span className="price-discount">ลด 100 บาท!</span>
              </div>
              <ul className="pricing-features">
                <li>เล่นได้ 4 ชั่วโมงเต็ม</li>
                <li>เครื่องดื่มฟรี 2 แก้ว</li>
                <li>ขนมฟรี 1 ถาด</li>
                <li>คำแนะนำเกมพิเศษ</li>
                <li>ถ่ายรูปกับ Photo Booth ฟรี</li>
              </ul>
            </div>
            <div className="pricing-card">
              <h3 className="pricing-title">แพ็คเกจกลุ่ม</h3>
              <div className="pricing-price">
                <span className="price-value">120</span>
                <span className="price-unit">บาท/คน/ชั่วโมง</span>
              </div>
              <ul className="pricing-features">
                <li>สำหรับ 6 คนขึ้นไป</li>
                <li>เล่นเกมได้ไม่จำกัด</li>
                <li>โต๊ะใหญ่พิเศษ</li>
                <li>เครื่องดื่มส่วนลด 20%</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Rules Section */}
      <section className="rules-section">
        <div className="container">
          <div className="rules-content">
            <div className="rules-text">
              <h2 className="section-title">กฎการใช้บริการ</h2>
              <ul className="rules-list">
                <li>การจองล่วงหน้าแนะนำช่วงเสาร์-อาทิตย์ และวันหยุดนักขัตฤกษ์</li>
                <li>ห้ามนำอาหารและเครื่องดื่มจากภายนอกเข้ามา</li>
                <li>กรุณารักษาความสะอาดและความเรียบร้อยของเกม</li>
                <li>ห้ามสูบบุหรี่และดื่มแอลกอฮอล์ในร้าน</li>
                <li>เด็กอายุต่ำกว่า 12 ปี ต้องมีผู้ปกครองดูแล</li>
                <li>ชำระค่าบริการเมื่อเสร็จสิ้นการเล่น</li>
              </ul>
            </div>
            <div className="rules-image">
              <img 
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop" 
                alt="กฎการใช้บริการ"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมมาเล่นแล้วหรือยัง?</h2>
            <p className="cta-description">
              จองโต๊ะล่วงหน้าเพื่อรับประกันที่นั่ง หรือสอบถามข้อมูลเพิ่มเติม
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                จองโต๊ะเลย <ArrowRight size={16} />
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

export default PlayAtShop;