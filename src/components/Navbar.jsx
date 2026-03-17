import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-content">
        <Link to="/" className="brand">
          <img src="/images/logo.png" alt="Vanigan Logo" className="brand-logo" />
        </Link>

        {/* Desktop Menu */}
        <div className="nav-links desktop-only">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#about" className="nav-link">About Us</a>
          <a href="#events" className="nav-link">Events</a>
          <a href="#contact" className="nav-link">Contact</a>
        </div>

        <div className="nav-actions desktop-only">
          <Link to="/login" className="nav-link">Login</Link>
          <button className="btn btn-primary">Join With Us</button>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <Link to="/" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
        <a href="#about" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>About Us</a>
        <a href="#events" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Events</a>
        <a href="#contact" className="mobile-link" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
        <div className="mobile-actions">
          <Link to="/login" className="btn btn-secondary w-full" onClick={() => setIsMobileMenuOpen(false)}>Login</Link>
          <br /><br />
          <button className="btn btn-primary w-full" onClick={() => setIsMobileMenuOpen(false)}>Join With Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
