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
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="h-full bg-card hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border/50">
        <CardHeader>
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 dark:bg-accent/20 mb-4">
            {icon}
          </div>
          <CardTitle className="text-xl text-card-foreground">
            {title}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-sm text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesGrid = () => {
  const services = [
    {
      icon: <Layers className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Design Systems Architecture",
      description:
        "Building scalable design systems that maintain consistency across products and platforms.",
    },
    {
      icon: <Code className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Semantics",
      description:
        "Creating meaningful and intuitive naming conventions and structures for design components.",
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary dark:text-accent" />,
      title: "UX for AI Products",
      description:
        "Specialized design expertise for AI-powered products and interfaces that are intuitive and human-centered.",
    },
    {
      icon: <Palette className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Multi-brand Systems",
      description:
        "Developing flexible design systems that support multiple brands while maintaining core principles.",
    },
    {
      icon: <Compass className="w-6 h-6 text-primary dark:text-accent" />,
      title: "UX Strategy",
      description:
        "Crafting comprehensive UX strategies aligned with business goals and user needs.",
    },
    {
      icon: <Users className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Design Team Building",
      description:
        "Building and scaling effective design teams with the right skills and culture.",
    },
    {
      icon: <BookOpen className="w-6 h-6 text-primary dark:text-accent" />,
      title: "OnBoarding",
      description:
        "Creating smooth onboarding processes for new design team members and stakeholders.",
    },
    {
      icon: <Settings className="w-6 h-6 text-primary dark:text-accent" />,
      title: "Design Operations",
      description:
        "Optimizing design workflows, tools, and processes to improve efficiency and output quality.",
    },
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted dark:bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            My Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Specialized expertise to elevate your product design and user
            experience
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
