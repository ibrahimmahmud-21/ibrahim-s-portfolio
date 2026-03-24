import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">
        {/* Left — Avatar + Heading */}
        <div className="space-y-6">
          <div className="w-14 h-14 rounded-full overflow-hidden shadow-soft">
            <img
              id="profileImage"
              src={profileImage}
              alt="Ibrahim Mahmud"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-foreground">
            Hello! I'm Ibrahim
            <br />
            Mahmud
          </h1>
        </div>

        {/* Right — Description + Buttons */}
        <div className="space-y-6 md:pt-16">
          <p className="text-lg sm:text-xl font-medium text-foreground leading-snug">
            A tech enthusiast based in Bangladesh.
          </p>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
            Passionate about cyber security, web development, and solving digital problems for people around me.
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href="#contact"
              className="inline-flex items-center px-6 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity"
            >
              Talk with me
            </a>
            <a
              href="#about"
              className="inline-flex items-center px-6 py-3 rounded-full border border-border text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
            >
              See my work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
