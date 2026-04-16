// import React from 'react';
// import { motion } from 'framer-motion';
// import content from '../data/content.json';
// import useWindowSize from '../hooks/useWindowSize';

// const About = () => {
//   const { isMobile, isTablet } = useWindowSize();
//   const { about } = content;

//   if (!about) return null;

//   return (
//     <div className="about-page">
//       <section style={{
//         paddingTop: isMobile ? '80px' : '140px',
//         paddingBottom: isMobile ? '40px' : '80px',
//         background: 'transparent'
//       }}>
//         <div className="container">
//           <div style={{
//             display: 'grid',
//             gridTemplateColumns: isTablet ? '1fr' : 'minmax(0, 1fr) minmax(0, 450px)',
//             gap: isTablet ? '32px' : '60px',
//             alignItems: 'start'
//           }}>

//             {/* LEFT — Content */}
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.6 }}
//             >
//               <span className="badge">{about.badge}</span>
//               <h1 style={{
//                 fontSize: isMobile ? '26px' : isTablet ? '34px' : '44px',
//                 marginBottom: '20px',
//                 marginTop: '12px',
//                 color: '#1A1A1A',
//                 lineHeight: 1.2,
//                 textAlign: 'left'
//               }}>
//                 {about.headline}
//               </h1>

//               <p style={{
//                 fontSize: isMobile ? '14px' : '16px',
//                 color: '#555555',
//                 lineHeight: 1.8,
//                 marginBottom: '24px',
//                 textAlign: 'left'
//               }}>
//                 {about.intro}
//               </p>

//               <h3 style={{
//                 color: '#1A1A1A',
//                 fontSize: isMobile ? '18px' : '22px',
//                 marginBottom: '12px',
//                 textAlign: 'left'
//               }}>
//                 {about.approach.title}
//               </h3>

//               <ul style={{ marginBottom: '24px', listStyle: 'none', padding: 0 }}>
//                 {about.approach.points.map((p, i) => (
//                   <li key={i} style={{
//                     marginBottom: '10px',
//                     display: 'flex',
//                     gap: '10px',
//                     fontSize: isMobile ? '14px' : '16px',
//                     color: '#555555',
//                     alignItems: 'flex-start'
//                   }}>
//                     <span style={{ color: '#D97706', flexShrink: 0 }}>•</span>
//                     {p}
//                   </li>
//                 ))}
//               </ul>

//               {/* Belief Box */}
//               <div style={{
//                 background: '#FFFBF2',
//                 padding: isMobile ? '16px' : '24px',
//                 borderRadius: '16px',
//                 borderLeft: '4px solid #D97706',
//                 marginBottom: '24px'
//               }}>
//                 <h4 style={{
//                   fontSize: isMobile ? '16px' : '18px',
//                   marginBottom: '8px',
//                   color: '#1A1A1A',
//                   textAlign: 'left'
//                 }}>
//                   {about.belief.title}
//                 </h4>
//                 <p style={{
//                   fontStyle: 'italic',
//                   fontSize: isMobile ? '13px' : '15px',
//                   color: '#666',
//                   textAlign: 'left'
//                 }}>
//                   {about.belief.content}
//                 </p>
//               </div>

//               {/* Mission */}
//               <h3 style={{
//                 color: '#1A1A1A',
//                 fontSize: isMobile ? '18px' : '22px',
//                 marginBottom: '12px',
//                 textAlign: 'left'
//               }}>
//                 {about.mission.title}
//               </h3>
//               <p style={{
//                 fontSize: isMobile ? '14px' : '16px',
//                 color: '#555',
//                 marginBottom: '12px',
//                 textAlign: 'left'
//               }}>
//                 {about.mission.intro}
//               </p>
//               <ul style={{ marginBottom: '24px', listStyle: 'none', padding: 0 }}>
//                 {about.mission.points.map((p, i) => (
//                   <li key={i} style={{
//                     marginBottom: '10px',
//                     display: 'flex',
//                     gap: '10px',
//                     fontSize: isMobile ? '14px' : '16px',
//                     color: '#555555',
//                     alignItems: 'flex-start'
//                   }}>
//                     <span style={{ color: '#D97706', flexShrink: 0 }}>•</span>
//                     {p}
//                   </li>
//                 ))}
//               </ul>

//               {/* Truth */}
//               <div style={{ marginBottom: '24px' }}>
//                 <h4 style={{
//                   fontSize: isMobile ? '16px' : '18px',
//                   marginBottom: '8px',
//                   color: '#1A1A1A',
//                   textAlign: 'left'
//                 }}>
//                   {about.truth.title}
//                 </h4>
//                 <p style={{
//                   fontSize: isMobile ? '14px' : '16px',
//                   color: '#555',
//                   textAlign: 'left'
//                 }}>
//                   {about.truth.content}
//                 </p>
//               </div>

