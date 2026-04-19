import React from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import { 
  HeartCrack, Brain, ShieldOff, RefreshCw, ChevronRight, 
  PlayCircle, Sparkles, MessageCircle, Heart, Users 
} from 'lucide-react';
import Hero from '../components/Hero';
import TrustStrip from '../components/TrustStrip';
import TestimonialCarousel from '../components/TestimonialCarousel';
import content from '../data/content.json';
import useWindowSize from '../hooks/useWindowSize';

const Home = () => {
  const { isMobile, isTablet } = useWindowSize();
  
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-50px" },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const styles = `
    .section-header {
      text-align: center;
      margin-bottom: ${isMobile ? '40px' : '60px'};
    }
    .section-title {
      font-size: 40px;
      margin-bottom: 16px;
    }
    .section-subtext {
      color: #555555;
      max-width: 600px;
      margin: 0 auto;
    }
    .steps-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
      position: relative;
    }
    .step-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      flex: 1;
    }
    .step-circle {
      width: 80px;
      height: 80px;
      background: linear-gradient(135deg, #FAA819, #E8841A);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
      box-shadow: 0 8px 20px rgba(232, 132, 26, 0.3);
    }
    .step-title {
      font-size: 18px;
      font-weight: 700;
      color: #1A1A1A;
      margin-bottom: 8px;
    }
    .step-desc {
      font-size: 14px;
      color: #666666;
      line-height: 1.5;
    }
    .step-arrow {
      color: #FAA819;
      margin-top: -40px;
    }
    .feature-list { margin-top: 24px; }
    .feature-item {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 10px;
      color: #555555;
      font-size: 15px;
    }
    .feature-dot {
      color: #E8841A;
      font-size: 14px;
      flex-shrink: 0;
    }
    .offer-card { position: relative; }
    .offer-card.featured {
      border: 1.5px solid rgba(232, 132, 26, 0.55) !important;
      box-shadow: 0 8px 40px rgba(232, 132, 26, 0.18) !important;
    }
    .popular-badge {
      position: absolute;
      top: 20px;
      right: 20px;
      background: linear-gradient(135deg, #FAA819 0%, #E8841A 100%);
      color: #1A0D00;
      padding: 7px 20px;
      border-radius: 50px;
      font-size: 12px;
      font-weight: 700;
    }
    .cta-final {
      background: rgba(255, 243, 199, 0.3);
      text-align: center;
      padding: 120px 0;
      position: relative;
    }
    .cta-final::before {
      content: '';
      position: absolute;
      top: 0; left: 0;
      width: 100%; height: 3px;
      background: linear-gradient(135deg, #F9E04B, #E8841A);
    }
    .cta-headline {
      font-size: 48px;
      margin-bottom: 24px;
      color: #1A1A1A;
    }

    /* WHO THIS IS FOR */
    .who-card {
      background: rgba(255,255,255,0.55) !important;
      backdrop-filter: blur(16px) !important;
      border: 1px solid rgba(250,168,25,0.2) !important;
      border-left: 3px solid #FAA819 !important;
      border-radius: 14px !important;
      padding: 16px 24px !important;
      display: flex !important;
      flex-direction: row !important;
      align-items: center !important;
      gap: 16px !important;
      box-shadow: none !important;
      transition: all 0.3s ease !important;
    }
    .who-card:hover {
      border-color: rgba(250,168,25,0.5) !important;
      box-shadow: 0 8px 24px rgba(232,132,26,0.1) !important;
      transform: translateY(-2px) !important;
    }

    /* EXPERIENCE CARDS */
    .exp-card {
      background: rgba(255,255,255,0.55) !important;
      backdrop-filter: blur(16px) !important;
      border: 1px solid rgba(250,168,25,0.2) !important;
      border-radius: 16px !important;
      padding: 20px 14px !important;
      display: flex !important;
      flex-direction: column !important;
      align-items: center !important;
      justify-content: flex-start !important;
      gap: 8px !important;
      text-align: center !important;
      transition: all 0.3s ease !important;
      height: 100% !important;
      box-sizing: border-box !important;
    }
    .exp-card:hover {
      transform: translateY(-4px) !important;
      box-shadow: 0 12px 30px rgba(232,132,26,0.12) !important;
    }


    @media (max-width: 1024px) {
      .steps-container { flex-direction: column; gap: 40px; }
      .step-arrow { transform: rotate(90deg); margin-top: 0; }
    }
    @media (max-width: 768px) {
      .experience-grid { grid-template-columns: repeat(2, 1fr) !important; }
      .offer-grid { grid-template-columns: 1fr !important; }
      .cta-headline { font-size: 36px; }
      .section-title { font-size: 32px; }
    }

    /* MOBILE RESPONSIVE MASTER RULES */
    @media (max-width: 640px) {
      /* HERO overrides */
      .hero-section {
        grid-template-columns: 1fr !important;
        padding-top: 150px !important;
        text-align: left !important;
      }
      .hero-video {
        display: none !important;
      }
      .hero-buttons {
        flex-direction: column !important;
        gap: 12px !important;
      }

      /* WHO THIS IS FOR */
      .who-grid {
        max-width: 100% !important;
        gap: 10px !important;
      }
      .who-card {
        padding: 14px 16px !important;
      }

      /* WHAT YOU'LL EXPERIENCE */
      .experience-grid {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: 10px !important;
      }

      /* SERVICES */
      .offer-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }

      /* HOW IT WORKS */
      .steps-container {
        flex-direction: column !important;
        gap: 24px !important;
        align-items: center !important;
      }
      .step-arrow {
        transform: rotate(90deg) !important;
        margin: 0 !important;
      }
      .step-circle {
        width: 60px !important;
        height: 60px !important;
        font-size: 20px !important;
      }

      /* TESTIMONIALS */
      .testimonial-video-grid,
      .testimonial-grid {
        grid-template-columns: 1fr !important;
        gap: 16px !important;
      }

      /* CTA FINAL */
      .cta-final { padding: 60px 0 !important; }
      .cta-headline { font-size: 26px !important; }
    }
  `;

  const whoData = [
    { icon: <HeartCrack size={20} />, text: content.whoThisIsFor.points[0] },
    { icon: <Brain size={20} />, text: content.whoThisIsFor.points[1] },
    { icon: <ShieldOff size={20} />, text: content.whoThisIsFor.points[2] },
    { icon: <RefreshCw size={20} />, text: content.whoThisIsFor.points[3] },
  ];

  const experienceData = [
    { icon: <Sparkles size={22} />, title: 'Emotional Clarity', text: 'Instead of confusion and mental fog' },
    { icon: <MessageCircle size={22} />, title: 'Confident Communication', text: 'Speak your truth clearly in life and love' },
    { icon: <Heart size={22} />, title: 'Deep Self-Worth', text: 'Inner stability that no one can shake' },
    { icon: <Users size={22} />, title: 'Secure Relationships', text: 'Healthier, peaceful connections' },
  ];

  return (
    <div className="home-page">
      <style>{styles}</style>

      <Hero content={content.hero} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* WHO THIS IS FOR */}
        <section style={{ padding: isMobile ? '10px 0' : '40px 0', background: 'transparent' }}>
          <div className="container">
            <motion.div {...fadeInUp}>
              <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
                <span className="badge">{content.whoThisIsFor.badge}</span>
                <h2 className="section-title" style={{ 
                  fontSize: isMobile ? '26px' : '42px', 
                  marginTop: '16px', 
                  color: '#1A1A1A', 
                  textAlign: 'center' 
                }}>
                  {content.whoThisIsFor.headline}
                </h2>
              </div>
            </motion.div>

            <div className="who-grid" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: isMobile ? '10px' : '12px',
              maxWidth: '680px',
              margin: '0 auto'
            }}>
              {whoData.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="who-card"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  {/* Icon box */}
                  <div style={{
                    width: '38px',
                    height: '38px',
                    minWidth: '38px',
                    minHeight: '38px',
                    borderRadius: '10px',
                    background: 'rgba(250,168,25,0.12)',
                    border: '1px solid rgba(250,168,25,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#E8841A',
                  }}>
                    {item.icon}
                  </div>
                  {/* Text */}
                  <p style={{
                    fontSize: '15px',
                    fontWeight: 600,
                    color: '#1A1A1A',
                    lineHeight: '1.3',
                    margin: 0,
                    flex: 1
                  }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* WHAT YOU'LL EXPERIENCE */}
        <section style={{ padding: isMobile ? '40px 0' : '80px 0', background: 'transparent' }}>
          <div className="container">
            <motion.div {...fadeInUp}>
              <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
                <span className="badge">{content.whatYoullExperience.badge}</span>
                <h2 className="section-title" style={{ 
                  fontSize: isMobile ? '26px' : '42px', 
                  marginTop: '16px', 
                  color: '#1A1A1A', 
                  textAlign: 'center' 
                }}>
                  {content.whatYoullExperience.headline}
                </h2>
              </div>
            </motion.div>

            <div className="experience-grid" style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : isTablet ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
              gap: isMobile ? '10px' : '14px',
              alignItems: 'stretch'
            }}>
              {experienceData.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="exp-card"
                  style={{
                    height: '100%',
                    boxSizing: 'border-box'
                  }}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                >
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1A0D00',
                    marginBottom: '4px',
                    flexShrink: 0
                  }}>
                    {item.icon}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '12px' : '14px',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    margin: 0,
                    textAlign: 'center',
                    width: '100%'
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '11px' : '12px',
                    color: '#666666',
                    lineHeight: '1.5',
                    margin: 0,
                    textAlign: 'center',
                    width: '100%'
                  }}>
                    {item.text}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES — 2 Cards */}
        <section id="services" className="section-padding" style={{ padding: isMobile ? '40px 0' : '80px 0', background: 'transparent' }}>
          <div className="container">
            <motion.div {...fadeInUp}>
              <div className="section-header" style={{ marginBottom: isMobile ? '32px' : '48px' }}>
                <span className="badge">Services</span>
                <h2 className="section-title" style={{ fontSize: isMobile ? '26px' : '32px' }}>Choose Your Path</h2>
              </div>
              <div className="offer-grid" style={{
                display: 'grid',
                gridTemplateColumns: isTablet ? '1fr' : 'repeat(2, 1fr)',
                maxWidth: '900px',
                margin: '0 auto',
                gap: isMobile ? '16px' : '30px'
              }}>
                {/* Clarity Call */}
                <div className="glass-card offer-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
                  <h3 style={{ fontSize: '28px', marginBottom: '8px', color: '#1A1A1A' }}>Clarity Call</h3>
                  <p style={{ color: '#E8841A', fontWeight: 600, marginBottom: '20px' }}>₹565</p>
                  <div className="feature-list" style={{ marginBottom: '40px', flexGrow: 1 }}>
                    {["Understand your emotional patterns", "Safe space to share freely", "Get clarity on your next step"].map((f, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-dot">✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <NavLink to="/clarity-call" className="btn-secondary" style={{ width: '100%', textAlign: 'center' }}>
                    Book Now
                  </NavLink>
                </div>

                {/* 1-on-1 Coaching */}
                <div className="glass-card offer-card featured" style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
                  <div className="popular-badge">POPULAR</div>
                  <h3 style={{ fontSize: '28px', marginBottom: '8px', color: '#1A1A1A' }}>1-on-1 Coaching</h3>
                  <p style={{ color: '#E8841A', fontWeight: 600, marginBottom: '20px' }}>Personalized Coaching</p>
                  <div className="feature-list" style={{ marginBottom: '40px', flexGrow: 1 }}>
                    {["Deep personalized sessions", "Customized plan", "Ongoing support & accountability"].map((f, i) => (
                      <div key={i} className="feature-item">
                        <span className="feature-dot">✓</span> {f}
                      </div>
                    ))}
                  </div>
                  <NavLink to="/one-on-one" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>
                    Explore Programs
                  </NavLink>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="section-padding" style={{ 
          padding: isMobile ? '40px 0' : '80px 0', 
          background: 'rgba(250, 168, 25, 0.05)' 
        }}>
          <div className="container">
            <motion.div {...fadeInUp}>
              <div className="section-header" style={{ marginBottom: isMobile ? '32px' : '48px' }}>
                <span className="badge">How It Works</span>
                <h2 className="section-title" style={{ fontSize: isMobile ? '26px' : '32px' }}>Your Journey To Healing</h2>
              </div>
              <div className="steps-container" style={{
                flexDirection: isTablet ? 'column' : 'row',
                gap: isMobile ? '24px' : isTablet ? '40px' : '20px',
                alignItems: 'center'
              }}>
                {[
                  { num: "1", title: "Book a Call", desc: "Start with a safe conversation" },
                  { num: "2", title: "Identify Patterns", desc: "Understand your core emotional triggers" },
                  { num: "3", title: "Start Your Journey", desc: "Begin your personalized plan" }
                ].map((step, idx) => (
                  <React.Fragment key={idx}>
                    <div className="step-item">
                      <div className="step-circle">{step.num}</div>
                      <h3 className="step-title">{step.title}</h3>
                      <p className="step-desc">{step.desc}</p>
                    </div>
                    {idx < 2 && (
                      <div className="step-arrow">
                        <ChevronRight size={32} />
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <section className="section-padding" style={{ background: 'transparent' }}>
          <div className="container">
            <motion.div {...fadeInUp}>
              <div className="section-header">
                <span className="badge">Testimonials</span>
                <h2 className="section-title">Voices of Healing</h2>
              </div>
            </motion.div>
        
            <TestimonialCarousel />
        
            <div style={{ textAlign: 'center', marginTop: '60px' }}>
              <NavLink to="/clarity-call">
                <button className="btn-secondary">Start Your Journey With Us</button>
              </NavLink>
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="cta-final">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <h2 className="cta-headline">{content.packages.finalCTA.headline}</h2>
              <p className="section-subtext" style={{ marginBottom: '40px' }}>
                {content.packages.finalCTA.subheadline}
              </p>
              <NavLink to="/clarity-call">
                <button className="btn-primary" style={{ padding: '18px 48px', fontSize: '18px' }}>
                  {content.packages.finalCTA.button}
                </button>
              </NavLink>
            </motion.div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Home;