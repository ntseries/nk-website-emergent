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
            <h2 className="section-title">ครอบครัว NK</h2>
            <p className="section-subtitle">
              ทีมงานที่หลงใหลในบอร์ดเกมและพร้อมให้คำแนะนำที่ดีที่สุด
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
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Fox.png" alt="Fox" />
              </div>
              <h3 className="member-name">Fox</h3>
              <p className="member-role">Co-founder</p>
            </div>
            
            {/* Branch Managers */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Tiger.png" alt="Tiger" />
              </div>
              <h3 className="member-name">Tiger</h3>
              <p className="member-role">Branch Manager</p>
              <p className="member-gen">NK Gen 1</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Bew.png" alt="Bew" />
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
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Mingkwan.png" alt="Mingkwan" />
              </div>
              <h3 className="member-name">Mingkwan</h3>
              <p className="member-role">Product Manager</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            
            {/* Game Masters NK Gen 1 */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-AnAn.png" alt="AnAn" />
              </div>
              <h3 className="member-name">AnAn</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 1</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Thew.png" alt="Thew" />
              </div>
              <h3 className="member-name">Thew</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 1</p>
            </div>
            
            {/* Game Masters NK Gen 2 */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Breeze.png" alt="NK Gen 3" />
              </div>
              <h3 className="member-name">NK Gen 3</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Heart.png" alt="Heart" />
              </div>
              <h3 className="member-name">Heart</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Khaimuk.png" alt="Khaimuk" />
              </div>
              <h3 className="member-name">Khaimuk</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Klong.png" alt="Klong" />
              </div>
              <h3 className="member-name">Klong</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-New.png" alt="New" />
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
            
            {/* Game Masters NK Gen 3 */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Fiat.png" alt="Fiat" />
              </div>
              <h3 className="member-name">Fiat</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Get.png" alt="Get" />
              </div>
              <h3 className="member-name">Get</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Nut.png" alt="Nut" />
              </div>
              <h3 className="member-name">Nut</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK Gen 3</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Pla.png" alt="Pla" />
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
            
            {/* Game Masters NK New Gen */}
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Boss.png" alt="Boss" />
              </div>
              <h3 className="member-name">Boss</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Game.png" alt="Game" />
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
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Khaw.png" alt="Khaw" />
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
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Min.JPG" alt="Min" />
              </div>
              <h3 className="member-name">Min</h3>
              <p className="member-role">Game Master</p>
              <p className="member-gen">NK New Gen</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Numpeth.jpeg" alt="Nampetch" />
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
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Prem.jpeg" alt="Prem" />
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
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Pepsi.jpg" alt="Pepsi" />
              </div>
              <h3 className="member-name">Pepsi</h3>
              <p className="member-role">Support</p>
              <p className="member-gen">NK Gen 2</p>
            </div>
            <div className="team-member">
              <div className="member-avatar">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Fadil.JPG" alt="Fadil" />
              </div>
              <h3 className="member-name">Fadil</h3>
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
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Team-Ked.png" alt="Ked" />
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