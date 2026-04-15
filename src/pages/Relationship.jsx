import React from 'react';
import content from '../data/content.json';
import GlassCard from '../components/GlassCard';
import { FaHeart, FaUserFriends, FaRegLightbulb, FaCheckCircle, FaStar } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
import { motion } from 'framer-motion';

const Relationship = () => {
  const { isMobile, isTablet } = useWindowSize();
  const styles = `
    .rel-hero {
      padding: 140px 0 80px;
      text-align: center;
      background: transparent;
      position: relative;
    }
    .rel-hero::after {
      content: '';
      position: absolute;
      top: -60px;
      right: -60px;
      width: 300px;
      height: 300px;
      background: var(--gradient-soft);
      filter: blur(80px);
      border-radius: 50%;
      opacity: 0.4;
      pointer-events: none;
    }
    .rel-title { font-size: 56px; margin-bottom: 24px; color: #1A1A1A; }
    .rel-sub { font-size: 20px; color: #555555; max-width: 800px; margin: 0 auto 40px; }
    
    .grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 40px; margin-top: 60px; }
    .journey-timeline { margin-top: 100px; position: relative; padding-left: 30px; border-left: 2px solid #E8841A; }
    .timeline-item { margin-bottom: 40px; position: relative; }
    .timeline-dot { position: absolute; left: -39px; top: 0; width: 16px; height: 16px; background: #E8841A; border-radius: 50%; box-shadow: 0 4px 10px rgba(232, 132, 26, 0.3); }
    
    .pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 30px; margin-top: 60px; }
    .pricing-card { text-align: center; border: 0.5px solid rgba(245, 210, 80, 0.4); }
    .pricing-card.featured { 
      background: rgba(255, 255, 255, 0.5);
      backdrop-filter: blur(20px);
      border: 1.5px solid rgba(232, 132, 26, 0.55); 
      box-shadow: 0 8px 40px rgba(232, 132, 26, 0.18), inset 0 1px 0 rgba(255,255,255,0.8); 
    }
    .price { font-size: 32px; font-weight: 700; margin: 20px 0; display: block; color: #1A1A1A; }

    @media (max-width: 1024px) {
      .grid-2 { grid-template-columns: 1fr; }
    }
  `;

  const painPoints = [
    { icon: <FaHeart />, title: "Anxious Attachment", desc: "Constant fear of abandonment or needing reassurance." },
    { icon: <FaUserFriends />, title: "Communication Gaps", desc: "Feel like you're talking to a wall or fighting over small things." },
    { icon: <FaRegLightbulb />, title: "Lack of Boundaries", desc: "Saying yes when you want to say no, feeling drained." },
    { icon: <FaStar />, title: "Empty Connections", desc: "Together but lonely. Missing the spark and emotional depth." }
  ];

  const packages = content.packages.items;

  return (
    <div className="relationship-page">
      <style>{styles}</style>
      
      <section className="rel-hero" style={{ 
        paddingTop: isMobile ? '100px' : '140px', 
        paddingBottom: isMobile ? '40px' : '80px' 
      }}>
        <div className="container">
          <span className="badge">1-on-1 Coaching</span>
          <h1 className="rel-title" style={{ 
            fontSize: isMobile ? '32px' : isTablet ? '44px' : '56px',
            marginBottom: '24px'
          }}>
            Heal Your Heart, Transform Your Bonds
          </h1>
          <p className="rel-sub" style={{ 
            fontSize: isMobile ? '16px' : '20px',
            marginBottom: '40px'
          }}>
            Break the cycle of toxic relationships and build a secure, loving connection with yourself and others.
          </p>
          <button className="btn-primary">Book Your Strategy Session</button>
        </div>
      </section>

      <section className="section-padding" style={{background: 'transparent'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Is This For You?</h2>
            <p className="section-subtext">If you identify with any of these, you're in the right place.</p>
          </div>
          <div className="grid-2">
            {painPoints.map((p, i) => (
              <GlassCard key={i} className="flex gap-4 items-start">
                <div style={{fontSize: '32px', color: '#E8841A', marginBottom: '16px'}}>{p.icon}</div>
                <h3 style={{fontSize: '24px', marginBottom: '12px', color: '#1A1A1A'}}>{p.title}</h3>
                <p style={{color: '#555555'}}>{p.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background: 'transparent'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Transformation Journey</h2>
          </div>
          <div className="journey-timeline">
            {[
              { t: "Phase 1: Awareness", d: "Identifying your attachment style and core wounds." },
              { t: "Phase 2: Inner Child Work", d: "Healing the past versions of you that still feel unsafe." },
              { t: "Phase 3: Reprogramming", d: "Using NLP to change how you perceive and react to triggers." },
              { t: "Phase 4: Thriving", d: "Living with confidence, boundaries, and secure love." }
            ].map((step, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-dot"></div>
                <h3 style={{marginBottom: '8px', color: '#1A1A1A'}}>{step.t}</h3>
                <p style={{color: '#555555'}}>{step.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding" style={{background: 'rgba(255, 248, 220, 0.4)'}}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Coaching Packages</h2>
          </div>
          <div className="pricing-grid" style={{
            display: 'grid', 
            gridTemplateColumns: isTablet ? '1fr' : 'repeat(3, 1fr)', 
            gap: isMobile ? '16px' : '30px', 
            maxWidth: isTablet ? '400px' : '100%',
            margin: isTablet ? '40px auto 0' : '60px auto 0'
          }}>
            {packages.map((pkg, i) => (
              <GlassCard key={i} className={`pricing-card ${pkg.featured ? 'featured' : ''}`}>
                <h3 style={{color: '#1A1A1A'}}>{pkg.title}</h3>
                <span className="price">{pkg.price}</span>
                <div style={{textAlign: 'left', marginBottom: '30px'}}>
                  {pkg.features.map((f, fi) => (
                    <div key={fi} style={{display: 'flex', gap: '10px', marginBottom: '8px', color: '#555555'}}>
                      <FaCheckCircle style={{color: '#E8841A', marginTop: '4px'}} />
                      {f}
                    </div>
                  ))}
                </div>
                <button className={pkg.featured ? 'btn-primary' : 'btn-secondary'} style={{width: '100%'}}>Choose Plan</button>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Relationship;
