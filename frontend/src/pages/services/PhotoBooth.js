import React from "react";
import { Clock, Users, Star, ArrowRight, Camera, Image, Sparkles, Heart } from "lucide-react";

const PhotoBooth = () => {
  const packages = [
    {
      name: "Kawaii Pack",
      shots: "10 ภาพ",
      props: "พร็อพคาวาอิ",
      duration: "15 นาที",
      price: "199 บาท"
    },
    {
      name: "Harajuku Pack", 
      shots: "20 ภาพ",
      props: "พร็อพสไตล์ญี่ปุ่น + K-Pop",
      duration: "30 นาที", 
      price: "299 บาท"
    },
    {
      name: "Oppa Pack",
      shots: "30 ภาพ",
      props: "พร็อพครบชุด + Custom Korean Style",
      duration: "45 นาที",
      price: "399 บาท"
    }
  ];

  return (
    <div className="photobooth-page">
      {/* Photo Booth Specific Styles */}
      <style jsx>{`
        /* Photo Booth Theme Variables */
        .photobooth-page {
          --pb-pink: #FFB6C1;
          --pb-pink-dark: #FF69B4;
          --pb-pink-light: #FFE4E1;
          --pb-blue: #87CEEB;
          --pb-blue-dark: #4169E1;
          --pb-blue-light: #E0F6FF;
          --pb-black: #2F2F2F;
          --pb-white: #FFFFFF;
          --pb-gradient-pink: linear-gradient(135deg, var(--pb-pink-light) 0%, var(--pb-pink) 50%, var(--pb-pink-dark) 100%);
          --pb-gradient-blue: linear-gradient(135deg, var(--pb-blue-light) 0%, var(--pb-blue) 50%, var(--pb-blue-dark) 100%);
          --pb-gradient-hero: linear-gradient(135deg, var(--pb-pink-light) 0%, var(--pb-blue-light) 100%);
          --pb-shadow-pink: 0 4px 20px rgba(255, 105, 180, 0.3);
          --pb-shadow-blue: 0 4px 20px rgba(65, 105, 225, 0.3);
          --pb-shadow-soft: 0 8px 32px rgba(255, 182, 193, 0.2);
        }

        /* Hero Section */
        .photobooth-page .service-hero {
          background: var(--pb-gradient-hero);
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px 0;
        }

        .photobooth-page .service-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFE4E1' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .photobooth-page .service-badge {
          background: var(--pb-gradient-pink);
          color: var(--pb-white);
          border-radius: 25px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          box-shadow: var(--pb-shadow-pink);
          border: 2px solid var(--pb-white);
        }

        .photobooth-page .service-title {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(45deg, var(--pb-pink-dark), var(--pb-blue-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 24px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .photobooth-page .service-description {
          font-size: 18px;
          color: var(--pb-black);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .photobooth-page .service-price .price-value {
          font-size: 36px;
          font-weight: 800;
          background: var(--pb-gradient-pink);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Buttons */
        .photobooth-page .btn-primary {
          background: var(--pb-gradient-pink);
          border: none;
          color: var(--pb-white);
          padding: 16px 32px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--pb-shadow-pink);
        }

        .photobooth-page .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(255, 105, 180, 0.4);
        }

        .photobooth-page .btn-secondary {
          background: var(--pb-white);
          border: 2px solid var(--pb-pink);
          color: var(--pb-pink-dark);
          padding: 16px 32px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .photobooth-page .btn-secondary:hover {
          background: var(--pb-pink-light);
          transform: translateY(-2px);
        }

        /* Section Titles */
        .photobooth-page .section-title {
          font-size: 36px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 16px;
          background: linear-gradient(45deg, var(--pb-pink-dark), var(--pb-blue-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .photobooth-page .section-subtitle {
          text-align: center;
          color: var(--pb-black);
          font-size: 18px;
          margin-bottom: 48px;
        }

        /* Feature Cards */
        .photobooth-page .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .feature-card {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          box-shadow: var(--pb-shadow-soft);
          border: 3px solid transparent;
          background-image: linear-gradient(var(--pb-white), var(--pb-white)), var(--pb-gradient-pink);
          background-origin: border-box;
          background-clip: content-box, border-box;
          transition: all 0.3s ease;
        }

        .photobooth-page .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(255, 182, 193, 0.3);
        }

        .photobooth-page .feature-icon {
          width: 80px;
          height: 80px;
          background: var(--pb-gradient-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
          color: var(--pb-white);
        }

        .photobooth-page .feature-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--pb-black);
          margin-bottom: 16px;
        }

        /* Package Cards */
        .photobooth-page .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .package-card {
          background: var(--pb-white);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          position: relative;
          box-shadow: var(--pb-shadow-soft);
          transition: all 0.3s ease;
          border: 3px solid var(--pb-pink-light);
        }

        .photobooth-page .package-card.featured {
          border: 3px solid var(--pb-pink);
          transform: scale(1.05);
          box-shadow: var(--pb-shadow-pink);
        }

        .photobooth-page .package-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--pb-gradient-pink);
          color: var(--pb-white);
          padding: 8px 24px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: var(--pb-shadow-pink);
        }

        .photobooth-page .package-name {
          font-size: 28px;
          font-weight: 800;
          color: var(--pb-black);
          margin-bottom: 16px;
          background: var(--pb-gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .photobooth-page .package-price {
          font-size: 32px;
          font-weight: 800;
          background: var(--pb-gradient-pink);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 32px;
        }

        .photobooth-page .package-select-btn {
          background: var(--pb-gradient-blue);
          border: none;
          color: var(--pb-white);
          padding: 16px 32px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: var(--pb-shadow-blue);
        }

        .photobooth-page .package-select-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(65, 105, 225, 0.4);
        }

        /* Props Section */
        .photobooth-page .props-section {
          background: var(--pb-pink-light);
          padding: 80px 0;
        }

        .photobooth-page .props-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .prop-category {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          box-shadow: var(--pb-shadow-soft);
          border: 2px solid var(--pb-pink);
        }

        .photobooth-page .category-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--pb-black);
          margin-bottom: 20px;
          text-align: center;
        }

        /* Process Steps */
        .photobooth-page .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .process-step {
          text-align: center;
          position: relative;
        }

        .photobooth-page .step-number {
          width: 80px;
          height: 80px;
          background: var(--pb-gradient-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 800;
          color: var(--pb-white);
          margin: 0 auto 24px auto;
          box-shadow: var(--pb-shadow-pink);
        }

        /* Gallery */
        .photobooth-page .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .photobooth-page .gallery-item {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1;
          box-shadow: var(--pb-shadow-soft);
          border: 3px solid var(--pb-pink-light);
          transition: all 0.3s ease;
        }

        .photobooth-page .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--pb-shadow-pink);
          border-color: var(--pb-pink);
        }

        .photobooth-page .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Testimonials */
        .photobooth-page .testimonials-section {
          background: var(--pb-blue-light);
          padding: 80px 0;
        }

        .photobooth-page .testimonial-card {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          box-shadow: var(--pb-shadow-soft);
          border: 2px solid var(--pb-blue);
          transition: all 0.3s ease;
        }

        .photobooth-page .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--pb-shadow-blue);
        }

        .photobooth-page .testimonial-stars {
          color: var(--pb-pink-dark);
          margin-bottom: 16px;
        }

        /* Add-ons */
        .photobooth-page .addons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .addon-card {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          border: 2px solid var(--pb-pink-light);
          transition: all 0.3s ease;
        }

        .photobooth-page .addon-card:hover {
          border-color: var(--pb-pink);
          transform: translateY(-4px);
        }

        .photobooth-page .addon-price {
          font-size: 20px;
          font-weight: 700;
          color: var(--pb-pink-dark);
          margin-top: 16px;
        }

        /* CTA Section */
        .photobooth-page .cta-section {
          background: var(--pb-gradient-hero);
          padding: 80px 0;
        }

        .photobooth-page .cta-title {
          font-size: 36px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 16px;
          background: linear-gradient(45deg, var(--pb-pink-dark), var(--pb-blue-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Kawaii Elements */
        .photobooth-page .section-header::after {
          content: '💖✨';
          display: block;
          text-align: center;
          font-size: 24px;
          margin-top: 16px;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .photobooth-page .service-title {
            font-size: 36px;
          }
          
          .photobooth-page .section-title {
            font-size: 28px;
          }
          
          .photobooth-page .package-card.featured {
            transform: none;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Heart size={16} />
                <span>Kawaii Service ♡</span>
              </div>
              <h1 className="service-title">NK Photo Booth</h1>
              <p className="service-description">
                โฟโต้บูธสไตล์คาวาอิ สุดน่ารัก! ถ่ายรูปสวยๆ แบบสาวญี่ปุ่น-เกาหลี 
                พร็อพน่ารักเพียบ บรรยากาศหวานๆ ที่จะทำให้คุณได้รูปสุดปัง 
                Instagram-worthy ทุกช็อต! ✨💕
              </p>
              <div className="service-price">
                <span className="price-value">เริ่มต้น 199 บาท</span>
                <span className="price-unit">/ชั่วโมง</span>
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