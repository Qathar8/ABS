import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Packages />
      <Testimonials />
      <Contact />
    </div>
  );
};

export default Home;