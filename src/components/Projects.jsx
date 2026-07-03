import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A responsive portfolio website built with React and CSS.",
    image: "/project1.png",
    github: "#",
  
  },
{
  title: "Shopze - E-Commerce Application",
  description:
    "A modern and responsive e-commerce application developed using React and CSS, featuring product browsing, category filtering, shopping cart functionality, and a seamless user experience.",
  image: "/shopze.png",
  github: "https://github.com/peddintisrinu/shopez-e-commerce-application",
  
},
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-14"
        >
          My <span className="text-cyan-400">Projects</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="card overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="h-52 w-full object-cover rounded-lg"
              />

              <div className="mt-5">
                <h3 className="text-2xl font-semibold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-5">
                  {project.description}
                </p>

                <div className="flex gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 border border-cyan-400 px-4 py-2 rounded-full hover:bg-cyan-500 transition"
                  >
                    <Github size={18} />
                    GitHub
                  </a>

                  
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}