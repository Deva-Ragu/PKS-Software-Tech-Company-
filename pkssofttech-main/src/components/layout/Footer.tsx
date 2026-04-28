import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => (
  <footer className="border-t border-border bg-card/50 mt-24">
    <div className="container-px max-w-7xl mx-auto py-14 grid gap-10 md:grid-cols-4">
      <div className="md:col-span-2">
        <div className="flex items-center gap-3 mb-4">
          <img src={logo} alt="PKS Soft Tech Company logo" width={40} height={40} className="h-10 w-10" loading="lazy" />
          <span className="font-display font-bold text-lg">PKS Soft Tech</span>
        </div>
        <p className="text-muted-foreground text-sm max-w-md">
          Turning ideas into digital reality. We craft mobile apps, websites and e-commerce solutions that move businesses forward.
        </p>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          <li><Link to="/about" className="hover:text-primary transition-colors">About</Link></li>
          <li><Link to="/services" className="hover:text-primary transition-colors">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-primary transition-colors">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
        </ul>
      </div>
      <div>
        <h4 className="font-display font-semibold mb-4 text-sm uppercase tracking-wider">Get In Touch</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" /> 7598425760</li>
          <li>
            <a
              href="mailto:pkssofttech@gmail.com"
              className="group inline-flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="h-4 w-4 text-primary" />
              <span className="break-all underline-offset-4 group-hover:underline">pkssofttech@gmail.com</span>
            </a>
          </li>
        </ul>
        <div className="flex gap-3 mt-4">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a key={i} href="#" className="h-9 w-9 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-primary-foreground transition-all">
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </div>
    <div className="border-t border-border py-5 text-center text-xs text-muted-foreground">
      © {new Date().getFullYear()} PKS Soft Tech Company. All rights reserved.
    </div>
  </footer>
);