//               {/* Vision */}
//               <div style={{ borderTop: '1px solid #F0D080', paddingTop: '20px' }}>
//                 <span style={{
//                   fontWeight: 700,
//                   color: '#D97706',
//                   letterSpacing: '1px',
//                   textTransform: 'uppercase',
//                   fontSize: '13px'
//                 }}>
//                   {about.vision.title}
//                 </span>
//                 <p style={{
//                   fontSize: isMobile ? '16px' : '18px',
//                   fontWeight: 500,
//                   color: '#1A1A1A',
//                   marginTop: '8px',
//                   textAlign: 'left'
//                 }}>
//                   {about.vision.content}
//                 </p>
//               </div>
//             </motion.div>

//             {/* RIGHT — Photo */}
//             <div style={{
//               position: isTablet ? 'relative' : 'sticky',
//               top: isTablet ? 'auto' : '100px',
//               order: isTablet ? -1 : 0,
//               marginTop: isMobile ? '80px' : '0'
//             }}>
//               <div style={{
//                 width: '100%',
//                 height: isMobile ? '400px' : isTablet ? '380px' : '520px',
//                 borderRadius: '24px',
//                 overflow: 'hidden',
//                 border: '1.5px solid rgba(245, 232, 192, 0.4)',
//                 background: 'rgba(255, 248, 224, 0.3)',
//                 backdropFilter: 'blur(10px)',
//               }}>
//                 <img
//                   src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
//                   alt="Coach Sukeshi"
//                   style={{
//                     width: '100%',
//                     height: '100%',
//                     objectFit: 'cover',
//                     objectPosition: 'top'
//                   }}
//                 />
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;



import React from 'react';
import { NavLink } from 'react-router-dom';
import useWindowSize from '../hooks/useWindowSize';

