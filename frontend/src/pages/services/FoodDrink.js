import React from "react";
import { Clock, Users, Star, ArrowRight, Coffee, Utensils, IceCream } from "lucide-react";

const FoodDrink = () => {
  const menuCategories = [
    {
      name: "🥤 เครื่องดื่ม",
      items: [
        { name: "น้ำผลไม้โซดา", price: "50 บาท", popular: true },
        { name: "ชาไทย", price: "45 บาท", popular: false },
        { name: "กาแฟเย็น", price: "60 บาท", popular: true },
        { name: "น้ำเปล่า", price: "15 บาท", popular: false }
      ]
    },
    {
      name: "🍟 ขนมและของทานเล่น",
      items: [
        { name: "โป๊ปคอร์น", price: "80 บาท", popular: true },
        { name: "มันฝรั่งทอด", price: "90 บาท", popular: true },
        { name: "ขนมข้าวโพด", price: "60 บาท", popular: false },
        { name: "ถั่วอบกรอบ", price: "70 บาท", popular: false }
      ]
    },
    {
      name: "🍜 อาหารคาว",
      items: [
        { name: "ข้าวผัด Gaming", price: "120 บาท", popular: true },
        { name: "สปาเก็ตตี้", price: "150 บาท", popular: false },
        { name: "แซนด์วิช", price: "100 บาท", popular: true },
        { name: "ก๋วยเตี๋ยว", price: "80 บาท", popular: false }
      ]
    },
    {
      name: "🍰 ของหวาน",
      items: [
        { name: "เค้ก Meeple", price: "120 บาท", popular: true },
        { name: "ไอศกรีม", price: "50 บาท", popular: false },
        { name: "บราวนี่", price: "80 บาท", popular: true },
        { name: "คุกกี้", price: "60 บาท", popular: false }
      ]
    }
  ];

  const combos = [
    {
      name: "Gaming Combo A",
      items: ["เครื่องดื่ม 1 แก้ว", "โป๊ปคอร์น 1 ถาด"],
      price: "100 บาท",
      originalPrice: "130 บาท"
    },
    {
      name: "Gaming Combo B", 
      items: ["ข้าวผัด Gaming", "น้ำผลไม้โซดา", "ไอศกรีม"],
      price: "200 บาท",
      originalPrice: "230 บาท"
    },
    {
      name: "Group Combo",
      items: ["เครื่องดื่ม 4 แก้ว", "ขนมข้าวโพด 2 ถาด", "มันฝรั่งทอด 1 จาน"],
      price: "350 บาท", 
      originalPrice: "410 บาท"
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
                <Coffee size={16} />
                <span>เติมพลัง</span>
              </div>
              <h1 className="service-title">Food & Drink</h1>
              <p className="service-description">
                เมนูอาหารและเครื่องดื่มหลากหลาย เหมาะสำหรับเติมพลังขณะเล่นเกม 
                รสชาติอร่อย สะอาด ปลอดภัย พร้อมบรรยากาศสุดชิล
              </p>
              <div className="service-price">
                <span className="price-value">50-250 บาท</span>
                <span className="price-unit">/เมนู</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary">
                  ดูเมนูทั้งหมด <ArrowRight size={16} />
                </button>
                <button className="btn-secondary">
                  สั่งอาหารเลย
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=600&h=400&fit=crop" 
                alt="Food & Drink"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">จุดเด่นของเรา</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Utensils size={32} />
              </div>
              <h3>วัตถุดิบคุณภาพ</h3>
              <p>เลือกใช้วัตถุดิบสดใหม่ คุณภาพสูง ปรุงแต่งสุขอนามัย</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Coffee size={32} />
              </div>
              <h3>เครื่องดื่มสดใหม่</h3>
              <p>เครื่องดื่มปั่นสดใหม่ทุกแก้ว ไม่มีสารเคมีหรือสีผสมอาหาร</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <IceCream size={32} />
              </div>
              <h3>ของหวานพิเศษ</h3>
              <p>เค้กและของหวานแบบพิเศษที่ออกแบบเฉพาะร้าน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>บริการรวดเร็ว</h3>
              <p>อาหารเสิร์ฟเร็ว ไม่รบกวนการเล่นเกม</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">เมนูแนะนำ</h2>
            <p className="section-subtitle">
              อาหารและเครื่องดื่มที่ลูกค้าชื่นชอบมากที่สุด
            </p>
          </div>
          <div className="menu-categories">
            {menuCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="menu-category">
                <h3 className="category-title">{category.name}</h3>
                <div className="menu-items">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`menu-item ${item.popular ? 'popular' : ''}`}>
                      <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                        {item.popular && <span className="popular-badge">ฮิต!</span>}
                      </div>
                      <div className="item-price">{item.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Combo Deals */}
      <section className="combos-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">โปรโมชันคอมโบ</h2>
            <p className="section-subtitle">
              สั่งเซตคุ้มค่า ประหยัดกว่าสั่งแยก
            </p>
          </div>
          <div className="combos-grid">
            {combos.map((combo, index) => (
              <div key={index} className={`combo-card ${index === 1 ? 'featured' : ''}`}>
                {index === 1 && <div className="combo-badge">คุ้มที่สุด!</div>}
                <h3 className="combo-name">{combo.name}</h3>
                <ul className="combo-items">
                  {combo.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
                <div className="combo-pricing">
                  <div className="combo-price">{combo.price}</div>
                  <div className="original-price">จาก {combo.originalPrice}</div>
                </div>
                <button className="combo-order-btn">สั่งเลย</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Menu */}
      <section className="special-menu">
        <div className="container">
          <div className="special-content">
            <div className="special-text">
              <h2 className="section-title">เมนูพิเศษ "Game Night"</h2>
              <p>
                เมนูที่ออกแบบเฉพาะสำหรับคืนเล่นเกม ทานง่าย ไม่เลอะมือ 
                เหมาะกับการเล่นบอร์ดเกมเป็นอย่างมาก
              </p>
              <div className="special-features">
                <div className="special-feature">
                  <span>🎯</span>
                  <p>ไม่เลอะมือ ไม่เปื้อนการ์ด</p>
                </div>
                <div className="special-feature">
                  <span>⚡</span>
                  <p>ทานได้ไว ไม่รบกวนเกม</p>
                </div>
                <div className="special-feature">
                  <span>🍕</span>
                  <p>แบ่งปันกันได้</p>
                </div>
              </div>
              <button className="btn-primary">
                ดูเมนู Game Night <ArrowRight size={16} />
              </button>
            </div>
            <div className="special-image">
              <img 
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=400&fit=crop" 
                alt="เมนูพิเศษ Game Night"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Dietary Options */}
      <section className="dietary-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ตัวเลือกพิเศษ</h2>
            <p className="section-subtitle">
              เรามีเมนูสำหรับคนที่มีความต้องการพิเศษ
            </p>
          </div>
          <div className="dietary-grid">
            <div className="dietary-card">
              <div className="dietary-icon">🌱</div>
              <h3>เมนูมังสวิรัติ</h3>
              <p>เมนูสำหรับผู้ที่ทานมังสวิรัติ ครบถ้วนทุกหมวด</p>
            </div>
            <div className="dietary-card">
              <div className="dietary-icon">🚫🥜</div>
              <h3>ปลอดถั่ว</h3>
              <p>เมนูสำหรับผู้ที่แพ้ถั่วหรือไม่ต้องการทานถั่ว</p>
            </div>
            <div className="dietary-card">
              <div className="dietary-icon">🥗</div>
              <h3>เมนูไดเอท</h3>
              <p>อาหารคลีนและเครื่องดื่มน้อยน้ำตาล</p>
            </div>
            <div className="dietary-card">
              <div className="dietary-icon">🌶️</div>
              <h3>ปรับระดับความเผ็ด</h3>
              <p>สามารถปรับระดับความเผ็ดได้ตามใจชอบ</p>
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
                "ข้าวผัด Gaming อร่อยมาก! ชอบที่ใส่ในกล่องเล็กๆ ทานง่าย ไม่เปื้อนการ์ด"
              </p>
              <div className="testimonial-author">
                <div className="author-name">ปิง</div>
                <div className="author-age">อายุ 18 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "น้ำผลไม้โซดาสดมาก ไม่หวานเลี่ยน เค้ก Meeple น่ารักได้อีก อร่อยด้วย"
              </p>
              <div className="testimonial-author">
                <div className="author-name">นีน่า</div>
                <div className="author-age">อายุ 21 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "โป๊ปคอร์นกรอบดี ไม่เลี่ยน มันฝรั่งทอดร้อนๆ เสิร์ฟเร็วมาก ชอบมากค่ะ"
              </p>
              <div className="testimonial-author">
                <div className="author-name">เจน</div>
                <div className="author-age">อายุ 19 ปี</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ordering Info */}
      <section className="ordering-section">
        <div className="container">
          <div className="ordering-content">
            <div className="ordering-text">
              <h2 className="section-title">วิธีสั่งอาหาร</h2>
              <div className="ordering-steps">
                <div className="ordering-step">
                  <div className="step-number">1</div>
                  <div className="step-info">
                    <h3>เลือกจากเมนู</h3>
                    <p>ดูเมนูที่โต๊ะหรือสแกน QR Code</p>
                  </div>
                </div>
                <div className="ordering-step">
                  <div className="step-number">2</div>
                  <div className="step-info">
                    <h3>สั่งกับพนักงาน</h3>
                    <p>บอกพนักงานหรือใช้ระบบสั่งออนไลน์</p>
                  </div>
                </div>
                <div className="ordering-step">
                  <div className="step-number">3</div>
                  <div className="step-info">
                    <h3>รับอาหาร</h3>
                    <p>อาหารจะเสิร์ฟที่โต๊ะภายใน 10-15 นาที</p>
                  </div>
                </div>
              </div>
              <div className="ordering-note">
                <p><strong>หมายเหตุ:</strong> ไม่อนุญาตให้นำอาหารเครื่องดื่มจากภายนอกเข้ามา</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">หิวแล้วหรือยัง?</h2>
            <p className="cta-description">
              มาเติมพลังกับอาหารอร่อยและเครื่องดื่มสดชื่นขณะเล่นเกม
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                สั่งอาหารเลย <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                ดูเมนูเต็ม
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FoodDrink;