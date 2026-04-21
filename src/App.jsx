import { useState } from 'react';
import Status from './pages/Status';
import Logs from './pages/Logs'

export default function App() {
  const [activeTab, setActiveTab] = useState('Status');
  const tabs = ['Status', 'Logs', 'Quests', 'Radio'];

  const renderContent = () => {
    switch(activeTab) {
      case 'Status':
        return <Status />
      case 'Logs':
        return <Logs />
      case 'Quests':
        return <Quests />
      case 'Radio':
        return <Radio />
      default:
        return null
    }
  }
    

  return (
    <div className="terminal-bg flex min-h-screen w-full items-center justify-center font-terminal text-pip-green p-2 md:p-6">
      
      <div className="crt-overlay relative flex w-full max-w-[1100px] h-[95vh] lg:h-[750px] items-center justify-center bg-[#0A1C0A] overflow-hidden">

        <div className="relative flex flex-col h-full w-full lg:h-[80%] lg:w-[90%] border-2 lg:border-b-2 lg:border-l-2 lg:border-r-2 lg:border-t-0 border-pip-green shadow-crt p-4 lg:p-0">

           <div className="hidden lg:block absolute left-0 top-0 h-[2px] w-[3rem] bg-pip-green shadow-crt"></div>
           <div className="hidden lg:flex absolute left-[3rem] top-0 -translate-y-1/2 w-[12rem] justify-center text-3xl tracking-widest drop-shadow-text-glow">
             {activeTab === 'Status' ? 'STATUS' : activeTab.toUpperCase()}
           </div>
           <div className="hidden lg:block absolute left-[15rem] right-0 top-0 h-[2px] bg-pip-green shadow-crt"></div>

           <div className="lg:hidden text-2xl text-center border-b-2 border-pip-green pb-2 mb-4 tracking-widest drop-shadow-text-glow">
             {activeTab === 'Status' ? 'PROFILES' : activeTab.toUpperCase()}
           </div>

           <div className="flex-1 w-full overflow-y-auto no-scrollbar lg:p-10 lg:pt-12">
             {renderContent()}
           </div>
           
           <div className="mt-auto lg:mt-0 pt-4 lg:pt-0 border-t-2 border-pip-green lg:border-none lg:absolute lg:bottom-0 lg:left-0 flex w-full lg:translate-y-1/2 items-center justify-center gap-2 sm:gap-4 lg:gap-12 flex-wrap lg:flex-nowrap bg-[#0A1C0A] lg:bg-transparent">
             {tabs.map((tab) => (
               <button
                 key={tab}
                 onClick={() => setActiveTab(tab)}
                 className={`bg-[#0A1C0A] px-3 sm:px-6 py-1 text-lg sm:text-xl lg:text-2xl tracking-widest transition-all ${
                   activeTab === tab 
                     ? 'border-2 border-pip-green drop-shadow-text-glow shadow-crt' 
                     : 'text-pip-green hover:drop-shadow-text-glow'
                 }`}
               >
                 {tab}
               </button>
             ))}
           </div>

        </div>
      </div>
    </div>
  );
}