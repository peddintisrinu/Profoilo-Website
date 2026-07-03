import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 bg-slate-950 text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >

          <h2 className="text-4xl font-bold text-center mb-4">
            Contact <span className="text-cyan-400">Me</span>
          </h2>

          <p className="text-center text-gray-400 mb-14">
            Feel free to contact me for internships, projects or
            collaboration opportunities.
          </p>

        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* Contact Info */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >

            <div className="card flex items-center gap-5">
              <Mail className="text-cyan-400" size={30} />

              <div>
                <h3 className="font-semibold text-xl">
                  Email
                </h3>

                <p className="text-gray-400">
                  peddintisrinu0@gmail.com
                </p>
              </div>

            </div>

            <div className="card flex items-center gap-5">
              <Phone className="text-cyan-400" size={30} />

              <div>
                <h3 className="font-semibold text-xl">
                  Phone
                </h3>

                <p className="text-gray-400">
                  +91 93470 96348
                </p>
              </div>

            </div>

            <div className="card flex items-center gap-5">
              <MapPin className="text-cyan-400" size={30} />

              <div>
                <h3 className="font-semibold text-xl">
                  Location
                </h3>

                <p className="text-gray-400">
                  Sri potti Sriramulu Nellore, Andhra Pradesh, India
                </p>
              </div>

            </div>

          </motion.div>

          {/* Contact Form */}

          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="card space-y-6"
          >

            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-slate-800 rounded-lg p-4 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-slate-800 rounded-lg p-4 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full bg-slate-800 rounded-lg p-4 outline-none border border-slate-700 focus:border-cyan-400"
            />

            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full bg-slate-800 rounded-lg p-4 outline-none border border-slate-700 focus:border-cyan-400 resize-none"
            ></textarea>

            <button
              className="btn flex items-center gap-2"
            >
              <Send size={18} />
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}