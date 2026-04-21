export default function AboutMe() {
    return (
      <div className="flex w-full flex-1 flex-col justify-center border border-pip-green p-6 shadow-crt drop-shadow-text-glow lg:p-10">
        
        {/* 1. TOP ROW: Name, Age, and Class (No borders, just spacing) */}
        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8 lg:mb-8">
          
          {/* Name */}
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-wider opacity-80 lg:text-base">Name</span>
            <span className="text-lg font-bold tracking-widest lg:text-xl">Husnie</span>
          </div>
  
          {/* Age */}
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-wider opacity-80 lg:text-base">Age</span>
            <span className="text-lg font-bold tracking-widest lg:text-xl">21</span>
          </div>
  
          {/* Class */}
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-wider opacity-80 lg:text-base">Class</span>
            <span className="text-lg font-bold tracking-widest lg:text-xl">CS Undergrad</span>
          </div>
  
        </div>
  
        {/* 2. REMAINING FIELDS: Pure flexbox gaps, zero lines */}
        <div className="flex flex-col gap-4 lg:gap-6">
          
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <span className="text-base uppercase tracking-wider opacity-80 lg:text-xl">Location</span>
            <span className="mt-1 text-base font-bold tracking-widest lg:mt-0 lg:text-right lg:text-xl">// Null</span>
          </div>
  
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <span className="text-base uppercase tracking-wider opacity-80 lg:text-xl">Hobbies</span>
            <span className="mt-1 text-base font-bold tracking-widest lg:mt-0 lg:text-right lg:text-xl">Films, Music, Games</span>
          </div>
  
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <span className="text-base uppercase tracking-wider opacity-80 lg:text-xl">Specialization</span>
            <span className="mt-1 text-base font-bold tracking-widest lg:mt-0 lg:text-right lg:text-xl">ML, Data Science, SWE</span>
          </div>
  
          <div className="flex flex-col justify-between lg:flex-row lg:items-center">
            <span className="text-base uppercase tracking-wider opacity-80 lg:text-xl">Languages</span>
            <span className="mt-1 text-base font-bold tracking-widest lg:mt-0 lg:text-right lg:text-xl">Cebuano, Tagalog, English</span>
          </div>
  
        </div>
      </div>
    );
  }