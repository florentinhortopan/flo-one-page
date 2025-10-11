import { useState, useEffect } from "react";
import { Zap, Heart } from "lucide-react";
import { Switch } from "./ui/switch";

interface ThemeToggleProps {
  className?: string;
}

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Check for user preference on initial load
  useEffect(() => {
    // Check if user has a saved preference
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    // Set initial theme based on saved preference or system preference
    if (savedTheme === "dark" || (!savedTheme && prefersDark)) {
      setIsDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Punk Icon (Lightning) */}
      <div className="relative group">
        <Zap 
          size={20} 
          className={`transition-all duration-300 ${
            isDarkMode 
              ? 'text-muted-foreground opacity-50' 
              : 'text-primary fill-primary animate-pulse'
          }`}
        />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-display font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Punk
        </span>
      </div>
      
      <Switch
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-label="Toggle between Punk and Grunge themes"
        className="data-[state=checked]:bg-grunge-burgundy"
      />
      
      {/* Grunge Icon (Heart/Rose) */}
      <div className="relative group">
        <Heart 
          size={20}
          className={`transition-all duration-300 ${
            isDarkMode 
              ? 'text-grunge-burgundy fill-grunge-burgundy animate-pulse' 
              : 'text-muted-foreground opacity-50'
          }`}
        />
        <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-display font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap dark:font-serif">
          Grunge
        </span>
      </div>
    </div>
  );
}
