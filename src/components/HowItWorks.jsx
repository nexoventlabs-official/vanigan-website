import React from 'react';
import { UserPlus, Briefcase, TrendingUp, Archive } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      name: 'Create an account',
      desc: 'Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.',
      icon: <UserPlus size={28} />
    },
    {
      id: 2,
      name: 'Add your business',
      desc: 'Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.',
      icon: <Briefcase size={28} />
    },
    {
      id: 3,
      name: 'Get more leads',
      desc: 'Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.',
      icon: <TrendingUp size={28} />
    },
    {
      id: 4,
      name: 'Archive goals',
      desc: 'Fusce imperdiet ullamcorper metus eu fringilla. from around the world from our partners and friends.',
      icon: <Archive size={28} />
    }
  ];

  return (
    <section className="section how-it-works" id="how-it-works">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">How It <span className="gradient-text">Works</span></h2>
          <p className="section-subtitle">Explore some of the best tips from around the world from our partners and friends.</p>
        </div>

        <div className="steps-container">
          <div className="steps-line"></div>
          
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className="step-item animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="step-number-container">
                   <div className="step-number glass-panel">
                      {step.id}
                   </div>
                   <div className="step-icon">
                      {step.icon}
                   </div>
                </div>
                
                <h3 className="step-name">{step.name}</h3>
                <p className="step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
