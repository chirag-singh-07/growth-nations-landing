"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Linkedin, Twitter, Github, Mail, MapPin, Coffee } from "lucide-react"

const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Founder & CEO",
    bio: "Visionary leader with 10+ years in web development and business strategy. Passionate about creating digital solutions that drive growth.",
    image: "/professional-ceo-portrait.png",
    skills: ["Leadership", "Strategy", "Business Development"],
    location: "San Francisco, CA",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "sarah@growthnations.com",
    },
    funFact: "Coffee enthusiast who has visited 50+ coffee shops worldwide",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Lead Developer",
    bio: "Full-stack developer specializing in React, Node.js, and cloud architecture. Loves building scalable applications.",
    image: "/professional-developer-portrait.png",
    skills: ["React", "Node.js", "AWS", "TypeScript"],
    location: "Seattle, WA",
    social: {
      linkedin: "#",
      github: "#",
      email: "michael@growthnations.com",
    },
    funFact: "Maintains 3 open-source projects with 10k+ stars combined",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "UI/UX Designer",
    bio: "Creative designer focused on user-centered design and creating beautiful, intuitive interfaces that users love.",
    image: "/professional-woman-designer.png",
    skills: ["UI Design", "UX Research", "Figma", "Prototyping"],
    location: "Austin, TX",
    social: {
      linkedin: "#",
      twitter: "#",
      email: "emily@growthnations.com",
    },
    funFact: "Has designed interfaces used by over 1 million users",
  },
  // {
  //   id: 4,
  //   name: "David Kim",
  //   role: "Backend Engineer",
  //   bio: "Backend specialist with expertise in database design, API development, and system architecture. Security-first mindset.",
  //   image: "/professional-engineer.png",
  //   skills: ["Python", "PostgreSQL", "Docker", "Security"],
  //   location: "New York, NY",
  //   social: {
  //     linkedin: "#",
  //     github: "#",
  //     email: "david@growthnations.com",
  //   },
  //   funFact: "Solved over 500 coding challenges and counting",
  // },
  // {
  //   id: 5,
  //   name: "Lisa Thompson",
  //   role: "Project Manager",
  //   bio: "Experienced project manager ensuring smooth delivery and client satisfaction. Expert in agile methodologies.",
  //   image: "/professional-woman-manager.png",
  //   skills: ["Agile", "Scrum", "Client Relations", "Planning"],
  //   location: "Chicago, IL",
  //   social: {
  //     linkedin: "#",
  //     email: "lisa@growthnations.com",
  //   },
  //   funFact: "Has successfully delivered 100+ projects on time and budget",
  // },
  // {
  //   id: 6,
  //   name: "Alex Martinez",
  //   role: "DevOps Engineer",
  //   bio: "DevOps expert focused on CI/CD, cloud infrastructure, and automation. Passionate about optimizing development workflows.",
  //   image: "/professional-devops-portrait.png",
  //   skills: ["AWS", "Docker", "Kubernetes", "CI/CD"],
  //   location: "Denver, CO",
  //   social: {
  //     linkedin: "#",
  //     github: "#",
  //     email: "alex@growthnations.com",
  //   },
  //   funFact: "Reduced deployment time by 90% across multiple projects",
  // },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredMember, setHoveredMember] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="team" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="heading-premium text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Meet Our <span className="text-primary">Team</span>
          </h2>
          <p className="text-premium text-xl text-muted-foreground max-w-3xl mx-auto">
            The talented individuals behind Growth Nations Web. We're passionate about creating exceptional digital
            experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredMember(member.id)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              <div
                className={`glass rounded-2xl p-6 hover:scale-105 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/10 ${
                  hoveredMember === member.id ? "rotate-1" : ""
                }`}
                style={{
                  transform: hoveredMember === member.id ? "perspective(1000px) rotateX(5deg) rotateY(5deg)" : "",
                }}
              >
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden">
                    <img
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div
                    className={`absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full transition-all duration-300 ${
                      hoveredMember === member.id ? "scale-125 animate-pulse" : "scale-100"
                    }`}
                  />
                </div>

                {/* Member Info */}
                <div className="text-center mb-4">
                  <h3 className="heading-premium text-xl text-foreground mb-1">{member.name}</h3>
                  <p className="text-premium text-primary font-medium mb-2">{member.role}</p>
                  <div className="flex items-center justify-center gap-1 text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    <span className="text-premium text-xs">{member.location}</span>
                  </div>
                  <p className="text-premium text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="text-xs bg-primary/10 text-primary hover:bg-primary/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Fun Fact */}
                <div className="mb-4 p-3 bg-accent/5 rounded-xl">
                  <div className="flex items-start gap-2">
                    <Coffee className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    <p className="text-premium text-xs text-muted-foreground leading-relaxed">{member.funFact}</p>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex justify-center gap-3">
                  {member.social.linkedin && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.twitter && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.github && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Github className="w-4 h-4" />
                    </Button>
                  )}
                  {member.social.email && (
                    <Button
                      size="sm"
                      variant="ghost"
                      className="w-8 h-8 p-0 hover:bg-primary/10 hover:text-primary transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div
          className={`text-center mt-16 glass rounded-3xl p-12 transition-all duration-1000 delay-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h3 className="heading-premium text-2xl md:text-3xl text-foreground mb-4">Want to Join Our Team?</h3>
          <p className="text-premium text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals who share our passion for creating exceptional digital
            experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="glass border-primary/20 hover:bg-primary/10 px-8 py-4 rounded-2xl font-semibold hover:scale-105 transition-all duration-300 bg-transparent"
            >
              Learn About Our Culture
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
