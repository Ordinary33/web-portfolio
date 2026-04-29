export default function Education() {
    const courses = [
      "Computer Programming 1 & 2",
      "Calculus 1 & 2",
      "Logic and Set Theory",
      "Data Structures & Algorithms",
      "Statistics",
      "Discrete Structures",
      "Computer Architecture",
      "Design & Analysis of Algorithms",
      "Human-Computer Interaction",
      "Artificial Intelligence",
      "Software Engineering",
      "Operating Systems",
      "Computer Networks",
      "Computer Security"
    ];
  
    return (
      <div className="flex min-h-full lg:h-full w-full flex-col border border-pip-green p-6 shadow-crt drop-shadow-text-glow lg:p-10 pb-16 lg:min-h-0">
        
        <div className="mb-6 grid shrink-0 grid-cols-1 gap-4 border-b border-pip-green/40 pb-6 md:grid-cols-3 md:gap-8 lg:mb-8">
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-wider opacity-80 lg:text-base">Institute</span>
            <span className="text-lg font-bold tracking-widest lg:text-xl">MSU-IIT</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-wider opacity-80 lg:text-base">Program</span>
            <span className="text-lg font-bold tracking-widest lg:text-xl">B.S. Comp Sci</span>
          </div>
          <div className="flex flex-col">
            <span className="text-sm uppercase tracking-wider opacity-80 lg:text-base">Year</span>
            <span className="text-lg font-bold tracking-widest lg:text-xl">3rd Year</span>
          </div>
        </div>
  
        <span className="mb-4 shrink-0 text-base uppercase tracking-wider opacity-80 lg:text-xl">
          Relevant Courseworks
        </span>
        
        <div className="flex-1 min-h-0 overflow-y-auto pip-scrollbar pr-4">
            <div className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2">
            {courses.map((course, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="h-2 w-2 bg-pip-green opacity-80 shadow-crt shrink-0"></div>
                <span className="text-base font-bold tracking-widest lg:text-lg">
                  {course}
                </span>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    );
  }