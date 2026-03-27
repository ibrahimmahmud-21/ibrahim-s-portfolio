import profileImage from "@/assets/profile.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, className } = useScrollAnimation(0.1);

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 py-20 md:py-28 bg-secondary/30">
      <div ref={ref} className={`max-w-3xl mx-auto text-center ${className}`}>
        {/* Profile Image */}
        <div className="stagger-child w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-elevated mx-auto mb-6 profile-pulse ring-4 ring-background">
          <img
            id="profileImage"
            src={profileImage}
            alt="Ibrahim Mahmud — Tech enthusiast from Bangladesh"
            className="w-full h-full object-cover"
            loading="eager"
          />
        </div>

        {/* Intro */}
        <p className="stagger-child text-base sm:text-lg font-medium text-foreground mb-6">
          Hi, I'm Ibrahim ✌️
        </p>

        {/* Bold Headline */}
        <h1 className="stagger-child text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.1] tracking-tight text-foreground mb-8">
          Building digital
          <br />
          products, brands, and
          <br />
          experience.
        </h1>

        {/* Description */}
        <p className="stagger-child text-muted-foreground text-sm sm:text-base leading-relaxed max-w-lg mx-auto mb-10">
          a <span className="font-semibold text-foreground">Tech Enthusiast</span> and{" "}
          <span className="font-semibold text-foreground">Digital Creator</span> in Bangladesh.
          <br />
          I specialize in Web Development, UI/UX Design,
          <br className="hidden sm:block" />
          and Digital Product Development.
        </p>

        {/* CTA Button */}
        <div className="stagger-child">
          <a
            href="#contact"
            className="btn-press inline-flex items-center px-10 py-4 rounded-full bg-primary text-primary-foreground text-sm sm:text-base font-semibold tracking-wide uppercase shadow-elevated hover:shadow-soft transition-all duration-300 hover:scale-105"
          >
            Connect with me
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
