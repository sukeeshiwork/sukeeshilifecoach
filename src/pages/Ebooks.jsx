import React from 'react';
import { Download, BookOpen } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const ebooks = [
  {
    id: 1,
    title: "5 Patterns Keeping You Stuck in Toxic Relationships",
    description: "Discover the hidden emotional patterns that keep you attracting the wrong people — and how to break free.",
    category: "Relationships",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID_1/view",
    cover: null // client will add image later
  },
  {
    id: 2,
    title: "The Inner Child Healing Guide",
    description: "A practical guide to understanding your inner child wounds and how they affect your relationships today.",
    category: "Healing",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID_2/view",
    cover: null
  },
  {
    id: 3,
    title: "Conscious Parenting — A Beginner's Guide",
    description: "Simple tools and practices to help you respond instead of react — and raise emotionally secure children.",
    category: "Parenting",
    driveLink: "https://drive.google.com/file/d/YOUR_FILE_ID_3/view",
    cover: null
  },
];

const categoryColors = {
  "Relationships": "#E8841A",
  "Healing": "#D97706",
  "Parenting": "#B45309"
};

const Ebooks = () => {
  const { isMobile, isTablet } = useWindowSize();

  return (
    <div className="about-page">
      <section style={{
        paddingTop: isMobile ? '80px' : '140px',
        paddingBottom: isMobile ? '40px' : '80px',
        marginTop: isMobile ? '120px' : '0',
        background: 'transparent'
      }}>
        <div className="container">

          {/* HEADER */}
          <div style={{
            textAlign: 'center',
            maxWidth: '700px',
            margin: '0 auto 60px'
          }}>
            <span className="badge">Free Resources</span>
            <h1 style={{
              fontSize: isMobile ? '28px' : isTablet ? '38px' : '48px',
              marginTop: '16px',
              marginBottom: '16px',
              color: '#333333',
              lineHeight: 1.2,
              textAlign: 'center'
            }}>
              Free Ebooks & Guides
            </h1>
            <p style={{
              fontSize: isMobile ? '15px' : '18px',
              color: '#666',
              lineHeight: 1.7,
              textAlign: 'center'
            }}>
              Practical guides to help you understand yourself better —
              and create the relationships you truly deserve.
            </p>
          </div>

          {/* GRID */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
            gap: isMobile ? '20px' : '28px',
            maxWidth: '1100px',
            margin: '0 auto'
          }}>
            {ebooks.map((ebook) => (
              <div
                key={ebook.id}
                style={{
                  background: 'rgba(255,255,255,0.55)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(250,168,25,0.2)',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'all 0.3s ease'
                }}
              >
                {/* Cover Image */}
                <div style={{
                  width: '100%',
                  height: '200px',
                  background: 'linear-gradient(135deg, rgba(250,168,25,0.15), rgba(232,132,26,0.25))',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  position: 'relative'
                }}>
                  {ebook.cover ? (
                    <img
                      src={ebook.cover}
                      alt={ebook.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover'
                      }}
                    />
                  ) : (
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '12px',
                      opacity: 0.5
                    }}>
                      <BookOpen size={48} color="#E8841A" />
                      <p style={{
                        fontSize: '12px',
                        color: '#E8841A',
                        fontWeight: 600
                      }}>
                        Cover Coming Soon
                      </p>
                    </div>
                  )}

                  {/* Category badge */}
                  <div style={{
                    position: 'absolute',
                    top: '12px',
                    left: '12px',
                    background: categoryColors[ebook.category] || '#E8841A',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: 700,
                    padding: '4px 12px',
                    borderRadius: '50px'
                  }}>
                    {ebook.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{
                  padding: isMobile ? '20px' : '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  gap: '12px'
                }}>
                  <h3 style={{
                    fontSize: isMobile ? '16px' : '18px',
                    fontWeight: 700,
                    color: '#333333',
                    lineHeight: 1.4,
                    textAlign: 'left',
                    margin: 0
                  }}>
                    {ebook.title}
                  </h3>

                  <p style={{
                    fontSize: isMobile ? '13px' : '14px',
                    color: '#666',
                    lineHeight: 1.6,
                    margin: 0,
                    textAlign: 'left',
                    flexGrow: 1
                  }}>
                    {ebook.description}
                  </p>

                  {/* Download Button */}
                  <a
                    href={ebook.driveLink}
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      gap: '8px',
                      background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                      color: '#1A0D00',
                      fontWeight: 700,
                      fontSize: isMobile ? '14px' : '15px',
                      padding: '12px 20px',
                      borderRadius: '50px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      marginTop: '8px'
                    }}
                  >
                    <Download size={16} />
                    Download Free
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* BOTTOM NOTE */}
          <div style={{
            textAlign: 'center',
            marginTop: isMobile ? '40px' : '60px',
            padding: isMobile ? '24px 20px' : '40px',
            background: 'rgba(255,255,255,0.4)',
            backdropFilter: 'blur(16px)',
            border: '1px solid rgba(250,168,25,0.2)',
            borderRadius: '20px',
            maxWidth: '600px',
            margin: isMobile ? '40px auto 0' : '60px auto 0'
          }}>
            <p style={{
              fontSize: isMobile ? '14px' : '16px',
              color: '#555',
              lineHeight: 1.8,
              marginBottom: '20px'
            }}>
              Want personalized guidance beyond these guides?
            </p>
            <a href="/clarity-call" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'linear-gradient(135deg, #FAA819, #E8841A)',
              color: '#1A0D00',
              fontWeight: 700,
              fontSize: isMobile ? '14px' : '16px',
              padding: isMobile ? '12px 24px' : '14px 32px',
              borderRadius: '50px',
              textDecoration: 'none'
            }}>
              Book a Clarity Call — ₹565
            </a>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Ebooks;