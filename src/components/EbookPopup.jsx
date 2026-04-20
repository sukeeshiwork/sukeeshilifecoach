import React, { useState, useEffect } from 'react';
import { X, Check } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const EbookPopup = () => {
  const { isMobile } = useWindowSize();
  const [isVisible, setIsVisible] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const EBOOK_SHEET_URL = import.meta.env.VITE_EBOOK_SHEET_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setPhoneError('Please enter a valid 10-digit number');
      return;
    }

    await fetch(EBOOK_SHEET_URL, {
      method: 'POST',
      body: JSON.stringify({
        name: name,
        whatsapp: phone,
        ebookTitle: 'Free Ebook'
      })
    });

    setIsSuccess(true);
  };

  useEffect(() => {
    // Don't show if already shown this session
    if (sessionStorage.getItem('ebookPopupShown')) return;

    // Trigger 1: 3 second timer
    const timer = setTimeout(() => {
      setIsVisible(true);
      sessionStorage.setItem('ebookPopupShown', 'true');
    }, 3000);

    // Trigger 2: scroll past hero
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.8) {
        if (!sessionStorage.getItem('ebookPopupShown')) {
          setIsVisible(true);
          sessionStorage.setItem('ebookPopupShown', 'true');
          clearTimeout(timer);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  const inputStyle = {
    padding: '14px 16px',
    borderRadius: '12px',
    border: '1px solid rgba(250,168,25,0.3)',
    background: 'rgba(255,255,255,0.9)',
    fontSize: '15px',
    width: '100%',
    outline: 'none',
    fontFamily: 'inherit',
    color: '#1A1A1A',
    marginBottom: '16px',
    display: 'block'
  };

  return (
    // OVERLAY
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: 'rgba(0,0,0,0.5)',
        backdropFilter: 'blur(4px)',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px'
      }}
      onClick={(e) => {
        // Close on overlay click
        if (e.target === e.currentTarget) handleClose();
      }}
    >
      {/* POPUP CARD */}
      <div className="ebook-popup-card" style={{
        maxWidth: '460px',
        width: '100%',
        background: 'rgba(255,255,255,0.97)',
        backdropFilter: 'blur(20px)',
        borderRadius: isMobile ? '20px' : '24px',
        border: '1px solid rgba(250,168,25,0.3)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.2)',
        padding: isMobile ? '32px 24px' : '40px 36px',
        position: 'relative',
        animation: 'popupIn 0.4s ease'
      }}>

        {/* CLOSE BUTTON */}
        <button
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            background: 'rgba(0,0,0,0.06)',
            border: 'none',
            borderRadius: '50%',
            width: '32px',
            height: '32px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: '#666'
          }}
        >
          <X size={16} />
        </button>

        {!isSuccess ? (
          // FORM VIEW
          <>
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <span style={{
                background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                color: '#1A0D00',
                borderRadius: '50px',
                padding: '6px 18px',
                fontSize: '12px',
                fontWeight: 700,
                display: 'inline-block',
                marginBottom: '16px'
              }}>
                🎁 FREE GIFT FOR YOU
              </span>
              <h2 style={{
                fontSize: isMobile ? '22px' : '26px',
                color: '#1A1A1A',
                marginBottom: '10px',
                lineHeight: 1.2
              }}>
                Get Your Free Ebook
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#666666',
                lineHeight: 1.6
              }}>
                Discover the 5 hidden patterns keeping you stuck
                in toxic relationships — and how to break free.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <input
                required
                type="text"
                placeholder="Your Full Name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={inputStyle}
                onFocus={e => e.target.style.border = '1px solid #FAA819'}
                onBlur={e => e.target.style.border = '1px solid rgba(250,168,25,0.3)'}
              />
              <input
                required
                type="tel"
                placeholder="Enter 10-digit WhatsApp number"
                value={phone}
                maxLength={10}
                onChange={e => {
                  const val = e.target.value.replace(/\D/g, '');
                  setPhone(val);
                  if (val.length > 0 && val.length < 10) {
                    setPhoneError('Please enter a valid 10-digit number');
                  } else {
                    setPhoneError('');
                  }
                }}
                style={inputStyle}
                onFocus={e => e.target.style.border = '1px solid #FAA819'}
                onBlur={e => e.target.style.border = '1px solid rgba(250,168,25,0.3)'}
              />
              {phoneError && (
                <p style={{
                  fontSize: '12px',
                  color: '#EF4444',
                  marginTop: '4px',
                  marginBottom: '16px'
                }}>
                  {phoneError}
                </p>
              )}
              <button
                type="submit"
                style={{
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                  color: '#1A0D00',
                  fontWeight: 700,
                  fontSize: '16px',
                  border: 'none',
                  borderRadius: '50px',
                  cursor: 'pointer',
                  fontFamily: 'inherit',
                  transition: 'all 0.3s ease'
                }}
              >
                Get My Free Ebook →
              </button>
              <p style={{
                fontSize: '12px',
                color: '#999',
                textAlign: 'center',
                marginTop: '12px'
              }}>
                🔒 No spam. Unsubscribe anytime.
              </p>
            </form>
          </>
        ) : (
          // SUCCESS VIEW
          <>
            <div style={{ textAlign: 'center' }}>
              <div style={{
                width: '70px',
                height: '70px',
                background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 20px'
              }}>
                <Check size={32} color="white" />
              </div>

              <img
                src="/ebook-cover.jpg"
                alt="Free Ebook"
                style={{
                  width: '140px',
                  height: 'auto',
                  borderRadius: '12px',
                  boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
                  margin: '0 auto 24px',
                  display: 'block'
                }}
                onError={e => e.target.style.display = 'none'}
              />

              <h2 style={{
                fontSize: '24px',
                color: '#1A1A1A',
                marginBottom: '10px'
              }}>
                Your Ebook is Ready! 🎉
              </h2>
              <p style={{
                fontSize: '14px',
                color: '#666',
                marginBottom: '24px',
                lineHeight: 1.6
              }}>
                Thank you! Click below to download your free guide.
              </p>

              <a
                href="https://drive.google.com/file/d/12ou4x_DElWQsZjLB41-VCiO7g72ITFsv/view"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '16px',
                  background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                  color: '#1A0D00',
                  fontWeight: 700,
                  fontSize: '16px',
                  borderRadius: '50px',
                  textAlign: 'center',
                  textDecoration: 'none'
                }}
              >
                ⬇ Download Free Ebook
              </a>

              <p
                onClick={handleClose}
                style={{
                  fontSize: '13px',
                  color: '#999',
                  marginTop: '16px',
                  cursor: 'pointer',
                  textDecoration: 'underline'
                }}
              >
                Close
              </p>
            </div>
          </>
        )}
      </div>

      {/* Popup animation */}
      <style>{`
        @keyframes popupIn {
          from { opacity: 0; transform: scale(0.85) translateY(20px); }
          to { opacity: 1; transform: scale(1) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default EbookPopup;
