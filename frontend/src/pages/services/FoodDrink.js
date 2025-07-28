import React from "react";
import { Clock, Users, Star, ArrowRight, Coffee, Utensils, IceCream, DollarSign, Heart } from "lucide-react";

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

  const handleOrderFood = () => {
    window.open('https://lin.ee/H4D9qos', '_blank');
  };

  const handleViewFullMenu = () => {
    window.open('https://lineapi.nkboardgame.com/nkmenu', '_blank');
  };

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
                <span className="price-value">เริ่มต้น 29 บาท</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary" onClick={handleViewFullMenu}>
                  ดูเมนูทั้งหมด <ArrowRight size={16} />
                </button>
                <button className="btn-secondary" onClick={handleOrderFood}>
                  สั่งอาหารเลย
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/NK-Service-05.png" 
                alt="Food & Drink"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">จุดเด่นของ NK Cafe</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <DollarSign size={32} />
              </div>
              <h3>ราคาเป็นมิตร</h3>
              <p>เหมาะกับทุกคน ทุกเพศ ทุกวัย</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>เมนูเฉพาะสำหรับเดอะแก๊ง</h3>
              <p>มากันเป็นแก๊ง ก็สั่งมาอร่อยร่วมกันได้เลย</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Heart size={32} />
              </div>
              <h3>วัตถุดิบคุณภาพ</h3>
              <p>เราเลือกใช้วัตถุดิบ สด ใหม่ เสมอ</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Clock size={32} />
              </div>
              <h3>บริการรวดเร็ว</h3>
              <p>อาหารเสิร์ฟเร็ว ไม่ขัดจังหวะการเล่นเกม</p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="menu-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">เมนูอาหาร</h2>
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
          <div className="menu-cta">
            <button className="btn-primary" onClick={handleViewFullMenu}>
              ดูเมนูเต็มด้านล่าง <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">หิวแล้วหรือยัง?</h2>
            <p className="cta-description">
              มาเติมพลัง ด้วยอาหารแสนอร่อย และเครื่องดื่มแสนสดชื่น กันได้เลย!
            </p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={handleOrderFood}>
                สั่งอาหารเลย <ArrowRight size={16} />
              </button>
              <button className="btn-secondary" onClick={handleViewFullMenu}>
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