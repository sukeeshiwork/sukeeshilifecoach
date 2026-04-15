import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaRegClock, FaVideo } from 'react-icons/fa';
import { Lightbulb, Compass, Zap } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const ClarityCall = () => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <div className="about-page">
      <section style={{
        paddingTop: isMobile ? '80px' : '140px',
        paddingBottom: isMobile ? '40px' : '80px',
        marginTop: isMobile ? '80px' : '0',

        background: 'transparent'
      }}>
        <div className="container">

          {/* HERO */}
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto 60px'
          }}>
            <span className="badge">Limited Slots Weekly</span>

            <h1 style={{
              fontSize: isMobile ? '28px' : isTablet ? '38px' : '52px',
              marginTop: '16px',
              marginBottom: '16px',
              color: '#1A1A1A',
              lineHeight: 1.2,
              textAlign: 'center'
            }}>
              Book Your Clarity Call
            </h1>

            <p style={{
              fontSize: isMobile ? '15px' : '18px',
              color: '#555555',
              lineHeight: 1.7,
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              Your safe space to be heard, understood, and guided.
            </p>

            {/* Price + Details */}
            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              justifyContent: 'center',
              alignItems: 'center',
              gap: isMobile ? '12px' : '24px',
              marginBottom: '32px'
            }}>
              <div style={{
                background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                padding: isMobile ? '10px 28px' : '12px 36px',
                borderRadius: '50px',
                color: '#1A0D00',
                fontWeight: 700,
                fontSize: isMobile ? '22px' : '26px',
              }}>
                ₹333
              </div>
              <div style={{
                display: 'flex',
                gap: '20px',
                flexWrap: 'wrap',
                justifyContent: 'center'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '14px' }}>
                  <FaRegClock style={{ color: '#E8841A' }} />
                  40 minutes
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#666', fontSize: '14px' }}>
                  <FaVideo style={{ color: '#E8841A' }} />
                  Zoom Session
                </div>
              </div>
            </div>

            <NavLink to="/clarity-call/form">
              <button className="btn-primary" style={{
                fontSize: isMobile ? '16px' : '18px',
                padding: isMobile ? '14px 32px' : '16px 48px',
                width: isMobile ? '100%' : 'auto'
              }}>
                Book Your Call Now — ₹333
              </button>
            </NavLink>
          </div>

          {/* SAFE SPACE + WHAT YOU'LL GET */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
            gap: isMobile ? '32px' : '80px',
            marginBottom: isMobile ? '40px' : '60px'
          }}>

            {/* Left — Safe Space */}
            <div>
              <p style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#E8841A',
                textTransform: 'uppercase',
                marginBottom: '28px',
                letterSpacing: '1px'
              }}>
                This is your safe space to:
              </p>
              {[
                { number: '01', title: "Share what you're going through", description: 'Speak freely without fear of judgment. Every feeling you carry is valid here.' },
                { number: '02', title: "Understand what's really happening", description: "Uncover patterns and emotional cycles you didn't realize were there." },
                { number: '03', title: 'Get clarity on your next steps', description: 'Move from feeling stuck to feeling in control — with aligned, practical guidance.' }
              ].map((point, idx) => (
                <div key={idx} style={{
                  borderLeft: '3px solid #FAA819',
                  paddingLeft: '20px',
                  marginBottom: '36px'
                }}>
                  <div style={{
                    fontSize: isMobile ? '32px' : '40px',
                    fontWeight: 800,
                    color: '#FAA819',
                    opacity: 0.4,
                    lineHeight: 1,
                    marginBottom: '8px'
                  }}>
                    {point.number}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    marginBottom: '8px',
                    textAlign: 'left'
                  }}>
                    {point.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: '#666666',
                    lineHeight: 1.6,
                    margin: 0,
                    textAlign: 'left'
                  }}>
                    {point.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right — What You'll Get */}
            <div>
              <p style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#E8841A',
                textTransform: 'uppercase',
                marginBottom: '28px',
                letterSpacing: '1px'
              }}>
                What You'll Get:
              </p>
              {[
                { icon: <Lightbulb size={22} />, title: 'Personalized Insights', desc: 'No generic advice — everything tailored to your unique patterns and situation.' },
                { icon: <Compass size={22} />, title: 'Clear Direction', desc: 'Know exactly what to do next. No more overthinking or second-guessing.' },
                { icon: <Zap size={22} />, title: 'Actionable Guidance', desc: 'Real, practical steps you can apply immediately to break toxic patterns.' }
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255, 255, 255, 0.55)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(250, 168, 25, 0.25)',
                  borderRadius: '16px',
                  padding: isMobile ? '16px' : '24px',
                  display: 'flex',
                  gap: '16px',
                  marginBottom: '16px'
                }}>
                  <div style={{ color: '#E8841A', flexShrink: 0 }}>{item.icon}</div>
                  <div>
                    <h4 style={{
                      fontWeight: 700,
                      color: '#1A1A1A',
                      marginBottom: '4px',
                      fontSize: isMobile ? '15px' : '16px',
                      textAlign: 'left'
                    }}>
                      {item.title}
                    </h4>
                    <p style={{
                      fontSize: isMobile ? '13px' : '14px',
                      color: '#666',
                      lineHeight: 1.5,
                      margin: 0,
                      textAlign: 'left'
                    }}>
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM CTA */}
          <div style={{
            textAlign: 'center',
            padding: isMobile ? '28px 20px' : '48px 60px',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,168,25,0.2)',
            borderRadius: '24px',
            marginBottom: '40px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '32px',
              fontWeight: 700,
              color: '#1A1A1A',
              marginBottom: '8px',
              textAlign: 'center'
            }}>
              Ready to get clarity?
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#666',
              marginBottom: '28px',
              lineHeight: 1.6
            }}>
              One conversation can change everything.
            </p>
            <NavLink to="/clarity-call/form">
              <button className="btn-primary" style={{
                fontSize: isMobile ? '16px' : '20px',
                padding: isMobile ? '14px 32px' : '18px 56px',
                width: isMobile ? '100%' : 'auto'
              }}>
                Book Your Call Now — ₹333
              </button>
            </NavLink>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ClarityCall;