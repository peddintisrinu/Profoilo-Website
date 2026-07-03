import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-slate-900/90 backdrop-blur-md z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <a
          href="#home"
          className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          Portfolio
        </a>

        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white hover:text-cyan-400 transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-800">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 border-b border-slate-700 text-white hover:bg-slate-700"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}