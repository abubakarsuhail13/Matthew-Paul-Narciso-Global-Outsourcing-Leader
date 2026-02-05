
import React, { useEffect, useState } from 'react';
import { STATS } from '../constants';

const CountUp: React.FC<{ end: number; suffix: string }> = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end]);

  return <span>{count}{suffix}</span>;
};

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-teal/20 rounded-2xl blur-xl group-hover:bg-brand-teal/30 transition-all duration-700 animate-pulse"></div>
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800&h=1000"
                alt="Matthew Paul Narciso - Professional Portrait"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-deepBlue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="absolute -bottom-6 -right-6 bg-brand-gold p-8 rounded-2xl shadow-xl hidden md:block transform transition-transform duration-500 group-hover:-translate-y-2">
              <p className="text-brand-deepBlue font-bold text-xl">6+ Years</p>
              <p className="text-brand-deepBlue/80 text-sm font-medium">Leading SuperStaff Globally</p>
            </div>
          </div>

          <div className="relative">
            <h2 className="text-sm font-bold text-brand-teal tracking-[0.2em] uppercase mb-4">The Visionary Leader</h2>
            <h3 className="text-4xl font-bold text-brand-deepBlue mb-6">Expertise Driven by Global Insight</h3>
            <p className="text-lg text-gray-600 mb-6 font-serif leading-relaxed">
              As a global outsourcing leader at <span className="text-brand-teal font-semibold">SuperStaff</span>, Matthew Paul Narciso has spent over half a decade redefining how global workforces are managed and scaled. 
            </p>
            <p className="text-lg text-gray-600 mb-8 font-serif leading-relaxed">
              His approach integrates cutting-edge technology with deep market insights, providing personalized, client-focused strategies that bridge the gap between business needs and human potential.
            </p>

            <ul className="space-y-4 mb-10">
              {[
                "Global experience across 8+ diverse markets",
                "Specialized in Healthcare, AI, and Logistics staffing",
                "Proven track record in revenue and operational growth",
                "Commitment to innovative, technology-led solutions"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center text-brand-deepBlue font-medium group/item">
                  <div className="w-2 h-2 bg-brand-gold rounded-full mr-3 transition-transform group-hover/item:scale-150"></div>
                  {item}
                </li>
              ))}
            </ul>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 border-t border-gray-100 pt-10">
              {STATS.map((stat, idx) => (
                <div key={idx} className="text-center group/stat">
                  <p className="text-3xl font-bold text-brand-teal mb-1 transition-colors group-hover/stat:text-brand-gold">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </p>
                  <p className="text-xs font-bold text-gray-500 uppercase tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
