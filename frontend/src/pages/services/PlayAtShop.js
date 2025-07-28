import React from "react";
import { Clock, Users, Star, ArrowRight, Gamepad2, MapPin, Car, Train } from "lucide-react";
import SEOHead from "../../components/SEOHead";

// New NK Hit Games data
const nkHitGames = [
  {
    name: "เจ้าหญิงจอมแก่น",
    image: "https://cf.geekdo-images.com/HuWvVU2tcff-vu3EjPtk6Q__original/img/K2Fopgt-7pfYCu8jtlrcWJ92yeU=/0x0/filters:format(jpeg)/pic7605211.jpg",
    category: "Family",
    players: "3-6 คน",
    duration: "30-40 นาที"
  },
  {
    name: "ผีถ้วยแก้ว",
    image: "https://cf.geekdo-images.com/v8FKdlNJW6WhHQMmDYR_iQ__original/img/4jvTBDDGYsSy-D3wPZftE0nuvTU=/0x0/filters:format(png)/pic8645981.png",
    category: "Bluffing",
    players: "5-9 คน",
    duration: "15-60 นาที"
  },
  {
    name: "Salem 1692",
    image: "https://cf.geekdo-images.com/xUurReSy2Amlx4hGj1fPvQ__original/img/XwLUot6yxSoz4j4yorfVSNVPqMw=/0x0/filters:format(jpeg)/pic4204062.jpg",
    category: "Bluffing",
    players: "4-12 คน",
    duration: "25-35 นาที"
  },
  {
    name: "Flip 7",
    image: "https://cf.geekdo-images.com/YrQxEB9Ef0kQorRApzG5vQ__original/img/hK6k-x_GYfooemrkkRuF0bTvKxE=/0x0/filters:format(jpeg)/pic8780246.jpg",
    category: "Party",
    players: "3-18 คน",
    duration: "20 นาที"
  },
  {
    name: "Deductio",
    image: "https://cf.geekdo-images.com/zHrnFegi_L7MoWdhMB-l9g__original/img/yytyZ-Phd5v2GNGpUb47NNeeMhU=/0x0/filters:format(jpeg)/pic7716883.jpg",
    category: "Deduction",
    players: "2-4 คน",
    duration: "20 นาที"
  },
  {
    name: "The Rich and the Good",
    image: "https://cf.geekdo-images.com/CrAzRoBFWWz6bbDTlzY23Q__original/img/ieUuBn7WH6Iuc-ZQ2zbrecR34Qo=/0x0/filters:format(png)/pic7061922.png",
    category: "Strategy",
    players: "3-5 คน",
    duration: "45 นาที"
  },
  {
    name: "Age of Innovation",
    image: "https://cf.geekdo-images.com/D1vrcFEptCEoD8Z6s_iRfw__original/img/1vY0K3wSqlYXq0JEylSI-7agxKs=/0x0/filters:format(jpeg)/pic7430993.jpg",
    category: "Strategy",
    players: "3-5 คน",
    duration: "45-200 นาที"
  },
  {
    name: "1830: Railways & Robber Barons",
    image: "https://cf.geekdo-images.com/3EmD1SEI5fVpR4rbdkU0AA__original/img/M6qiL7ZNU_mjgZXHZjOrVxNamfU=/0x0/filters:format(jpeg)/pic882119.jpg",
    category: "Strategy",
    players: "3-7 คน",
    duration: "180-360 นาที"
  }
];

