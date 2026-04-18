import React from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingButtons from './components/FloatingButtons';
import Home from './pages/Home';
import EbookPopup from './components/EbookPopup';
import Relationship from './pages/Relationship';
import Parenting from './pages/Parenting';
import ClarityCall from './pages/ClarityCall';
import ClarityCallForm from './pages/ClarityCallForm';
import About from './pages/About';
import Contact from './pages/Contact';
import OneOnOne from './pages/OneOnOne';
import OneOnOneForm from './pages/OneOnOneForm';
import content from './data/content.json';
import useWindowSize from './hooks/useWindowSize';
import Ebooks from './pages/Ebooks';
import Success from './pages/Success';

function App() {
  useWindowSize();

  return (
    <div className="App" style={{
      minHeight: '100vh',
      position: 'relative',
      paddingBottom: '0'
    }}>


      {/* Mesh Gradient Background */}
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: `
    radial-gradient(ellipse at 0% 0%, rgba(250, 168, 25, 0.7) 0%, transparent 50%),
    radial-gradient(ellipse at 100% 0%, rgba(255, 220, 80, 0.5) 0%, transparent 50%),
    radial-gradient(ellipse at 100% 100%, rgba(250, 168, 25, 0.7) 0%, transparent 50%),
    radial-gradient(ellipse at 0% 100%, rgba(255, 200, 40, 0.4) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 50%, rgba(255, 240, 160, 0.3) 0%, transparent 60%)
  `,
        backgroundColor: '#FFFBF0',
        pointerEvents: 'none',
        zIndex: 0,
      }} />
      {/* Blob TOP LEFT */}
      {/* <div style={{
        position: 'fixed',
        top: '-200px',
        left: '-200px',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(ellipse at center, rgba(250, 168, 25, 0.9) 0%, rgba(250, 168, 25, 0.6) 45%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} /> */}

      {/* Blob BOTTOM RIGHT */}
      {/* <div style={{
        position: 'fixed',
        bottom: '-200px',
        right: '-200px',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(ellipse at center, rgba(250, 168, 25, 0.9) 0%, rgba(250, 168, 25, 0.6) 45%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
        zIndex: 0,
      }} /> */}

      <ScrollToTop />
      <Navbar />
      <EbookPopup />
      <div style={{ position: 'relative', zIndex: 1 }}></div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/relationship" element={<Relationship />} />
        <Route path="/one-on-one" element={<OneOnOne />} />
        <Route path="/one-on-one/form" element={<OneOnOneForm />} />
        <Route path="/parenting" element={<Parenting />} />
        <Route path="/clarity-call" element={<ClarityCall />} />
        <Route path="/ebooks" element={<Ebooks />} />
        <Route path="/clarity-call/form" element={<ClarityCallForm />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer content={content.footer} />
      <FloatingButtons />

    </div>
  );
}

export default App;
