import React from "react";
import { Clock, Users, Star, ArrowRight, Trophy, Target, Heart } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../components/SEOHead";

const TeamBuilding = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  return (
    <div className="service-detail-page">
      <SEOHead 
        title={isEnglish ? "Team Building - NK Board Game | Corporate Team Building Activities Bangkok" : "Team Building - NK Board Game | กิจกรรมสร้างทีมเวิร์คผ่านบอร์ดเกม"}
        description={isEnglish ? "Corporate team building activities through board games. Perfect for organizations and friend groups. Develop relationships, communication, and teamwork skills. NK Board Game Bangkok." : "กิจกรรม Team Building สร้างทีมเวิร์คผ่านบอร์ดเกม เหมาะสำหรับองค์กรและกลุ่มเพื่อน พัฒนาความสัมพันธ์ การสื่อสาร การทำงานเป็นทีม NK Board Game บางแค ศรีนครินทร์ สามย่าน"}
        keywords={isEnglish ? "Team Building, Corporate Team Building, Board Game Team Building, Team Building Activities, Corporate Events, Bangkok Team Building, NK Board Game, Team Building Thailand" : "Team Building, กิจกรรมสร้างทีมเวิร์ค, บอร์ดเกม, กิจกรรมองค์กร, สร้างทีม, ความร่วมมือ, NK Board Game, ซีคอนบางแค, ซีคอนศรีนครินทร์, สามย่านมิตรทาวน์"}
        url={isEnglish ? "https://nkboardgame.com/en/services/team-building" : "https://nkboardgame.com/services/team-building"}
      />
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Users size={16} />
                <span>{isEnglish ? "Build Teamwork" : "สร้างทีมเวิร์ค"}</span>
              </div>
              <h1 className="service-title">Team Building</h1>
              <p className="service-description">
                {isEnglish ? (
                  <>Team-building activities through board games, perfect for organizations and friend groups.<br/>
                  Develop relationships, communication, and teamwork skills.</>
                ) : (
                  <>กิจกรรมสร้างทีมเวิร์คผ่านบอร์ดเกม เหมาะสำหรับองค์กรและกลุ่มเพื่อน<br/>
                  พัฒนาความสัมพันธ์ การสื่อสาร และการทำงานเป็นทีม</>
                )}
              </p>
              <div className="service-price">
                <span className="price-value">
                  {isEnglish ? "Inquire for Package Details" : "สอบถามแพ็คเกจเพิ่มเติม"}
                </span>
              </div>
              <div className="service-actions">
                <button className="btn-primary" onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}>
                  {isEnglish ? "Inquire about Program" : "สอบถามโปรแกรม"} <ArrowRight size={16} />
                </button>
                <a 
                  href="tel:0654123939" 
                  className="btn-secondary"
                  style={{
                    display: 'inline-block',
                    textDecoration: 'none',
                    textAlign: 'center'
                  }}
                >
                  {isEnglish ? "Call 065-412-3939" : "โทร 065-412-3939"}
                </a>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-9.jpg" 
                alt="Team Building"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section team-building-benefits">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ประโยชน์ของ Team Building</h2>
            <p className="section-subtitle">
              เสริมสร้างทีมเวิร์คผ่านกิจกรรมที่สนุกและมีประสิทธิภาพ
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Heart size={32} />
              </div>
              <h3>สร้างความสัมพันธ์</h3>
              <p>เสริมสร้างความผูกพันและความเข้าใจกันระหว่างสมาชิกในทีม</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Target size={32} />
              </div>
              <h3>พัฒนาการสื่อสาร</h3>
              <p>ฝึกทักษะการสื่อสารที่ชัดเจนและมีประสิทธิภาพ</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3>พัฒนาทักษะการทำงานเป็นทีม</h3>
              <p>พัฒนาความร่วมมือในการวางแผนและการตัดสินใจร่วมกันในทีม ผู้เล่นจะเรียนรู้บทบาทหน้าที่ของตน รวมถึงการสนับสนุนเพื่อนร่วมทีม</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Trophy size={32} />
              </div>
              <h3>กระตุ้นการคิดวิเคราะห์และแก้ปัญหา</h3>
              <p>ฝึกการคิดกลยุทธ์เพื่อแก้ไขปัญหา อย่างมีเหตุผลภายใต้ข้อจำกัดบางอย่าง</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Star size={32} />
              </div>
              <h3>ส่งเสริมความคิดสร้างสรรค์</h3>
              <p>ให้ผู้เล่นได้ใช้จินตนาการ พัฒนาความคิดนอกกรอบ เพื่อใช้ในการทำงานจริง</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Clock size={32} />
              </div>
              <h3>เสริมทักษะการจัดการเวลาและความกดดัน</h3>
              <p>เกมที่มีเวลาจำกัดช่วยฝึกการตัดสินใจเร็วภายใต้แรงกดดัน</p>
            </div>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ขั้นตอนการจัดกิจกรรม</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">1</div>
              </div>
              <div className="process-content">
                <h3>ปรึกษาและวางแผน</h3>
                <p>สอบถามความต้องการ จำนวนคน งบประมาณ และวัตถุประสงค์</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">2</div>
              </div>
              <div className="process-content">
                <h3>ออกแบบโปรแกรม</h3>
                <p>เลือกเกมและกิจกรรมที่เหมาะกับทีมและเป้าหมายของคุณ</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">3</div>
              </div>
              <div className="process-content">
                <h3>จัดกิจกรรม</h3>
                <p>ทีมงาน Facilitator มืออาชีพจะคอยดูแลและอำนวยความสะดวก</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">4</div>
              </div>
              <div className="process-content">
                <h3>สรุปผลและประเมิน</h3>
                <p>วิเคราะห์ผลและให้คำแนะนำเพื่อพัฒนาทีมต่อไป</p>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Custom Solutions */}
      <section className="custom-section">
        <div className="container">
          <div className="custom-content">
            <div className="custom-text">
              <h2 className="section-title">โซลูชันเฉพาะองค์กร</h2>
              <p>
                เรามีบริการออกแบบกิจกรรมเฉพาะตามความต้องการขององค์กร 
                ไม่ว่าจะเป็นการแก้ปัญหาเฉพาะ หรือเสริมสร้างทักษะที่ต้องการ
              </p>
              <div className="custom-features">
                <div className="custom-feature">
                  <span>🎯</span>
                  <p>วิเคราะห์ปัญหาและออกแบบกิจกรรม</p>
                </div>
                <div className="custom-feature">
                  <span>📊</span>
                  <p>มีการประเมินผลและติดตามหลังกิจกรรม</p>
                </div>
                <div className="custom-feature">
                  <span>👥</span>
                  <p>Facilitator ที่มีประสบการณ์เฉพาะด้าน</p>
                </div>
              </div>
              <button className="btn-primary" onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}>
                ขอคำปรึกษา <ArrowRight size={16} />
              </button>
            </div>
            <div className="custom-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Building-01.jpg" 
                alt="โซลูชันเฉพาะองค์กร"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="booking-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ข้อมูลการจอง</h2>
          </div>
          <div className="booking-cards">
            <div className="booking-card">
              <h3>📅 การจองล่วงหน้า</h3>
              <p>แนะนำให้จองล่วงหน้าอย่างน้อย 2 สัปดาห์ เพื่อการเตรียมการที่ดีที่สุด</p>
            </div>
            <div className="booking-card">
              <h3>⏰ เวลาที่เหมาะสม</h3>
              <p>เช้า 9:00-12:00 หรือ บ่าย 13:00-16:00 เหมาะสำหรับกิจกรรมองค์กร</p>
            </div>
            <div className="booking-card">
              <h3>👥 จำนวนคนขั้นต่ำ</h3>
              <p>รับจัดกิจกรรมตั้งแต่ 8 คนขึ้นไป สูงสุด 50 คนต่อรอบ</p>
            </div>
            <div className="booking-card">
              <h3>💰 การชำระเงิน</h3>
              <p>มัดจำ 50% เมื่อยืนยันการจอง ส่วนที่เหลือชำระในวันจัดกิจกรรม</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมสร้างทีมที่แข็งแกร่งแล้วหรือยัง?</h2>
            <p className="cta-description">
              ติดต่อเราเพื่อขอคำปรึกษาและวางแผนกิจกรรม Team Building ที่เหมาะกับองค์กรของคุณ
            </p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}>
                สอบถามรายละเอียด <ArrowRight size={16} />
              </button>
              <a 
                href="tel:0654123939" 
                className="btn-secondary"
                style={{
                  display: 'inline-block',
                  textDecoration: 'none',
                  textAlign: 'center'
                }}
              >
                โทร 065-412-3939
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamBuilding;