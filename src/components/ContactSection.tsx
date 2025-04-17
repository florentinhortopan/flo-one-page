import React, { useState, useRef } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Send, Star, AlertCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

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
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    // Make sure all required fields are filled
    if (
      !formData.name ||
      !formData.email ||
      !formData.subject ||
      !formData.message
    ) {
      setError("Please fill in all required fields");
      setIsSubmitting(false);
      return;
    }

    // EmailJS service integration
    if (formRef.current) {
      emailjs
        .sendForm(
          "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
          "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
          formRef.current,
          "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
        )
        .then((result) => {
          console.log("Email sent successfully:", result.text);
          setIsSubmitting(false);
          setIsSubmitted(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        })
        .catch((error) => {
          console.error("Failed to send email:", error.text);
          setError("Failed to send your message. Please try again later.");
          setIsSubmitting(false);
        });
    }
  };

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
                  Get in Touch
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
                    <Button
                      variant="outline"
                      className="mt-4 border-primary/20 dark:border-accent/30 hover:bg-primary/5 dark:hover:bg-accent/10"
                      onClick={() => setIsSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-4"
                  >
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="bg-background border-input focus:ring-primary dark:focus:ring-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="bg-background border-input focus:ring-primary dark:focus:ring-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="text-sm font-medium text-foreground"
                      >
                        Subject
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="What's this about?"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="bg-background border-input focus:ring-primary dark:focus:ring-accent"
                      />
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium text-foreground"
                      >
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project or inquiry..."
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="bg-background border-input focus:ring-primary dark:focus:ring-accent"
                      />
                    </div>

                    {error && (
                      <div className="p-3 rounded-md bg-destructive/10 text-destructive flex items-center gap-2 text-sm">
                        <AlertCircle className="h-4 w-4" />
                        {error}
                      </div>
                    )}

                    <Button
                      type="submit"
                      className="w-full bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-accent dark:hover:bg-accent/90 dark:text-accent-foreground"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message
                          <Send className="h-4 w-4" />
                        </span>
                      )}
                    </Button>
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
