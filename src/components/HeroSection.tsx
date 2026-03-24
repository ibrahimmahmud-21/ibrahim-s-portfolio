import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-24 md:pt-36 md:pb-32 px-6 sm:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto">
        {/* Small circular profile image */}
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-soft mb-8">
          <img
            id="profileImage"
            src={profileImage}
            alt="Ibrahim Mahmud"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Large heading */}
        <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl font-extrabold leading-[1.08] tracking-tight text-foreground mb-10">
          Hello! I'm Ibrahim
          <br />
          Mahmud
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl font-medium text-foreground leading-snug mb-3 max-w-md">
          A tech enthusiast based in Bangladesh.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm mb-10 italic">
          Passionate creating great experiences for
          <br />
          Digital Product
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex items-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-soft hover:opacity-90 transition-opacity"
          >
            Talk with me
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-7 py-3 rounded-full border border-border bg-background text-foreground text-sm font-semibold hover:bg-secondary transition-colors"
          >
            See my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
