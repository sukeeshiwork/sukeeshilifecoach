import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const videos = [
  { url: "https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776160217/6_d3ac7h.mp4" },
  { url: "https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776160203/3_bfbs5z.mp4" },
  { url: "https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776160212/5_w8nemj.mp4" },
  { url: "https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776160208/1_palchw.mp4" },
  { url: "https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776160202/4_obpjzf.mp4" },
  { url: "https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776160202/2_kjd6gh.mp4" },
  { url: "https://res.cloudinary.com/dfdxfvbtg/video/upload/q_auto/f_auto/v1776160222/7_ikjvl9.mp4" },
];

const TestimonialCarousel = () => {
  const { isMobile, isTablet } = useWindowSize();
  const VISIBLE = isTablet ? 1 : 3;
  const [current, setCurrent] = useState(0);
  const [loadedIndexes, setLoadedIndexes] = useState([0, 1, 2]); // preload first 3
  const videoRefs = useRef([]);

  const maxIndex = videos.length - VISIBLE;

  // Pause all videos
  const pauseAll = () => {
    videoRefs.current.forEach(v => {
      if (v) {
        v.pause();
        v.currentTime = 0;
      }
    });
  };

  const prev = () => {
    pauseAll();
    const newIdx = Math.max(0, current - 1);
    setCurrent(newIdx);
    // Load new videos coming into view
    setLoadedIndexes(prev => {
      const newSet = new Set(prev);
      for (let i = newIdx; i < newIdx + VISIBLE; i++) newSet.add(i);
      return [...newSet];
    });
  };

  const next = () => {
    pauseAll();
    const newIdx = Math.min(maxIndex, current + 1);
    setCurrent(newIdx);
    setLoadedIndexes(prev => {
      const newSet = new Set(prev);
      for (let i = newIdx; i < newIdx + VISIBLE; i++) newSet.add(i);
      return [...newSet];
    });
  };

  const goTo = (i) => {
    pauseAll();
    setCurrent(i);
    setLoadedIndexes(prev => {
      const newSet = new Set(prev);
      for (let j = i; j < i + VISIBLE; j++) newSet.add(j);
      return [...newSet];
    });
  };

  // Ensure only one video plays at a time
  const handlePlay = (playingIdx) => {
    videoRefs.current.forEach((v, i) => {
      if (v && i !== playingIdx) {
        v.pause();
        v.currentTime = 0;
      }
    });
  };

  const visibleVideos = videos.slice(current, current + VISIBLE);

  return (
    <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto' }}>

      {/* Cards Row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${VISIBLE}, 1fr)`,
        gap: '20px',
      }}>
        {visibleVideos.map((video, idx) => {
          const globalIdx = current + idx;
          const shouldLoad = loadedIndexes.includes(globalIdx);

          return (
            <div
              key={globalIdx}
              className="glass-card"
              style={{
                overflow: 'hidden',
                padding: 0,
                borderRadius: '20px',
                background: 'rgba(255,255,255,0.5)'
              }}
            >
              {/* Video container — auto aspect ratio based on video */}
              <div style={{
                width: '100%',
                background: '#0a0a0a',
                borderRadius: '20px',
                overflow: 'hidden',
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '300px'
              }}>
                {shouldLoad ? (
                  <video
                    ref={el => videoRefs.current[idx] = el}
                    src={video.url}
                    controls
                    playsInline
                    preload="metadata"
                    onPlay={() => handlePlay(idx)}
                    style={{
                      width: '100%',
                      height: '100%',
                      maxHeight: '500px',
                      aspectRatio: '9/16',
                      objectFit: 'contain', // ← contain = no crop, full video visible
                      display: 'block',
                      background: '#0a0a0a'
                    }}
                  />
                ) : (
                  // Placeholder before lazy load
                  <div style={{
                    width: '100%',
                    minHeight: '300px',
                    background: '#111',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#FAA819',
                    fontSize: '14px'
                  }}>
                    Loading...
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Left Arrow */}
      <button
        onClick={prev}
        disabled={current === 0}
        className="carousel-arrow left"
        style={{
          position: 'absolute',
          left: isTablet ? '10px' : '-56px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: current === 0 ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)',
          border: '1px solid rgba(250,168,25,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: current === 0 ? 'not-allowed' : 'pointer',
          color: current === 0 ? '#ccc' : '#E8841A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
      >
        <ChevronLeft size={20} />
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        disabled={current >= maxIndex}
        className="carousel-arrow right"
        style={{
          position: 'absolute',
          right: isTablet ? '10px' : '-56px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '44px',
          height: '44px',
          borderRadius: '50%',
          background: current >= maxIndex ? 'rgba(255,255,255,0.3)' : 'rgba(255,255,255,0.9)',
          border: '1px solid rgba(250,168,25,0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: current >= maxIndex ? 'not-allowed' : 'pointer',
          color: current >= maxIndex ? '#ccc' : '#E8841A',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          transition: 'all 0.3s ease',
          zIndex: 10
        }}
      >
        <ChevronRight size={20} />
      </button>

      {/* Dots */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        gap: '8px',
        marginTop: '32px'
      }}>
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            style={{
              width: i === current ? '24px' : '10px',
              height: '10px',
              borderRadius: '5px',
              background: i === current ? '#FAA819' : 'rgba(250,168,25,0.3)',
              border: i !== current ? '1px solid #FAA819' : 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease'
            }}
          />
        ))}
      </div>

      <style>{`
        @media (max-width: 768px) {
          .testimonial-video-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  );
};

export default TestimonialCarousel;