import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Vortex House",
    category: "Residential",
    image: "https://images.pexels.com/photos/11254959/pexels-photo-11254959.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    width: "md:col-span-2"
  },
  {
    title: "Obsidian Gallery",
    category: "Cultural",
    image: "https://images.pexels.com/photos/29150799/pexels-photo-29150799.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    width: "md:col-span-1"
  },
  {
    title: "Echo Pavilion",
    category: "Public",
    image: "https://images.pexels.com/photos/3410514/pexels-photo-3410514.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    width: "md:col-span-1"
  },
  {
    title: "Concrete Rift",
    category: "Office",
    image: "https://images.pexels.com/photos/31438131/pexels-photo-31438131.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    width: "md:col-span-2"
  }
];

const ProjectGrid = () => {
  return (
    <section id="projects" className="py-32 bg-bg px-6">
      <div className="container mx-auto">
        <div className="flex justify-between items-end mb-20 border-b border-muted pb-8">
          <div>
            <h2 className="text-sm uppercase tracking-[0.3em] text-accent mb-4">Selected Works</h2>
            <p className="text-5xl font-black uppercase tracking-tighter">The Portfolios</p>
          </div>
          <p className="hidden md:block max-w-xs text-fg/50 text-sm italic">
            Exploring the intersection of gravity, light, and mass through rigorous material honesty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group relative overflow-hidden cursor-pointer ${project.width}`}
            >
              <div className="aspect-[4/5] md:aspect-auto md:h-[600px] overflow-hidden">
                <motion.img 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.8 }}
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-accent text-xs font-mono mb-2 uppercase tracking-widest">{project.category}</p>
                <h3 className="text-3xl font-black uppercase tracking-tighter">{project.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;