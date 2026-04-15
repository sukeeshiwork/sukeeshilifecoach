import React from 'react';
import { motion } from 'framer-motion';

const GlassCard = ({ children, className = '', hover = true }) => {
  const styles = `
    .glass-card-component {
      background: rgba(255, 255, 255, 0.45);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border: 1px solid rgba(255, 210, 80, 0.3);
      border-radius: 20px;
      padding: 40px;
      transition: all 0.3s ease;
      box-shadow: 
        0 4px 30px rgba(232, 132, 26, 0.08),
        inset 0 1px 0 rgba(255, 255, 255, 0.7);
    }
    .glass-card-component.hover:hover {
      background: rgba(255, 255, 255, 0.65);
      border-color: rgba(245, 166, 35, 0.5);
      box-shadow: 
        0 8px 40px rgba(232, 132, 26, 0.14),
        inset 0 1px 0 rgba(255, 255, 255, 0.9);
      transform: translateY(-4px);
    }
  `;

  return (
    <motion.div 
      className={`glass-card-component ${hover ? 'hover' : ''} ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <style>{styles}</style>
      {children}
    </motion.div>
  );
};

export default GlassCard;
