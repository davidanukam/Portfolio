import { useState, useEffect } from "react";
import {
  Code2,
  User,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Instagram,
  Youtube,
  ExternalLink,
  ChevronDown,
  Sparkles,
  Brain,
  Database,
  Smartphone,
} from "lucide-react";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const skills = {
    languages: ["Python", "Java", "SQL", "HTML5", "CSS", "JavaScript"],
    tools: [
      "Visual Studio Code",
      "Git",
      "GitHub",
      "Docker",
      "Trello",
      "Supabase",
    ],
    frameworks: ["PyTorch", "TensorFlow", "ReactJS", "PostgreSQL", "NextJS"],
  };

  const projects = [
    {
      title: "Purplr",
      description:
        "Leading the development of a full-stack marketplace application for university students, utilizing React Native and TypeScript for the frontend, Supabase for the database, and a Spring Boot backend.",
      tech: ["React Native", "TypeScript", "Supabase", "Spring Boot"],
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Real-Time Web Search",
      description:
        "Developed and deployed a full-stack web application that produced more than 1,000,000,000+ search results. Utilized PostgreSQL for data storage, RapidAPI for a RESTful API backend, and NextJS for the user interface.",
      tech: ["PostgreSQL", "RapidAPI", "NextJS", "RESTful API"],
      icon: <Database className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "YouTube Channel Analyzer",
      description:
        "Created a Streamlit application to fetch and display YouTube data, integrating data scraping with Python for comprehensive channel analytics and insights.",
      tech: ["Python", "Streamlit", "Data Scraping", "YouTube API"],
      icon: <Brain className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
  ];

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/davidanukam",
      icon: <Github className="w-6 h-6" />,
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/david-anukam",
      icon: <Linkedin className="w-6 h-6" />,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/david_anukam",
      icon: <Instagram className="w-6 h-6" />,
      color: "hover:text-pink-400",
    },
    {
      name: "YouTube",
      url: "https://youtube.com/@Duzzenn",
      icon: <Youtube className="w-6 h-6" />,
      color: "hover:text-red-400",
    },
  ];

  return (
    <div className="min-h-screen bg-[#030303] text-white overflow-x-hidden">
      {/* Navigation 030303 */}
      <nav
        className="fixed top-0 w-full z-50 backdrop-blur-md shadow-nav"
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-white bg-clip-text text-transparent">
              David Anukam
            </div>
            <div className="hidden md:flex space-x-8">
              {["About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        {/* Animated Background */}
        {/* <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-20 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-green-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
        </div> */}

        {/* 333232 */}
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="bg-[#161616] p-12 rounded-3xl shadow-nm">
            <div className="bg-[#2f2f2f] p-8 rounded-2xl shadow-ns">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">
                <span className="text-white bg-clip-text text-transparent">
                  David Anukam
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in delay-300">
                Computer Science Student & Aspiring ML Engineer
              </p>
              <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto animate-fade-in delay-500">
                Building the future with code, one project at a time. Passionate
                about solving real-world problems and creating cost-effective
                solutions that make our world smarter and more interconnected.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-700">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="glow-button bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
                >
                  View My Work
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="glass-button px-8 py-4 rounded-xl font-semibold border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 transform hover:scale-105"
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="w-8 h-8 text-gray-400" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-300">
              <div className="flex items-center mb-6">
                <User className="w-8 h-8 text-purple-400 mr-3" />
                <h3 className="text-2xl font-bold">My Journey</h3>
              </div>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm currently pursuing an Honours Specialization in Computer
                Science with a minor in Software Engineering at Western
                University. My passion lies in developing innovative solutions
                that bridge the gap between complex technology and real-world
                applications.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you can find me watching tech YouTubers,
                playing soccer, or hitting the gym with friends. I believe in
                continuous learning and sharing knowledge through my YouTube
                channel{" "}
                <u>
                  <span className="text-red-400">
                    <a
                      href="https://www.youtube.com/@Duzzenn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Duzzenn
                    </a>
                  </span>
                </u>
                .
              </p>
            </div>

            <div className="space-y-6">
              <div className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-green-400/30 transition-all duration-300 group">
                <h4 className="text-xl font-semibold mb-3 text-green-400">
                  What I Love ❤️
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-green-400" /> Next.js
                    + TailwindCSS
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-blue-400" /> React +
                    Expo
                  </li>
                  <li className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-purple-400" /> GitHub
                    + LeetCode
                  </li>
                </ul>
              </div>

              <div className="glassmorphism p-6 rounded-xl border border-white/10 hover:border-orange-400/30 transition-all duration-300 group">
                <h4 className="text-xl font-semibold mb-3 text-orange-400">
                  Currently Learning 🔥
                </h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-yellow-400" /> Python +
                    PyTorch
                  </li>
                  <li className="flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-blue-400" /> AWS +
                    PostgreSQL
                  </li>
                  <li className="flex items-center">
                    <Code2 className="w-4 h-4 mr-2 text-green-400" /> Numpy +
                    Matplotlib
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Skills & Technologies
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-purple-400 flex items-center">
                <Code2 className="w-6 h-6 mr-3" />
                Programming Languages
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.languages.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-purple-500/20 border border-purple-400/30 rounded-full text-sm font-medium text-purple-300 hover:bg-purple-500/30 hover:border-purple-400/50 transition-all duration-200 cursor-pointer hover:transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-blue-400/30 transition-all duration-300 group hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-blue-400 flex items-center">
                <Briefcase className="w-6 h-6 mr-3" />
                Developer Tools
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.tools.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm font-medium text-blue-300 hover:bg-blue-500/30 hover:border-blue-400/50 transition-all duration-200 cursor-pointer hover:transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-green-400/30 transition-all duration-300 group hover:transform hover:scale-105">
              <h3 className="text-2xl font-bold mb-6 text-green-400 flex items-center">
                <Database className="w-6 h-6 mr-3" />
                Frameworks & Libraries
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.frameworks.map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-green-500/20 border border-green-400/30 rounded-full text-sm font-medium text-green-300 hover:bg-green-500/30 hover:border-green-400/50 transition-all duration-200 cursor-pointer hover:transform hover:scale-110"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-green-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-green-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Here are some of my key projects that showcase my skills in
              full-stack development, machine learning, and problem-solving.
            </p>
          </div>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="glassmorphism p-8 rounded-2xl border border-white/10 hover:border-white/20 transition-all duration-500 group hover:transform hover:scale-105 hover:rotate-1 cursor-pointer"
                style={{
                  transform: "perspective(1000px)",
                }}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}
                >
                  {project.icon}
                </div>

                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs font-medium text-gray-300 border border-white/20 hover:border-white/40 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button className="flex items-center text-purple-400 hover:text-purple-300 font-semibold group/btn">
                  Learn More
                  <ExternalLink className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-200" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Let's Connect
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
            <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
              Ready to collaborate on exciting projects or discuss
              opportunities? I'd love to hear from you!
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="glassmorphism p-8 rounded-2xl border border-white/10 mb-8">
              <div className="flex items-center justify-center mb-6">
                <Mail className="w-8 h-8 text-blue-400 mr-3" />
                <span className="text-2xl font-semibold">
                  davidanukam72@gmail.com
                </span>
              </div>
              <p className="text-center text-gray-400">
                Feel free to reach out via email or connect with me on social
                media
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`glassmorphism p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 group hover:transform hover:scale-110 text-center ${link.color}`}
                >
                  <div className="flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                    {link.icon}
                  </div>
                  <span className="text-sm font-medium text-gray-300 group-hover:text-white">
                    {link.name}
                  </span>
                </a>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-gray-500">
                © 2025 David Anukam. Built with React & Tailwind CSS
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
