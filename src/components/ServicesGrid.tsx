import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Layers,
  Compass,
  Users,
  BookOpen,
  Settings,
  Code,
  Palette,
  Briefcase,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ 
        y: -8, 
        rotate: 2,
        transition: { duration: 0.3, type: "spring", stiffness: 300 } 
      }}
      className="h-full"
    >
      <div className="punk-card h-full bg-card p-6 relative group overflow-hidden">
        {/* Animated background accent */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary transform translate-x-10 -translate-y-10 rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary transform -translate-x-8 translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
        
        <div className="relative z-10">
          <div className="flex items-center justify-center w-16 h-16 bg-accent border-4 border-foreground mb-4 transform -rotate-6 group-hover:rotate-0 transition-transform duration-300"
               style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}>
            <div className="text-accent-foreground transform scale-110">
              {icon}
            </div>
          </div>
          <h3 className="text-xl font-display font-bold uppercase text-card-foreground mb-3 tracking-tight border-b-4 border-primary pb-2 group-hover:border-accent transition-colors">
            {title}
          </h3>
          <p className="text-sm font-semibold text-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Corner decoration */}
        <div className="absolute top-2 right-2 w-4 h-4 border-t-4 border-r-4 border-accent"></div>
        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-4 border-l-4 border-secondary"></div>
      </div>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: <Layers className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Design Systems",
      description:
        "Build scalable, AI first design systems that maintain consistency across products, platforms, and brands. Designer first, intent based semantics.",
    },
    {
      icon: <Code className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Training Design Teams",
      description:
        "Shift the designer’s role from crafting fixed paths to curating flexible, adaptive systems—balancing visibility and control.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary dark:text-accent" />,
      title: "UX for AI Products",
      description:
        "Guide users through ambiguity, and ensure ethical, context-aware interactions with dynamic systems, and avoid AI aversion or overreliance.",
    },
    {
      icon: <Palette className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Documentation",
      description:
        "Develop internal GPTs and generate stories, examples, and links to deliver persistent, always updated and relevant information for your team.",
    },
    {
      icon: <Compass className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Design Automation",
      description:
        "Use the power of AI to generate, iterate, and deploy not only prototypes but functioning apps and services.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary dark:text-accent" />,
      title: "AI+UX Team Building",
      description:
        "Build and scale effective design teams with the right skills and culture, using new tools and processes to improve efficiency and output quality.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary dark:text-accent" />,
      title: "AI Ethics & A11y",
      description:
        "Systematically assess ethical and accessibility gaps, then apply inclusive, AI transparency methods to ensure trust, equity, and usability.",
    },
    {
      icon: <Settings className="w-6 h-6 text-primary dark:text-accent" />,
      title: "New Design Team Workflows",
      description:
        "Create AI-integrated design workflows that are faster, more adaptive, and centered on user intent. From prompting to vibe coding.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-background punk-stripes relative overflow-hidden">
      {/* Punk background elements */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
      <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-accent via-secondary to-primary"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <h2 className="text-4xl md:text-6xl font-display font-black uppercase text-foreground border-8 border-foreground bg-primary text-primary-foreground px-8 py-4 transform -rotate-2 hover:rotate-0 transition-transform duration-300"
                style={{ boxShadow: '8px 8px 0px hsl(var(--foreground))' }}>
              My Services
            </h2>
          </div>
          <p className="text-xl font-bold text-foreground max-w-2xl mx-auto bg-accent/20 p-4 border-4 border-foreground">
            SPECIALIZED EXPERTISE TO ELEVATE YOUR PRODUCT DESIGN
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
