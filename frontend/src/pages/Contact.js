import React, { useState } from "react";
import { MapPin, Phone, Clock, MessageSquare, ArrowRight, Train, Facebook, Instagram } from "lucide-react";
import { branches } from "../data/mock";

const Contact = () => {
  const [selectedBranch, setSelectedBranch] = useState(branches[0]);

  const faqData = [
    {
      question: "จองโต๊ะล่วงหน้าได้หรือไม่?",
      answer: "ได้ครับ สามารถจองผ่านทุกช่องทางติดต่อ ของแต่ละสาขา ได้ล่วงหน้า 7 วัน"
    },
    {
      question: "มีบริการสอนเล่นเกมหรือไม่?",
      answer: "มีครับ ทีมงานของเราพร้อมสอนเกมใหม่ ๆ ไม่มีค่าบริการเพิ่มเติม"
    },
    {
      question: "สามารถนำอาหารเข้ามาได้หรือไม่?",
      answer: "ได้ครับ แต่รบกวนช่วยกันรักษาความสะอาดด้วยนะครับ"
    },
    {
      question: "มีที่จอดรถหรือไม่?",
      answer: "มีครับ NK Board Game ทุกสาขาตั้งอยู่ในศูนย์การค้าชั้นนำ ที่จอดรถเพียบ"
    }
  ];

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="hero-section contact-hero">
        <div className="hero-content">
          <h1 className="hero-title">
            ติดต่อ <span className="hero-highlight">NK Board Game</span>
          </h1>
          <p className="hero-subtitle">
            มีคำถาม อยากจองโต๊ะ หรืออยากจัดกิจกรรมพิเศษ ทีม NK พร้อมตอบกลับอย่างรวดเร็วและเป็นกันเอง ติดต่อเราผ่านช่องทางที่สะดวกที่สุดสำหรับคุณได้เลย!
          </p>
        </div>
      </section>

      {/* Branches Section */}
      <section className="branches-section branches-section-padding">
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
                      <div className="branch-location">
                        <span>{branch.address}</span>
                        {branch.maps && (
                          <a 
                            href={branch.maps} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="maps-link"
                          >
                            ดูแผนที่
                          </a>
                        )}
                      </div>
                    </div>
                    <div className="branch-item">
                      <Phone size={16} />
                      <span>{branch.phone}</span>
                    </div>
                    <div className="branch-item">
                      <Clock size={16} />
                      <span>{branch.hours}</span>
                    </div>
                    <div className="branch-item">
                      <Train size={16} />
                      <span>{branch.transport}</span>
                    </div>
                  </div>
                  
                  {/* Social Media Links */}
                  <div className="branch-social">
                    {branch.facebook && (
                      <a href={branch.facebook} target="_blank" rel="noopener noreferrer" className="social-link">
                        <Facebook size={18} />
                      </a>
                    )}
                    {branch.instagram && (
                      <a href={branch.instagram} target="_blank" rel="noopener noreferrer" className="social-link">
                        <Instagram size={18} />
                      </a>
                    )}
                    {branch.tiktok && (
                      <a href={branch.tiktok} target="_blank" rel="noopener noreferrer" className="social-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43V7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.43z"/>
                        </svg>
                      </a>
                    )}
                    {branch.youtube && (
                      <a href={branch.youtube} target="_blank" rel="noopener noreferrer" className="social-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </a>
                    )}
                    {branch.line && (
                      <a href={branch.line} target="_blank" rel="noopener noreferrer" className="social-link">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.63-.63h2.386c.346 0 .627.285.627.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
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
            {faqData.map((faq, index) => (
              <div key={index} className="faq-item">
                <h4 className="faq-question">{faq.question}</h4>
                <p className="faq-answer">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;