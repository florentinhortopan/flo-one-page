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
    <div className="flex flex-col gap-4 bg-card p-6 rounded-lg shadow-sm border border-border dark:border-border/50">
      <div className="flex items-start gap-4">
        <Avatar className="h-12 w-12">
          <AvatarImage src={avatar} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="font-semibold text-card-foreground">{name}</h4>
          <p className="text-sm text-muted-foreground">{role}</p>
          <div className="flex mt-1">
            {Array(rating)
              .fill(0)
              .map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
          </div>
        </div>
      </div>
      <p className="text-sm italic text-muted-foreground">"{content}"</p>
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
    <section id="contact" className="py-20 px-4 bg-background">
      <div className="container mx-auto max-w-[99%] px-0 sm:px-8 sm:max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Mentorship Section */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Mentorship
            </h2>
            <div className="mb-8">
              <p className="text-lg mb-4 text-muted-foreground">
                Passionate about helping others grow in their UX design careers.
                I offer personalized mentorship through ADPList to share my
                experience and insights.
              </p>
              <div className="flex items-center gap-2 mb-6">
                <Badge
                  variant="outline"
                  className="px-3 py-1 border-primary/20 dark:border-accent/30 text-foreground"
                >
                  Design Systems
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-1 border-primary/20 dark:border-accent/30 text-foreground"
                >
                  UX Strategy
                </Badge>
                <Badge
                  variant="outline"
                  className="px-3 py-1 border-primary/20 dark:border-accent/30 text-foreground"
                >
                  Career Growth
                </Badge>
              </div>
              <Button
                variant="outline"
                className="flex items-center gap-2 border-primary/20 dark:border-accent/30 hover:bg-primary/5 dark:hover:bg-accent/10"
                asChild
              >
                <a
                  href="https://adplist.org/mentors/florentin-hortopan"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a mentorship session
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>

            <h3 className="text-xl font-semibold mb-4 text-foreground">
              What mentees say
            </h3>
            <div className="space-y-4">
              {testimonials.map((testimonial, index) => (
                <Testimonial key={index} {...testimonial} />
              ))}
            </div>
          </div>

          {/* Calendly Widget */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-foreground">
              Schedule a Meeting
            </h2>
            <Card className="bg-card border border-border dark:border-border/50 mb-6">
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  Book a Time Slot
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Book a time to discuss how we can work together on your next
                  project.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-[520px] overflow-hidden rounded-md mx-auto">
                  <iframe
                    src="https://calendly.com/florentinhortopan/flo-ux-ai-15-minutes?back=1&month=2025-04"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    title="Schedule a meeting with Florentin"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Email Contact Card - New Row */}
        <div className="mt-12 flex justify-center">
          <div className="max-w-md w-full">
            <Card className="bg-card border border-border dark:border-border/50">
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  Send Flo an Email
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Prefer to communicate via email? Send me a message directly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center p-4">
                  <Mail className="h-12 w-12 text-primary mb-4" />
                  <p className="text-center mb-4 text-muted-foreground">
                    I'll get back to you as soon as possible, usually within
                    24-48 hours.
                  </p>
                  <Button
                    variant="default"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href="mailto:florentin.hortopan@gmail.com">
                      <Mail className="h-4 w-4" />
                      Contact via Email
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
