import { useState } from "react"
export default function Logs() {

    const [activeSection, setActiveSection] = useState("Libris")

    return (
    <div className="flex h-full flex-col">
        <div className="flex flex-col lg:flex-row flex-1 gap-6 lg:gap-10 lg:min-h-0">
            
            <div className="flex w-full lg:w-1/3 flex-col items-center lg:items-start gap-6 border-b border-pip-green/30 pb-6 lg:border-none lg:pb-0">
            

            <div className="flex w-full flex-row lg:flex-col overflow-x-auto no-scrollbar lg:overflow-visible gap-4 text-lg lg:text-2xl whitespace-nowrap">
                {sections.map(section => (
                <div 
                    key={section}
                    onClick={() => setActiveSection(section)}
                    className={`flex cursor-pointer items-center justify-center lg:justify-start gap-2 hover:drop-shadow-text-glow shrink-0 ${activeSection === section ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                >
                    <div className={`hidden lg:block h-3 w-3 ${activeSection === section ? 'bg-pip-green' : 'bg-transparent'}`}></div>
                    {section}
                </div>
                ))}
            </div>
            </div>

            <div className="flex w-full lg:w-2/3 flex-col pb-8 lg:pb-0 h-full lg:min-h-0">
            {renderContent()}
            </div>

        </div>
    </div>
    )
}