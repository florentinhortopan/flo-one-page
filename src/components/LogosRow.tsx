import React from "react";
import { motion } from "framer-motion";

interface LogosRowProps {
  companies?: Array<{
    name: string;
    logo?: string;
  }>;
}

const LogosRow = ({
  companies = [
    {
      name: "Critical Mass",
      logo: "https://froog.fun/wp-content/uploads/2025/07/critical_mass_logo.jpeg",
    },
    {
      name: "Airbnb",
      logo: "https://froog.fun/wp-content/uploads/2025/07/airbnb.png",
    },
    {
      name: "Gap Inc.",
      logo: "https://froog.fun/wp-content/uploads/2025/07/logo-horizontal-1.png",
    },
    {
      name: "GoPro",
      logo: "https://froog.fun/wp-content/uploads/2025/07/gopro.png",
    },
  ],
}: LogosRowProps) => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  // Function to get the appropriate background color based on company name
  const getBackgroundColor = (name: string) => {
    switch (name) {
      case "Critical Mass":
        return "bg-black";
      case "Airbnb":
        return "bg-white";
      case "Gap Inc.":
        return "bg-white";
      case "GoPro":
        return "bg-white";
      default:
        return "bg-muted/30";
    }
  };

  const colors = ["primary", "secondary", "accent", "punk-cyan"];

  return (
    <div className="w-full mt-8 py-6">
      <p className="text-sm font-display font-bold uppercase text-foreground mb-4 tracking-wider">
        Trusted By
      </p>
      <motion.div
        className="flex flex-wrap justify-start items-center gap-6 md:gap-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {companies.map((company, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            whileHover={{ 
              scale: 1.1, 
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.3 }
            }}
          >
            <div
              className={`w-16 h-16 md:w-20 md:h-20 ${getBackgroundColor(company.name)} flex items-center justify-center p-3 border-4 border-foreground relative group overflow-hidden`}
              style={{ 
                clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                boxShadow: '4px 4px 0px hsl(var(--foreground))'
              }}
            >
              {/* Animated background on hover */}
              <div className={`absolute inset-0 bg-${colors[index % colors.length]} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}></div>
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain relative z-10 filter group-hover:brightness-125 transition-all duration-300"
                onError={(e) => {
                  console.error(`Failed to load logo for ${company.name}`);
                }}
              />
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default LogosRow;
