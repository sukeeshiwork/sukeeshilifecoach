import React from 'react';
import { CheckCircle, Users, Clock, Video, Gift, Star } from 'lucide-react';
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
    .bonus-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }
    @media (max-width: 768px) {
      .modules-grid { grid-template-columns: 1fr !important; }
      .bonus-grid { grid-template-columns: 1fr !important; }
    }
    @media (max-width: 1024px) {
      .bonus-grid { grid-template-columns: repeat(2, 1fr) !important; }
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
    width: isMobile ? '100%' : 'auto',
    boxShadow: '0 8px 30px rgba(232,132,26,0.3)'
  };

  const bonuses = [
    { emoji: '🧘‍♀️', title: 'Integrating Consciousness', desc: 'Elevate your awareness and embrace a holistic approach.' },
    { emoji: '🌈', title: 'Recentering Self', desc: 'Find inner peace and balance within.' },
    { emoji: '🧠', title: 'Busting Beliefs', desc: 'Challenge and reshape limiting beliefs.' },
    { emoji: '😊', title: 'Regulating Emotions', desc: 'Master emotional intelligence with ease.' },
    { emoji: '🚧', title: 'Setting Boundaries', desc: 'Learn the art of setting healthy boundaries.' },
    { emoji: '📱', title: 'Balancing Screen Time', desc: 'Foster meaningful connections beyond screens.' },
  ];

  const extras = [
    { emoji: '💎', title: 'Inner Circle Wisdom', desc: 'Gain exclusive insights from the inner circle.' },
    { emoji: '🏆', title: 'Parenthon Challenges', desc: 'Unique 10-day challenges for growth.' },
    { emoji: '🎯', title: '1:1 Session', desc: 'Personal one-on-one session included.' },
    { emoji: '🎬', title: 'Webinar Recording', desc: 'Access to full webinar recording.' },
    { emoji: '📚', title: '2 eBooks', desc: 'Curated eBooks for deeper learning.' },
    { emoji: '📞', title: 'Weekly Inner Circle Call', desc: 'Join weekly group support calls.' },
  ];

  return (
    <div className="parenting-page">
      <style>{styles}</style>

      {/* HERO */}
      <section style={{
        paddingTop: isMobile ? '90px' : '120px',
        paddingBottom: isMobile ? '40px' : '60px',
        marginTop: '60px',
        background: 'transparent',
        textAlign: 'center'
      }}>
        <div className="container">
          <span className="badge">3-Day Transformative Program</span>

          <h1 style={{
            fontSize: isMobile ? '28px' : isTablet ? '40px' : '52px',
            marginTop: '16px',
            marginBottom: '12px',
            color: '#1A1A1A',
            lineHeight: 1.2,
            textAlign: 'center'
          }}>
            The Parenting Shift Blueprint
          </h1>

          <p style={{
            fontSize: isMobile ? '16px' : '20px',
            color: '#D97706',
            fontWeight: 700,
            marginBottom: '24px'
          }}>
            By Sukeeshi
          </p>

          {/* Stats */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: isMobile ? '16px' : '40px',
            flexWrap: 'wrap',
            marginBottom: '28px'
          }}>
            {[
              { icon: <Clock size={18} />, text: '3-Day Program' },
              { icon: <Users size={18} />, text: 'For Parents & Families' },
              { icon: <Gift size={18} />, text: '6 Bonuses Included' },
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

          {/* Offer Badge */}
          <div style={{
            background: 'linear-gradient(135deg, rgba(250,168,25,0.15), rgba(232,132,26,0.1))',
            border: '2px solid #FAA819',
            borderRadius: '16px',
            padding: isMobile ? '16px 20px' : '20px 40px',
            maxWidth: '600px',
            margin: '0 auto 28px',
            display: 'inline-block'
          }}>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#E8841A',
              fontWeight: 700,
              margin: '0 0 12px'
            }}>
              🌟 Unbelievable Offer
            </p>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '16px',
              flexWrap: 'wrap'
            }}>
              <span style={{
                fontSize: isMobile ? '18px' : '22px',
                color: '#999',
                textDecoration: 'line-through',
                fontWeight: 600
              }}>
                ₹29,999
              </span>
              <span style={{
                fontSize: isMobile ? '42px' : '56px',
                fontWeight: 800,
                color: '#1A1A1A',
                fontFamily: 'Poppins, sans-serif'
              }}>
                ₹5,000
              </span>
            </div>
            <p style={{
              fontSize: '13px',
              color: '#888',
              margin: '8px 0 0'
            }}>
              Valued at ₹30,000 — Save ₹25,000!
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', alignItems: 'center' }}>
            <a href={TAGMANGO_LINK} target="_blank" rel="noreferrer" style={ctaButton}>
              Enroll Now — ₹5,000
            </a>
            <p style={{ fontSize: '13px', color: '#999' }}>
              🔒 Secure payment via TagMango
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ ...glassCard, maxWidth: '800px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '28px',
              color: '#1A1A1A',
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              About This Program
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '16px',
              textAlign: 'left'
            }}>
              The Parenting Shift Model is a <strong>3-day transformative program</strong> for parents and families, expertly designed to simplify your parenting journey.
            </p>
            <p style={{
              fontSize: isMobile ? '15px' : '17px',
              color: '#D97706',
              fontWeight: 700,
              fontStyle: 'italic',
              textAlign: 'left'
            }}>
              This is not about fixing your child. It's about shifting yourself first.
            </p>
          </div>
        </div>
      </section>

      {/* 6 BONUSES */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '40px' }}>
            <span className="badge">6 Bonuses</span>
            <h2 style={{
              fontSize: isMobile ? '24px' : '36px',
              marginTop: '16px',
              color: '#1A1A1A',
              textAlign: 'center'
            }}>
              What's Inside
            </h2>
          </div>

          <div className="bonus-grid" style={{ maxWidth: '1000px', margin: '0 auto' }}>
            {bonuses.map((item, i) => (
              <div key={i} style={{
                ...glassCard,
                padding: isMobile ? '20px' : '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
                borderLeft: '3px solid #FAA819'
              }}>
                <div style={{ fontSize: '32px' }}>{item.emoji}</div>
                <h3 style={{
                  fontSize: isMobile ? '15px' : '17px',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  margin: 0,
                  textAlign: 'left'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  fontSize: isMobile ? '13px' : '14px',
                  color: '#666',
                  margin: 0,
                  lineHeight: 1.5,
                  textAlign: 'left'
                }}>
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXTRA INCLUSIONS */}
      <section style={{ padding: isMobile ? '40px 0' : '60px 0', background: 'transparent' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '28px' : '40px' }}>
            <span className="badge">🎁 More Added</span>
            <h2 style={{
              fontSize: isMobile ? '24px' : '36px',
              marginTop: '16px',
              color: '#1A1A1A',
              textAlign: 'center'
            }}>
              Plus Even More!
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: '16px',
            maxWidth: '1000px',
            margin: '0 auto'
          }}>
            {extras.map((item, i) => (
              <div key={i} style={{
                ...glassCard,
                padding: isMobile ? '16px 20px' : '20px 24px',
                display: 'flex',
                gap: '14px',
                alignItems: 'flex-start'
              }}>
                <span style={{ fontSize: '24px', flexShrink: 0 }}>{item.emoji}</span>
                <div>
                  <h4 style={{
                    fontSize: isMobile ? '14px' : '15px',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    margin: '0 0 4px',
                    textAlign: 'left'
                  }}>
                    {item.title}
                  </h4>
                  <p style={{
                    fontSize: isMobile ? '12px' : '13px',
                    color: '#666',
                    margin: 0,
                    textAlign: 'left',
                    lineHeight: 1.4
                  }}>
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
            Don't Miss This Chance!
          </h2>
          <p style={{
            fontSize: isMobile ? '15px' : '18px',
            color: '#555',
            lineHeight: 1.8,
            marginBottom: '32px',
            maxWidth: '600px',
            margin: '0 auto 32px'
          }}>
            Transform your family life with this once-in-a-lifetime offer.<br />
            <strong style={{ color: '#D97706' }}>Valued at ₹30,000 — yours for just ₹5,000!</strong>
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '16px',
            marginBottom: '24px',
            flexWrap: 'wrap'
          }}>
            <span style={{
              fontSize: isMobile ? '20px' : '24px',
              color: '#999',
              textDecoration: 'line-through',
              fontWeight: 600
            }}>
              ₹29,999
            </span>
            <span style={{
              fontSize: isMobile ? '40px' : '52px',
              fontWeight: 800,
              color: '#1A1A1A',
              fontFamily: 'Poppins, sans-serif'
            }}>
              ₹5,000
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
            }}
          >
            Enroll Now — ₹5,000
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