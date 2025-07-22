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
            เราเชื่อว่าบอร์ดเกมไม่ใช่แค่ความสนุก แต่มันคือเครื่องมือในการเชื่อมโยงผู้คน<br />
            จุดประกายพลังบวก และหล่อหลอม Mindset แห่งการเรียนรู้และการเติบโตไปด้วยกัน
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2 className="section-title">เรื่องราวของเรา</h2>
              <h3 className="story-subtitle">จากร้านเล็กๆ สู่ชุมชนบอร์ดเกมที่ใหญ่ที่สุดในไทย</h3>
              <p>
                เรื่องราวของเราเริ่มต้นจากร้านเล็กๆ ที่ชื่อว่า "ตั้งกระดาน" ในศูนย์การค้า Platform วงเวียนใหญ่
                ร้านเล็กๆ แห่งนี้มีเพียง 3 โต๊ะ รองรับลูกค้าได้แค่ 16 คน แต่เต็มไปด้วยบรรยากาศอบอุ่น 
                และตั้งใจให้เป็นเหมือน "ห้องนั่งเล่นบ้านเพื่อน" ที่ทุกคนรู้จักกันดี พูดคุยกันอย่างเป็นกันเอง 
                และใช้เวลาร่วมกันอย่างสนุกสนาน
              </p>
              <p>
                ไม่นานกลุ่มนักเรียนและลูกค้ารุ่นแรกๆ ที่มาใช้บริการก็กลายเป็นเพื่อน กลายเป็นครอบครัว 
                และกลายเป็นชุมชนเล็กๆ ที่เติบโตอย่างรวดเร็ว จนร้านเล็กๆ ของเราก็ไม่อาจรองรับได้อีกต่อไป
              </p>
              <p>
                เราจึงตัดสินใจขยับขยายสู่ ห้างซีคอน บางแค และเปลี่ยนชื่อเป็น NK Board Game
                ที่นี่กลายเป็นบ้านหลังใหม่ที่อบอุ่นกว่าเดิม พร้อมพื้นที่รองรับกลุ่มผู้เล่นที่ใหญ่ขึ้น
              </p>
              <p>
                ด้วยความเมตตาและการสนับสนุนจากผู้บริหารของห้างซีคอน NK Board Game จึงเติบโตขึ้นอย่างรวดเร็ว
                กลายเป็น ร้านบอร์ดเกมที่ใหญ่ที่สุดในประเทศไทย พร้อมกิจกรรมและพื้นที่ที่รองรับทุกเพศ ทุกวัย 
                และทุกกลุ่มเพื่อนที่อยากมาสนุกด้วยกัน
              </p>
              <p>
                วันนี้ NK Board Game ไม่ได้มีแค่สาขาซีคอน บางแคเท่านั้น
                แต่เรายังได้ขยายสาขาไปยัง ซีคอนสแควร์ ศรีนครินทร์ และ สามย่านมิตรทาวน์
                เพื่อให้ทุกคนสามารถเข้าถึงโลกของบอร์ดเกมได้ง่ายขึ้น 
                และได้สัมผัสกับบรรยากาศแห่งมิตรภาพและความสนุกที่เราภูมิใจสร้างมาตั้งแต่วันแรก
              </p>
            </div>
            <div className="story-stats">
              <div className="stat-card about-stat-card">
                <div className="stat-number about-stat-number">2022</div>
                <div className="stat-label about-stat-label">ปีที่ก่อตั้ง</div>
              </div>
              <div className="stat-card about-stat-card">
                <div className="stat-number about-stat-number">50K+</div>
                <div className="stat-label about-stat-label">ลูกค้าที่พอใจ</div>
              </div>
              <div className="stat-card about-stat-card">
                <div className="stat-number about-stat-number">1,000+</div>
                <div className="stat-label about-stat-label">เกมพร้อมเล่น</div>
              </div>
              <div className="stat-card about-stat-card">
                <div className="stat-number about-stat-number">30</div>
                <div className="stat-label about-stat-label">ทีมงาน</div>
              </div>
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
    </div>
  );
};

export default About;