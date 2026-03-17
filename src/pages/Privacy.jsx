import React from 'react';

const Privacy = () => {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', color: 'var(--text-main)' }}>
      <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      
      <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>1. Information We Collect</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          We collect information you provide directly to us when joining Vanigan AI, such as name, email, phone number, and business details. 
          We also collect data automatically related to your usage of our AI search and application functions.
        </p>

        <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>2. How We Use Your Information</h2>
        <ul style={{ color: 'var(--text-muted)', paddingLeft: '1.5rem', marginBottom: '2rem', listStyleType: 'disc', lineHeight: '1.8' }}>
          <li>To provide, maintain, and improve our AI business intelligence platform</li>
          <li>To index and display your business in local service queries</li>
          <li>To facilitate one-click connections (calls, messages, quotes)</li>
          <li>To communicate with you regarding updates from Tamilnadu Vanigargalin Sangamam</li>
        </ul>

        <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>3. Data Security</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, or destruction.
        </p>

        <h2 style={{ marginBottom: '1rem', color: 'white' }}>4. Contact Us</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          If you have any questions about this Privacy Policy, please contact us at info@vanigan.me.
        </p>

        <p style={{ color: 'var(--text-muted)', marginTop: '3rem', fontSize: '0.9rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Privacy;
