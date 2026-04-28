import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Briefcase,
  Code2,
  Server,
  Palette,
  GraduationCap,
  Mail,
  Rocket,
  Sparkles,
  Users,
  TrendingUp,
  CheckCircle2,
  Send,
  FileText,
  MessageSquare,
} from "lucide-react";

const openings = [
  {
    icon: Code2,
    title: "Frontend Developer",
    type: "Full-time",
    level: "Junior / Mid",
    skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3"],
    description:
      "Build pixel-perfect, responsive interfaces and craft delightful user experiences for our client projects.",
  },
  {
    icon: Server,
    title: "Backend Developer",
    type: "Full-time",
    level: "Junior / Mid",
    skills: ["Node.js", "Express.js", "MongoDB", "REST APIs", "Firebase"],
    description:
      "Design and develop scalable APIs, manage databases, and engineer robust server-side architecture.",
  },
  {
    icon: Palette,
    title: "UI/UX Designer",
    type: "Full-time",
    level: "Junior / Mid",
    skills: ["Figma", "Wireframing", "Prototyping", "Design Systems", "User Research"],
    description:
      "Translate ideas into intuitive, modern designs that balance aesthetics, usability, and brand identity.",
  },
  {
    icon: GraduationCap,
    title: "Interns (Freshers Welcome)",
    type: "Internship",
    level: "Entry Level",
    skills: ["Eagerness to Learn", "Basic Programming", "Communication", "Problem Solving"],
    description:
      "Kickstart your career with hands-on experience across web, mobile and design — mentored by our core team.",
  },
];

const perks = [
  { icon: Rocket, title: "Growth First", text: "Real projects, real ownership, fast learning curves." },
  { icon: Users, title: "Friendly Team", text: "A young, supportive team that grows together." },
  { icon: Sparkles, title: "Modern Stack", text: "Work with the latest tools and frameworks." },
  { icon: TrendingUp, title: "Career Path", text: "Clear progression from intern to lead roles." },
];

const steps = [
  { icon: Send, title: "Send Application", text: "Email your resume and a short intro to our team." },
  { icon: FileText, title: "Quick Screening", text: "We review your profile and reach out within a few days." },
  { icon: MessageSquare, title: "Interview", text: "A friendly conversation about your skills and goals." },
  { icon: CheckCircle2, title: "Welcome Aboard", text: "Join PKS Soft Tech and start building the future." },
];

