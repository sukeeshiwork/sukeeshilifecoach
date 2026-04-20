import React, { useEffect } from 'react';
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { CheckCircle, MessageCircle, Home } from 'lucide-react';

const Success = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const state = location.state;

  // ✅ Direct access block — no state means direct URL access
  useEffect(() => {
    if (!state || !state.paymentId) {
      navigate('/', { replace: true });
    }
  }, [state, navigate]);

  if (!state || !state.paymentId) return null;

  const whatsappMessage = encodeURIComponent(
    `Hi Sukeeshi! 👋
    
    I just completed my booking. Here are my details:
    
    *Name:* ${state.name}
    *Service:* ${state.type}
    *Amount Paid:* ${state.amount}
    *Payment ID:* ${state.paymentId}
    
    Looking forward to our session! 🙏
    Please attach your payment screenshot`
  );

  const whatsappUrl = `https://wa.me/919099031325?text=${whatsappMessage}`;

  return (
    <div className="about-page">
      <section style={{
        paddingTop: '140px',
        paddingBottom: '80px',
        minHeight: '100vh',
        background: 'transparent'
      }}>
        <div className="container">
          <div style={{
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'center'
          }}>

            {/* Success Icon */}
            <div style={{
              width: '80px',
              height: '80px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #FAA819, #E8841A)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 32px',
              boxShadow: '0 8px 30px rgba(232,132,26,0.3)'
            }}>
              <CheckCircle size={40} color="white" />
            </div>

            {/* Heading */}
            <h1 style={{
              fontSize: '36px',
              color: '#333333',
              marginBottom: '16px',
              textAlign: 'center'
            }}>
              Payment Successful! 🎉
            </h1>

            <p style={{
              fontSize: '18px',
              color: '#666',
              marginBottom: '40px',
              lineHeight: 1.7
            }}>
              Thank you, <strong style={{ color: '#333333' }}>{state.name}</strong>!<br />
              Your <strong style={{ color: '#E8841A' }}>{state.type}</strong> has been booked.
            </p>

            {/* Details Card */}
            <div style={{
              background: 'rgba(255,255,255,0.6)',
              backdropFilter: 'blur(16px)',
              border: '1px solid rgba(250,168,25,0.25)',
              borderRadius: '20px',
              padding: '32px',
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              <h3 style={{
                fontSize: '18px',
                color: '#333333',
                marginBottom: '20px',
                textAlign: 'center'
              }}>
                Booking Details
              </h3>

              {[
                { label: 'Name', value: state.name },
                { label: 'Service', value: state.type },
                { label: 'Amount Paid', value: state.amount },
                { label: 'Payment ID', value: state.paymentId },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '12px 0',
                  borderBottom: i < 3 ? '1px solid rgba(250,168,25,0.1)' : 'none'
                }}>
                  <span style={{ fontSize: '14px', color: '#888' }}>{item.label}</span>
                  <span style={{
                    fontSize: '14px',
                    fontWeight: 600,
                    color: '#333333',
                    maxWidth: '60%',
                    textAlign: 'right',
                    wordBreak: 'break-all'
                  }}>
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Next Steps */}
            <div style={{
              background: 'rgba(250,168,25,0.08)',
              border: '1px solid rgba(250,168,25,0.2)',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '32px',
              textAlign: 'left'
            }}>
              <h4 style={{
                fontSize: '16px',
                fontWeight: 700,
                color: '#333333',
                marginBottom: '12px',
                textAlign: 'center'
              }}>
                What happens next?
              </h4>
              <p style={{
                fontSize: '14px',
                color: '#555',
                lineHeight: 1.8,
                textAlign: 'center',
                margin: 0
              }}>
                Sukeshi will reach out to you on WhatsApp<br />
                within <strong>24 hours</strong> to confirm your session slot.
              </p>
            </div>

            {/* Buttons */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '16px'
            }}>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '16px',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  textDecoration: 'none',
                  width: '100%'
                }}
              >
                <MessageCircle size={20} />
                Send Confirmation on WhatsApp
              </a>

              <div style={{
                marginTop: '16px',
                padding: '14px 20px',
                background: 'rgba(250,168,25,0.08)',
                border: '1px solid rgba(250,168,25,0.2)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'flex-start',
                gap: '10px'
              }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>📸</span>
                <p style={{
                  fontSize: '13px',
                  color: '#666',
                  margin: 0,
                  lineHeight: 1.6,
                  textAlign: 'left'
                }}>
                  <strong style={{ color: '#333333' }}>Please take a screenshot</strong> of your payment
                  and attach it along with your WhatsApp message
                  as proof of payment. This will help us confirm
                  your booking faster. 🙏
                </p>
              </div>

              <a
                href="https://chat.whatsapp.com/CXjHyZQArA6FmEwlifJyyZ?mode=gi_t"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  background: '#25D366',
                  color: 'white',
                  fontWeight: 700,
                  fontSize: '16px',
                  padding: '16px 32px',
                  borderRadius: '50px',
                  textDecoration: 'none'
                }}
              >
                <MessageCircle size={20} />
                Join Our WhatsApp Community
              </a>

              <NavLink to="/" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                background: 'transparent',
                color: '#E8841A',
                fontWeight: 600,
                fontSize: '15px',
                padding: '14px 32px',
                borderRadius: '50px',
                textDecoration: 'none',
                border: '1.5px solid #E8841A'
              }}>
                <Home size={18} />
                Back to Home
              </NavLink>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default Success;