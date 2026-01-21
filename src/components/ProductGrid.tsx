import React from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: '01',
    name: 'V-01 SHELL JACKET',
    price: '€540',
    category: 'Outerwear',
    image: 'https://images.pexels.com/photos/8107948/pexels-photo-8107948.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
    id: '02',
    name: 'CARGO SYSTEM PANT',
    price: '€320',
    category: 'Legwear',
    image: 'https://images.pexels.com/photos/27969611/pexels-photo-27969611.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
    id: '03',
    name: 'ATELIER VEST [REV-2]',
    price: '€280',
    category: 'Utility',
    image: 'https://images.pexels.com/photos/7688547/pexels-photo-7688547.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
  },
  {
    id: '04',
    name: 'VOID BASE LAYER',
    price: '€110',
    category: 'Essentials',
    image: 'https://images.pexels.com/photos/15573565/pexels-photo-15573565.jpeg?auto=compress&cs=tinysrgb&h=650&w=940'
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