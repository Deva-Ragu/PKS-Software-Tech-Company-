import { Code2, Smartphone, Server, Database, Cloud } from "lucide-react";

interface TechGroup {
  title: string;
  icon: typeof Code2;
  items: string[];
}

const groups: TechGroup[] = [
  { title: "Frontend", icon: Code2, items: ["HTML5", "CSS3", "JavaScript", "React"] },
  { title: "Mobile App Development", icon: Smartphone, items: ["Flutter", "React Native", "Kotlin", "Swift"] },
  { title: "Backend", icon: Server, items: ["Node.js", "Express.js"] },
  { title: "Database", icon: Database, items: ["MongoDB", "Firebase", "MySQL"] },
  { title: "Cloud & Tools", icon: Cloud, items: ["GitHub", "Firebase Hosting", "AWS"] },
];

export const TechnologiesSection = () => (
  <section className="container-px max-w-7xl mx-auto py-20">
    <div className="text-center mb-14">
      <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">Our Stack</p>
      <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
        Technologies <span className="text-gradient">We Use</span>
      </h2>
      <p className="max-w-2xl mx-auto text-muted-foreground">
        A modern toolkit we rely on to design, build and ship reliable digital products.
      </p>
    </div>

    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {groups.map((g, i) => (
        <div key={i} className="group p-7 rounded-2xl bg-card border border-border card-hover">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-12 w-12 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
              <g.icon className="h-6 w-6 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold">{g.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {g.items.map((item) => (
              <span
                key={item}
                className="px-3 py-1.5 text-sm rounded-full border border-border bg-secondary/50 text-foreground/90 hover:border-primary hover:text-primary transition-colors"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);
