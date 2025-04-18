import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  description?: string;
  imageUrl?: string;
}

const HeroSection = ({
  name = "Florentin Hortopan",
  tagline = "UX for AI Native Companies. ",
  description = " hyper-customizable experiences designed for trust and usability. Let's build together something amazing.",
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

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background py-20 px-4 md:px-8 lg:px-12">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background z-0 dark:from-primary/5"></div>

      <div className="container mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-foreground">
              {name}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-primary mb-6 dark:text-accent">
              {tagline}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0 mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="rounded-full bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:text-accent-foreground dark:hover:bg-accent/90"
              >
                <Mail className="mr-2 h-4 w-4" />
                Get in Touch
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToServices}
                className="rounded-full border-primary/20 hover:bg-primary/5 dark:border-accent/20 dark:hover:bg-accent/10"
              >
                <ArrowDown className="mr-2 h-4 w-4" />
                Explore Services
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/20 dark:border-accent/30 shadow-xl">
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent dark:from-black/60"></div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <Button
            variant="ghost"
            size="icon"
            onClick={scrollToServices}
            className="rounded-full h-12 w-12 border border-primary/20 dark:border-accent/30 hover:bg-primary/5 dark:hover:bg-accent/10"
          >
            <ArrowDown className="h-6 w-6 text-primary dark:text-accent" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
