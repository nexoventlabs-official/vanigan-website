import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Facebook, Twitter, Instagram, Youtube, MessageCircle } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col brand-col">
            <Link to="/" className="brand">
              <Building2 size={32} className="brand-icon" />
              <span className="brand-text">Vanigan AI</span>
            </Link>
            <p className="footer-desc">
              India's Leading AI-Powered Business Intelligence Platform. 
              Revolutionizing how businesses discover, connect, and grow through 
              cutting-edge artificial intelligence and smart search technology.
            </p>
            <div className="social-links">
              <a href="https://www.facebook.com/vanigan.org" target="_blank" rel="noopener noreferrer" className="social-link"><Facebook size={20} /></a>
              <a href="https://twitter.com/TNVS2020" target="_blank" rel="noopener noreferrer" className="social-link"><Twitter size={20} /></a>
              <a href="#" className="social-link"><Instagram size={20} /></a>
              <a href="https://www.youtube.com/channel/UCGGPiZyq4RAOEeohzYhfmfg" target="_blank" rel="noopener noreferrer" className="social-link"><Youtube size={20} /></a>
              <a href="https://api.whatsapp.com/send?phone=919150967888" target="_blank" rel="noopener noreferrer" className="social-link"><MessageCircle size={20} /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#events">Events</a></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/register">Join With Us</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Legal</h4>
            <ul className="footer-links">
              <li><Link to="/terms">Terms & Conditions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Contact Info</h4>
            <ul className="footer-contact">
              <li><strong>Phone:</strong> +91 91509 67888</li>
              <li><strong>Email:</strong> support@vanigan.me</li>
              <li><strong>Address:</strong> Tamilnadu Vanigargalin Sangamam</li>
            </ul>
            <div className="app-download mt-4">
               <a href="https://play.google.com/store/apps/details?id=io.vanigan.ai" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                  Download App
               </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} <a href="https://www.vanigan.me" target="_blank" rel="noopener noreferrer">Vanigan.me</a>. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
