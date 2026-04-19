import { FaInstagram, FaYoutube, FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { Heart, Infinity } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const Footer = ({ content }) => {
  const { isMobile, isTablet } = useWindowSize();
  const styles = `
    .footer {
      background: rgba(10, 10, 10, 0.98);
      padding: 80px 0 40px;
      border-top: 1px solid rgba(250, 168, 25, 0.2);
    }
    .footer-grid {
      display: grid;
      grid-template-columns: 2fr 1fr 1fr 1.5fr;
      gap: 60px;
      margin-bottom: 60px;
    }
    .footer-brand .logo {
      font-family: 'Poppins', sans-serif;
      font-size: 28px;
      margin-bottom: 20px;
      display: block;
      color: #FFFFFF;
    }
    .footer-tagline {
      color: #CCCCCC;
      margin-bottom: 24px;
      max-width: 250px;
      font-size: 15px;
    }
    .social-links {
      display: flex;
      gap: 16px;
    }
    .social-link {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 18px;
      color: #CCCCCC;
      transition: all 0.3s ease;
    }
    .social-link:hover {
      background: var(--gradient-button);
      color: #1A0D00;
      transform: translateY(-3px);
    }
    .footer-title {
      font-family: 'Poppins', sans-serif;
      font-size: 18px;
      font-weight: 600;
      margin-bottom: 24px;
      color: #FFFFFF;
    }
    .footer-links {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .footer-link {
      color: #AAAAAA;
      transition: color 0.3s ease;
      font-size: 15px;
    }
    .footer-link:hover {
      color: #E8841A;
    }
    .footer-bottom {
      padding-top: 40px;
      border-top: 1px solid rgba(255, 255, 255, 0.05);
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: #888888;
      font-size: 14px;
    }
    .footer-bottom .heart-icon {
      color: #E8841A;
      display: inline-flex;
      vertical-align: middle;
      margin: 0 4px;
    }
    @media (max-width: 1024px) {
      .footer-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 640px) {
      .footer-grid { grid-template-columns: 1fr; gap: 40px; }
      .footer-bottom { flex-direction: column; gap: 20px; text-align: center; }
    }
  `;

  return (
    <footer className="footer" style={{ 
      paddingBottom: isMobile ? '100px' : '40px' 
    }}>
      <style>{styles}</style>
      <div className="container">
        <div className="footer-grid" style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : isTablet ? 'repeat(2, 1fr)' : '2fr 1fr 1fr 1.5fr',
          gap: isMobile ? '40px' : isTablet ? '40px' : '60px'
        }}>
          <div className="footer-brand">
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: '22px',
              color: '#ffffff',
              marginBottom: '20px'
            }}>
              <Infinity
                size={28}
                style={{
                  background: 'linear-gradient(135deg, #FAA819, #E8841A)',
                  borderRadius: '50%',
                  padding: '4px',
                  color: '#1A0D00',
                  flexShrink: 0
                }}
              />
              Sukeeshi
            </div>
            <p className="footer-tagline">Breaking patterns, building lives. NLP Practitioner & Relationship Coach.</p>
            <div className="social-links">
              <a href="https://www.instagram.com/lifecoach_sukeeshi" className="social-link" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              <a href="https://youtube.com/@securerelationshipwithsukeeshi" className="social-link" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
              <a href="https://wa.me/919099031325" className="social-link" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              <a href="https://www.facebook.com/share/1cgxNqoW41/" className="social-link" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <div className="footer-links">
              <NavLink to="/" className="footer-link">Home</NavLink>
              <NavLink to="/about" className="footer-link">About</NavLink>
              <NavLink to="/services" className="footer-link">Services</NavLink>
              <NavLink to="/contact" className="footer-link">Contact</NavLink>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Services</h4>
            <div className="footer-links">
              <NavLink to="/one-on-one" className="footer-link">1-on-1 Coaching</NavLink>
              <NavLink to="/parenting" className="footer-link">Parenting</NavLink>
              <NavLink to="/clarity-call" className="footer-link">Clarity Call</NavLink>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Connect</h4>
            <div className="footer-links">
              <a href="mailto:sukeeshi.work@gmail.com" className="footer-link">Email</a>
              <a href="https://wa.me/919099031325" target="_blank" rel="noopener noreferrer" className="footer-link">WhatsApp</a>
              <span className="footer-link">Ahmedabad, Gujarat, India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{
          flexDirection: isMobile ? 'column' : 'row',
          gap: isMobile ? '20px' : '0',
          textAlign: isMobile ? 'center' : 'left'
        }}>
          <p>© 2026 Life Coach by Sukeeshi. All rights reserved.</p>
          <p>Made with <span className="heart-icon"><Heart size={14} fill="#E8841A" /></span> for your healing journey.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
