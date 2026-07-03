import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-24 bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">
            About <span className="text-cyan-400">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gray-300 leading-8 mb-5">
                I'm a Computer Science student passionate about web
                development and machine learning. I enjoy designing
                responsive websites and building applications that solve
                real-world problems.
              </p>

              <p className="text-gray-300 leading-8">
                My current technology stack includes React, JavaScript,
                Tailwind CSS, Python, Java, and SQL. I'm always learning
                new technologies and improving my development skills.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5">
              <div className="card text-center">
                <h3 className="text-3xl font-bold text-cyan-400">2</h3>
                <p className="mt-2 text-gray-400">Projects</p>
              </div>

              <div className="card text-center">
                <h3 className="text-3xl font-bold text-cyan-400">3</h3>
                <p className="mt-2 text-gray-400">Internships</p>
              </div>

              <div className="card text-center">
                <h3 className="text-3xl font-bold text-cyan-400">100%</h3>
                <p className="mt-2 text-gray-400">Dedication</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}