import { Cpu, Shield, Globe, BookOpen } from "lucide-react";

const interests = [
  { icon: Cpu, label: "Technology" },
  { icon: Shield, label: "Cyber Security" },
  { icon: Globe, label: "Web Development" },
  { icon: BookOpen, label: "Learning New Things" },
];

const InterestsSection = () => {
  return (
    <section id="interests" className="py-16 sm:py-20 px-5 sm:px-8 bg-secondary/40">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">What I Love</p>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground mb-10">Interests</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {interests.map((item) => (
            <div
              key={item.label}
              className="group flex flex-col items-center gap-3 p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <item.icon size={22} className="text-accent" />
              </div>
              <span className="text-[13px] font-semibold text-foreground">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;
