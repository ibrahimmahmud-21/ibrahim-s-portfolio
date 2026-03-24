import { Mail, Facebook } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-bold text-foreground">Get In Touch</h2>
        <p className="text-muted-foreground">
          Feel free to reach out — I'd love to connect with you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:ibrahimmahmud@example.com"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-soft"
          >
            <Mail size={18} />
            Email Me
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
          >
            <Facebook size={18} />
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
