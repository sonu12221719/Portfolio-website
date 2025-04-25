import React from 'react';
import { assets } from '../assets/assets';

const Certification = () => {
  const certificates = [
    {
      image: assets.Certificate_1,
      title: 'Dynamic Programming, Greedy Algorithms',
      link: 'https://www.coursera.org/account/accomplishments/certificate/S6SMCG985C8A',
    },
    { image: assets.Certificate_2, title: 'ChatGPT Advanced Data Analysis', link: 'https://www.coursera.org/account/accomplishments/certificate/GYMHXRZYKB9K' },
    { image: assets.Certificate_3, title: 'Learn to code with AI', link: 'https://www.coursera.org/account/accomplishments/certificate/2WKA8W4RS3S5' },
    { image: assets.Certificate_4, title: 'Algorithms on Strings', link: 'https://www.coursera.org/account/accomplishments/certificate/2F7QYMWFHSUU' },
    { image: assets.Certificate_5, title: 'ChatGPT Playground for Beginners: Intro to NLP AI', link: 'https://www.coursera.org/account/accomplishments/certificate/4JLQZMZ9X9QL' },
    { image: assets.Certificate_6, title: 'Server side JavaScript with Node.js', link: 'https://www.coursera.org/account/accomplishments/certificate/6ZYB2LKVEG84' },
    { image: assets.Certificate_7, title: 'HTML, CSS, and Javascript for Web Developers', link: 'https://www.coursera.org/account/accomplishments/certificate/SEV2UAC5LQDE' },
    { image: assets.Certificate_8, title: 'ChatGPT for Beginners: Save time with Microsoft Excel', link: 'https://www.coursera.org/account/accomplishments/certificate/ZFV3AM4A3K2V' },
  ];

  return (
    <section
      id="certificates"
      className="py-20 text-white"
    >
      <div className="max-w-6xl mx-auto text-center px-4">
        <h1 className="text-4xl  mb-10 bg-gradient-to-r from-teal-400 to-cyan-600 inline-block text-transparent bg-clip-text">
          My Certificates
        </h1>

        {/* Scrollable and animated row */}
        <div className="overflow-x-auto overflow-y-hidden snap-x snap-mandatory no-scrollbar">
          <div className="flex min-w-max gap-6 px-2 animate-scroll-left hover:[animation-play-state:paused]">
            {[...certificates, ...certificates].map((certificate, index) => (
              <a
                key={index}
                href={certificate.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-64 h-64 bg-gradient-to-br from-[#1e293b] to-[#0f172a] border border-cyan-500/20 backdrop-blur-md rounded-xl shadow-lg hover:shadow-cyan-500/30 hover:scale-105 transition-all duration-300 shrink-0 p-3 flex flex-col justify-center items-center snap-start"
              >
                <img
                  src={certificate.image}
                  alt={certificate.title}
                  className="w-full h-44 object-contain rounded-lg"
                />
                <p className="mt-3 font-medium text-sm text-center text-white">{certificate.title}</p>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Custom animation & scrollbar hiding */}
      <style>
        {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
          }

          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
          .no-scrollbar {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
        `}
      </style>
    </section>
  );
};

export default Certification;
