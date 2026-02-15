
import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marketplace } from './components/Marketplace';
import { Dashboard } from './components/Dashboard';
import { AIAssistant } from './components/AIAssistant';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState('hero');

  const renderView = () => {
    switch (activeView) {
      case 'marketplace':
        return <Marketplace />;
      case 'dashboard':
        return <Dashboard />;
      case 'ai-assistant':
        return <AIAssistant />;
      case 'hero':
      default:
        return <Hero onGetStarted={() => setActiveView('marketplace')} />;
    }
  };

  return (
    <div className="min-h-screen">
      <Navbar activeView={activeView} setActiveView={setActiveView} />
      
      <main className="pt-16">
        {renderView()}
      </main>

      {/* Global Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="p-2 bg-blue-600 rounded-lg">
                  <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
                </div>
                <span className="font-orbitron font-bold text-xl tracking-wider text-white">DDS</span>
              </div>
              <p className="text-slate-500 max-w-sm">
                Revolutionizing the drone industry by connecting spare capacity with global demand through AI-driven intelligence.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Platform</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><button className="hover:text-blue-400">Marketplace</button></li>
                <li><button className="hover:text-blue-400">Operator Portal</button></li>
                <li><button className="hover:text-blue-400">Insurance API</button></li>
                <li><button className="hover:text-blue-400">Safety Guidelines</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-white mb-6">Support</h4>
              <ul className="space-y-4 text-slate-500 text-sm">
                <li><button className="hover:text-blue-400">Help Center</button></li>
                <li><button className="hover:text-blue-400">Contact Sales</button></li>
                <li><button className="hover:text-blue-400">Developer Docs</button></li>
                <li><button className="hover:text-blue-400">Status</button></li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-slate-900 text-slate-600 text-xs">
            <p>© 2025 Drone Demand Services (DDS). All rights reserved.</p>
            <div className="flex gap-8 mt-4 md:mt-0">
              <button className="hover:text-slate-400">Privacy Policy</button>
              <button className="hover:text-slate-400">Terms of Service</button>
              <button className="hover:text-slate-400">Cookie Settings</button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