const PlayAtShop = () => {
  return (
    <div className="service-detail-page">
      <SEOHead 
        title="เล่นที่ร้าน - NK Board Game | ร้านบอร์ดเกม บางแค ศรีนครินทร์ สามย่าน"
        description="เล่นบอร์ดเกมที่ร้าน NK Board Game ร้านบอร์ดเกมติดรถไฟฟ้า 3 สาขา บางแค ศรีนครินทร์ สามย่าน เกมกว่า 1000+ เกม บอร์ดเกม ปาร์ตี้เกม การ์ดเกม ทีมงานน่ารัก เป็นกันเอง"
        keywords="เล่นที่ร้าน, ร้านบอร์ดเกม, ร้านบอร์ดเกม บางแค, ร้านบอร์ดเกม ศรีนครินทร์, ร้านบอร์ดเกม สามย่าน, ร้านบอร์ดเกม ติดรถไฟฟ้า, บอร์ดเกม, ปาร์ตี้เกม, การ์ดเกม, เล่นเกม, NK Board Game"
        url="https://nkboardgame.com/services/play-at-shop"
      />
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Gamepad2 size={16} />
                <span>บริการยอดนิยม</span>
              </div>
              <h1 className="service-title">เล่นที่ร้าน</h1>
              <p className="service-description">
                ให้ NK เป็นบ้านหลังที่สองของคุณ<br/>
                เราพร้อมต้อนรับคุณและเดอะแก๊งด้วยพื้นที่กว้างขวาง เหมาะสำหรับใช้เวลาร่วมกันอย่างใกล้ชิด เพลิดเพลินกับเกมกว่า 1,000 เกมที่เราคัดสรรมาให้ และพบกับทีมงานสุดเป็นกันเอง ที่พร้อมแนะนำและดูแลคุณเหมือนเพื่อนคนหนึ่ง
              </p>
              <div className="service-actions">
                <button 
                  className="btn-primary"
                  onClick={() => window.open('https://lin.ee/H4D9qos', '_blank')}
                >
                  จองโต๊ะเลย <ArrowRight size={16} />
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => window.open('tel:065-412-3939', '_self')}
                >
                  โทรสอบถาม
                </button>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/PlayAtStore.JPG" 
                alt="เล่นที่ร้าน"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="service-features">
        <div className="container">
          <h2 className="section-title">จุดเด่นของ NK</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Gamepad2 size={32} />
              </div>
              <h3>เกมมากกว่า 1,000 เกม</h3>
              <p>คอลเลกชันเกมครบครันจากทั่วโลก อัพเดทเกมใหม่ทุกเดือน</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>บรรยากาศสุดชิล</h3>
              <p>นั่งยาว ๆ เหมือนอยู่บ้านเพื่อนได้เลย</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>ทีมงานน่ารัก เป็นกันเอง</h3>
              <p>เล่นไม่เป็น ไม่ใช่ปัญหา ให้ทีมงานเราดูแลให้เอง</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Train size={32} />
              </div>
              <h3>ติดรถไฟฟ้า ทุกสาขา</h3>
              <p>ทุกสาขาของเราตั้งอยู่ในศูนย์การค้าที่เชื่อมต่อกับรถไฟฟ้า</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Car size={32} />
              </div>
              <h3>ที่จอดรถเยอะมาก</h3>
              <p>ไม่ต้องวนนานให้เสียเวลา</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>จอดรถฟรี!</h3>
              <p>เฉพาะสาขาซีคอนบางแค และซีคอนศรีนครินทร์</p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Collection */}
      <section className="game-collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">เกมฮิต NK</h2>
            <p className="section-subtitle">
              เลือกดูเกมที่ลูกค้าชื่นชอบมากที่สุด
            </p>
          </div>
          <div className="games-grid">
            {nkHitGames.map((game, index) => (
              <div key={index} className="game-card">
                <div className="game-image">
                  <img 
                    src={game.image} 
                    alt={game.name}
                    className="game-thumbnail"
                  />
                </div>
                <div className="game-content">
                  <h4 className="game-name">{game.name}</h4>
                  <div className="game-info">
                    <div className="game-meta">
                      <span className="game-category">{game.category}</span>
                      <span className="game-players">{game.players}</span>
                    </div>
                    <div className="game-duration">{game.duration}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ค่าบริการ</h2>
          </div>
          
          {/* Branch Pricing Tables */}
          <div className="branch-pricing">
            {/* ซีคอนบางแค */}
            <div className="branch-card">
              <h3 className="branch-title">สาขาซีคอนบางแค</h3>
              <div className="pricing-table">
                <div className="table-header">
                  <div className="table-cell"></div>
                  <div className="table-cell">ชั่วโมง</div>
                  <div className="table-cell">วัน</div>
                  <div className="table-cell">เดือน</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">นักเรียน นักศึกษา</div>
                  <div className="table-cell price">36</div>
                  <div className="table-cell price">108</div>
                  <div className="table-cell price">599</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">บุคคลทั่วไป</div>
                  <div className="table-cell price">45</div>
                  <div className="table-cell price">168</div>
                  <div className="table-cell price">799</div>
                </div>
              </div>
            </div>

            {/* ซีคอนศรีนครินทร์ */}
            <div className="branch-card">
              <h3 className="branch-title">สาขาซีคอนศรีนครินทร์</h3>
              <div className="pricing-table">
                <div className="table-header">
                  <div className="table-cell"></div>
                  <div className="table-cell">ชั่วโมง</div>
                  <div className="table-cell">วัน</div>
                  <div className="table-cell">เดือน</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">นักเรียน นักศึกษา</div>
                  <div className="table-cell price">36</div>
                  <div className="table-cell price">108</div>
                  <div className="table-cell price">599</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">บุคคลทั่วไป</div>
                  <div className="table-cell price">45</div>
                  <div className="table-cell price">168</div>
                  <div className="table-cell price">799</div>
                </div>
              </div>
            </div>

            {/* สามย่านมิตรทาวน์ */}
            <div className="branch-card">
              <h3 className="branch-title">สาขาสามย่านมิตรทาวน์</h3>
              <div className="pricing-table">
                <div className="table-header">
                  <div className="table-cell"></div>
                  <div className="table-cell">ชั่วโมง</div>
                  <div className="table-cell">วัน</div>
                  <div className="table-cell">เดือน</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">นักเรียน นักศึกษา</div>
                  <div className="table-cell price">40</div>
                  <div className="table-cell price">159</div>
                  <div className="table-cell price">799</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">บุคคลทั่วไป</div>
                  <div className="table-cell price">50</div>
                  <div className="table-cell price">199</div>
                  <div className="table-cell price">999</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default PlayAtShop;