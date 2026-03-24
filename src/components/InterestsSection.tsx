import { Cpu, Shield, Globe, BookOpen } from "lucide-react";

const interests = [
  { icon: Cpu, label: "Technology" },
  { icon: Shield, label: "Cyber Security" },
  { icon: Globe, label: "Web Development" },
  { icon: BookOpen, label: "Learning New Things" },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-20 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-foreground mb-12">Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {interests.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-4 p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <item.icon size={26} className="text-accent" />
              </div>
              <span className="text-sm font-medium text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
