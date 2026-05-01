import { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Members from './components/Members';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('DASHBOARD');

  return (
    <div className="flex h-screen overflow-hidden bg-transparent text-gray-100 font-sans tracking-wide">
      <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="flex-1 flex flex-col h-screen overflow-hidden relative z-10 w-full">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main className="flex-1 overflow-y-auto overflow-x-hidden p-6 md:p-10 w-full">
          <div className="max-w-[1600px] mx-auto relative">
            {activeTab === 'DASHBOARD' && <Dashboard />}
            {activeTab === 'MEMBERS' && <Members />}
          </div>
        </main>
      </div>
    </div>
  );
}
export default App;
