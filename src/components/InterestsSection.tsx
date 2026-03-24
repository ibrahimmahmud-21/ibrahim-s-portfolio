import { Cpu, Shield, Globe, BookOpen } from "lucide-react";

const interests = [
  { icon: Cpu, label: "Technology" },
  { icon: Shield, label: "Cyber Security" },
  { icon: Globe, label: "Web Development" },
  { icon: BookOpen, label: "Learning New Things" },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-24 md:py-32 px-6 sm:px-10 lg:px-20 bg-secondary/40">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-14">
          Interests
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {interests.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-4 p-8 rounded-2xl bg-card border border-border hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                <item.icon size={22} className="text-foreground group-hover:text-accent" />
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
