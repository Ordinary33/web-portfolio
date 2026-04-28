import { useState, useEffect } from 'react'
import Status from './pages/Status'
import Logs from './pages/Logs'
import Quests from './pages/Quests'
import Radio from './pages/Radio'

const BOOT_SEQUENCE = [
  "ROBCO INDUSTRIES UNIFIED OPERATING SYSTEM",
  "COPYRIGHT 2075-2077 ROBCO INDUSTRIES",
  "-Server 1-",
  " ",
  "Master Boot Record loaded.",
  "System memory: 64000K OK",
  "Loading disk drives... OK",
  "Loading audio adapters... OK",
  "Initializing Pip-OS v7.1.0.8... OK",
  "Vault-Tec Network interface established.",
  " ",
  "WELCOME, USER."
];

export default function App() {
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [isBooting, setIsBooting] = useState(true);
  const [bootLines, setBootLines] = useState([]);
  
  const [activeTab, setActiveTab] = useState('Status');
  const tabs = ['Status', 'Logs', 'Quests', 'Radio'];

  const handlePowerOn = () => {
    const bootSound = new Audio('/sfx/screenbootup.wav'); 
    bootSound.volume = 0.6; 
    bootSound.play().catch(err => console.log("Audio error:", err));
    
    setIsPoweredOn(true);
  }

  useEffect(() => {
    if (!isPoweredOn) return;

    const runBootSequence = async () => {
      for (let i = 0; i < BOOT_SEQUENCE.length; i++) {
        await new Promise(resolve => setTimeout(resolve, Math.random() * 300 + 100)); 
        setBootLines(prev => [...prev, BOOT_SEQUENCE[i]]);
      }
      
      await new Promise(resolve => setTimeout(resolve, 1000));
      setIsBooting(false);
    };

    runBootSequence();
    
  }, [isPoweredOn]);

  const renderContent = () => {
    switch(activeTab) {
      case 'Status': return <Status />
      case 'Logs': return <Logs />
      case 'Quests': return <Quests />
      case 'Radio': return <Radio />
      default: return null
    }
  }

  if (!isPoweredOn) {
    return (
      <div className="flex h-screen w-full items-center justify-center bg-black font-terminal text-pip-green custom-terminal-cursor">
        <button 
          onClick={handlePowerOn}
          className="text-xl tracking-widest hover:drop-shadow-text-glow hover:bg-pip-green hover:text-black px-6 py-2 border border-transparent hover:border-pip-green transition-all"
        >
          [ SYSTEM OFFLINE : CLICK TO INITIALIZE ]
        </button>
      </div>
    );
  }

  return (
    <div className="tactical-grid-bg custom-terminal-cursor flex min-h-screen w-full items-center justify-center font-terminal text-pip-green p-4 md:p-10">
      
      <div className="crt-overlay crt-vignette scanline-effect crt-flicker flex w-full max-w-[1100px] h-[95vh] lg:h-[750px] items-center justify-center bg-[#0A1C0A]">
      <div className="pointer-events-none absolute inset-0 z-50 rounded-[2.5rem] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent mix-blend-screen"></div>


    <div className="absolute inset-0 w-full h-full wasteland-grime"></div>
    <div className="absolute inset-0 w-full h-full screen-smudges"></div>


    <div className="absolute left-3 top-3 text-pip-green/30 text-xs opacity-50">⊕</div>

        <div className="absolute left-3 top-3 text-pip-green/30 text-xs opacity-50">⊕</div>
        <div className="absolute right-3 top-3 text-pip-green/30 text-xs opacity-50">⊕</div>
        <div className="absolute bottom-3 left-3 text-pip-green/30 text-xs opacity-50">⊕</div>
        <div className="absolute bottom-3 right-3 text-pip-green/30 text-xs opacity-50">⊕</div>
        
        {isBooting ? (
          
          <div className="flex h-full w-full flex-col justify-start p-6 lg:p-12">
            {bootLines.map((line, index) => (
              <p key={index} className="text-sm sm:text-base lg:text-lg mb-1 drop-shadow-text-glow uppercase">
                {line}
              </p>
            ))}
            <div className="mt-1 h-5 w-3 bg-pip-green animate-pulse shadow-crt"></div>
          </div>

        ) : (

          <div className="relative flex flex-col h-full w-full lg:h-[80%] lg:w-[90%] border-2 border-pip-green shadow-crt lg:border-none lg:shadow-none p-4 lg:p-0">

             <div className="hidden lg:block absolute left-0 top-0 h-[2px] w-[3rem] bg-pip-green shadow-crt"></div>
             <div className="hidden lg:flex absolute left-[3rem] top-0 -translate-y-1/2 w-[12rem] justify-center text-3xl tracking-widest drop-shadow-text-glow">
               {activeTab === 'Status' ? 'STATUS' : activeTab.toUpperCase()}
             </div>
             <div className="hidden lg:block absolute left-[15rem] right-0 top-0 h-[2px] bg-pip-green shadow-crt"></div>
             <div className="hidden lg:block absolute left-0 bottom-0 h-[2px] w-full bg-pip-green shadow-crt"></div>

             <div className="hidden lg:block absolute left-0 top-0 h-[30%] w-[2px] bg-gradient-to-b from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>
             <div className="hidden lg:block absolute left-0 bottom-0 h-[30%] w-[2px] bg-gradient-to-t from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>
             <div className="hidden lg:block absolute right-0 top-0 h-[30%] w-[2px] bg-gradient-to-b from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>
             <div className="hidden lg:block absolute right-0 bottom-0 h-[30%] w-[2px] bg-gradient-to-t from-pip-green to-[#0A1C0A]/0 shadow-crt"></div>

             <div key={activeTab} className="flex-1 w-full overflow-y-auto no-scrollbar lg:p-10 lg:pt-12 terminal-print">
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
        )}

      </div>
    </div>
  );
}