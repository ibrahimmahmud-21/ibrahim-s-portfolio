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
  const { ref, isVisible } = useScrollAnimation(0.05);

  return (
    <section id="experience" className="py-24 md:py-32 px-6 sm:px-10 lg:px-20">
      <div ref={ref} className={`max-w-6xl mx-auto transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10">
          Working experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="stagger-child card-lift group flex items-start gap-3 p-3.5 rounded-xl bg-card border border-border shadow-sm cursor-default"
            >
              <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors duration-300">
                <exp.icon size={16} className="text-foreground group-hover:text-accent transition-colors duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-[13px] font-semibold text-foreground leading-tight">{exp.title}</h3>
                <p className="text-muted-foreground text-xs mt-0.5 leading-snug">{exp.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
