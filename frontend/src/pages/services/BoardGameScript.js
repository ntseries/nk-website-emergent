import React from "react";
import { Clock, Users, Star, ArrowRight, ScrollText, Sparkles, Skull, Shield, Eye, Map } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../components/SEOHead";

const BoardGameScript = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  const scripts = [
    {
      name: "ปริศนาโรงเรียนมรณะ",
      nameEn: "The Mystery of Death School",
      theme: "นักเรียน ม. ปลาย", 
      themeEn: "High School Students",
      difficulty: 2,
      investigation: 3,
      roleplay: 3,
      players: "6-15 คน",
      playersEn: "6-15 players",
      duration: "90 นาที",
      durationEn: "90 minutes",
      image: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Script-School.jpg"
    },
    {
      name: "คืนสุดท้ายฮิตเลอร์หายไป",
      nameEn: "Hitler's Last Night Gone Missing",
      theme: "สายลับ",
      themeEn: "Spy",
      difficulty: 3,
      investigation: 4,
      roleplay: 4,
      players: "8-10 คน",
      playersEn: "8-10 players", 
      duration: "90 นาที",
      durationEn: "90 minutes",
      image: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Script-Hitler.jpg"
    },
    {
      name: "คาถาพิฆาตในห้องต้องประสงค์",
      nameEn: "The Killing Curse in the Room of Requirement",
      theme: "โรงเรียนเวทมนต์",
      themeEn: "Magic School",
      difficulty: 4,
      investigation: 4,
      roleplay: 4,
      players: "6-10 คน",
      playersEn: "6-10 players",
      duration: "120 นาที",
      durationEn: "120 minutes",
      image: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Script-Magic.jpg"
    }
  ];

  const steps = isEnglish ? [
    "Choose story and book session",
    "Review character sheets",
    "Start the mystery game",
    "Find clues and solve the case",
    "Reveal the truth and discuss"
  ] : [
    "เลือกเนื้อเรื่อง และจองรอบ",
    "แจกบทบาท และแต่งตัว", 
    "เริ่มเล่น",
    "หาเบาะแส ไขคดี",
    "เปิดเผยความจริง และแลกเปลี่ยน"
  ];

  const handleBooking = () => {
    window.open('https://lin.ee/H4D9qos', '_blank');
  };

  const handleTeaser = () => {
    window.open('https://www.tiktok.com/@nkboardgame/video/7525718568109886728', '_blank');
  };

  return (
    <div className="service-detail-page script-mystery-theme">
      <SEOHead 
        title={isEnglish ? "Board Game Script - NK Board Game | Murder Mystery Games Bangkok" : "Board Game Script - NK Board Game | เกมสืบสวนไขคดี"}
        description={isEnglish ? "Murder mystery board game scripts at NK Board Game. Thrilling detective games with role-playing. 3 exciting stories: School Mystery, Hitler's Last Night, Magic School. Perfect for groups 6-15 people." : "Board Game Script เกมสคริปต์ไขคดีสุดระทึก ที่ NK Board Game เกมสืบสวนสุดลุ้น พร้อมการแสดงบทบาท 3 เรื่องน่าติดตาม ปริศนาโรงเรียนมรณะ คืนสุดท้ายฮิตเลอร์หายไป คาถาพิฆาตในห้องต้องประสงค์ เหมาะสำหรับกลุ่ม 6-15 คน ซีคอนบางแค ซีคอนศรีนครินทร์ สามย่านมิตรทาวน์"}
        keywords={isEnglish ? "Board Game Script, Murder Mystery Games, Detective Games, Role Playing Games, Group Games, Bangkok Board Games, NK Board Game, Mystery Solving, Investigation Games" : "Board Game Script, เกมสคริปต์, เกมไขคดี, เกมสืบสวน, เกมแสดงบทบาท, เกมกลุ่ม, บอร์ดเกม, NK Board Game, ไขคดีฆาตกรรม, ซีคอนบางแค, ซีคอนศรีนครินทร์, สามย่านมิตรทาวน์"}
        url={isEnglish ? "https://nkboardgame.com/en/services/board-game-script" : "https://nkboardgame.com/services/board-game-script"}
      />
      {/* Hero Section */}
      <section className="service-hero script-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge script-badge">
                <Skull size={16} />
                <span>{isEnglish ? "Special Game" : "เกมพิเศษ"}</span>
              </div>
              <h1 className="service-title script-title">Board Game Script</h1>
              <p className="service-description script-description">
                {isEnglish 
                  ? "Step into a world of mystery, solve murder cases, and unveil hidden truths with Board Game Script that will immerse you in thrilling stories."
                  : "ก้าวเข้าสู่โลกแห่งความลึกลับ ไขปริศนาการฆาตกรรม และเปิดเผยความจริงที่ซ่อนเร้น ด้วย Board Game Script ที่จะพาคุณดำดิ่งสู่เรื่องราวสุดระทึกขวัญ"
                }
              </p>
              <div className="service-price script-price">
                <span className="price-value">299 {isEnglish ? "Baht" : "บาท"}</span>
                <span className="price-unit">{isEnglish ? "/game" : "/เกม"}</span>
              </div>
              <div className="service-actions">
                <button className="btn-primary script-btn-primary" onClick={handleBooking}>
                  {isEnglish ? "Book Now" : "จองเกมเลย"} <ArrowRight size={16} />
                </button>
                <button className="btn-secondary script-btn-secondary" onClick={handleTeaser}>
                  {isEnglish ? "Watch Teaser" : "ดู Teaser"}
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/NK-Service-02.PNG" 
                alt="Board Game Script"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features script-features">
        <div className="container">
          <h2 className="section-title script-section-title">
            {isEnglish ? "Board Game Script Highlights" : "จุดเด่น Board Game Script"}
          </h2>
          <div className="features-grid">
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <ScrollText size={32} />
              </div>
              <h3>{isEnglish ? "Original Scripts" : "สคริปต์ออริจินัล"}</h3>
              <p>
                {isEnglish 
                  ? "Stories and game mechanics created by the NK Board Game team"
                  : "เรื่องราวและกลไกเกมที่สร้างขึ้นโดยทีมงาน NK Board Game"
                }
              </p>
            </div>
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <Eye size={32} />
              </div>
              <h3>{isEnglish ? "Immersive Gameplay" : "การเล่นเกมที่สมจริง"}</h3>
              <p>
                {isEnglish
                  ? "Game run by professional GM, making you feel completely immersed in the game world"
                  : "ดำเนินเกมโดย GM มืออาชีพ เหมือนคุณได้หลุดเข้าไปอยู่ในโลกของเกมโดยสมบูรณ์"
                }
              </p>
            </div>
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <Users size={32} />
              </div>
              <h3>{isEnglish ? "Character Cosplay" : "คอสเพลย์เป็นตัวละคร"}</h3>
              <p>
                {isEnglish
                  ? "Change outfits to cosplay as your assigned character, maximizing immersion in the story"
                  : "เปลี่ยนชุดเพื่อคอสเพลย์เป็นตัวละครที่เรารับบท เพิ่มความอินในเนื้อเรื่องให้ถึงขีดสุด"
                }
              </p>
            </div>
            <div className="feature-card script-feature-card">
              <div className="feature-icon script-feature-icon">
                <Star size={32} />
              </div>
              <h3>{isEnglish ? "Exclusive in Thailand" : "ที่เดียวในประเทส Thai"}</h3>
              <p>
                {isEnglish
                  ? "If you want to play board game scripts, currently only available at NK Board Game"
                  : "หากต้องการเล่นบอร์ดเกมสคริปต์ ตอนนี้มีแค่เพียงที่ NK Board Game เท่านั้น"
                }
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scripts Collection */}
      <section className="scripts-collection script-collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title script-section-title">
              {isEnglish ? "All Stories" : "เนื้อเรื่องทั้งหมด"}
            </h2>
            <p className="section-subtitle script-subtitle">
              {isEnglish 
                ? "Choose the story that suits your group and timeframe"
                : "เลือกเนื้อเรื่องที่เหมาะกับกลุ่มและระยะเวลาของคุณ"
              }
            </p>
          </div>
          <div className="scripts-grid">
            {scripts.map((script, index) => (
              <div key={index} className="script-card mystery-script-card">
                <div className="script-image">
                  <img src={script.image} alt={isEnglish ? script.nameEn : script.name} />
                </div>
                <div className="script-content">
                  <div className="script-header">
                    <h4 className="script-name">
                      {isEnglish ? script.nameEn : script.name}
                    </h4>
                    <div className="script-theme">
                      {isEnglish ? `Theme: ${script.themeEn}` : `ธีม: ${script.theme}`}
                    </div>
                  </div>
                  <div className="script-ratings">
                    <div className="rating-item">
                      <span className="rating-label">
                        {isEnglish ? "Difficulty" : "ความยาก"}
                      </span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < script.difficulty ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="rating-text">{script.difficulty}/5</span>
                    </div>
                    <div className="rating-item">
                      <span className="rating-label">
                        {isEnglish ? "Investigation" : "สืบสวน"}
                      </span>
                      <div className="rating-stars">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} fill={i < script.investigation ? "currentColor" : "none"} />
                        ))}
                      </div>
                      <span className="rating-text">{script.investigation}/5</span>
                    </div>
                    <div className="rating-item">
                      <span className="rating-label">
                        {isEnglish ? "Role-play" : "สวมบทบาท"}
                      </span>
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
                        <span>{isEnglish ? script.playersEn : script.players}</span>
                      </div>
                      <div className="meta-item">
                        <Clock size={16} />
                        <span>{isEnglish ? script.durationEn : script.duration}</span>
                      </div>
                    </div>
                  </div>
                  <button className="script-select-btn" onClick={handleBooking}>
                    {isEnglish ? "Choose This Story" : "เลือกเนื้อเรื่องนี้"}
                  </button>
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
            <h2 className="section-title script-section-title">
              {isEnglish ? "How to Play" : "ขั้นตอนการเล่น"}
            </h2>
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
            <h2 className="cta-title script-cta-title">
              {isEnglish 
                ? "Ready for a New Experience?" 
                : "พร้อมเปิดประสบการณ์ใหม่แล้วหรือยัง?"
              }
            </h2>
            <p className="cta-description script-cta-description">
              {isEnglish
                ? "Book a Board Game Script session and create unique memories with your gang"
                : "จองรอบ Board Game Script มาสร้างความทรงจำร่วมกับเดอะแก๊งแบบไม่เหมือนใคร"
              }
            </p>
            <div className="cta-actions">
              <button className="btn-primary script-btn-primary" onClick={handleBooking}>
                {isEnglish ? "Book Now" : "จองเลย"} <ArrowRight size={16} />
              </button>
              <button className="btn-secondary script-btn-secondary" onClick={handleBooking}>
                {isEnglish ? "Ask for More Info" : "สอบถามเพิ่มเติม"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BoardGameScript;