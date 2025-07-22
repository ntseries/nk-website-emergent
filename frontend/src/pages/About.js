import React from "react";
import { Users, Heart, Target, Trophy, Clock, MapPin } from "lucide-react";

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            เกี่ยวกับ <span className="hero-highlight">NK Board Game</span>
          </h1>
          <p className="hero-subtitle">
            ร้านบอร์ดเกมที่ถูกสร้างขึ้นด้วยความรักและความหลงใหลในเกม<br />
            พร้อมให้บริการวัยรุ่นด้วยประสบการณ์ที่ไม่เหมือนใคร
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">เรื่องราวของเรา</h2>
              <p>
                NK Board Game เกิดขึ้นจากความฝันของกลุ่มเพื่อนวัยรุ่นที่รักบอร์ดเกม 
                เราต้องการสร้างพื้นที่ที่วัยรุ่นสามารถมาพบปะ เรียนรู้ และสนุกสนานไปด้วยกัน
              </p>
              <p>
                ด้วยประสบการณ์กว่า 5 ปีในการให้บริการ เราได้พัฒนาและปรับปรุงบริการ
                ให้ตอบโจทย์ความต้องการของลูกค้าวัยรุ่นมากที่สุด
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card">
                <div className="stat-number">2019</div>
                <div className="stat-label">ปีที่ก่อตั้ง</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">10K+</div>
                <div className="stat-label">ลูกค้าที่พอใจ</div>
              </div>
              <div className="stat-card">
                <div className="stat-number">500+</div>
                <div className="stat-label">เกมในคลังสต๊อก</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ค่านิยมของเรา</h2>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <Heart size={24} />
              </div>
              <h3 className="value-title">ความรัก</h3>
              <p className="value-description">
                เรารักบอร์ดเกมและรักลูกค้าทุกคน พร้อมให้บริการด้วยใจที่จริงใส
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Users size={24} />
              </div>
              <h3 className="value-title">ความเป็นครอบครัว</h3>
              <p className="value-description">
                เราเชื่อว่าบอร์ดเกมสร้างความสัมพันธ์ที่ดีและความเป็นครอบครัว
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Target size={24} />
              </div>
              <h3 className="value-title">คุณภาพ</h3>
              <p className="value-description">
                เราให้ความสำคัญกับคุณภาพของบริการและประสบการณ์ของลูกค้า
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <Trophy size={24} />
              </div>
              <h3 className="value-title">ความเป็นเลิศ</h3>
              <p className="value-description">
                เราพยายามสร้างประสบการณ์ที่ยอดเยี่ยมให้กับลูกค้าทุกครั้ง
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ทีมงานของเรา</h2>
            <p className="section-subtitle">
              ทีมงานที่หลงใหลในบอร์ดเกมและพร้อมให้คำแนะนำที่ดีที่สุด
            </p>
          </div>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="นิค" />
              </div>
              <h3 className="member-name">นิค</h3>
              <p className="member-role">ผู้ก่อตั้ง & CEO</p>
              <p className="member-description">
                หลงรักบอร์ดเกมมากว่า 10 ปี เชี่ยวชาญเกม Strategy และ Euro Games
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612c64f?w=200&h=200&fit=crop&crop=face" alt="เคท" />
              </div>
              <h3 className="member-name">เคท</h3>
              <p className="member-role">หัวหน้าบริการลูกค้า</p>
              <p className="member-description">
                ผู้เชี่ยวชาญด้าน Party Games และ Social Deduction เก่งสร้างบรรยากาศสนุกสนาน
              </p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="แม็กซ์" />
              </div>
              <h3 className="member-name">แม็กซ์</h3>
              <p className="member-role">Dungeon Master</p>
              <p className="member-description">
                DM มืออาชีพที่สร้างการผจญภัย D&D ที่น่าตื่นเต้นและไม่มีวันลืม
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="location-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ที่ตั้งสาขา</h2>
          </div>
          <div className="locations-grid">
            <div className="location-card">
              <div className="location-icon">
                <MapPin size={24} />
              </div>
              <h3 className="location-name">สยามสแควร์</h3>
              <p className="location-address">ชั้น 4 สยามสแควร์ เขตปทุมวัน กรุงเทพฯ</p>
              <div className="location-hours">
                <Clock size={16} />
                <span>10:00 - 22:00 ทุกวัน</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <MapPin size={24} />
              </div>
              <h3 className="location-name">เซ็นทรัลเวอร์ลด์</h3>
              <p className="location-address">ชั้น 7 เซ็นทรัลเวอร์ลด์ เขตปทุมวัน กรุงเทพฯ</p>
              <div className="location-hours">
                <Clock size={16} />
                <span>10:00 - 22:00 ทุกวัน</span>
              </div>
            </div>
            <div className="location-card">
              <div className="location-icon">
                <MapPin size={24} />
              </div>
              <h3 className="location-name">เมกะ บางนา</h3>
              <p className="location-address">ชั้น 2 เมกะ บางนา เขตบangนา กรุงเทพฯ</p>
              <div className="location-hours">
                <Clock size={16} />
                <span>10:00 - 22:00 ทุกวัน</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;