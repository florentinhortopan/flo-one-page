import React, { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Send, Star, AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TestimonialProps {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const Testimonial = ({
  name,
  role,
  avatar,
  content,
  rating = 5,
}: TestimonialProps) => {
  return (
    <div className="punk-card bg-card p-6 relative group">
      {/* Punk corner decoration */}
      <div className="absolute top-2 left-2 w-8 h-8 border-t-4 border-l-4 border-primary"></div>
      <div className="absolute bottom-2 right-2 w-8 h-8 border-b-4 border-r-4 border-secondary"></div>
      
      <div className="flex items-start gap-4 relative z-10">
        <div className="relative">
          <div className="absolute -inset-1 bg-primary animate-punk-spin opacity-50 blur"></div>
          <div className="relative h-12 w-12 border-4 border-foreground overflow-hidden bg-accent"
               style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}>
            <img src={avatar} alt={name} className="w-full h-full object-cover" />
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold uppercase text-card-foreground text-lg">{name}</h4>
          <p className="text-sm font-semibold text-foreground/70 uppercase">{role}</p>
          <div className="flex mt-2 gap-1">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-accent text-accent animate-punk-bounce" style={{ animationDelay: `${i * 0.1}s` }} />
              ))}
          </div>
        </div>
      </div>
      <p className="text-sm font-semibold text-foreground mt-4 relative z-10 border-l-4 border-accent pl-4">"{content}"</p>
    </div>
  );
};

