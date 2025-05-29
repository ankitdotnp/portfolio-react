import React, { useState } from 'react';
import { Github, Linkedin, FileText, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const skills = [
    "JavaScript", "Python", "Django", "React", "Node.js", "PostgreSQL",
    "MongoDB", "Docker", "AWS", "Git", "TypeScript", "Express.js"
  ];

  const projects = [
    {
      name: "Task Management System",
      description: "A full-stack web application for team task management with real-time updates and user authentication.",
      github: "https://github.com",
      demo: "#"
    },
    {
      name: "E-Commerce API",
      description: "RESTful API built with Django and PostgreSQL featuring payment integration and inventory management.",
      github: "https://github.com",
      demo: "#"
    },
    {
      name: "Weather Dashboard",
      description: "React-based dashboard displaying weather data with interactive charts and responsive design.",
      github: "https://github.com",
      demo: "#"
    },
    {
      name: "Blog Platform",
      description: "Content management system with user roles, rich text editor, and SEO optimization features.",
      github: "https://github.com",
      demo: "#"
    }
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Tech Solutions Ltd",
      period: "2023 - Present",
      description: "Develop and maintain web applications using React and Django. Collaborate with cross-functional teams to deliver scalable solutions."
    }
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      <section id="about" className="min-h-[70vh] flex items-center ">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 w-full">
          <div className="space-y-8">
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Alex Johnson</h1>
              <p className="text-blue-400 text-xl font-medium">Full Stack Developer</p>
            </div>

            <div className="space-y-2 text-gray-300">
              <p className="text-lg leading-relaxed">
                Hi, I'm Alex, a passionate <span className="text-white font-medium">Full Stack Developer</span> with expertise in
                React, Django, and building scalable web applications. Based in San Francisco, I specialize
                in creating complete digital solutions from front to back.
              </p>

              <div className="space-y-4">
                <p className="text-lg leading-relaxed">
                  My focus is on developing efficient full-stack systems, optimizing performance, and implementing
                  secure, maintainable architectures for modern web applications.
                </p>
              </div>

              <p className="text-lg leading-relaxed">
                Currently working on <span className="text-white font-medium">Trendy</span> (e-commerce platform)
                and <span className="text-white font-medium">ePadhai</span> (LMS platform), where I lead the
                development of both frontend and backend systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Main Content with padding bottom for navigation */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 pb-32 space-y-16">
        {/* Skills */}
        <section id="skills">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((skill, index) => (
              <span
                key={index}
                className="px-4 py-2 rounded-full bg-gray-800 text-gray-200 text-sm hover:bg-gray-700 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
        {/* Experience */}
        <section id="experience">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Experience</h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-3">
                  <h3 className="font-semibold text-lg sm:text-xl">{exp.role}</h3>
                  <span className="text-gray-400 text-sm">{exp.period}</span>
                </div>
                <p className="text-blue-400 font-medium mb-3">{exp.company}</p>
                <p className="text-gray-300">{exp.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Projects</h2>
          <div className="space-y-8">
            {projects.map((project, index) => (
              <div key={index} className="border-l-2 border-blue-500 pl-6">
                <h3 className="font-semibold text-lg sm:text-xl mb-3">{project.name}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    GitHub
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* Contact */}
        <section id="contact">
          <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-white">Contact</h2>
          <div className="flex space-x-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-2 text-gray-400">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} Alex Johnson. All rights reserved.
        </div>
      </footer>

      {/* Bottom Navigation - Fixed position */}
      <nav className="fixed bottom-4 left-0 right-0 z-50">
        <div className="max-w-md mx-auto px-4">
          <div className="flex justify-center bg-gray-900 rounded-full shadow-lg p-1 border border-gray-700">
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all px-4 py-2 rounded-full text-sm font-medium mx-1 ${activeSection === section
                  ? 'bg-gray-600 text-white'
                  : 'text-white hover:bg-gray-700'
                  }`}
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Portfolio;
