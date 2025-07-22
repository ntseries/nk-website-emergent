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
                <div className="stat-label about-stat-label">จำนวนสมาชิก</div>
              </div>
              <div className="stat-card about-stat-card">
                <div className="stat-number about-stat-number">1,000+</div>
                <div className="stat-label about-stat-label">เกมพร้อมเล่น</div>
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
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face" alt="แม็กซ์" />
              </div>
              <h3 className="member-name">แม็กซ์</h3>
              <p className="member-role">Dungeon Master</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face" alt="มิน" />
              </div>
              <h3 className="member-name">มิน</h3>
              <p className="member-role">ผู้จัดการสาขาบางแค</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face" alt="เจ" />
              </div>
              <h3 className="member-name">เจ</h3>
              <p className="member-role">ผู้จัดการสาขาศรีนครินทร์</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=200&h=200&fit=crop&crop=face" alt="ปิง" />
              </div>
              <h3 className="member-name">ปิง</h3>
              <p className="member-role">ผู้จัดการสาขาสามย่าน</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" alt="อาร์ต" />
              </div>
              <h3 className="member-name">อาร์ต</h3>
              <p className="member-role">Game Master</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face" alt="นัท" />
              </div>
              <h3 className="member-name">นัท</h3>
              <p className="member-role">พนักงานต้อนรับ</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face" alt="โบ" />
              </div>
              <h3 className="member-name">โบ</h3>
              <p className="member-role">ผู้ประสานงานกิจกรรม</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&h=200&fit=crop&crop=face" alt="พีช" />
              </div>
              <h3 className="member-name">พีช</h3>
              <p className="member-role">พนักงานบริการลูกค้า</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1507152832244-10d45c7eda57?w=200&h=200&fit=crop&crop=face" alt="เบล" />
              </div>
              <h3 className="member-name">เบล</h3>
              <p className="member-role">เชฟประจำครัว</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=200&h=200&fit=crop&crop=face" alt="มีมี่" />
              </div>
              <h3 className="member-name">มีมี่</h3>
              <p className="member-role">บาริสต้า</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1556157382-97eda2d62296?w=200&h=200&fit=crop&crop=face" alt="ไนซ์" />
              </div>
              <h3 className="member-name">ไนซ์</h3>
              <p className="member-role">ช่างภาพ Photo Booth</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face" alt="ติม" />
              </div>
              <h3 className="member-name">ติม</h3>
              <p className="member-role">ผู้ดูแลระบบเกม</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face" alt="บิ๊งค์" />
              </div>
              <h3 className="member-name">บิ๊งค์</h3>
              <p className="member-role">พนักงานแคชเชียร์</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=face" alt="มายด์" />
              </div>
              <h3 className="member-name">มายด์</h3>
              <p className="member-role">ผู้จัดการทั่วไป</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=face" alt="แจ็ค" />
              </div>
              <h3 className="member-name">แจ็ค</h3>
              <p className="member-role">ผู้ดูแลความสะอาด</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=200&h=200&fit=crop&crop=face" alt="โปร" />
              </div>
              <h3 className="member-name">โปร</h3>
              <p className="member-role">ผู้เชี่ยวชาญเกมกลยุทธ์</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?w=200&h=200&fit=crop&crop=face" alt="เนม" />
              </div>
              <h3 className="member-name">เนม</h3>
              <p className="member-role">ช่วยครัว</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face" alt="ฟิว" />
              </div>
              <h3 className="member-name">ฟิว</h3>
              <p className="member-role">ผู้ช่วยผู้จัดการ</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=200&h=200&fit=crop&crop=face" alt="ก้อง" />
              </div>
              <h3 className="member-name">ก้อง</h3>
              <p className="member-role">ช่างซ่อมบำรุง</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&h=200&fit=crop&crop=face" alt="โอ๊ค" />
              </div>
              <h3 className="member-name">โอ๊ค</h3>
              <p className="member-role">ผู้ช่วย Game Master</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?w=200&h=200&fit=crop&crop=face" alt="มิ้ม" />
              </div>
              <h3 className="member-name">มิ้ม</h3>
              <p className="member-role">พนักงานรักษาความปลอดภัย</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=200&h=200&fit=crop&crop=face" alt="เฟิร์น" />
              </div>
              <h3 className="member-name">เฟิร์น</h3>
              <p className="member-role">ช่าง IT</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1502378735452-bc7d86632805?w=200&h=200&fit=crop&crop=face" alt="วิน" />
              </div>
              <h3 className="member-name">วิน</h3>
              <p className="member-role">ผู้ดูแลสต๊อกเกม</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=200&h=200&fit=crop&crop=face" alt="แมท" />
              </div>
              <h3 className="member-name">แมท</h3>
              <p className="member-role">ผู้จัดการการตลาด</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=200&h=200&fit=crop&crop=face" alt="โน้ต" />
              </div>
              <h3 className="member-name">โน้ต</h3>
              <p className="member-role">ช่างภาพประจำ</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1506863530036-1efeddceb993?w=200&h=200&fit=crop&crop=face" alt="ไอซ์" />
              </div>
              <h3 className="member-name">ไอซ์</h3>
              <p className="member-role">พนักงานประชาสัมพันธ์</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&h=200&fit=crop&crop=face" alt="ออม" />
              </div>
              <h3 className="member-name">ออม</h3>
              <p className="member-role">บัญชีและการเงิน</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://images.unsplash.com/photo-1488508872907-592763824245?w=200&h=200&fit=crop&crop=face" alt="ฟลุ๊ค" />
              </div>
              <h3 className="member-name">ฟลุ๊ค</h3>
              <p className="member-role">ผู้ช่วยทำความสะอาด</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;