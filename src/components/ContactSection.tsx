import { Mail, ExternalLink } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const ContactSection = () => {
  const { ref, className } = useScrollAnimation();

  return (
    <section id="contact" className="py-20 md:py-28 px-6 sm:px-10 lg:px-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start ${className}`}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Get in touch</h2>
          <p className="text-muted-foreground text-sm mt-2">
            Feel free to reach out — I'd love to connect.
          </p>
        </div>
        <div className="space-y-3">
          <a
            href="mailto:ibmm923@gmail.com"
            className="stagger-child card-lift flex items-center gap-3 p-3.5 rounded-xl border border-border group"
          >
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
              <Mail size={16} className="text-foreground group-hover:text-accent transition-colors duration-300" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground">Email</p>
              <p className="text-muted-foreground text-xs">ibmm923@gmail.com</p>
            </div>
          </a>
          <a
            href="https://www.facebook.com/share/17HhajquTM/"
            target="_blank"
            rel="noopener noreferrer"
            className="stagger-child card-lift flex items-center gap-3 p-3.5 rounded-xl border border-border group"
          >
            <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-300">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-foreground group-hover:text-accent transition-colors duration-300" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </div>
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">Facebook</p>
              <p className="text-muted-foreground text-xs">Connect on Facebook</p>
            </div>
            <ExternalLink size={14} className="text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
