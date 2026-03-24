import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-16 sm:pt-28 sm:pb-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-16">
        {/* Profile Image - shown first on mobile, right on desktop */}
        <div className="flex-shrink-0 order-first md:order-last">
          <div className="w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-card">
            <img
              id="profileImage"
              src={profileImage}
              alt="Ibrahim Mahmud"
              className="w-full h-full object-cover aspect-square"
            />
          </div>
        </div>

        {/* Text */}
        <div className="flex-1 space-y-5 text-center md:text-left">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-accent/10 text-accent text-xs font-semibold tracking-wide">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-accent" />
            Available for work
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-[1.15] tracking-tight text-foreground">
            Hello! I'm Ibrahim
            <br />
            Mahmud
          </h1>
          <p className="text-muted-foreground text-sm sm:text-[15px] max-w-sm mx-auto md:mx-0 leading-relaxed">
            A passionate tech enthusiast based in Bangladesh. Interested in cyber security,
            web development, and solving digital problems.
          </p>
          <div className="flex flex-wrap gap-3 pt-1 justify-center md:justify-start">
            <a
              href="#contact"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-[13px] font-semibold hover:opacity-90 transition-opacity shadow-soft"
            >
              Contact Me
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-5 py-2.5 rounded-full border border-border text-foreground text-[13px] font-semibold hover:bg-secondary transition-colors"
            >
              About Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
