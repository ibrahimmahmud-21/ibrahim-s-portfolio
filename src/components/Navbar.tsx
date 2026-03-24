import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = ["Home", "About", "Experience", "Interests", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
        <a href="#home" className="text-lg font-extrabold tracking-tighter text-foreground select-none">
          IRM
        </a>

        <ul className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-[13px] font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background/95 backdrop-blur-lg px-5 pb-5 pt-1 border-b border-border">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
