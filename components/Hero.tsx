
import React from 'react';
import { ArrowRight, ShieldCheck, Zap, Globe, PlusCircle, Leaf, Siren, Heart, ShieldAlert, Eye, Package, Stars, HardHat, Cpu, Brain, Rocket, Shield, Lock, BadgeDollarSign, Crown } from 'lucide-react';
import { STATS, VALUE_PROPS, AGRI_SERVICES, EMERGENCY_SERVICES, EVENT_SERVICES, LOGISTICS_SERVICES, INSPECTION_SERVICES, WORKFLOW_OPERATOR, WORKFLOW_USER, WORKFLOW_MISSION, SAFETY_COMPLIANCE, REVENUE_MODEL } from '../constants';

interface HeroProps {
  onGetStarted: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onGetStarted }) => {
  return (
    <div className="relative pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/5 blur-[120px] rounded-full -z-10"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 text-sm font-medium mb-8">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>452 Certified Operators Online Now</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-orbitron font-bold text-white mb-8 tracking-tighter leading-[1.1]">
          Turn Idle Drones Into <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">Active Revenue.</span>
        </h1>
        
        <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed font-light">
          DDS is the smart, AI-enabled brokerage for the drone industry. We connect fleet owners with 
          global demand—transforming spare capacity into high-impact service networks.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-32">
          <button 
            onClick={onGetStarted}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all transform hover:scale-105 flex items-center justify-center gap-3 shadow-2xl shadow-blue-500/30 text-lg"
          >
            Launch Marketplace <ArrowRight className="w-5 h-5" />
          </button>
          <button className="px-10 py-5 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all border border-slate-800 flex items-center justify-center gap-3 text-lg group">
            <PlusCircle className="w-5 h-5 text-blue-400 group-hover:rotate-90 transition-transform" /> List Your Drone
          </button>
        </div>

        {/* Safety & Compliance Section */}
        <div className="mb-32 text-left">
           <div className="flex items-center gap-4 mb-12">
            <Shield className="w-8 h-8 text-emerald-400" />
            <h2 className="text-4xl font-orbitron font-bold text-white">Trust & Safety</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_COMPLIANCE.map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 p-8 rounded-[2rem] border border-emerald-500/10 hover:border-emerald-500/30 transition-all group">
                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-500/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Revenue Model Section */}
        <div className="mb-32 text-left">
           <div className="flex items-center gap-4 mb-12">
            <BadgeDollarSign className="w-8 h-8 text-amber-400" />
            <h2 className="text-4xl font-orbitron font-bold text-white">Revenue Model</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVENUE_MODEL.map((item, idx) => (
              <div key={idx} className="bg-slate-900/40 p-8 rounded-[2rem] border border-amber-500/10 hover:border-amber-500/30 transition-all group">
                <div className="w-12 h-12 bg-slate-950 rounded-xl flex items-center justify-center mb-6 group-hover:bg-amber-500/10 transition-colors">
                  {item.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works - Workflow Section */}
        <div className="mb-32 text-left">
          <div className="flex items-center gap-4 mb-12">
            <Rocket className="w-8 h-8 text-blue-400" />
            <h2 className="text-4xl font-orbitron font-bold text-white">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Operator Column */}
            <div className="bg-slate-900/40 p-10 rounded-[3rem] border border-emerald-500/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-emerald-500/10 rounded-xl">
                  <Cpu className="w-6 h-6 text-emerald-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">1. Operator Onboarding</h3>
              </div>
              <div className="space-y-6">
                {WORKFLOW_OPERATOR.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center group-hover:border-emerald-500/30 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{step.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* User Column */}
            <div className="bg-slate-900/40 p-10 rounded-[3rem] border border-blue-500/10">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-blue-500/10 rounded-xl">
                  <Brain className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">2. Intelligent Matching</h3>
              </div>
              <div className="space-y-6">
                {WORKFLOW_USER.map((step, idx) => (
                  <div key={idx} className="flex gap-6 group">
                    <div className="flex-shrink-0 w-12 h-12 bg-slate-950 rounded-2xl border border-slate-800 flex items-center justify-center group-hover:border-blue-500/30 transition-colors">
                      {step.icon}
                    </div>
                    <div>
                      <h4 className="text-white font-bold mb-1">{step.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Execution/Completion Row */}
          <div className="bg-gradient-to-r from-slate-900 via-slate-900/80 to-slate-900 p-10 rounded-[3rem] border border-amber-500/10">
            <div className="flex items-center gap-3 mb-10">
              <div className="p-3 bg-amber-500/10 rounded-xl">
                <Zap className="w-6 h-6 text-amber-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">3. Mission Execution & Settlement</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {WORKFLOW_MISSION.map((step, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  <div className="w-16 h-16 bg-slate-950 rounded-[2rem] border border-slate-800 flex items-center justify-center mb-4 group-hover:border-amber-500/30 transition-colors">
                    {step.icon}
                  </div>
                  <h4 className="text-white font-bold mb-2">{step.title}</h4>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-[200px]">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specialized Services Sections */}
        <div className="space-y-12">
           {/* Inspection & Surveying Section */}
          <div className="py-16 bg-slate-900/40 rounded-[3rem] border border-amber-500/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-[0.03]">
              <HardHat className="w-64 h-64 text-amber-400" />
            </div>
            <div className="relative z-10 px-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <HardHat className="w-6 h-6 text-amber-400" />
                <h2 className="text-2xl font-orbitron font-bold text-white uppercase tracking-widest">Inspection & Surveying</h2>
              </div>
              <p className="text-slate-500 mb-12 max-w-2xl mx-auto">High-precision structural checks and linear surveys for construction firms and utility providers.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {INSPECTION_SERVICES.map((service, idx) => (
                  <div key={idx} className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-amber-500/30 transition-all">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-amber-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Logistics & Delivery Section */}
          <div className="py-16 bg-blue-950/20 rounded-[3rem] border border-blue-500/10 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-12 opacity-[0.02]">
              <Package className="w-80 h-80 text-blue-400" />
            </div>
            <div className="relative z-10 px-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Package className="w-6 h-6 text-blue-400" />
                <h2 className="text-2xl font-orbitron font-bold text-white uppercase tracking-widest">Precision Logistics</h2>
              </div>
              <p className="text-slate-500 mb-12 max-w-2xl mx-auto">Fast courier to remote locations, rural small-package delivery, and critical medical shipments.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {LOGISTICS_SERVICES.map((service, idx) => (
                  <div key={idx} className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-blue-500/30 transition-all">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Drone Show Section */}
          <div className="py-16 bg-pink-950/10 rounded-[3rem] border border-pink-500/10 relative overflow-hidden">
            <div className="absolute bottom-0 right-0 p-12 opacity-[0.03]">
              <Stars className="w-64 h-64 text-pink-400" />
            </div>
            <div className="relative z-10 px-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Stars className="w-6 h-6 text-pink-400" />
                <h2 className="text-2xl font-orbitron font-bold text-white uppercase tracking-widest">Night Drone Shows</h2>
              </div>
              <p className="text-slate-500 mb-12 max-w-2xl mx-auto">A breathtaking replacement for fireworks. Operators list packages with visual themes and custom durations.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {EVENT_SERVICES.map((service, idx) => (
                  <div key={idx} className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-pink-500/30 transition-all">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-pink-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Emergency Specialty Section */}
          <div className="py-16 bg-red-950/20 rounded-[3rem] border border-red-500/10 relative overflow-hidden">
            <div className="absolute -bottom-10 -left-10 p-12 opacity-[0.03]">
              <Heart className="w-64 h-64 text-red-400" />
            </div>
            <div className="relative z-10 px-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Siren className="w-6 h-6 text-red-500" />
                <h2 className="text-2xl font-orbitron font-bold text-white uppercase tracking-widest">Emergency & Medical</h2>
              </div>
              <p className="text-slate-500 mb-12 max-w-2xl mx-auto">Near-instant situational awareness and life-saving delivery integrated with local health services.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {EMERGENCY_SERVICES.map((service, idx) => (
                  <div key={idx} className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-red-500/30 transition-all">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Agricultural Specialty Section */}
          <div className="py-16 bg-slate-900/30 rounded-[3rem] border border-slate-800/50 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-12 opacity-5">
              <Leaf className="w-64 h-64 text-emerald-400" />
            </div>
            <div className="relative z-10 px-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Leaf className="w-6 h-6 text-emerald-400" />
                <h2 className="text-2xl font-orbitron font-bold text-white uppercase tracking-widest">Agricultural Excellence</h2>
              </div>
              <p className="text-slate-500 mb-12 max-w-2xl mx-auto">Our network provides specialized ag-tech services to transform modern farming operations.</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {AGRI_SERVICES.map((service, idx) => (
                  <div key={idx} className="bg-slate-950/50 p-6 rounded-2xl border border-white/5 flex flex-col items-center text-center group hover:border-emerald-500/30 transition-all">
                    <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-4 group-hover:bg-emerald-500/10 transition-colors">
                      {service.icon}
                    </div>
                    <h4 className="text-white font-bold mb-2">{service.title}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Dynamic Value Prop Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 my-24">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="p-8 bg-slate-900/40 backdrop-blur-xl border border-slate-800/50 rounded-[2.5rem] text-left hover:border-blue-500/30 transition-all group">
              <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {prop.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 font-orbitron">{prop.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{prop.desc}</p>
            </div>
          ))}
        </div>

        {/* Stats Strip */}
        <div className="max-w-5xl mx-auto p-1 bg-gradient-to-r from-slate-800 via-blue-500/20 to-slate-800 rounded-3xl">
          <div className="bg-slate-950 rounded-[calc(1.5rem-1px)] py-8 px-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            {STATS.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-xs text-slate-500 font-bold uppercase tracking-[0.2em]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
