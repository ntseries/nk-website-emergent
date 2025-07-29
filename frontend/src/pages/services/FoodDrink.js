import React from "react";
import { Clock, Users, Star, ArrowRight, Coffee, Utensils, IceCream, DollarSign, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../components/SEOHead";

const FoodDrink = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  const menuCategories = [
    {
      name: t('nk_cafe.menu.categories.snacks'),
      items: [
        { name: isEnglish ? "French Fries" : "เฟรนซ์ฟรายส์", price: "39.-", popular: true },
        { name: isEnglish ? "Chicken Popcorn" : "ไก่ป๊อบ", price: "49.-", popular: false },
        { name: isEnglish ? "Chicken Nuggets" : "นักเก็ตไก่", price: "49.-", popular: false },
        { name: isEnglish ? "Chicken Karaage" : "ไก่คาราอาเกะ", price: "69.-", popular: false },
        { name: isEnglish ? "Crispy Sausage" : "ไส้กรอกหนังกรอบ", price: "39.-", popular: false },
        { name: isEnglish ? "Red Sausage" : "ไส้กรอกแดง", price: "39.-", popular: false },
        { name: isEnglish ? "Cheese Dip" : "ชีสดิป", price: "+10.-", popular: false }
      ]
    },
    {
      name: t('nk_cafe.menu.categories.toast'),
      items: [
        { name: isEnglish ? "Milk Butter Toast" : "ปังเนยนม", price: "29.-", popular: true },
        { name: isEnglish ? "Sugar Butter Toast" : "ปังเนยน้ำตาล", price: "29.-", popular: false },
        { name: isEnglish ? "Strawberry Butter Toast" : "ปังเนยสตอร์เบอร์รี่", price: "29.-", popular: false },
        { name: isEnglish ? "Orange Butter Toast" : "ปังเนยส้ม", price: "29.-", popular: false },
        { name: isEnglish ? "Chocolate Butter Toast" : "ปังเนยช็อคโกแลต", price: "39.-", popular: false },
        { name: isEnglish ? "Nutella Butter Toast" : "ปังเนยนูเทลล่า", price: "39.-", popular: true }
      ]
    },
    {
      name: t('nk_cafe.menu.categories.beverages'),
      items: [
        { name: isEnglish ? "Pink Milk" : "นมชมพู", price: "49.-", popular: true },
        { name: isEnglish ? "Fresh Milk" : "นมสด", price: "49.-", popular: false },
        { name: isEnglish ? "Caramel Fresh Milk" : "นมสดคาราเมล", price: "49.-", popular: false },
        { name: isEnglish ? "Strawberry Milk" : "นมสตอเบอร์รี่", price: "49.-", popular: false },
        { name: isEnglish ? "Ovaltine Fresh Milk" : "โอวัลตินนมสด", price: "49.-", popular: false },
        { name: isEnglish ? "Blended" : "ปั่น", price: "+10.-", popular: false }
      ]
    },
    {
      name: t('nk_cafe.menu.categories.italian_soda'),
      items: [
        { name: t('nk_cafe.menu.italian_soda_items.red_soda'), price: "29.-", popular: true },
        { name: t('nk_cafe.menu.italian_soda_items.red_soda_lime'), price: "29.-", popular: true },
        { name: t('nk_cafe.menu.italian_soda_items.lime_soda'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.blue_hawaii'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.strawberry'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.apple'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.kiwi'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.orange'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.watermelon'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.passion_fruit'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.lychee'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.yogurt'), price: "29.-", popular: false },
        { name: t('nk_cafe.menu.italian_soda_items.butter_beer'), price: "59.-", popular: false }
      ]
    },
    {
      name: t('nk_cafe.menu.categories.smoothies'),
      items: [
        { name: isEnglish ? "Strawberry Smoothie" : "สตอเบอร์รี่สมูทตี้", price: "59.-", popular: true },
        { name: isEnglish ? "Apple Smoothie" : "แอปเปิ้ลสมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Kiwi Smoothie" : "กีวี่สมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Orange Smoothie" : "ส้มสมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Watermelon Smoothie" : "แตงโมสมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Passion Fruit Smoothie" : "เสาวรสสมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Lychee Smoothie" : "ลิ้นจี่สมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Yogurt Smoothie" : "โยเกิร์ตสมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Orange Cream Smoothie" : "ส้มนมนัวสมูทตี้", price: "59.-", popular: false },
        { name: isEnglish ? "Watermelon Cream Smoothie" : "แตงโมนมนัวสมูทตี้", price: "59.-", popular: false }
      ]
    },
    {
      name: t('nk_cafe.menu.categories.rice'),
      items: [
        { name: isEnglish ? "Thai Basil Stir-fry Rice" : "ข้าวกะเพรา", price: "59.-", popular: true },
        { name: isEnglish ? "Salt & Pepper Stir-fry Rice" : "ข้าวราดผัดพริกเกลือ", price: "59.-", popular: true },
        { name: isEnglish ? "Rice with 2-Egg Omelet" : "ข้าวไข่เจียวไข่ 2 ฟอง", price: "39.-", popular: true },
        { name: isEnglish ? "Rich Egg Rice" : "ข้าวไข่ข้น", price: "49.-", popular: true },
        { name: isEnglish ? "Fried Rice" : "ข้าวผัด", price: "69.-", popular: false },
        { name: isEnglish ? "Karaage Chicken Rice" : "ข้าวหน้าไก่คาราอาเกะ", price: "79.-", popular: false },
        { name: isEnglish ? "Sweet Soy Minced Pork Rice" : "ข้าวหมูสับผัดซีอิ๊วหวาน", price: "59.-", popular: false }
      ]
    },
    {
      name: t('nk_cafe.menu.categories.addons'),
      items: [
        { name: isEnglish ? "Fried Egg" : "ไข่ดาว", price: "+10.-", popular: false },
        { name: isEnglish ? "Omelet" : "ไข่เจียว", price: "+15.-", popular: false },
        { name: isEnglish ? "Plain Rice" : "ข้าวสวย", price: "+10.-", popular: false },
        { name: isEnglish ? "+Pork, Bacon, Sausage, Ham" : "+หมูสับ หมูชิ้น เบคอน ไส้กรอก แฮม", price: "+10.-", popular: false },
        { name: isEnglish ? "+Chili, Scallion, Basil, Carrot" : "+พริก ต้นหอม โหระพา แครอท", price: "+5.-", popular: false }
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
      <SEOHead 
        title={isEnglish ? "NK Café - Board Game Café | Food & Drinks while Gaming" : "NK Café - ร้านบอร์ดเกม | อาหารและเครื่องดื่มขณะเล่นเกม"}
        description={isEnglish ? "NK Café at NK Board Game - Various food and drinks perfect for gaming. Fresh ingredients, clean, safe. Butter toast, snacks, beverages, smoothies, rice dishes. Starting from 29 Baht. 3 branches: Bangkae, Srinakarin, Samyan." : "NK Café ที่ NK Board Game เมนูอาหารและเครื่องดื่มหลากหลาย เหมาะสำหรับเติมพลังขณะเล่นเกม วัตถุดิบสด สะอาด ปลอดภัย ขนมปังเนย ของทานเล่น เครื่องดื่ม สมูทตี้ เมนูข้าว เริ่มต้น 29 บาท 3 สาขา บางแค ศรีนครินทร์ สามย่าน ซีคอนบางแค ซีคอนศรีนครินทร์ สามย่านมิตรทาวน์"}
        keywords={isEnglish ? "NK Café, Board Game Café, Food while Gaming, Café Menu, Butter Toast, Smoothies, Rice Dishes, Beverages, NK Board Game, Bangkae, Srinakarin, Samyan" : "NK Café, ร้านกาแฟ, อาหารขณะเล่นเกม, เมนูคาเฟ่, ขนมปังเนย, สมูทตี้, เมนูข้าว, เครื่องดื่ม, NK Board Game, บางแค, ศรีนครินทร์, สามย่าน, ซีคอนบางแค, ซีคอนศรีนครินทร์, สามย่านมิตรทาวน์"}
        url={isEnglish ? "https://nkboardgame.com/en/services/food-drink" : "https://nkboardgame.com/services/food-drink"}
      />
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Coffee size={16} />
                <span>{t('nk_cafe.hero.badge')}</span>
              </div>
              <h1 className="service-title">{t('nk_cafe.hero.title')}</h1>
              <p className="service-description">
                {t('nk_cafe.hero.description')}
              </p>
              <div className="service-price">
                <span className="price-value">
                  {t('nk_cafe.hero.price')}
                </span>
              </div>
              <div className="service-actions">
                <button className="btn-primary" onClick={handleViewFullMenu}>
                  {t('nk_cafe.hero.cta_menu')} <ArrowRight size={16} />
                </button>
                <button className="btn-secondary" onClick={handleOrderFood}>
                  {t('nk_cafe.hero.cta_order')}
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/NK-Service-05.png" 
                alt="NK Café"
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