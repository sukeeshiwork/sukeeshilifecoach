import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ChevronRight, ShieldCheck } from 'lucide-react';
import GlassCard from '../components/GlassCard';
import { saveToSheet, updatePaymentStatus } from '../utils/googleSheet';
import { initiatePayment } from '../utils/razorpay';

const plans = [
  { label: '1 Month Coaching — ₹333', value: '1 Month Coaching', price: '333', priceInPaise: 33300 },
  { label: '3 Month Coaching — ₹9,999', value: '3 Month Coaching', price: '9,999', priceInPaise: 999900 },
  { label: '6 Month Coaching — ₹15,999', value: '6 Month Coaching', price: '15,999', priceInPaise: 1599900 },
];

const OneOnOneForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const passed = location.state;

  const defaultPlan = passed?.plan || '1 Month Coaching';
  const [selectedPlan, setSelectedPlan] = useState(defaultPlan);
  const [loading, setLoading] = useState(false);
  const [phoneError, setPhoneError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    struggling: '',
    description: ''
  });

  const currentPlan = plans.find(p => p.value === selectedPlan) || plans[0];

  const struggleOptions = [
    "Relationship Issues",
    "Self-Worth",
    "Toxic Patterns",
    "Fear of Abandonment",
    "Parenting Challenges",
    "Other"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (formData.whatsapp.length !== 10) {
      setPhoneError('Please enter a valid 10-digit number');
      setLoading(false);
      return;
    }

    try {
      // Step 1 — Save to Sheet with Pending
      const sheetResult = await saveToSheet('1-on-1 Coaching', {
        name: formData.name,
        email: formData.email,
        whatsapp: formData.whatsapp,
        plan: currentPlan.value,
        price: `₹${currentPlan.price}`,
        struggling: formData.struggling,
        description: formData.description
      });

      const rowIndex = sheetResult?.rowIndex;

      // Step 2 — Razorpay
      await initiatePayment({
        amount: currentPlan.priceInPaise,
        name: formData.name,
        email: formData.email,
        contact: formData.whatsapp,
        description: `${currentPlan.value} — ₹${currentPlan.price}`,
        onSuccess: async (paymentId) => {
          // Step 3 — Update sheet
          if (rowIndex) {
            await updatePaymentStatus('1-on-1 Coaching', rowIndex, paymentId);
          }
          // Step 4 — Success page
          navigate('/success', {
            state: {
              name: formData.name,
              type: currentPlan.value,
              amount: `₹${currentPlan.price}`,
              paymentId: paymentId
            }
          });
        },
        onFailure: () => {
          setLoading(false);
          alert('Payment cancelled. Your details have been saved. Please try again.');
        }
      });

    } catch (err) {
      console.error(err);
      setLoading(false);
      alert('Something went wrong. Please try again.');
    }
  };

  const inputStyle = {
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(250, 168, 25, 0.3)',
    background: 'rgba(255,255,255,0.8)',
    fontSize: '16px',
    outline: 'none',
    color: '#333333',
    width: '100%',
    fontFamily: 'Poppins, sans-serif'
  };

  return (
    <>
      {/* Loading Overlay — payment processing */}
      {loading && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(255, 251, 240, 0.95)',
          backdropFilter: 'blur(8px)',
          zIndex: 99999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '24px'
        }}>
          {/* Spinner */}
          <div style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            border: '4px solid rgba(250,168,25,0.2)',
            borderTop: '4px solid #FAA819',
            animation: 'spin 1s linear infinite'
          }} />

          <h2 style={{
            fontSize: '24px',
            color: '#333333',
            textAlign: 'center',
            fontWeight: 700
          }}>
            Payment is Processing...
          </h2>

          <p style={{
            fontSize: '16px',
            color: '#666',
            textAlign: 'center',
            lineHeight: 1.7,
            maxWidth: '320px'
          }}>
            Please do not press Back or Refresh.<br />
            This will only take a few seconds.
          </p>

          {/* Animated dots */}
          <div style={{
            display: 'flex',
            gap: '8px'
          }}>
            {[0, 1, 2].map(i => (
              <div key={i} style={{
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#FAA819',
                animation: `bounce 1.2s ease-in-out ${i * 0.2}s infinite`
              }} />
            ))}
          </div>

          <style>{`
      @keyframes spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes bounce {
        0%, 100% { transform: translateY(0); opacity: 0.4; }
        50% { transform: translateY(-10px); opacity: 1; }
      }
    `}</style>
        </div>
      )}
      <div style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        minHeight: '100vh',
        background: 'transparent',
        position: 'relative',
        zIndex: 1
      }}>
        <div className="container">
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>

            {/* Dynamic Header */}
            <div style={{ textAlign: 'center', marginBottom: '48px' }}>
              <span className="badge">1-on-1 Coaching</span>
              <h1 style={{
                fontSize: '28px',
                marginTop: '16px',
                color: '#333333'
              }}>
                {currentPlan.value}
              </h1>
              <div style={{
                display: 'inline-block',
                marginTop: '12px',
                padding: '8px 24px',
                background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                borderRadius: '50px',
                color: '#1A0D00',
                fontWeight: 700,
                fontSize: '20px'
              }}>
                ₹{currentPlan.price}
              </div>
            </div>

            <GlassCard style={{
              padding: '48px',
              backdropFilter: 'blur(32px)',
              background: 'rgba(255,255,255,0.6)'
            }}>
              <form onSubmit={handleSubmit} style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '24px'
              }}>

                {/* Plan Selector */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', color: '#333333', fontWeight: 600 }}>
                    Select Your Plan
                  </label>
                  <select
                    value={selectedPlan}
                    onChange={e => setSelectedPlan(e.target.value)}
                    style={{
                      ...inputStyle,
                      appearance: 'none',
                      cursor: 'pointer',
                      border: '1.5px solid #FAA819',
                      fontWeight: 600
                    }}
                  >
                    {plans.map((plan, i) => (
                      <option key={i} value={plan.value}>{plan.label}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', color: '#333333', fontWeight: 600 }}>Full Name</label>
                  <input
                    required type="text" placeholder="Your Full Name"
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', color: '#333333', fontWeight: 600 }}>Email Address</label>
                  <input
                    required type="email" placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', color: '#333333', fontWeight: 600 }}>WhatsApp Number</label>
                  <input
                    required
                    type="tel"
                    placeholder="Enter 10-digit number"
                    value={formData.whatsapp}
                    maxLength={10}
                    onChange={e => {
                      const val = e.target.value.replace(/\D/g, '');
                      setFormData({ ...formData, whatsapp: val });
                      if (val.length > 0 && val.length < 10) {
                        setPhoneError('Please enter a valid 10-digit number');
                      } else {
                        setPhoneError('');
                      }
                    }}
                    style={inputStyle}
                  />
                  {phoneError && (
                    <p style={{
                      fontSize: '12px',
                      color: '#EF4444',
                      marginTop: '4px',
                      marginBottom: '0'
                    }}>
                      {phoneError}
                    </p>
                  )}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', color: '#333333', fontWeight: 600 }}>
                    What are you struggling with?
                  </label>
                  <select
                    required
                    value={formData.struggling}
                    onChange={e => setFormData({ ...formData, struggling: e.target.value })}
                    style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                  >
                    <option value="" disabled>Select an option</option>
                    {struggleOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  <label style={{ fontSize: '14px', color: '#333333', fontWeight: 600 }}>
                    Brief Description
                  </label>
                  <textarea
                    required rows="4"
                    placeholder="Tell us about your current situation..."
                    value={formData.description}
                    onChange={e => setFormData({ ...formData, description: e.target.value })}
                    style={{ ...inputStyle, resize: 'none' }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary"
                  style={{
                    width: '100%',
                    padding: '18px',
                    fontSize: '17px',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '10px',
                    opacity: loading ? 0.7 : 1,
                    cursor: loading ? 'not-allowed' : 'pointer'
                  }}
                >
                  {loading ? 'Processing...' : (
                    <>
                      Proceed to Payment — ₹{currentPlan.price}
                      <ChevronRight size={20} />
                    </>
                  )}
                </button>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  color: '#666',
                  fontSize: '13px'
                }}>
                  <ShieldCheck size={16} color="#E8841A" />
                  <span>100% Secure Payment via Razorpay</span>
                </div>

              </form>
            </GlassCard>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneOnOneForm;