import { useState, useEffect } from 'react';
import { Github, ExternalLink, Linkedin, Mail, FileText, Menu } from 'lucide-react';

const Portfolio = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
          element.classList.add('animate-fade-in');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-poppins">

      <nav className="fixed w-full top-0 left-0 px-4 sm:px-16 py-4 backdrop-blur-md z-50 transition-colors">
        <div className="border-b border-gray-800 pb-4 max-w-4xl mx-auto flex justify-between items-center">
          <div className="text-xl font-bold cursor-pointer "><a href="#about">अंकित</a></div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center text-sm space-x-8">
            <a href="#about" className="text-gray-400 hover:text-white transition">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition">Contact</a>
            <a
              href="/Ankit-Karki-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-4 py-2 rounded-xl hover:bg-gray-900 transition font-sm"
            >
              Resume
            </a>

          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-gray-400 hover:text-white"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed w-full top-0 left-0 bg-black/95 backdrop-blur-md z-40 pt-16 pb-8 px-4 md:hidden transition-transform duration-300 ease-in-out ${mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
      >
        <div className="flex flex-col space-y-4">
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-gray-400 hover:text-white py-2 px-4"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMobileMenu}
            className="text-gray-400 hover:text-white py-2 px-4"
          >
            Projects
          </a>
          <a
            href="#contact"
            onClick={closeMobileMenu}
            className="text-gray-400 hover:text-white py-2 px-4"
          >
            Contact
          </a>
          <a
            href="/Ankit-Karki-resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition text-center font-medium mt-2"
          >
            Resume
          </a>
        </div>
      </div>

      {/* Hero Section */}
      <section id="about" className="pt-24 pb-16 px-8">
        <div className="max-w-4xl mx-auto">
          {/* Main Content */}
          <div className="animate-on-scroll" style={{ opacity: 0 }}>
            <h1 className="text-4xl md:text-5xl sm:font-normal lg:font-bold mb-1 text-white">Ankit Karki</h1>


            <p className="text-lg md:text-lg text-gray-400 mb-8">Backend Developer</p>

            <div className="text-gray-400 leading-relaxed mb-12 space-y-4 justify-center-safe">
              <p>
                Hi, I'm Ankit, a passionate <span className="text-white font-medium">Backend Developer</span> with expertise in
                Django, Python, and building scalable web applications. Based in Kathmandu, Nepal, I specialize
                in creating robust server-side solutions.
              </p>
              <p>
                My focus is on developing efficient APIs, optimizing database performance, and implementing
                secure authentication systems to power modern web applications.
              </p>
              <p>
                Currently working on <span className="text-white font-medium">Trendy</span> (e-commerce platform)
                and <span className="text-white font-medium">ePadhai</span> (LMS platform), where I architect and
                implement core backend functionalities.
              </p>
            </div>
          </div>

          <h2 className="text-xl font-bold mb-4 text-white animate-on-scroll" style={{ opacity: 0 }}>Skills</h2>
          <div className="flex flex-wrap gap-3 text-sm animate-on-scroll" style={{ opacity: 0 }}>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-2xl border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all cursor-default">Python</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-2xl border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all cursor-default">Django</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-2xl border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all cursor-default">Django REST Framework</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-2xl border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all cursor-default">PostgreSQL</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-2xl border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all cursor-default">MySQL</span>
            <span className="bg-gray-800 text-white px-4 py-2 rounded-2xl border border-gray-700 hover:border-gray-600 hover:bg-gray-700 transition-all cursor-default">Laravel</span>
          </div>
        </div>
      </section>
      <ProjectsSection />

      {/* Contact Section */}
      <section id="contact" className="py-16 px-8 pb-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-white animate-on-scroll" style={{ opacity: 0 }}>Let's Connect</h2>
          <div className="flex space-x-6 animate-on-scroll" style={{ opacity: 0 }}>
            <a
              href="https://github.com/ankitkarki27"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/ankitkarki27/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:ankitkarki8088@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
            <a
              href="/Ankit-Karki-resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Ankit Karki. All rights reserved.
      </footer>
    </div>
  );
};

const ProjectsSection = () => {
  const projects = [
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
      title: "Trendy: E-commerce App",
      description: "An e-commerce platform built with Django, Tailwind CSS, and PostgreSQL. It offers a seamless shopping experience with product browsing, order and checkout.",
      link: "https://ankitkarki27.pythonanywhere.com/",
      github: "#"
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
    }
  ];

  return (
    <section id="projects" className="py-16 px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-white animate-on-scroll" style={{ opacity: 0 }}>Projects</h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border-b border-gray-800 pb-8 animate-on-scroll hover:border-gray-700 transition-colors"
              style={{
                opacity: 0,
                animationDelay: `${index * 0.1}s`
              }}
            >
              <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
              <p className="text-gray-400 mb-6 space-y-4 leading-relaxed">
                {project.description}
              </p>

              {project.tags && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="text-gray-300 hover:text-white transition-colors flex items-center group text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="w-4 h-4 mr-1" />
                  GitHub
                </a>
                {project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    className="text-green-300 hover:text-blue-400 transition-colors flex items-center group text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;