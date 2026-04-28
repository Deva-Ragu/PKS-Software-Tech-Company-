import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import projectBusiness from "@/assets/project-business-website.jpg";
import projectRestaurant from "@/assets/project-restaurant-app.jpg";
import projectSchool from "@/assets/project-school-management.jpg";

export interface Project {
  title: string;
  category: string;
  description: string;
  image: string;
}

export const projects: Project[] = [
  { title: "Business Website (Demo Project)", category: "Website", description: "A modern responsive business website designed to showcase company services, portfolio, and contact details with a clean and professional interface.", image: projectBusiness },
  { title: "Restaurant Ordering App (Demo Project)", category: "Mobile App", description: "A demo mobile application created to showcase online food ordering features, menu browsing, and order tracking functionality.", image: projectRestaurant },
  { title: "School Management System (Demo Project)", category: "Web Application", description: "A web-based system developed as a demo to manage student records, attendance, and school administration processes.", image: projectSchool },
  { title: "FinPay Mobile Banking", category: "Mobile App", description: "A secure mobile banking experience with real-time transactions, budgeting and biometric login.", image: project1 },
  { title: "ShopWave E-commerce", category: "E-commerce", description: "A high-converting storefront with personalised recommendations and seamless checkout.", image: project2 },
  { title: "InsightDesk Analytics", category: "Mac App", description: "A native macOS analytics dashboard built for product teams to track KPIs in real time.", image: project3 },
];
