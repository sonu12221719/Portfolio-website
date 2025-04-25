import React, { useState } from 'react';
import { assets } from '../assets/assets';

const Skills = () => {
  const skills = [
    { image: assets.html, title: 'HTML', category: 'Frontend' },
    { image: assets.css, title: 'CSS', category: 'Frontend' },
    { image: assets.js, title: 'JavaScript', category: 'Frontend' },
    { image: assets.react, title: 'React', category: 'Frameworks' },
    { image: assets.tailwind, title: 'Tailwind CSS', category: 'Frontend' },
    { image: assets.bootstrap, title: 'Bootstrap', category: 'Frontend' },
    { image: assets.c, title: 'C', category: 'Programming Language' },
    { image: assets.cpp, title: 'CPP', category: 'Programming Language' },
    { image: assets.java, title: 'Java', category: 'Programming Language' },
    { image: assets.php, title: 'PHP', category: 'Programming Language' },
    { image: assets.laravel, title: 'Laravel', category: 'Frameworks' },
    { image: assets.nodejs, title: 'Node.js', category: 'Backend' },
    { image: assets.mongodb, title: 'MongoDB', category: 'Backend' },
    { image: assets.git, title: 'Git', category: 'Tools' },
    { image: assets.github, title: 'GitHub', category: 'Tools' },
    {image: assets.figma,title: 'Figma', category: 'Tools'},
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Frontend', 'Backend', 'Programming Language' , 'Frameworks', 'Tools'];

  const filteredSkills =
    selectedCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === selectedCategory);

  return (
    <section id="skills" className="relative py-20 text-white font-mono">
      {/* Gradient Background Overlay */}
      <div className="absolute z-0" />

      <div className="relative z-10 container mx-auto px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 tracking-wider">
          My <span className="bg-gradient-to-r from-teal-400 to-cyan-600 inline-block text-transparent bg-clip-text">Skills</span>
        </h1>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                selectedCategory === category
                  ? 'bg-cyan-500 text-white shadow-lg'
                  : 'bg-transparent border-cyan-500 text-cyan-300 hover:bg-cyan-600 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-[#1e293b] p-6 rounded-xl shadow-md hover:shadow-xl transform transition-transform hover:scale-105 flex flex-col items-center"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="h-16 w-16 object-contain mb-4"
              />
              <h2 className="text-lg font-semibold text-cyan-100">{skill.title}</h2>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
