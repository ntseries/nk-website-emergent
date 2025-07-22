import React from "react";
import { Clock, Users, Star, ArrowRight, Camera, Image, Sparkles } from "lucide-react";

const PhotoBooth = () => {
  const packages = [
    {
      name: "Basic Pack",
      shots: "10 ภาพ",
      props: "พร็อพพื้นฐาน",
      duration: "15 นาที",
      price: "100 บาท"
    },
    {
      name: "Premium Pack", 
      shots: "20 ภาพ",
      props: "พร็อพพิเศษ + บอร์ดเกม",
      duration: "30 นาที", 
      price: "180 บาท"
    },
    {
      name: "Group Pack",
      shots: "30 ภาพ",
      props: "พร็อพครบชุด + Custom",
      duration: "45 นาที",
      price: "250 บาท"
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
                <Camera size={16} />
                <span>บริการพิเศษ</span>
              </div>
              <h1 className="service-title">Photo Booth</h1>
              <p className="service-description">
                โฟโต้บูธสุดเจ๋งพร้อมพร็อพบอร์ดเกม บันทึกช่วงเวลาสนุก ๆ กับเพื่อน ๆ 
                พร้อมแบ็คกราวด์สุดปัง และเอฟเฟกต์พิเศษที่จะทำให้รูปของคุณดูสุดยอด
              </p>
              <div className="service-price">
                <span className="price-value">100 บาท</span>
                <span className="price-unit">/ชุด</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary">
                  จองถ่ายรูปเลย <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  ดูตัวอย่างรูป
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=600&h=400&fit=crop" 
                alt="Photo Booth"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">จุดเด่นโฟโต้บูธ</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Camera size={32} />
              </div>
              <h3>กล้องคุณภาพสูง</h3>
              <p>กล้อง DSLR ระบบแสงมืออาชีพ ภาพคมชัด สีสดใส</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Sparkles size={32} />
              </div>
              <h3>พร็อพที่หลากหลาย</h3>
              <p>พร็อพบอร์ดเกม หน้ากาก หมวก และอุปกรณ์สนุกๆ มากมาย</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Image size={32} />
              </div>
              <h3>แบ็คกราวด์พิเศษ</h3>
              <p>พื้นหลังธีมบอร์ดเกม สีสันสดใส ถ่ายออกมาปังทุกมุม</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>เหมาะกับทุกกลุ่ม</h3>
              <p>รองรับตั้งแต่ถ่ายคนเดียวไปจนถึงกลุ่มใหญ่</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="packages-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">แพ็คเกจโฟโต้บูธ</h2>
            <p className="section-subtitle">
              เลือกแพ็คเกจที่เหมาะกับกลุ่มและความต้องการของคุณ
            </p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-card ${index === 1 ? 'featured' : ''}`}>
                {index === 1 && <div className="package-badge">แนะนำ</div>}
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <div className="package-features">
                  <div className="package-feature">
                    <Camera size={16} />
                    <span>{pkg.shots}</span>
                  </div>
                  <div className="package-feature">
                    <Sparkles size={16} />
                    <span>{pkg.props}</span>
                  </div>
                  <div className="package-feature">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                </div>
                <button className="package-select-btn">เลือกแพ็คเกจนี้</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Props Gallery */}
      <section className="props-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">พร็อพและอุปกรณ์</h2>
            <p className="section-subtitle">
              พร็อพมากมายให้เลือกใช้ สร้างสีสันและความสนุก
            </p>
          </div>
          <div className="props-grid">
            <div className="prop-category">
              <h3 className="category-title">🎲 บอร์ดเกมพร็อพ</h3>
              <ul className="prop-list">
                <li>ลูกเต๋าขนาดยักษ์</li>
                <li>การ์ดขนาดใหญ่</li>
                <li>Meeples ตัวใหญ่</li>
                <li>เหรียญทอง Fantasy</li>
              </ul>
            </div>
            <div className="prop-category">
              <h3 className="category-title">🎭 หน้ากาก & เครื่องแต่งกาย</h3>
              <ul className="prop-list">
                <li>หน้ากากซูเปอร์ฮีโร่</li>
                <li>แว่นตาแฟนซี</li>
                <li>หมวกนักสืบ</li>
                <li>เคราเทียม</li>
              </ul>
            </div>
            <div className="prop-category">
              <h3 className="category-title">📝 ป้ายข้อความ</h3>
              <ul className="prop-list">
                <li>"Game Over"</li>
                <li>"Winner Winner"</li>
                <li>"Level Up!"</li>
                <li>ป้ายกำหนดเอง</li>
              </ul>
            </div>
            <div className="prop-category">
              <h3 className="category-title">🎪 อุปกรณ์พิเศษ</h3>
              <ul className="prop-list">
                <li>บอลลูนสีสดใส</li>
                <li>กิ่งไผ่โชคดี</li>
                <li>ป้าย Speech Bubble</li>
                <li>อุปกรณ์ Cosplay</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ขั้นตอนการถ่ายรูป</h2>
          </div>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">1</div>
              <h3>เลือกแพ็คเกจ</h3>
              <p>เลือกแพ็คเกจที่เหมาะกับจำนวนคนและความต้องการ</p>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h3>เตรียมพร็อพ</h3>
              <p>เลือกพร็อพและอุปกรณ์ที่อยากใช้ในการถ่ายรูป</p>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h3>ถ่ายรูป</h3>
              <p>พนักงานคอยช่วยถ่ายและแนะนำโพสต์สุดเจ๋ง</p>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h3>รับรูป</h3>
              <p>รับรูปทันทีแบบดิจิตอลหรือพิมพ์ใส่กรอบสวยๆ</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ผลงานจากลูกค้า</h2>
            <p className="section-subtitle">
              ดูตัวอย่างรูปภาพที่ลูกค้าถ่ายที่โฟโต้บูธของเรา
            </p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=300&h=300&fit=crop" alt="ตัวอย่างรูป 1" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1541753236788-b0ac1fc5009d?w=300&h=300&fit=crop" alt="ตัวอย่างรูป 2" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=300&h=300&fit=crop" alt="ตัวอย่างรูป 3" />
            </div>
            <div className="gallery-item">
              <img src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=300&h=300&fit=crop" alt="ตัวอย่างรูป 4" />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">รีวิวจากลูกค้า</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "รูปออกมาสวยมาก! พร็อพเยอะ ถ่ายสนุกสุดๆ เก็บไว้เป็นของที่ระลึกกับเพื่อนๆ"
              </p>
              <div className="testimonial-author">
                <div className="author-name">น้ำฝน</div>
                <div className="author-age">อายุ 17 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "พนักงานน่ารักมาก ช่วยถ่ายและแนะนำโพสต์ดีดี ราคาไม่แพง คุ้มมาก"
              </p>
              <div className="testimonial-author">
                <div className="author-name">บีม</div>
                <div className="author-age">อายุ 20 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "ถ่ายกลุ่มได้สวย แบ็คกราวด์สีสันสดใส พร็อพบอร์ดเกมน่ารักมาก ได้รูปเยอะ"
              </p>
              <div className="testimonial-author">
                <div className="author-name">เฟิร์น</div>
                <div className="author-age">อายุ 19 ปี</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">บริการเสริม</h2>
          </div>
          <div className="addons-grid">
            <div className="addon-card">
              <h3>🖨️ พิมพ์รูปทันที</h3>
              <p>พิมพ์รูปใส่กรอบสวยๆ ขนาด 4x6 นิ้ว</p>
              <div className="addon-price">+20 บาท/รูป</div>
            </div>
            <div className="addon-card">
              <h3>💾 ไฟล์ HD พิเศษ</h3>
              <p>รับไฟล์รูปความละเอียดสูงทุกภาพ</p>
              <div className="addon-price">+50 บาท/ชุด</div>
            </div>
            <div className="addon-card">
              <h3>🎨 แต่งรูปพิเศษ</h3>
              <p>ใส่เอฟเฟกต์และตกแต่งรูปแบบมืออาชีพ</p>
              <div className="addon-price">+30 บาท/รูป</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมสร้างความทรงจำแล้วหรือยัง?</h2>
            <p className="cta-description">
              มาถ่ายรูปสุดปังกับเพื่อนๆ และเก็บช่วงเวลาดีๆ ไว้เป็นความทรงจำ
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                จองถ่ายรูปเลย <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                ดูตัวอย่างเพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoBooth;