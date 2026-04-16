import React from 'react';
import { NavLink } from 'react-router-dom';
import { Lightbulb, Compass, Zap, Clock, Video, CheckCircle } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const ClarityCall = () => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <div className="about-page">
      <section style={{
        paddingTop: isMobile ? '80px' : '140px',
        paddingBottom: isMobile ? '40px' : '80px',
        background: 'transparent'
      }}>
        <div className="container">

          {/* SECTION 1 — HERO */}
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
              textAlign: 'center',
              fontStyle: 'italic'
            }}>
              One conversation can shift everything.
            </h1>
            <p style={{
              fontSize: isMobile ? '16px' : '20px',
              color: '#555',
              lineHeight: 1.8,
              textAlign: 'center',
              marginBottom: '32px'
            }}>
              You don't need more advice.<br />
              <strong style={{ color: '#1A1A1A' }}>You need clarity.</strong>
            </p>

            {/* Session details */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              gap: isMobile ? '16px' : '32px',
              flexWrap: 'wrap',
              marginBottom: '32px'
            }}>
              {[
                { icon: <Clock size={16} />, text: '45–60 minutes' },
                { icon: <Video size={16} />, text: 'Zoom / Google Meet' },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#666',
                  fontSize: '14px',
                  fontWeight: 500
                }}>
                  <span style={{ color: '#E8841A' }}>{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>

            <NavLink to="/clarity-call/form">
              <button className="btn-primary" style={{
                fontSize: isMobile ? '16px' : '18px',
                padding: isMobile ? '14px 32px' : '16px 48px',
                width: isMobile ? '100%' : 'auto'
              }}>
                Book Your Clarity Call — ₹565
              </button>
            </NavLink>

            {/* Trust notes */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              marginTop: '16px'
            }}>
              <p style={{ fontSize: '12px', color: '#999' }}>
                This call is not therapy. It is a clarity + awareness session.
              </p>
              <p style={{ fontSize: '12px', color: '#E8841A', fontWeight: 600 }}>
                ✦ This amount is fully adjusted if you choose to continue in a program.
              </p>
            </div>
          </div>

          {/* SECTION 2 — CONNECTION */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="badge">Right Now</span>
              <h2 style={{
                fontSize: isMobile ? '22px' : '32px',
                color: '#1A1A1A',
                marginTop: '16px',
                textAlign: 'center'
              }}>
                You might be feeling...
              </h2>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: '14px',
              marginBottom: '28px'
            }}>
              {[
                'Stuck in the same patterns',
                'Emotionally overwhelmed in relationships or parenting',
                'Reacting in ways you later regret',
                'Overthinking, yet not finding real solutions'
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(250,168,25,0.2)',
                  borderLeft: '3px solid #FAA819',
                  borderRadius: '12px',
                  padding: isMobile ? '14px 16px' : '16px 20px',
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start'
                }}>
                  <span style={{ color: '#E8841A', flexShrink: 0, marginTop: '2px' }}>•</span>
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    color: '#444',
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              background: 'rgba(255,255,255,0.5)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(250,168,25,0.2)',
              borderRadius: '16px',
              padding: isMobile ? '20px' : '28px',
              textAlign: 'center'
            }}>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#555',
                lineHeight: 1.9,
                margin: 0
              }}>
                And despite trying…<br />
                <strong style={{ color: '#1A1A1A' }}>nothing seems to change deeply.</strong>
              </p>
            </div>
          </div>

          {/* SECTION 3 — REFRAME */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px',
            textAlign: 'center'
          }}>
            <span className="badge">The Shift</span>
            <h2 style={{
              fontSize: isMobile ? '22px' : '32px',
              color: '#1A1A1A',
              marginTop: '16px',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              Here's what most people don't realise:
            </h2>
            <div style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(250,168,25,0.2)',
              borderRadius: '20px',
              padding: isMobile ? '24px' : '40px'
            }}>
              <p style={{
                fontSize: isMobile ? '16px' : '20px',
                color: '#999',
                textDecoration: 'line-through',
                marginBottom: '8px'
              }}>
                You don't need to fix your life.
              </p>
              <p style={{
                fontSize: isMobile ? '20px' : '28px',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '20px'
              }}>
                You need to understand yourself.
              </p>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#555',
                lineHeight: 1.9
              }}>
                Because the moment you see clearly…<br />
                <strong style={{ color: '#D97706' }}>you begin to respond differently.</strong>
              </p>
            </div>
          </div>

          {/* SECTION 4 — WHAT YOU'LL EXPERIENCE */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="badge">What You'll Experience</span>
              <h2 style={{
                fontSize: isMobile ? '22px' : '32px',
                color: '#1A1A1A',
                marginTop: '16px',
                textAlign: 'center'
              }}>
                In this 1:1 Clarity Call, you will:
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
              {[
                'Understand what\'s really keeping you stuck',
                'Identify your emotional patterns and triggers',
                'Gain a new, deeper perspective',
                'Feel lighter, calmer, and more in control',
                'Know your next step with clarity'
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(250,168,25,0.15)',
                  borderRadius: '12px',
                  padding: isMobile ? '14px 16px' : '16px 20px'
                }}>
                  <CheckCircle size={18} style={{ color: '#E8841A', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    color: '#1A1A1A',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.4
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              textAlign: 'center',
              padding: isMobile ? '20px' : '28px',
              background: 'rgba(250,168,25,0.08)',
              borderRadius: '16px',
              border: '1px solid rgba(250,168,25,0.2)'
            }}>
              <p style={{
                fontSize: isMobile ? '15px' : '17px',
                color: '#555',
                lineHeight: 1.8,
                margin: 0
              }}>
                This is not just a conversation…<br />
                <strong style={{ color: '#D97706' }}>this is the beginning of your shift.</strong>
              </p>
            </div>
          </div>

          {/* SECTION 5 — MY APPROACH */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px',
            background: 'rgba(255,255,255,0.5)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,168,25,0.2)',
            borderRadius: '20px',
            padding: isMobile ? '24px' : '40px'
          }}>
            <div style={{ textAlign: 'center' }}>
              <span className="badge" style={{ textAlign: 'center' }}>My Approach</span>
            </div>
            <h2 style={{
              fontSize: isMobile ? '20px' : '28px',
              color: '#1A1A1A',
              marginTop: '16px',
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              I don't give quick fixes.
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#555',
              lineHeight: 1.9,
              textAlign: 'left'
            }}>
              Through NLP-based tools and deep inner work,<br />
              I help you understand <strong style={{ color: '#1A1A1A' }}>why you think, feel, and react the way you do.</strong><br /><br />
              Because once you understand that…<br />
              <strong style={{ color: '#D97706' }}>change becomes natural.</strong>
            </p>
          </div>

          {/* SECTION 6 — WHO THIS IS FOR */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="badge">Who This Is For</span>
              <h2 style={{
                fontSize: isMobile ? '22px' : '32px',
                color: '#1A1A1A',
                marginTop: '16px',
                textAlign: 'center'
              }}>
                This call is for you if:
              </h2>
            </div>
            {[
              'You are ready to look within',
              'You are open to seeing your patterns honestly',
              'You truly want change — not just temporary relief'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start',
                marginBottom: '12px',
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(250,168,25,0.15)',
                borderLeft: '3px solid #FAA819',
                borderRadius: '12px',
                padding: isMobile ? '14px 16px' : '16px 20px'
              }}>
                <span style={{ color: '#E8841A', fontSize: '18px', flexShrink: 0 }}>✦</span>
                <p style={{
                  fontSize: isMobile ? '14px' : '16px',
                  color: '#1A1A1A',
                  fontWeight: 600,
                  margin: 0,
                  lineHeight: 1.4
                }}>
                  {item}
                </p>
              </div>
            ))}
          </div>

          {/* SECTION 7 — WHAT HAPPENS ON THE CALL */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '28px' }}>
              <span className="badge">The Call</span>
              <h2 style={{
                fontSize: isMobile ? '22px' : '32px',
                color: '#1A1A1A',
                marginTop: '16px',
                textAlign: 'center'
              }}>
                What happens on the call
              </h2>
            </div>

            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0'
            }}>
              {[
                { num: '01', title: 'You share your current challenge' },
                { num: '02', title: 'I help you see patterns and blind spots' },
                { num: '03', title: 'You experience clarity and emotional shift' },
                { num: '04', title: 'If aligned, I guide you on the next step' },
              ].map((step, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '20px',
                  alignItems: 'flex-start',
                  padding: isMobile ? '16px 0' : '20px 0',
                  borderBottom: i < 3 ? '1px solid rgba(250,168,25,0.15)' : 'none'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    minWidth: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#1A0D00',
                    fontWeight: 700,
                    fontSize: '14px'
                  }}>
                    {step.num}
                  </div>
                  <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#444',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.5,
                    paddingTop: '8px'
                  }}>
                    {step.title}
                  </p>
                </div>
              ))}
            </div>

            <div style={{
              textAlign: 'center',
              marginTop: '24px',
              padding: '16px',
              background: 'rgba(255,255,255,0.4)',
              borderRadius: '12px',
              border: '1px solid rgba(250,168,25,0.15)'
            }}>
              <p style={{
                fontSize: isMobile ? '14px' : '15px',
                color: '#666',
                margin: 0,
                fontStyle: 'italic'
              }}>
                No pressure. Just honest, grounded guidance.
              </p>
            </div>
          </div>

          {/* SECTION 8 — INVESTMENT */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px',
            textAlign: 'center',
            background: 'rgba(255,255,255,0.55)',
            backdropFilter: 'blur(16px)',
            border: '2px solid rgba(250,168,25,0.3)',
            borderRadius: '20px',
            padding: isMobile ? '28px 20px' : '48px'
          }}>
            <span className="badge">Investment</span>
            <div style={{
              fontSize: isMobile ? '48px' : '64px',
              fontWeight: 800,
              color: '#1A1A1A',
              marginTop: '16px',
              marginBottom: '8px',
              fontFamily: 'Inter, sans-serif'
            }}>
              ₹565
            </div>
            <p style={{
              fontSize: isMobile ? '13px' : '15px',
              color: '#E8841A',
              fontWeight: 600,
              marginBottom: '24px'
            }}>
              ✦ This amount is fully adjusted if you choose to continue working in a program.
            </p>
            <NavLink to="/clarity-call/form">
              <button className="btn-primary" style={{
                fontSize: isMobile ? '16px' : '18px',
                padding: isMobile ? '14px 32px' : '16px 48px',
                width: isMobile ? '100%' : 'auto'
              }}>
                Book Your Clarity Call
              </button>
            </NavLink>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              marginTop: '16px'
            }}>
              <p style={{ fontSize: '12px', color: '#999' }}>
                This call is not therapy. It is a clarity + awareness session.
              </p>
              <p style={{ fontSize: '12px', color: '#666' }}>
                Duration: 45–60 minutes • Online (Zoom/Google Meet)
              </p>
            </div>
          </div>

          {/* SECTION 9+10 — URGENCY + CTA */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto 60px',
            background: 'rgba(250,168,25,0.06)',
            border: '1px solid rgba(250,168,25,0.2)',
            borderRadius: '20px',
            padding: isMobile ? '24px 20px' : '40px',
            textAlign: 'center'
          }}>
            <span className="badge">Limited Slots</span>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#555',
              lineHeight: 1.9,
              marginTop: '16px',
              marginBottom: '28px'
            }}>
              I take only a limited number of calls each week<br />
              to ensure <strong style={{ color: '#1A1A1A' }}>depth and personal attention.</strong><br /><br />
              If this resonates with you…<br />
              <strong style={{ color: '#D97706' }}>don't overthink.</strong>
            </p>
            <NavLink to="/clarity-call/form">
              <button className="btn-primary" style={{
                fontSize: isMobile ? '16px' : '18px',
                padding: isMobile ? '14px 32px' : '16px 48px',
                width: isMobile ? '100%' : 'auto'
              }}>
                Book Your Clarity Call — ₹565
              </button>
            </NavLink>
          </div>

          {/* SECTION 11 — FINAL CLOSE */}
          <div style={{
            maxWidth: '600px',
            margin: '0 auto 40px',
            textAlign: 'center'
          }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '32px',
              color: '#1A1A1A',
              marginBottom: '16px',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              You don't need to have everything figured out.
            </h2>
            <p style={{
              fontSize: isMobile ? '15px' : '18px',
              color: '#555',
              lineHeight: 1.9,
              marginBottom: '8px'
            }}>
              You just need to take one step…
            </p>
            <p style={{
              fontSize: isMobile ? '18px' : '24px',
              fontWeight: 700,
              color: '#D97706'
            }}>
              towards clarity.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default ClarityCall;