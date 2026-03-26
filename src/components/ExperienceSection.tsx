import { Smartphone, MessageCircle, Headphones, Code } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const experiences = [
  {
    icon: Smartphone,
    title: "Mobile Settings Expert",
    detail: "Configuring and troubleshooting mobile device settings across platforms.",
  },
  {
    icon: MessageCircle,
    title: "Facebook Problem Solving",
    detail: "Resolving account issues, privacy settings, and platform navigation.",
  },
  {
    icon: Headphones,
    title: "Tech Support",
    detail: "Providing technical guidance for software and hardware related issues.",
  },
  {
    icon: Code,
    title: "Learning Web Development",
    detail: "Expanding skills in HTML, CSS, JavaScript and modern frameworks.",
  },
];

const ExperienceSection = () => {
  const { ref, className } = useScrollAnimation();

  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-10 lg:px-20">
      <div ref={ref} className={`max-w-6xl mx-auto ${className}`}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-14">
          Working experience
        </h2>
        <div className="divide-y divide-border">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="stagger-child group flex items-start gap-4 py-5 hover:bg-secondary/30 -mx-4 px-4 rounded-xl transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-accent/10 transition-colors duration-300">
                <exp.icon size={17} className="text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm font-semibold text-foreground">{exp.title}</h3>
                <p className="text-muted-foreground text-sm mt-0.5">{exp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
