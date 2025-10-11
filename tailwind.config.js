/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["'Space Grotesk'", "'Courier New'", "monospace"],
        display: ["'Bebas Neue'", "'Impact'", "sans-serif"],
        mono: ["'Courier New'", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Punk-inspired colors
        punk: {
          pink: "hsl(var(--punk-pink))",
          cyan: "hsl(var(--punk-cyan))",
          yellow: "hsl(var(--punk-yellow))",
          green: "hsl(var(--punk-green))",
          purple: "hsl(var(--punk-purple))",
          orange: "hsl(var(--punk-orange))",
        },
        // Grunge-inspired colors (dark mode)
        grunge: {
          burgundy: "hsl(var(--grunge-burgundy))",
          purple: "hsl(var(--grunge-purple))",
          sage: "hsl(var(--grunge-sage))",
          rust: "hsl(var(--grunge-rust))",
          gold: "hsl(var(--grunge-gold))",
          mauve: "hsl(var(--grunge-mauve))",
          cream: "hsl(var(--grunge-cream))",
          charcoal: "hsl(var(--grunge-charcoal))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        none: "0", // Punk uses sharp edges
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "punk-bounce": "punk-bounce 2s ease-in-out infinite",
        "punk-shake": "punk-shake 0.5s ease-in-out",
        "punk-spin": "punk-spin 3s linear infinite",
        "punk-color-shift": "punk-color-shift 5s ease-in-out infinite",
        "glitch-skew": "glitch-skew 3s infinite linear alternate-reverse",
        "neon-flicker": "neon-flicker 3s infinite alternate",
        "neon-pulse": "neon-pulse 2s infinite alternate",
      },
      backgroundImage: {
        "punk-gradient": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--secondary)) 50%, hsl(var(--accent)) 100%)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
