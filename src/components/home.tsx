import React from "react";
import { motion } from "framer-motion";
import HeroSection from "./HeroSection";
import ServicesGrid from "./ServicesGrid";
import AIAssistantSection from "./AIAssistantSection";
import ExpertiseSection from "./ExpertiseSection";
import ContactSection from "./ContactSection";
import ThemeToggle from "./ThemeToggle";

const Home = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="font-bold text-xl">Florentin Hortopan</div>
          <div className="hidden md:flex items-center space-x-6">
            <a
              href="#services"
              className="hover:text-primary transition-colors"
            >
              Services
            </a>
            <a
              href="#ai-assistant"
              className="hover:text-primary transition-colors"
            >
              AI Assistant
            </a>
            <a
              href="#expertise"
              className="hover:text-primary transition-colors"
            >
              Expertise
            </a>
            <a
              href="#mentorship"
              className="hover:text-primary transition-colors"
            >
              Mentorship
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              Contact
            </a>
            <div className="ml-2 pl-4 border-l border-border">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <section id="hero" className="pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroSection />
          </motion.div>
        </section>

        {/* Services Grid */}
        <section id="services" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <ServicesGrid />
            </div>
          </motion.div>
        </section>

        {/* AI Assistant Section */}
        <section id="ai-assistant" className="py-20 bg-muted/50">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <AIAssistantSection />
            </div>
          </motion.div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="py-20 bg-white">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <ExpertiseSection />
            </div>
          </motion.div>
        </section>

        {/* Contact & Mentorship Section */}
        <section id="mentorship" className="py-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="max-w-7xl mx-auto px-6">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                Mentorship & Contact
              </h2>
              <ContactSection />
            </div>
          </motion.div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © {new Date().getFullYear()} Florentin Hortopan. All rights
            reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a
              href="https://www.linkedin.com/in/florentinhortopan/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://adplist.org/mentors/florentin-hortopan"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              ADPList
            </a>
            <a
              href="https://puxa.ai/about-puxa-team-and-mojo/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              Puxa AI
            </a>
            <a
              href="https://stack.angellist.com/company/puxa-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              AngelList
            </a>
          </div>
        </div>
      </footer>

      {/* Scroll to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 p-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90 transition-colors"
        aria-label="Scroll to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </div>
  );
};

export default Home;
