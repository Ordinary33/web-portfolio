import experienceData from '../data/experience'
export default function Quests() {
    return (
        <div className="flex h-full w-full flex-col border border-pip-green p-4 shadow-crt drop-shadow-text-glow lg:p-8 lg:min-h-0">
          
          <div className="mb-8 flex shrink-0 items-center justify-between border-b border-pip-mid/50 pb-2">
            <span className="text-base uppercase tracking-wider opacity-80 lg:text-xl">
              Experience
            </span>
            <span className="text-xs uppercase tracking-widest opacity-50 text-pip-green animate-pulse">
              [ SYS_STATUS: IDLE ]
            </span>
          </div>
    
          <div className="flex flex-1 flex-col overflow-y-auto pip-scrollbar pr-2">
            {experienceData.map((job, index) => (
              <div key={index} className="flex flex-col">
                
                <div className="mb-6 flex flex-col border-l-4 border-pip-green pl-4">
                  <h2 className="text-2xl font-bold uppercase tracking-widest text-pip-green lg:text-4xl shadow-crt">
                    {job.role}
                  </h2>
                  <span className="mt-2 text-lg uppercase tracking-wider opacity-90">
                    @ {job.company}
                  </span>
                </div>
    
                <div className="mb-8 grid grid-cols-1 gap-4 border border-pip-mid/30 bg-pip-green/5 p-4 sm:grid-cols-3">
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase opacity-50">Location:</span>
                    <span className="text-sm tracking-widest">{job.location}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase opacity-50">Timeframe:</span>
                    <span className="text-sm tracking-widest">{job.duration}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] uppercase opacity-50">Status:</span>
                    <span className="text-sm font-bold tracking-widest text-pip-green">[{job.status}]</span>
                  </div>
                </div>
    
                <div className="flex flex-col">
                  <span className="mb-4 text-xs uppercase tracking-[0.2em] opacity-50 border-b border-pip-mid/20 pb-2">
                    Execution_Logs
                  </span>
                  <ul className="flex flex-col gap-4">
                    {job.logs.map((log, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-1 text-pip-green">{'>'}</span>
                        <p className="text-sm leading-relaxed tracking-wide opacity-90 lg:text-base">
                          {log}
                        </p>
                      </li>
                    ))}
                  </ul>
                </div>
                
              </div>
            ))}
    
            <div className="mt-12 flex flex-col items-center justify-center opacity-30">
              <span className="text-xs uppercase tracking-widest">
                --- END OF RECORD ---
              </span>
              <span className="mt-2 text-[10px] uppercase tracking-widest animate-pulse">
                Awaiting Next Directive...
              </span>
            </div>
    
          </div>
        </div>
      );
    }