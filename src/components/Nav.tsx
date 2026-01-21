import React from 'react';
import { motion } from 'framer-motion';

const Nav = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-xl font-display tracking-widest font-bold">AETHER</div>
      
      <div className="hidden md:flex space-x-12 text-sm uppercase tracking-widest font-medium">
        {['Work', 'Studio', 'Archive', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="group relative overflow-hidden"
          >
            <span className="block transition-transform duration-500 group-hover:-translate-y-full">{item}</span>
            <span className="absolute top-full left-0 block transition-transform duration-500 group-hover:-translate-y-full">{item}</span>
          </a>
        ))}
      </div>

      <button className="md:hidden">
        <div className="w-6 h-0.5 bg-white mb-1.5" />
        <div className="w-6 h-0.5 bg-white" />
      </button>
    </motion.nav>
  );
};

export default Nav;
