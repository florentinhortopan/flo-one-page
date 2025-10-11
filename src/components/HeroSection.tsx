import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import LogosRow from "./LogosRow";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  description?: string;
  imageUrl?: string;
}

const HeroSection = ({
  name = "Florentin Hortopan",
  tagline = "UX for AI Powered Companies. ",
  description = "Helping design teams deliver hyper-customizable experiences designed for trust and usability. Let's build together something amazing.",
  imageUrl = "https://images.squarespace-cdn.com/content/v1/6238eadda6c01819e810fa34/34a93dea-8266-4c2d-83de-c7e308c95cc6/Flo.png?format=1000w",
}: HeroSectionProps) => {
  const scrollToServices = () => {
    // Scroll to services section
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    // Scroll to contact section
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Company data for logos
  const companies = [
    { name: "Critical Mass" },
    { name: "Airbnb" },
    { name: "Gap Inc." },
    { name: "GoPro" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background py-20 px-4 md:px-8 lg:px-12 punk-dots overflow-hidden">
      {/* Animated punk background elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 border-4 border-primary rotate-12 animate-punk-bounce"></div>
        <div className="absolute top-1/4 right-20 w-24 h-24 bg-secondary animate-punk-spin opacity-20"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-2 bg-accent animate-punk-shake"></div>
        <div className="absolute bottom-1/3 right-1/3 w-20 h-20 border-4 border-punk-cyan rotate-45 animate-punk-color-shift"></div>
      </div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 
              className="text-5xl md:text-6xl lg:text-8xl font-display font-black uppercase tracking-tighter mb-4 text-foreground neon-glow"
              data-text={name}
            >
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display uppercase text-primary mb-6 dark:text-accent border-l-8 border-primary pl-4 animate-punk-slide-in">
              {tagline}
            </h2>
            <p className="text-lg md:text-xl font-semibold text-foreground max-w-2xl mx-auto lg:mx-0 mb-8 bg-primary/10 p-4 border-4 border-foreground">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={scrollToContact}
                className="group relative px-8 py-4 bg-primary text-primary-foreground font-display text-xl uppercase border-4 border-foreground overflow-hidden transition-all duration-300 hover:scale-105 hover:rotate-1"
                style={{ 
                  boxShadow: '6px 6px 0px hsl(var(--foreground))',
                  clipPath: 'polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <Mail className="mr-2 h-5 w-5" />
                  Get in Touch
                </span>
                <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
              <button
                onClick={scrollToServices}
                className="group relative px-8 py-4 bg-secondary text-secondary-foreground font-display text-xl uppercase border-4 border-foreground overflow-hidden transition-all duration-300 hover:scale-105 hover:-rotate-1"
                style={{ 
                  boxShadow: '6px 6px 0px hsl(var(--foreground))',
                  clipPath: 'polygon(5% 0, 100% 0, 100% 80%, 95% 100%, 0 100%, 0 20%)'
                }}
              >
                <span className="relative z-10 flex items-center justify-center">
                  <ArrowDown className="mr-2 h-5 w-5 animate-punk-bounce" />
                  Explore Services
                </span>
                <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Company Logos Row */}
            <div className="mt-8 lg:mt-10">
              <LogosRow />
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-primary animate-punk-spin opacity-50 blur-xl"></div>
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 overflow-hidden border-8 border-foreground neon-border transform rotate-3 group-hover:rotate-0 transition-all duration-300"
                   style={{ 
                     clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                     boxShadow: '12px 12px 0px hsl(var(--primary)), 24px 24px 0px hsl(var(--secondary))'
                   }}>
                <img
                  src={imageUrl}
                  alt={`${name} - UX Design Consultant for AI-Powered Companies`}
                  className="w-full h-full object-cover animate-punk-color-shift"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent mix-blend-multiply"></div>
                {/* Glitch overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-accent/30 to-transparent animate-punk-slide-in opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
          <button
            onClick={scrollToServices}
            className="h-16 w-16 border-4 border-primary bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-300 animate-punk-bounce neon-border"
            style={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)' }}
          >
            <ArrowDown className="h-8 w-8 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