const About = () => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <div className="about-page">
      <section style={{
        paddingTop: isMobile ? '80px' : '140px',
        marginTop: isMobile ? '80px' : '0',
        paddingBottom: isMobile ? '40px' : '80px',
        background: 'transparent'
      }}>
        <div className="container">

          {/* PHOTO + HEADLINE GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isTablet ? '1fr' : 'minmax(0, 1fr) minmax(0, 420px)',
            gap: isTablet ? '32px' : '60px',
            alignItems: 'start',
          textAlign: 'center',
            marginBottom: isMobile ? '40px' : '80px'
          }}>

            {/* LEFT — Section 1 + 2 */}
            <div>
              <span className="badge">About Me</span>

              {/* SECTION 1 — Power Headline */}
              <h1 style={{
                fontSize: isMobile ? '26px' : isTablet ? '34px' : '44px',
                marginBottom: '16px',
                marginTop: '16px',
                color: '#1A1A1A',
                lineHeight: 1.3,
                textAlign: 'left',
                fontStyle: 'italic'
              }}>
                The relationship you have with yourself shapes every relationship in your life.
              </h1>

              <p style={{
                fontSize: isMobile ? '15px' : '18px',
                color: '#D97706',
                fontWeight: 600,
                marginBottom: '32px',
                textAlign: 'left'
              }}>
                When you shift from within, everything outside begins to shift.
              </p>

              {/* SECTION 2 — Quick Connection */}
              <div style={{
                background: 'rgba(255,255,255,0.5)',
                backdropFilter: 'blur(16px)',
                border: '1px solid rgba(250,168,25,0.2)',
                borderLeft: '4px solid #FAA819',
                borderRadius: '16px',
                padding: isMobile ? '20px' : '28px',
                marginBottom: '32px'
              }}>
                <p style={{
                  fontSize: isMobile ? '14px' : '16px',
                  color: '#444',
                  lineHeight: 2,
                  margin: 0,
                  textAlign: 'left'
                }}>
                  If you're feeling stuck in patterns…<br />
                  struggling in relationships…<br />
                  or questioning yourself as a parent…<br /><br />
                  <strong style={{ color: '#1A1A1A' }}>It's not because something is wrong with you.</strong><br />
                  It's because something within you is asking to be understood.
                </p>
              </div>
            </div>

            {/* RIGHT — Photo */}
            <div style={{
              position: isTablet ? 'relative' : 'sticky',
              top: isTablet ? 'auto' : '100px',
              order: isTablet ? -1 : 0,
              marginTop: isMobile ? '10px' : '0'
            }}>
              <div style={{
                width: '100%',
                height: isMobile ? '450px' : isTablet ? '380px' : '520px',
                borderRadius: '24px',
                overflow: 'hidden',
                border: '1.5px solid rgba(245,232,192,0.4)',
                background: 'rgba(255,248,224,0.3)',
                backdropFilter: 'blur(10px)',
              }}>
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                  alt="Coach Sukeshi"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }}
                />
              </div>
            </div>
          </div>

          {/* SECTION 3 — My Story */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            marginBottom: isMobile ? '40px' : '64px'
          }}>

            {/* WHITE GLASS BOX — all content inside */}
            <div style={{
              background: 'rgba(255,255,255,0.55)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(250,168,25,0.2)',
              borderRadius: '20px',
              padding: isMobile ? '24px' : '40px',
            }}>

              <div style={{ textAlign: 'center' }}>
                <span className="badge">My Story</span>
              </div>


              <h2 style={{
                fontSize: isMobile ? '24px' : '36px',
                color: '#1A1A1A',
                marginTop: '16px',
                marginBottom: '24px',
              }}>
                I was once where you might be right now…
              </h2>

              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '16px'
              }}>
                Doing everything "right"… yet feeling something wasn't right within.
              </p>

              <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#555', marginBottom: '6px' }}>I tried changing situations.</p>
              <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#555', marginBottom: '6px' }}>I tried fixing people.</p>
              <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#555', marginBottom: '24px' }}>I tried controlling outcomes.</p>

              <p style={{
                fontSize: isMobile ? '15px' : '17px',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '24px',
                borderLeft: '3px solid #FAA819',
                paddingLeft: '16px'
              }}>
                But nothing truly changed.<br />
                Until I turned inward.
              </p>

              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#555',
                lineHeight: 1.9,
                marginBottom: '24px'
              }}>
                That's where everything shifted.<br /><br />
                Through deep inner work and NLP, I began to understand my patterns, my triggers, and the beliefs shaping my reality.
              </p>

              {/* Divider */}
              <div style={{
                borderTop: '1px solid rgba(250,168,25,0.2)',
                paddingTop: '24px'
              }}>
                <p style={{
                  fontSize: isMobile ? '14px' : '16px',
                  color: '#444',
                  lineHeight: 2.2,
                  margin: 0
                }}>
                  And slowly…<br />
                  I stopped reacting. <strong style={{ color: '#D97706' }}>I started responding.</strong><br />
                  I stopped seeking outside. <strong style={{ color: '#D97706' }}>I started feeling grounded within.</strong><br /><br />
                  And my relationships transformed—<br />
                  not because others changed,<br />
                  <strong style={{ color: '#1A1A1A', fontSize: isMobile ? '15px' : '17px' }}>but because I did.</strong>
                </p>
              </div>

            </div>
          </div>

          {/* SECTION 4 — My Work */}
          <div style={{
            marginBottom: isMobile ? '40px' : '64px',
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,168,25,0.2)',
            textAlign: 'center',
            borderRadius: '20px',
            padding: isMobile ? '24px' : '48px'
          }}>
            <span className="badge">My Work</span>
            <h2 style={{
              fontSize: isMobile ? '22px' : '32px',
              color: '#1A1A1A',
              marginTop: '16px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              Today, I help individuals and parents do the same.
            </h2>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
              gap: '32px'
            }}>
              {/* Focus areas */}
              <div>
                <p style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#E8841A',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '16px'
                }}>
                  My work is focused on:
                </p>
                {[
                  'Self-awareness',
                  'Emotional patterns',
                  'Conscious parenting',
                  'Relationship clarity'
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '10px',
                    marginBottom: '12px',
                    alignItems: 'center'
                  }}>
                    <span style={{ color: '#E8841A', fontSize: '18px' }}>✦</span>
                    <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#444', margin: 0, fontWeight: 500 }}>
                      {item}
                    </p>
                  </div>
                ))}
              </div>

              {/* Shifts */}
              <div>
                <p style={{
                  fontSize: '13px',
                  fontWeight: 700,
                  color: '#E8841A',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  marginBottom: '16px'
                }}>
                  I guide you to shift from:
                </p>
                {[
                  { from: 'Reaction', to: 'Response' },
                  { from: 'Confusion', to: 'Clarity' },
                  { from: 'Disconnection', to: 'Deep connection' },
                ].map((item, i) => (
                  <div key={i} style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '14px',
                    alignItems: 'center'
                  }}>
                    <span style={{
                      fontSize: isMobile ? '13px' : '15px',
                      color: '#999',
                      textDecoration: 'line-through'
                    }}>
                      {item.from}
                    </span>
                    <span style={{ color: '#FAA819' }}>→</span>
                    <span style={{
                      fontSize: isMobile ? '13px' : '15px',
                      color: '#1A1A1A',
                      fontWeight: 700
                    }}>
                      {item.to}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 5 — Core Belief */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            marginBottom: isMobile ? '40px' : '64px',
            textAlign: 'center'
          }}>
            <span className="badge">Core Belief</span>
            <h2 style={{
              fontSize: isMobile ? '22px' : '34px',
              color: '#1A1A1A',
              marginTop: '16px',
              marginBottom: '16px',
              textAlign: 'center',
              lineHeight: 1.4
            }}>
              I don't believe you are broken.
            </h2>
            <p style={{
              fontSize: isMobile ? '16px' : '20px',
              color: '#D97706',
              fontWeight: 600,
              marginBottom: '16px'
            }}>
              I believe you are conditioned.
            </p>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#555',
              lineHeight: 1.8
            }}>
              And when you become aware of your patterns…<br />
              you gain the power to change them.
            </p>
          </div>

          {/* SECTION 6 — The Truth */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
            marginBottom: isMobile ? '40px' : '64px',
            background: 'rgba(255,255,255,0.45)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,168,25,0.2)',
            borderLeft: '4px solid #FAA819',
            borderRadius: '16px',
            padding: isMobile ? '24px' : '40px'
          }}>
            <span className="badge">The Truth</span>
            <p style={{
              fontSize: isMobile ? '14px' : '17px',
              color: '#444',
              lineHeight: 2,
              marginTop: '16px',
              textAlign: 'left'
            }}>
              This may feel uncomfortable…<br /><br />
              <strong style={{ color: '#1A1A1A' }}>You are not stuck because of others.</strong><br />
              You are stuck because of patterns you haven't yet seen.<br /><br />
              And the moment you see them…<br />
              <strong style={{ color: '#D97706' }}>you can change them.</strong>
            </p>
          </div>

          {/* SECTION 7 — Mission + Vision */}
          <div style={{
            marginBottom: isMobile ? '40px' : '64px'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
              <span className="badge">Mission & Vision</span>
              <h2 style={{
                fontSize: isMobile ? '22px' : '32px',
                color: '#1A1A1A',
                marginTop: '16px',
                textAlign: 'center'
              }}>
                My mission is to help you build a deeper connection with yourself
              </h2>
              <p style={{
                fontSize: isMobile ? '14px' : '16px',
                color: '#666',
                marginTop: '12px'
              }}>
                so you can create stronger, healthier relationships in your life.
              </p>
            </div>

            <div style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
              gap: '16px'
            }}>
              {[
                'Parents raise emotionally secure children',
                'Individuals take ownership of their inner world',
                'Relationships are built on awareness, not control'
              ].map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.5)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid rgba(250,168,25,0.2)',
                  borderRadius: '16px',
                  padding: isMobile ? '20px' : '28px',
                  textAlign: 'center'
                }}>
                  <div style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    color: '#1A0D00',
                    fontWeight: 700,
                    fontSize: '16px'
                  }}>
                    {i + 1}
                  </div>
                  <p style={{
                    fontSize: isMobile ? '14px' : '15px',
                    color: '#444',
                    lineHeight: 1.6,
                    margin: 0
                  }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 8 — Who This Is For */}
          <div style={{
            maxWidth: '780px',
            margin: '0 auto',
            textAlign: 'center',
            marginBottom: isMobile ? '40px' : '64px'
          }}>
            <span className="badge">Who This Is For</span>
            <h2 style={{
              fontSize: isMobile ? '22px' : '32px',
              color: '#1A1A1A',
              marginTop: '16px',
              marginBottom: '24px',
              textAlign: 'left'
            }}>
              This work is for you if:
            </h2>
            {[
              'You are ready to look within',
              'You are willing to take responsibility for your patterns',
              'You truly want change — not just temporary relief'
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                gap: '16px',
                alignItems: 'flex-start',
                marginBottom: '16px',
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

          {/* SECTION 9 — Final CTA */}
          <div style={{
            textAlign: 'center',
            padding: isMobile ? '32px 20px' : '60px',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,168,25,0.2)',
            borderRadius: '24px',
            marginBottom: '40px'
          }}>
            <p style={{
              fontSize: isMobile ? '16px' : '20px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '32px'
            }}>
              If you're ready to understand yourself on a deeper level…<br />
              and create the relationships you truly desire—<br />
              <strong style={{ color: '#1A1A1A' }}>I'm here to guide you.</strong>
            </p>

            <div style={{
              display: 'flex',
              flexDirection: isMobile ? 'column' : 'row',
              gap: '16px',
              justifyContent: 'center'
            }}>
              <NavLink to="/clarity-call">
                <button className="btn-primary" style={{
                  fontSize: isMobile ? '15px' : '17px',
                  padding: isMobile ? '14px 28px' : '16px 40px',
                  width: isMobile ? '100%' : 'auto'
                }}>
                  Book a Clarity Call
                </button>
              </NavLink>
              <NavLink to="/one-on-one">
                <button className="btn-secondary" style={{
                  fontSize: isMobile ? '15px' : '17px',
                  padding: isMobile ? '14px 28px' : '16px 40px',
                  width: isMobile ? '100%' : 'auto'
                }}>
                  Begin Your Journey
                </button>
              </NavLink>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default About;