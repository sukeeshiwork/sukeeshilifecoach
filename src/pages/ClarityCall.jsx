import React from 'react';
import useWindowSize from '../hooks/useWindowSize';

const ClarityCall = () => {
  const { isMobile, isTablet } = useWindowSize();
  const CALENDLY_URL = "https://calendly.com/sukeeshi-work/claritycall";

  const styles = `
    @keyframes pulse-btn {
      0% { box-shadow: 0 8px 30px rgba(232,132,26,0.4); transform: scale(1); }
      50% { box-shadow: 0 12px 40px rgba(232,132,26,0.6); transform: scale(1.03); }
      100% { box-shadow: 0 8px 30px rgba(232,132,26,0.4); transform: scale(1); }
    }

    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .clarity-section {
      animation: fadeInUp 0.7s ease forwards;
    }
  `;

  const talkAboutCards = [
    {
      num: "01",
      title: "What's happening",
      text: "You tell me what's been going on and what's hurting."
    },
    {
      num: "02",
      title: "What's underneath it",
      text: "I'll help you look at the patterns and behaviours that may be keeping you stuck."
    },
    {
      num: "03",
      title: "What can change",
      text: "You'll leave with a clearer understanding of what needs to shift and what your next step could be."
    }
  ];

  const forYouPoints = [
    "You love your partner but feel disconnected.",
    "You're tired of repeating the same arguments.",
    "You struggle with trust, boundaries or communication.",
    "You keep overthinking your relationship.",
    "You feel like you're repeating the same emotional patterns.",
    "You simply know something doesn't feel right anymore."
  ];

  return (
    <div className="about-page">
      <style>{styles}</style>

      {/* HERO SECTION */}
      <section style={{
        paddingTop: isMobile ? '80px' : '140px',
        paddingBottom: isMobile ? '40px' : '80px',
        background: 'transparent'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '800px',
            margin: '0 auto',
            textAlign: 'center'
          }}>

            {/* TOP BADGE */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(250,168,25,0.1)',
              border: '1px solid rgba(250,168,25,0.3)',
              borderRadius: '50px',
              padding: '8px 20px',
              marginBottom: '32px',
              fontSize: '13px',
              color: '#E8841A',
              fontWeight: 600
            }}>
              ✨ Complimentary • No Cost • Limited Slots
            </div>

            {/* MAIN HEADLINE — split styled */}
            <h1 style={{
              fontSize: isMobile ? '36px' : '64px',
              fontWeight: 800,
              color: '#1A1A1A',
              lineHeight: 1.1,
              marginBottom: '32px',
              textAlign: 'center'
            }}>
              You know something<br />
              <span style={{
                background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                isn't working.
              </span>
            </h1>

            {/* STORY CARD */}
            <div style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              border: '1px solid rgba(250,168,25,0.2)',
              borderRadius: '24px',
              padding: isMobile ? '28px 24px' : '48px',
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              <p style={{
                fontSize: isMobile ? '15px' : '18px',
                color: '#444',
                lineHeight: 2,
                marginBottom: '24px'
              }}>
                You just don't know what to do about it.<br />
                Maybe you're having the same fight over and over.<br />
                Maybe you feel disconnected from your partner,
                struggle with trust or boundaries, or keep
                repeating patterns you don't understand.
              </p>

              <p style={{
                fontSize: isMobile ? '15px' : '18px',
                color: '#444',
                lineHeight: 1.8,
                marginBottom: '24px'
              }}>
                And somewhere inside, you're wondering:
              </p>

              {/* QUOTE HIGHLIGHT */}
              <div style={{
                background: 'linear-gradient(135deg, rgba(250,168,25,0.1), rgba(232,132,26,0.05))',
                border: '1px solid rgba(250,168,25,0.25)',
                borderLeft: '4px solid #FAA819',
                borderRadius: '12px',
                padding: isMobile ? '16px 20px' : '20px 28px',
                marginBottom: '24px'
              }}>
                <p style={{
                  fontSize: isMobile ? '18px' : '22px',
                  fontWeight: 700,
                  color: '#1A1A1A',
                  fontStyle: 'italic',
                  margin: 0,
                  lineHeight: 1.4
                }}>
                  "Why does this keep happening to me?"
                </p>
              </div>

              <p style={{
                fontSize: isMobile ? '15px' : '17px',
                color: '#555',
                lineHeight: 1.8,
                margin: 0
              }}>
                You don't need another generic relationship tip.<br />
                <strong style={{ color: '#1A1A1A' }}>
                  You need clarity on what's actually
                  happening beneath the surface.
                </strong>
              </p>
            </div>

            {/* HIGHLIGHTED STATEMENT */}
            <div style={{
              background: 'linear-gradient(135deg, #FAA819, #E8841A)',
              borderRadius: '20px',
              padding: isMobile ? '20px 24px' : '28px 48px',
              marginBottom: '40px'
            }}>
              <p style={{
                fontSize: isMobile ? '16px' : '20px',
                fontWeight: 700,
                color: '#1A0D00',
                margin: 0,
                lineHeight: 1.5
              }}>
                That's why I created my Complimentary<br />
                1:1 Relationship Clarity Call.
              </p>
            </div>

            {/* CTA BUTTON */}
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                color: '#1A0D00',
                fontWeight: 700,
                fontSize: isMobile ? '16px' : '18px',
                padding: isMobile ? '16px 32px' : '20px 56px',
                borderRadius: '50px',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(232,132,26,0.4)',
                animation: 'pulse-btn 2s ease-in-out infinite',
                width: isMobile ? '100%' : 'auto',
                marginBottom: '20px'
              }}
            >
              BOOK MY FREE CLARITY CALL →
            </a>

            {/* TRUST STRIP */}
            <div style={{
              display: 'flex',
              gap: isMobile ? '12px' : '24px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: '16px'
            }}>
              {[
                '🔒 No judgement',
                '💬 Safe space',
                '⏱ 45-60 minutes',
                '📹 Zoom / Meet'
              ].map((item, i) => (
                <span key={i} style={{
                  fontSize: '13px',
                  color: '#666',
                  fontWeight: 500
                }}>
                  {item}
                </span>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* REST OF SECTIONS */}
      <section style={{
        paddingBottom: isMobile ? '40px' : '80px',
        background: 'transparent'
      }}>
        <div className="container">

          {/* SECTION 2 — WHAT WE'ALL TALK ABOUT */}
          <div className="clarity-section" style={{
            maxWidth: '1000px',
            margin: '0 auto 80px',
            textAlign: 'center'
          }}>
            <span className="badge">What we'll talk about</span>

            <p style={{
              fontSize: isMobile ? '16px' : '18px',
              color: '#555555',
              maxWidth: '650px',
              margin: '0 auto 40px',
              lineHeight: 1.7,
              textAlign: 'center'
            }}>
              This isn't a judgemental conversation. And I'm not here to take sides.
            </p>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: isMobile ? '16px' : '24px',
              textAlign: 'left'
            }}>
              {talkAboutCards.map((card, index) => (
                <div key={index} className="glass-card" style={{
                  padding: isMobile ? '24px' : '32px',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}>
                  <div style={{
                    fontSize: '28px',
                    fontWeight: 800,
                    color: '#E8841A',
                    marginBottom: '12px'
                  }}>
                    {card.num}
                  </div>
                  <h3 style={{
                    fontSize: isMobile ? '18px' : '20px',
                    fontWeight: 700,
                    color: '#1A1A1A',
                    marginBottom: '12px'
                  }}>
                    {card.title}
                  </h3>
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    color: '#555555',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {card.text}
                  </p>
                </div>
              ))}
            </div>
          </div>


          {/* SECTION 3 — THIS CALL IS FOR YOU IF */}
          <div className="clarity-section" style={{
            maxWidth: '1000px',
            margin: '0 auto 80px',
            textAlign: 'center'
          }}>
            <span className="badge">This call is for you if...</span>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '16px' : '20px',
              marginTop: '32px',
              textAlign: 'left'
            }}>
              {forYouPoints.map((point, index) => (
                <div key={index} className="glass-card" style={{
                  padding: isMobile ? '20px' : '24px',
                  borderLeft: '4px solid #E8841A',
                  display: 'flex',
                  alignItems: 'center'
                }}>
                  <p style={{
                    fontSize: isMobile ? '15px' : '16px',
                    color: '#1A1A1A',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.5
                  }}>
                    • {point}
                  </p>
                </div>
              ))}
            </div>
          </div>


          {/* SECTION 4 — FINAL CTA */}
          <div className="clarity-section" style={{
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div className="glass-card" style={{
              padding: isMobile ? '32px 20px' : '48px 40px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
              <h2 style={{
                fontSize: isMobile ? '22px' : '32px',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '16px',
                lineHeight: 1.3,
                textAlign: 'center'
              }}>
                You don't have to figure it all out alone.
              </h2>

              <p style={{
                fontSize: isMobile ? '15px' : '17px',
                color: '#555555',
                lineHeight: 1.7,
                marginBottom: '28px',
                maxWidth: '650px',
                textAlign: 'center'
              }}>
                I believe healthier relationships begin when we become willing to understand our patterns, our emotions, and the way we show up in relationships.<br />
                If you're ready to understand yours, I'd love to talk to you.
              </p>

              <div>
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                    color: '#1A0D00',
                    fontWeight: 700,
                    fontSize: isMobile ? '16px' : '18px',
                    padding: isMobile ? '16px 32px' : '20px 56px',
                    borderRadius: '50px',
                    textDecoration: 'none',
                    boxShadow: '0 8px 30px rgba(232,132,26,0.4)',
                    animation: 'pulse-btn 2s ease-in-out infinite',
                    width: isMobile ? '100%' : 'auto',
                    textAlign: 'center'
                  }}
                >
                  YES, I WANT MY FREE CALL →
                </a>
              </div>

              <p style={{
                fontSize: '13px',
                color: '#888888',
                marginTop: '16px',
                fontWeight: 500,
                textAlign: 'center',
                marginBottom: 0
              }}>
                No judgement. No taking sides. Just an honest conversation about what's really going on.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* STICKY CTA BAR (mobile only) */}
      {isMobile && (
        <div style={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          padding: '12px 20px',
          background: 'linear-gradient(135deg, #FAA819, #E8841A)',
          zIndex: 999,
          boxShadow: '0 -4px 20px rgba(232,132,26,0.3)'
        }}>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'block',
              textAlign: 'center',
              color: '#1A0D00',
              fontWeight: 700,
              fontSize: '16px',
              textDecoration: 'none'
            }}
          >
            BOOK MY FREE CLARITY CALL →
          </a>
        </div>
      )}
    </div>
  );
};

export default ClarityCall;