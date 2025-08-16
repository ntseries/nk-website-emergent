import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowRight, Users, Star, Gamepad2, ScrollText, Shield, Camera, Coffee, UsersIcon, X, ChevronLeft, ChevronRight } from "lucide-react";
import { services, testimonials } from "../data/mock";
import { useTranslation } from "react-i18next";
import SEOHead from "../components/SEOHead";

const Home = () => {
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();
  const heroServices = services.slice(0, 3);
  const [activeTab, setActiveTab] = useState("seconbangkhae");
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const currentLanguage = i18n.language || 'th';
  const isEnglish = currentLanguage === 'en';

  const getLocalizedPath = (path) => {
    if (isEnglish) {
      return path === "/" ? "/en" : `/en${path}`;
    }
    return path;
  };

  // Service URL mapping by ID (more reliable than title matching)
  const serviceUrlMapById = {
    1: "/services/play-at-shop",        // เล่นที่ร้าน
    2: "/services/board-game-script",   // Board Game Script
    3: "/services/photo-booth",         // Photo Booth
    4: "/services/food-drink",          // NK Café
    5: "/services/team-building"        // Team Building
  };

  // Navigate to previous/next image
  const goToPrevImage = () => {
    if (selectedImageIndex !== null) {
      const currentImages = galleryData[activeTab].images;
      const prevIndex = selectedImageIndex > 0 ? selectedImageIndex - 1 : currentImages.length - 1;
      setSelectedImageIndex(prevIndex);
    }
  };

  const goToNextImage = () => {
    if (selectedImageIndex !== null) {
      const currentImages = galleryData[activeTab].images;
      const nextIndex = selectedImageIndex < currentImages.length - 1 ? selectedImageIndex + 1 : 0;
      setSelectedImageIndex(nextIndex);
    }
  };

  // Close modal
  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  // Get current image
  const getCurrentImage = () => {
    if (selectedImageIndex !== null) {
      return galleryData[activeTab].images[selectedImageIndex];
    }
    return null;
  };

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        switch(e.key) {
          case 'ArrowLeft':
            goToPrevImage();
            break;
          case 'ArrowRight':
            goToNextImage();
            break;
          case 'Escape':
            closeModal();
            break;
          default:
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedImageIndex, activeTab]);

  // Gallery data for each branch
  const galleryData = {
    seconbangkhae: {
      name: "ซีคอนบางแค",
      nameEn: "Seacon Bangkae",
      images: [
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/DPMX5703.JPG",
          caption: "บรรยากาศการเล่นเกมที่สนุกสนาน",
          captionEn: "Fun game playing atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-2.jpg",
          caption: "พื้นที่เล่นเกมกว้างขวาง",
          captionEn: "Spacious game playing area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-3.jpg",
          caption: "มุมสบายๆ สำหรับนั่งเล่น",
          captionEn: "Comfortable corner for relaxing"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-4.jpg",
          caption: "เกมหลากหลายให้เลือก",
          captionEn: "Variety of games to choose from"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-5.jpg",
          caption: "บรรยากาศการเล่นเป็นทีม",
          captionEn: "Team playing atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-6.jpg",
          caption: "พื้นที่โล่งสบาย",
          captionEn: "Open and comfortable space"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-7.jpg",
          caption: "มุมอาหารและเครื่องดื่ม",
          captionEn: "Food and beverage corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-8.jpg",
          caption: "บริเวณเช็คอิน",
          captionEn: "Check-in area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-9.jpg",
          caption: "บรรยากาศร้านอบอุ่น",
          captionEn: "Warm store atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-10.jpg",
          caption: "พื้นที่เล่นเกมเพิ่มเติม",
          captionEn: "Additional game playing area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-11.jpg",
          caption: "บรรยากาศสนุกสนานเพิ่มเติม",
          captionEn: "Additional fun atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-12.jpg",
          caption: "พื้นที่กิจกรรมน่าสนใจ",
          captionEn: "Interesting activity area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-13.JPG",
          caption: "มุมเล่นเกมสุดเพลิน",
          captionEn: "Enjoyable game corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-14.jpg",
          caption: "บรรยากาศแสนสนุก",
          captionEn: "Super fun atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-15.jpg",
          caption: "พื้นที่พักผ่อนระหว่างเล่น",
          captionEn: "Rest area between games"
        }
      ]
    },
    seconsrinakarin: {
      name: "ซีคอนศรีนครินทร์",
      nameEn: "Seacon Srinakarin", 
      images: [
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-01.jpg",
          caption: "ห้องเล่นเกมขนาดใหญ่",
          captionEn: "Large game room"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-02.jpg", 
          caption: "พื้นที่นั่งสบาย",
          captionEn: "Comfortable seating area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-03.jpg",
          caption: "มุมเล่นเกมส่วนตัว",
          captionEn: "Private game corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-04.jpg",
          caption: "ชั้นเก็บเกม",
          captionEn: "Game storage shelves"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-05.jpg",
          caption: "บรรยากาศการแข่งขัน",
          captionEn: "Competitive atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-06.jpg",
          caption: "พื้นที่โต๊ะเล่นเกม",
          captionEn: "Game table area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-07.jpg",
          caption: "มุมสันทนาการ",
          captionEn: "Recreation corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-08.jpg",
          caption: "บริเวณต้อนรับ",
          captionEn: "Reception area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-09.jpg",
          caption: "พื้นที่นั่งกลุ่ม",
          captionEn: "Group seating area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-10.jpg",
          caption: "มุมเงียบสงบ",
          captionEn: "Quiet corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-11.jpg",
          caption: "พื้นที่กิจกรรมกลุ่ม",
          captionEn: "Group activity area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-12.jpg",
          caption: "บรรยากาศสนุกสนาน",
          captionEn: "Fun atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-13.jpg",
          caption: "ช่วงเวลาแข่งขัน",
          captionEn: "Competition time"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-14.jpg",
          caption: "พื้นที่เสริมกิจกรรม",
          captionEn: "Additional activity area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-15.jpg",
          caption: "บริเวณพิเศษเพิ่มเติม",
          captionEn: "Additional special area"
        }
      ]
    },
    samyanmitrtown: {
      name: "สามย่านมิตรทาวน์",
      nameEn: "Samyan Mitrtown",
      images: [
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-01.jpg",
          caption: "บรรยากาศสไตล์โมเดิร์น",
          captionEn: "Modern style atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-02.jpg",
          caption: "พื้นที่นั่งเล่นสบาย",
          captionEn: "Comfortable seating area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-03.jpg",
          caption: "มุมนั่งเล่นส่วนตัว",
          captionEn: "Private seating corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-04.jpg",
          caption: "โต๊ะเล่นเกมสำหรับกลุ่มใหญ่",
          captionEn: "Game tables for large groups"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-05.jpg",
          caption: "บริเวณแคชเชียร์",
          captionEn: "Cashier area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-06.jpg",
          caption: "ชั้นวางเกมมากมาย",
          captionEn: "Extensive game shelves"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-07.jpg",
          caption: "บรรยากาศอบอุ่นและเป็นกันเอง",
          captionEn: "Warm and friendly atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-08.jpg",
          caption: "มุมพักผ่อนสบายๆ",
          captionEn: "Comfortable relaxation corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-09.jpg",
          caption: "พื้นที่เล่นเกมแบบกลุ่ม",
          captionEn: "Group game playing area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-10.jpg",
          caption: "บริเวณโต๊ะเล่นเกมหลัก",
          captionEn: "Main game table area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-11.jpg",
          caption: "มุมนั่งเล่นพิเศษ",
          captionEn: "Special seating corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-12.jpg",
          caption: "บรรยากาศการเล่นสนุกสนาน",
          captionEn: "Fun playing atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-13.jpg",
          caption: "พื้นที่จัดกิจกรรมพิเศษ",
          captionEn: "Special activity area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-14.jpg",
          caption: "มุมพักผ่อนเพิ่มเติม",
          captionEn: "Additional relaxation corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-15.jpg",
          caption: "บริเวณกิจกรรมสุดพิเศษ",
          captionEn: "Special activity zone"
        }
      ]
    },
    phranakhon: {
      name: "พระนคร",
      nameEn: "Phra Nakhon",
      images: [
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-01.jpg",
          caption: "บรรยากาศการเล่นเกมที่สนุกสนาน",
          captionEn: "Fun game playing atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-02.jpg",
          caption: "พื้นที่เล่นเกมกว้างขวาง",
          captionEn: "Spacious game playing area"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-03.jpg",
          caption: "มุมสบายๆ สำหรับนั่งเล่น",
          captionEn: "Comfortable corner for relaxing"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-04.jpg",
          caption: "เกมหลากหลายให้เลือก",
          captionEn: "Variety of games to choose from"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-05.jpg",
          caption: "บรรยากาศการเล่นเป็นทีม",
          captionEn: "Team playing atmosphere"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-06.jpg",
          caption: "พื้นที่โล่งสบาย",
          captionEn: "Open and comfortable space"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-07.jpg",
          caption: "มุมอาหารและเครื่องดื่ม",
          captionEn: "Food and beverage corner"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_PNK-08.jpg",
          caption: "บริเวณเช็คอิน",
          captionEn: "Check-in area"
        }
      ]
    }
  };

  return (
    <div className="home-page">
      <SEOHead 
        title={t("seo.home.title")}
        description={t("seo.home.description")}
        keywords={t("seo.home.keywords")}
        url={isEnglish ? "https://nkboardgame.com/en" : "https://nkboardgame.com"}
      />
      {/* Hero Section */}
      <section className="hero-section home-hero">
        <div className="hero-content">
          <div className="hero-badge">
            <span>✨ {t("hero.badge")}</span>
          </div>
          <h1 className="hero-title">
            {isEnglish ? (
              <>Have Fun <span className="hero-highlight">Together</span><br />at NK Board Game</>
            ) : (
              <>สนุกสนาน <span className="hero-highlight">ไปด้วยกัน</span><br />ที่ NK Board Game</>
            )}
          </h1>
          <p className="hero-subtitle">
            {t("hero.subtitle")}
          </p>
          <div className="hero-actions">
            <button 
              onClick={() => window.open('https://line.me/ti/p/@nkboardgame', '_blank')}
              className="btn-primary"
            >
              {t("hero.cta_book")} <ArrowRight size={16} />
            </button>
            <Link to={getLocalizedPath("/about")} className="btn-secondary">
              {t("hero.cta_about")}
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <div className="stat-number">1,000+</div>
              <div className="stat-label">{t("hero.stats.games")}</div>
            </div>
            <div className="stat">
              <div className="stat-number">4</div>
              <div className="stat-label">{t("hero.stats.branches")}</div>
            </div>
            <div className="stat">
              <div className="stat-number">60,000+</div>
              <div className="stat-label">{t("hero.stats.members")}</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t("services.title")}</h2>
            <p className="section-subtitle">{t("services.subtitle")}</p>
          </div>
          <div className="services-grid">
            {services.map((service) => {
              const IconComponent = {
                "gamepad-2": Gamepad2,
                "scroll-text": ScrollText,
                "shield": Shield,
                "camera": Camera,
                "coffee": Coffee,
                "users": UsersIcon
              }[service.icon];

              // Get service URL by ID (more reliable than title matching)
              const serviceUrl = getLocalizedPath(serviceUrlMapById[service.id]);

              // Get translated service info
              const serviceKey = Object.keys(t("services", { returnObjects: true })).find(key => 
                t(`services.${key}.title`) === service.title || 
                (key === 'nk_cafe' && service.title === 'NK Café') ||
                (key === 'play_at_shop' && service.title === 'เล่นที่ร้าน') ||
                (key === 'board_game_script' && service.title === 'Board Game Script') ||
                (key === 'photo_booth' && service.title === 'Photo Booth') ||
                (key === 'team_building' && service.title === 'Team Building')
              );

              return (
                <div key={service.id} className="service-card" style={{ position: 'relative', cursor: 'default' }}>
                  <div className="service-image">
                    <img src={service.image} alt={serviceKey ? t(`services.${serviceKey}.title`) : service.title} />
                  </div>
                  <h3 className="service-title">
                    {serviceKey ? t(`services.${serviceKey}.title`) : service.title}
                  </h3>
                  <p className="service-description">
                    {serviceKey ? t(`services.${serviceKey}.description`) : service.description}
                  </p>
                  <div className="service-price">
                    {serviceKey ? t(`services.${serviceKey}.price`) : service.price}
                  </div>
                  <button 
                    onClick={() => navigate(serviceUrl)}
                    className="service-link"
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      cursor: 'pointer',
                      position: 'relative',
                      zIndex: 10,
                      padding: '8px 12px'
                    }}
                  >
                    {t("services.view_more")} <ArrowRight size={14} />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t("testimonials.title")}</h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="testimonial-text">
                  "{isEnglish ? testimonial.textEn : testimonial.text}"
                </p>
                <div className="testimonial-author">
                  <div className="author-name">
                    {isEnglish && testimonial.nameEn ? testimonial.nameEn : testimonial.name}
                  </div>
                  {testimonial.age && (
                    <div className="author-age">
                      {isEnglish ? `Age ${testimonial.age}` : `อายุ ${testimonial.age} ปี`}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section - บรรยากาศความสนุก */}
      <section className="gallery-section">
        <div className="container">
          <div className="section-header text-center">
            <h2 className="section-title">{t("gallery.title")}</h2>
            <p className="section-subtitle">{t("gallery.subtitle")}</p>
          </div>

          {/* Branch Tabs */}
          <div className="gallery-tabs">
            <button 
              className={`gallery-tab ${activeTab === 'seconbangkhae' ? 'active' : ''}`}
              onClick={() => setActiveTab('seconbangkhae')}
            >
              {t("gallery.branches.secon_bangkae")}
            </button>
            <button 
              className={`gallery-tab ${activeTab === 'seconsrinakarin' ? 'active' : ''}`}
              onClick={() => setActiveTab('seconsrinakarin')}
            >
              {t("gallery.branches.secon_srinakarin")}
            </button>
            <button 
              className={`gallery-tab ${activeTab === 'samyanmitrtown' ? 'active' : ''}`}
              onClick={() => setActiveTab('samyanmitrtown')}
            >
              {t("gallery.branches.samyan_mitrtown")}
            </button>
            <button 
              className={`gallery-tab ${activeTab === 'phranakhon' ? 'active' : ''}`}
              onClick={() => setActiveTab('phranakhon')}
            >
              {t("gallery.branches.phra_nakhon")}
            </button>
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {galleryData[activeTab].images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img 
                  src={image.url} 
                  alt={isEnglish ? image.captionEn : image.caption} 
                />
              </div>
            ))}
          </div>

          {/* Image Modal */}
          {selectedImageIndex !== null && (
            <div className="image-modal" onClick={closeModal}>
              <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button 
                  className="modal-close"
                  onClick={closeModal}
                >
                  <X size={24} />
                </button>
                
                <button 
                  className="modal-arrow modal-arrow-left"
                  onClick={goToPrevImage}
                >
                  <ChevronLeft size={32} />
                </button>
                
                <button 
                  className="modal-arrow modal-arrow-right"
                  onClick={goToNextImage}
                >
                  <ChevronRight size={32} />
                </button>
                
                <img 
                  src={getCurrentImage()?.url} 
                  alt={isEnglish ? getCurrentImage()?.captionEn : getCurrentImage()?.caption}
                  className="modal-image"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;