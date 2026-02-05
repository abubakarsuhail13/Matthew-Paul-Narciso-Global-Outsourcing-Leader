
import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { ServiceCard as IServiceCard } from '../types';

const ServiceCard: React.FC<{ service: IServiceCard }> = ({ service }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="relative h-96 [perspective:1000px] cursor-pointer group"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
        {/* Front */}
        <div className="absolute inset-0 backface-hidden bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center">
          <div className="p-4 bg-brand-teal/10 rounded-2xl text-brand-teal mb-6">
            {service.icon}
          </div>
          <h4 className="text-xl font-bold text-brand-deepBlue mb-4">{service.title}</h4>
          <p className="text-gray-500 font-serif">{service.description}</p>
          <div className="mt-8 text-brand-teal font-bold text-xs uppercase tracking-widest group-hover:text-brand-gold transition-colors">
            See Achievements
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 backface-hidden bg-brand-deepBlue p-8 rounded-2xl shadow-xl [transform:rotateY(180deg)] flex flex-col justify-center text-white">
          <h4 className="text-xl font-bold text-brand-teal mb-4">Case Study / Result</h4>
          <p className="text-gray-300 font-serif leading-relaxed italic">
            "{service.caseStudy}"
          </p>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="text-brand-gold text-xs font-bold uppercase tracking-widest">Global Expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-teal tracking-[0.2em] uppercase mb-4">What We Deliver</h2>
          <h3 className="text-4xl font-bold text-brand-deepBlue">Strategic Workforce Solutions</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service, idx) => (
            <ServiceCard key={idx} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
