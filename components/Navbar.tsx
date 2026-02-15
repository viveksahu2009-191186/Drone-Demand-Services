
import React from 'react';
import { Drone as DroneIcon, Menu, Bell, User } from 'lucide-react';

interface NavbarProps {
  activeView: string;
  setActiveView: (view: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeView, setActiveView }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveView('hero')}>
            <div className="p-2 bg-blue-600 rounded-lg">
              <DroneIcon className="w-6 h-6 text-white" />
            </div>
            <span className="font-orbitron font-bold text-xl tracking-wider text-white">DDS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-baseline space-x-8">
              {['Marketplace', 'Dashboard', 'AI Assistant'].map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveView(item.toLowerCase().replace(' ', '-'))}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeView === item.toLowerCase().replace(' ', '-')
                      ? 'text-blue-400 bg-blue-400/10'
                      : 'text-slate-300 hover:text-white hover:bg-slate-800'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-white transition-colors">
              <Bell className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2 pl-4 border-l border-slate-800">
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center">
                <User className="w-5 h-5 text-slate-400" />
              </div>
              <span className="hidden sm:inline text-sm font-medium text-slate-200">Alex J.</span>
            </div>
            <button className="md:hidden p-2 text-slate-400 hover:text-white">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
