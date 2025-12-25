
import React from 'react';
import { LEADS } from '../constants';
import { Link } from 'react-router-dom';

const Leads: React.FC = () => {
  return (
    <div className="p-6 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight">Leads Management</h2>
          <p className="text-slate-500 mt-1">View, track and manage your potential clients efficiently.</p>
        </div>
        <div className="flex gap-3">
          <button className="hidden sm:flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-sm font-bold shadow-sm">
            <span className="material-symbols-outlined text-[20px]">file_upload</span> Import
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 bg-primary text-white rounded-lg text-sm font-bold hover:bg-blue-600 transition-colors shadow-sm">
            <span className="material-symbols-outlined text-[20px]">add</span> Add New Lead
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Total Leads', value: '1,240', trend: '+5.2%', icon: 'groups', color: 'text-primary', bg: 'bg-blue-50' },
          { label: 'New Today', value: '+12', trend: '+2.1%', icon: 'person_add', color: 'text-emerald-600', bg: 'bg-emerald-50' },
          { label: 'Active Opportunities', value: '45', trend: 'Stable', icon: 'trending_up', color: 'text-purple-600', bg: 'bg-purple-50' }
        ].map((stat, idx) => (
          <div key={idx} className="bg-white dark:bg-slate-800 rounded-xl p-5 border border-slate-200 dark:border-slate-800 shadow-sm h-32 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
                <h3 className="text-2xl font-bold mt-1">{stat.value}</h3>
              </div>
              <div className={`p-2 ${stat.bg} dark:bg-slate-700 rounded-lg`}>
                <span className={`material-symbols-outlined ${stat.color}`}>{stat.icon}</span>
              </div>
            </div>
            <div className="flex items-center gap-1 text-sm">
              <span className={`${stat.trend === 'Stable' ? 'bg-slate-100 text-slate-500' : 'bg-emerald-50 text-emerald-600'} dark:bg-slate-700 font-bold px-1.5 py-0.5 rounded text-xs`}>{stat.trend}</span>
              <span className="text-slate-400 ml-1">vs yesterday</span>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-end md:items-center justify-between">
        <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto flex-1">
          <div className="relative min-w-[240px] flex-1">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">search</span>
            <input className="w-full h-11 pl-10 pr-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-1 focus:ring-primary" placeholder="Search leads by name..." />
          </div>
          <select className="h-11 pl-4 pr-10 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg text-sm text-slate-700 dark:text-slate-200">
            <option>All Agents</option>
            <option>Mike Ross</option>
            <option>Sarah Connor</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button className="h-11 px-4 flex items-center gap-2 text-slate-600 font-bold text-sm bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 transition-colors">
            <span className="material-symbols-outlined text-[20px]">sort</span> Sort
          </button>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-700 text-xs uppercase text-slate-500 font-semibold tracking-wider">
              <tr>
                <th className="p-4 w-12 text-center"><input type="checkbox" className="rounded" /></th>
                <th className="p-4">Lead Name</th>
                <th className="p-4">Status</th>
                <th className="p-4">Contact Info</th>
                <th className="p-4">Interest</th>
                <th className="p-4">Budget</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800 text-sm">
              {LEADS.map((lead) => (
                <tr key={lead.id} className="group hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                  <td className="p-4 text-center"><input type="checkbox" className="rounded" /></td>
                  <td className="p-4">
                    <Link to={`/leads/${lead.id}`} className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-600 font-bold text-xs">{lead.initials}</div>
                      <div>
                        <p className="font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">{lead.name}</p>
                        <p className="text-xs text-slate-500">Added {lead.addedAt}</p>
                      </div>
                    </Link>
                  </td>
                  <td className="p-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      lead.status === 'Viewing Scheduled' ? 'bg-purple-100 text-purple-800' :
                      lead.status === 'New Lead' ? 'bg-blue-100 text-blue-800' :
                      'bg-amber-100 text-amber-800'
                    }`}>
                      {lead.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex flex-col gap-1 text-xs text-slate-600 dark:text-slate-400">
                      <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">mail</span> {lead.email}</div>
                      <div className="flex items-center gap-1.5"><span className="material-symbols-outlined text-[14px]">call</span> {lead.phone}</div>
                    </div>
                  </td>
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{lead.interest}</td>
                  <td className="p-4 font-medium text-slate-700 dark:text-slate-300">{lead.budget}</td>
                  <td className="p-4 text-right">
                    <button className="text-slate-400 hover:text-primary transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
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

export default Leads;
