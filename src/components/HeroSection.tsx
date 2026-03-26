import profileImage from "@/assets/profile.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="home" className="pt-28 pb-24 md:pt-36 md:pb-32 px-6 sm:px-10 lg:px-20">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto scroll-fade ${isVisible ? "visible" : ""}`}
      >
        <div className="w-12 h-12 rounded-full overflow-hidden shadow-soft mb-8 profile-pulse">
          <img
            id="profileImage"
            src={profileImage}
            alt="Ibrahim Mahmud — Tech enthusiast from Bangladesh"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        <h1 className="stagger-child text-[2.5rem] sm:text-5xl md:text-6xl font-black leading-[1.08] tracking-tight text-foreground mb-10">
          Hello! I'm Ibrahim
          <br />
          Mahmud
        </h1>

        <p className="stagger-child text-lg sm:text-xl font-medium text-foreground leading-snug mb-3 max-w-md">
          A tech enthusiast based in Bangladesh.
        </p>
        <p className="stagger-child text-muted-foreground text-sm leading-relaxed max-w-sm mb-10 italic">
          Passionate creating great experiences for
          <br />
          Digital Product
        </p>

        <div className="stagger-child flex flex-wrap gap-3">
          <a
            href="#contact"
            className="btn-press inline-flex items-center px-7 py-3 rounded-full bg-primary text-primary-foreground text-sm font-semibold shadow-soft hover:shadow-elevated"
          >
            Talk with me
          </a>
          <a
            href="#about"
            className="btn-press inline-flex items-center px-7 py-3 rounded-full border border-border bg-background text-foreground text-sm font-semibold hover:bg-secondary hover:shadow-soft"
          >
            See my work
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
