import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-900 text-white pt-24"
    >
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">

        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-cyan-400 text-lg mb-3">
            Hello, I'm
          </p>

          <h1 className="text-5xl lg:text-7xl font-bold mb-4">
            Peddinti Srinu
          </h1>

          <h2 className="text-3xl text-gray-300 mb-6">
            Full Stack Developer
          </h2>

          <p className="text-gray-400 leading-8 mb-8 max-w-xl">
            I create modern, responsive and user-friendly web
            applications using React, JavaScript and Tailwind CSS.
            I enjoy solving problems and building beautiful digital
            experiences.
          </p>

          <div className="flex flex-wrap gap-4">

            <a
              href="#projects"
              className="btn"
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              className="border border-cyan-400 rounded-full px-6 py-3 flex items-center gap-2 hover:bg-cyan-500 transition"
            >
              <Download size={18} />
              Resume
            </a>

          </div>

          <div className="flex gap-5 mt-10">

            <a href="#">
              <Github
                size={28}
                className="hover:text-cyan-400 transition"
              />
            </a>

            <a href="#">
              <Linkedin
                size={28}
                className="hover:text-cyan-400 transition"
              />
            </a>

            <a href="#">
              <Mail
                size={28}
                className="hover:text-cyan-400 transition"
              />
            </a>

          </div>

        </motion.div>

        {/* Right Side */}

        <motion.div
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <div className="relative">

            <div className="absolute inset-0 rounded-full bg-cyan-500 blur-3xl opacity-30"></div>

            <img
              src="/profile.png"
              alt="Profile"
              className="relative w-80 h-80 rounded-full border-4 border-cyan-400 object-cover"
            />

          </div>

        </motion.div>

      </div>
    </section>
  );
}