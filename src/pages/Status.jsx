import { useState } from 'react';
import AboutMe from '../pages/tabs/Aboutme'; 
import Education  from '../pages/tabs/Education';

export default function Status() {
  const [activeSection, setActiveSection] = useState('About Me');
  const sections = ['About Me', 'Education', 'Skills'];


  const renderContent = () => {
    switch (activeSection) {
      case 'About Me':
        return <AboutMe />;
      case 'Education':
        return <Education />;
      case 'Skills':
        return <div className="flex h-full items-center justify-center text-2xl opacity-50">Loading Skills...</div>;
      case 'Other':
        return <div className="flex h-full items-center justify-center text-2xl opacity-50">Loading Other...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex h-full flex-col">
      
      <div className="mb-4 lg:mb-8 flex flex-wrap justify-center lg:justify-end gap-4 lg:gap-8 border-b border-pip-green/30 pb-2 text-sm md:text-xl drop-shadow-text-glow">
        <span>Wg 34/125</span>
        <span>HP 89/110</span>
        <span>DR 11</span>
        <span>Caps 1721</span>
      </div>

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
  );
}