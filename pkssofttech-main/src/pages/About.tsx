import { Target, Eye, Award, Heart, Users, Lightbulb, BadgeDollarSign, Rocket, Cpu, ShieldCheck, Headphones } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";

const values = [
  { icon: Award, title: "Excellence", text: "We hold every line of code and pixel to the highest standard." },
  { icon: Heart, title: "Integrity", text: "Honest communication and transparent partnerships, always." },
  { icon: Lightbulb, title: "Innovation", text: "We embrace new ideas and emerging technologies." },
  { icon: Users, title: "Collaboration", text: "Your team is our team — we build together." },
];

const reasons = [
  { icon: BadgeDollarSign, title: "Affordable Pricing", text: "We provide cost-effective solutions suitable for startups and businesses." },
  { icon: Rocket, title: "Fast Delivery", text: "We deliver projects on time without compromising quality." },
  { icon: Cpu, title: "Modern Technologies", text: "We use the latest tools and frameworks to build scalable solutions." },
  { icon: ShieldCheck, title: "Secure Solutions", text: "We ensure high-level security in all applications and websites." },
  { icon: Headphones, title: "Dedicated Support", text: "We provide ongoing support and maintenance after project delivery." },
];

const About = () => (
  <PageLayout>
    <section className="container-px max-w-7xl mx-auto pt-12 pb-16 text-center">
      <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">About Us</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Crafting digital products with <span className="text-gradient">purpose</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
        PKS Soft Tech Company is a software and technology services provider helping businesses turn bold ideas into elegant digital products. From mobile apps to e-commerce platforms, we partner with clients across industries to ship software that performs.
      </p>
    </section>

    <section className="container-px max-w-7xl mx-auto py-12 grid md:grid-cols-2 gap-6">
      <div className="p-10 rounded-3xl bg-card border border-border card-hover">
        <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
          <Target className="h-7 w-7 text-primary-foreground" />
        </div>
        <h2 className="font-display text-2xl font-bold mb-3">Our Mission</h2>
        <p className="text-muted-foreground">To provide innovative and reliable software solutions that empower businesses to grow, scale and lead in their markets.</p>
      </div>
      <div className="p-10 rounded-3xl bg-card border border-border card-hover">
        <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow">
          <Eye className="h-7 w-7 text-primary-foreground" />
        </div>
        <h2 className="font-display text-2xl font-bold mb-3">Our Vision</h2>
        <p className="text-muted-foreground">To become a trusted technology partner for businesses worldwide — known for craftsmanship, reliability and lasting relationships.</p>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="container-px max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">Why Us</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">
          Why Choose <span className="text-gradient">PKS Soft Tech Company</span>
        </h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {reasons.map((r, i) => (
          <div key={i} className="group p-7 rounded-2xl bg-card border border-border card-hover">
            <div className="h-14 w-14 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
              <r.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{r.title}</h3>
            <p className="text-muted-foreground text-sm">{r.text}</p>
          </div>
        ))}
      </div>
    </section>

    {/* CEO */}
    <section className="container-px max-w-7xl mx-auto py-16">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-card to-secondary border border-border p-10 md:p-14 flex flex-col md:flex-row items-center gap-10">
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="relative h-40 w-40 rounded-full bg-gradient-primary flex items-center justify-center text-5xl font-display font-bold text-primary-foreground shadow-glow flex-shrink-0">
          SK
        </div>
        <div className="relative text-center md:text-left">
          <p className="text-primary text-xs font-semibold uppercase tracking-[0.25em] mb-2">Founder & CEO</p>
          <h3 className="font-display text-3xl md:text-4xl font-bold mb-3">SURYA.K</h3>
          <p className="text-muted-foreground max-w-xl">A visionary leader passionate about technology and craftsmanship, Surya founded PKS to build products that make a real difference for businesses and the people they serve.</p>
        </div>
      </div>
    </section>

    {/* Values */}
    <section className="container-px max-w-7xl mx-auto py-16">
      <div className="text-center mb-12">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">What We Stand For</p>
        <h2 className="font-display text-4xl md:text-5xl font-bold">Our Core Values</h2>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {values.map((v, i) => (
          <div key={i} className="p-7 rounded-2xl bg-card border border-border card-hover text-center">
            <div className="h-14 w-14 rounded-xl border border-primary/30 bg-primary/10 mx-auto flex items-center justify-center mb-5">
              <v.icon className="h-7 w-7 text-primary" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2">{v.title}</h3>
            <p className="text-muted-foreground text-sm">{v.text}</p>
          </div>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default About;
