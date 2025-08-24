"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Jennifer Walsh",
    role: "CEO, TechStart Inc.",
    company: "TechStart Inc.",
    image: "/professional-ceo-portrait.png",
    rating: 5,
    text: "Growth Nations Web transformed our online presence completely. Their attention to detail and technical expertise is unmatched. Our conversion rate increased by 150% within the first month!",
  },
  {
    id: 2,
    name: "Marcus Johnson",
    role: "Founder, EcoSolutions",
    company: "EcoSolutions",
    image: "/professional-man-founder.png",
    rating: 5,
    text: "Working with Growth Nations was a game-changer for our business. They delivered a stunning website that perfectly captures our brand vision. The team's professionalism and creativity exceeded all expectations.",
  },
  {
    id: 3,
    name: "Sarah Chen",
    role: "Marketing Director, RetailPro",
    company: "RetailPro",
    image: "/professional-woman-marketing.png",
    rating: 5,
    text: "The e-commerce platform they built for us is incredible. User-friendly, fast, and beautiful. Our online sales have tripled since launch. I couldn't be happier with the results!",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "CTO, FinanceFlow",
    company: "FinanceFlow",
    image: "/professional-man-cto.png",
    rating: 5,
    text: "Growth Nations Web delivered a complex financial dashboard that our users love. The technical implementation is flawless, and the design is both beautiful and functional. Highly recommended!",
  },
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-24 bg-muted/20 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="heading-premium text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            What Our <span className="text-primary">Clients Say</span>
          </h2>
          <p className="text-premium text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about working with us.
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className={`relative transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-primary/20" />

            <div className="relative z-10">
              {/* Stars */}
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-accent fill-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-premium text-lg md:text-xl text-center text-foreground leading-relaxed mb-8 max-w-4xl mx-auto">
                "{testimonials[currentIndex].text}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-center justify-center gap-4">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="text-center">
                  <div className="heading-premium text-lg text-foreground">
                    {testimonials[currentIndex].name}
                  </div>
                  <div className="text-premium text-primary font-medium">
                    {testimonials[currentIndex].role}
                  </div>
                  <div className="text-premium text-sm text-muted-foreground">
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between absolute top-1/2 left-4 right-4 transform -translate-y-1/2">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </Button>
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary scale-125"
                    : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
