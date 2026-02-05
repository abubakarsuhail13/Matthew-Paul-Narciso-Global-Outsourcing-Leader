
import React from 'react';
import { TIMELINE } from '../constants';
import { Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-24 bg-brand-neutral overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-teal tracking-[0.2em] uppercase mb-4 text-center">Journey of Impact</h2>
          <h3 className="text-4xl font-bold text-brand-deepBlue text-center">Career Milestones</h3>
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-200 hidden md:block"></div>

          <div className="space-y-12">
            {TIMELINE.map((item, idx) => (
              <div key={idx} className={`flex flex-col md:flex-row items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full md:w-auto mb-8 md:mb-0">
                  <div className={`p-8 bg-white rounded-2xl shadow-sm border border-gray-100 transition-all hover:shadow-xl hover:-translate-y-1 ${idx % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-brand-teal font-bold text-sm tracking-wider uppercase">{item.period}</span>
                      <Briefcase className="w-5 h-5 text-brand-gold" />
                    </div>
                    <h4 className="text-2xl font-bold text-brand-deepBlue">{item.company}</h4>
                    <p className="text-brand-teal font-semibold mb-4">{item.role}</p>
                    <ul className="space-y-2">
                      {item.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="text-gray-600 text-sm flex items-start">
                          <span className="text-brand-gold mr-2">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="relative z-10 w-12 h-12 flex items-center justify-center bg-brand-deepBlue rounded-full border-4 border-white shadow-lg shrink-0">
                  <div className="w-2 h-2 bg-brand-teal rounded-full animate-ping"></div>
                </div>

                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
