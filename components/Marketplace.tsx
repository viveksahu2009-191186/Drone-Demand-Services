
import React, { useState } from 'react';
import { MOCK_DRONES, CATEGORY_ICONS } from '../constants';
import { DroneCategory } from '../types';
import { Search, MapPin, Star, Filter, ShieldCheck, CheckCircle2, Info, Loader2, Sparkles } from 'lucide-react';

export const Marketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<DroneCategory | 'All'>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [isDispatching, setIsDispatching] = useState<string | null>(null);

  const filteredDrones = MOCK_DRONES.filter(drone => {
    const matchesCategory = selectedCategory === 'All' || drone.category === selectedCategory;
    const matchesSearch = drone.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         drone.operatorName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         drone.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleBook = (id: string) => {
    setIsDispatching(id);
    setTimeout(() => {
      setIsDispatching(null);
      alert("AI Dispatch Engine has calculated your mission requirements. Operator notified and airspace pre-cleared via LAANC.");
    }, 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 border-b border-slate-800 pb-12">
        <div>
          <h2 className="text-4xl font-orbitron font-bold text-white mb-2">Service Network</h2>
          <p className="text-slate-500 max-w-xl">
            Browse our global fleet of specialized industrial drones. Every operator is 
            vetted for regulatory compliance and mission safety.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
          <div className="relative group flex-1 sm:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500 group-focus-within:text-blue-400 transition-colors" />
            <input 
              type="text"
              placeholder="Mission type, model, or location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all shadow-inner"
            />
          </div>
          <button className="flex items-center justify-center gap-2 px-6 py-3 bg-slate-900 border border-slate-800 rounded-xl text-slate-200 hover:bg-slate-800 hover:border-slate-700 transition-all">
            <Filter className="w-5 h-5" /> More Filters
          </button>
        </div>
      </div>

      {/* Categories */}
      <div className="flex flex-wrap gap-3 mb-12">
        <button
          onClick={() => setSelectedCategory('All')}
          className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all border ${
            selectedCategory === 'All' 
              ? 'bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-600/20' 
              : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600'
          }`}
        >
          All Fleets
        </button>
        {Object.values(DroneCategory).map(cat => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-sm transition-all border ${
              selectedCategory === cat 
                ? 'bg-blue-600 text-white border-blue-500 shadow-xl shadow-blue-600/20' 
                : 'bg-slate-900 text-slate-400 border-slate-800 hover:border-slate-600'
            }`}
          >
            {CATEGORY_ICONS[cat]} {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDrones.map(drone => (
          <div key={drone.id} className="group bg-slate-900/50 backdrop-blur-md rounded-[2rem] overflow-hidden border border-slate-800/50 hover:border-blue-500/30 transition-all flex flex-col">
            <div className="relative h-60 overflow-hidden">
              <img 
                src={drone.image} 
                alt={drone.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute top-4 left-4 flex gap-2">
                <div className="bg-slate-950/90 backdrop-blur px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-[10px] font-bold text-white uppercase tracking-wider">{drone.complianceLevel} Compliance</span>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-emerald-500 text-white px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-lg shadow-emerald-500/20">
                Verified
              </div>
              <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                 <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/5 flex items-center gap-1.5">
                   <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                   <span className="text-sm font-black text-white">{drone.rating}</span>
                   <span className="text-slate-500 text-[10px] font-bold ml-1">124 Missions</span>
                 </div>
                 <div className="px-3 py-1 rounded-lg bg-blue-600/20 text-blue-400 border border-blue-500/30 text-[10px] font-bold">
                    {drone.status}
                 </div>
              </div>
            </div>
            
            <div className="p-8 flex-1 flex flex-col">
              <div className="flex items-center gap-2 text-slate-500 mb-3">
                <div className="p-1.5 bg-slate-800 rounded-lg">
                  {CATEGORY_ICONS[drone.category]}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.2em]">{drone.category} / {drone.model}</span>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{drone.name}</h3>
              <p className="text-slate-500 text-sm mb-6 line-clamp-2 leading-relaxed">{drone.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {drone.services.map((service, sidx) => (
                  <span key={sidx} className="px-2.5 py-1 bg-slate-800/50 text-slate-400 rounded-lg text-[10px] font-medium border border-slate-700/50 flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500" /> {service}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center justify-between pt-6 border-t border-slate-800/50">
                <div>
                  <div className="flex items-center gap-1 text-[10px] font-bold text-slate-500 uppercase mb-1">
                    <Info className="w-3 h-3" /> Transp. Pricing
                  </div>
                  <span className="text-3xl font-orbitron font-black text-white">${drone.hourlyRate}</span>
                  <span className="text-slate-500 text-xs ml-1">/ hr</span>
                </div>
                <button 
                  onClick={() => handleBook(drone.id)}
                  disabled={isDispatching !== null}
                  className="px-6 py-3 bg-white text-slate-950 hover:bg-blue-400 hover:text-white font-black rounded-2xl transition-all shadow-lg shadow-white/5 text-sm uppercase tracking-wider flex items-center gap-2 disabled:bg-slate-800 disabled:text-slate-600"
                >
                  {isDispatching === drone.id ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" /> Matching
                    </>
                  ) : (
                    "Book Mission"
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {filteredDrones.length === 0 && (
        <div className="text-center py-32 bg-slate-900/20 rounded-[3rem] border border-dashed border-slate-800">
          <div className="inline-flex p-6 bg-slate-900 rounded-full mb-6">
            <Search className="w-12 h-12 text-slate-700" />
          </div>
          <p className="text-slate-300 text-xl font-orbitron mb-2">No matching units deployed</p>
          <p className="text-slate-600 text-sm mb-8">Adjust your filters to find active drones in other regions or categories.</p>
          <button onClick={() => {setSelectedCategory('All'); setSearchQuery('');}} className="px-8 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-700 transition-colors">Reset Search Matrix</button>
        </div>
      )}

      {/* Matching Overlay Logic */}
      {isDispatching && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/80 backdrop-blur-xl">
          <div className="bg-slate-900 p-12 rounded-[3rem] border border-blue-500/20 text-center max-w-lg mx-4">
             <div className="w-20 h-20 bg-blue-600/10 rounded-full flex items-center justify-center mx-auto mb-8 relative">
               <Loader2 className="w-10 h-10 text-blue-400 animate-spin" />
               <Sparkles className="w-5 h-5 text-amber-400 absolute top-0 right-0 animate-pulse" />
             </div>
             <h3 className="text-3xl font-orbitron font-bold text-white mb-4">DDS AI Dispatch</h3>
             <p className="text-slate-500 leading-relaxed mb-6">
               Analyzing weather patterns, airspace permissions, and operator proximity for the most efficient mission match...
             </p>
             <div className="space-y-3">
               <div className="h-1 w-full bg-slate-800 rounded-full overflow-hidden">
                 <div className="h-full bg-blue-600 animate-[progress_2s_ease-in-out]"></div>
               </div>
               <div className="flex justify-between text-[10px] font-black uppercase text-slate-600 tracking-widest">
                 <span>Capability Match</span>
                 <span>LAANC Pre-Clear</span>
                 <span>ETA Sync</span>
               </div>
             </div>
          </div>
        </div>
      )}
    </div>
  );
};
