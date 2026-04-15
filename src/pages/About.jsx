import React from 'react';
import { motion } from 'framer-motion';
import content from '../data/content.json';
import useWindowSize from '../hooks/useWindowSize';

const About = () => {
  const { isMobile, isTablet } = useWindowSize();
  const { about } = content;

  if (!about) return null;

  return (
    <div className="about-page">
      <section style={{
        paddingTop: isMobile ? '80px' : '140px',
        paddingBottom: isMobile ? '40px' : '80px',
        background: 'transparent'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : 'minmax(0, 1fr) minmax(0, 450px)',
            gap: isTablet ? '32px' : '60px',
            alignItems: 'start'
          }}>

            {/* LEFT — Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="badge">{about.badge}</span>
              <h1 style={{
                fontSize: isMobile ? '26px' : isTablet ? '34px' : '44px',
                marginBottom: '20px',
                marginTop: '12px',
                color: '#1A1A1A',
                lineHeight: 1.2,
                textAlign: 'left'
              }}>
                {about.headline}
              </h1>

              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#555555',
                lineHeight: 1.8,
                marginBottom: '24px',
                textAlign: 'left'
              }}>
                {about.intro}
              </p>

              <h3 style={{
                color: '#1A1A1A',
                fontSize: isMobile ? '18px' : '22px',
                marginBottom: '12px',
                textAlign: 'left'
              }}>
                {about.approach.title}
              </h3>

              <ul style={{ marginBottom: '24px', listStyle: 'none', padding: 0 }}>
                {about.approach.points.map((p, i) => (
                  <li key={i} style={{
                    marginBottom: '10px',
                    display: 'flex',
                    gap: '10px',
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#555555',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{ color: '#D97706', flexShrink: 0 }}>•</span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Belief Box */}
              <div style={{
                background: '#FFFBF2',
                padding: isMobile ? '16px' : '24px',
                borderRadius: '16px',
                borderLeft: '4px solid #D97706',
                marginBottom: '24px'
              }}>
                <h4 style={{
                  fontSize: isMobile ? '16px' : '18px',
                  marginBottom: '8px',
                  color: '#1A1A1A',
                  textAlign: 'left'
                }}>
                  {about.belief.title}
                </h4>
                <p style={{
                  fontStyle: 'italic',
                  fontSize: isMobile ? '13px' : '15px',
                  color: '#666',
                  textAlign: 'left'
                }}>
                  {about.belief.content}
                </p>
              </div>

              {/* Mission */}
              <h3 style={{
                color: '#1A1A1A',
                fontSize: isMobile ? '18px' : '22px',
                marginBottom: '12px',
                textAlign: 'left'
              }}>
                {about.mission.title}
              </h3>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#555',
                marginBottom: '12px',
                textAlign: 'left'
              }}>
                {about.mission.intro}
              </p>
              <ul style={{ marginBottom: '24px', listStyle: 'none', padding: 0 }}>
                {about.mission.points.map((p, i) => (
                  <li key={i} style={{
                    marginBottom: '10px',
                    display: 'flex',
                    gap: '10px',
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#555555',
                    alignItems: 'flex-start'
                  }}>
                    <span style={{ color: '#D97706', flexShrink: 0 }}>•</span>
                    {p}
                  </li>
                ))}
              </ul>

              {/* Truth */}
              <div style={{ marginBottom: '24px' }}>
                <h4 style={{
                  fontSize: isMobile ? '16px' : '18px',
                  marginBottom: '8px',
                  color: '#1A1A1A',
                  textAlign: 'left'
                }}>
                  {about.truth.title}
                </h4>
                <p style={{
                  fontSize: isMobile ? '14px' : '16px',
                  color: '#555',
                  textAlign: 'left'
                }}>
                  {about.truth.content}
                </p>
              </div>

              {/* Vision */}
              <div style={{ borderTop: '1px solid #F0D080', paddingTop: '20px' }}>
                <span style={{
                  fontWeight: 700,
                  color: '#D97706',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  fontSize: '13px'
                }}>
                  {about.vision.title}
                </span>
                <p style={{
                  fontSize: isMobile ? '16px' : '18px',
                  fontWeight: 500,
                  color: '#1A1A1A',
                  marginTop: '8px',
                  textAlign: 'left'
                }}>
                  {about.vision.content}
                </p>
              </div>
            </motion.div>

            {/* RIGHT — Photo */}
            <div style={{
              position: isTablet ? 'relative' : 'sticky',
              top: isTablet ? 'auto' : '100px',
              order: isTablet ? -1 : 0,
              marginTop: isMobile ? '80px' : '0'
            }}>
              <div style={{
                width: '100%',
                height: isMobile ? '400px' : isTablet ? '380px' : '520px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid rgba(245, 232, 192, 0.4)',
                background: 'rgba(255, 248, 224, 0.3)',
                backdropFilter: 'blur(10px)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Coach Sukeshi"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top'
                  }}
                />
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default About;