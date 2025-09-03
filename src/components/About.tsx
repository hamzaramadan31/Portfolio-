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
            Get to know more about my journey, experience, and what drives my passion for aviation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
              My Journey
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Hi, I’m Hamza Ramadan, an Operations Manager with a proven track record in aviation logistics, customer service, and ground operations leadership.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I’ve advanced my career through hands-on experience with leading airlines such as JetBlue, Alaska Airlines, and Breeze Airways, specializing in optimizing operations, enhancing safety compliance, and driving team performance. From managing daily airport operations to training and mentoring agents, I ensure top-tier security standards, operational efficiency, and service excellence.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Beyond work, I’m passionate about aviation and the tech industry. I enjoy sports, traveling, and spending time with family, always seeking new opportunities to grow and stay connected to what matters most.
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
                    2023 - Present
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Led daily operations for JetBlue at DFW, optimizing agent scheduling and operational workflows. Conducted operational audits, safety briefings, and ensured accurate timesheet compliance. Provided leadership support to frontline teams, upholding safety and service standards on behalf of GAT Ground Support. 
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
                    2023 - 2025
                  </p>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300">
                Bachelor's Degree in Aviation Logistics from University of North Texas, with a focus on supply chain and business management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;