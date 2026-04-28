import { PageLayout } from "@/components/layout/PageLayout";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

const Portfolio = () => (
  <PageLayout>
    <section className="container-px max-w-7xl mx-auto pt-12 pb-12 text-center">
      <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">Portfolio</p>
      <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
        Selected <span className="text-gradient">Demo Projects</span>
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
        A glimpse of demo and sample projects created by PKS Soft Tech Company to showcase our skills and technical capabilities.
      </p>
    </section>

    <section className="container-px max-w-7xl mx-auto py-12">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
        {projects.map((p, i) => (
          <article key={i} className="group rounded-2xl bg-card border border-border overflow-hidden card-hover">
            <div className="aspect-[4/3] overflow-hidden bg-secondary">
              <img src={p.image} alt={p.title} loading="lazy" width={1024} height={768} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-2">{p.category}</p>
              <div className="flex items-start justify-between gap-2 mb-2">
                <h3 className="font-display text-xl font-semibold">{p.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-sm text-muted-foreground">{p.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  </PageLayout>
);

export default Portfolio;
