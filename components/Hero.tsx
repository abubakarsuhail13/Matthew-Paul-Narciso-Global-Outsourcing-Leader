
import React from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden gradient-hero">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-brand-teal/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-gold/5 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Abstract Map Overlay */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" preserveAspectRatio="none">
          <path d="M0,500 Q250,300 500,500 T1000,500" stroke="#1ABC9C" strokeWidth="2" fill="none" />
          <path d="M0,400 Q250,200 500,400 T1000,400" stroke="#F1C40F" strokeWidth="1" fill="none" />
          <circle cx="200" cy="450" r="4" fill="#F1C40F" />
          <circle cx="500" cy="380" r="6" fill="#1ABC9C" />
          <circle cx="800" cy="480" r="4" fill="#F1C40F" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 leading-tight">
          Matthew Paul Narciso
          <span className="block text-brand-teal mt-2">Transforming Global Outsourcing</span>
        </h1>
        <p className="text-lg md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto font-serif italic">
          Helping Healthcare, Biopharma, Tech, AI, and Logistics firms build and manage workforces across continents.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <a
            href="#about"
            className="group flex items-center bg-brand-teal hover:bg-teal-600 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105"
          >
            Explore Expertise
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="px-8 py-4 rounded-full border border-white/30 text-white font-bold hover:bg-white/10 transition-all"
          >
            Connect With Matthew
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-white w-8 h-8 opacity-50" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
