import { useState } from 'react';

export default function Skills() {
  const [hoveredCategory, setHoveredCategory] = useState(null);

  const categories = [
    'Frontend', 
    'Backend & APIs', 
    'Database & Cloud', 
    'ML & Generative AI', 
    'Tools & UI'
  ];

  const skillsData = [
    { name: 'HTML/CSS', category: 'Frontend' },
    { name: 'JavaScript/TypeScript', category: 'Frontend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Vue.js', category: 'Frontend' },
    { name: 'Nuxt.js', category: 'Frontend' },
    
    { name: 'Python', category: 'Backend & APIs' },
    { name: 'C / C++', category: 'Backend & APIs' },
    { name: 'Express.js', category: 'Backend & APIs' },
    { name: 'Flask', category: 'Backend & APIs' },
    { name: 'FastAPI', category: 'Backend & APIs' },
    
    { name: 'MySQL', category: 'Database & Cloud' },
    { name: 'PostgreSQL', category: 'Database & Cloud' },
    { name: 'Supabase', category: 'Database & Cloud' },
    
    { name: 'PyTorch', category: 'ML & Generative AI' },
    { name: 'Scikit-Learn', category: 'ML & Generative AI' },
    { name: 'Pandas / NumPy', category: 'ML & Generative AI' },
    { name: 'CatBoost', category: 'ML & Generative AI' },
    { name: 'OpenCV', category: 'ML & Generative AI' },
    { name: 'LangChain', category: 'ML & Generative AI' },
    { name: 'Ollama', category: 'ML & Generative AI' },
    
    { name: 'Git', category: 'Tools & UI' },
    { name: 'GitHub Actions', category: 'Tools & UI' },
    { name: 'Jira', category: 'Tools & UI' },
    { name: 'Figma', category: 'Tools & UI' },
    { name: 'Swagger', category: 'Tools & UI' },
    { name: 'Streamlit', category: 'Tools & UI' },
    { name: 'Gradio', category: 'Tools & UI' },
  ];

  return (
    <div className="flex min-h-[50vh] lg:h-full w-full flex-col border border-pip-green p-4 shadow-crt drop-shadow-text-glow lg:p-8 lg:min-h-0">
      
      <div className="mb-6 flex shrink-0 flex-wrap justify-center gap-x-4 gap-y-2 border-b border-pip-mid/50 pb-4 lg:mb-8 lg:gap-x-8">
        {categories.map((category) => (
          <div
            key={category}
            onMouseEnter={() => setHoveredCategory(category)}
            onMouseLeave={() => setHoveredCategory(null)}
            className={`cursor-crosshair border-b-2 px-2 py-1 text-sm uppercase tracking-widest transition-all duration-300 lg:text-base ${
              hoveredCategory === category 
                ? 'border-pip-green text-pip-green font-bold shadow-crt' 
                : 'border-transparent text-pip-green opacity-70 hover:opacity-100'
            }`}
          >
            [{category}]
          </div>
        ))}
      </div>

      <div className="flex flex-1 flex-wrap content-start justify-center gap-3 overflow-y-auto pip-scrollbar pr-2 pb-4 lg:gap-4 lg:pr-4">
        {skillsData.map((skill, index) => {
          
          const isHovered = hoveredCategory === skill.category;
          const isDimmed = hoveredCategory !== null && hoveredCategory !== skill.category;

          return (
            <div
              key={index}
              className={`flex items-center justify-center border px-3 py-1 text-sm tracking-wider transition-all duration-300 md:text-base lg:px-4 lg:py-2 ${
                isHovered
                  ? 'bg-pip-green border-pip-green text-pip-black font-bold shadow-crt scale-105 z-10'
                  : isDimmed
                  ? 'border-pip-dark text-pip-green opacity-20 scale-95'
                  : 'border-pip-mid/40 text-pip-green opacity-80'
              }`}
            >
              {skill.name}
            </div>
          );
        })}
      </div>

    </div>
  );
}