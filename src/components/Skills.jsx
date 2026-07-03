import { motion } from "framer-motion";

const skills = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "React" },
  { name: "Python" },
  { name: "Java" },
  { name: "SQL" },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-12"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              className="card"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span>{skill.level}</span>
              </div>

              
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}