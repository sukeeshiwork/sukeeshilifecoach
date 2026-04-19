import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, NavLink } from 'react-router-dom';
import { CheckCircle2 } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const OneOnOne = () => {
  const { isMobile, isTablet } = useWindowSize();
  const navigate = useNavigate();

  const plans = [
    {
      name: "1 Month Coaching",
      sessions: "4 sessions (weekly)",
      duration: "40 min each",
      price: "₹5,656",
      cta: "Get Started",
      popular: false
    },
    {
      name: "3 Month Coaching",
      sessions: "12 sessions (weekly)",
      duration: "40 min each",
      price: "₹15,999",
      cta: "Get Started",
      popular: true
    },
    {
      name: "6 Month Coaching",
      sessions: "24 sessions (weekly)",
      duration: "40 min each",
      price: "₹30,000",
      cta: "Get Started",
      popular: false
    }
  ];

  const handleGetStarted = (plan) => {
    navigate('/one-on-one/form', {
      state: {
        plan: plan.name,
        price: plan.price.replace('₹', '').replace(',', ''),
        sessions: plan.sessions
      }
    });
  };

  return (
    <div className="one-on-one-page">

      {/* HERO */}
      <section style={{
        paddingTop: isMobile ? '90px' : '120px',
        paddingBottom: isMobile ? '32px' : '60px',
        background: 'transparent'
      }}>
        <div className="container" style={{
          marginTop: isMobile ? '80px' : '0'
        }}>
          <div style={{
            textAlign: 'center',
            maxWidth: '800px',
            margin: '0 auto',
            marginBottom: isMobile ? '32px' : '60px'
          }}>
            <span className="badge">1-on-1 Coaching</span>
            <h1 style={{
              fontSize: isMobile ? '26px' : isTablet ? '40px' : '52px',
              marginTop: '16px',
              marginBottom: '16px',
              color: '#1A1A1A',
              lineHeight: 1.2,
              textAlign: 'center'
            }}>
              1-on-1 Personalized Coaching
            </h1>
            <p style={{
              fontSize: isMobile ? '14px' : '18px',
              color: '#555555',
              lineHeight: 1.7,
              textAlign: 'center'
            }}>
              A deeply personal journey tailored to your emotional patterns, relationships, and inner healing.
            </p>

            {/* Feature points */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
              gap: isMobile ? '12px' : '16px',
              textAlign: 'left',
              marginTop: '32px'
            }}>
              {[
                "Personalized healing plan for your unique situation",
                "Safe, non-judgmental space to be fully heard",
                "Real tools and techniques that create lasting change",
                "Consistent support throughout your journey"
              ].map((point, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  gap: '12px',
                  alignItems: 'flex-start',
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(250,168,25,0.2)',
                  borderRadius: '12px',
                  padding: isMobile ? '12px 16px' : '16px 20px'
                }}>
                  <CheckCircle2 color="#E8841A" size={20} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <p style={{
                    fontSize: isMobile ? '13px' : '15px',
                    color: '#444',
                    fontWeight: 500,
                    margin: 0,
                    lineHeight: 1.4
                  }}>
                    {point}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* PRICING CARDS */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? '1fr' : 'repeat(3, 1fr)',
            gap: isMobile ? '16px' : '24px',
            maxWidth: isMobile ? '400px' : '100%',
            margin: '0 auto',
            alignItems: 'center'
          }}>
            {plans.map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: isMobile ? 0 : idx * 0.1 }}
                viewport={{ once: true }}
                style={{
                  transform: plan.popular && !isMobile ? 'scale(1.05)' : 'scale(1)',
                  zIndex: plan.popular ? 2 : 1,
                  position: 'relative'
                }}
              >
                <div
                  className="glass-card"
                  style={{
                    padding: isMobile ? '28px 24px' : '40px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    textAlign: 'center',
                    position: 'relative',
                    border: plan.popular
                      ? '2px solid rgba(232, 132, 26, 0.6)'
                      : '1px solid rgba(250, 168, 25, 0.2)',
                    boxShadow: plan.popular
                      ? '0 20px 50px rgba(232, 132, 26, 0.15)'
                      : '0 4px 24px rgba(0,0,0,0.04)',
                    background: plan.popular
                      ? 'rgba(255, 255, 255, 0.75)'
                      : 'rgba(255, 255, 255, 0.55)',
                    borderRadius: '20px'
                  }}
                >
                  {/* Popular badge */}
                  {plan.popular && (
                    <div style={{
                      position: 'absolute',
                      top: '-16px',
                      left: '50%',
                      transform: 'translateX(-50%)',
                      background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                      color: '#1A0D00',
                      padding: '6px 20px',
                      borderRadius: '50px',
                      fontSize: '11px',
                      fontWeight: 700,
                      letterSpacing: '1px',
                      whiteSpace: 'nowrap'
                    }}>
                      MOST POPULAR
                    </div>
                  )}

                  <h3 style={{
                    fontSize: isMobile ? '20px' : '22px',
                    marginBottom: '12px',
                    marginTop: plan.popular ? '12px' : '0',
                    color: '#1A1A1A'
                  }}>
                    {plan.name}
                  </h3>

                  <div style={{ marginBottom: '24px' }}>
                    <p style={{
                      fontSize: isMobile ? '15px' : '16px',
                      fontWeight: 600,
                      color: '#E8841A',
                      marginBottom: '4px'
                    }}>
                      {plan.sessions}
                    </p>
                    <p style={{
                      fontSize: '13px',
                      color: '#888'
                    }}>
                      {plan.duration}
                    </p>
                  </div>

                  <div style={{
                    fontSize: isMobile ? '36px' : '42px',
                    fontWeight: 800,
                    color: '#1A1A1A',
                    marginBottom: '28px',
                    fontFamily: 'Inter, sans-serif'
                  }}>
                    {plan.price}
                  </div>

                  <button
                    onClick={() => handleGetStarted(plan)}
                    className={plan.popular ? 'btn-primary' : 'btn-secondary'}
                    style={{
                      width: '100%',
                      padding: isMobile ? '14px' : '16px',
                      fontSize: isMobile ? '15px' : '16px',
                      border: plan.popular ? 'none' : '1.5px solid #E8841A'
                    }}
                  >
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div style={{
            textAlign: 'center',
            marginTop: isMobile ? '48px' : '80px',
            padding: isMobile ? '32px 20px' : '48px 60px',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,168,25,0.2)',
            borderRadius: '24px'
          }}>
            <h2 style={{
              fontSize: isMobile ? '22px' : '30px',
              marginBottom: '12px',
              color: '#1A1A1A',
              textAlign: 'center'
            }}>
              Not sure which plan?
            </h2>
            <p style={{
              fontSize: isMobile ? '14px' : '17px',
              color: '#555',
              marginBottom: '24px',
              lineHeight: 1.6
            }}>
              Start with a Clarity Call to understand your needs better.
            </p>
            <NavLink to="/clarity-call">
              <button
                className="btn-secondary"
                style={{
                  padding: isMobile ? '12px 32px' : '14px 40px',
                  fontSize: isMobile ? '14px' : '16px',
                  width: isMobile ? '100%' : 'auto'
                }}
              >
                Book a Clarity Call — ₹565
              </button>
            </NavLink>
          </div>

        </div>
      </section>
    </div>
  );
};

export default OneOnOne;
