
import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area 
} from 'recharts';
// Add CheckCircle2 to the imports
import { LayoutDashboard, History, Wallet, Settings, TrendingUp, Cpu, Battery, Signal, Activity, HeartPulse, HardHat, Crown, ShieldAlert, FileCheck, CheckCircle2 } from 'lucide-react';

const REVENUE_DATA = [
  { name: 'Mon', revenue: 400, supplemental: 120 },
  { name: 'Tue', revenue: 300, supplemental: 400 },
  { name: 'Wed', revenue: 900, supplemental: 600 },
  { name: 'Thu', revenue: 600, supplemental: 300 },
  { name: 'Fri', revenue: 800, supplemental: 500 },
  { name: 'Sat', revenue: 1200, supplemental: 900 },
  { name: 'Sun', revenue: 1000, supplemental: 850 },
];

const MISSION_DATA = [
  { name: 'Week 1', missions: 4 },
  { name: 'Week 2', missions: 7 },
  { name: 'Week 3', missions: 5 },
  { name: 'Week 4', missions: 12 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Nav */}
        <div className="w-full lg:w-72 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-4 lg:pb-0">
          {[
            { name: 'Fleet Overview', icon: <LayoutDashboard /> },
            { name: 'Mission History', icon: <History /> },
            { name: 'Payouts & Earnings', icon: <Wallet /> },
            { name: 'DDS AI Config', icon: <Cpu /> },
            { name: 'Operator Settings', icon: <Settings /> },
          ].map(item => (
            <button key={item.name} className={`flex items-center gap-4 px-6 py-4 rounded-2xl text-sm font-bold whitespace-nowrap lg:w-full transition-all group ${
              item.name === 'Fleet Overview' 
                ? 'bg-blue-600 text-white shadow-2xl shadow-blue-600/30' 
                : 'text-slate-500 hover:text-white hover:bg-slate-900 border border-transparent hover:border-slate-800'
            }`}>
              <span className="w-5 h-5 group-hover:scale-110 transition-transform">{item.icon}</span>
              {item.name}
            </button>
          ))}

          {/* Device Status Sidebar Mini-Card */}
          <div className="hidden lg:block mt-8 p-6 bg-slate-900 border border-slate-800 rounded-[2rem]">
             <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-6">Fleet Status</h4>
             <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Battery className="w-4 h-4 text-emerald-500" />
                    <span className="text-xs font-bold text-slate-300">Harvester X1</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-500">92%</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Signal className="w-4 h-4 text-blue-500" />
                    <span className="text-xs font-bold text-slate-300">Surveyor Scan</span>
                  </div>
                  <span className="text-xs font-mono text-emerald-500">Online</span>
                </div>
             </div>

             <div className="mt-8 pt-6 border-t border-slate-800">
               <div className="flex items-center gap-3 mb-4">
                  <HeartPulse className="w-4 h-4 text-red-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Health Network</span>
               </div>
               <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-red-400">911 Sync</span>
                    <span className="flex h-1.5 w-1.5 rounded-full bg-red-500 animate-pulse"></span>
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Monitoring priority medical channels</p>
               </div>
             </div>

             {/* Compliance Card */}
             <div className="mt-6 pt-6 border-t border-slate-800">
               <div className="flex items-center gap-3 mb-4">
                  <FileCheck className="w-4 h-4 text-blue-500" />
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Compliance Audit</span>
               </div>
               <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-blue-400">All Certified</span>
                    <CheckCircle2 className="w-3 h-3 text-blue-400" />
                  </div>
                  <p className="text-[10px] text-slate-500 font-medium">Next audit scheduled in 14 days</p>
               </div>
             </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div>
                <h2 className="text-3xl font-orbitron font-bold text-white mb-1">Operator Console</h2>
                <p className="text-slate-500 text-sm">Managing 5 active drones across 4 regions.</p>
              </div>
              <div className="hidden sm:flex px-4 py-1.5 bg-amber-500/10 border border-amber-500/20 text-amber-500 rounded-full items-center gap-2">
                <Crown className="w-4 h-4" />
                <span className="text-[10px] font-black uppercase tracking-widest">Premium Operator</span>
              </div>
            </div>
            <div className="flex gap-3">
              <div className="px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl flex items-center gap-2">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-black">+24.8% Supplement</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Chart 1: Revenue with Supplemental Tracking */}
            <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-lg font-bold text-white">Earnings Analytics</h3>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">Primary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-bold text-slate-500 uppercase">DDS Supplemental</span>
                  </div>
                </div>
              </div>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={REVENUE_DATA}>
                    <defs>
                      <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#2563eb" stopOpacity={0.4}/>
                        <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorSupp" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} fontSize={12} dy={10} />
                    <YAxis stroke="#64748b" axisLine={false} tickLine={false} fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px', boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)' }}
                      itemStyle={{ fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorRev)" />
                    <Area type="monotone" dataKey="supplemental" stroke="#10b981" strokeWidth={3} strokeDasharray="5 5" fillOpacity={1} fill="url(#colorSupp)" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Chart 2: Mission Efficiency */}
            <div className="bg-slate-900/50 p-8 rounded-[2.5rem] border border-slate-800">
              <h3 className="text-lg font-bold text-white mb-8">AI-Optimized Load</h3>
              <div className="h-[300px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={MISSION_DATA}>
                    <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
                    <XAxis dataKey="name" stroke="#64748b" axisLine={false} tickLine={false} fontSize={12} dy={10} />
                    <YAxis stroke="#64748b" axisLine={false} tickLine={false} fontSize={12} />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px' }}
                      itemStyle={{ color: '#8b5cf6', fontSize: '12px', fontWeight: 'bold' }}
                    />
                    <Bar dataKey="missions" fill="#8b5cf6" radius={[8, 8, 0, 0]} barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Transparent Mission Tracking */}
          <div className="bg-slate-900/50 rounded-[2.5rem] border border-slate-800 overflow-hidden">
            <div className="p-8 border-b border-slate-800 flex justify-between items-center bg-slate-900/80">
              <div>
                <h3 className="text-lg font-bold text-white">Live Operations</h3>
                <p className="text-xs text-slate-500 font-medium">Real-time status of brokerage missions</p>
              </div>
              <button className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold rounded-xl transition-all">Export Report</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-slate-950/50 text-slate-500 uppercase text-[10px] font-black tracking-[0.2em]">
                    <th className="px-8 py-5">Mission ID</th>
                    <th className="px-8 py-5">Service Type</th>
                    <th className="px-8 py-5">Dispatch Optim.</th>
                    <th className="px-8 py-5">Status</th>
                    <th className="px-8 py-5">Quote / Earned</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/50">
                  {[
                    { id: '#DDS-9901', service: 'Agricultural Spray', optim: 'AI-Routed (8.2m)', status: 'Active', amt: '$580.00' },
                    { id: '#DDS-9932', service: 'Pylon Survey', optim: 'Industrial Priority', status: 'In-Flight', amt: '$440.00' },
                    { id: '#DDS-9925', service: 'Blood Delivery', optim: 'Critical Priority', status: 'In-Flight', amt: '$0.00 (MOU)' },
                    { id: '#DDS-9872', service: 'Site Mapping', optim: 'Nearest Match', status: 'Pending', amt: '$320.00' },
                    { id: '#DDS-9850', service: 'Event Cinematography', optim: 'Premium Match', status: 'Completed', amt: '$1,850.00' },
                  ].map(mission => (
                    <tr key={mission.id} className="text-slate-300 hover:bg-white/[0.02] transition-colors group">
                      <td className="px-8 py-6 font-mono text-xs text-blue-400 font-bold">{mission.id}</td>
                      <td className="px-8 py-6">
                        <div className="font-bold text-sm text-white">{mission.service}</div>
                        <div className="text-[10px] text-slate-500 uppercase mt-0.5">Commercial Brokerage</div>
                      </td>
                      <td className="px-8 py-6 text-sm italic text-slate-400">{mission.optim}</td>
                      <td className="px-8 py-6">
                        <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider ${
                          mission.status === 'Completed' ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20' : 
                          mission.status === 'In-Flight' ? 'bg-red-500/10 text-red-400 border border-red-500/20 animate-pulse' :
                          mission.status === 'Active' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                          'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        }`}>
                          {mission.status}
                        </span>
                      </td>
                      <td className="px-8 py-6">
                         <div className="text-sm font-black text-white">{mission.amt}</div>
                         <div className="text-[10px] text-emerald-500 font-bold mt-0.5">{mission.amt.includes('$0.00') ? 'Municipal Grant' : 'Transparent Fee: 8%'}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
