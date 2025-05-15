import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  repoLink: string;
}

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full transform hover:-translate-y-1 transition-transform duration-300">
      <div className="relative overflow-hidden h-48">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4 flex-grow">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 text-sm font-medium rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between mt-auto">
          <a 
            href={project.demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
            aria-label={`View live demo of ${project.title}`}
          >
            <ExternalLink className="h-4 w-4 mr-1" /> 
            Live Demo
          </a>
          
          <a 
            href={project.repoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-gray-700 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white font-medium"
            aria-label={`View source code of ${project.title}`}
          >
            <Github className="h-4 w-4 mr-1" /> 
            Source Code
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;