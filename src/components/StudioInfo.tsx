import React from 'react';
import { motion } from 'framer-motion';

const StudioInfo = () => {
  return (
    <section id="studio" className="py-32 bg-muted/30 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        <div className="order-2 md:order-1">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative"
          >
            <img 
              src="<span className="block"><img src="https://images.pexels.com/photos/8740555/pexels-photo-8740555.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Black chair casting shadows on a concrete wall showcasing minimalist design and light play." loading="lazy" /><a href="https://www.pexels.com/photo/a-chair-near-the-concrete-wall-8740555/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Аlex Ugolkov on Pexels</a></span>" 
              alt="Studio"
              className="w-full grayscale brightness-75 border-l-4 border-accent"
            />
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent flex items-center justify-center p-8 hidden lg:flex">
              <p className="text-bg font-black leading-tight text-xl uppercase tracking-tighter">
                EST. <br />MMXXIV
              </p>
            </div>
          </motion.div>
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-6">Our Philosophy</h2>
          <h3 className="text-6xl font-black uppercase tracking-tighter mb-12 leading-[0.9]">
            The Ethics of <br /><span className="text-accent">Hard Edge</span>
          </h3>
          <div className="space-y-6 text-lg text-fg/70 font-light leading-relaxed">
            <p>
              MONOLITH is an architectural studio dedicated to the exploration of tectonic honesty. We believe that space is not just defined by its boundaries, but by the weight and presence of the materials used to create it.
            </p>
            <p>
              Our process is reductive. We strip away the ornamental to reveal the structural soul of every project. Concrete, steel, and glass are our vernacular—materials that age with dignity and speak of permanence in a transitory world.
            </p>
          </div>
          
          <div className="mt-12 grid grid-cols-2 gap-8 pt-12 border-t border-muted">
            <div>
              <p className="text-3xl font-black text-accent">12+</p>
              <p className="text-xs uppercase tracking-widest text-fg/40">Awards Won</p>
            </div>
            <div>
              <p className="text-3xl font-black text-accent">45</p>
              <p className="text-xs uppercase tracking-widest text-fg/40">Global Projects</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StudioInfo;
