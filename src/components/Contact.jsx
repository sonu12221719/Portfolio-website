import React, { useState } from 'react';
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-20 text-white font-mono">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl mb-8 leading-tight bg-gradient-to-r from-teal-400 to-cyan-600 text-transparent bg-clip-text">
          Let's Get in Touch
        </h1>
        <p className="text-xl font-medium mb-12 text-gray-300">
          I’d love to hear from you! Whether you have a project in mind or just want to say hello, feel free to reach out.
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-gradient-to-br from-gray-800 to-gray-700 p-8 rounded-lg shadow-2xl backdrop-blur-md">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-lg font-semibold text-gray-200 mb-2">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-3 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 transform hover:scale-105 bg-gray-900 text-gray-200"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg font-semibold text-gray-200 mb-2">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-3 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 transform hover:scale-105 bg-gray-900 text-gray-200"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-lg font-semibold text-gray-200 mb-2">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="6"
                className="w-full px-6 py-3 border-2 border-gray-600 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 transform hover:scale-105 bg-gray-900 text-gray-200"
                placeholder="Your message"
                required
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-teal-500 to-cyan-600 text-white text-lg font-semibold rounded-xl shadow-xl hover:from-teal-400 hover:to-cyan-500 transition duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </div>
          </div>
        </form>
        <div className="mt-12">
          <p className="text-lg text-gray-300 mb-4">You can also reach me at:</p>
          <p className="text-lg font-semibold text-teal-400 mb-6">
            <a href="mailto:your-email@example.com" className="flex items-center justify-center gap-2">
              <FaEnvelope /> sonukumar200219@gmail.com
            </a>
          </p>
          <div className="flex justify-center gap-6 text-3xl">
            <a
              href="https://www.linkedin.com/in/sonu-kumar-7b6803252/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-blue-400 transition"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/sonu12221719/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-gray-200 transition"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.instagram.com/sonu_kr_19/"
              target="_blank"
              rel="noreferrer"
              className="text-white hover:text-pink-400 transition"
            >
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
