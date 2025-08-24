"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Award, Zap } from "lucide-react"

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 pb-16">
      {/* Animated Background */}
      <div className="absolute inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-secondary/10" />

        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 6}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>

        {/* Interactive Gradient Orb */}
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl transition-all duration-1000 ease-out"
          style={{
            left: mousePosition.x - 192,
            top: mousePosition.y - 192,
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Premium Badge */}
        <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-8 animate-fade-in">
          <Star className="w-4 h-4 text-accent fill-accent" />
          <span className="text-premium text-sm font-medium text-foreground">Premium Web Development Agency</span>
          <Star className="w-4 h-4 text-accent fill-accent" />
        </div>

        {/* Main Heading */}
        <h1 className="heading-premium text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 animate-fade-in-up">
          <span className="block">Growth Nations</span>
          <span className="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Web Solutions
          </span>
        </h1>

        {/* Tagline */}
        <p className="text-premium text-xl md:text-2xl lg:text-3xl text-muted-foreground max-w-4xl mx-auto mb-8 animate-fade-in-up animation-delay-200">
          Empowering Businesses with <span className="text-primary font-semibold">Modern Web Solutions</span>
        </p>

        {/* Description */}
        <p className="text-premium text-lg text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-400">
          We craft premium digital experiences that drive growth, enhance user engagement, and transform your business
          vision into reality.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16 animate-fade-in-up animation-delay-600">
          <Button
            size="lg"
            className="group bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold text-lg animate-glow hover:scale-105 transition-all duration-300"
          >
            Start a Project
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="group glass border-primary/20 hover:bg-primary/10 px-8 py-4 rounded-2xl font-semibold text-lg hover:scale-105 transition-all duration-300 bg-transparent"
          >
            <Play className="mr-2 w-5 h-5" />
            See Our Work
          </Button>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto animate-fade-in-up animation-delay-800">
          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 mx-auto group-hover:bg-primary/20 transition-colors">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <div className="heading-premium text-3xl text-foreground mb-2">100+</div>
            <div className="text-premium text-muted-foreground">Happy Clients</div>
          </div>

          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 bg-secondary/10 rounded-xl mb-4 mx-auto group-hover:bg-secondary/20 transition-colors">
              <Award className="w-6 h-6 text-secondary" />
            </div>
            <div className="heading-premium text-3xl text-foreground mb-2">200+</div>
            <div className="text-premium text-muted-foreground">Projects Completed</div>
          </div>

          <div className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group">
            <div className="flex items-center justify-center w-12 h-12 bg-accent/10 rounded-xl mb-4 mx-auto group-hover:bg-accent/20 transition-colors">
              <Zap className="w-6 h-6 text-accent" />
            </div>
            <div className="heading-premium text-3xl text-foreground mb-2">5+</div>
            <div className="text-premium text-muted-foreground">Years Experience</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
          </div>
        </div> */}
      </div>
    </section>
  )
}
