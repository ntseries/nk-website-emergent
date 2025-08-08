import React from "react";
import { Clock, Users, Star, ArrowRight, Gamepad2, MapPin, Car, Train } from "lucide-react";
import { useTranslation } from "react-i18next";
import SEOHead from "../../components/SEOHead";

const PlayAtShop = () => {
  const { t, i18n } = useTranslation();
  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

// New NK Hit Games data
const nkHitGames = [
  {
    name: "เจ้าหญิงจอมแก่น",
    nameEn: "Rebel Princess",
    image: "https://cf.geekdo-images.com/HuWvVU2tcff-vu3EjPtk6Q__original/img/K2Fopgt-7pfYCu8jtlrcWJ92yeU=/0x0/filters:format(jpeg)/pic7605211.jpg",
    category: "Family",
    categoryEn: "Family",
    players: "3-6 คน",
    playersEn: "3-6 players",
    duration: "30-40 นาที",
    durationEn: "30-40 minutes"
  },
  {
    name: "ผีถ้วยแก้ว", 
    nameEn: "The Haunted Glass",
    image: "https://cf.geekdo-images.com/v8FKdlNJW6WhHQMmDYR_iQ__original/img/4jvTBDDGYsSy-D3wPZftE0nuvTU=/0x0/filters:format(png)/pic8645981.png",
    category: "Bluffing",
    categoryEn: "Bluffing",
    players: "5-9 คน",
    playersEn: "5-9 players",
    duration: "15-60 นาที",
    durationEn: "15-60 minutes"
  },
  {
    name: "Salem 1692",
    nameEn: "Salem 1692",
    image: "https://cf.geekdo-images.com/xUurReSy2Amlx4hGj1fPvQ__original/img/XwLUot6yxSoz4j4yorfVSNVPqMw=/0x0/filters:format(jpeg)/pic4204062.jpg",
    category: "Bluffing",
    categoryEn: "Bluffing", 
    players: "4-12 คน",
    playersEn: "4-12 players",
    duration: "25-35 นาที",
    durationEn: "25-35 minutes"
  },
  {
    name: "Flip 7",
    nameEn: "Flip 7",
    image: "https://cf.geekdo-images.com/YrQxEB9Ef0kQorRApzG5vQ__original/img/hK6k-x_GYfooemrkkRuF0bTvKxE=/0x0/filters:format(jpeg)/pic8780246.jpg",
    category: "Party",
    categoryEn: "Party",
    players: "3-18 คน",
    playersEn: "3-18 players", 
    duration: "20 นาที",
    durationEn: "20 minutes"
  },
  {
    name: "Deductio",
    nameEn: "Deductio",
    image: "https://cf.geekdo-images.com/zHrnFegi_L7MoWdhMB-l9g__original/img/yytyZ-Phd5v2GNGpUb47NNeeMhU=/0x0/filters:format(jpeg)/pic7716883.jpg",
    category: "Deduction",
    categoryEn: "Deduction",
    players: "2-4 คน", 
    playersEn: "2-4 players",
    duration: "20 นาที",
    durationEn: "20 minutes"
  },
  {
    name: "The Rich and the Good",
    nameEn: "The Rich and the Good",
    image: "https://cf.geekdo-images.com/CrAzRoBFWWz6bbDTlzY23Q__original/img/ieUuBn7WH6Iuc-ZQ2zbrecR34Qo=/0x0/filters:format(png)/pic7061922.png",
    category: "Strategy",
    categoryEn: "Strategy",
    players: "1-4 คน",
    playersEn: "1-4 players",
    duration: "60-90 นาที",
    durationEn: "60-90 minutes"
  },
  {
    name: "Age of Innovation",
    nameEn: "Age of Innovation",
    image: "https://cf.geekdo-images.com/D1vrcFEptCEoD8Z6s_iRfw__original/img/1vY0K3wSqlYXq0JEylSI-7agxKs=/0x0/filters:format(jpeg)/pic7430993.jpg",
    category: "Strategy",
    categoryEn: "Strategy",
    players: "1-5 คน",
    playersEn: "1-5 players",
    duration: "60-120 นาที",
    durationEn: "60-120 minutes"
  },
  {
    name: "1830: Railways & Robber Barons",
    nameEn: "1830: Railways & Robber Barons",
    image: "https://cf.geekdo-images.com/3EmD1SEI5fVpR4rbdkU0AA__original/img/M6qiL7ZNU_mjgZXHZjOrVxNamfU=/0x0/filters:format(jpeg)/pic882119.jpg",
    category: "Economic",
    categoryEn: "Economic",
    players: "3-7 คน",
    playersEn: "3-7 players",
    duration: "180-300 นาที",
    durationEn: "180-300 minutes"
  }
];

  return (
    <div className="service-detail-page">
      <SEOHead 
        title={isEnglish ? "Play at Shop - NK Board Game | Board Game Shop Bangkae Srinakarin Samyan" : "เล่นที่ร้าน - NK Board Game | ร้านบอร์ดเกม บางแค ศรีนครินทร์ สามย่าน"}
        description={isEnglish ? "Play board games at NK Board Game shops - 3 branches near BTS/MRT. Bangkae, Srinakarin, Samyan. Over 1000+ games, board games, party games, card games. Lovely, friendly staff." : "เล่นบอร์ดเกมที่ร้าน NK Board Game ร้านบอร์ดเกมติดรถไฟฟ้า 3 สาขา บางแค ศรีนครินทร์ สามย่าน เกมกว่า 1000+ เกม บอร์ดเกม ปาร์ตี้เกม การ์ดเกม ทีมงานน่ารัก เป็นกันเอง ซีคอนบางแค ซีคอนศรีนครินทร์ สามย่านมิตรทาวน์"}
        keywords={isEnglish ? "Play at Shop, Board Game Shop, Board Game Shop Bangkae, Board Game Shop Srinakarin, Board Game Shop Samyan, Board Game Shop near BTS, Board Games, Party Games, Card Games, NK Board Game, Seacon Bangkae, Seacon Square, Samyan Mitrtown" : "เล่นที่ร้าน, ร้านบอร์ดเกม, ร้านบอร์ดเกม บางแค, ร้านบอร์ดเกม ศรีนครินทร์, ร้านบอร์ดเกม สามย่าน, ร้านบอร์ดเกม ติดรถไฟฟ้า, บอร์ดเกม, ปาร์ตี้เกม, การ์ดเกม, เล่นเกม, NK Board Game, ซีคอนบางแค, ซีคอนศรีนครินทร์, สามย่านมิตรทาวน์"}
        url={isEnglish ? "https://nkboardgame.com/en/services/play-at-shop" : "https://nkboardgame.com/services/play-at-shop"}
      />
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Gamepad2 size={16} />
                <span>{isEnglish ? "Popular Service" : "บริการยอดนิยม"}</span>
              </div>
              <h1 className="service-title">
                {isEnglish ? "Play at Shop" : "เล่นที่ร้าน"}
              </h1>
              <p className="service-description">
                {isEnglish ? (
                  <>Let NK be your second home<br/>
                  We welcome you and your gang with spacious areas perfect for spending quality time together. Enjoy over 1,000 games that we've carefully selected, and meet our friendly staff who are ready to guide and take care of you like a friend.</>
                ) : (
                  <>ให้ NK เป็นบ้านหลังที่สองของคุณ<br/>
                  เราพร้อมต้อนรับคุณและเดอะแก๊งด้วยพื้นที่กว้างขวาง เหมาะสำหรับใช้เวลาร่วมกันอย่างใกล้ชิด เพลิดเพลินกับเกมกว่า 1,000 เกมที่เราคัดสรรมาให้ และพบกับทีมงานน่ารัก เป็นกันเอง ที่พร้อมแนะนำและดูแลคุณเหมือนเพื่อนคนหนึ่ง</>
                )}
              </p>
              <div className="service-actions">
                <button 
                  className="btn-primary"
                  onClick={() => window.open('https://lin.ee/H4D9qos', '_blank')}
                >
                  {isEnglish ? "Book a Table Now" : "จองโต๊ะเลย"} <ArrowRight size={16} />
                </button>
                <button 
                  className="btn-secondary"
                  onClick={() => window.open('tel:065-412-3939', '_self')}
                >
                  {isEnglish ? "Contact Us" : "โทรสอบถาม"}
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
          <h2 className="section-title">
            {isEnglish ? "NK's Highlights" : "จุดเด่นของ NK"}
          </h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">
                <Gamepad2 size={32} />
              </div>
              <h3>
                {isEnglish ? "1,000+ Games" : "เกมมากกว่า 1,000 เกม"}
              </h3>
              <p>
                {isEnglish ? "Complete game collection from around the world. New games added every month" : "คอลเลกชันเกมครบครันจากทั่วโลก อัพเดทเกมใหม่ทุกเดือน"}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Star size={32} />
              </div>
              <h3>
                {isEnglish ? "Super Chill Atmosphere" : "บรรยากาศสุดชิล"}
              </h3>
              <p>
                {isEnglish ? "Stay as long as you want, just like hanging out at a friend's place" : "นั่งยาว ๆ เหมือนอยู่บ้านเพื่อนได้เลย"}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Users size={32} />
              </div>
              <h3>
                {isEnglish ? "Friendly & Helpful Staff" : "ทีมงานน่ารัก เป็นกันเอง"}
              </h3>
              <p>
                {isEnglish ? "Don't know how to play? No problem! Our team will take care of you" : "เล่นไม่เป็น ไม่ใช่ปัญหา ให้ทีมงานเราดูแลให้เอง"}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Train size={32} />
              </div>
              <h3>
                {isEnglish ? "Near BTS/MRT All Branches" : "ติดรถไฟฟ้า ทุกสาขา"}
              </h3>
              <p>
                {isEnglish ? "All our branches are located in malls connected to BTS/MRT stations" : "ทุกสาขาของเราตั้งอยู่ในศูนย์การค้าที่เชื่อมต่อกับรถไฟฟ้า"}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <Car size={32} />
              </div>
              <h3>
                {isEnglish ? "Plenty of Parking" : "ที่จอดรถเยอะมาก"}
              </h3>
              <p>
                {isEnglish ? "No need to waste time circling around for parking" : "ไม่ต้องวนนานให้เสียเวลา"}
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <MapPin size={32} />
              </div>
              <h3>
                {isEnglish ? "Free Parking!" : "จอดรถฟรี!"}
              </h3>
              <p>
                {isEnglish ? "Available at Seacon Bangkae and Seacon Square branches only" : "เฉพาะสาขาซีคอนบางแค และซีคอนศรีนครินทร์"}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Game Collection */}
      <section className="game-collection">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">
              {isEnglish ? "NK Hit Games" : "เกมฮิต NK"}
            </h2>
            <p className="section-subtitle">
              {isEnglish ? "Check out our customers' most favorite games" : "เลือกดูเกมที่ลูกค้าชื่นชอบมากที่สุด"}
            </p>
          </div>
          <div className="games-grid">
            {nkHitGames.map((game, index) => (
              <div key={index} className="game-card">
                <div className="game-image">
                  <img 
                    src={game.image} 
                    alt={isEnglish ? game.nameEn : game.name}
                    className="game-thumbnail"
                  />
                </div>
                <div className="game-content">
                  <h4 className="game-name">
                    {isEnglish ? game.nameEn : game.name}
                  </h4>
                  <div className="game-info">
                    <div className="game-meta">
                      <span className="game-category">
                        {isEnglish ? game.categoryEn : game.category}
                      </span>
                      <span className="game-players">
                        {isEnglish ? game.playersEn : game.players}
                      </span>
                    </div>
                    <div className="game-duration">
                      {isEnglish ? game.durationEn : game.duration}
                    </div>
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
            <h2 className="section-title">
              {isEnglish ? "Service Rates" : "ค่าบริการ"}
            </h2>
          </div>
          
          {/* Branch Pricing Tables */}
          <div className="branch-pricing">
            {/* ซีคอนบางแค */}
            <div className="branch-card">
              <h3 className="branch-title">
                {isEnglish ? "Seacon Bangkae Branch" : "สาขาซีคอนบางแค"}
              </h3>
              <div className="pricing-table">
                <div className="table-header">
                  <div className="table-cell"></div>
                  <div className="table-cell">
                    {isEnglish ? "Hourly" : "ชั่วโมง"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Daily" : "วัน"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Monthly" : "เดือน"}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "Student" : "นักเรียน นักศึกษา"}
                  </div>
                  <div className="table-cell price">36</div>
                  <div className="table-cell price">108</div>
                  <div className="table-cell price">599</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "General" : "บุคคลทั่วไป"}
                  </div>
                  <div className="table-cell price">45</div>
                  <div className="table-cell price">168</div>
                  <div className="table-cell price">799</div>
                </div>
              </div>
            </div>

            {/* ซีคอนศรีนครินทร์ */}
            <div className="branch-card">
              <h3 className="branch-title">
                {isEnglish ? "Seacon Square Branch" : "สาขาซีคอนศรีนครินทร์"}
              </h3>
              <div className="pricing-table">
                <div className="table-header">
                  <div className="table-cell"></div>
                  <div className="table-cell">
                    {isEnglish ? "Hourly" : "ชั่วโมง"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Daily" : "วัน"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Monthly" : "เดือน"}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "Student" : "นักเรียน นักศึกษา"}
                  </div>
                  <div className="table-cell price">36</div>
                  <div className="table-cell price">108</div>
                  <div className="table-cell price">599</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "General" : "บุคคลทั่วไป"}
                  </div>
                  <div className="table-cell price">45</div>
                  <div className="table-cell price">168</div>
                  <div className="table-cell price">799</div>
                </div>
              </div>
            </div>

            {/* สามย่านมิตรทาวน์ */}
            <div className="branch-card">
              <h3 className="branch-title">
                {isEnglish ? "Samyan Mitrtown Branch" : "สาขาสามย่านมิตรทาวน์"}
              </h3>
              <div className="pricing-table">
                <div className="table-header">
                  <div className="table-cell"></div>
                  <div className="table-cell">
                    {isEnglish ? "Hourly" : "ชั่วโมง"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Daily" : "วัน"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Monthly" : "เดือน"}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "Student" : "นักเรียน นักศึกษา"}
                  </div>
                  <div className="table-cell price">40</div>
                  <div className="table-cell price">159</div>
                  <div className="table-cell price">799</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "General" : "บุคคลทั่วไป"}
                  </div>
                  <div className="table-cell price">50</div>
                  <div className="table-cell price">199</div>
                  <div className="table-cell price">999</div>
                </div>
              </div>
            </div>

            {/* สาขาพระนคร */}
            <div className="branch-card">
              <h3 className="branch-title">
                {isEnglish ? "Phra Nakhon Branch" : "สาขาพระนคร"}
              </h3>
              <div className="pricing-table">
                <div className="table-header">
                  <div className="table-cell"></div>
                  <div className="table-cell">
                    {isEnglish ? "Hourly" : "ชั่วโมง"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Daily" : "วัน"}
                  </div>
                  <div className="table-cell">
                    {isEnglish ? "Monthly" : "เดือน"}
                  </div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "Student" : "นักเรียน นักศึกษา"}
                  </div>
                  <div className="table-cell price">36</div>
                  <div className="table-cell price">108</div>
                  <div className="table-cell price">599</div>
                </div>
                <div className="table-row">
                  <div className="table-cell customer-type">
                    {isEnglish ? "General" : "บุคคลทั่วไป"}
                  </div>
                  <div className="table-cell price">45</div>
                  <div className="table-cell price">168</div>
                  <div className="table-cell price">799</div>
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