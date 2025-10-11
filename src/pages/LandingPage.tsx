import React, { useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import HeroSection from "../components/HeroSection";
import ServicesGrid from "../components/ServicesGrid";
import AIAssistantSection from "../components/AIAssistantSection";
import MentorshipSection from "../components/MentorshipSection";
import ContactSection from "../components/ContactSection";
import ThemeToggle from "../components/ThemeToggle";

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
      <header className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-foreground">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="text-2xl md:text-3xl font-display font-black uppercase tracking-tighter neon-glow"
            >
              FLORENTIN
            </motion.div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                onClick={() => scrollToSection(section.id)}
                className="relative px-4 py-2 font-display font-bold uppercase text-sm border-2 border-foreground bg-background hover:bg-primary hover:text-primary-foreground transition-all duration-200 group overflow-hidden"
                style={{ clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)' }}
              >
                <span className="relative z-10">{section.label}</span>
                <div className="absolute inset-0 bg-accent transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </motion.button>
            ))}
            
            {/* Theme Toggle */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: sections.length * 0.1 }}
              className="ml-4 pl-4 border-l-2 border-foreground"
            >
              <ThemeToggle />
            </motion.div>
          </nav>

          {/* Mobile Navigation - Theme Toggle & Menu */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              className="w-12 h-12 border-4 border-foreground bg-primary hover:bg-accent transition-colors duration-200 flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-primary-foreground" />
              ) : (
                <Menu className="h-6 w-6 text-primary-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-background border-t-4 border-foreground punk-stripes"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-2">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }}
                  onClick={() => scrollToSection(section.id)}
                  className="text-left py-3 px-4 font-display font-bold uppercase text-sm border-4 border-foreground bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-200"
                  style={{ clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)' }}
                >
                  {section.label}
                </motion.button>
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
      <footer className="bg-background border-t-4 border-foreground py-8 relative overflow-hidden punk-stripes">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <p className="text-lg font-display font-bold uppercase text-foreground mb-4 border-4 border-foreground bg-primary/20 inline-block px-6 py-2">
            © {new Date().getFullYear()} FLORENTIN. ALL RIGHTS RESERVED.
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://adplist.org/mentors/florentin-hortopan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase border-2 border-foreground px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200"
              style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}
            >
              Mentorship
            </a>
            <a
              href="https://puxa.ai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold uppercase border-2 border-foreground px-4 py-2 hover:bg-secondary hover:text-secondary-foreground transition-all duration-200"
              style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)' }}
            >
              Puxa AI
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
