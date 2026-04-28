import { Link } from "react-router-dom";
import { ArrowRight, Sparkles, Rocket, ShieldCheck, Code2, Smartphone, Cpu } from "lucide-react";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { services } from "@/data/services";
import heroBg from "@/assets/hero-bg.jpg";
import { TechnologiesSection } from "@/components/TechnologiesSection";

const Index = () => {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <img src={heroBg} alt="" width={1920} height={1088} className="absolute inset-0 w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 bg-gradient-radial" />
        <div className="relative container-px max-w-7xl mx-auto py-28 md:py-40 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-xs font-medium text-primary mb-8 animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" /> Welcome to PKS Soft Tech
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-6 animate-fade-in-up">
            Turning Ideas into <br />
            <span className="text-gradient">Digital Reality</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-10 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            We are a software & technology services company that designs and builds mobile apps, websites and e-commerce platforms for ambitious brands.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-8">
              <Link to="/contact">Get Started <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-12 px-8 border-border hover:border-primary hover:text-primary">
              <Link to="/services">Our Services</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="container-px max-w-7xl mx-auto py-20">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: Rocket, title: "Built to Scale", text: "Architectures designed for growth from day one." },
            { icon: ShieldCheck, title: "Secure by Design", text: "Best-in-class security baked into every layer." },
            { icon: Sparkles, title: "Crafted with Care", text: "Pixel-perfect interfaces and delightful UX." },
          ].map((f, i) => (
            <div key={i} className="p-8 rounded-2xl bg-card border border-border card-hover">
              <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <f.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="container-px max-w-7xl mx-auto py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-8 -left-8 h-40 w-40 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-8 -right-8 h-40 w-40 rounded-full bg-primary/10 blur-3xl" />
            <div className="relative grid grid-cols-2 gap-4">
              {[
                { icon: Code2, label: "Web Development" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: Cpu, label: "Custom Software" },
                { icon: Sparkles, label: "Digital Growth" },
              ].map((item, i) => (
                <div
                  key={i}
                  className={`p-6 rounded-2xl bg-card border border-border card-hover ${i % 2 === 1 ? "translate-y-6" : ""}`}
                >
                  <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
                    <item.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <p className="font-display font-semibold">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">About PKS Soft Tech</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-[1.1] mb-6">
              Engineering the future of <span className="text-gradient">digital business</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-5">
              PKS Soft Tech is a forward-thinking software startup crafting websites, mobile apps, and custom software that help businesses move faster and grow smarter.
            </p>
            <p className="text-muted-foreground mb-8">
              We blend creativity with clean engineering to deliver premium digital products — built to perform, designed to inspire, and shaped around your brand.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-10">
              <div>
                <p className="font-display text-3xl font-bold text-gradient">100%</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Client Focus</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-gradient">24/7</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Support</p>
              </div>
              <div>
                <p className="font-display text-3xl font-bold text-gradient">∞</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">Possibilities</p>
              </div>
            </div>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-8">
              <Link to="/about">Learn More <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Services preview */}
      <section className="container-px max-w-7xl mx-auto py-20">
        <div className="text-center mb-14">
          <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">What We Do</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold">Our Key Services</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="group p-7 rounded-2xl bg-card border border-border card-hover">
              <div className="h-14 w-14 rounded-xl border border-primary/30 bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gradient-primary group-hover:border-transparent transition-all">
                <s.icon className="h-7 w-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-display text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Technologies */}
      <TechnologiesSection />

      {/* CTA */}
      <section className="container-px max-w-7xl mx-auto py-20">
        <div className="relative overflow-hidden rounded-3xl border border-primary/30 bg-gradient-to-br from-card to-secondary p-12 md:p-16 text-center">
          <div className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
          <div className="relative">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Ready to build something <span className="text-gradient">incredible</span>?</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-8">Let's talk about your idea and turn it into a product your customers will love.</p>
            <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-8">
              <Link to="/contact">Contact Us <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Index;
