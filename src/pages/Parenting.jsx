import React from 'react';
import { CheckCircle, Users, Clock, Video, Star } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

const TAGMANGO_LINK = "https://www.tagmango.com/app/course/the-parenting-shift-foundation-by-sukeeshi";

const Parenting = () => {
  const { isMobile, isTablet } = useWindowSize();

  const styles = `
    .parenting-page { background: transparent; }

    .modules-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .shift-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 16px;
    }
    .for-who-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 14px;
    }

    @media (max-width: 768px) {
      .modules-grid { grid-template-columns: 1fr !important; }
      .shift-grid { grid-template-columns: 1fr !important; }
      .for-who-grid { grid-template-columns: 1fr !important; }
    }
  `;

  const glassCard = {
    background: 'rgba(255,255,255,0.55)',
    backdropFilter: 'blur(16px)',
    WebkitBackdropFilter: 'blur(16px)',
    border: '1px solid rgba(250,168,25,0.2)',
    borderRadius: '16px',
    padding: isMobile ? '20px' : '28px',
    transition: 'all 0.3s ease'
  };

  const ctaButton = {
    background: 'linear-gradient(135deg, #FAA819, #E8841A)',
    color: '#1A0D00',
    fontWeight: 700,
    fontSize: isMobile ? '16px' : '18px',
    padding: isMobile ? '14px 32px' : '16px 48px',
    borderRadius: '50px',
    border: 'none',
    cursor: 'pointer',
    display: 'inline-block',
    textDecoration: 'none',
    textAlign: 'center',
    width: isMobile ? '100%' : 'auto'
  };

  return (
    <div className="parenting-page">
      <style>{styles}</style>

      {/* HERO SECTION */}
      <section style={{
        paddingTop: isMobile ? '90px' : '120px',
        marginTop: isMobile ? '80px' : '0',
        paddingBottom: isMobile ? '40px' : '60px',
        background: 'transparent',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="badge">New Course</span>

          <h1 style={{
            fontSize: isMobile ? '28px' : isTablet ? '40px' : '52px',
            marginTop: '16px',
            marginBottom: '16px',
            color: '#1A1A1A',
            lineHeight: 1.2,
            textAlign: 'center'
          }}>
            The Parenting Shift Foundation
          </h1>

          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            color: '#D97706',
            fontWeight: 700,
            marginBottom: '8px'
          }}>
            By Sukeeshi
          </p>

          {/* Stats Strip */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '40px',
            flexWrap: 'wrap',
            margin: '24px 0',
          }}>
            {[
              { icon: <Users size={18} />, text: '15 Live Sessions' },
              { icon: <Clock size={18} />, text: '40 min each' },
              { icon: <Video size={18} />, text: 'Recording Available' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                color: '#555',
                fontSize: isMobile ? '13px' : '15px',
                fontWeight: 600
              }}>
                <span style={{ color: '#E8841A' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          {/* Price */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '28px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: isMobile ? '36px' : '48px',
              fontWeight: 800,
              color: '#1A1A1A',
              fontFamily: 'Inter, sans-serif'
            }}>
              ₹1,365
            </span>
            <div style={{ textAlign: 'left' }}>
              <div style={{
                fontSize: '13px',
                color: '#999',
                textDecoration: 'line-through'
              }}>
                ₹7,999
              </div>
              <div style={{
                fontSize: '12px',
                color: '#E8841A',
                fontWeight: 700
              }}>
                LIMITED DEAL
              </div>
            </div>
          </div>

          {/* CTA */}
          <a href={TAGMANGO_LINK} target="_blank" rel="noreferrer" style={ctaButton}>
            Enroll Now — Lifetime Access
          </a>

          <p style={{
            fontSize: '13px',
            color: '#999',
            marginTop: '12px'
          }}>
            🔒 Secure payment via TagMango
          </p>
        </div>
      </section>

      {/* ABOUT THE COURSE */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ ...glassCard, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '28px',
              color: '#1A1A1A',
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              About This Course
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              A 15-session foundation course for parents who want to stop reacting and start responding with clarity.
            </p>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              We work on <strong>you first</strong> — your triggers, your values, and your emotional regulation — so parenting feels calmer and more intentional.
            </p>
            <p style={{
              fontSize: isMobile ? '15px' : '17px',
              color: '#D97706',
              fontWeight: 700,
              fontStyle: 'italic',
              textAlign: 'left'
            }}>
              This is not about fixing your child. It's about building stability inside you.
            </p>
          </div>
        </div>
      </section>

      {/* THIS COURSE IS FOR */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '40px' }}>
            <span className="badge">Is This For You?</span>
            <h2 style={{
              fontSize: isMobile ? '24px' : '36px',
              marginTop: '16px',
              color: '#1A1A1A',
              textAlign: 'center'
            }}>
              This Course Is For Parents Who:
            </h2>
          </div>

          <div className="for-who-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              "Understand things but forget in the moment",
              "Feel guilty after reacting",
              "Want consistency, not perfection",
              "Want support instead of doing this alone"
            ].map((item, i) => (
              <div key={i} style={{
                ...glassCard,
                padding: isMobile ? '16px' : '20px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '12px',
                borderLeft: '3px solid #FAA819'
              }}>
                <CheckCircle size={18} style={{ color: '#E8841A', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: isMobile ? '14px' : '15px',
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
        </div>
      </section>

      {/* WHAT YOU'LL SHIFT */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '40px' }}>
            <span className="badge">Transformation</span>
            <h2 style={{
              fontSize: isMobile ? '24px' : '36px',
              marginTop: '16px',
              color: '#1A1A1A',
              textAlign: 'center'
            }}>
              What You'll Shift
            </h2>
          </div>

          <div className="shift-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
            {[
              { from: "Shouting", to: "Calm communication" },
              { from: "Power struggles", to: "Cooperation" },
              { from: "Confusion", to: "Clarity" },
              { from: "Exhaustion", to: "Emotional balance" },
            ].map((item, i) => (
              <div key={i} style={{
                ...glassCard,
                padding: isMobile ? '16px' : '20px',
                textAlign: 'center'
              }}>
                <p style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#999',
                  textDecoration: 'line-through',
                  margin: '0 0 6px'
                }}>
                  {item.from}
                </p>
                <div style={{
                  fontSize: isMobile ? '18px' : '20px',
                  color: '#E8841A',
                  marginBottom: '4px'
                }}>
                  ↓
                </div>
                <p style={{
                  fontSize: isMobile ? '15px' : '16px',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  margin: 0
                }}>
                  {item.to}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '40px' }}>
            <span className="badge">Curriculum</span>
            <h2 style={{
              fontSize: isMobile ? '24px' : '36px',
              marginTop: '16px',
              color: '#1A1A1A',
              textAlign: 'center'
            }}>
              What You'll Learn
            </h2>
          </div>

          <div className="modules-grid" style={{ maxWidth: '900px', margin: '0 auto' }}>
            {[
              { t: "Understanding Meltdowns", d: "Learn the brain science behind 'difficult' behavior." },
              { t: "The Power of Validation", d: "How to make your child feel heard and understood." },
              { t: "Conscious Discipline", d: "Moving from punishment to teaching and connection." },
              { t: "Self-Regulation for Parents", d: "Keep your calm even when things get chaotic." },
              { t: "Triggers & Patterns", d: "Understand what sets you off and why." },
              { t: "Calm Communication", d: "Simple scripts for tough parenting moments." },
            ].map((module, i) => (
              <div key={i} style={{
                ...glassCard,
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start'
              }}>
                <div style={{
                  width: '36px',
                  height: '36px',
                  minWidth: '36px',
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#1A0D00',
                  fontWeight: 700,
                  fontSize: '14px'
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{
                    fontSize: isMobile ? '15px' : '17px',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    marginBottom: '6px',
                    textAlign: 'left'
                  }}>
                    {module.t}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: '#666',
                    margin: 0,
                    textAlign: 'left'
                  }}>
                    {module.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '40px' }}>
            <span className="badge">What's Included</span>
            <h2 style={{
              fontSize: isMobile ? '24px' : '36px',
              marginTop: '16px',
              color: '#1A1A1A',
              textAlign: 'center'
            }}>
              Everything You Get
            </h2>
          </div>

          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <div style={{ ...glassCard, marginBottom: '16px' }}>
              {[
                "15 Live Sessions (40 min each)",
                "Session recordings — watch anytime",
                "Guidance, reflection & practical exercises",
                "Simple tools you can use between sessions",
                "Gentle, practical & designed for real life",
                "Lifetime access to all materials"
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  marginBottom: i < 5 ? '16px' : '0',
                  paddingBottom: i < 5 ? '16px' : '0',
                  borderBottom: i < 5 ? '1px solid rgba(250,168,25,0.1)' : 'none'
                }}>
                  <CheckCircle size={18} style={{ color: '#E8841A', flexShrink: 0, marginTop: '2px' }} />
                  <p style={{
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#1A1A1A',
                    fontWeight: 500,
                    margin: 0
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{
        padding: isMobile ? '40px 0 60px' : '60px 0 80px',
        background: 'rgba(255, 243, 199, 0.3)',
        textAlign: 'center',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          top: 0, left: 0,
          width: '100%', height: '3px',
          background: 'linear-gradient(135deg, #FAA819, #E8841A)'
        }} />
        <div className="container">
          <h2 style={{
            fontSize: isMobile ? '24px' : '36px',
            color: '#1A1A1A',
            marginBottom: '12px',
            textAlign: 'center'
          }}>
            You don't need more parenting advice.
          </h2>
          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            color: '#D97706',
            fontWeight: 700,
            marginBottom: '8px'
          }}>
            You need a SUPPORTED practice.
          </p>
          <p style={{
            fontSize: isMobile ? '14px' : '16px',
            color: '#666',
            marginBottom: '32px',
            maxWidth: '500px',
            margin: '0 auto 32px'
          }}>
            Join parents who are building stability inside themselves — so daily parenting becomes easier.
          </p>

          {/* Price */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: isMobile ? '32px' : '42px',
              fontWeight: 800,
              color: '#1A1A1A',
              fontFamily: 'Inter, sans-serif'
            }}>
              ₹1,365
            </span>
            <span style={{ fontSize: '16px', color: '#999', textDecoration: 'line-through' }}>
              ₹7,999
            </span>
          </div>

          <a
            href={TAGMANGO_LINK}
            target="_blank"
            rel="noreferrer"
            style={{
              ...ctaButton,
              fontSize: isMobile ? '17px' : '20px',
              padding: isMobile ? '16px 32px' : '18px 56px',
              boxShadow: '0 8px 30px rgba(232,132,26,0.3)'
            }}
          >
            Enroll Now — ₹1,365
          </a>

          <p style={{ fontSize: '12px', color: '#999', marginTop: '12px' }}>
            🔒 Secure payment via TagMango
          </p>
        </div>
      </section>

    </div>
  );
};

export default Parenting;