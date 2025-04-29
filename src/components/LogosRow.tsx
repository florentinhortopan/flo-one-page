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
      logo: "http://puxa.ai/wp-content/uploads/2025/04/critical_mass_logo.jpeg",
    },
    {
      name: "Airbnb",
      logo: "http://puxa.ai/wp-content/uploads/2025/04/airbnb.png",
    },
    {
      name: "Gap Inc.",
      logo: "http://puxa.ai/wp-content/uploads/2025/04/logo-horizontal-1.png",
    },
    {
      name: "GoPro",
      logo: "http://puxa.ai/wp-content/uploads/2025/04/gopro.png",
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

  return (
    <div className="w-full mt-8 py-4">
      <motion.div
        className="flex flex-wrap justify-start items-center gap-8 md:gap-12"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {companies.map((company, index) => (
          <motion.div key={index} variants={itemVariants}>
            <div
              className={`w-12 h-12 md:w-16 md:h-16 ${getBackgroundColor(company.name)} rounded-full flex items-center justify-center p-2 border border-primary/10 dark:border-accent/10`}
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="w-full h-full object-contain"
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
