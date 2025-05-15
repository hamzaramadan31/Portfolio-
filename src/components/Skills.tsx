import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skillsData: Skill[] = [
  { name: 'HTML & CSS', level: 95, color: 'bg-blue-600 dark:bg-blue-500' },
  { name: 'JavaScript', level: 90, color: 'bg-yellow-500 dark:bg-yellow-400' },
  { name: 'React', level: 88, color: 'bg-cyan-500 dark:bg-cyan-400' },
  { name: 'TypeScript', level: 85, color: 'bg-blue-500 dark:bg-blue-400' },
  { name: 'Node.js', level: 75, color: 'bg-green-600 dark:bg-green-500' },
  { name: 'UI/UX Design', level: 80, color: 'bg-purple-600 dark:bg-purple-500' },
];

const techStack = [
  'React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 
  'Tailwind CSS', 'SASS', 'Node.js', 'Express', 'MongoDB', 
  'PostgreSQL', 'GraphQL', 'REST APIs', 'Git', 'Figma', 
  'Adobe XD', 'Jest', 'Cypress', 'Docker', 'AWS'
];

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const barRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          
          // Animate progress bars after section appears
          barRefs.current.forEach((bar, index) => {
            if (bar) {
              setTimeout(() => {
                bar.style.width = `${skillsData[index].level}%`;
              }, 300 + index * 100);
            }
          });
        }
      },
      { threshold: 0.1 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="skills" 
      ref={skillsRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            A showcase of my technical skills and areas of expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Proficiency
            </h3>
            
            <div className="space-y-6">
              {skillsData.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-gray-600 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                    <div
                      ref={(el) => (barRefs.current[index] = el)}
                      className={`h-2.5 rounded-full ${skill.color}`}
                      style={{ width: '0%', transition: 'width 1s ease-in-out' }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technology Stack
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech, index) => (
                <span 
                  key={index} 
                  className="px-4 py-2 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 hover:shadow-md transition-shadow duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;