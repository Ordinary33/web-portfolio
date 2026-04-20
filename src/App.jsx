import { useState } from 'react';

export default function App() {
  const [activeTab, setActiveTab] = useState('Status');
  const [activeProfile, setActiveProfile] = useState('Nerd');

  const tabs = ['Status', 'Inv', 'Data', 'Radio'];
  const profiles = ['Entrepreneur', 'Entertainer', 'Team Player', 'Problem Solver', 'Nerd'];

  const profileData = {
    'Team Player': {
      stats: 'Group Eats  52 | High Fives  345 | Conflicts  0',
      morale: '52',
      desc: "I play well with others, especially when there's pizza involved. I bring teams together faster than a Wi-Fi connection, making sure every project is a 'high-five' moment."
    },
    'Nerd': {
      stats: 'Tomes Read  137 | Code Langs  6 | Gadgets  11',
      morale: '94%',
      desc: "The guru of geekery, with more books than friends and more curiosity than a cat. I dive into code like it's a ball pit and come out with digital magic (and sometimes just more questions)."
    }
  };

  return (
    // 1. The pitch black room
    <div className="flex min-h-screen w-full items-center justify-center bg-pip-dark font-terminal text-pip-green">
      
      {/* 2. The Physical Monitor Screen */}
      <div className="relative flex h-[750px] w-[1100px] items-center justify-center bg-[#020602] overflow-hidden">
        
        {/* Pointer Arrow (Top Left) */}
        <div className="absolute left-6 top-6 text-2xl drop-shadow-text-glow">&#10148;</div>

        {/* 3. The Main Interface Boundary (U-Shape: Left, Bottom, Right) */}
        <div className="relative h-[80%] w-[90%] border-b-2 border-l-2 border-r-2 border-pip-green shadow-crt">
          
          {/* --- THE FADING TOP BORDER --- */}
          {/* This line starts green on the left and fades to transparent halfway across */}
          <div className="absolute left-0 top-0 h-[2px] w-3/5 bg-gradient-to-r from-pip-green to-transparent shadow-crt"></div>

          {/* Top Page Title (Masking the line) */}
          <div className="absolute left-10 top-0 -translate-y-1/2 bg-[#020602] px-4 text-3xl tracking-widest drop-shadow-text-glow">
            {activeTab === 'Status' ? 'PROFILES' : activeTab.toUpperCase()}
          </div>

          {/* --- MAIN CONTENT AREA --- */}
          <div className="h-full w-full p-10 pt-12">
            
            {activeTab === 'Status' ? (
              // STATUS PAGE LAYOUT
              <div className="flex h-full flex-col">
                
                {/* Universal Header Stats */}
                <div className="mb-8 flex justify-end gap-8 border-b border-pip-green/30 pb-2 text-xl drop-shadow-text-glow">
                  <span>Wg 34/125</span>
                  <span>HP 89/110</span>
                  <span>DR 11</span>
                  <span>Caps 1721</span>
                </div>

                {/* Master-Detail Layout */}
                <div className="flex flex-1 gap-10">
                  
                  {/* Left Column: Filter List */}
                  <div className="w-1/3 flex flex-col gap-4 text-2xl">
                    {profiles.map(profile => (
                      <div 
                        key={profile}
                        onClick={() => setActiveProfile(profile)}
                        className={`cursor-pointer flex items-center gap-2 hover:drop-shadow-text-glow ${activeProfile === profile ? 'opacity-100' : 'opacity-60 hover:opacity-100'}`}
                      >
                        {/* The little selection square */}
                        <div className={`h-3 w-3 ${activeProfile === profile ? 'bg-pip-green' : 'bg-transparent'}`}></div>
                        {profile}
                      </div>
                    ))}
                  </div>

                  {/* Right Column: Profile Details */}
                  {profileData[activeProfile] ? (
                    <div className="w-2/3 flex flex-col items-center">
                      {/* Vault Boy Placeholder */}
                      <div className="mb-6 h-48 w-48 border border-pip-green/30 flex items-center justify-center opacity-70">
                         <span>[Vault Boy GIF]</span>
                      </div>

                      {/* Stats & Description Box */}
                      <div className="w-full border border-pip-green p-4 shadow-crt">
                        <div className="border-b border-pip-green pb-2 text-lg drop-shadow-text-glow">
                          {profileData[activeProfile].stats}
                        </div>
                        <div className="flex items-center gap-4 py-2 border-b border-pip-green drop-shadow-text-glow">
                           <span>CND [||||||||||||  ]</span>
                           <span>Morale: {profileData[activeProfile].morale}</span>
                        </div>
                        <p className="mt-4 text-lg leading-relaxed opacity-90 drop-shadow-text-glow">
                          {profileData[activeProfile].desc}
                        </p>
                      </div>
                    </div>
                  ) : (
                    // Fallback if a profile doesn't have data yet
                    <div className="w-2/3 flex items-center justify-center text-2xl opacity-50">
                      NO_DATA_FOUND
                    </div>
                  )}

                </div>
              </div>
            ) : (
              // BLANK SCREEN FOR OTHER TABS
              <div className="flex h-full w-full items-center justify-center text-4xl drop-shadow-text-glow animate-pulse">
                AWAITING_SYSTEM_DATA...
              </div>
            )}
          </div>

          {/* --- BOTTOM NAVIGATION TABS --- */}
          <div className="absolute bottom-0 left-0 flex w-full translate-y-1/2 items-center justify-center gap-12">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                // bg-[#020602] perfectly erases the bottom border behind the text
                className={`bg-[#020602] px-6 py-1 text-2xl tracking-widest transition-all ${
                  activeTab === tab 
                    ? 'border-2 border-pip-green drop-shadow-text-glow shadow-crt' 
                    : 'text-pip-green hover:drop-shadow-text-glow opacity-60 hover:opacity-100'
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