import React from "react";
import { Users, Heart, Target, Trophy, Clock, MapPin } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";

const About = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  return (
    <div className="about-page">
      <SEOHead 
        title={isEnglish ? "About Us - NK Board Game | #1 Board Game Shop in Thailand" : "เกี่ยวกับเรา - NK Board Game | ร้านบอร์ดเกม อันดับ 1 ในไทย"}
        description={isEnglish ? "The story of NK Board Game - Thailand's #1 board game shop for Gen Z. Founded in 2023, over 60,000+ members. Board game shops in Bangkae, Srinakarin, Samyan, Phra Nakhon. 4 branches. 35 team members." : "เรื่องราวของ NK Board Game ร้านบอร์ดเกมอันดับ 1 ในใจชาว Gen Z ก่อตั้งปี 2023 สมาชิกกว่า 60,000+ คน ร้านบอร์ดเกมบางแค ศรีนครินทร์ สามย่าน พระนคร 4 สาขา ทีมงาน 35 คน"}
        keywords={isEnglish ? "About Us, NK Board Game, Board Game Shop, Company History, Team, Board Games, Gen Z, 2023, Thailand" : "เกี่ยวกับเรา, NK Board Game, ร้านบอร์ดเกม, ประวัติร้าน, ทีมงาน, บอร์ดเกม, Gen Z, 2023, ซีคอนบางแค, ซีคอนศรีนครินทร์, สามย่านมิตรทาวน์, ปากคลองตลาด"}
        url={isEnglish ? "https://nkboardgame.com/en/about" : "https://nkboardgame.com/about"}
      />
      {/* Hero Section */}
      <section className="hero-section about-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            {isEnglish ? (
              <>About <span className="hero-highlight">NK Board Game</span></>
            ) : (
              <>เกี่ยวกับ <span className="hero-highlight">NK Board Game</span></>
            )}
          </h1>
          <p className="hero-subtitle">
            {isEnglish ? (
              <>We believe board games are not just fun, but a tool to connect people,<br />
              spark positive energy, and cultivate a mindset of learning and growth together</>
            ) : (
              <>เราเชื่อว่าบอร์ดเกมไม่ใช่แค่ความสนุก แต่มันคือเครื่องมือในการเชื่อมโยงผู้คน<br />
              จุดประกายพลังบวก และหล่อหลอม Mindset แห่งการเรียนรู้และการเติบโตไปด้วยกัน</>
            )}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">{t("about.story_title")}</h2>
              <h3 className="story-subtitle">{t("about.story_subtitle")}</h3>
              <p>{t("about.story_content.para1")}</p>
              <p>{t("about.story_content.para2")}</p>
              <p>{t("about.story_content.para3")}</p>
              <p>{t("about.story_content.para4")}</p>
              <p>{t("about.story_content.para5")}</p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <div className="stat-number">{t("about.stats.founded_year")}</div>
                <div className="stat-label stat-label-dark">{t("about.stats.founded")}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{t("about.stats.member_count")}</div>
                <div className="stat-label stat-label-dark">{t("about.stats.members")}</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">{t("about.stats.branch_count")}</div>
                <div className="stat-label stat-label-dark">{t("about.stats.branches")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section" style={{paddingBottom: '60px'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isEnglish ? "NK Family" : "ครอบครัว NK"}
            </h2>
            <p className="section-subtitle">
              {isEnglish ? "A team passionate about board games and ready to offer the best recommendations." : "ทีมงานที่หลงใหลในบอร์ดเกมและพร้อมให้คำแนะนำที่ดีที่สุด"}
            </p>
          </div>
          <div className="team-grid">
            {/* Co-founders */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-01.png" alt="North" />
              </div>
              <h3 className="member-name">North</h3>
              <p className="member-role">Co-founder, CEO</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-02.jpg" alt="Kritconfirm" />
              </div>
              <h3 className="member-name">Kritconfirm</h3>
              <p className="member-role">Co-founder</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Fox.jpg" alt="Fox" />
              </div>
              <h3 className="member-name">Fox</h3>
              <p className="member-role">Co-founder</p>
            </div>
            
            {/* Branch Managers */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Tiger.jpg" alt="Tiger" />
              </div>
              <h3 className="member-name">Tiger</h3>
              <p className="member-role">Branch Manager</p>
              <p className="member-gen">NK Gen 1</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Bew.jpg" alt="Bew" />
              </div>
              <h3 className="member-name">Bew</h3>
              <p className="member-role">Branch Manager</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Bentz.jpg" alt="Bentz" />
              </div>
              <h3 className="member-name">Bentz</h3>
              <p className="member-role">Branch Manager</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            
            {/* Product Managers */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-IY.jpg" alt="IY" />
              </div>
              <h3 className="member-name">IY</h3>
              <p className="member-role">Product Manager</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Mingkwan.jpg" alt="Mingkwan" />
              </div>
              <h3 className="member-name">Mingkwan</h3>
              <p className="member-role">Product Manager</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            
            {/* Game Masters - NK Gen 1 */}
            
            {/* Game Masters - NK Gen 2 */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Heart.jpg" alt="Heart" />
              </div>
              <h3 className="member-name">Heart</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Khaimuk.jpg" alt="Khaimuk" />
              </div>
              <h3 className="member-name">Khaimuk</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Klong.jpg" alt="Klong" />
              </div>
              <h3 className="member-name">Klong</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-New.jpg" alt="New" />
              </div>
              <h3 className="member-name">New</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Phukaow.jpg" alt="Phukhaw" />
              </div>
              <h3 className="member-name">Phukhaw</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            
            {/* Game Masters - NK Gen 3 */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Breeze.jpg" alt="Breeze" />
              </div>
              <h3 className="member-name">Breeze</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Fiat.jpg" alt="Fiat" />
              </div>
              <h3 className="member-name">Fiat</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Get.jpg" alt="Get" />
              </div>
              <h3 className="member-name">Get</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Nut.jpg" alt="Nut" />
              </div>
              <h3 className="member-name">Nut</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Pla.jpg" alt="Pla" />
              </div>
              <h3 className="member-name">Pla</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Vin.jpg" alt="Vin" />
              </div>
              <h3 className="member-name">Vin</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            
            {/* Game Masters - NK New Gen */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Boss.jpg" alt="Boss" />
              </div>
              <h3 className="member-name">Boss</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Game.jpg" alt="Game" />
              </div>
              <h3 className="member-name">Game</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Jaoh.jpg" alt="Ja-Oh" />
              </div>
              <h3 className="member-name">Ja-Oh</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Khaw.jpg" alt="Khaw" />
              </div>
              <h3 className="member-name">Khaw</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Kong.jpg" alt="Kong" />
              </div>
              <h3 className="member-name">Kong</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Min.jpg" alt="Min" />
              </div>
              <h3 className="member-name">Min</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Numpeth.jpg" alt="Nampetch" />
              </div>
              <h3 className="member-name">Nampetch</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Pong.jpg" alt="Pong" />
              </div>
              <h3 className="member-name">Pong</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Prem.jpg" alt="Prem" />
              </div>
              <h3 className="member-name">Prem</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Runz.jpg" alt="Runz" />
              </div>
              <h3 className="member-name">Runz</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            
            {/* Support Team */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-AnAn.jpg" alt="AnAn" />
              </div>
              <h3 className="member-name">AnAn</h3>
              <p className="member-role">Support</p>
              <p className="member-gen">NK Gen 1</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Pepsi.jpg" alt="Pepsi" />
              </div>
              <h3 className="member-name">Pepsi</h3>
              <p className="member-role">Support</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Fadil.jpg" alt="Fadil" />
              </div>
              <h3 className="member-name">Fadil</h3>
              <p className="member-role">Support</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Nano.jpg" alt="Nano" />
              </div>
              <h3 className="member-name">Nano</h3>
              <p className="member-role">Support</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Memee.jpg" alt="Memee" />
              </div>
              <h3 className="member-name">Memee</h3>
              <p className="member-role">Support</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Ked.jpg" alt="Ked" />
              </div>
              <h3 className="member-name">Ked</h3>
              <p className="member-role">Support</p>
              <p className="member-gen">NK New Gen</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;