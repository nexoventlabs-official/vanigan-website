import React from 'react';
import { Smartphone, CheckCircle, Zap } from 'lucide-react';
import './Features.css';

const Features = () => {
  return (
    <section className="section features-section" id="about">
      <div className="container">
        <div className="features-grid">
          <div className="features-content">
            <h2 className="section-title text-left">
              Why Choose <span className="gradient-text">Vanigan AI?</span>
            </h2>
            <p className="features-desc text-muted">
              Unlike ChatGPT, Vanigan integrates business directories for real-world B2B networking. Upgrade your B2B operations with AI + local intelligence!
            </p>

            <div className="feature-list">
              <div className="feature-item glass-panel animate-fade-in">
                <div className="feature-icon" style={{background: 'rgba(79, 70, 229, 0.2)', color: 'var(--primary)'}}>
                  <Zap size={24} />
                </div>
                <div className="feature-text">
                  <h3>AI + Local Search Combo</h3>
                  <p>Smart real-world B2B networking combined with deep local directories.</p>
                </div>
              </div>

              <div className="feature-item glass-panel animate-fade-in" style={{animationDelay: '0.1s'}}>
                <div className="feature-icon" style={{background: 'rgba(16, 185, 129, 0.2)', color: '#10b981'}}>
                  <CheckCircle size={24} />
                </div>
                <div className="feature-text">
                  <h3>No Hidden Fees</h3>
                  <p>Transparent pricing with free listing options for local businesses.</p>
                </div>
              </div>

              <div className="feature-item glass-panel animate-fade-in" style={{animationDelay: '0.2s'}}>
                <div className="feature-icon" style={{background: 'rgba(236, 72, 153, 0.2)', color: '#ec4899'}}>
                  <Smartphone size={24} />
                </div>
                <div className="feature-text">
                  <h3>One-Click Connections</h3>
                  <p>Call, message, or request quotes instantly across all platforms.</p>
                </div>
              </div>
            </div>
            
            <a href="https://play.google.com/store/apps/details?id=io.vanigan.ai" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-4">
               Download Vanigan AI Now
            </a>
          </div>

          <div className="features-image-container">
            <div className="features-glow"></div>
            <img src="/images/app_mockup.png" alt="Vanigan AI App" className="features-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
