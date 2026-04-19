import React from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Infinity } from 'lucide-react';
import useWindowSize from '../hooks/useWindowSize';

const Navbar = () => {
  const { isTablet } = useWindowSize();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleServicesClick = (e) => {
    e.preventDefault();
    setMenuOpen(false);
    if (location.pathname === '/') {
      document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
      }, 500);
    }
  };

  const styles = `
    .navbar {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      z-index: 1000;
      transition: all 0.3s ease;
      padding: 10px 0;
      background: rgba(255, 251, 240, 0.92);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255, 210, 80, 0.25);
    }
    .navbar.scrolled {
      background: rgba(255, 251, 240, 0.97);
      backdrop-filter: blur(20px);
      -webkit-backdrop-filter: blur(20px);
      padding: 8px 0;
      border-bottom: 1px solid rgba(255, 210, 80, 0.35);
    }
    .nav-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 60px;
    }
    .logo {
      font-family: 'Poppins', sans-serif;
      font-size: 24px;
      font-weight: 700;
      color: #1A1A1A;
      text-decoration: none;
    }
    .nav-links {
      display: flex;
      gap: 32px;
      align-items: center;
    }
    .nav-link {
      font-size: 15px;
      font-weight: 500;
      color: #555555;
      transition: all 0.3s ease;
      position: relative;
      text-decoration: none;
      cursor: pointer;
      background: none;
      border: none;
    }
    .nav-link:hover {
      color: var(--accent-primary);
    }
    .nav-link.active {
      color: var(--accent-primary);
    }
    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: -4px;
      left: 0;
      width: 100%;
      height: 2px;
      background: var(--accent-primary);
    }
    .nav-cta {
      padding: 10px 24px;
      font-size: 14px;
    }
    .hamburger {
      display: none;
    }
    .mobile-menu {
      display: none;
    }
    @media (max-width: 1024px) {
      .nav-links { display: none; }
      .hamburger { 
        display: flex !important; 
        background: none;
        border: none;
        cursor: pointer;
        color: #1A1A1A;
        padding: 8px;
        z-index: 9999;
      }
      .mobile-menu {
        display: flex;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        background: rgba(255, 251, 240, 0.98);
        backdrop-filter: blur(20px);
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 32px;
        z-index: 9998;
      }
      .mobile-menu a {
        font-size: 22px;
        font-weight: 600;
        color: #1A1A1A;
        text-decoration: none;
      }
      .mobile-menu .btn-primary {
        width: fit-content !important;
        padding: 12px 40px !important;
        font-size: '16px' !important;
      }
      .logo {
        font-size: 20px;
      }
    }
  `;

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <style>{styles}</style>
      <div className="nav-container">

        {/* Logo */}
        <NavLink to="/" className="logo" style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          fontFamily: "'Poppins', sans-serif"
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
        </NavLink>

        {/* Desktop Nav Links */}
        {!isTablet && (
          <div className="nav-links">
            <NavLink to="/" className="nav-link" end>Home</NavLink>
            <NavLink to="/about" className="nav-link">About</NavLink>

            <a
              href="#services"
              className="nav-link"
              onClick={handleServicesClick}
            >
              Services
            </a>
            <NavLink to="/parenting" className="nav-link">Parenting</NavLink>
            <NavLink to="/ebooks" className="nav-link">Ebooks</NavLink>
            <NavLink to="/contact" className="nav-link">Contact</NavLink>
            <NavLink to="/clarity-call" className="btn-primary nav-cta">
              Book Call
            </NavLink>
          </div>
        )}

        {/* Hamburger */}
        {isTablet && (
          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#1A1A1A',
              zIndex: 9999,
              display: 'flex',
              padding: '8px'
            }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}

        {/* Mobile Menu */}
        {isTablet && menuOpen && (
          <div className="mobile-menu">
            <NavLink
              to="/"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '22px', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none' }}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '22px', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none' }}
            >
              About
            </NavLink>

            <a
              href="#services"
              onClick={handleServicesClick}
              style={{ fontSize: '22px', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none' }}
            >
              Services
            </a>
            <NavLink
              to="/parenting"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '22px', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none' }}
            >
              Parenting
            </NavLink>
            <NavLink
              to="/ebooks"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '22px', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none' }}
            >
              Ebooks
            </NavLink>
            <NavLink
              to="/contact"
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: '22px', fontWeight: 600, color: '#1A1A1A', textDecoration: 'none' }}
            >
              Contact
            </NavLink>
            <NavLink
              to="/clarity-call"
              className="btn-primary"
              onClick={() => setMenuOpen(false)}
            >
              Book Call
            </NavLink>
          </div>
        )}

      </div>
    </nav>
  );
};

export default Navbar;