/* eslint-disable no-unused-vars */
import { motion as Motion } from "framer-motion";
import { motion } from "framer-motion";
import React from "react";
import { FaCalendarAlt, FaGraduationCap, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export default function MilestoneTimeline() {
  const education = [
    {
      title: "Bachelor of Technology - Computer Science",
      institution: "Lovely Professional University",
      location: "Jalandhar, Punjab",
      duration: "2022 - 2026",
      score: "CGPA: 7.12",
      description: "Focusing on software development, algorithms, and computer systems",
      color: "from-[#0ff] to-[#00f6ff]",
    },
    {
      title: "Class XII",
      institution: "Guru Gobind Singh School",
      location: "Bokaro steel city, Jharkhand",
      duration: "2020 - 2022",
      score: "Percentage: 80.6%",
      description: "Completed with distinction in Mathematics and Computer Science",
      color: "from-[#a855f7] to-[#6366f1]",
    },
    {
      title: "Class X",
      institution: "Sant Pathik Vidya Vihar",
      location: "Bhagalpur, Bihar",
      duration: "2018 - 2020",
      score: "Percentage: 86%",
      description: "Achieved excellence in Science and Mathematics",
      color: "from-[#22d3ee] to-[#3b82f6]",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // Generate multiple small animated balls
  const renderBackgroundBalls = () => {
    const balls = [];
    const colors = ["#60a5fa", "#34d399", "#f87171", "#fbbf24"]; // Blue, green, red, yellow

    for (let i = 0; i < 30; i++) {
      const size = Math.random() * 12 + 8; // size between 8px and 20px
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

  return (
    <section className="py-20 text-white font-mono relative">
      {/* Animated Background Balls */}
      {renderBackgroundBalls()}
      <div className="absolute z-0" />
      <div className="container mx-auto px-4 relative z-10">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-blue-600 text-transparent bg-clip-text">
            Education Journey
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            My academic path that shaped my passion for technology and development
          </p>
        </Motion.div>

        <Motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {education.map((item, index) => (
            <Motion.div key={index} variants={itemVariants}>
              <div className="relative group bg-[#1e293b] border border-cyan-500/20 backdrop-blur-xl p-6 rounded-xl shadow-lg transition-transform hover:scale-[1.03] hover:shadow-cyan-500/30 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-10 group-hover:opacity-20 rounded-xl transition-all`} />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-600/20 rounded-lg">
                      <FaGraduationCap className="text-cyan-400 text-2xl" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  </div>
                  <p className="text-lg font-semibold text-cyan-300 mb-2">{item.institution}</p>
                  <p className="text-slate-400 mb-4">{item.description}</p>
                  <div className="flex flex-col gap-2 text-sm text-slate-400">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt className="text-cyan-400" />
                      {item.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt className="text-cyan-400" />
                      {item.duration}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaStar className="text-cyan-400" />
                      {item.score}
                    </span>
                  </div>
                </div>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>
    </section>
  );
}
