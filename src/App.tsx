import React, { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import Tools from './components/sections/Tools';
import Resources from './components/sections/Resources';
import Testimonials from './components/sections/Testimonials';
import Contact from './components/sections/Contact';
import CTA from './components/sections/CTA';

function App() {
  useEffect(() => {
    // Update title
    document.title = 'AbhiSri Financial Services';
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Testimonials />
        <Tools />
        <Resources />
        <Contact />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;