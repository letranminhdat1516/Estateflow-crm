
import React from 'react';
import { CAMPAIGNS } from '../constants';
import { AreaChart, Area, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts';

const Campaigns: React.FC = () => {
  const chartData = [
    { week: 'W1', engagement: 400 },
    { week: 'W2', engagement: 600 },
    { week: 'W3', engagement: 500 },
    { week: 'W4', engagement: 900 },
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-[1200px] mx-auto">
      <div className="flex flex-wrap justify-between items-end gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-3xl font-extrabold tracking-tight">Email Campaigns</h2>
          <p className="text-slate-500">Manage and track your real estate marketing outreach</p>
        </div>
        <button className="flex items-center justify-center gap-2 bg-primary text-white px-5 py-2.5 rounded-lg shadow-sm font-bold text-sm">
          <span className="material-symbols-outlined text-[20px]">add</span> Create New Campaign
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Sent', val: '24,105', trend: '+12%', icon: 'send', color: 'text-primary' },
          { label: 'Avg Open Rate', val: '32%', trend: '+5%', icon: 'drafts', color: 'text-indigo-500' },
          { label: 'Click Rate', val: '4.5%', trend: '-0.5%', icon: 'ads_click', color: 'text-orange-500' },
          { label: 'Lead Conv.', val: '1.2%', trend: '+0.2%', icon: 'person_add', color: 'text-purple-500' }
        ].map((s, i) => (
          <div key={i} className="bg-surface-light dark:bg-surface-dark rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <p className="text-slate-500 text-sm font-medium">{s.label}</p>
              <span className={`material-symbols-outlined ${s.color} bg-slate-50 dark:bg-slate-700 p-1.5 rounded-md`}>{s.icon}</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-2xl font-bold">{s.val}</p>
              <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${s.trend.startsWith('+') ? 'text-emerald-600 bg-emerald-50' : 'text-rose-600 bg-rose-50'}`}>
                {s.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <h3 className="text-lg font-bold">Engagement Over Time</h3>
            <p className="text-sm text-slate-500">Interaction metrics for the last 30 days</p>
          </div>
          <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 rounded-lg p-1">
            <button className="px-3 py-1.5 text-[10px] font-bold rounded bg-white dark:bg-slate-700 shadow-sm">30 Days</button>
            <button className="px-3 py-1.5 text-[10px] font-medium text-slate-500">90 Days</button>
            <button className="px-3 py-1.5 text-[10px] font-medium text-slate-500">Year</button>
          </div>
        </div>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData}>
              <defs>
                <linearGradient id="colorEng" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#137fec" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#137fec" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <XAxis dataKey="week" hide />
              <YAxis hide />
              <Tooltip />
              <Area type="monotone" dataKey="engagement" stroke="#137fec" strokeWidth={3} fill="url(#colorEng)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800 text-[10px] font-bold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6">Campaign Name</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Audience</th>
                <th className="py-4 px-6 text-right">Sent Date</th>
                <th className="py-4 px-6 text-right">Open Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {CAMPAIGNS.map(c => (
                <tr key={c.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-lg bg-slate-200 dark:bg-slate-700 flex items-center justify-center">
                        {c.image ? <img src={c.image} className="h-full w-full object-cover rounded-lg" alt="" /> : <span className="material-symbols-outlined text-slate-400">draft</span>}
                      </div>
                      <div>
                        <p className="text-sm font-bold">{c.name}</p>
                        <p className="text-[10px] text-slate-500">{c.subject}</p>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-bold ${
                      c.status === 'Sent' ? 'bg-emerald-100 text-emerald-800' :
                      c.status === 'Draft' ? 'bg-slate-100 text-slate-800' :
                      'bg-blue-100 text-blue-800'
                    }`}>
                      {c.status}
                    </span>
                  </td>
                  <td className="py-4 px-6 text-sm text-slate-600">{c.audience}</td>
                  <td className="py-4 px-6 text-sm text-slate-600 text-right">{c.sentDate}</td>
                  <td className="py-4 px-6 text-right">
                    {c.openRate ? (
                      <div className="flex items-center justify-end gap-2">
                        <span className="text-sm font-bold">{c.openRate}%</span>
                        <div className="w-16 h-1 bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-500" style={{ width: `${c.openRate}%` }}></div>
                        </div>
                      </div>
                    ) : '--'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Campaigns;
