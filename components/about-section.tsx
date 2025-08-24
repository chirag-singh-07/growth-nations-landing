"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Award, Zap, Target, Heart, Lightbulb } from "lucide-react"

export function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState({ clients: 0, projects: 0, years: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          // Animate counters
          const animateCounter = (target: number, key: keyof typeof counters) => {
            let current = 0
            const increment = target / 50
            const timer = setInterval(() => {
              current += increment
              if (current >= target) {
                current = target
                clearInterval(timer)
              }
              setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }))
            }, 30)
          }

          animateCounter(100, "clients")
          animateCounter(200, "projects")
          animateCounter(5, "years")
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="about" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="heading-premium text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            About <span className="text-primary">Growth Nations</span>
          </h2>
          <p className="text-premium text-xl text-muted-foreground max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to transforming your digital
            presence.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Text Content */}
          <div
            className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <div>
              <h3 className="heading-premium text-2xl md:text-3xl text-foreground mb-4">
                Crafting Digital Excellence Since 2019
              </h3>
              <p className="text-premium text-lg text-muted-foreground leading-relaxed mb-6">
                At Growth Nations Web, we believe that exceptional web experiences are born from the perfect blend of
                creativity, technology, and strategic thinking. Our mission is to empower businesses with modern web
                solutions that not only look stunning but drive real results.
              </p>
              <p className="text-premium text-lg text-muted-foreground leading-relaxed">
                From startups to enterprise companies, we've helped organizations across industries establish their
                digital presence and achieve their growth objectives through innovative web development and design.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Custom web development tailored to your needs",
                "User-centered design that converts visitors",
                "Scalable solutions that grow with your business",
                "Ongoing support and maintenance",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0" />
                  <span className="text-premium text-foreground">{point}</span>
                </div>
              ))}
            </div>

            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
            >
              Learn More About Us
            </Button>
          </div>

          {/* Visual Content */}
          <div
            className={`relative transition-all duration-1000 delay-400 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="glass rounded-3xl p-8 relative">
              {/* Placeholder for image/illustration */}
              <div className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-2xl flex items-center justify-center mb-6">
                <div className="text-center">
                  <Lightbulb className="w-16 h-16 text-primary mx-auto mb-4" />
                  <p className="text-premium text-muted-foreground">Innovation & Creativity</p>
                </div>
              </div>

              {/* Values */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-primary/5 hover:bg-primary/10 transition-colors">
                  <Target className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-premium text-sm font-medium">Precision</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-secondary/5 hover:bg-secondary/10 transition-colors">
                  <Heart className="w-8 h-8 text-secondary mx-auto mb-2" />
                  <p className="text-premium text-sm font-medium">Passion</p>
                </div>
                <div className="text-center p-4 rounded-xl bg-accent/5 hover:bg-accent/10 transition-colors">
                  <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                  <p className="text-premium text-sm font-medium">Excellence</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 mx-auto group-hover:bg-primary/20 transition-colors">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <div className="heading-premium text-4xl md:text-5xl text-foreground mb-2">{counters.clients}+</div>
            <div className="text-premium text-muted-foreground text-lg">Happy Clients</div>
            <p className="text-premium text-sm text-muted-foreground mt-2">Across various industries</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-2xl mb-6 mx-auto group-hover:bg-secondary/20 transition-colors">
              <Award className="w-8 h-8 text-secondary" />
            </div>
            <div className="heading-premium text-4xl md:text-5xl text-foreground mb-2">{counters.projects}+</div>
            <div className="text-premium text-muted-foreground text-lg">Projects Completed</div>
            <p className="text-premium text-sm text-muted-foreground mt-2">Successfully delivered</p>
          </div>

          <div className="glass rounded-2xl p-8 text-center hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-2xl mb-6 mx-auto group-hover:bg-accent/20 transition-colors">
              <Zap className="w-8 h-8 text-accent" />
            </div>
            <div className="heading-premium text-4xl md:text-5xl text-foreground mb-2">{counters.years}+</div>
            <div className="text-premium text-muted-foreground text-lg">Years Experience</div>
            <p className="text-premium text-sm text-muted-foreground mt-2">In web development</p>
          </div>
        </div>
      </div>
    </section>
  )
}
