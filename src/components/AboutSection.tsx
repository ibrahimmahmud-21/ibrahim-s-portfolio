const AboutSection = () => {
  return (
    <section id="about" className="py-16 sm:py-20 px-5 sm:px-8 bg-secondary/40">
      <div className="max-w-2xl mx-auto text-center space-y-5">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase">Who I Am</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">About Me</h2>
        <p className="text-muted-foreground leading-7 text-[15px]">
          I'm Ibrahim Mahmud — a curious and self-driven individual from Bangladesh with a deep
          passion for technology and digital innovation. I enjoy exploring the world of cyber
          security, learning web development, and helping others solve technical problems. I
          believe in continuous learning and always strive to improve my skills every day.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
