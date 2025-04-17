import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowUpRight, MessageSquare, Sparkles } from "lucide-react";

interface AIAssistantSectionProps {
  title?: string;
  description?: string;
  gptLink?: string;
}

const AIAssistantSection = ({
  title = "Meet Flo AI - Your UX Design Assistant",
  description = "Get instant UX design guidance, feedback on your projects, and expert advice on design systems directly from my custom-trained AI assistant.",
  gptLink = "https://chatgpt.com/g/g-67f42e9af73c81918702733c9ed284d2-flo-ai",
}: AIAssistantSectionProps) => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const mockConversation = [
    { role: "user", message: "How do I create a consistent design system?" },
    {
      role: "assistant",
      message:
        "A consistent design system starts with clear design principles and a component library. Begin by auditing your current UI elements...",
    },
    { role: "user", message: "What about managing design tokens?" },
    {
      role: "assistant",
      message:
        "Design tokens are the foundation of your system. They define colors, typography, spacing, and other visual properties...",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-muted dark:bg-background w-full">
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
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={fadeInUp}
          >
            <Card className="shadow-lg border border-border dark:border-border/50 overflow-hidden bg-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4 pb-2 border-b border-border dark:border-border/50">
                  <div className="flex items-center">
                    <MessageSquare className="h-5 w-5 text-primary dark:text-accent mr-2" />
                    <h3 className="font-medium text-card-foreground">
                      Flo AI Assistant
                    </h3>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs px-2 py-1 rounded-full">
                    Online
                  </div>
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto">
                  {mockConversation.map((item, index) => (
                    <div
                      key={index}
                      className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 rounded-lg ${
                          item.role === "user"
                            ? "bg-primary dark:bg-accent text-primary-foreground dark:text-accent-foreground rounded-tr-none"
                            : "bg-muted dark:bg-muted/50 text-foreground rounded-tl-none"
                        }`}
                      >
                        {item.message}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold text-foreground">
              How Flo AI Can Help You
            </h3>

            <div className="space-y-4">
              {[
                {
                  title: "Design System Guidance",
                  description:
                    "Get expert advice on creating and maintaining design systems",
                },
                {
                  title: "UX Best Practices",
                  description:
                    "Learn industry standards and best practices for user experience design",
                },
                {
                  title: "Problem Solving",
                  description:
                    "Solve specific design challenges with tailored recommendations",
                },
                {
                  title: "Resource Recommendations",
                  description:
                    "Discover tools, articles, and resources to enhance your design workflow",
                },
              ].map((feature, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-primary/10 dark:bg-accent/20 p-2 rounded-full mr-4">
                    <Sparkles className="h-5 w-5 text-primary dark:text-accent" />
                  </div>
                  <div>
                    <h4 className="font-medium text-foreground">
                      {feature.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="mt-6 bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground w-full sm:w-auto"
              onClick={() => window.open(gptLink, "_blank")}
            >
              Chat with Flo AI
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
