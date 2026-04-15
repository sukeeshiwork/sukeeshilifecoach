import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const FloatingButtons = () => {
  return (
    <>
      <a 
        href="https://wa.me/91XXXXXXXXXX" 
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp />
      </a>

      <style>{`
        .sticky-cta {
          position: fixed;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 16px 20px;
          background: rgba(10, 10, 15, 0.9);
          backdrop-filter: blur(10px);
          display: none;
          z-index: 999;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        @media (max-width: 768px) {
          .sticky-cta { display: flex; }
        }
      `}</style>
    </>
  );
};

export default FloatingButtons;
