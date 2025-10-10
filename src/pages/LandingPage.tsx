import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import AIAssistantSection from "../components/AIAssistantSection";
import MentorshipSection from "../components/MentorshipSection";
import ContactSection from "../components/ContactSection";
import { Button } from "../components/ui/button";

const LandingPage = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const sections = [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "ai-assistant", label: "AI Assistant" },
    { id: "mentorship", label: "Mentorship" },
    { id: "contact", label: "Contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sticky Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold"
            >
              Florentin
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className="text-sm font-medium hover:text-primary transition-colors"
              >
                {section.label}
              </button>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-background border-b py-4"
          >
            <div className="container mx-auto px-4 flex flex-col space-y-4">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left py-2 text-sm font-medium hover:text-primary transition-colors"
                >
                  {section.label}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="pt-16">
        {" "}
        {/* Add padding to account for fixed header */}
        <section id="hero">
          <HeroSection />
        </section>
        <section id="services" className="py-20 bg-muted/30">
          <ServicesGrid />
        </section>
        <section id="ai-assistant" className="py-20">
          <AIAssistantSection />
        </section>
        <section id="mentorship" className="py-20 bg-muted/30">
          <MentorshipSection />
        </section>
        <section id="contact" className="py-20">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Florentin. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
