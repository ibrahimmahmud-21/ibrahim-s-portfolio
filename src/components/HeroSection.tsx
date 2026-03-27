import profileImage from "@/assets/profile.jpg";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const HeroSection = () => {
  const { ref, style } = useScrollAnimation(0.1);

  return (
    <section id="home" className="min-h-[90vh] flex items-center justify-center px-6 py-20 md:py-28 bg-secondary/30">
      <div ref={ref} style={style} className="max-w-3xl mx-auto text-center">
        {/* Profile Image */}
        <div className="stagger-child w-20 h-20 sm:w-24 sm:h-24 md:w-[132px] md:h-[132px] rounded-full overflow-hidden shadow-elevated mx-auto mb-8 profile-pulse ring-4 ring-background">
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
        <h1 className="stagger-child text-[2rem] sm:text-4xl md:text-5xl lg:text-6xl font-black leading-[1.12] tracking-tight text-foreground mb-8">
          Helping people solve
          <br />
          tech problems and build
          <br />
          smart solutions.
        </h1>

        {/* Description */}
        <p className="stagger-child text-muted-foreground text-sm sm:text-base leading-relaxed max-w-xl mx-auto mb-10">
          I am a <span className="font-semibold text-foreground">Mobile Settings Expert</span> and{" "}
          <span className="font-semibold text-foreground">Facebook Problem Solver</span>.
          <br className="hidden sm:block" />
          I help people fix account issues, improve device performance,
          <br className="hidden sm:block" />
          and learn modern web development.
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
