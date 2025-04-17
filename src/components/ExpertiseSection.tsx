import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, Briefcase, Building, Clock } from "lucide-react";

interface ExpertiseSectionProps {
  title?: string;
  description?: string;
  linkedInLink?: string;
}

const ExpertiseSection = ({
  title = "Two Decades of Design Excellence",
  description = "From startups to industry giants, I've been crafting exceptional user experiences across diverse design fields and industries.",
  linkedInLink = "https://linkedin.com/in/florentinhortopan",
}: ExpertiseSectionProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const experienceItems = [
    {
      company: "Critical Mass",
      position: "Associate Director of UX",
      period: "Current",
      description:
        "Leading UX strategy and design systems implementation for enterprise clients.",
      icon: <Building className="h-10 w-10 text-primary dark:text-accent" />,
    },
    {
      company: "Airbnb",
      position: "Senior UX Designer - DS Architect",
      period: "3+ Years",
      description:
        "Reimagined key user journeys resulting in significant conversion improvements and enhanced user satisfaction.",
      icon: (
        <Building className="h-10 w-10 text-secondary dark:text-secondary" />
      ),
    },
    {
      company: "Gap Inc.",
      position: "Design System Manager - UX Lead",
      period: "Multiple Years",
      description:
        "Transformed digital shopping experiences across multiple brands in the portfolio.",
      icon: (
        <Building className="h-10 w-10 text-primary/80 dark:text-accent/80" />
      ),
    },
    {
      company: "GoPro",
      position: "Senior Product Designer",
      period: "1 great year",
      description:
        "Designed intuitive interfaces for camera systems on web and companion applications.",
      icon: (
        <Building className="h-10 w-10 text-secondary/80 dark:text-secondary/80" />
      ),
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-background w-full">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            {title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-4">
            {description}
          </p>
          <div className="mt-4 flex items-center justify-center">
            <Clock className="h-5 w-5 mr-2 text-primary dark:text-accent" />
            <span className="text-lg font-semibold text-foreground">
              20+ Years in the Industry
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {experienceItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              variants={fadeInUp}
            >
              <Card className="h-full shadow-md hover:shadow-lg transition-shadow duration-300 border border-border dark:border-border/50 overflow-hidden bg-card">
                <CardContent className="p-6">
                  <div className="flex items-start">
                    <div className="mr-4 p-2 bg-muted dark:bg-muted/50 rounded-full">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-card-foreground">
                        {item.company}
                      </h3>
                      <div className="flex items-center mt-1">
                        <span className="text-primary dark:text-accent font-medium">
                          {item.position}
                        </span>
                        <span className="mx-2 text-muted-foreground">•</span>
                        <span className="text-muted-foreground">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-3 text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          variants={fadeInUp}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground"
            onClick={() => window.open(linkedInLink, "_blank")}
          >
            See My Full Journey
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
