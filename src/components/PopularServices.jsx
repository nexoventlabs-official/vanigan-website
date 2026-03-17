import React from 'react';
import { ShoppingBag, HeartPulse, Activity, Globe, ArrowRight } from 'lucide-react';
import './PopularServices.css';

const PopularServices = () => {
  const services = [
    { id: 1, name: 'Emart', icon: <ShoppingBag size={32} />, color: '#8b5cf6', listings: '2K+' },
    { id: 2, name: 'Hospitals', icon: <HeartPulse size={32} />, color: '#ef4444', listings: '850+' },
    { id: 3, name: 'Corona', icon: <Activity size={32} />, color: '#10b981', listings: '120+' },
    { id: 4, name: 'Online Service', icon: <Globe size={32} />, color: '#3b82f6', listings: '4K+' }
  ];

  return (
    <section className="section services-section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Popular <span className="gradient-text">Services</span> Near You</h2>
          <p className="section-subtitle">Discover top-rated services in your area</p>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card glass-panel animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div 
                className="service-icon-wrapper"
                style={{ backgroundColor: `${service.color}15`, color: service.color }}
              >
                {service.icon}
              </div>
              <h3 className="service-name">{service.name}</h3>
              <p className="service-listings">{service.listings} Listings</p>
              <a href={`/subcategory/${service.name}`} className="service-link">
                View Listings <ArrowRight size={16} />
              </a>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <a href="/all-category" className="btn btn-secondary view-all-btn">
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default PopularServices;
