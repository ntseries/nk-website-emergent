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
            <h2 className="section-title">{t('team_building.benefits.title')}</h2>
            <p className="section-subtitle">
              {t('team_building.benefits.subtitle')}
            </p>
          </div>
          <div className="benefits-grid">
            <div className="benefit-card">
              <div className="benefit-icon">
                <Heart size={32} />
              </div>
              <h3>{t('team_building.benefits.items.relationships.title')}</h3>
              <p>{t('team_building.benefits.items.relationships.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Target size={32} />
              </div>
              <h3>{t('team_building.benefits.items.communication.title')}</h3>
              <p>{t('team_building.benefits.items.communication.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3>{t('team_building.benefits.items.teamwork.title')}</h3>
              <p>{t('team_building.benefits.items.teamwork.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Trophy size={32} />
              </div>
              <h3>{t('team_building.benefits.items.problem_solving.title')}</h3>
              <p>{t('team_building.benefits.items.problem_solving.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Star size={32} />
              </div>
              <h3>{t('team_building.benefits.items.creativity.title')}</h3>
              <p>{t('team_building.benefits.items.creativity.description')}</p>
            </div>
            <div className="benefit-card">
              <div className="benefit-icon">
                <Clock size={32} />
              </div>
              <h3>{t('team_building.benefits.items.time_management.title')}</h3>
              <p>{t('team_building.benefits.items.time_management.description')}</p>
            </div>
          </div>
        </div>
      </section>


      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('team_building.process.title')}</h2>
          </div>
          <div className="process-grid">
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">1</div>
              </div>
              <div className="process-content">
                <h3>{t('team_building.process.steps.consult.title')}</h3>
                <p>{t('team_building.process.steps.consult.description')}</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">2</div>
              </div>
              <div className="process-content">
                <h3>{t('team_building.process.steps.design.title')}</h3>
                <p>{t('team_building.process.steps.design.description')}</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">3</div>
              </div>
              <div className="process-content">
                <h3>{t('team_building.process.steps.execute.title')}</h3>
                <p>{t('team_building.process.steps.execute.description')}</p>
              </div>
            </div>
            <div className="process-card">
              <div className="process-icon">
                <div className="step-number">4</div>
              </div>
              <div className="process-content">
                <h3>{t('team_building.process.steps.evaluate.title')}</h3>
                <p>{t('team_building.process.steps.evaluate.description')}</p>
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
              <h2 className="section-title">{t('team_building.solutions.title')}</h2>
              <p>
                {t('team_building.solutions.description')}
              </p>
              <div className="custom-features">
                <div className="custom-feature">
                  <span>🎯</span>
                  <p>{t('team_building.solutions.features.analyze')}</p>
                </div>
                <div className="custom-feature">
                  <span>📊</span>
                  <p>{t('team_building.solutions.features.evaluate')}</p>
                </div>
                <div className="custom-feature">
                  <span>👥</span>
                  <p>{t('team_building.solutions.features.facilitator')}</p>
                </div>
              </div>
              <button className="btn-primary" onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}>
                {t('team_building.solutions.cta')} <ArrowRight size={16} />
              </button>
            </div>
            <div className="custom-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Building-01.jpg" 
                alt={t('team_building.solutions.title')}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Booking Info */}
      <section className="booking-info-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">{t('team_building.booking.title')}</h2>
          </div>
          <div className="booking-cards">
            <div className="booking-card">
              <h3>{t('team_building.booking.advance_booking.title')}</h3>
              <p>{t('team_building.booking.advance_booking.description')}</p>
            </div>
            <div className="booking-card">
              <h3>{t('team_building.booking.suitable_time.title')}</h3>
              <p>{t('team_building.booking.suitable_time.description')}</p>
            </div>
            <div className="booking-card">
              <h3>{t('team_building.booking.minimum_people.title')}</h3>
              <p>{t('team_building.booking.minimum_people.description')}</p>
            </div>
            <div className="booking-card">
              <h3>{t('team_building.booking.payment.title')}</h3>
              <p>{t('team_building.booking.payment.description')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">{t('team_building.cta.title')}</h2>
            <p className="cta-description">
              {t('team_building.cta.description')}
            </p>
            <div className="cta-actions">
              <button className="btn-primary" onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}>
                {t('team_building.cta.inquire')} <ArrowRight size={16} />
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
                {t('team_building.cta.call')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TeamBuilding;