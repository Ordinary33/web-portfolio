export default function ProjectCard({name, tools, description, image, github}) {
    return (
        <div className="flex h-full w-full flex-col border border-pip-green p-4 shadow-crt drop-shadow-text-glow lg:p-8 overflow-y-auto pip-scrollbar">
            
        <div className="mb-6 flex shrink-0 flex-col border-b border-pip-mid/40 pb-6">
            <h2 className="text-xl font-bold tracking-tighter text-pip-green lg:text-3xl uppercase leading-tight mb-4">
                {name}
            </h2>
            
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                        <span key={index} className="bg-pip-dark/30 border border-pip-mid/60 px-2 py-0.5 text-[10px] uppercase opacity-90 lg:text-xs">
                            {tool}
                        </span>
                    ))}
                </div>
                
                {github && (
                    <a 
                        href={github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-block text-center bg-pip-green text-pip-black px-4 py-2 text-xs font-bold uppercase tracking-widest hover:bg-white transition-colors shadow-crt whitespace-nowrap min-w-[160px]"
                    >
                        [ VIEW_SOURCE ]
                    </a>
                )}
            </div>
        </div>

            <div className="flex flex-col">
            {image ? (
                <div className="mb-8 w-full border border-pip-mid/30 bg-pip-black p-1">
                    <div 
                        className="h-48 w-full bg-cover bg-center bg-no-repeat lg:h-80 opacity-90"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </div>
            ):  (   <div className="mb-8 w-full border border-pip-mid/30 bg-pip-black p-1">
                        <div className="flex h-48 w-full items-center justify-center lg:h-80 bg-pip-dark/20">
                            <span className="text-2xl sm:text-4xl text-center font-bold tracking-widest text-pip-green/50 drop-shadow-text-glow animate-pulse">
                                // NULL
                            </span>
                        </div>
                    </div>)}
                <div className="mb-4 flex items-center gap-2">
                    <span className="text-[10px] uppercase tracking-[0.2em] opacity-50 lg:text-xs">
                       Description
                    </span>
                    <div className="h-[1px] flex-1 bg-pip-mid/20"></div>
                </div>
                
                <ul className="flex flex-col gap-6 pb-6">
                    {description.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <div className="mt-2 h-1.5 w-1.5 shrink-0 bg-pip-green shadow-crt" />
                            <p className="text-sm leading-relaxed tracking-wide lg:text-base opacity-90">
                                {point}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}