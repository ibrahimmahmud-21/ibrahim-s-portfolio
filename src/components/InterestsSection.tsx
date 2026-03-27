import { Cpu, Shield, Globe, BookOpen } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const interests = [
  { icon: Cpu, label: "Technology" },
  { icon: Shield, label: "Cyber Security" },
  { icon: Globe, label: "Web Development" },
  { icon: BookOpen, label: "Learning New Things" },
];

const InterestsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="interests" className="py-20 md:py-28 px-6 sm:px-10 lg:px-20 bg-secondary/40">
      <div
        ref={ref}
        className={`max-w-5xl mx-auto transition-all duration-700 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h2 className="text-xl sm:text-2xl font-extrabold text-foreground mb-10">
          Interests
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {interests.map((item, i) => (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-2.5 p-5 rounded-xl bg-card border border-border shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              style={{
                transitionDelay: isVisible ? `${i * 80}ms` : "0ms",
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(12px)",
              }}
            >
              <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-300">
                <item.icon size={18} className="text-foreground group-hover:text-primary transition-colors duration-300" />
              </div>
              <span className="text-xs font-semibold text-foreground text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
