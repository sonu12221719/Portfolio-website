import React from 'react';
import { assets } from '../assets/assets';
import { FaCalendarAlt } from 'react-icons/fa';
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Projects = () => {
  const renderBackgroundBalls = () => {
    const balls = [];
    const colors = ["#60a5fa", "#34d399", "#f87171", "#fbbf24"];

    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 12 + 8;
      const top = Math.random() * 100;
      const left = Math.random() * 100;
      const duration = Math.random() * 10 + 6;
      const x = Math.random() * 40 - 20;
      const y = Math.random() * 40 - 20;
      const color = colors[Math.floor(Math.random() * colors.length)];

      balls.push(
        <motion.div
          key={i}
          className="absolute rounded-full z-0"
          style={{
            width: `${size}px`,
            height: `${size}px`,
            top: `${top}%`,
            left: `${left}%`,
            backgroundColor: color,
            opacity: 0.15,
          }}
          animate={{
            x: [0, x, 0],
            y: [0, y, 0],
          }}
          transition={{
            duration,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      );
    }

    return balls;
  };

  const projects = [
    {
      image: assets.unimarket,
      title: 'UniMarket',
      description: 'A secure platform for college students to buy and sell second-hand products within the campus.',
      date: 'Jan 2025',
      githubLink: 'https://github.com/sonu12221719/UniMarket/tree/sonu',
      // liveDemo: 'http://localhost:5174/',
      techStack: ['React', 'Node.js', 'Express', 'MongoDB'],
    },
    {
      image: assets.education_plus,
      title: 'Education Plus',
      description: 'A modern educational portal designed to simplify learning and course management.',
      date: 'Feb 2023',
      githubLink: 'https://github.com/sonu12221719/Education-Plus-',
      liveDemo: '',
      techStack: ['React', 'Firebase', 'Tailwind CSS'],
    },
    {
      image: assets.food_delivery,
      title: 'Food Delivery App',
      description: 'A fully functional food ordering and delivery system with real-time status updates.',
      date: 'Feb 2023',
      githubLink: 'https://github.com/your-profile/project2',
      liveDemo: '',
      techStack: ['React Native', 'Node.js', 'MongoDB', 'Socket.IO'],
    },
    {
      image: assets.spotify,
      title: 'Spotify Clone',
      description: 'A music streaming clone where users can listen to a variety of songs anytime.',
      date: 'Mar 2023',
      githubLink: 'https://github.com/your-profile/project3',
      liveDemo: 'https://live-demo-link.com/project3',
      techStack: ['React', 'Redux', 'Spotify API'],
    },
    {
      image: assets.helpinghand,
      title: 'Helping Hand',
      description: 'A platform where citizens can report issues and problems directly to government bodies.',
      date: 'Nov 2022',
      githubLink: 'https://github.com/your-profile/project4',
      liveDemo: '',
      techStack: ['Angular', 'Node.js', 'Express', 'MySQL'],
    },
  ];

  return (
    <section
      id="project"
      className="relative py-20 px-16 font-mono text-white z-10 overflow-hidden"
    >
      {/* Animated Background Balls */}
      {renderBackgroundBalls()}
      <div className="relative z-10 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-teal-400 to-cyan-600  text-transparent bg-clip-text text-center mb-16">Projects</h1>
        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-8 rounded-2xl shadow-xl hover:scale-105 transition-transform duration-300 w-full h-auto"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-contain rounded-md mb-4"
              />
              <h2 className="text-2xl font-bold mb-2">{project.title}</h2>
              <p className="mb-4 text-gray-300">{project.description}</p>
              <p className="text-sm text-gray-400 mb-4">
              <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-400" />
                      {project.date}
                    </span></p>
              <div className="flex flex-wrap gap-2 mb-4">
                <h3 className="text-lg font-semibold font-mono text-white">Tech Used:</h3>
                {project.techStack.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="text-md mt-0.5 font-semibold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"
                  >
                    {tech},
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-400 hover:underline"
                >
                  GitHub
                </a>
                {project.liveDemo && (
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-green-400 hover:underline"
                  >
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

export default Projects;
