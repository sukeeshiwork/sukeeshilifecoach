import React, { useState } from 'react';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';
import GlassCard from '../components/GlassCard';

const ClarityCallForm = () => {
  const { isMobile, isTablet } = useWindowSize();
  const [charCount, setCharCount] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Redirecting to Razorpay for ₹333...');
  };

  const struggleOptions = [
    "Relationship Issues",
    "Self-Worth",
    "Toxic Patterns",
    "Fear of Abandonment",
    "Other"
  ];

  const inputStyle = {
    background: 'rgba(255, 255, 255, 0.8)',
    border: '1px solid rgba(232, 132, 26, 0.2)',
    padding: '16px',
    borderRadius: '12px',
    color: '#1A1A1A',
    fontSize: '16px',
    width: '100%',
    fontFamily: 'inherit',
    outline: 'none'
  };

  return (
    <div style={{
      paddingTop: '120px',
      paddingBottom: '80px',
      minHeight: '100vh',
      background: 'transparent',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <span className="badge">Booking Form</span>
            <h1 style={{ fontSize: '36px', marginTop: '16px', color: '#1A1A1A' }}>
              Complete Your Booking
            </h1>
            <p style={{ color: '#666666', marginTop: '12px' }}>
              Fill in your details to secure your 40-minute Clarity Call.
            </p>
          </div>

          <GlassCard className="form-card" style={{
            padding: isMobile ? '24px 20px' : '48px',
            backdropFilter: 'blur(32px)',
            background: 'rgba(255, 255, 255, 0.6)'
          }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px'
            }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                  Full Name
                </label>
                <input
                  required
                  type="text"
                  placeholder="Ex. Priya Sharma"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                  Email Address
                </label>
                <input
                  required
                  type="email"
                  placeholder="Ex. priya@gmail.com"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                  WhatsApp Number
                </label>
                <input
                  required
                  type="tel"
                  placeholder="Ex. +91 98765 43210"
                  style={inputStyle}
                />
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                  What are you struggling with?
                </label>
                <select
                  required
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer'
                  }}
                >
                  <option value="" disabled>Select an option</option>
                  {struggleOptions.map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                    Brief description
                  </label>
                  <span style={{
                    fontSize: '12px',
                    color: charCount > 200 ? '#EF4444' : '#888888'
                  }}>
                    {charCount}/200
                  </span>
                </div>
                <textarea
                  required
                  maxLength={200}
                  placeholder="A little bit about your current situation..."
                  rows="4"
                  onChange={(e) => setCharCount(e.target.value.length)}
                  style={{
                    ...inputStyle,
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{
                  marginTop: '12px',
                  width: '100%',
                  fontSize: '18px',
                  fontWeight: 700,
                  padding: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '12px'
                }}
              >
                Proceed to Payment — ₹333
                <ChevronRight size={20} />
              </button>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                color: '#666666',
                fontSize: '13px'
              }}>
                <ShieldCheck size={16} />
                <span>Payments are 100% secure via Razorpay</span>
              </div>

            </form>
          </GlassCard>
        </div>
      </div>
    </div>
  );
};

export default ClarityCallForm;