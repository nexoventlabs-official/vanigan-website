import React from 'react';

const Terms = () => {
  return (
    <div className="container" style={{ paddingTop: '100px', paddingBottom: '100px', color: 'var(--text-main)' }}>
      <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '2rem' }}>Terms & Conditions</h1>
      
      <div className="glass-panel" style={{ padding: '3rem', borderRadius: '16px' }}>
        <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>1. Introduction</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          Welcome to Vanigan AI. By accessing or using our platform, you agree to be bound by these Terms & Conditions. 
          Please read them carefully before using our services. Our services are operated by Vanigan.me and Tamilnadu Vanigargalin Sangamam.
        </p>

        <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>2. Use of Service</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          You must be at least 18 years old to use our services. You are responsible for ensuring that all information you provide is accurate and up to date.
          The AI-powered search results and business directory information are provided "as is" and intended to connect users with businesses in Tamilnadu.
        </p>

        <h2 style={{ marginBottom: '1rem', color: 'var(--text-main)' }}>3. Business Listings</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          By adding a business, you confirm you have the authority to do so. We reserve the right to verify, edit, or remove listings to maintain the quality of the directory.
        </p>

        <h2 style={{ marginBottom: '1rem', color: 'white' }}>4. Disclaimer</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          Vanigan AI is not liable for transactions or disputes between users and listed businesses. We serve as a discovery and networking platform.
        </p>

        <p style={{ color: 'var(--text-muted)', marginTop: '3rem', fontSize: '0.9rem' }}>
          Last updated: {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default Terms;
