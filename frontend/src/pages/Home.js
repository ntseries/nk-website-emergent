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
      images: [
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/DPMX5703.JPG",
          caption: "บรรยากาศการเล่นเกมที่สนุกสนาน"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-2.jpg",
          caption: "พื้นที่เล่นเกมกว้างขวาง"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-3.jpg",
          caption: "มุมสบายๆ สำหรับนั่งเล่น"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-4.jpg",
          caption: "เกมหลากหลายให้เลือก"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-5.jpg",
          caption: "บรรยากาศการเล่นเป็นทีม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-6.jpg",
          caption: "พื้นที่โล่งสบาย"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-7.jpg",
          caption: "มุมอาหารและเครื่องดื่ม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-8.jpg",
          caption: "บริเวณเช็คอิน"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-9.jpg",
          caption: "บรรยากาศร้านอบอุ่น"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-10.jpg",
          caption: "พื้นที่เล่นเกมเพิ่มเติม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-11.jpg",
          caption: "บรรยากาศสนุกสนานเพิ่มเติม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-12.jpg",
          caption: "พื้นที่กิจกรรมน่าสนใจ"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-13.JPG",
          caption: "มุมเล่นเกมสุดเพลิน"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-14.jpg",
          caption: "บรรยากาศแสนสนุก"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_BK6-15.jpg",
          caption: "พื้นที่พักผ่อนระหว่างเล่น"
        }
      ]
    },
    seconsrinakarin: {
      name: "ซีคอนศรีนครินทร์", 
      images: [
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-01.jpg",
          caption: "ห้องเล่นเกมขนาดใหญ่"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-02.jpg", 
          caption: "พื้นที่นั่งสบาย"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-03.jpg",
          caption: "มุมเล่นเกมส่วนตัว"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-04.jpg",
          caption: "ชั้นเก็บเกม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-05.jpg",
          caption: "บรรยากาศการแข่งขัน"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-06.jpg",
          caption: "พื้นที่โต๊ะเล่นเกม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-07.jpg",
          caption: "มุมสันทนาการ"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-08.jpg",
          caption: "บริเวณต้อนรับ"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-09.jpg",
          caption: "พื้นที่นั่งกลุ่ม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-10.jpg",
          caption: "มุมเงียบสงบ"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-11.jpg",
          caption: "พื้นที่กิจกรรมกลุ่ม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-12.jpg",
          caption: "บรรยากาศสนุกสนาน"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-13.jpg",
          caption: "ช่วงเวลาแข่งขัน"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-14.jpg",
          caption: "พื้นที่เสริมกิจกรรม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SRI-15.jpg",
          caption: "บริเวณพิเศษเพิ่มเติม"
        }
      ]
    },
    samyanmitrtown: {
      name: "สามย่านมิตรทาวน์",
      images: [
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-01.jpg",
          caption: "บรรยากาศสไตล์โมเดิร์น"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-02.jpg",
          caption: "พื้นที่นั่งเล่นสบาย"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-03.jpg",
          caption: "มุมนั่งเล่นส่วนตัว"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-04.jpg",
          caption: "โต๊ะเล่นเกมสำหรับกลุ่มใหญ่"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-05.jpg",
          caption: "บริเวณแคชเชียร์"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-06.jpg",
          caption: "ชั้นวางเกมมากมาย"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-07.jpg",
          caption: "บรรยากาศอบอุ่นและเป็นกันเอง"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-08.jpg",
          caption: "มุมพักผ่อนสบายๆ"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-09.jpg",
          caption: "พื้นที่เล่นเกมแบบกลุ่ม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-10.jpg",
          caption: "บริเวณโต๊ะเล่นเกมหลัก"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-11.jpg",
          caption: "มุมนั่งเล่นพิเศษ"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-12.jpg",
          caption: "บรรยากาศการเล่นสนุกสนาน"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-13.jpg",
          caption: "พื้นที่จัดกิจกรรมพิเศษ"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-14.jpg",
          caption: "มุมพักผ่อนเพิ่มเติม"
        },
        {
          url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Atmosphere_SYM-15.jpg",
          caption: "บริเวณกิจกรรมสุดพิเศษ"
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
              <div className="stat-number">3</div>
              <div className="stat-label">{t("hero.stats.branches")}</div>
            </div>
            <div className="stat">
              <div className="stat-number">50,000+</div>
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
                <div key={service.id} className="service-card" style={{ position: 'relative' }}>
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
                <p className="testimonial-text">"{testimonial.text}"</p>
                <div className="testimonial-author">
                  <div className="author-name">{testimonial.name}</div>
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
          </div>

          {/* Gallery Grid */}
          <div className="gallery-grid">
            {galleryData[activeTab].images.map((image, index) => (
              <div 
                key={index} 
                className="gallery-item"
                onClick={() => setSelectedImageIndex(index)}
              >
                <img src={image.url} alt={image.caption} />
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
                  alt={getCurrentImage()?.caption}
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