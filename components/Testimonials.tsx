
import React from 'react';
import { Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const logos = [
    { name: 'HealthCorp', src: 'https://picsum.photos/id/101/200/100' },
    { name: 'TechSync', src: 'https://picsum.photos/id/102/200/100' },
    { name: 'BioGen', src: 'https://picsum.photos/id/103/200/100' },
    { name: 'LogiLink', src: 'https://picsum.photos/id/104/200/100' },
  ];

  const testimonials = [
    {
      quote: "Matthew's strategic vision was instrumental in our scaling efforts. His knowledge of the Asian BPO market is unparalleled.",
      author: "Sarah Jenkins",
      role: "COO, Global Health Systems"
    },
    {
      quote: "Professional, data-driven, and genuinely committed to client success. A true leader in the outsourcing space.",
      author: "David Chen",
      role: "VP of Operations, TechFlow"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-teal tracking-[0.2em] uppercase mb-4">Trusted Worldwide</h2>
          <h3 className="text-4xl font-bold text-brand-deepBlue">Partner Success Stories</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {testimonials.map((t, idx) => (
            <div key={idx} className="bg-brand-neutral p-10 rounded-3xl relative">
              <Quote className="absolute top-6 left-6 w-12 h-12 text-brand-teal/10" />
              <p className="text-xl text-brand-deepBlue font-serif italic mb-8 relative z-10">
                "{t.quote}"
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-brand-gold rounded-full flex items-center justify-center text-brand-deepBlue font-bold mr-4">
                  {t.author[0]}
                </div>
                <div>
                  <p className="font-bold text-brand-deepBlue">{t.author}</p>
                  <p className="text-gray-500 text-sm">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-16">
          <p className="text-center text-xs font-bold text-gray-400 uppercase tracking-[0.3em] mb-10">Global Industry Partners</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
            {logos.map((logo, idx) => (
              <img key={idx} src={logo.src} alt={logo.name} className="h-8 md:h-12 w-auto object-contain" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
