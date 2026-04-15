import React from 'react';
import { GraduationCap, Heart, Baby, Sparkles } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const TrustStrip = () => {
  const { isMobile, isTablet } = useWindowSize();
  const styles = `
    .trust-strip-sec {
      background: rgba(250, 168, 25, 0.05);
      padding: 30px 0;
      border-top: 1px solid rgba(250, 168, 25, 0.2);
      border-bottom: 1px solid rgba(250, 168, 25, 0.2);
    }
    .trust-container {
      display: flex;
      justify-content: center;
      gap: 60px;
      flex-wrap: wrap;
    }
    .trust-item {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #555555;
      font-size: 15px;
      font-weight: 600;
    }
    .trust-icon {
      color: #E8841A;
      display: flex;
      align-items: center;
    }
    @media (max-width: 768px) {
      .trust-item { font-size: 13px; }
    }
  `;

  const items = [
    { icon: <GraduationCap size={20} />, label: "Certified NLP Practitioner" },
    { icon: <Heart size={20} />, label: "Relationship Expert" },
    { icon: <Baby size={20} />, label: "Parenting Specialist" },
    { icon: <Sparkles size={20} />, label: "Inner Child Work" }
  ];

  return (
    <div className="trust-strip-sec">
      <style>{styles}</style>
      <div className="container trust-container trust-strip-grid" style={{
        display: 'flex',
        justifyContent: 'center',
        gap: isMobile ? '20px' : isTablet ? '30px' : '60px',
        flexWrap: 'wrap'
      }}>
        {items.map((item, idx) => (
          <div key={idx} className="trust-item" style={{
            fontSize: isMobile ? '13px' : '15px'
          }}>
            <span className="trust-icon">{item.icon}</span>
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;

