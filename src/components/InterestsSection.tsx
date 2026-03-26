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
    <section id="interests" className="py-24 md:py-32 px-6 sm:px-10 lg:px-20 bg-secondary/40">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto scroll-fade ${isVisible ? "visible" : ""}`}
      >
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-14">
          Interests
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-3 p-6 rounded-2xl bg-card border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300 cursor-default"
            >
              <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <item.icon size={20} className="text-foreground group-hover:text-accent" />
              </div>
              <span className="text-sm font-semibold text-foreground text-center">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
