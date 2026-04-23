import { useState } from "react";
import frequencies from '../data/contacts'; 

export default function Radio() {
  const [signalStatus, setSignalStatus] = useState("AWAITING_TUNING_INPUT...");

  const handleInteraction = (freq) => {
    if (freq.isCopyAction) {
      navigator.clipboard.writeText(freq.value);
      setSignalStatus(`[ SUCCESS ] ${freq.value} COPIED TO CLIPBOARD`);
      
      setTimeout(() => {
        setSignalStatus("AWAITING_TUNING_INPUT...");
      }, 3000);
    } else {
      window.open(freq.url, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div className="flex h-full w-full flex-col border border-pip-green p-4 shadow-crt drop-shadow-text-glow lg:p-8">
      
      <div className="mb-8 flex shrink-0 flex-col border-b border-pip-mid/50 pb-6">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold uppercase tracking-widest text-pip-green lg:text-3xl">
            Comms_Relay
          </h2>
          <span className="text-xs font-bold uppercase animate-pulse opacity-70">
            [ SIGNAL_LOCKED ]
          </span>
        </div>

        <div className="mt-6 flex h-12 items-end gap-1 sm:gap-2 opacity-80">
          {[...Array(16)].map((_, i) => (
            <div 
              key={i}
              className="w-full bg-pip-green shadow-crt animate-pulse"
              style={{ 
                height: `${Math.random() * 100}%`, 
                animationDuration: `${0.5 + Math.random()}s` 
              }}
            />
          ))}
        </div>
      </div>

      <div className="mb-8 flex min-h-[60px] w-full items-center justify-center border border-pip-mid/30 bg-pip-green/5 p-4 text-center">
        <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.2em] text-pip-green/80">
          {`> ${signalStatus}`}
        </span>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {frequencies.map((freq, index) => (
        <button
            key={index}
            onClick={() => handleInteraction(freq)}
            onMouseEnter={() => {
            if (!signalStatus.includes("COPIED")) {
                setSignalStatus(freq.message);
            }
            }}
            onMouseLeave={() => {
            if (!signalStatus.includes("COPIED")) {
                setSignalStatus("AWAITING_TUNING_INPUT...");
            }
            }}
            className="group flex h-full cursor-pointer flex-col items-center justify-center gap-4 border border-pip-dark/50 bg-pip-black p-6 text-center transition-colors hover:border-pip-green hover:bg-pip-green/10 active:scale-95"
        >
            <span className="text-2xl font-bold tracking-widest opacity-80 transition-all group-hover:drop-shadow-text-glow group-hover:opacity-100 lg:text-3xl">
            {freq.hz}
            </span>
            
            <span className="flex h-8 items-center text-xs uppercase tracking-wider">
            <span className="opacity-50 transition-opacity group-hover:opacity-90">
                {freq.prefix}
            </span>
            <span className="px-1 text-sm font-black text-pip-green drop-shadow-text-glow transition-all group-hover:scale-110 group-hover:brightness-125">
                {freq.highlight}
            </span>
            <span className="opacity-50 transition-opacity group-hover:opacity-90">
                {freq.suffix}
            </span>
            </span>

            <span className="mt-2 border border-pip-green/50 px-2 py-1 text-[10px] uppercase tracking-widest opacity-0 transition-opacity animate-pulse group-hover:opacity-100">
            {freq.isCopyAction ? "[ COPY_DATA ]" : "[ TUNE_IN ]"}
            </span>
        </button>
        ))}
      </div>
      
    </div>
  );
}