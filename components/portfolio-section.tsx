"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Eye, Calendar, Users, Award } from "lucide-react"

const portfolioItems = [
  {
    id: 1,
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "Modern e-commerce platform with advanced features and seamless user experience.",
    image: "/modern-ecommerce-interface.png",
    technologies: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    client: "TechStore Inc.",
    year: "2024",
    duration: "3 months",
    team: "4 developers",
    results: ["40% increase in conversions", "60% faster page load", "95% user satisfaction"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Healthcare Dashboard",
    category: "Web App",
    description: "Comprehensive healthcare management system with real-time analytics and patient tracking.",
    image: "/healthcare-dashboard-analytics.png",
    technologies: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    client: "MedCare Solutions",
    year: "2024",
    duration: "4 months",
    team: "5 developers",
    results: ["50% reduction in admin time", "99.9% uptime", "HIPAA compliant"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "Creative Agency Website",
    category: "Website",
    description: "Stunning portfolio website with interactive animations and modern design.",
    image: "/creative-agency-portfolio.png",
    technologies: ["Next.js", "Framer Motion", "Sanity CMS", "Vercel"],
    client: "Creative Studio",
    year: "2023",
    duration: "2 months",
    team: "3 developers",
    results: ["200% increase in inquiries", "Award-winning design", "Mobile-first approach"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "SaaS Platform",
    category: "SaaS",
    description: "Complete SaaS solution with subscription management and advanced analytics.",
    image: "/saas-platform-dashboard.png",
    technologies: ["Vue.js", "Laravel", "MySQL", "Stripe"],
    client: "StartupTech",
    year: "2023",
    duration: "6 months",
    team: "6 developers",
    results: ["1000+ active users", "99.5% uptime", "Scalable architecture"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Restaurant App",
    category: "Mobile App",
    description: "Mobile-first restaurant ordering system with real-time tracking and payments.",
    image: "/restaurant-mobile-app-interface.png",
    technologies: ["React Native", "Firebase", "Stripe", "Google Maps"],
    client: "FoodChain Co.",
    year: "2023",
    duration: "3 months",
    team: "4 developers",
    results: ["300% order increase", "4.8/5 app rating", "Real-time tracking"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Educational Platform",
    category: "EdTech",
    description: "Interactive learning platform with video streaming and progress tracking.",
    image: "/educational-platform-interface.png",
    technologies: ["Next.js", "Prisma", "AWS", "WebRTC"],
    client: "EduTech Solutions",
    year: "2024",
    duration: "5 months",
    team: "5 developers",
    results: ["10,000+ students", "Interactive learning", "Video streaming"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const categories = ["All", "E-commerce", "Web App", "Website", "SaaS", "Mobile App", "EdTech"]

export function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof portfolioItems)[0] | null>(null)
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

  const filteredItems =
    selectedCategory === "All" ? portfolioItems : portfolioItems.filter((item) => item.category === selectedCategory)

  return (
    <section ref={sectionRef} id="portfolio" className="py-24 bg-muted/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="heading-premium text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Our <span className="text-primary">Portfolio</span>
          </h2>
          <p className="text-premium text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Explore our latest projects and see how we've helped businesses transform their digital presence.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-6 py-2 transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "glass border-primary/20 hover:bg-primary/10 bg-transparent"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <Dialog key={item.id}>
              <DialogTrigger asChild>
                <div
                  className={`group cursor-pointer transition-all duration-500 hover:scale-105 ${
                    isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                  onClick={() => setSelectedProject(item)}
                >
                  <div className="glass rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500">
                    {/* Project Image */}
                    <div className="relative overflow-hidden">
                      <img
                        src={item.image || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white border-white/20"
                          >
                            <Eye className="w-4 h-4 mr-2" />
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">
                          {item.category}
                        </Badge>
                        <span className="text-premium text-sm text-muted-foreground">{item.year}</span>
                      </div>
                      <h3 className="heading-premium text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-premium text-muted-foreground text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.slice(0, 3).map((tech) => (
                          <span key={tech} className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md">
                            {tech}
                          </span>
                        ))}
                        {item.technologies.length > 3 && (
                          <span className="text-xs px-2 py-1 bg-muted/50 text-muted-foreground rounded-md">
                            +{item.technologies.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </DialogTrigger>

              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="heading-premium text-2xl text-foreground">{item.title}</DialogTitle>
                </DialogHeader>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-64 object-cover rounded-xl mb-4"
                    />
                    <p className="text-premium text-muted-foreground leading-relaxed mb-4">{item.description}</p>
                    <div className="flex gap-3 mb-4">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button size="sm" variant="outline">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="heading-premium text-lg text-foreground mb-2">Project Details</h4>
                      <div className="space-y-2 text-premium text-sm">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span>Client: {item.client}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-muted-foreground" />
                          <span>Duration: {item.duration}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4 text-muted-foreground" />
                          <span>Team: {item.team}</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h4 className="heading-premium text-lg text-foreground mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech) => (
                          <Badge key={tech} variant="outline">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="heading-premium text-lg text-foreground mb-2">Results</h4>
                      <ul className="space-y-1 text-premium text-sm">
                        {item.results.map((result, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
          >
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
