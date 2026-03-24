import { Smartphone, MessageCircle, Headphones, Code } from "lucide-react";

const experiences = [
  {
    icon: Smartphone,
    title: "Mobile Settings Expert",
    description: "Proficient in configuring and troubleshooting mobile device settings across platforms.",
  },
  {
    icon: MessageCircle,
    title: "Facebook Problem Solving",
    description: "Experienced in resolving account issues, privacy settings, and platform navigation.",
  },
  {
    icon: Headphones,
    title: "Tech Support",
    description: "Providing technical guidance and support for software and hardware related issues.",
  },
  {
    icon: Code,
    title: "Learning Web Development",
    description: "Currently expanding skills in HTML, CSS, JavaScript and modern frameworks.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 px-5 sm:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-2">What I Do</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground">Experience</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group p-5 sm:p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-0.5"
            >
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center mb-3 group-hover:bg-accent/20 transition-colors">
                <exp.icon size={20} className="text-accent" />
              </div>
              <h3 className="text-[15px] font-bold text-foreground mb-1.5">{exp.title}</h3>
              <p className="text-muted-foreground text-[13px] leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
