import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Vesper House",
    category: "Architecture",
    image: "<span className="block"><img src="https://images.pexels.com/photos/10347251/pexels-photo-10347251.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Striking modern architecture showcasing geometric patterns and concrete design in an urban setting." loading="lazy" /><a href="https://www.pexels.com/photo/metal-modern-architecture-on-concrete-pavement-10347251/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Evan Velez Saxer on Pexels</a></span>",
    size: "col-span-2 md:col-span-1"
  },
  {
    title: "Liquid State",
    category: "Digital Art",
    image: "<span className="block"><img src="https://images.pexels.com/photos/8168564/pexels-photo-8168564.png?auto=compress&cs=tinysrgb&h=650&w=940" alt="Abstract artwork featuring intricate textures and dynamic wave patterns creating a flowing design." loading="lazy" /><a href="https://www.pexels.com/photo/abstract-digital-illustration-8168564/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Giuseppe DiDio on Pexels</a></span>",
    size: "col-span-2"
  },
  {
    title: "Monolith",
    category: "Design",
    image: "<span className="block"><img src="https://images.pexels.com/photos/29399428/pexels-photo-29399428.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Elegant bathroom featuring a sleek white basin and marble tiles for a luxurious look." loading="lazy" /><a href="https://www.pexels.com/photo/modern-bathroom-design-with-white-basin-and-marble-tiles-29399428/" target="_blank" rel="noopener noreferrer" className="text-[10px] text-slate-400 block mt-0.5">Photo by Pușcaș Adryan on Pexels</a></span>",
    size: "col-span-2 md:col-span-1"
  }
];

const WorkGrid = () => {
  return (
    <section id="work" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20">
        <h2 className="text-5xl md:text-7xl font-display">Selected<br/>Works</h2>
        <p className="max-w-xs text-primary mt-8 md:mt-0">
          A collection of fragments, captured in the intersection of digital precision and organic chaos.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 md:gap-16">
        {projects.map((project, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1 }}
            className={`group relative cursor-pointer ${project.size}`}
          >
            <div className="overflow-hidden aspect-[4/5] md:aspect-auto md:h-[600px]">
              <motion.img 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.8, ease: [0.33, 1, 0.68, 1] }}
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="mt-6 flex justify-between items-start">
              <div>
                <h3 className="text-2xl font-display italic">{project.title}</h3>
                <span className="text-xs uppercase tracking-widest text-primary/60">{project.category}</span>
              </div>
              <span className="text-sm font-light">0{idx + 1}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WorkGrid;
