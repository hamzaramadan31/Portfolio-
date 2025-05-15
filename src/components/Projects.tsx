import React, { useEffect, useRef } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce solution with product catalog, cart functionality, and secure checkout process.',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux'],
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application that helps users organize tasks, set priorities, and track progress.',
    image: 'https://images.pexels.com/photos/1029757/pexels-photo-1029757.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['React', 'Firebase', 'Tailwind CSS'],
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Travel Blog Platform',
    description: 'A content-focused platform for travel enthusiasts to share experiences and recommendations.',
    image: 'https://images.pexels.com/photos/7412069/pexels-photo-7412069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Vue.js', 'Express', 'PostgreSQL'],
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