import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'Youngest Operation Manager in Company History',
    description: 'Promoted to Operations Manager, becoming the youngest person to hold the role in GAT Ground support history. Led daily airline operations, managing over 25 agents while ensuring top performance and safety compliance. Built a reputation for leadership, adaptability, and operational excellence.',
    image: '/assets/jetblue.jfif',
    tags: [],
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Breeze Airways Station Launch at DFW',
    description: 'Successfully launched a new airline station at Dallas Fort Worth Airport. Trained and led a new team to operational readiness. Established safety, compliance, and daily workflow procedures.',
    image: '/assets/breeze2.webp',
    tags: [],
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Mastered All Major Airline Ticketing Systems',
    description: 'Trained and certified in leading global ticketing systems including Sabre, Amadeus, and GoNow. Expert in booking management, rebooking, fare adjustments, and ticket stock handling across different airline systems. Ensured fast and accurate service for both domestic and international operations, improving booking efficiency and customer satisfaction. One of the only few in DFW crossed trained on all major systems.',
    image: '/assets/sabre.jpg',
    tags: [],
    demoLink: '#',
    repoLink: '#',
  },
];

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="projects" 
      ref={projectsRef}
      className="py-20 bg-white dark:bg-gray-900 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            My <span className="text-blue-600 dark:text-blue-400">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Explore some of my recent work and projects that showcase my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-700 dark:hover:bg-gray-600 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
          >
            <Github className="h-5 w-5 mr-2" /> 
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;