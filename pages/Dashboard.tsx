
import React from 'react';
import { PROPERTIES, LEADS, SCHEDULE } from '../constants';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const stats = [
    { label: 'Total Revenue', value: '$1.2M', trend: '+12%', icon: 'payments', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Active Listings', value: '8', trend: '0%', icon: 'home', color: 'text-slate-500', bg: 'bg-slate-100' },
    { label: 'New Leads', value: '24', trend: '+5 this week', icon: 'person_add', color: 'text-green-600', bg: 'bg-green-50' },
    { label: 'Commission YTD', value: '$45k', trend: '+8%', icon: 'account_balance_wallet', color: 'text-green-600', bg: 'bg-green-50' }
  ];

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col gap-1">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">Good Morning, Sarah</h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">Here is your daily digest for Oct 24, 2023.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, idx) => (
          <div key={idx} className="flex flex-col gap-2 rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <span className="material-symbols-outlined text-slate-400">{stat.icon}</span>
            </div>
            <div className="flex items-end justify-between">
              <p className="text-2xl font-bold">{stat.value}</p>
              <div className={`flex items-center text-xs font-bold ${stat.color} ${stat.bg} dark:bg-slate-800 px-2 py-1 rounded-full`}>
                {stat.trend}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          {/* Active Listings Table */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold">Active Listings</h3>
              <Link to="/listings" className="text-sm font-medium text-primary hover:underline">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 dark:bg-slate-800 text-slate-500">
                  <tr>
                    <th className="px-6 py-3 font-medium">Property</th>
                    <th className="px-6 py-3 font-medium text-center">Status</th>
                    <th className="px-6 py-3 font-medium">Price</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
                  {PROPERTIES.slice(0, 3).map((prop) => (
                    <tr key={prop.id} className="hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <img src={prop.image} className="h-10 w-14 rounded-lg object-cover" alt="" />
                          <div>
                            <p className="font-bold">{prop.address}</p>
                            <p className="text-xs text-slate-500">{prop.city}, {prop.state}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-center">
                        <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${
                          prop.status === 'Active' ? 'bg-green-100 text-green-800' :
                          prop.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-blue-100 text-blue-800'
                        }`}>
                          {prop.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 font-medium">${prop.price.toLocaleString()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Deals Pipeline */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Deals Pipeline</h3>
              <button className="text-slate-400 hover:text-primary"><span className="material-symbols-outlined">filter_list</span></button>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase text-slate-500">Negotiation (2)</p>
                <div className="h-1 w-full bg-blue-500 rounded-full mb-1"></div>
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-slate-50 dark:bg-slate-800">
                  <p className="text-sm font-bold">Smith / 123 Maple</p>
                  <p className="text-xs text-slate-500 mt-1">Offer: $840k</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase text-slate-500">Contract (1)</p>
                <div className="h-1 w-full bg-yellow-500 rounded-full mb-1"></div>
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-slate-50 dark:bg-slate-800">
                  <p className="text-sm font-bold">Miller / 99 Sunset</p>
                  <p className="text-xs text-slate-500 mt-1">Due Diligence: 10/26</p>
                </div>
              </div>
              <div className="flex flex-col gap-3">
                <p className="text-xs font-bold uppercase text-slate-500">Closing (1)</p>
                <div className="h-1 w-full bg-green-500 rounded-full mb-1"></div>
                <div className="rounded-lg border border-slate-200 dark:border-slate-700 p-3 bg-slate-50 dark:bg-slate-800">
                  <p className="text-sm font-bold">Wilson / 782 Pine</p>
                  <p className="text-xs text-slate-500 mt-1">Closing: 10/30</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {/* Today's Schedule */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold">Today's Schedule</h3>
              <button className="rounded-full bg-primary/10 p-1 text-primary"><span className="material-symbols-outlined text-[20px]">add</span></button>
            </div>
            <div className="p-4 space-y-4">
              {SCHEDULE.map((event) => (
                <div key={event.id} className="flex gap-4">
                  <div className="flex flex-col items-center min-w-[3rem]">
                    <span className="text-sm font-bold">{event.time}</span>
                    <span className="text-xs text-slate-500">{event.period}</span>
                    <div className="h-full w-px bg-slate-200 dark:bg-slate-700 mt-2"></div>
                  </div>
                  <div className="flex-1 pb-4">
                    <div className={`rounded-lg p-3 border-l-4 ${
                      event.type === 'Showing' ? 'bg-blue-50 border-primary' : 
                      event.type === 'Closing' ? 'bg-slate-50 border-slate-300' : 
                      'bg-green-50 border-green-500'
                    } dark:bg-slate-800`}>
                      <p className="text-sm font-bold">{event.title}</p>
                      <p className="text-xs text-slate-500 mt-1 flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]">person</span> {event.person}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Inquiries */}
          <div className="rounded-xl border border-slate-200 dark:border-slate-700 bg-surface-light dark:bg-surface-dark shadow-sm overflow-hidden">
            <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-lg font-bold">Recent Inquiries</h3>
              <Link to="/leads" className="text-xs font-medium text-slate-400 hover:text-primary">View All</Link>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800">
              {LEADS.slice(0, 2).map((lead) => (
                <div key={lead.id} className="flex items-center gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                  <div className="h-10 w-10 rounded-full bg-cover bg-center" style={{ backgroundImage: `url('${lead.agentImage}')` }}></div>
                  <div className="flex-1">
                    <p className="text-sm font-bold">{lead.name}</p>
                    <p className="text-xs text-slate-500 truncate">{lead.interest}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-500 hover:text-primary transition-all">
                      <span className="material-symbols-outlined text-[18px]">call</span>
                    </button>
                    <button className="rounded-full bg-slate-100 dark:bg-slate-700 p-2 text-slate-500 hover:text-primary transition-all">
                      <span className="material-symbols-outlined text-[18px]">mail</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
