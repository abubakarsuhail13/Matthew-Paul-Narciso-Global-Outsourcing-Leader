
import React, { useState } from 'react';
import { REGIONS } from '../constants';
import { MapPin, Info } from 'lucide-react';

const GlobalReach: React.FC = () => {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <section id="reach" className="py-24 bg-brand-deepBlue text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold text-brand-teal tracking-[0.2em] uppercase mb-4">Operational Footprint</h2>
          <h3 className="text-4xl font-bold text-white mb-6">A Global Delivery Network</h3>
          <p className="text-gray-400 max-w-2xl mx-auto font-serif italic">
            Seamlessly managing workforces across the US, Latin America, Europe, and Asia to ensure 24/7 operational resilience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Map Visualization */}
          <div className="lg:col-span-2 relative">
            <div className="aspect-[16/9] bg-white/5 rounded-3xl relative flex items-center justify-center overflow-hidden border border-white/10">
              {/* Abstract World Map SVG */}
              <svg viewBox="0 0 800 400" className="w-full h-full opacity-30 fill-white">
                <path d="M100,100 Q200,50 300,100 T500,100 T700,150" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
                <path d="M150,250 Q250,300 350,250 T550,280 T750,220" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="5,5" />
              </svg>
              
              {/* Interactive Markers */}
              {REGIONS.map((region, idx) => (
                <button
                  key={region.id}
                  onClick={() => setSelectedRegion(region.id)}
                  className={`absolute p-2 rounded-full transition-all transform hover:scale-125 group ${
                    selectedRegion === region.id ? 'bg-brand-gold text-brand-deepBlue scale-110 ring-4 ring-brand-gold/20' : 'bg-brand-teal text-white'
                  }`}
                  style={{
                    left: `${15 + (idx * 10)}%`, // Simplified positioning for visualization
                    top: `${20 + (idx * 7) % 60}%`
                  }}
                >
                  <MapPin className="w-5 h-5" />
                  <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-white text-brand-deepBlue text-xs font-bold py-1 px-3 rounded shadow-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
                    {region.name}
                  </span>
                </button>
              ))}
              
              <div className="absolute bottom-6 left-6 text-xs text-gray-500 font-bold uppercase tracking-widest">
                Interactive Global Operations Map
              </div>
            </div>
          </div>

          {/* Region Details */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold text-brand-teal flex items-center">
              <Info className="w-5 h-5 mr-2" />
              Regional Impact
            </h4>
            <div className="space-y-4">
              {REGIONS.map((region) => (
                <div 
                  key={region.id}
                  className={`p-6 rounded-2xl border transition-all cursor-pointer ${
                    selectedRegion === region.id 
                      ? 'bg-white/10 border-brand-teal' 
                      : 'bg-transparent border-white/10 hover:border-white/30'
                  }`}
                  onClick={() => setSelectedRegion(region.id)}
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-lg">{region.name}</span>
                    <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${selectedRegion === region.id ? 'bg-brand-gold text-brand-deepBlue' : 'bg-white/10 text-gray-400'}`}>
                      {region.id}
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 font-serif leading-relaxed">
                    {region.stats}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReach;
