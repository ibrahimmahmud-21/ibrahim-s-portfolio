import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const AboutSection = () => {
  const { ref, className } = useScrollAnimation();

  return (
    <section id="about" className="py-24 md:py-32 px-6 sm:px-10 lg:px-20 bg-secondary/40">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-start ${className}`}
      >
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">About me</h2>
        </div>
        <div>
          <p className="text-muted-foreground leading-7 text-[15px]">
            I'm Ibrahim Mahmud — a curious and self-driven individual from Bangladesh with a deep
            passion for technology and digital innovation. I enjoy exploring the world of cyber
            security, learning web development, and helping others solve technical problems. I
            believe in continuous learning and always strive to improve my skills every day.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
