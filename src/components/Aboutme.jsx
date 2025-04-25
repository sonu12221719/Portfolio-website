import React from "react";
import Education from "./Education";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const Aboutme = () => {
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

  return (
    <section
      id="about-me"
      className="relative isolate overflow-hidden px-6 py-16 sm:py-24 lg:px-8 font-mono"
    >
      {/* Animated Background Balls */}
      {renderBackgroundBalls()}
      <div className="relative z-10 mx-auto max-w-4xl text-center ">
        <h1 className="text-4xl font-mono font-bold tracking-tight text-white sm:text-5xl mb-6 animate-fade-in cursor-pointer">
          About Me
        </h1>
        <p className="text-lg leading-8 text-white animate-fade-in delay-200">
          I’m a{" "}
          <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient font-bold">
            Computer Science student
          </span>{" "}
          with a deep interest in building smart, scalable digital solutions. I
          specialize in{" "}
          <span className="bg-gradient-to-r from-blue-400 via-cyan-500 to-green-400 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient font-bold">
            full-stack web development
          </span>{" "}
          and have hands-on experience in designing modern applications using
          the{" "}
          <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient font-bold">
            MERN stack
          </span>
          . From solving complex problems to crafting clean UI/UX, I’m
          passionate about turning ideas into reality through code.
        </p>
      </div>
      {/* <div className="relative z-10">
      </div> */}
        <Education />
    </section>
  );
};

export default Aboutme;
