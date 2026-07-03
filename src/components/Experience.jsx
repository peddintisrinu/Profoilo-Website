import { motion } from "framer-motion";

const experiences = [
  {
    title: "Machine Learning Intern",
    company: "SkillDzire",
    duration: "2026",
    description:
      "Worked on Machine Learning algorithms, data preprocessing, model training, and prediction using Python and Scikit-learn."
  },
  {
    title: "ServiceNow Virtual Intern",
    company: "SmartBridge",
    duration: "2026",
    description:
      "Completed hands-on training in ServiceNow platform including workflows, ITSM fundamentals, and automation."
  },
  {
    title: "Python for Beginners",
    company: "NIELIT",
    duration: "2026",
    description:
      "Successfully completed Python programming fundamentals including functions, OOP, and file handling."
  },
  {
    title: "Machine Learning Using Python",
    company: "NIELIT",
    duration: "2026",
    description:
      "Learned supervised learning, classification, regression, and model evaluation techniques."
  }
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Experience &
          <span className="text-cyan-400"> Certifications</span>
        </motion.h2>

        <div className="relative border-l-2 border-cyan-400">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12 ml-8 relative"
            >

              <div className="absolute -left-11 top-2 w-5 h-5 rounded-full bg-cyan-400"></div>

              <div className="card">

                <h3 className="text-2xl font-semibold">
                  {item.title}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {item.company}
                </p>

                <p className="text-gray-500 text-sm mt-1">
                  {item.duration}
                </p>

                <p className="mt-4 text-gray-300 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}