import React, { useState } from 'react';
import { Github, Linkedin, FileText, ExternalLink, Mail, File } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');

  const skills = [
    "Python", "Django", "Laravel", "React", "PostgreSQL",
    "MySQL", "Postman", "Github"
  ];

  const projects = [
    {
      title: "ELearning Management System",
      description: "A Full-stack eLearning platform with community features, built with Django, React (Vite), and PostgreSQL. Implements Redux Toolkit for state management and Cloudinary for media storage. Admins can create/manage courses, track enrollments, and moderate forums. Students can enroll in courses, complete lessons, and participate in discussion forums.",
      tags: [
        "React (Vite)",
        "Django",
        "PostgreSQL",
        "Redux Toolkit",
        "Cloudinary",
        "Tailwind CSS"
      ],
      github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",

    },
    {
      title: "Constructions Company Website",
      description: "A full-stack web app built with Laravel, React (Vite), and MySQL. Admins can easily manage and publish projects, blogs, and services. Visitors can explore project galleries, read blog posts, and learn about the company. Fully responsive and optimized for a smooth user experience.",
      tags: ["React", "Laravel", "MySQL", "Tailwind"],
      github: "https://github.com/ankitkarki27/Construction-backend",
      link: "https://rainbowconstructions.vercel.app/"
    },
    {
      title: "Jobs Nepal",
      description: "A job portal built with Laravel, Tailwind CSS, and MySQL. Companies can post job openings, and seekers can browse and apply easily through a user-friendly interface.",
      tags: ["Laravel", "MySQL", "Tailwind CSS"],
      github: "https://github.com/ankitkarki27/job-portal",

    },
    {
      title: "Trend-e-vision: E-commerce App",
      description: "An e-commerce platform built with Django, Tailwind CSS, and PostgreSQL. It offers a seamless shopping experience with product browsing, order and checkout.",
      link: "https://ankitkarki27.pythonanywhere.com/",
      github: "https://github.com/ankitkarki27/dj-ecomstore.git"
    },
    {
      title: "Bookmarker",
      description: "A full-stack web app for efficiently saving, organizing, and managing your favorite website links in one place.",
      tags: ["Django", "React"],
      github: "https://github.com/ankitkarki27/bookmarker",
      link: "https://bookmarker-theta.vercel.app/",

    },
    {
      title: "Donors Nepal",
      description: "An online blood donor finder built with PHP, MySQL, and Bootstrap. It connects blood seekers with nearby donors using the Haversine algorithm for accurate location-based matching.",
      tags: ["PHP", "Laravel", "MySQL"],
      github: "https://github.com/ankitkarki27/Donors-Nepal.git",
      link: "https://github.com/ankitkarki27/Donors-Nepal.git",

    },
    {
      title: "Uthaoo: Online Scrap Collection System",
      category: "full-stack",
      description: "A full-stack web application for scheduling and managing scrap pickups, developed using PHP for the backend, MySQL for the database, and HTML, CSS, and JavaScript for the frontend.",
      image: "assets/image/project-uthaoo.jpg",
      tags: ["PHP", "MySQL"],
      github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
      date: "2023"
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
              <h1 className="text-4xl sm:text-5xl font-bold text-white mb-2">Ankit Karki</h1>
              <p className="text-blue-400 text-xl font-medium">Backend Developer</p>
            </div>

            <div className="space-y-2 text-gray-400 justify-between">
              <p className="text-m leading-relaxed">
                Hi, I'm Ankit, a passionate <span className="text-white font-medium">Backend Developer</span> with expertise in
                Django, Python, laravel and building scalable web applications. Based in Kathmandu, Nepal, I specialize
                in creating robust server-side solutions.
              </p>

              <div className="space-y-2">
                <p className="text-m leading-relaxed">
                  My focus is on developing efficient APIs, optimizing database performance, and implementing
                  secure authentication systems to power modern web applications.
                </p>
              </div>

              <p className="text-m leading-relaxed">
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
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Github className="w-5 h-5" />

            </a>
            <a
              href="https://www.linkedin.com/in/ankitkarki27/" target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Linkedin className="w-5 h-5" />

            </a>
            <a
              href="mailto:ankitkarki8088@gmail.com" target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <Mail className="w-5 h-5" />

            </a>

            <a
              href="https://drive.google.com/file/d/1bTqSOuzPvr34nuxSrdb36tpSxGywTKVp/view?usp=sharing" target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors"
            >
              <File className="w-5 h-5" />
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
          <div className="flex justify-center bg-black/80 backdrop-blur-md rounded-full shadow-2xl p-1 border border-gray-800">
            {['about', 'projects', 'skills', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`capitalize transition-all duration-200 ease-out px-6 py-2.5 rounded-full text-sm font-medium mx-1 relative ${activeSection === section
                  ? 'bg-gray-200 text-black shadow-lg'
                  : 'text-gray-300 hover:bg-gray-400 hover:text-black'
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
