import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: '01',
    name: 'V-01 SHELL JACKET',
    price: '€540',
    category: 'Outerwear',
    image: '<span className="block"><img src="https://images.pexels.com/photos/8107948/pexels-photo-8107948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Stylish woman in cyberpunk sunglasses and leather jacket illuminated by neon lights, embodying futuristic fashion." loading="lazy" /><a href="https://www.pexels.com/photo/woman-wearing-black-jacket-looking-down-8107948/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Mikhail Nilov on Pexels</a></span>'
  },
  {
    id: '02',
    name: 'CARGO SYSTEM PANT',
    price: '€320',
    category: 'Legwear',
    image: '<span className="block"><img src="https://images.pexels.com/photos/27969611/pexels-photo-27969611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="A young adult in futuristic attire, featuring a tactical mask and tech gear, posing confidently." loading="lazy" /><a href="https://www.pexels.com/photo/a-man-in-a-black-and-white-outfit-with-goggles-27969611/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Eden FC on Pexels</a></span>'
  },
  {
    id: '03',
    name: 'ATELIER VEST [REV-2]',
    price: '€280',
    category: 'Utility',
    image: '<span className="block"><img src="https://images.pexels.com/photos/7688547/pexels-photo-7688547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Model in cyberpunk attire with prosthetic arm and futuristic sunglasses, evoking a high-tech, digital ambience." loading="lazy" /><a href="https://www.pexels.com/photo/man-in-bulletproof-vest-with-sunglasses-on-face-7688547/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Yaroslav Shuraev on Pexels</a></span>'
  },
  {
    id: '04',
    name: 'VOID BASE LAYER',
    price: '€110',
    category: 'Essentials',
    image: '<span className="block"><img src="https://images.pexels.com/photos/15573565/pexels-photo-15573565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Stainless steel handrail casting shadows in a minimalist black and white style." loading="lazy" /><a href="https://www.pexels.com/photo/corrimao-de-metal-em-preto-e-branco-com-luz-do-sol-refletindo-na-parede-15573565/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Ruan Richard Rodrigues on Pexels</a></span>'
  }
];

const ProductGrid = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border border border-border">
      {products.map((product, idx) => (
        <motion.div 
          key={product.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="group relative bg-bg p-6 hover:bg-surface transition-colors cursor-pointer"
        >
          <div className="aspect-[3/4] overflow-hidden mb-6 bg-surface">
            <img 
              src={product.image} 
              alt={product.name}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
            />
          </div>
          <div className="flex justify-between items-start">
            <div>
              <p className="mono text-[10px] text-secondary mb-1 uppercase tracking-tighter">{product.category} // {product.id}</p>
              <h3 className="font-display text-lg leading-tight group-hover:text-accent transition-colors">{product.name}</h3>
            </div>
            <p className="mono text-sm">{product.price}</p>
          </div>
          <div className="mt-6 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="mono text-[10px] text-accent">AVAILABLE_NOW</span>
            <button className="text-xs border-b border-accent pb-1">ADD_TO_CART</button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ProductGrid;
