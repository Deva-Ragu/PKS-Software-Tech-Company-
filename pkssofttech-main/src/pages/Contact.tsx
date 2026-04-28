import { useState } from "react";
import { z } from "zod";
import { PageLayout } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram, Send } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) {
      const errs: Record<string, string> = {};
      r.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      return;
    }
    setErrors({});
    toast({ title: "Message sent!", description: "Thanks for reaching out — we'll get back to you shortly." });
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <PageLayout>
      <section className="container-px max-w-7xl mx-auto pt-12 pb-12 text-center">
        <p className="text-primary text-sm font-semibold uppercase tracking-[0.25em] mb-3">Contact</p>
        <h1 className="font-display text-5xl md:text-6xl font-bold mb-6">
          Let's <span className="text-gradient">talk</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
          Have a project, a question or just want to say hi? We'd love to hear from you.
        </p>
      </section>

      <section className="container-px max-w-7xl mx-auto py-8 grid lg:grid-cols-5 gap-8">
        {/* Info */}
        <aside className="lg:col-span-2 space-y-4">
          {[
            { icon: Phone, title: "Phone", value: "7598425760", href: "tel:7598425760", subtitle: "Call us anytime" },
            { icon: Mail, title: "Email", value: "pkssofttech@gmail.com", href: "mailto:pkssofttech@gmail.com", subtitle: "Email us for inquiries" },
            { icon: MapPin, title: "Location", value: "Tamil Nadu, India", subtitle: "Based in South India" },
          ].map((c, i) => (
            <a key={i} href={c.href} className="block p-6 rounded-2xl bg-card border border-border card-hover group">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow flex-shrink-0">
                  <c.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-1">{c.subtitle}</p>
                  <p className="text-foreground font-medium break-all group-hover:text-primary transition-colors">{c.value}</p>
                </div>
              </div>
            </a>
          ))}
          <div className="p-6 rounded-2xl bg-card border border-border">
            <p className="text-xs uppercase tracking-[0.2em] text-primary font-semibold mb-3">Follow Us</p>
            <div className="flex gap-3">
              {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
                <a key={i} href="#" className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </aside>

        {/* Form */}
        <form onSubmit={onSubmit} className="lg:col-span-3 p-8 rounded-2xl bg-card border border-border space-y-5">
          <div>
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} maxLength={100} className="mt-2 bg-input border-border" placeholder="Your name" />
            {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} maxLength={255} className="mt-2 bg-input border-border" placeholder="you@example.com" />
            {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
          </div>
          <div>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} maxLength={1000} rows={5} className="mt-2 bg-input border-border resize-none" placeholder="Tell us about your project..." />
            {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
          </div>
          <Button type="submit" size="lg" className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow h-12">
            Send Message <Send className="ml-2 h-4 w-4" />
          </Button>
        </form>
      </section>

      {/* Map */}
      <section className="container-px max-w-7xl mx-auto py-16">
        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center">Find Us</h2>
        <div className="rounded-2xl overflow-hidden border border-border h-[400px]">
          <iframe
            title="PKS Soft Tech location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251330.4!2d77.9!3d11.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTHCsDAwJzAwLjAiTiA3N8KwNTQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>
    </PageLayout>
  );
};

export default Contact;
