import { useState, useEffect } from "react";
import { Menu, X, MapPin } from "lucide-react";

const navLinks = ["Home", "About", "Experience", "Interests", "Contact"];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      setTime(
        new Date().toLocaleTimeString("en-US", {
          hour: "numeric",
          minute: "2-digit",
          hour12: true,
          timeZone: "Asia/Dhaka",
        })
      );
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.toLowerCase()));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-lg border-b border-border transition-shadow duration-300 ${
        scrolled ? "nav-scrolled" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-20 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <a
            href="#home"
            className="w-10 h-10 rounded-full bg-primary flex items-center justify-center select-none shadow-md hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-200"
            aria-label="Home"
          >
            <span className="text-[13px] font-extrabold text-primary-foreground tracking-wide">IM</span>
          </a>
          <div className="hidden sm:flex flex-col">
            <span className="text-xs text-muted-foreground flex items-center gap-1">
              <MapPin size={10} />
              Bangladesh
            </span>
            <span className="text-[10px] text-muted-foreground/70">{time}</span>
          </div>
        </div>

        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className={`text-sm transition-all duration-200 link-hover ${
                  activeSection === link.toLowerCase()
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link}
              </a>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground p-1 hover:scale-110 active:scale-90 transition-transform duration-200"
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
                  className={`text-sm transition-colors ${
                    activeSection === link.toLowerCase()
                      ? "text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
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
