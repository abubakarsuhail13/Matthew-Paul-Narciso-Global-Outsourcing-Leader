
import React from 'react';
import { Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-deepBlue text-white py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left">
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <Globe className="w-8 h-8 text-brand-teal" />
            <span className="text-xl font-bold tracking-tight">
              MATTHEW PAUL <span className="text-brand-teal">NARCISO</span>
            </span>
          </div>
          
          <div className="flex space-x-8 text-sm font-bold text-gray-400 uppercase tracking-widest">
            <a href="#about" className="hover:text-white transition-colors">Privacy</a>
            <a href="#services" className="hover:text-white transition-colors">Terms</a>
            <a 
              href="https://www.linkedin.com/in/matthewnarciso" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-white transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5">
          <p className="text-sm text-gray-500 mb-4 md:mb-0">
            © {new Date().getFullYear()} Matthew Paul Narciso. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 group">
            <span className="text-xs text-gray-500 uppercase font-bold tracking-widest">Powered by</span>
            <a 
              href="http://www.nexaforgetech.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-xs font-bold text-brand-teal hover:text-brand-gold transition-colors underline decoration-brand-teal/30 underline-offset-4"
            >
              Nexaforge Technologies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
