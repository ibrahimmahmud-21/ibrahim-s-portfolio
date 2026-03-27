import { Mail, ExternalLink, Send } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contacts = [
  {
    label: "Email",
    detail: "ibmm923@gmail.com",
    href: "mailto:ibmm923@gmail.com",
    icon: Mail,
    external: false,
  },
  {
    label: "Facebook",
    detail: "Connect on Facebook",
    href: "https://www.facebook.com/share/17HhajquTM/",
    icon: null,
    svgIcon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
    external: true,
  },
  {
    label: "Telegram",
    detail: "@ibrahimbd10",
    href: "https://t.me/ibrahimbd10",
    icon: Send,
    external: true,
  },
];

const ContactSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-28 px-6 sm:px-10 lg:px-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <div className="mb-8">
          <h2 className="text-xl sm:text-2xl font-extrabold text-foreground">
            Get in touch
          </h2>
          <p className="text-muted-foreground text-sm mt-1.5">
            Feel free to reach out — I'd love to connect.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {contacts.map((c, i) => (
            <a
              key={c.label}
              href={c.href}
              target={c.external ? "_blank" : undefined}
              rel={c.external ? "noopener noreferrer" : undefined}
              className="group flex flex-col items-center text-center gap-3 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              style={{
                transitionDelay: isVisible ? `${i * 100}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                {c.icon ? (
                  <c.icon size={16} className="text-foreground group-hover:text-primary transition-colors duration-300" />
                ) : (
                  <span className="text-foreground group-hover:text-primary transition-colors duration-300">
                    {c.svgIcon}
                  </span>
                )}
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground flex items-center justify-center gap-1">
                  {c.label}
                  {c.external && (
                    <ExternalLink size={11} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  )}
                </p>
                <p className="text-muted-foreground text-xs mt-0.5">{c.detail}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
