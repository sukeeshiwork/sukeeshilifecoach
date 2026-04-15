import { useState, useEffect } from 'react';

const useWindowSize = () => {
  const [width, setWidth] = useState(() => {
    return typeof window !== 'undefined' ? window.innerWidth : 1024;
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    
    // Set correct width on mount
    setWidth(window.innerWidth);
    
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return {
    isMobile: width <= 640,
    isTablet: width <= 1024,
    width
  };
};

export default useWindowSize;