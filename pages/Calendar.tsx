
import React from 'react';

const Calendar: React.FC = () => {
  const days = [
    { name: 'Mon', date: '12' },
    { name: 'Tue', date: '13' },
    { name: 'Wed', date: '14', active: true },
    { name: 'Thu', date: '15' },
    { name: 'Fri', date: '16' },
    { name: 'Sat', date: '17', dim: true },
    { name: 'Sun', date: '18', dim: true },
  ];

  const times = ['8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM'];

  return (
    <div className="flex flex-col h-full bg-background-light dark:bg-background-dark">
      <div className="px-6 py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shrink-0">
        <div>
          <h2 className="text-2xl font-bold">Schedule & Appointments</h2>
          <p className="text-slate-500 text-sm mt-1">Manage showings, open houses, and team meetings.</p>
        </div>
        <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-medium shadow-sm">
          <span className="material-symbols-outlined text-[20px]">add</span> Add New Event
        </button>
      </div>

      <div className="flex-1 overflow-hidden px-6 pb-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
          {/* Calendar Sidebar */}
          <div className="hidden lg:flex lg:col-span-3 flex-col gap-6 overflow-y-auto">
            <div className="bg-surface-light dark:bg-surface-dark rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-4 font-bold">
                <span>October 2023</span>
                <div className="flex gap-1">
                  <span className="material-symbols-outlined cursor-pointer hover:bg-slate-100 p-1 rounded">chevron_left</span>
                  <span className="material-symbols-outlined cursor-pointer hover:bg-slate-100 p-1 rounded">chevron_right</span>
                </div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-400 font-medium mb-2">
                <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-sm">
                {Array.from({ length: 31 }, (_, i) => (
                  <div key={i} className={`py-1 rounded-full cursor-pointer hover:bg-slate-100 ${i + 1 === 15 ? 'bg-primary text-white' : ''}`}>
                    {i + 1}
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">Event Filters</h3>
              {[
                { label: 'Showings', color: 'bg-blue-500' },
                { label: 'Open Houses', color: 'bg-purple-500' },
                { label: 'Closings', color: 'bg-green-500' },
                { label: 'Personal', color: 'bg-slate-400' }
              ].map((f, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" defaultChecked className="w-4 h-4 rounded text-primary" />
                  <span className="flex-1 text-sm font-medium text-slate-700 dark:text-slate-300">{f.label}</span>
                  <span className={`w-2 h-2 rounded-full ${f.color}`}></span>
                </label>
              ))}
            </div>
          </div>

          {/* Main Grid */}
          <div className="lg:col-span-9 flex flex-col h-full bg-surface-light dark:bg-surface-dark rounded-xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="px-6 py-4 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <h2 className="text-lg font-bold">October 2023 <span className="text-sm font-normal text-slate-500 ml-1">Week 42</span></h2>
                <div className="flex bg-slate-100 dark:bg-slate-800 rounded-lg p-0.5">
                  <button className="p-1 hover:bg-white rounded-md shadow-sm transition-all"><span className="material-symbols-outlined text-[20px]">chevron_left</span></button>
                  <button className="px-3 text-sm font-semibold">Today</button>
                  <button className="p-1 hover:bg-white rounded-md shadow-sm transition-all"><span className="material-symbols-outlined text-[20px]">chevron_right</span></button>
                </div>
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-1 rounded-lg flex text-xs font-medium">
                {['Day', 'Week', 'Month', 'Agenda'].map((v) => (
                  <button key={v} className={`px-4 py-1.5 rounded-md ${v === 'Week' ? 'bg-white dark:bg-slate-700 text-primary shadow-sm' : 'text-slate-500'}`}>
                    {v}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex-1 overflow-hidden flex flex-col">
              <div className="grid grid-cols-8 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900 shrink-0">
                <div className="p-4 text-center border-r w-20 text-[10px] font-bold text-slate-400">GMT-4</div>
                {days.map((d) => (
                  <div key={d.date} className={`p-3 text-center border-r ${d.active ? 'bg-blue-50/50 dark:bg-blue-900/20' : ''}`}>
                    <p className={`text-[10px] uppercase font-bold ${d.active ? 'text-primary' : 'text-slate-500'}`}>{d.name}</p>
                    <p className={`text-lg font-bold ${d.active ? 'text-primary bg-blue-100 dark:bg-blue-900 w-8 h-8 rounded-full flex items-center justify-center mx-auto' : d.dim ? 'text-slate-300' : ''}`}>
                      {d.date}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex-1 overflow-y-auto relative scrollbar-hide">
                <div className="grid grid-cols-8 min-h-[800px] relative">
                  <div className="border-r w-20 bg-slate-50 dark:bg-slate-900 z-10 sticky left-0">
                    {times.map((t) => (
                      <div key={t} className="h-20 border-b text-[10px] text-slate-400 text-right pr-2 pt-2">{t}</div>
                    ))}
                  </div>
                  {Array.from({ length: 7 }).map((_, i) => (
                    <div key={i} className="border-r relative">
                      {times.map((t) => <div key={t} className="h-20 border-b border-slate-100 dark:border-slate-800/50"></div>)}
                      {/* Event Overlays would go here */}
                      {i === 1 && (
                        <div className="absolute top-[80px] left-1 right-1 h-[60px] bg-green-100 border-l-4 border-green-500 rounded-md p-1.5 shadow-sm z-20 cursor-pointer hover:scale-[1.02] transition-transform">
                          <p className="text-[10px] font-bold text-green-800">Closing: The Smiths</p>
                          <p className="text-[8px] text-green-600">9:00 - 10:00 AM</p>
                        </div>
                      )}
                      {i === 2 && (
                        <div className="absolute top-[320px] left-1 right-1 h-[80px] bg-purple-100 border-l-4 border-purple-500 rounded-md p-1.5 shadow-sm z-20 cursor-pointer hover:scale-[1.02] transition-transform">
                          <p className="text-[10px] font-bold text-purple-800">Open House Prep</p>
                          <p className="text-[8px] text-purple-600">12:00 - 1:00 PM</p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
