import { useState } from "react";
import { Menu, X, MapPin } from "lucide-react";

const navLinks = ["Home", "About", "Experience", "Interests", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const now = new Date();
  const timeStr = now.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 h-16 flex items-center justify-between">
        {/* Logo badge */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center select-none shadow-md hover:shadow-lg transition-shadow duration-200"
          >
            <span className="text-[13px] font-extrabold text-primary-foreground tracking-wide">IM</span>
          </a>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin size={10} />
              Bangladesh
            </span>
            <span className="text-[10px] text-muted-foreground/70">{timeStr}</span>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
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
        <div className="md:hidden bg-background/95 backdrop-blur-lg px-6 pb-5 pt-1 border-b border-border">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
