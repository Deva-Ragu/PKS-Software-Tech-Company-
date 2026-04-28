import { Smartphone, SmartphoneCharging, Apple, Monitor, ShoppingCart, Globe, LucideIcon } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const services: Service[] = [
  { icon: Smartphone, title: "Mobile App Development", description: "Cross-platform mobile experiences built with React Native and Flutter — fast, fluid and beautiful." },
  { icon: SmartphoneCharging, title: "Android App Development", description: "Native Android apps engineered with Kotlin for performance, scalability and Material excellence." },
  { icon: Apple, title: "iOS App Development", description: "Premium iOS applications crafted in Swift with the polish Apple users expect." },
  { icon: Monitor, title: "Mac App Development", description: "Powerful, native macOS applications optimized for Apple Silicon and modern workflows." },
  { icon: ShoppingCart, title: "E-commerce Development", description: "Conversion-optimized storefronts with secure payments, inventory and analytics built in." },
  { icon: Globe, title: "Website Development", description: "Modern, responsive, SEO-ready websites that turn visitors into customers." },
];
