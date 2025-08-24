"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Code, Palette, ShoppingCart, Search, Megaphone, Settings, ArrowRight, Sparkles } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom websites and web applications built with modern technologies and best practices.",
    features: ["React & Next.js", "Full-stack Development", "API Integration", "Performance Optimization"],
    color: "primary",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Beautiful, intuitive designs that provide exceptional user experiences and drive conversions.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "secondary",
  },
  {
    icon: ShoppingCart,
    title: "E-commerce",
    description: "Complete e-commerce solutions that help you sell online and grow your business.",
    features: ["Online Stores", "Payment Integration", "Inventory Management", "Analytics"],
    color: "accent",
  },
  {
    icon: Search,
    title: "SEO Optimization",
    description: "Improve your search engine rankings and drive more organic traffic to your website.",
    features: ["Technical SEO", "Content Strategy", "Local SEO", "Performance Tracking"],
    color: "primary",
  },
  {
    icon: Megaphone,
    title: "Branding",
    description: "Create a strong brand identity that resonates with your audience and stands out.",
    features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Strategy"],
    color: "secondary",
  },
  {
    icon: Settings,
    title: "Maintenance",
    description: "Keep your website secure, updated, and performing at its best with ongoing support.",
    features: ["Security Updates", "Performance Monitoring", "Content Updates", "Technical Support"],
    color: "accent",
  },
]

export function ServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return {
          icon: "text-primary",
          bg: "bg-primary/10",
          hoverBg: "group-hover:bg-primary/20",
          border: "hover:border-primary/30",
          glow: "group-hover:shadow-primary/20",
        }
      case "secondary":
        return {
          icon: "text-secondary",
          bg: "bg-secondary/10",
          hoverBg: "group-hover:bg-secondary/20",
          border: "hover:border-secondary/30",
          glow: "group-hover:shadow-secondary/20",
        }
      case "accent":
        return {
          icon: "text-accent",
          bg: "bg-accent/10",
          hoverBg: "group-hover:bg-accent/20",
          border: "hover:border-accent/30",
          glow: "group-hover:shadow-accent/20",
        }
      default:
        return {
          icon: "text-primary",
          bg: "bg-primary/10",
          hoverBg: "group-hover:bg-primary/20",
          border: "hover:border-primary/30",
          glow: "group-hover:shadow-primary/20",
        }
    }
  }

  return (
    <section ref={sectionRef} id="services" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-premium text-sm font-medium text-foreground">Our Services</span>
          </div>
          <h2 className="heading-premium text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            What We <span className="text-primary">Offer</span>
          </h2>
          <p className="text-premium text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web solutions designed to elevate your business and drive growth in the digital landscape.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => {
            const colors = getColorClasses(service.color)
            const Icon = service.icon

            return (
              <div
                key={index}
                className={`glass rounded-2xl p-8 hover:scale-105 transition-all duration-500 group border ${colors.border} hover:shadow-2xl ${colors.glow} ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`flex items-center justify-center w-16 h-16 ${colors.bg} ${colors.hoverBg} rounded-2xl mb-6 transition-colors duration-300`}
                >
                  <Icon className={`w-8 h-8 ${colors.icon}`} />
                </div>

                {/* Content */}
                <h3 className="heading-premium text-xl md:text-2xl text-foreground mb-4">{service.title}</h3>
                <p className="text-premium text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center gap-2 text-premium text-sm text-muted-foreground"
                    >
                      <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button variant="ghost" className="group/btn w-full justify-between hover:bg-transparent p-0 h-auto">
                  <span className="text-premium font-medium text-foreground">Learn More</span>
                  <ArrowRight className="w-4 h-4 text-muted-foreground group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center glass rounded-3xl p-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="heading-premium text-2xl md:text-3xl text-foreground mb-4">Ready to Get Started?</h3>
          <p className="text-premium text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss your project and create something amazing together. Our team is ready to bring your vision to
            life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 animate-glow"
            >
              Start Your Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-primary/20 hover:bg-primary/10 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 bg-transparent"
            >
              View Our Portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
