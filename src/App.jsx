import { useState } from 'react'
import Status from './pages/Status'
import Logs from './pages/Logs'
import Quests from './pages/Quests'
import Radio from './pages/Radio'

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

        {/* CHANGES: Added `lg:border-none lg:shadow-none`. 
          This completely kills the bounding box glow on desktop, leaving ONLY our custom HUD pieces!
        */}
        <div className="relative flex flex-col h-full w-full lg:h-[80%] lg:w-[90%] border-2 border-pip-green shadow-crt lg:border-none lg:shadow-none p-4 lg:p-0">

           {/* ========================================= */}
           {/* TOP BORDER PIECES */}
           {/* ========================================= */}
           <div className="hidden lg:block absolute left-0 top-0 h-[2px] w-[3rem] bg-pip-green shadow-crt"></div>
           <div className="hidden lg:flex absolute left-[3rem] top-0 -translate-y-1/2 w-[12rem] justify-center text-3xl tracking-widest drop-shadow-text-glow">
             {activeTab === 'Status' ? 'STATUS' : activeTab.toUpperCase()}
           </div>
           <div className="hidden lg:block absolute left-[15rem] right-0 top-0 h-[2px] bg-pip-green shadow-crt"></div>

           {/* ========================================= */}
           {/* BOTTOM BORDER PIECE (Newly added since we removed it from the parent) */}
           {/* ========================================= */}
           <div className="hidden lg:block absolute left-0 bottom-0 h-[2px] w-full bg-pip-green shadow-crt"></div>

           {/* ========================================= */}
           {/* LEFT BORDER (BRACKET STYLE) */}
           {/* Changed `to-transparent` to `to-[#0A1C0A]/0` to stop the CSS gray-fade bug */}
           {/* ========================================= */}
           <div className="hidden lg:block absolute left-0 top-0 h-[30%] w-[2px] bg-gradient-to-b from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>
           <div className="hidden lg:block absolute left-0 bottom-0 h-[30%] w-[2px] bg-gradient-to-t from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>

           {/* ========================================= */}
           {/* RIGHT BORDER (BRACKET STYLE) */}
           {/* ========================================= */}
           <div className="hidden lg:block absolute right-0 top-0 h-[30%] w-[2px] bg-gradient-to-b from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>
           <div className="hidden lg:block absolute right-0 bottom-0 h-[30%] w-[2px] bg-gradient-to-t from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>


           <div className="flex-1 w-full overflow-y-auto no-scrollbar lg:p-10 lg:pt-12">
             {renderContent()}
           </div>
           
           <div className="mt-auto lg:mt-0 pt-4 lg:pt-0 border-t-2 border-pip-green lg:border-none lg:absolute lg:bottom-0 lg:left-0 flex w-full lg:translate-y-1/2 items-center justify-center gap-2 sm:gap-4 lg:gap-12 flex-wrap lg:flex-nowrap bg-[#0A1C0A] lg:bg-transparent z-10">
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