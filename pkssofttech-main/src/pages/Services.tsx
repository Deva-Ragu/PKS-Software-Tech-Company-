import { PageLayout } from "@/components/layout/PageLayout";
import { services } from "@/data/services";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Services = () => (
  <PageLayout>
    <section className="container-px max-w-7xl mx-auto pt-12 pb-12 text-center">
      <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">Services</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        End-to-end <span className="text-gradient">software services</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
        From the first sketch to launch and beyond, we provide everything you need to build great software.
      </p>
    </section>

    <section className="container-px max-w-7xl mx-auto py-12">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <div key={i} className="group relative p-8 rounded-2xl bg-card border border-border card-hover overflow-hidden">
            <div className="absolute top-0 right-0 h-32 w-32 bg-primary/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative">
              <div className="h-14 w-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-5 shadow-glow">
                <s.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="container-px max-w-7xl mx-auto py-16 text-center">
      <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Have a project in mind?</h2>
      <p className="text-muted-foreground mb-8">Tell us about it — we'd love to help.</p>
      <Button asChild size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12 px-8">
        <Link to="/contact">Start a Project <ArrowRight className="ml-2 h-4 w-4" /></Link>
      </Button>
    </section>
  </PageLayout>
);

export default Services;
