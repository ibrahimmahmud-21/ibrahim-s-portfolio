import { Mail, ExternalLink } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-2xl mx-auto text-center space-y-6">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">Let's Connect</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Get In Touch</h2>
        <p className="text-muted-foreground text-sm">
          Feel free to reach out — I'd love to connect with you.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <a
            href="mailto:ibmm923@gmail.com"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-[13px] font-semibold hover:opacity-90 transition-opacity shadow-soft"
          >
            <Mail size={16} />
            ibmm923@gmail.com
          </a>
          <a
            href="https://www.facebook.com/share/17HhajquTM/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-border text-foreground text-[13px] font-semibold hover:bg-secondary transition-colors"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Facebook
            <ExternalLink size={12} className="opacity-50" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
