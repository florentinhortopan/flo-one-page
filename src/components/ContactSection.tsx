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
import { ExternalLink, Send, Star, AlertCircle } from "lucide-react";
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
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Initialize EmailJS form handling
    const initEmailJS = () => {
      const form = document.getElementById("form") as HTMLFormElement;
      const btn = document.getElementById("button") as HTMLInputElement;

      if (form && btn) {
        form.addEventListener("submit", function (event) {
          event.preventDefault();

          btn.value = "Sending...";
          btn.disabled = true;

          const serviceID = "default_service";
          const templateID = "template_ygm5p7s";

          // @ts-ignore - EmailJS is loaded from CDN
          emailjs
            .sendForm(serviceID, templateID, this, {
              to_email: "florentinhortopan@gmail.com", // Replace with your actual email
            })
            .then(
              () => {
                btn.value = "Send Email";
                alert("Sent!");
              },
              (err) => {
                btn.value = "Send Email";
                alert(JSON.stringify(err));
              },
            );
        });
      }
    };

    // Small timeout to ensure the DOM is fully loaded
    const timer = setTimeout(() => {
      initEmailJS();
    }, 100);

    return () => clearTimeout(timer);
  }, []);

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
      <div className="container mx-auto max-w-6xl">
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

          {/* Contact Form */}
          <div>
            <Card className="bg-card border border-border dark:border-border/50">
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  Get in Touch 5
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Interested in working together? Fill out the form below to
                  start a conversation.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                      Thank you for reaching out!
                    </h3>
                    <p className="text-muted-foreground">
                      I'll get back to you as soon as possible.
                    </p>
                    <button
                      className="mt-4 px-4 py-2 border rounded-md border-primary/20 dark:border-accent/30 hover:bg-primary/5 dark:hover:bg-accent/10"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form id="form" className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        id="name"
                        className="w-full p-2 border rounded-md bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        type="email"
                        name="reply_to"
                        id="email"
                        className="w-full p-2 border rounded-md bg-background"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        rows={4}
                        className="w-full p-2 border rounded-md bg-background"
                        required
                      ></textarea>
                    </div>
                    <input
                      type="submit"
                      id="button"
                      value="Send Email"
                      className="w-full py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 cursor-pointer"
                    />
                    {error && (
                      <div className="flex items-center gap-2 text-destructive text-sm mt-2">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </div>
                    )}
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
