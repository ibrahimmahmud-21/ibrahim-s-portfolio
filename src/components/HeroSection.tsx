import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-20 px-6">
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Text */}
        <div className="flex-1 space-y-6">
          <div className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs font-medium tracking-wide">
            Available for work
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Hello! I'm Ibrahim
            <br />
            Mahmud
          </h1>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            A passionate tech enthusiast based in Bangladesh. Interested in cyber security,
            web development, and solving digital problems.
          </p>
          <div className="flex gap-4 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity shadow-soft"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground text-sm font-medium hover:bg-secondary transition-colors"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Image */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-card">
            <img
              id="profileImage"
              src={profileImage}
              alt="Ibrahim Mahmud"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