const ContactSection = () => {
  const testimonials: TestimonialProps[] = [
    {
      name: "Alex Chen",
      role: "Product Manager at TechCorp",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      content:
        "Florentin's mentorship transformed my approach to UX. His insights on design systems were invaluable for our product redesign.",
      rating: 5,
    },
    {
      name: "Sarah Johnson",
      role: "UX Designer at StartupX",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      content:
        "Working with Flo helped me advance my career in ways I couldn't imagine. His practical advice on design operations was game-changing.",
      rating: 5,
    },
  ];

  return (
    <section id="contact" className="py-20 px-4 bg-background punk-dots relative overflow-hidden">
      {/* Punk background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 border-4 border-primary rotate-45 opacity-10 animate-punk-spin"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary opacity-10 animate-punk-bounce"></div>
      
      <div className="container mx-auto max-w-[99%] px-0 sm:px-8 sm:max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mentorship Section */}
          <div>
            <div className="inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-foreground border-8 border-foreground bg-primary text-primary-foreground px-6 py-4 transform -rotate-1 hover:rotate-0 transition-transform duration-300"
                  style={{ boxShadow: '8px 8px 0px hsl(var(--foreground))' }}>
                Mentorship
              </h2>
            </div>
            <div className="mb-8">
              <p className="text-lg mb-6 font-bold text-foreground bg-accent/20 p-4 border-4 border-foreground">
                PASSIONATE ABOUT HELPING OTHERS GROW IN THEIR UX DESIGN CAREERS. PERSONALIZED MENTORSHIP THROUGH ADPLIST.
              </p>
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <div className="px-4 py-2 border-4 border-foreground bg-primary text-primary-foreground font-display font-bold uppercase text-sm"
                     style={{ clipPath: 'polygon(10% 0%, 100% 0%, 90% 100%, 0% 100%)' }}>
                  Design Systems
                </div>
                <div className="px-4 py-2 border-4 border-foreground bg-secondary text-secondary-foreground font-display font-bold uppercase text-sm"
                     style={{ clipPath: 'polygon(0% 0%, 90% 0%, 100% 100%, 10% 100%)' }}>
                  UX Strategy
                </div>
                <div className="px-4 py-2 border-4 border-foreground bg-accent text-accent-foreground font-display font-bold uppercase text-sm"
                     style={{ clipPath: 'polygon(5% 0%, 95% 0%, 100% 50%, 95% 100%, 5% 100%, 0% 50%)' }}>
                  Career Growth
                </div>
              </div>
              <a
                href="https://adplist.org/mentors/florentin-hortopan"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-block relative px-8 py-4 bg-secondary text-secondary-foreground font-display text-lg uppercase border-4 border-foreground overflow-hidden transition-all duration-300 hover:scale-105"
                style={{ 
                  boxShadow: '6px 6px 0px hsl(var(--foreground))',
                  clipPath: 'polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)'
                }}
              >
                <span className="relative z-10 flex items-center">
                  Book Mentorship Session
                  <ExternalLink className="ml-2 h-5 w-5 animate-punk-bounce" />
                </span>
                <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
            </div>

            <h3 className="text-2xl font-display font-black uppercase text-foreground mb-6 border-l-8 border-accent pl-4 bg-accent/10 py-2">
              What Mentees Say
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Calendly Widget */}
          <div>
            <div className="inline-block mb-6">
              <h2 className="text-4xl md:text-5xl font-display font-black uppercase text-foreground border-8 border-foreground bg-secondary text-secondary-foreground px-6 py-4 transform rotate-1 hover:rotate-0 transition-transform duration-300"
                  style={{ boxShadow: '8px 8px 0px hsl(var(--foreground))' }}>
                Schedule a Meeting
              </h2>
            </div>
            <div className="punk-card bg-card p-6 mb-6 relative group">
              {/* Punk corner accents */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-primary transform translate-x-8 -translate-y-8 rotate-45 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500"></div>
              <div className="absolute bottom-0 left-0 w-12 h-12 bg-accent"></div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-display font-black uppercase text-card-foreground mb-2 border-b-4 border-primary pb-2">
                  Book a Time Slot
                </h3>
                <p className="font-bold text-foreground mb-4 uppercase text-sm">
                  Book a time to discuss how we can work together on your next project.
                </p>
                <div className="w-full h-[520px] overflow-hidden border-4 border-foreground mx-auto">
                  <iframe
                    src="https://calendly.com/florentinhortopan/flo-puxa-ai-30-mins"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a meeting with Florentin"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Email Contact Card - New Row */}
        <div className="mt-12 flex justify-center">
          <div className="max-w-md w-full">
            <div className="punk-card bg-card p-8 relative group">
              {/* Animated background accent */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent"></div>
              <div className="absolute bottom-0 right-0 w-full h-2 bg-gradient-to-r from-accent via-secondary to-primary"></div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-black uppercase text-card-foreground mb-3 text-center border-b-4 border-primary pb-3">
                  Send Flo an Email
                </h3>
                <p className="font-bold text-foreground mb-6 uppercase text-sm text-center">
                  Prefer to communicate via email? Send me a message directly.
                </p>
                
                <div className="flex flex-col items-center justify-center">
                  <div className="w-20 h-20 bg-accent border-4 border-foreground flex items-center justify-center mb-6 animate-punk-bounce"
                       style={{ clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)' }}>
                    <Mail className="h-10 w-10 text-accent-foreground" />
                  </div>
                  <p className="text-center mb-6 font-semibold text-foreground border-4 border-foreground p-4 bg-muted/50">
                    I'LL GET BACK TO YOU ASAP, USUALLY WITHIN 24-48 HOURS.
                  </p>
                  <a
                    href="mailto:florentin.hortopan@gmail.com"
                    className="group relative px-8 py-4 bg-primary text-primary-foreground font-display text-xl uppercase border-4 border-foreground overflow-hidden transition-all duration-300 hover:scale-105 w-full text-center"
                    style={{ 
                      boxShadow: '6px 6px 0px hsl(var(--foreground))',
                      clipPath: 'polygon(0 0, 95% 0, 100% 20%, 100% 100%, 5% 100%, 0 80%)'
                    }}
                  >
                    <span className="relative z-10 flex items-center justify-center">
                      <Mail className="h-5 w-5 mr-2" />
                      Contact via Email
                    </span>
                    <div className="absolute inset-0 bg-accent transform translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
