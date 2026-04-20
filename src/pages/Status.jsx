import { useState } from 'react';

export default function Status() {
  const [activeSection, setActiveSection] = useState('About Me');
  
  const sections = ['About Me', 'Education', 'Skills'];

  const sectionData = {
    'About Me': {
      stats: 'Class: CS Undergrad | Status: DOST-SEI Scholar',
      condition: 'OPTIMAL',
      desc: "I am a software engineer specializing in Machine Learning and Generative AI. I focus on building systems that are both highly intelligent and deeply empathetic. When I'm not coding, I'm usually studying Stoic philosophy or working on hardware DIY projects.",
      image: '../src/assets/vaultboy.gif'
    },
    'Education': {
      stats: 'Institution: MSU-IIT | Current GPA: 1.5076',
      condition: 'IN PROGRESS',
      desc: "Currently traversing my third year of Computer Science. My academic research focuses heavily on high-performance computing (HPC) scheduling algorithms, alongside deep explorations into deep neural networks and explainable AI like SHAP.",
      image: '../src/assets/nerd.gif'
    },
    'Skills': {
      stats: 'Focus: Full-Stack & AI | Langs: Python, JS',
      condition: 'EQUIPPED',
      desc: "Specialized in Python (PyTorch, FastAPI, OpenCV) for training CNNs and deploying RAG architectures. Currently expanding my web ecosystem capabilities from Vue/Nuxt into the React, Next.js, and Node.js environments.",
      image: '../src/assets/handyman.gif'
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

      <div className="flex flex-col lg:flex-row flex-1 gap-6 lg:gap-10">
        
        <div className="flex lg:w-1/3 flex-row lg:flex-col overflow-x-auto no-scrollbar lg:overflow-visible gap-4 text-lg lg:text-2xl pb-2 lg:pb-0 whitespace-nowrap border-b border-pip-green/30 lg:border-none">
          {sections.map(section => (
            <div 
              key={section}
              onClick={() => setActiveSection(section)}
              className={`flex cursor-pointer items-center gap-2 hover:drop-shadow-text-glow shrink-0 ${activeSection === section ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
            >
              <div className={`hidden lg:block h-3 w-3 ${activeSection === section ? 'bg-pip-green' : 'bg-transparent'}`}></div>
              {section}
            </div>
          ))}
        </div>

        {sectionData[activeSection] ? (
          <div className="flex lg:w-2/3 flex-col items-center pb-8 lg:pb-0">
            
            <div className="mb-6 flex h-[150px] w-[150px] lg:h-[200px] lg:w-[200px] shrink-0 items-center justify-center drop-shadow-text-glow">
                <img 
                  src={sectionData[activeSection].image} 
                  alt={`${activeSection} animation`}
                  className="h-full w-full object-contain opacity-90"
                />
            </div>

            <div className="w-full border border-pip-green p-4 shadow-crt">
              <div className="border-b border-pip-green pb-2 text-sm lg:text-lg drop-shadow-text-glow">
                {sectionData[activeSection].stats}
              </div>
              <div className="flex flex-col lg:flex-row justify-between gap-2 lg:gap-4 border-b border-pip-green py-2 drop-shadow-text-glow text-sm lg:text-base">
                  <span>CND [||||||||||||  ]</span>
                  <span>System: {sectionData[activeSection].condition}</span>
              </div>
              <p className="mt-4 text-sm lg:text-lg leading-relaxed opacity-90 drop-shadow-text-glow">
                {sectionData[activeSection].desc}
              </p>
            </div>

          </div>
        ) : (
          <div className="flex w-full lg:w-2/3 items-center justify-center text-xl lg:text-2xl opacity-50 pb-8">
            NO_DATA_FOUND
          </div>
        )}
      </div>
    </div>
  );
}