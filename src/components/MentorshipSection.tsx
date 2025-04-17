import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  role?: string;
  avatarUrl?: string;
}

const Testimonial = ({
  quote,
  author,
  role = "",
  avatarUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=default",
}: TestimonialProps) => {
  return (
    <Card className="h-full bg-card shadow-md hover:shadow-lg transition-shadow">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex-1">
          <p className="text-muted-foreground italic mb-4">"{quote}"</p>
        </div>
        <div className="flex items-center mt-4">
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
            <img
              src={avatarUrl}
              alt={`${author}'s avatar`}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className="font-medium">{author}</p>
            {role && <p className="text-sm text-muted-foreground">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

interface StatProps {
  value: string;
  label: string;
}

const Stat = ({ value, label }: StatProps) => {
  return (
    <div className="text-center p-4">
      <p className="text-3xl font-bold text-primary mb-1">{value}</p>
      <p className="text-sm text-muted-foreground">{label}</p>
    </div>
  );
};

const MentorshipSection = () => {
  const testimonials = [
    {
      quote:
        "Florentin's guidance transformed my approach to UX design. His insights on design systems were invaluable for my career growth.",
      author: "Sarah Johnson",
      role: "Senior UX Designer",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      quote:
        "The mentorship sessions with Florentin helped me navigate complex design challenges with confidence. Highly recommended!",
      author: "Michael Chen",
      role: "Product Designer",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      quote:
        "Florentin's practical advice and industry knowledge have been instrumental in helping me grow as a designer.",
      author: "Priya Patel",
      role: "UX/UI Designer",
      avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
    },
  ];

  const stats = [
    { value: "100+", label: "Mentees Helped" },
    { value: "4.9", label: "Average Rating" },
    { value: "500+", label: "Mentoring Hours" },
  ];

  return (
    <section id="mentorship" className="py-16 px-4 md:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Mentorship</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about giving back to the design community through
            personalized mentorship on ADPList.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <Testimonial
              key={index}
              quote={testimonial.quote}
              author={testimonial.author}
              role={testimonial.role}
              avatarUrl={testimonial.avatarUrl}
            />
          ))}
        </div>

        <div className="bg-muted rounded-lg p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {stats.map((stat, index) => (
              <Stat key={index} value={stat.value} label={stat.label} />
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Looking for guidance on UX design, design systems, or career growth?
            Book a mentorship session today.
          </p>
          <Button
            size="lg"
            className="group"
            onClick={() =>
              window.open(
                "https://adplist.org/mentors/florentin-hortopan",
                "_blank",
              )
            }
          >
            Book a Session on ADPList
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MentorshipSection;
