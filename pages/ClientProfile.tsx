
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { LEADS, PROPERTIES } from '../constants';
import { gemini } from '../services/gemini';

const ClientProfile: React.FC = () => {
  const { id } = useParams();
  const lead = LEADS.find(l => l.id === id) || LEADS[0];
  const [aiAnalysis, setAiAnalysis] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleAiAnalyze = async () => {
    setIsAnalyzing(true);
    const result = await gemini.analyzeLeadPotential(lead.name, `Interested in: ${lead.interest}. Budget: ${lead.budget}. Current Score: ${lead.score}. Status: ${lead.status}`);
    setAiAnalysis(result);
    setIsAnalyzing(false);
  };

  return (
    <div className="p-4 md:p-6 lg:p-8 max-w-[1440px] mx-auto space-y-6">
      <div className="flex flex-wrap gap-2 items-center text-sm">
        <Link to="/leads" className="text-slate-500 font-medium hover:text-primary">Leads</Link>
        <span className="text-slate-300">/</span>
        <span className="font-bold">{lead.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Profile Sidebar */}
        <div className="lg:col-span-4 xl:col-span-3 space-y-6">
          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm flex flex-col items-center text-center gap-4">
            <div className="relative">
              <div className="size-32 rounded-full bg-cover bg-center shadow-md" style={{ backgroundImage: `url('${lead.agentImage}')` }}></div>
              <div className="absolute bottom-1 right-1 bg-green-500 size-4 rounded-full border-2 border-white"></div>
            </div>
            <div>
              <h1 className="text-xl font-bold">{lead.name}</h1>
              <p className="text-slate-500 text-sm font-medium">Potential Homebuyer</p>
            </div>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-green-100 text-green-700 text-[10px] font-bold rounded-full">Score: {lead.score}</span>
              <span className="px-3 py-1 bg-blue-100 text-blue-700 text-[10px] font-bold rounded-full">Pre-Approved</span>
            </div>
            <div className="grid grid-cols-3 gap-2 w-full mt-2">
              {['call', 'mail', 'chat'].map(icon => (
                <button key={icon} className="flex flex-col items-center p-2 rounded-lg bg-slate-50 dark:bg-slate-800 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined text-slate-400">{icon}</span>
                  <span className="text-[10px] font-bold uppercase mt-1">{icon}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm space-y-5">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Contact Details</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">phone_iphone</span>
                <div>
                  <p className="text-sm font-medium">{lead.phone}</p>
                  <p className="text-[10px] text-slate-400">Mobile</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="material-symbols-outlined text-slate-400 text-[20px]">email</span>
                <div className="overflow-hidden">
                  <p className="text-sm font-medium truncate w-40">{lead.email}</p>
                  <p className="text-[10px] text-slate-400">Personal</p>
                </div>
              </div>
            </div>
            <div className="h-px bg-slate-100 dark:bg-slate-800 w-full"></div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">Preferences</h3>
            <div className="space-y-3">
              {[
                { l: 'Budget', v: lead.budget },
                { l: 'Type', v: 'Single Family' },
                { l: 'Timeline', v: '3 Months' }
              ].map((p, i) => (
                <div key={i} className="flex justify-between items-center text-sm">
                  <span className="text-slate-400">{p.l}</span>
                  <span className="font-semibold">{p.v}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-8 xl:col-span-9 space-y-6">
          <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
            <div>
              <h2 className="text-3xl font-black tracking-tight">{lead.name}</h2>
              <div className="flex items-center gap-2 mt-1">
                <div className="size-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-medium text-slate-500">Status: {lead.status}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <button 
                onClick={handleAiAnalyze}
                disabled={isAnalyzing}
                className="flex items-center h-10 px-4 rounded-lg bg-purple-600 text-white font-bold text-sm shadow-md hover:bg-purple-700 disabled:opacity-50"
              >
                <span className="material-symbols-outlined text-[18px] mr-2">psychology</span>
                {isAnalyzing ? 'Analyzing...' : 'AI Insights'}
              </button>
              <button className="flex items-center h-10 px-4 rounded-lg bg-primary text-white font-bold text-sm shadow-md hover:bg-primary/90 transition-colors">
                <span className="material-symbols-outlined text-[18px] mr-2">add</span> Log Activity
              </button>
            </div>
          </div>

          {aiAnalysis && (
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 p-6 rounded-xl shadow-sm">
              <h3 className="text-purple-800 dark:text-purple-400 font-bold mb-2 flex items-center gap-2">
                <span className="material-symbols-outlined">auto_awesome</span>
                AI Lead Analysis
              </h3>
              <div className="text-sm text-purple-700 dark:text-purple-300 leading-relaxed whitespace-pre-wrap italic">
                {aiAnalysis}
              </div>
              <button onClick={() => setAiAnalysis(null)} className="mt-4 text-xs font-bold text-purple-600 hover:underline uppercase">Dismiss</button>
            </div>
          )}

          <div className="w-full bg-gradient-to-r from-blue-900 to-primary rounded-xl p-6 text-white shadow-lg relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between gap-4">
              <div>
                <p className="text-blue-200 text-xs font-bold uppercase tracking-wider mb-1">Active Negotiation</p>
                <h3 className="text-xl font-bold flex items-center gap-2">
                  123 Maple Avenue, Austin <span className="material-symbols-outlined text-sm opacity-70">open_in_new</span>
                </h3>
                <p className="text-blue-100 text-sm mt-1">$585,000 Offer Submitted</p>
              </div>
              <div className="flex flex-col items-end">
                <span className="text-2xl font-bold">Step 2 of 5</span>
                <span className="text-blue-200 text-sm">Inspection Pending</span>
              </div>
            </div>
            <div className="mt-6 relative">
              <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-blue-800">
                <div className="shadow-none flex flex-col bg-white" style={{ width: '40%' }}></div>
              </div>
              <div className="flex justify-between text-[10px] font-bold text-blue-200 px-1">
                <span className="text-white">Offer</span>
                <span className="text-white">Inspection</span>
                <span>Appraisal</span>
                <span>Financing</span>
                <span>Closing</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-bold">Activity Timeline</h3>
              <div className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 p-6 shadow-sm">
                <ul className="relative border-l border-slate-100 dark:border-slate-800 ml-3 space-y-8">
                  <li className="ml-6 relative">
                    <span className="absolute -left-[38px] size-8 bg-blue-100 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-surface-dark">
                      <span className="material-symbols-outlined text-primary text-sm">call</span>
                    </span>
                    <div className="flex justify-between">
                      <h4 className="text-sm font-bold">Outbound Call</h4>
                      <span className="text-[10px] text-slate-400">2h ago</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Discussed inspection report. Client concerned about roof.</p>
                  </li>
                  <li className="ml-6 relative">
                    <span className="absolute -left-[38px] size-8 bg-purple-100 rounded-full flex items-center justify-center ring-4 ring-white dark:ring-surface-dark">
                      <span className="material-symbols-outlined text-purple-600 text-sm">mail</span>
                    </span>
                    <div className="flex justify-between">
                      <h4 className="text-sm font-bold">Email Sent</h4>
                      <span className="text-[10px] text-slate-400">Yesterday</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">Sent 3 new listings in Hyde Park area.</p>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-lg font-bold">Preferred Properties</h3>
              {PROPERTIES.slice(0, 2).map(prop => (
                <div key={prop.id} className="bg-surface-light dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm flex h-24">
                  <img src={prop.image} className="w-24 h-full object-cover shrink-0" alt="" />
                  <div className="p-3 flex-1 flex flex-col justify-center">
                    <div className="flex justify-between items-start">
                      <h4 className="font-bold text-sm truncate">{prop.address}</h4>
                      <span className="text-[8px] font-bold px-1.5 py-0.5 rounded bg-yellow-100 text-yellow-800 uppercase tracking-wider">{prop.status}</span>
                    </div>
                    <p className="text-xs text-slate-500 mt-0.5">{prop.city}, {prop.state}</p>
                    <div className="flex items-center justify-between mt-auto">
                      <p className="font-bold text-primary">${prop.price.toLocaleString()}</p>
                      <div className="flex gap-2 text-[10px] text-slate-400">
                        <span>{prop.beds} Bds</span>
                        <span>{prop.baths} Ba</span>
                      </div>
                    </div>
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

export default ClientProfile;
