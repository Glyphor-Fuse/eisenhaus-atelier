import React from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import WorkGrid from './components/WorkGrid';
import Footer from './components/Footer';
import { motion, AnimatePresence } from 'framer-motion';

const App = () => {
  return (
    <div className="relative min-h-screen">
      <Nav />
      <main>
        <Hero />
        <WorkGrid />
      </main>
      <Footer />
      
      {/* Aesthetic Grain Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
    </div>
  );
};

export default App;
