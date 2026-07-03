import { Github, Linkedin, Mail, Heart } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">

          {/* Logo & Description */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Reenu
            </h2>

            <p className="mt-3 text-gray-400 max-w-sm">
              Computer Science Engineering Student passionate about
              Machine Learning, Web Development, and building innovative
              applications.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-6">

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
            >
              <Github size={22} />
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
            >
              <Linkedin size={22} />
            </a>

            <a
              href="mailto:yourmail@gmail.com"
              className="p-3 rounded-full bg-slate-800 hover:bg-cyan-500 transition"
            >
              <Mail size={22} />
            </a>

          </div>

        </div>

        {/* Divider */}
        <hr className="my-8 border-slate-700" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-400 text-sm">

          <p>
            © {year} Reenu. All Rights Reserved.
          </p>

          <p className="flex items-center gap-2">
            Made with
            <Heart
              size={18}
              className="text-red-500 fill-red-500"
            />
            using React & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}