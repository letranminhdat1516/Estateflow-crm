
import React, { useState } from 'react';
import { PROPERTIES } from '../constants';

const Listings: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-3xl font-extrabold mb-2">Property Inventory</h2>
          <p className="text-slate-500">Manage your active listings and track pending sales.</p>
        </div>
        <div className="flex gap-3">
          <button className="inline-flex items-center h-10 px-4 rounded-md border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800 text-sm font-medium hover:bg-slate-50">
            <span className="material-symbols-outlined text-[20px] mr-2">upload</span> Import
          </button>
          <button className="inline-flex items-center h-10 px-4 rounded-md bg-primary text-white text-sm font-medium hover:bg-blue-600 transition-colors">
            <span className="material-symbols-outlined text-[20px] mr-2">add</span> Add New Listing
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Active Listings', value: '142', trend: '+5%', icon: 'domain' },
          { label: 'Pending Sale', value: '18', trend: '-2%', icon: 'pending_actions' },
          { label: 'Sold This Month', value: '12', trend: '+8%', icon: 'check_circle' },
          { label: 'Inventory Value', value: '$54.2M', trend: '+12%', icon: 'payments' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 p-5 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <p className="text-sm font-medium text-slate-500">{stat.label}</p>
              <span className="material-symbols-outlined text-slate-400">{stat.icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <h3 className="text-2xl font-bold">{stat.value}</h3>
              <span className={`text-xs font-medium px-1.5 py-0.5 rounded ${stat.trend.startsWith('+') ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                {stat.trend}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 p-4 shadow-sm flex flex-col lg:flex-row gap-4">
        <div className="flex-1 relative">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
          <input
            className="w-full pl-10 pr-4 h-10 rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm focus:ring-2 focus:ring-primary"
            placeholder="Search address, MLS #, agent..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex flex-wrap gap-3 items-center">
          <select className="h-10 pl-3 pr-8 rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm">
            <option>All Types</option>
            <option>Residential</option>
            <option>Commercial</option>
          </select>
          <select className="h-10 pl-3 pr-8 rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm">
            <option>All Statuses</option>
            <option>Active</option>
            <option>Pending</option>
          </select>
          <div className="flex items-center gap-2">
            <input className="w-28 h-10 px-3 rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm" placeholder="Min Price" />
            <span className="text-slate-400">-</span>
            <input className="w-28 h-10 px-3 rounded-md border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-sm" placeholder="Max Price" />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-xs font-semibold uppercase tracking-wider text-slate-500">
                <th className="py-4 px-6 w-16"><input type="checkbox" className="rounded border-slate-300 text-primary" /></th>
                <th className="py-4 px-6 min-w-[300px]">Property</th>
                <th className="py-4 px-6">Price</th>
                <th className="py-4 px-6">Type</th>
                <th className="py-4 px-6">Status</th>
                <th className="py-4 px-6">Agent</th>
                <th className="py-4 px-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-700 text-sm">
              {PROPERTIES.map((prop) => (
                <tr key={prop.id} className="group hover:bg-slate-50 dark:hover:bg-slate-700/30 transition-colors">
                  <td className="py-4 px-6"><input type="checkbox" className="rounded border-slate-300 text-primary" /></td>
                  <td className="py-4 px-6">
                    <div className="flex items-start gap-4">
                      <img src={prop.image} className="w-16 h-16 rounded-md object-cover bg-slate-200 shrink-0" alt="" />
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white">{prop.address}</p>
                        <p className="text-xs text-slate-500 mt-1">{prop.city}, {prop.state} {prop.zip}</p>
                        <div className="flex gap-2 mt-1.5 text-[10px] text-slate-500 uppercase tracking-tighter">
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">bed</span> {prop.beds}</span>
                          <span className="w-px h-3 bg-slate-300 dark:bg-slate-600"></span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">bathtub</span> {prop.baths}</span>
                          <span className="w-px h-3 bg-slate-300 dark:bg-slate-600"></span>
                          <span className="flex items-center gap-1"><span className="material-symbols-outlined text-[14px]">square_foot</span> {prop.sqft}</span>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-4 px-6 font-medium font-mono">${prop.price.toLocaleString()}</td>
                  <td className="py-4 px-6">{prop.type}</td>
                  <td className="py-4 px-6">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-tight ${
                      prop.status === 'Active' ? 'bg-green-100 text-green-800' :
                      prop.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                      prop.status === 'Sold' ? 'bg-blue-100 text-blue-800' :
                      'bg-slate-100 text-slate-800'
                    }`}>
                      {prop.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex items-center gap-2">
                      <div className="h-6 w-6 rounded-full bg-slate-200 bg-center bg-cover" style={{ backgroundImage: `url('${prop.agentImage}')` }}></div>
                      <span className="text-slate-700 dark:text-slate-300">{prop.agent}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex items-center justify-between px-6 py-4 border-t border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
          <div className="text-sm text-slate-500">Showing 1 to 5 of 142 results</div>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 rounded border border-slate-300 text-xs font-medium bg-white hover:bg-slate-50">Previous</button>
            <button className="px-3 py-1 rounded bg-primary text-white text-xs font-medium">1</button>
            <button className="px-3 py-1 rounded border border-slate-300 text-xs font-medium bg-white hover:bg-slate-50">2</button>
            <button className="px-3 py-1 rounded border border-slate-300 text-xs font-medium bg-white hover:bg-slate-50">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listings;
