import React from "react";
import { Calendar, Clock, Users, Star, ArrowRight } from "lucide-react";
import { activities } from "../data/mock";

const Activities = () => {
  const getStatusColor = (status) => {
    switch (status) {
      case "เปิดรับสมัคร":
        return "status-open";
      case "รายสัปดาห์":
        return "status-weekly";
      default:
        return "status-default";
    }
  };

  return (
    <div className="activities-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">
            กิจกรรม <span className="hero-highlight">NK Board Game</span>
          </h1>
          <p className="hero-subtitle">
            เข้าร่วมกิจกรรมสุดพิเศษ พบปะเพื่อนใหม่ และสนุกไปกับเกมโปรดของคุณ<br />
            อัพเดทกิจกรรมใหม่ๆ ทุกสัปดาห์
          </p>
        </div>
      </section>

      {/* Current Activities */}
      <section className="current-activities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">กิจกรรมปัจจุบัน</h2>
            <p className="section-subtitle">
              กิจกรรมที่กำลังจะมาถึงและเปิดให้ลงทะเบียน
            </p>
          </div>
          <div className="activities-grid-detailed">
            {activities.map((activity) => (
              <div key={activity.id} className="activity-card-detailed">
                <div className="activity-image">
                  <img src={activity.image} alt={activity.title} />
                  <div className={`activity-status ${getStatusColor(activity.status)}`}>
                    {activity.status}
                  </div>
                </div>
                <div className="activity-content">
                  <div className="activity-meta">
                    <div className="meta-item">
                      <Calendar size={16} />
                      <span>{activity.date}</span>
                    </div>
                  </div>
                  <h3 className="activity-title">{activity.title}</h3>
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-actions">
                    <button className="btn-primary">
                      ลงทะเบียน <ArrowRight size={16} />
                    </button>
                    <button className="btn-secondary">
                      รายละเอียดเพิ่มเติม
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regular Activities */}
      <section className="regular-activities">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">กิจกรรมประจำ</h2>
            <p className="section-subtitle">
              กิจกรรมที่จัดขึ้นเป็นประจำทุกสัปดาห์
            </p>
          </div>
          <div className="regular-grid">
            <div className="regular-card">
              <div className="regular-day">จันทร์</div>
              <h4 className="regular-title">Beginner's Night</h4>
              <p className="regular-description">
                คืนสำหรับผู้เล่นมือใหม่ เรียนรู้เกมง่ายๆ กับผู้เชี่ยวชาญ
              </p>
              <div className="regular-time">
                <Clock size={16} />
                <span>19:00 - 22:00</span>
              </div>
            </div>
            
            <div className="regular-card">
              <div className="regular-day">พุธ</div>
              <h4 className="regular-title">Strategy Night</h4>
              <p className="regular-description">
                คืนเกมกลยุทธ์สำหรับผู้ที่ชอบความท้าทาย
              </p>
              <div className="regular-time">
                <Clock size={16} />
                <span>19:00 - 23:00</span>
              </div>
            </div>

            <div className="regular-card">
              <div className="regular-day">เสาร์</div>
              <h4 className="regular-title">Family Game Day</h4>
              <p className="regular-description">
                วันเกมครอบครัว เหมาะสำหรับทุกวัย ลดราคาพิเศษ 20%
              </p>
              <div className="regular-time">
                <Clock size={16} />
                <span>10:00 - 18:00</span>
              </div>
            </div>

            <div className="regular-card">
              <div className="regular-day">อาทิตย์</div>
              <h4 className="regular-title">D&D Adventure</h4>
              <p className="regular-description">
                การผจญภัย D&D One-Shot สำหรับผู้เล่นทุกระดับ
              </p>
              <div className="regular-time">
                <Clock size={16} />
                <span>13:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">ประโยชน์จากการเข้าร่วมกิจกรรม</h2>
          </div>
          <div className="benefits-grid">
            <div className="benefit-item">
              <div className="benefit-icon">
                <Users size={32} />
              </div>
              <h3 className="benefit-title">พบปะเพื่อนใหม่</h3>
              <p className="benefit-description">
                สร้างเครือข่ายเพื่อนฝูงที่มีความสนใจเดียวกัน
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Star size={32} />
              </div>
              <h3 className="benefit-title">พัฒนาทักษะ</h3>
              <p className="benefit-description">
                เรียนรู้เกมใหม่ๆ และพัฒนาทักษะการเล่น
              </p>
            </div>
            <div className="benefit-item">
              <div className="benefit-icon">
                <Calendar size={32} />
              </div>
              <h3 className="benefit-title">กิจกรรมสม่ำเสมอ</h3>
              <p className="benefit-description">
                มีกิจกรรมให้เข้าร่วมทุกสัปดาห์
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมเข้าร่วมกิจกรรมแล้วหรือยัง?</h2>
            <p className="cta-description">
              ติดตามกิจกรรมใหม่ๆ และลงทะเบียนก่อนใครได้ที่หน้าเฟซบุ๊คของเรา
            </p>
            <div className="cta-actions">
              <button className="btn-primary">
                ติดตาม Facebook <ArrowRight size={16} />
              </button>
              <button className="btn-secondary">
                ดูปฏิทินกิจกรรม
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Activities;