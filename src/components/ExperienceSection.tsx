import { Smartphone, MessageCircle, Headphones, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    icon: Smartphone,
    title: "Mobile Settings Expert",
    detail: "Configuring and troubleshooting mobile device settings.",
  },
  {
    icon: MessageCircle,
    title: "Facebook Problem Solving",
    detail: "Resolving account issues and privacy settings.",
  },
  {
    icon: Headphones,
    title: "Tech Support",
    detail: "Technical guidance for software and hardware issues.",
  },
  {
    icon: Code,
    title: "Learning Web Development",
    detail: "Building skills in HTML, CSS, JS and frameworks.",
  },
];

const ExperienceSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="experience" className="py-20 md:py-28 px-6 sm:px-10 lg:px-20">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-6">
          Working experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {experiences.map((exp, i) => (
            <div
              key={exp.title}
              className="group flex items-start gap-2.5 px-3 py-2.5 rounded-lg bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 cursor-default"
              style={{
                transitionDelay: isVisible ? `${i * 80}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="w-7 h-7 rounded-md bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                <exp.icon size={14} className="text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-xs font-semibold text-foreground leading-tight">
                  {exp.title}
                </h3>
                <p className="text-muted-foreground text-[11px] mt-0.5 leading-snug">
                  {exp.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
