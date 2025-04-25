// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import React, { useEffect } from "react";
import { assets } from "../assets/assets";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  const [showPopup, setShowPopup] = React.useState(false);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadClick = () => {
    setShowPopup(true);
  };

  const handleDownload = (type) => {
    const path = type === "general" ? assets.general_cv : assets.specialized_cv;
    const link = document.createElement("a");
    link.href = path;
    link.download = type === "general" ? "General_CV.pdf" : "Specialized_CV.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowPopup(false);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    const buttons = document.querySelectorAll(".modern-button, .hover-lift");

    const handleMouseEnter = (e) =>
      e.currentTarget.classList.add("hover-active");
    const handleMouseLeave = (e) =>
      e.currentTarget.classList.remove("hover-active");

    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleMouseEnter);
      button.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleMouseEnter);
        button.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

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
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-16 overflow-hidden"
    >
      {/* Animated Background Balls */}
      {renderBackgroundBalls()}

      {/* CV Popup */}
      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-bold mb-4">Choose CV Type</h2>
            <div className="flex justify-center gap-4">
              <button
                onClick={() => handleDownload("general")}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg"
              >
                General CV
              </button>
              <button
                onClick={() => handleDownload("specialized")}
                className="bg-green-600 text-white px-4 py-2 rounded-lg"
              >
                Specialized CV
              </button>
            </div>
            <button
              onClick={closePopup}
              className="mt-4 text-red-600 underline"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      <div id="hero" className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 relative z-10">
        {/* Text */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl md:text-6xl font-display font-bold">
            <span className="inline text-white">Hello, I'm </span>
            <br />
            <TypeAnimation
              sequence={["Sonu Kumar", 2000, "Full Stack Developer", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="inline whitespace-nowrap text-gradient"
            />
          </h1>

          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4 mt-6">
            <button
              onClick={handleDownloadClick}
              className=" hover-lift bg-gradient-to-r from-teal-400 to-cyan-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition-transform cursor-pointer"
            >
              Download CV
            </button>
            <button
              onClick={scrollToContact}
              className=" hover-lift  text-white px-6 py-3 rounded-lg transition-transform cursor-pointer"
            >
              Let's Talk
            </button>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={assets.profile_pic}
            alt="Profile"
            className="rounded-full w-64 h-64 md:w-80 md:h-80 object-cover shadow-xl border-4 border-white"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
