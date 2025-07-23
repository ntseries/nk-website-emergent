import React, { useState } from "react";
import { Clock, Users, Star, ArrowRight, Camera, Image, Sparkles, Heart, X, ChevronLeft, ChevronRight } from "lucide-react";

const PhotoBooth = () => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  
  const customerImages = [
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_01.jpg", alt: "ภาพลูกค้าน่ารัก 1" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_02.jpg", alt: "ภาพลูกค้าน่ารัก 2" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_03.jpg", alt: "ภาพลูกค้าน่ารัก 3" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_05.JPG", alt: "ภาพลูกค้าน่ารัก 4" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_06.JPG", alt: "ภาพลูกค้าน่ารัก 5" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_07.JPG", alt: "ภาพลูกค้าน่ารัก 6" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_08.JPG", alt: "ภาพลูกค้าน่ารัก 7" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_09.JPG", alt: "ภาพลูกค้าน่ารัก 8" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_10.JPG", alt: "ภาพลูกค้าน่ารัก 9" },
    { url: "https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Customers_11.JPG", alt: "ภาพลูกค้าน่ารัก 10" }
  ];

  const packages = [
    {
      name: "Basic Pack",
      people: "1 คน",
      shots: "10 ภาพ",
      props: "พร๊อพพิเศษ",
      duration: "30 นาที",
      photo: "รับรูปถ่าย 1 รูป",
      costumes: "เปลี่ยนได้ 1 ชุด",
      price: "99 บาท"
    },
    {
      name: "Premium Pack",
      people: "1 คน",
      shots: "30 ภาพ",
      props: "พร็อพพิเศษ",
      duration: "60 นาที",
      photo: "รับรูปถ่าย 1 รูป",
      costumes: "เปลี่ยนได้ 3 ชุด",
      price: "199 บาท"
    },
    {
      name: "Gang Package",
      people: "6 คน",
      shots: "180 ภาพ",
      props: "พร๊อพพิเศษ",
      duration: "60 นาที",
      photo: "รับรูปถ่าย 6 รูป",
      costumes: "เปลี่ยนชุดได้ไม่จำกัด",
      price: "999 บาท"
    }
  ];

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const nextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === customerImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? customerImages.length - 1 : prevIndex - 1
    );
  };

  const handleKeyDown = (e) => {
    if (selectedImageIndex === null) return; // Only handle keys when modal is open
    
    switch(e.key) {
      case 'Escape':
        closeModal();
        break;
      case 'ArrowRight':
        nextImage();
        break;
      case 'ArrowLeft':
        prevImage();
        break;
      default:
        break;
    }
  };

  // Add keyboard event listener when modal is open
  React.useEffect(() => {
    if (selectedImageIndex !== null) {
      document.addEventListener('keydown', handleKeyDown);
      // Focus on modal for better keyboard support
      const modal = document.querySelector('.image-modal');
      if (modal) {
        modal.focus();
      }
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }

    // Cleanup on unmount
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedImageIndex]);

  return (
    <div className="photobooth-page">
      {/* Photo Booth Specific Styles */}
      <style jsx>{`
        /* Photo Booth Theme Variables */
        .photobooth-page {
          --pb-pink: #FFB6C1;
          --pb-pink-dark: #FF69B4;
          --pb-pink-light: #FFE4E1;
          --pb-blue: #87CEEB;
          --pb-blue-dark: #4169E1;
          --pb-blue-light: #E0F6FF;
          --pb-black: #2F2F2F;
          --pb-white: #FFFFFF;
          --pb-gradient-pink: linear-gradient(135deg, var(--pb-pink-light) 0%, var(--pb-pink) 50%, var(--pb-pink-dark) 100%);
          --pb-gradient-blue: linear-gradient(135deg, var(--pb-blue-light) 0%, var(--pb-blue) 50%, var(--pb-blue-dark) 100%);
          --pb-gradient-hero: linear-gradient(135deg, var(--pb-pink-light) 0%, var(--pb-blue-light) 100%);
          --pb-shadow-pink: 0 4px 20px rgba(255, 105, 180, 0.3);
          --pb-shadow-blue: 0 4px 20px rgba(65, 105, 225, 0.3);
          --pb-shadow-soft: 0 8px 32px rgba(255, 182, 193, 0.2);
        }

        /* Hero Section */
        .photobooth-page .service-hero {
          background: var(--pb-gradient-hero);
          position: relative;
          overflow: hidden;
          padding: 120px 0 80px 0;
        }

        .photobooth-page .service-hero::before {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFE4E1' fill-opacity='0.3'%3E%3Ccircle cx='30' cy='30' r='3'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
          opacity: 0.5;
        }

        .photobooth-page .service-badge {
          background: var(--pb-gradient-pink);
          color: var(--pb-white);
          border-radius: 25px;
          padding: 8px 16px;
          font-size: 14px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 8px;
          width: fit-content;
          box-shadow: var(--pb-shadow-pink);
          border: 2px solid var(--pb-white);
        }

        .photobooth-page .service-title {
          font-size: 48px;
          font-weight: 800;
          background: linear-gradient(45deg, var(--pb-pink-dark), var(--pb-blue-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 24px 0;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }

        .photobooth-page .service-description {
          font-size: 18px;
          color: var(--pb-black);
          line-height: 1.6;
          margin-bottom: 32px;
        }

        .photobooth-page .service-price .price-value {
          font-size: 36px;
          font-weight: 800;
          background: var(--pb-gradient-pink);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Buttons */
        .photobooth-page .btn-primary {
          background: var(--pb-gradient-pink);
          border: none;
          color: var(--pb-white);
          padding: 16px 32px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
          box-shadow: var(--pb-shadow-pink);
        }

        .photobooth-page .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 30px rgba(255, 105, 180, 0.4);
        }

        .photobooth-page .btn-secondary {
          background: var(--pb-white);
          border: 2px solid var(--pb-pink);
          color: var(--pb-pink-dark);
          padding: 16px 32px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .photobooth-page .btn-secondary:hover {
          background: var(--pb-pink-light);
          transform: translateY(-2px);
        }

        /* Section Titles */
        .photobooth-page .section-title {
          font-size: 36px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 16px;
          background: linear-gradient(45deg, var(--pb-pink-dark), var(--pb-blue-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .photobooth-page .section-subtitle {
          text-align: center;
          color: var(--pb-black);
          font-size: 18px;
          margin-bottom: 48px;
        }

        /* Feature Cards */
        .photobooth-page .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .feature-card {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          box-shadow: var(--pb-shadow-soft);
          border: 3px solid transparent;
          background-image: linear-gradient(var(--pb-white), var(--pb-white)), var(--pb-gradient-pink);
          background-origin: border-box;
          background-clip: content-box, border-box;
          transition: all 0.3s ease;
        }

        .photobooth-page .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 40px rgba(255, 182, 193, 0.3);
        }

        .photobooth-page .feature-icon {
          width: 80px;
          height: 80px;
          background: var(--pb-gradient-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 24px auto;
          color: var(--pb-white);
        }

        .photobooth-page .feature-card h3 {
          font-size: 24px;
          font-weight: 700;
          color: var(--pb-black);
          margin-bottom: 16px;
        }

        /* How to Use Section */
        .photobooth-page .howto-section {
          padding: 80px 0;
          background: var(--pb-pink-light);
        }

        .photobooth-page .howto-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .howto-step {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          box-shadow: var(--pb-shadow-soft);
          border: 2px solid var(--pb-pink-light);
          transition: all 0.3s ease;
          position: relative;
        }

        .photobooth-page .howto-step:hover {
          transform: translateY(-4px);
          border-color: var(--pb-pink);
        }

        .photobooth-page .step-image {
          width: 120px;
          height: 120px;
          border-radius: 15px;
          overflow: hidden;
          margin: 0 auto 20px auto;
          box-shadow: var(--pb-shadow-soft);
        }

        .photobooth-page .step-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .photobooth-page .step-number {
          position: absolute;
          top: -15px;
          right: -15px;
          width: 40px;
          height: 40px;
          background: var(--pb-gradient-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          font-weight: 800;
          color: var(--pb-white);
          box-shadow: var(--pb-shadow-pink);
        }

        .photobooth-page .step-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--pb-black);
          margin-bottom: 16px;
          background: var(--pb-gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .photobooth-page .step-description {
          color: var(--pb-black);
          line-height: 1.6;
          font-size: 14px;
        }

        /* Package Cards - เพิ่ม feature รูปถ่าย */
        .photobooth-page .package-feature {
          display: flex;
          align-items: center;
          gap: 8px;
          color: var(--pb-black);
          margin-bottom: 16px;
          font-size: 14px;
        }

        /* Package Cards */
        .photobooth-page .packages-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .package-card {
          background: var(--pb-white);
          border-radius: 24px;
          padding: 40px;
          text-align: center;
          position: relative;
          box-shadow: var(--pb-shadow-soft);
          transition: all 0.3s ease;
          border: 3px solid var(--pb-pink-light);
        }

        .photobooth-page .package-card.featured {
          border: 3px solid var(--pb-pink);
          transform: scale(1.05);
          box-shadow: var(--pb-shadow-pink);
        }

        .photobooth-page .package-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--pb-gradient-pink);
          color: var(--pb-white);
          padding: 8px 24px;
          border-radius: 20px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: var(--pb-shadow-pink);
        }

        .photobooth-page .package-name {
          font-size: 28px;
          font-weight: 800;
          color: var(--pb-black);
          margin-bottom: 16px;
          background: var(--pb-gradient-blue);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .photobooth-page .package-price {
          font-size: 32px;
          font-weight: 800;
          background: var(--pb-gradient-pink);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin-bottom: 32px;
        }

        .photobooth-page .package-select-btn {
          background: var(--pb-gradient-blue);
          border: none;
          color: var(--pb-white);
          padding: 16px 32px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          box-shadow: var(--pb-shadow-blue);
        }

        .photobooth-page .package-select-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(65, 105, 225, 0.4);
        }

        /* Props Section */
        .photobooth-page .props-section {
          background: var(--pb-pink-light);
          padding: 80px 0;
        }

        .photobooth-page .props-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .prop-category {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          box-shadow: var(--pb-shadow-soft);
          border: 2px solid var(--pb-pink);
        }

        .photobooth-page .category-title {
          font-size: 20px;
          font-weight: 700;
          color: var(--pb-black);
          margin-bottom: 20px;
          text-align: center;
        }

        /* Process Steps */
        .photobooth-page .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .process-step {
          text-align: center;
          position: relative;
        }

        .photobooth-page .step-number {
          width: 80px;
          height: 80px;
          background: var(--pb-gradient-pink);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 32px;
          font-weight: 800;
          color: var(--pb-white);
          margin: 0 auto 24px auto;
          box-shadow: var(--pb-shadow-pink);
        }

        /* Gallery */
        .photobooth-page .gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .photobooth-page .gallery-item {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1;
          box-shadow: var(--pb-shadow-soft);
          border: 3px solid var(--pb-pink-light);
          transition: all 0.3s ease;
        }

        .photobooth-page .gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--pb-shadow-pink);
          border-color: var(--pb-pink);
        }

        .photobooth-page .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Customer Gallery Section */
        .photobooth-page .customer-gallery-section {
          padding: 80px 0;
          background: var(--pb-pink-light);
        }

        .photobooth-page .customer-gallery-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 24px;
          margin-top: 48px;
        }

        .photobooth-page .customer-gallery-item {
          border-radius: 20px;
          overflow: hidden;
          aspect-ratio: 1;
          box-shadow: var(--pb-shadow-soft);
          border: 3px solid var(--pb-pink-light);
          transition: all 0.3s ease;
        }

        .photobooth-page .customer-gallery-item:hover {
          transform: translateY(-4px);
          box-shadow: var(--pb-shadow-pink);
          border-color: var(--pb-pink);
        }

        .photobooth-page .customer-gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          cursor: pointer;
        }

        /* Image Modal */
        .photobooth-page .image-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }

        .photobooth-page .modal-content {
          position: relative;
          max-width: 85vw;
          max-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .photobooth-page .modal-image {
          max-width: 85vw;
          max-height: 85vh;
          width: auto;
          height: auto;
          border-radius: 15px;
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
          object-fit: contain;
        }

        .photobooth-page .modal-close {
          position: absolute;
          top: -60px;
          right: -60px;
          background: var(--pb-white);
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--pb-black);
          transition: all 0.3s ease;
          z-index: 10001;
        }

        .photobooth-page .modal-close:hover {
          background: var(--pb-pink);
          color: var(--pb-white);
          transform: scale(1.1);
        }

        .photobooth-page .modal-nav {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background: var(--pb-white);
          border: none;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--pb-black);
          transition: all 0.3s ease;
          z-index: 10001;
        }

        .photobooth-page .modal-nav:hover {
          background: var(--pb-pink);
          color: var(--pb-white);
          transform: translateY(-50%) scale(1.1);
        }

        .photobooth-page .modal-nav.prev {
          left: -80px;
        }

        .photobooth-page .modal-nav.next {
          right: -80px;
        }

        /* Mobile responsive for modal */
        @media (max-width: 768px) {
          .photobooth-page .image-modal {
            padding: 10px;
          }
          
          .photobooth-page .modal-content {
            max-width: 90vw;
            max-height: 80vh;
          }
          
          .photobooth-page .modal-image {
            max-width: 90vw;
            max-height: 80vh;
          }
          
          .photobooth-page .modal-close {
            top: -30px;
            right: 0px;
            width: 35px;
            height: 35px;
          }
          
          .photobooth-page .modal-nav {
            width: 45px;
            height: 45px;
            background: rgba(255, 255, 255, 0.9);
            backdrop-filter: blur(10px);
          }
          
          .photobooth-page .modal-nav.prev {
            left: 10px;
            top: 50%;
            transform: translateY(-50%);
          }
          
          .photobooth-page .modal-nav.next {
            right: 10px;
            top: 50%;
            transform: translateY(-50%);
          }
          
          .photobooth-page .modal-nav:hover {
            transform: translateY(-50%) scale(1.1);
          }
        }
        
        @media (max-width: 480px) {
          .photobooth-page .image-modal {
            padding: 5px;
          }
          
          .photobooth-page .modal-content {
            max-width: 95vw;
            max-height: 75vh;
          }
          
          .photobooth-page .modal-image {
            max-width: 95vw;
            max-height: 75vh;
          }
          
          .photobooth-page .modal-close {
            top: -25px;
            right: 5px;
            width: 30px;
            height: 30px;
          }
          
          .photobooth-page .modal-nav {
            width: 40px;
            height: 40px;
          }
          
          .photobooth-page .modal-nav.prev {
            left: 5px;
          }
          
          .photobooth-page .modal-nav.next {
            right: 5px;
          }
        }

        /* Testimonials */
        .photobooth-page .testimonials-section {
          background: var(--pb-blue-light);
          padding: 80px 0;
        }

        .photobooth-page .testimonial-card {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          box-shadow: var(--pb-shadow-soft);
          border: 2px solid var(--pb-blue);
          transition: all 0.3s ease;
        }

        .photobooth-page .testimonial-card:hover {
          transform: translateY(-4px);
          box-shadow: var(--pb-shadow-blue);
        }

        .photobooth-page .testimonial-stars {
          color: var(--pb-pink-dark);
          margin-bottom: 16px;
        }

        /* Add-ons */
        .photobooth-page .addons-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 32px;
          margin-top: 48px;
        }

        .photobooth-page .addon-card {
          background: var(--pb-white);
          border-radius: 20px;
          padding: 32px;
          text-align: center;
          border: 2px solid var(--pb-pink-light);
          transition: all 0.3s ease;
        }

        .photobooth-page .addon-card:hover {
          border-color: var(--pb-pink);
          transform: translateY(-4px);
        }

        .photobooth-page .addon-price {
          font-size: 20px;
          font-weight: 700;
          color: var(--pb-pink-dark);
          margin-top: 16px;
        }

        /* CTA Section */
        .photobooth-page .cta-section {
          background: var(--pb-gradient-hero);
          padding: 80px 0;
        }

        .photobooth-page .cta-title {
          font-size: 36px;
          font-weight: 800;
          text-align: center;
          margin-bottom: 16px;
          background: linear-gradient(45deg, var(--pb-pink-dark), var(--pb-blue-dark));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Kawaii Elements */
        .photobooth-page .section-header::after {
          content: '💖✨';
          display: block;
          text-align: center;
          font-size: 24px;
          margin-top: 16px;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .photobooth-page .service-title {
            font-size: 36px;
          }
          
          .photobooth-page .section-title {
            font-size: 28px;
          }
          
          .photobooth-page .package-card.featured {
            transform: none;
          }
        }
      `}</style>
      {/* Hero Section */}
      <section className="service-hero">
        <div className="container">
          <div className="service-hero-content">
            <div className="service-hero-text">
              <div className="service-badge">
                <Heart size={16} />
                <span>Kawaii Service ♡</span>
              </div>
              <h1 className="service-title">NK Photo Booth</h1>
              <p className="service-description">
                โฟโต้บูธสไตล์คาวาอิ สุดน่ารัก! ถ่ายรูปสวยๆ แบบสาวญี่ปุ่น-เกาหลี 
                พร็อพน่ารักเพียบ บรรยากาศหวานๆ ที่จะทำให้คุณได้รูปสุดปัง 
                Instagram-worthy ทุกช็อต! ✨💕
              </p>
              <div className="service-price">
                <span className="price-value">เริ่มต้น 199 บาท</span>
                <span className="price-unit">/ชั่วโมง</span>
              </div>
              <div className="service-actions">
                <a href="https://lin.ee/H4D9qos" target="_blank" rel="noopener noreferrer" className="btn-primary">
                  จอง Photo Booth เลย ♡ <ArrowRight size={16} />
                </a>
                <a href="/services/board-game-script" className="btn-secondary">
                  เล่นบอร์ดเกมสคริปต์
                </a>
              </div>
            </div>
            <div className="service-hero-image">
              <img 
                src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/NK-Service-04.jpg" 
                alt="NK Photo Booth - Kawaii Style"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - ซ่อนแล้ว */}

      {/* How to Use Section */}
      <section className="howto-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">วิธีการใช้บริการ</h2>
            <p className="section-subtitle">
              4 ขั้นตอนง่ายๆ ได้รูปสวยแบบ Kawaii ♡
            </p>
          </div>
          <div className="howto-grid">
            <div className="howto-step">
              <div className="step-image">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Howto_01.png" alt="เลือกชุด" />
              </div>
              <div className="step-number">1</div>
              <h3 className="step-title">เลือกชุด</h3>
              <p className="step-description">เลือกชุดที่ชอบจากหลากหลายสไตล์ Kawaii, Harajuku หรือ K-Pop ที่เราเตรียมไว้ให้</p>
            </div>
            <div className="howto-step">
              <div className="step-image">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Howto_02.PNG" alt="เลือกพร็อพ" />
              </div>
              <div className="step-number">2</div>
              <h3 className="step-title">เลือกพร็อพ</h3>
              <p className="step-description">เลือกพร็อพน่ารักๆ หูกระต่าย กิ๊บผม หมอน และอุปกรณ์ตกแต่งสไตล์ญี่ปุ่น-เกาหลี</p>
            </div>
            <div className="howto-step">
              <div className="step-image">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Howto_03.PNG" alt="ถ่ายภาพ" />
              </div>
              <div className="step-number">3</div>
              <h3 className="step-title">ถ่ายภาพ</h3>
              <p className="step-description">ถ่ายรูปสุดปังด้วยกล้องคุณภาพสูง แสงสวยแบบมืออาชีพ พร้อมแนะนำโพสต์สุดน่ารัก</p>
            </div>
            <div className="howto-step">
              <div className="step-image">
                <img src="https://nkboardgame-web-production.s3.ap-southeast-1.amazonaws.com/Photo_Booth_Howto_04.PNG" alt="ได้รูปจริง" />
              </div>
              <div className="step-number">4</div>
              <h3 className="step-title">ได้รูปจริง</h3>
              <p className="step-description">รับรูปถ่ายจริง 1 รูป พร้อมไฟล์ดิจิทัลครบทุกช็อต กลับบ้านเลย Instagram-ready!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Package Options */}
      <section className="packages-section" style={{paddingTop: '120px'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">แพ๊คเกจ NK Photo Booth</h2>
            <p className="section-subtitle">
              เลือกแพ๊คเกจที่ชอบ แล้วจองวันเวลาได้เลยนะคะ ♡
            </p>
          </div>
          <div className="packages-grid">
            {packages.map((pkg, index) => (
              <div key={index} className={`package-card ${index === 1 ? 'featured' : ''}`}>
                {index === 1 && <div className="package-badge">Most Popular ♡</div>}
                <h3 className="package-name">{pkg.name}</h3>
                <div className="package-price">{pkg.price}</div>
                <div className="package-features">
                  <div className="package-feature">
                    <Users size={16} />
                    <span>{pkg.people}</span>
                  </div>
                  <div className="package-feature">
                    <Camera size={16} />
                    <span>{pkg.shots}</span>
                  </div>
                  <div className="package-feature">
                    <Heart size={16} />
                    <span>{pkg.props}</span>
                  </div>
                  <div className="package-feature">
                    <Clock size={16} />
                    <span>{pkg.duration}</span>
                  </div>
                  <div className="package-feature">
                    <Image size={16} />
                    <span>{pkg.photo}</span>
                  </div>
                  <div className="package-feature">
                    <Sparkles size={16} />
                    <span>{pkg.costumes}</span>
                  </div>
                </div>
                <button className="package-select-btn">Choose This Package ♡</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Gallery Section */}
      <section className="customer-gallery-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Gallery ภาพลูกค้าน่ารัก</h2>
            <p className="section-subtitle">
              ตัวอย่างรูปภาพที่ลูกค้าถ่ายที่โฟโต้บูธของเรา
            </p>
          </div>
          <div className="customer-gallery-grid">
            {customerImages.map((image, index) => (
              <div key={index} className="customer-gallery-item" onClick={() => openModal(index)}>
                <img src={image.url} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImageIndex !== null && (
        <div className="image-modal" onClick={closeModal} onKeyDown={handleKeyDown} tabIndex={0}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              <X size={20} />
            </button>
            <button className="modal-nav prev" onClick={prevImage}>
              <ChevronLeft size={24} />
            </button>
            <img 
              src={customerImages[selectedImageIndex].url} 
              alt={customerImages[selectedImageIndex].alt}
              className="modal-image"
            />
            <button className="modal-nav next" onClick={nextImage}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      )}

      {/* Testimonials */}
      <section className="testimonials-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">รีวิวจากลูกค้า</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "รูปออกมาสวยมาก! พร็อพเยอะ ถ่ายสนุกสุดๆ เก็บไว้เป็นของที่ระลึกกับเพื่อนๆ"
              </p>
              <div className="testimonial-author">
                <div className="author-name">น้ำฝน</div>
                <div className="author-age">อายุ 17 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "พนักงานน่ารักมาก ช่วยถ่ายและแนะนำโพสต์ดีดี ราคาไม่แพง คุ้มมาก"
              </p>
              <div className="testimonial-author">
                <div className="author-name">บีม</div>
                <div className="author-age">อายุ 20 ปี</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="testimonial-text">
                "ถ่ายกลุ่มได้สวย แบ็คกราวด์สีสันสดใส พร็อพบอร์ดเกมน่ารักมาก ได้รูปเยอะ"
              </p>
              <div className="testimonial-author">
                <div className="author-name">เฟิร์น</div>
                <div className="author-age">อายุ 19 ปี</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="addons-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">บริการเสริม</h2>
          </div>
          <div className="addons-grid">
            <div className="addon-card">
              <h3>🖨️ พิมพ์รูปทันที</h3>
              <p>พิมพ์รูปใส่กรอบสวยๆ ขนาด 4x6 นิ้ว</p>
              <div className="addon-price">+20 บาท/รูป</div>
            </div>
            <div className="addon-card">
              <h3>💇‍♀️ เช่าวิกผม</h3>
              <p>วิกผมสไตล์ญี่ปุ่น-เกาหลี หลากหลายสี</p>
              <div className="addon-price">+99 บาท</div>
            </div>
            <div className="addon-card">
              <h3>📸 บริการตากล้องส่วนตัว</h3>
              <p>ช่างภาพมืออาชีพช่วยถ่ายและแนะนำโพสต์</p>
              <div className="addon-price">+199 บาท</div>
            </div>
            <div className="addon-card">
              <h3>🎂 บริการถ่ายธีมวันเกิด</h3>
              <p>จัดฉากวันเกิด + พร็อพน่ารัก</p>
              <div className="addon-price">+199 บาท</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2 className="cta-title">พร้อมสร้างความทรงจำแล้วหรือยัง?</h2>
            <p className="cta-description">
              มาถ่ายรูปสุดปังกับเพื่อนๆ และเก็บช่วงเวลาดีๆ ไว้เป็นความทรงจำ
            </p>
            <div className="cta-actions">
              <a href="https://lin.ee/H4D9qos" target="_blank" rel="noopener noreferrer" className="btn-primary">
                จองถ่ายรูปเลย <ArrowRight size={16} />
              </a>
              <button className="btn-secondary">
                ดูตัวอย่างเพิ่มเติม
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PhotoBooth;