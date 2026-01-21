import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden px-8">
      <div className="z-10 text-center max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-6"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-primary">Est. 2024 — Digital Atelier</span>
        </motion.div>
        
        <h1 className="text-[12vw] md:text-[8vw] leading-[0.9] font-display italic">
          <motion.span 
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="block"
          >
            Sculpting
          </motion.span>
          <motion.span 
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6 }}
            className="block ml-[20%]"
          >
            Eternity.
          </motion.span>
        </h1>
      </div>

      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0 flex items-center justify-center"
      >
        <div className="relative w-full h-[80vh] md:w-2/3 md:h-[70vh]">
          <img 
            src="<span className="block"><img src="https://images.pexels.com/photos/28870734/pexels-photo-28870734.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A captivating abstract view of a sunset reflecting on water with a unique artistic form." loading="lazy" /><a href="https://www.pexels.com/photo/surreal-sunset-reflection-with-abstract-form-28870734/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Steve Johnson on Pexels</a></span>" 
            alt="Hero Background" 
            className="w-full h-full object-cover grayscale brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/20" />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <div className="w-px h-24 bg-gradient-to-b from-transparent via-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
