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
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-foreground text-center mb-12">Experience</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="group p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                <exp.icon size={22} className="text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{exp.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
