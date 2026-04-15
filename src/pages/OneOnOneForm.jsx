import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import useWindowSize from '../hooks/useWindowSize';

const plans = [
  { label: '1 Month Coaching — ₹5,656', value: '1 Month Coaching', price: '5,656', sessions: '4 sessions (weekly)' },
  { label: '3 Month Coaching — ₹9,999', value: '3 Month Coaching', price: '9,999', sessions: '12 sessions (weekly)' },
  { label: '6 Month Coaching — ₹15,999', value: '6 Month Coaching', price: '15,999', sessions: '24 sessions (weekly)' },
];

const OneOnOneForm = () => {
  const { isMobile, isTablet } = useWindowSize();
  const location = useLocation();
  const passed = location.state;

  // Pre-select plan from navigation state
  const defaultPlan = passed?.plan || '1 Month Coaching';
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);

  // Get current plan details
  const currentPlan = plans.find(p => p.value === selectedPlan);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Redirecting to Razorpay for ₹${currentPlan.price}...`);
  };

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
    <div className="one-on-one-page" style={{
      paddingTop: '120px',
      paddingBottom: isMobile ? '40px' : '80px',
      minHeight: '100vh',
      background: 'transparent',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container">
        <div style={{ maxWidth: '600px', margin: '0 auto' }}>

          {/* Header — dynamic based on selected plan */}
          <div style={{ textAlign: 'center', marginBottom: isMobile ? '32px' : '48px' }}>
            <span className="badge">1-on-1 Coaching</span>
            <h1 style={{ 
              fontSize: isMobile ? '28px' : '36px', 
              marginTop: '16px', 
              color: '#1A1A1A' 
            }}>
              {currentPlan.value}
            </h1>
            <p style={{ color: '#E8841A', fontWeight: 600, marginTop: '8px', fontSize: isMobile ? '16px' : '18px' }}>
              {currentPlan.sessions} • 40 min each
            </p>
            {/* Dynamic price pill */}
            <div style={{
              display: 'inline-block',
              marginTop: '16px',
              padding: isMobile ? '8px 20px' : '10px 28px',
              background: 'linear-gradient(135deg, #FAA819, #E8841A)',
              borderRadius: '50px',
              color: '#1A0D00',
              fontWeight: 700,
              fontSize: isMobile ? '18px' : '22px'
            }}>
              ₹{currentPlan.price}
            </div>
          </div>

          <GlassCard className="form-card" style={{
            padding: '48px',
            backdropFilter: 'blur(32px)',
            background: 'rgba(255, 255, 255, 0.6)'
          }}>
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '28px'
            }}>

              {/* Plan Selector — dropdown */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                  Select Your Plan
                </label>
                <select
                  value={selectedPlan}
                  onChange={(e) => setSelectedPlan(e.target.value)}
                  style={{
                    ...inputStyle,
                    appearance: 'none',
                    cursor: 'pointer',
                    border: '1.5px solid #FAA819',
                    fontWeight: 600
                  }}
                >
                  {plans.map((plan, i) => (
                    <option key={i} value={plan.value}>
                      {plan.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* Full Name */}
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

              {/* Email */}
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

              {/* WhatsApp */}
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

              {/* What are you struggling with */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                  What are you struggling with?
                </label>
                <select
                  required
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                >
                  <option value="" disabled>Select an option</option>
                  {[
                    "Relationship Issues",
                    "Self-Worth",
                    "Toxic Patterns",
                    "Fear of Abandonment",
                    "Other"
                  ].map((opt, i) => (
                    <option key={i} value={opt}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <label style={{ fontSize: '14px', color: '#1A1A1A', fontWeight: 600 }}>
                  Brief description
                </label>
                <textarea
                  required
                  placeholder="A little bit about your current situation..."
                  rows="4"
                  style={{ ...inputStyle, resize: 'none' }}
                />
              </div>

              {/* Submit button — price updates dynamically */}
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
                Proceed to Payment — ₹{currentPlan.price}
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

export default OneOnOneForm;
