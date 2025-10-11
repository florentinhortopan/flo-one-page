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
    <section className="py-20 px-4 md:px-8 bg-background punk-dots w-full relative overflow-hidden">
      {/* Punk background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-4 border-secondary rotate-45 animate-punk-spin opacity-30"></div>
      <div className="absolute bottom-10 left-10 w-40 h-40 border-4 border-accent -rotate-12 animate-punk-bounce opacity-20"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          className="text-center mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.5, type: "spring" }}
          variants={fadeInUp}
        >
          <div className="inline-block mb-6">
            <h2 className="text-3xl md:text-5xl font-display font-black uppercase text-foreground border-8 border-foreground bg-secondary text-secondary-foreground px-6 py-4 transform rotate-1 hover:rotate-0 transition-transform duration-300"
                style={{ boxShadow: '10px 10px 0px hsl(var(--foreground))' }}>
              {title.toUpperCase()}
            </h2>
          </div>
          <p className="text-lg font-bold text-foreground max-w-2xl mx-auto mt-4 bg-accent/20 p-4 border-4 border-foreground">
            {description.toUpperCase()}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
            variants={fadeInUp}
          >
            <div className="punk-card bg-card p-6 relative group">
              {/* Punk decorative elements */}
              <div className="absolute top-0 left-0 w-16 h-16 border-t-8 border-l-8 border-primary"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-8 border-r-8 border-secondary"></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4 pb-2 border-b-4 border-foreground">
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-primary border-4 border-foreground flex items-center justify-center mr-3 animate-punk-bounce">
                      <MessageSquare className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-bold uppercase text-card-foreground text-lg">
                      Flo AI Assistant
                    </h3>
                  </div>
                  <div className="bg-punk-green border-2 border-foreground text-foreground text-xs font-bold uppercase px-3 py-1 animate-neon-pulse">
                    Online
                  </div>
                </div>

                <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
                  {mockConversation.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: item.role === "user" ? 20 : -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className={`flex ${item.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[80%] p-3 border-4 border-foreground font-semibold ${
                          item.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary text-secondary-foreground"
                        }`}
                        style={{ 
                          clipPath: item.role === "user" 
                            ? 'polygon(0 0, 95% 0, 100% 15%, 100% 100%, 10% 100%, 0 85%)'
                            : 'polygon(5% 0, 100% 0, 100% 85%, 90% 100%, 0 100%, 0 15%)',
                          boxShadow: '4px 4px 0px hsl(var(--foreground))'
                        }}
                      >
                        {item.message}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4, type: "spring" }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <h3 className="text-3xl font-display font-black uppercase text-foreground border-l-8 border-accent pl-4 bg-accent/10 py-2">
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
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start border-4 border-foreground p-4 bg-card hover:bg-primary/10 transition-colors duration-300 group"
                  style={{ clipPath: 'polygon(0 0, 98% 0, 100% 15%, 100% 100%, 2% 100%, 0 85%)' }}
                >
                  <div className="w-12 h-12 bg-accent border-4 border-foreground flex items-center justify-center mr-4 group-hover:animate-punk-spin">
                    <Sparkles className="h-6 w-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold uppercase text-foreground text-lg mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-semibold text-foreground/80">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <button
              className="mt-6 group relative px-8 py-4 bg-primary text-primary-foreground font-display text-xl uppercase border-4 border-foreground overflow-hidden transition-all duration-300 hover:scale-105 w-full sm:w-auto"
              style={{ 
                boxShadow: '6px 6px 0px hsl(var(--foreground))',
                clipPath: 'polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)'
              }}
              onClick={() => window.open(gptLink, "_blank")}
            >
              <span className="relative z-10 flex items-center justify-center">
                Chat with Flo AI
                <ArrowUpRight className="ml-2 h-5 w-5 animate-punk-bounce" />
              </span>
              <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistantSection;
