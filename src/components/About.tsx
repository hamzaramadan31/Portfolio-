import React, { useEffect, useRef } from 'react';
import { CalendarDays, GraduationCap, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={aboutRef}
      className="py-20 bg-gray-50 dark:bg-gray-800 opacity-0"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, experience, and what drives my passion for creating outstanding digital experiences.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate frontend developer with over 5 years of experience building user-centered web applications. My journey in tech started when I discovered my passion for creating beautiful interfaces that solve real problems.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              What sets me apart is my dedication to clean, maintainable code and my eye for design details. I believe great products result from the perfect balance between functionality, performance, and aesthetics.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              When I'm not coding, you can find me hiking mountain trails, experimenting with new cooking recipes, or reading about the latest tech trends.
            </p>
          </div>

          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <Briefcase className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Work Experience</h4>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" /> 
                    2019 - Present
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Senior Frontend Developer at Tech Innovations Inc., where I lead a team of developers building enterprise web applications.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full mr-4">
                  <GraduationCap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 dark:text-white">Education</h4>
                  <p className="text-gray-600 dark:text-gray-400 flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" /> 
                    2015 - 2019
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor's Degree in Computer Science from University of Technology, with a focus on Web Development and User Experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;