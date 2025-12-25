
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie } from 'recharts';

const Analytics: React.FC = () => {
  const data = [
    { name: 'Jan', revenue: 1.2, prev: 0.8 },
    { name: 'Feb', revenue: 1.4, prev: 1.0 },
    { name: 'Mar', revenue: 1.1, prev: 0.9 },
    { name: 'Apr', revenue: 1.8, prev: 1.2 },
    { name: 'May', revenue: 1.6, prev: 1.3 },
    { name: 'Jun', revenue: 2.4, prev: 1.5 },
  ];

  const pieData = [
    { name: 'Zillow', value: 45, color: '#137fec' },
    { name: 'Website', value: 25, color: '#3b82f6' },
    { name: 'Referrals', value: 20, color: '#93c5fd' },
    { name: 'Other', value: 10, color: '#e2e8f0' },
  ];

  const agents = [
    { name: 'Sarah Jenkins', sales: 840, image: 'https://i.pravatar.cc/150?u=sarahj' },
    { name: 'Michael Ross', sales: 620, image: 'https://i.pravatar.cc/150?u=mike' },
    { name: 'David Chen', sales: 450, image: 'https://i.pravatar.cc/150?u=davidc' },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1400px] mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold">Analytics Dashboard</h2>
          <p className="text-slate-500 text-sm">Track performance, revenue, and agent productivity.</p>
        </div>
        <div className="flex items-center gap-3">
          <select className="h-10 pl-3 pr-8 rounded-lg border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 text-sm font-medium">
            <option>Last 30 Days</option>
            <option>This Quarter</option>
            <option>Year to Date</option>
          </select>
          <button className="flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-bold shadow-sm">
            <span className="material-symbols-outlined text-[18px]">download</span> Export
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Revenue', value: '$2.4M', trend: '+12.5%', icon: 'payments', color: 'text-green-600', bg: 'bg-green-100' },
          { label: 'Active Listings', value: '45', trend: '+5.2%', icon: 'home_work', color: 'text-primary', bg: 'bg-blue-100' },
          { label: 'Avg. Days on Market', value: '24', trend: '-2.1%', icon: 'hourglass_empty', color: 'text-orange-600', bg: 'bg-orange-100' },
          { label: 'New Leads', value: '128', trend: '+8.4%', icon: 'group_add', color: 'text-purple-600', bg: 'bg-purple-100' }
        ].map((kpi, i) => (
          <div key={i} className="bg-surface-light dark:bg-surface-dark p-5 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-2">
            <div className="flex justify-between items-start">
              <div className={`p-2 ${kpi.bg} dark:bg-slate-700 rounded-lg ${kpi.color}`}>
                <span className="material-symbols-outlined">{kpi.icon}</span>
              </div>
              <span className="flex items-center text-[10px] font-bold text-green-600 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-full">
                {kpi.trend}
              </span>
            </div>
            <div>
              <p className="text-slate-500 text-sm font-medium">{kpi.label}</p>
              <h3 className="text-2xl font-black mt-1">{kpi.value}</h3>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-lg font-bold">Revenue Trends</h3>
              <p className="text-sm text-slate-500">Monthly revenue overview</p>
            </div>
          </div>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={data}>
                <defs>
                  <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#137fec" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12 }} />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stroke="#137fec" strokeWidth={2} fillOpacity={1} fill="url(#colorRev)" />
                <Area type="monotone" dataKey="prev" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="5 5" fill="none" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <h3 className="text-lg font-bold mb-1">Lead Sources</h3>
          <p className="text-sm text-slate-500 mb-6">Inbound channels overview</p>
          <div className="flex-1 flex items-center justify-center relative min-h-[200px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={pieData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                  {pieData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="text-2xl font-black">45%</span>
              <span className="text-[10px] font-medium text-slate-400">Zillow</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 mt-6">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center gap-2">
                <div className="size-2 rounded-full" style={{ backgroundColor: d.color }}></div>
                <span className="text-xs text-slate-500 font-medium">{d.name} ({d.value}%)</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Top Performing Agents</h3>
            <button className="text-primary text-sm font-bold">View All</button>
          </div>
          <div className="space-y-6">
            {agents.map((agent, i) => (
              <div key={i} className="flex items-center gap-4">
                <img src={agent.image} className="size-10 rounded-full" alt="" />
                <div className="flex-1">
                  <div className="flex justify-between mb-1">
                    <h4 className="text-sm font-bold">{agent.name}</h4>
                    <span className="text-sm font-bold text-primary">${agent.sales}k</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 dark:bg-slate-700 rounded-full">
                    <div className="h-full bg-primary rounded-full" style={{ width: `${(agent.sales / 1000) * 100}%` }}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Pipeline Funnel</h3>
          <div className="space-y-3">
            {[
              { label: 'New Leads', val: 128, w: '100%', op: 'bg-primary/20' },
              { label: 'Contacted', val: 86, w: '70%', op: 'bg-primary/40' },
              { label: 'Viewing', val: 42, w: '45%', op: 'bg-primary/60' },
              { label: 'Offer Made', val: 18, w: '25%', op: 'bg-primary/80' },
              { label: 'Closed', val: 9, w: '15%', op: 'bg-primary' }
            ].map((s, i) => (
              <div key={i} className="relative">
                <div className="flex justify-between text-[10px] font-bold mb-1 uppercase tracking-wider">
                  <span>{s.label}</span>
                  <span>{s.val}</span>
                </div>
                <div className={`h-8 w-full rounded-r-full rounded-l-lg overflow-hidden relative ${s.op}`}>
                  <div className="absolute top-0 left-0 h-full bg-primary opacity-20" style={{ width: s.w }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
