import { useState, useRef } from "react"
import projectsData from "../data/projects"

const TabItem = ({ name, isActive, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);
    const [isOverflowing, setIsOverflowing] = useState(false);
    
    const textRef = useRef(null);

    const handleMouseEnter = () => {
        setIsHovered(true);
        
        if (textRef.current) {
            setIsOverflowing(textRef.current.scrollWidth > textRef.current.clientWidth);
        }
    };

    return (
        <div
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovered(false)}
            className={`flex w-full overflow-hidden cursor-pointer items-center justify-center lg:justify-start gap-2 hover:drop-shadow-text-glow shrink-0 ${
                isActive ? 'opacity-100' : 'opacity-60 hover:opacity-100'
            }`}
        >
            <div className={`hidden shrink-0 lg:block h-3 w-3 ${isActive ? 'bg-pip-green' : 'bg-transparent'}`}></div>
            
            <div className="flex-1 overflow-hidden">
                {isHovered && isOverflowing ? (
                    <marquee scrollamount="5" className="whitespace-nowrap">
                        {name}
                    </marquee>
                ) : (
                    <span 
                        ref={textRef} 
                        className="block truncate whitespace-nowrap"
                    >
                        {name}
                    </span>
                )}
            </div>
        </div>
    );
};

export default function Logs() {

    const [activeSection, setActiveSection] = useState('Libris')

    const renderContent = () => {
        switch(activeSection) {
            case 'Libris':
                return <h1>Test</h1>
            default:
                return null
        }
    }

    console.log(projectsData)

    return (
        <div className="flex h-full flex-col">
            <div className="flex flex-col lg:flex-row flex-1 gap-6 lg:gap-10 lg:min-h-0">

                <div className="flex w-full lg:w-1/3 flex-col items-center lg:items-start gap-6 border-b border-pip-green/30 pb-6 lg:border-none lg:pb-0">


                    <div className="flex w-full flex-row lg:flex-col overflow-x-auto no-scrollbar lg:overflow-visible gap-4 text-lg lg:text-2xl whitespace-nowrap">
                        {projectsData.map(project => (
                                <TabItem 
                                    key={project.name}
                                    name={project.name}
                                    isActive={activeSection === project.name}
                                    onClick={() => setActiveSection(project.name)}
                                />
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