const Careers = () => {
  const subject = encodeURIComponent("Career Application — PKS Soft Tech");
  const body = encodeURIComponent(
    "Hi PKS Soft Tech team,\n\nI'd like to apply for the following role: \n\nName:\nRole:\nExperience:\nPortfolio / GitHub:\n\n(Attach your resume)\n\nThanks!",
  );
  const mailto = `mailto:pkssofttech@gmail.com?subject=${subject}&body=${body}`;

  return (
    <PageLayout>
      {/* Hero */}
      <section className="container-px max-w-7xl mx-auto pt-12 pb-12 text-center relative overflow-hidden">
        <div className="absolute inset-0 -z-10" style={{ backgroundImage: "var(--gradient-radial)" }} />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 mb-6">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">We are Hiring</span>
        </div>
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">Careers</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
          Build the future <span className="text-gradient">with us</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          PKS Soft Tech is a growing software startup focused on web, mobile and custom solutions. Join a passionate
          team where curiosity is rewarded and ideas turn into shipped products.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
            <a href={mailto}>Apply Now <Mail className="ml-2 h-4 w-4" /></a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#openings">View Openings</a>
          </Button>
        </div>
      </section>

      {/* Why Join */}
      <section className="container-px max-w-7xl mx-auto py-12">
        <div className="text-center mb-10">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-3">
            Why join <span className="text-gradient">PKS Soft Tech</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We invest in young talent. Whether you're a fresher or an experienced developer, you'll find a place to
            grow, learn and lead.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {perks.map((p, i) => (
            <div key={i} className="p-6 rounded-2xl bg-card border border-border card-hover">
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <p.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="container-px max-w-7xl mx-auto py-12">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">Open Roles</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Current <span className="text-gradient">Job Openings</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {openings.map((job, i) => (
            <div key={i} className="p-7 rounded-2xl bg-card border border-border card-hover flex flex-col">
              <div className="flex items-start gap-4 mb-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                  <job.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0 flex-1">
                  <h3 className="font-display font-bold text-xl mb-1">{job.title}</h3>
                  <div className="flex flex-wrap gap-2 text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-primary/10 text-primary font-semibold">{job.type}</span>
                    <span className="px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium">{job.level}</span>
                  </div>
                </div>
              </div>
              <p className="text-muted-foreground text-sm mb-4">{job.description}</p>
              <div className="mb-5">
                <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">Required Skills</p>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map((s) => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-md border border-border bg-secondary/50 text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
              <Button asChild variant="outline" className="mt-auto w-full hover:bg-primary hover:text-primary-foreground hover:border-primary">
                <a href={`mailto:pkssofttech@gmail.com?subject=${encodeURIComponent("Application — " + job.title)}`}>
                  Apply for this role
                </a>
              </Button>
            </div>
          ))}
        </div>
      </section>

      {/* Internship callout */}
      <section className="container-px max-w-7xl mx-auto py-12">
        <div className="relative p-8 md:p-12 rounded-3xl border border-primary/30 bg-card overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-60" style={{ backgroundImage: "var(--gradient-radial)" }} />
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 mb-4">
                <GraduationCap className="h-4 w-4 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">For Freshers</span>
              </div>
              <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
                Internship <span className="text-gradient">Opportunities</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                New to the industry? We welcome students and freshers to learn by building. Our interns work on real
                client projects with mentorship from senior developers and designers.
              </p>
              <ul className="space-y-2 text-sm">
                {[
                  "Hands-on experience with live projects",
                  "Mentorship from experienced developers",
                  "Flexible learning across web, mobile and design",
                  "Certificate and letter of recommendation",
                  "Opportunity to convert to full-time role",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{t}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Web Dev", icon: Code2 },
                { label: "Mobile Apps", icon: Briefcase },
                { label: "UI/UX", icon: Palette },
                { label: "Backend", icon: Server },
              ].map((d, i) => (
                <div key={d.label} className={`p-6 rounded-2xl bg-background/60 border border-border card-hover ${i % 2 === 1 ? "translate-y-4" : ""}`}>
                  <d.icon className="h-7 w-7 text-primary mb-3" />
                  <p className="font-display font-semibold">{d.label}</p>
                  <p className="text-xs text-muted-foreground mt-1">Internship Track</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="container-px max-w-7xl mx-auto py-12">
        <div className="text-center mb-10">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">How to Apply</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            Simple <span className="text-gradient">Application Process</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((s, i) => (
            <div key={i} className="relative p-6 rounded-2xl bg-card border border-border card-hover">
              <div className="absolute -top-3 -right-3 h-9 w-9 rounded-full bg-gradient-primary flex items-center justify-center text-primary-foreground font-display font-bold text-sm shadow-glow">
                {i + 1}
              </div>
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <s.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-1">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="container-px max-w-7xl mx-auto py-16">
        <div className="rounded-3xl bg-gradient-primary p-10 md:p-14 text-center shadow-elegant">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Ready to grow with us?
          </h2>
          <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 text-lg">
            Send your resume and a short intro about yourself. We reply to every application.
          </p>
          <a
            href={mailto}
            className="inline-flex items-center gap-3 px-7 py-4 rounded-xl bg-background text-foreground font-semibold hover:bg-background/90 transition-all"
          >
            <Mail className="h-5 w-5 text-primary" />
            <span className="break-all">pkssofttech@gmail.com</span>
          </a>
          <p className="text-primary-foreground/80 text-sm mt-6">
            Have a question first? <Link to="/contact" className="underline underline-offset-4 font-semibold">Contact us</Link>
          </p>
        </div>
      </section>
    </PageLayout>
  );
};

export default Careers;