import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay, FaStar } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';
import { useNavigate } from 'react-router-dom';

const Hero = ({ content }) => {
  const { isMobile, isTablet } = useWindowSize();
  const navigate = useNavigate();
  
  // Video player states
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);

  // Video handlers
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleProgress = () => {
    if (!videoRef.current) return;
    const current = videoRef.current.currentTime;
    const duration = videoRef.current.duration;
    if (duration) setProgress((current / duration) * 100);
  };

  const handleSeek = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    const bar = e.currentTarget;
    const rect = bar.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percent = x / rect.width;
    videoRef.current.currentTime = percent * videoRef.current.duration;
  };

  const handleCanPlay = () => {
    setIsLoading(false);
    setIsBuffering(false);
  };

  const handleWaiting = () => {
    setIsBuffering(true);
  };

  const styles = `
    .hero {
      position: relative;
      min-height: 100vh;
      display: flex;
      align-items: center;
      padding-top: 100px;
      // overflow: hidden;
      background: transparent;
      z-index: 1;
    }
    .hero-accent-bar {
      position: absolute;
      top: 0;
      left: 0;
      height: 4px;
      width: 100%;
      background: var(--gradient-primary);
      z-index: 1001;
    }
    .hero-container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 60px;
      align-items: center;
    }
    .hero-content {
      z-index: 2;
    }
    .hero-video {
      position: relative;
      z-index: 2;
    }
    .video-container {
      width: 100%;
      aspect-ratio: 16/9;
      background: rgba(255, 255, 255, 0.4);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 215, 80, 0.35);
      border-radius: 20px;
      box-shadow: 
        0 20px 60px rgba(232, 132, 26, 0.1),
        inset 0 1px 0 rgba(255, 255, 255, 0.7);
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .play-btn {
      width: 80px;
      height: 80px;
      background: var(--gradient-button);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #1A0D00;
      font-size: 24px;
      box-shadow: 0 4px 20px rgba(232, 132, 26, 0.4);
      transition: all 0.3s ease;
      cursor: pointer;
    }
    .play-btn:hover { transform: scale(1.1); }
    .trust-strip {
      margin-top: 32px;
      display: flex;
      align-items: center;
      gap: 16px;
    }
    .avatar-stack { display: flex; }
    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.8);
      margin-left: -12px;
      background: #F5E8C0;
    }
    .avatar:first-child { margin-left: 0; }
    .hero-badge {
      background: linear-gradient(135deg, #FAA819 0%, #E8841A 100%);
      color: #1A0D00;
      font-weight: 600;
      font-size: 13px;
      border: none;
      border-radius: 50px;
      padding: 7px 20px;
      display: inline-block;
      margin-bottom: 20px;
    }
    .hero-headline {
      font-size: 56px;
      line-height: 1.15;
      font-weight: 700;
      margin-bottom: 24px;
      color: #1A1A1A;
    }
    .hero-headline span { color: #D97706; }
    .hero-subheadline {
      color: #555555;
      font-size: 18px;
      max-width: 500px;
      margin-bottom: 32px;
    }

    @media (max-width: 1024px) {
      .hero-container { grid-template-columns: 1fr; }
      .hero-headline { font-size: 44px; text-align: center; }
      .hero-subheadline { text-align: center; margin: 0 auto 32px; }
      .trust-strip { justify-content: center; }
    }

    @media (max-width: 640px) {
      .hero { 
        padding-top: 150px !important;
        min-height: auto !important;
        padding-bottom: 1px !important;
      }
      .hero-container {
        grid-template-columns: 1fr !important;
        gap: 0 !important;
        text-align: center !important;
      }
      .hero-content {
        display: flex !important;
        flex-direction: column !important;
        align-items: center !important;
        text-align: center !important;
      }
      .hero-headline {
        font-size: 26px !important;
        text-align: center !important;
        margin-bottom: 16px !important;
      }
      .hero-subheadline {
        font-size: 14px !important;
        text-align: center !important;
        margin: 0 auto 24px !important;
      }
      .trust-strip {
        justify-content: center !important;
        margin-top: 24px !important;
      }
      .play-btn {
        width: 56px !important;
        height: 56px !important;
        font-size: 18px !important;
      }
    }
  `;

  return (
    <section className="hero-section hero">
      <style>{styles}</style>
      <div className="hero-accent-bar"></div>

      <div className="container" style={{
        display: 'grid',
        gridTemplateColumns: isTablet ? '1fr' : '1fr 1fr',
        gap: isTablet ? '32px' : '60px',
        alignItems: 'center',
      }}>

        {/* LEFT / MAIN CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: isMobile ? 0 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
            textAlign: isMobile ? 'center' : isTablet ? 'center' : 'left',
          }}
        >
          {/* BADGE */}
          <span className="hero-badge">{content.badge}</span>

          {/* HEADLINE */}
          <h1 className="hero-headline" style={{
            fontSize: isMobile ? '28px' : isTablet ? '44px' : '56px',
            textAlign: isMobile ? 'center' : isTablet ? 'center' : 'left',
          }}>
            Transform Your Relationships by{' '}
            <span>Healing</span> Yourself First
          </h1>

          {/* VIDEO — mobile only, right after headline */}
          {isMobile && (
            <motion.div
              style={{
                width: '100%',
                margin: '20px 0',
              }}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                onClick={togglePlay}
                style={{
                  width: '100%',
                  aspectRatio: '16/9',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  position: 'relative',
                  background: '#000',
                  cursor: 'pointer',
                  border: '1px solid rgba(255, 215, 80, 0.35)',
                  boxShadow: '0 20px 60px rgba(232, 132, 26, 0.1)',
                }}
              >
                {/* VIDEO ELEMENT */}
                <video
                  ref={videoRef}
                  src="https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776680758/Export-Website2-20260417-164832_mryfxa.mov"
                  muted
                  playsInline
                  preload="metadata"
                  onTimeUpdate={handleProgress}
                  onCanPlay={handleCanPlay}
                  onWaiting={handleWaiting}
                  onEnded={() => setIsPlaying(false)}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block'
                  }}
                />

                {/* LOADING SPINNER */}
                {(isLoading || isBuffering) && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.3)'
                  }}>
                    <div style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '50%',
                      border: '4px solid rgba(250,168,25,0.3)',
                      borderTop: '4px solid #FAA819',
                      animation: 'spin 1s linear infinite'
                    }} />
                  </div>
                )}

                {/* PLAY BUTTON OVERLAY */}
                {!isPlaying && !isLoading && (
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(0,0,0,0.25)'
                  }}>
                    <div style={{
                      width: '72px',
                      height: '72px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 4px 24px rgba(232,132,26,0.5)',
                      transition: 'transform 0.2s ease'
                    }}>
                      <FaPlay color="#1A0D00" size={24} style={{ marginLeft: '4px' }} />
                    </div>
                  </div>
                )}

                {/* MUTE BUTTON */}
                <button
                  onClick={toggleMute}
                  style={{
                    position: 'absolute',
                    bottom: '48px',
                    left: '12px',
                    background: 'rgba(0,0,0,0.55)',
                    backdropFilter: 'blur(8px)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '50px',
                    padding: '6px 14px',
                    color: '#fff',
                    fontSize: '16px',
                    cursor: 'pointer',
                    zIndex: 10,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    lineHeight: 1
                  }}
                >
                  {isMuted ? '🔇' : '🔊'}
                </button>

                {/* PROGRESS BAR */}
                <div
                  onClick={handleSeek}
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '36px',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 12px',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                    cursor: 'pointer',
                    zIndex: 10
                  }}
                >
                  <div style={{
                    width: '100%',
                    height: '4px',
                    background: 'rgba(255,255,255,0.3)',
                    borderRadius: '2px',
                    overflow: 'hidden'
                  }}>
                    <div style={{
                      height: '100%',
                      width: `${progress}%`,
                      background: 'linear-gradient(90deg, #FAA819, #E8841A)',
                      borderRadius: '2px',
                      transition: 'width 0.1s linear'
                    }} />
                  </div>
                </div>

                {/* Spinner CSS */}
                <style>{`
                  @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                  }
                `}</style>
              </div>
            </motion.div>
          )}

          {/* SUBHEADLINE — after video on mobile */}
          <p className="hero-subheadline" style={{
            fontSize: isMobile ? '14px' : '18px',
            textAlign: isMobile ? 'center' : isTablet ? 'center' : 'left',
            margin: isMobile ? '0 0 24px' : isTablet ? '0 auto 32px' : '0 0 32px',
          }}>
            {content.subheadline}
          </p>

          {/* BUTTONS */}
          <div style={{
            display: 'flex',
            flexDirection: isMobile ? 'column' : 'row',
            gap: isMobile ? '12px' : '16px',
            width: isMobile ? '100%' : 'auto',
            justifyContent: isTablet ? 'center' : 'flex-start',
          }}>
            <button onClick={() => navigate('/clarity-call')} className="btn-primary" style={{
              width: isMobile ? '100%' : 'auto'
            }}>
              {content.ctaPrimary}
            </button>
            <button onClick={() => navigate('/one-on-one')} className="btn-secondary" style={{
              width: isMobile ? '100%' : 'auto'
            }}>
              {content.ctaSecondary}
            </button>
          </div>

          {/* TRUST STRIP */}
          {/* <div className="trust-strip" style={{
            justifyContent: isMobile ? 'center' : isTablet ? 'center' : 'flex-start',
          }}>
            <div className="avatar-stack">
              <div className="avatar"></div>
              <div className="avatar"></div>
              <div className="avatar"></div>
            </div>
            <div>
              <p style={{ fontWeight: 600, color: '#888888', fontSize: isMobile ? '13px' : '15px' }}>
                {content.trustText}
              </p>
              <div style={{ color: '#F5C842', display: 'flex', gap: '4px' }}>
                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
              </div>
            </div>
          </div> */}
        </motion.div>

        {/* RIGHT — Video (desktop/tablet only) */}
        {!isMobile && (
          <motion.div
            className="hero-video"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div
              onClick={togglePlay}
              style={{
                width: '100%',
                aspectRatio: '16/9',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                background: '#000',
                cursor: 'pointer',
                border: '1px solid rgba(255, 215, 80, 0.35)',
                boxShadow: '0 20px 60px rgba(232, 132, 26, 0.1)',
              }}
            >
              {/* VIDEO ELEMENT */}
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776680758/Export-Website2-20260417-164832_mryfxa.mov"
                muted
                playsInline
                preload="metadata"
                onTimeUpdate={handleProgress}
                onCanPlay={handleCanPlay}
                onWaiting={handleWaiting}
                onEnded={() => setIsPlaying(false)}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  display: 'block'
                }}
              />

              {/* LOADING SPINNER */}
              {(isLoading || isBuffering) && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.3)'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    border: '4px solid rgba(250,168,25,0.3)',
                    borderTop: '4px solid #FAA819',
                    animation: 'spin 1s linear infinite'
                  }} />
                </div>
              )}

              {/* PLAY BUTTON OVERLAY */}
              {!isPlaying && !isLoading && (
                <div style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: 'rgba(0,0,0,0.25)'
                }}>
                  <div style={{
                    width: '72px',
                    height: '72px',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 24px rgba(232,132,26,0.5)',
                    transition: 'transform 0.2s ease'
                  }}>
                    <FaPlay color="#1A0D00" size={24} style={{ marginLeft: '4px' }} />
                  </div>
                </div>
              )}

              {/* MUTE BUTTON */}
              <button
                onClick={toggleMute}
                style={{
                  position: 'absolute',
                  bottom: '48px',
                  left: '12px',
                  background: 'rgba(0,0,0,0.55)',
                  backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '50px',
                  padding: '6px 14px',
                  color: '#fff',
                  fontSize: '16px',
                  cursor: 'pointer',
                  zIndex: 10,
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                  lineHeight: 1
                }}
              >
                {isMuted ? '🔇' : '🔊'}
              </button>

              {/* PROGRESS BAR */}
              <div
                onClick={handleSeek}
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '36px',
                  display: 'flex',
                  alignItems: 'center',
                  padding: '0 12px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent)',
                  cursor: 'pointer',
                  zIndex: 10
                }}
              >
                <div style={{
                  width: '100%',
                  height: '4px',
                  background: 'rgba(255,255,255,0.3)',
                  borderRadius: '2px',
                  overflow: 'hidden'
                }}>
                  <div style={{
                    height: '100%',
                    width: `${progress}%`,
                    background: 'linear-gradient(90deg, #FAA819, #E8841A)',
                    borderRadius: '2px',
                    transition: 'width 0.1s linear'
                  }} />
                </div>
              </div>

              {/* Spinner CSS */}
              <style>{`
                @keyframes spin {
                  from { transform: rotate(0deg); }
                  to { transform: rotate(360deg); }
                }
              `}</style>
            </div>
          </motion.div>
        )}

      </div>
    </section>
  );
};

export default Hero;