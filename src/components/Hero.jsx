import React from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-bg-glow"></div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="badge animate-fade-in">
            <span className="badge-dot"></span>
            India's Leading AI Platform
          </div>
          <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Find the Best Services From Your <span className="gradient-text">Area & District</span>
          </h1>
          <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Revolutionizing how businesses discover, connect, and grow through cutting-edge artificial intelligence and smart search technology.
          </p>

          <div className="search-box animate-fade-in glass-panel" style={{ animationDelay: '0.3s' }}>
            <div className="search-input-group border-r">
              <Search className="search-icon" size={20} />
              <input type="text" placeholder="What are you looking for?" className="search-input" />
            </div>
            <div className="search-input-group">
              <MapPin className="search-icon" size={20} />
              <input type="text" placeholder="Location" className="search-input" />
            </div>
            <button className="btn btn-primary search-btn">
              Search Now
            </button>
          </div>

          <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div className="stat-item">
              <h3 className="stat-value">21K+</h3>
              <p className="stat-label">Services</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-value">46K+</h3>
              <p className="stat-label">Users</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h3 className="stat-value">2.9K+</h3>
              <p className="stat-label">Organizers</p>
            </div>
          </div>
        </div>
        
        <div className="hero-image-wrapper animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="img-glow"></div>
          <img src="/images/hero_banner_network.png" alt="Business Network" className="hero-image" />
          
          <div className="floating-card glass-panel card-1">
            <div className="card-icon" style={{background: '#4f46e5'}}><Search size={16} color="white" /></div>
            <div>
               <h4>Smart Search</h4>
               <p>AI Powered Results</p>
            </div>
          </div>
          <div className="floating-card glass-panel card-2">
            <div className="card-icon" style={{background: '#e11d48'}}><MapPin size={16} color="white" /></div>
            <div>
               <h4>Local Directory</h4>
               <p>Tamilnadu Verified</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
