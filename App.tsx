
import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Listings from './pages/Listings';
import Leads from './pages/Leads';
import Calendar from './pages/Calendar';
import Analytics from './pages/Analytics';
import ClientProfile from './pages/ClientProfile';
import Campaigns from './pages/Campaigns';

const Sidebar: React.FC<{ isOpen: boolean; toggle: () => void }> = ({ isOpen, toggle }) => {
  const location = useLocation();
  const navItems = [
    { label: 'Dashboard', path: '/', icon: 'dashboard' },
    { label: 'Listings', path: '/listings', icon: 'home_work' },
    { label: 'Leads', path: '/leads', icon: 'groups' },
    { label: 'Calendar', path: '/calendar', icon: 'calendar_month' },
    { label: 'Analytics', path: '/analytics', icon: 'analytics' },
    { label: 'Campaigns', path: '/campaigns', icon: 'mark_email_read' },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-surface-light dark:bg-surface-dark border-r border-slate-200 dark:border-slate-800 transition-transform lg:relative lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="flex h-full flex-col justify-between p-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3 px-2">
            <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <span className="material-symbols-outlined">real_estate_agent</span>
            </div>
            <div className="flex flex-col">
              <h1 className="text-base font-bold leading-tight">EstateFlow</h1>
              <p className="text-xs font-medium text-slate-500">Agent Portal</p>
            </div>
          </div>

          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-colors ${
                  location.pathname === item.path
                    ? 'bg-primary/10 text-primary'
                    : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
                onClick={() => { if (window.innerWidth < 1024) toggle(); }}
              >
                <span className={`material-symbols-outlined ${location.pathname === item.path ? 'fill-1' : ''}`}>
                  {item.icon}
                </span>
                <span className="text-sm font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3 rounded-lg border border-slate-200 dark:border-slate-700 p-3">
          <div className="h-10 w-10 flex-none rounded-full bg-cover bg-center" style={{ backgroundImage: `url('https://i.pravatar.cc/150?u=sarah_connor')` }}></div>
          <div className="flex flex-col overflow-hidden">
            <p className="truncate text-sm font-bold">Sarah Connor</p>
            <p className="truncate text-xs text-slate-500">Top Agent</p>
          </div>
        </div>
      </div>
    </aside>
  );
};

const Header: React.FC<{ onMenuClick: () => void }> = ({ onMenuClick }) => {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 dark:border-slate-800 bg-surface-light dark:bg-surface-dark px-6 sticky top-0 z-40">
      <div className="flex items-center gap-4">
        <button onClick={onMenuClick} className="lg:hidden text-slate-500 hover:text-slate-900">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="hidden max-w-md flex-1 md:flex">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">search</span>
            <input
              className="w-80 rounded-lg border-none bg-slate-100 dark:bg-slate-800 py-2 pl-10 pr-4 text-sm text-slate-900 dark:text-white placeholder-slate-500 focus:ring-2 focus:ring-primary/50"
              placeholder="Search properties, leads..."
              type="text"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="relative rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
        </button>
        <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 transition-colors">
          <span className="material-symbols-outlined">settings</span>
        </button>
        <button className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm hover:bg-primary/90 transition-colors">
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span className="hidden sm:inline">New Listing</span>
        </button>
      </div>
    </header>
  );
};

const App: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <Router>
      <div className="flex h-screen w-full overflow-hidden bg-background-light dark:bg-background-dark">
        <Sidebar isOpen={isSidebarOpen} toggle={() => setIsSidebarOpen(!isSidebarOpen)} />
        {isSidebarOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden" 
            onClick={() => setIsSidebarOpen(false)} 
          />
        )}
        <main className="flex flex-1 flex-col overflow-hidden relative">
          <Header onMenuClick={() => setIsSidebarOpen(true)} />
          <div className="flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/listings" element={<Listings />} />
              <Route path="/leads" element={<Leads />} />
              <Route path="/calendar" element={<Calendar />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/campaigns" element={<Campaigns />} />
              <Route path="/leads/:id" element={<ClientProfile />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
