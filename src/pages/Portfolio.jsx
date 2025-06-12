import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Mail, Phone, MapPin, Download } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const skills = [
    "Python", "Django", "Laravel", "React", "PostgreSQL",
    "MySQL", "Postman", "Github"
  ];
 
  const projects = [
  {
    title: "ELearning Management System",
    description: "Supports course management, student progress tracking, and community discussion forums for an online learning experience.",
    tags: ["React", "Django", "PostgreSQL", "RTK", "Tailwind"],
    github: "https://github.com/ankitkarki27/eLearning-Platform-django-react",
     image: "/image/padhai.png"
  },
  {
    title: "Constructions Company Website",
    description: "Company site with admin dashboard for managing projects, blogs, and services. Fully responsive for all devices.",
    tags: ["React", "Laravel", "MySQL", "Tailwind"],
    github: "https://github.com/ankitkarki27/Construction-backend",
    link: "https://rainbowconstructions.vercel.app/",
     image: "/image/construction-company.png"
  },
  {
    title: "Jobs Nepal",
    description: "Job portal where companies can post openings and users can browse and apply with ease.",
    tags: ["Laravel", "MySQL", "Tailwind CSS"],
    github: "https://github.com/ankitkarki27/job-portal",
     image: "/image/project-jobsnepal.png"
  },
  {
    title: "Trend-e-vision: E-commerce App",
    description: "Shopping platform with product browsing, cart, and checkout functionality.",
    tags: ["Django", "Tailwind CSS", "PostgreSQL"],
    github: "https://github.com/ankitkarki27/dj-ecomstore.git",
    link: "https://ankitkarki27.pythonanywhere.com/",
     image: "/image/project-trendy.png"
  },
  {
    title: "Bookmarker",
    description: "Tool to save, organize, and manage bookmarks in one place with a clean UI.",
    tags: ["Django", "React"],
    github: "https://github.com/ankitkarki27/bookmarker",
    link: "https://bookmarker-theta.vercel.app/",
     image: "/image/project-bookmarker.jpg"
  },
  {
    title: "Donors Nepal",
    description: "Connects blood seekers with nearby donors using location-based matching.",
    tags: ["PHP", "Laravel", "MySQL"],
    github: "https://github.com/ankitkarki27/Donors-Nepal.git",
    link: "https://github.com/ankitkarki27/Donors-Nepal.git",
         image: "/image/project-dn3.jpg"
  },
  {
    title: "Uthaoo: Online Scrap Collection System",
    description: "Lets users schedule and manage household scrap pickups through an online dashboard.",
    tags: ["PHP", "MySQL"],
    github: "https://github.com/ankitkarki27/uthaoo-Online-Scrap-Collection-System.git",
    date: "2023",
    image: "/image/project-uthaoo.jpg"
  }
];


  const experience = [
    {
      // role: "Backend Developer (Intern → Junior Developer)",
      role: "Backend Developer(Intern)",
      company: "NepBigyapan",
      period: "Dec 2024 – May 2025",
      description:
        "Started as a backend intern and transitioned to Junior Developer over 6 months. Gained hands-on experience with Laravel and Django while working on projects like an institution management system and a restaurant management system. Built RESTful APIs and explored full-stack development through small internal projects.",
    },
  ];

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100">
      {/* Modern Navbar - now matches content width */}
      <nav className="fixed top-0 w-full z-50 bg-black/90 backdrop-blur-md">
        <div className="mx-auto px-6 max-w-3xl">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div
              className="flex items-center"
              onClick={() => scrollToSection('about')}
            >
              <span className="text-xl font-bold text-white">अंकित.</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm font-bold cursor-pointer transition-colors ${activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {mobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95">
            <div className="px-6 py-2 space-y-2">
              {['about', 'projects', 'skills', 'experience', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`block w-full text-left py-2 text-sm font-medium ${activeSection === section ? 'text-white' : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {/* Hero/About Section */}
        <section id="about" className="min-h-[calc(100vh-4rem)] flex items-center">
          <div className="mx-auto px-6 py-12 w-full max-w-3xl">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold text-white">Ankit Karki</h1>
                <p className="text-gray-400">Backend Developer</p>

                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">ankitkarki8088@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">Kathmandu, Nepal</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-400">
                <p>
                  Hi, I'm Ankit, a passionate <span className="text-white font-bold">Backend Developer</span> with expertise in
                  Django, Python, Laravel and building scalable web applications.
                </p>
                <p>
                  My focus is on developing efficient APIs, optimizing database performance, and implementing
                  secure authentication systems.
                </p>
                <p className="text-m leading-relaxed">
                  Currently working on <span  className="text-white font-bold"><a href="https://github.com/ankitkarki27/eLearning-Platform-django-react" >Padhai </a></span> (LMS platform), where I lead the
                  development of both frontend and backend systems.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://drive.google.com/file/d/1bTqSOuzPvr34nuxSrdb36tpSxGywTKVp/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 bg-gray-300 hover:bg-gray-200 px-4 py-2 rounded-lg text-black hover:text-black transition-colors border border-gray-700 text-sm"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume</span>
                </a>

                <a
                  href="https://github.com/ankitkarki27"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-black hover:bg-gray-800 text-gray-300 hover:text-white transition-colors border border-gray-700"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href="https://www.linkedin.com/in/ankitkarki27/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-10 h-10 rounded-lg bg-black hover:bg-gray-800 text-gray-300 hover:text-white transition-colors border border-gray-700"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Content Sections */}
        <div className="mx-auto px-6 py-12 pb-32 space-y-16 max-w-3xl">
          {/* Skills Section */}
          <section id="skills">
            <h2 className="text-2xl font-bold mb-6 text-white">Skills</h2>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-3 py-1 rounded-full bg-gray-800 text-gray-200 text-sm cursor-pointer hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience">
            <h2 className="text-2xl font-bold mb-6 text-white">Experience</h2>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <div key={index} className="border-l-2 border-gray-500 pl-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-2">
                    <h3 className="font-semibold">{exp.role}</h3>
                    <span className="text-gray-400 text-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{exp.company}</p>
                  <p className="text-gray-300 text-sm">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects">
            <h2 className="text-2xl font-bold mb-6 text-white">Projects</h2>
            <div className="space-y-8">
              {projects.map((project, index) => (
                <div key={index} className="border border-gray-700 rounded overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 h-50 bg-gray-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-fit"
                      />
                    </div>
                    <div className="md:w-1/2 p-4">
                      <h3 className="font-bold text-lg mb-2 text-white">{project.title}</h3>
                      <p className="text-gray-300 mb-3 text-sm">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-3">
                        {project.tags.map((tags, i) => (
                          <span key={i} className="px-2 py-1 rounded-full bg-gray-800 text-gray-200 text-xs">
                            {tags}
                          </span>
                        ))}
                      </div>
                      <div className="flex space-x-3">
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center text-gray-400 hover:text-blue-300 text-xs font-medium transition-colors"
                        >
                          <Github className="w-3 h-3 mr-1" />
                          GitHub
                        </a>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-gray-400 hover:text-blue-300 text-xs font-medium transition-colors"
                          >
                            <ExternalLink className="w-3 h-3 mr-1" />
                            Live
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact">
            <h2 className="text-2xl font-bold mb-6 text-white">Contact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h3 className="font-semibold text-white">Get in touch</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">ankitkarki8088@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">+977 9876543210</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span className="text-gray-400 text-sm">Kathmandu, Nepal</span>
                  </div>
                </div>
                <div className="flex space-x-3 pt-2">
                  <a
                    href="https://github.com/ankitkarki27"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  >
                    <Github className="w-3 h-3" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/ankitkarki27/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition-colors"
                  >
                    <Linkedin className="w-3 h-3" />
                  </a>
                </div>
              </div>

              <div className="bg-black/50 p-4 rounded">
                <h3 className="font-semibold text-white mb-3">Send me a message</h3>
                <form className="space-y-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-300 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 py-2  border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-300 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 py-2 border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-xs font-medium text-gray-300 mb-1">Message</label>
                    <textarea
                      id="message"
                      rows="3"
                      className="w-full px-3 py-2  border border-gray-600 rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2  border border-gray-600  rounded text-white focus:outline-none focus:ring-1 focus:ring-gray-500 text-sm font-medium transition-colors cursor-pointer"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="border-t border-gray-800 py-4 text-gray-400">
          <div className="mx-auto px-6 text-center text-xs max-w-3xl">
            © {new Date().getFullYear()} Ankit Karki. All rights reserved.
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Portfolio;