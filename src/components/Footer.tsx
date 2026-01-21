import React from 'react';

const Footer = () => {
  return (
    <footer className="py-20 px-8 border-t border-secondary/30 mt-32">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="text-[10vw] md:text-[6vw] font-display leading-[1] italic">
            Say Hello.
          </div>
          
          <div className="grid grid-cols-2 gap-8">
            <div className="flex flex-col space-y-4">
              <span className="text-xs uppercase tracking-widest text-primary">Inquiries</span>
              <a href="mailto:studio@aether.com" className="hover:text-accent transition-colors">studio@aether.com</a>
              <a href="#" className="hover:text-accent transition-colors">Twitter</a>
              <a href="#" className="hover:text-accent transition-colors">Instagram</a>
            </div>
            <div className="flex flex-col space-y-4 text-right md:text-left">
              <span className="text-xs uppercase tracking-widest text-primary">Studio</span>
              <p className="text-sm leading-relaxed">
                1240 Aether Way<br/>
                Digital Void, 00000
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-32 pt-8 border-t border-secondary/10 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-primary/40">
          <span>&copy; 2024 Aether Atelier</span>
          <span className="mt-4 md:mt-0">Built for the future of digital expression</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
