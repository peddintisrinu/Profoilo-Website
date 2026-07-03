import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const education = [
  {
    degree: "Bachelor of Technology (B.Tech)",
    branch: "Computer Science & Engineering",
    college: "JNTU College of Engineering, Kalikiri",
    year: "2023 - 2027",
    cgpa: "7.8 CGPA"
  },
  {
    degree: "Intermediate (MPC)",
    branch: "Mathematics, Physics & Chemistry",
    college: "Narayana Junior College",
    year: "2021 - 2023",
    cgpa: "90%"
  },
  {
    degree: "SSC",
    branch: "Lilly Little Flower High School",
    college: "Your School",
    year: "2020 - 2021",
    cgpa: "92%"
  }
];

export default function Education() {
  return (
    <section
      id="education"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Education</span>
        </motion.h2>

        <div className="space-y-8">

          {education.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="card flex gap-5 items-start"
            >

              <div className="bg-cyan-500 p-4 rounded-full">
                <GraduationCap />
              </div>

              <div>

                <h3 className="text-2xl font-semibold">
                  {item.degree}
                </h3>

                <p className="text-cyan-400 mt-2">
                  {item.branch}
                </p>

                <p className="text-gray-400 mt-1">
                  {item.college}
                </p>

                <p className="text-gray-500 mt-1">
                  {item.year}
                </p>

                <p className="mt-3 font-semibold">
                  {item.cgpa}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}