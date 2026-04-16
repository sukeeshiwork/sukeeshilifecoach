import React from 'react';
import { FaInstagram, FaYoutube, FaWhatsapp, FaEnvelope, FaMapMarkerAlt ,FaFacebook} from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';

const Contact = () => {
  const { isMobile, isTablet } = useWindowSize();

  const contactCards = [
    {
      icon: <FaWhatsapp />,
      title: 'WhatsApp',
      description: 'Chat directly for quick answers and support',
      btnText: 'Message Now',
      link: 'https://wa.me/91XXXXXXXXXX',
      isPrimary: true
    },
    {
      icon: <FaInstagram />,
      title: 'Instagram',
      description: 'Follow for daily insights on relationships & healing',
      btnText: 'Follow Us',
      link: 'https://instagram.com/lifecoach_sukeeshi',
      isPrimary: false
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      description: 'For detailed queries and collaboration',
      btnText: 'Email Us',
      link: 'mailto:contact@lifecoachbysukeshi.com',
      isPrimary: false
    },
    {
      icon: <FaFacebook />,
      title: 'Facebook',
      description: 'Follow for daily insights on relationships & healing',
      btnText: 'Follow Us',
      link: 'https://facebook.com/lifecoach_sukeeshi',
      isPrimary: false
    }
  ];

  return (
    <div style={{
      minHeight: '100vh',
      background: 'transparent',
      position: 'relative',
      zIndex: 1
    }}>
      <div className="container" style={{
        paddingTop: '120px', 
        paddingBottom: isMobile ? '40px' : '80px',
        marginTop: isMobile ? '120px' : '0'  // ← ADD THIS
      }}>

        {/* Header */}
        <div style={{
          textAlign: 'center', 
          maxWidth: '700px', 
          margin: '0 auto', 
          marginBottom: isMobile ? '40px' : '64px'
        }}>
          <span className="badge">Get In Touch</span>
          <h1 style={{
            fontSize: isMobile ? '32px' : isTablet ? '42px' : '52px', 
            color: '#1A1A1A', 
            marginTop: '16px', 
            marginBottom: '20px'
          }}>
            Let's Start Your Journey
          </h1>
          <p style={{
            fontSize: isMobile ? '16px' : '18px', 
            color: '#555555', 
            lineHeight: 1.6
          }}>
            Have questions? Want to see if we're a fit? Reach out through any of these channels, and I'll get back to you within 24 hours.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="contact-cards-grid" style={{
          display: 'grid',
          gridTemplateColumns: isTablet ? '1fr' : 'repeat(3, 1fr)',
          gap: isMobile ? '16px' : '30px',
          marginBottom: isMobile ? '40px' : '80px'
        }}>
          {contactCards.map((card, idx) => (
            <div
              key={idx}
              className="glass-card"
              style={{ padding: '36px 32px' }}
            >
              <div style={{
                width: '56px',
                height: '56px',
                borderRadius: '50%',
                background: 'rgba(250, 168, 25, 0.12)',
                border: '1px solid rgba(250, 168, 25, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#E8841A',
                fontSize: '24px',
                marginBottom: '20px'
              }}>
                {card.icon}
              </div>

              <h3 style={{
                fontSize: '20px',
                fontWeight: 700,
                color: '#1A1A1A',
                marginBottom: '10px',
                textAlign: 'left'
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: '#666666',
                lineHeight: '1.6',
                marginBottom: '28px'
              }}>
                {card.description}
              </p>

              <a
                href={card.link}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: '12px 28px',
                  borderRadius: '50px',
                  fontSize: '15px',
                  fontWeight: 600,
                  transition: 'all 0.3s ease',
                  background: card.isPrimary ? 'linear-gradient(135deg, #FAA819, #E8841A)' : 'transparent',
                  color: card.isPrimary ? '#1A0D00' : '#E8841A',
                  border: card.isPrimary ? 'none' : '1.5px solid #E8841A',
                  boxShadow: card.isPrimary ? '0 4px 15px rgba(232, 132, 26, 0.3)' : 'none',
                  textDecoration: 'none'
                }}
              >
                {card.btnText}
              </a>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Contact;