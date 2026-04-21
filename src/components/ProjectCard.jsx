export default function ProjectCard({name, tools, description, image}) {
    return (
        <div className="flex h-full w-full flex-col border border-pip-green p-4 shadow-crt drop-shadow-text-glow lg:p-8 lg:min-h-0">
            
            <div className="mb-4 flex shrink-0 flex-col border-b border-pip-mid/40 pb-4 lg:mb-6">
                <h2 className="text-xl font-bold tracking-tighter text-pip-green lg:text-2xl uppercase">
                    {name}
                </h2>
                <div className="mt-2 flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                        <span key={index} className="border border-pip-mid px-2 py-0.5 text-xs uppercase opacity-80">
                            {tool}
                        </span>
                    ))}
                </div>
            </div>

            <div className="flex flex-1 flex-col gap-6 overflow-hidden lg:flex-row lg:min-h-0">
                
                <div className="w-full shrink-0 border border-pip-mid/30 bg-pip-black p-1 lg:w-2/5">
                    <div 
                        className="h-48 w-full bg-cover bg-center bg-no-repeat lg:h-full opacity-90"
                        style={{ backgroundImage: `url(${image})` }}
                    />
                </div>

                <div className="flex flex-1 flex-col overflow-y-auto pip-scrollbar pr-2 lg:min-h-0">
                    <span className="mb-2 text-xs uppercase tracking-widest opacity-50">Technical_Specifications:</span>
                    <ul className="flex flex-col gap-4">
                        {description.map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <div className="mt-2 h-1.5 w-1.5 shrink-0 bg-pip-green shadow-crt" />
                                <p className="text-sm leading-relaxed tracking-wide lg:text-base">
                                    {point}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>
        </div>
    )
}