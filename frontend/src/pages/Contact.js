import React, { useState } from "react";
import { MapPin, Phone, Clock, MessageSquare, ArrowRight } from "lucide-react";
import { branches } from "../data/mock";

const Contact = () => {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    branch: branches[0].name,
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    alert("ส่งข้อความเรียบร้อยแล้ว! ทางทีมงานจะติดต่อกลับภายใน 24 ชั่วโมง");
    setFormData({
      name: "",
      phone: "",
      email: "",
      branch: branches[0].name,
      message: ""
    });
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            ติดต่อ <span className="hero-highlight">NK Board Game</span>
          </h1>
          <p className="hero-subtitle">
            พร้อมให้บริการและตอบคำถามของคุณทุกเรื่อง<br />
            มาเยือนเราที่สาขาใดสาขาหนึ่งหรือติดต่อออนไลน์
          </p>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">สาขาของเรา</h2>
            <p className="section-subtitle">
              เลือกสาขาที่ใกล้คุณที่สุด เราพร้อมให้บริการทุกสาขา
            </p>
          </div>
          <div className="branches-grid">
            {branches.map((branch) => (
              <div 
                key={branch.id} 
                className={`branch-card ${selectedBranch.id === branch.id ? 'active' : ''}`}
                onClick={() => setSelectedBranch(branch)}
              >
                <div className="branch-image">
                  <img src={branch.image} alt={branch.name} />
                </div>
                <div className="branch-info">
                  <h3 className="branch-name">{branch.name}</h3>
                  <div className="branch-details">
                    <div className="branch-item">
                      <MapPin size={16} />
                      <span>{branch.address}</span>
                    </div>
                    <div className="branch-item">
                      <Phone size={16} />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="branch-item">
                      <Clock size={16} />
                      <span>{branch.hours}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <div className="container">
          <div className="contact-layout">
            <div className="contact-info">
              <h2 className="section-title">ส่งข้อความหาเรา</h2>
              <p className="section-subtitle">
                มีคำถามหรือต้องการข้อมูลเพิ่มเติม? ส่งข้อความมาได้เลย
              </p>
              
              <div className="contact-methods">
                <div className="contact-method">
                  <div className="method-icon">
                    <Phone size={24} />
                  </div>
                  <div className="method-info">
                    <h4>โทรศัพท์</h4>
                    <p>065-412-3939</p>
                    <small>ตอบรับสาย: 10:00 - 22:00</small>
                  </div>
                </div>
                
                <div className="contact-method">
                  <div className="method-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                    </svg>
                  </div>
                  <div className="method-info">
                    <h4>LINE Official</h4>
                    <p>@nkboardgame</p>
                    <small>แชทสดตลอด 24 ชั่วโมง</small>
                  </div>
                </div>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">ชื่อ - นามสกุล *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="กรุณากรอกชื่อของคุณ"
                />
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">เบอร์โทรศัพท์ *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    placeholder="08X-XXX-XXXX"
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">อีเมล</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="example@email.com"
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="branch">สาขาที่สนใจ</label>
                <select
                  id="branch"
                  name="branch"
                  value={formData.branch}
                  onChange={handleInputChange}
                >
                  {branches.map((branch) => (
                    <option key={branch.id} value={branch.name}>
                      {branch.name}
                    </option>
                  ))}
                </select>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">ข้อความ *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="บอกเราเกี่ยวกับสิ่งที่คุณต้องการถาม..."
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary form-submit">
                ส่งข้อความ <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="faq-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">คำถามที่พบบ่อย</h2>
          </div>
          <div className="faq-grid">
            <div className="faq-item">
              <h4 className="faq-question">จองโต๊ะล่วงหน้าได้หรือไม่?</h4>
              <p className="faq-answer">
                ได้ครับ สามารถจองผ่านโทรศัพท์หรือ LINE Official ล่วงหน้าได้ 7 วัน
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">มีบริการสอนเล่นเกมหรือไม่?</h4>
              <p className="faq-answer">
                มีครับ ทีมงานของเราพร้อมสอนเกมใหม่ๆ ให้ฟรีทุกครั้งที่มาเล่น
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">สามารถนำอาหารเข้ามาได้หรือไม่?</h4>
              <p className="faq-answer">
                ไม่ได้ครับ เพื่อรักษาความสะอาดของเกม แต่เรามีอาหารและเครื่องดื่มให้บริการ
              </p>
            </div>
            <div className="faq-item">
              <h4 className="faq-question">มีที่จอดรถหรือไม่?</h4>
              <p className="faq-answer">
                มีครับ สาขาทุกแห่งอยู่ในห้างสรรพสินค้า มีที่จอดรถสะดวก
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;