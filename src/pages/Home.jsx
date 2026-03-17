import React from 'react';
import Hero from '../components/Hero';
import PopularServices from '../components/PopularServices';
import Features from '../components/Features';
import HowItWorks from '../components/HowItWorks';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <PopularServices />
      <Features />
      <HowItWorks />
    </div>
  );
};

export default Home;
