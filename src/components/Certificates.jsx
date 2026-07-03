import { motion } from "framer-motion";
import { Award } from "lucide-react";

const certificates = [
  "Machine Learning Internship - SkillDzire",
  "ServiceNow Virtual Internship - SmartBridge",
  "Python for Beginners - NIELIT",
  "Machine Learning using Python - NIELIT"
];

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="py-24 bg-slate-900 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-4xl font-bold text-center mb-14"
        >
          My <span className="text-cyan-400">Certificates</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">

          {certificates.map((certificate, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="card flex items-center gap-5"
            >

              <Award
                size={40}
                className="text-cyan-400"
              />

              <h3 className="text-lg font-medium">
                {certificate}
              </h3>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}