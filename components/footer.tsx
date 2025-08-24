"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react"
import { useEffect, useState } from "react"

export function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <>
      {/* Back to Top Button */}
      {showBackToTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground animate-glow hover:scale-110 transition-all duration-300"
        >
          <ArrowUp className="w-6 h-6" />
        </Button>
      )}

      <footer className="bg-foreground text-background relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <Link href="#home" className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">GN</span>
                </div>
                <span className="heading-premium text-xl text-background">Growth Nations</span>
              </Link>
              <p className="text-premium text-background/80 leading-relaxed mb-6 max-w-md">
                Empowering businesses with modern web solutions. We create exceptional digital experiences that drive
                growth and success.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, color: "hover:text-blue-400" },
                  { icon: Twitter, color: "hover:text-blue-300" },
                  { icon: Github, color: "hover:text-gray-300" },
                  { icon: Instagram, color: "hover:text-pink-400" },
                ].map(({ icon: Icon, color }, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className={`w-10 h-10 text-background/60 hover:bg-background/10 hover:scale-110 transition-all duration-300 ${color}`}
                  >
                    <Icon className="w-5 h-5" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="heading-premium text-lg text-background mb-6">Quick Links</h3>
              <ul className="space-y-3">
                {[
                  { name: "Home", href: "#home" },
                  { name: "About", href: "#about" },
                  { name: "Services", href: "#services" },
                  { name: "Portfolio", href: "#portfolio" },
                  { name: "Team", href: "#team" },
                  { name: "Contact", href: "#contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-premium text-background/80 hover:text-background transition-colors duration-200"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="heading-premium text-lg text-background mb-6">Contact</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-premium text-background/80 text-sm">hello@growthnations.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-secondary" />
                  <span className="text-premium text-background/80 text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-accent" />
                  <span className="text-premium text-background/80 text-sm">San Francisco, CA</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-background/20 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-premium text-background/60 text-sm">© 2024 Growth Nations Web. All rights reserved.</p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-premium text-background/60 hover:text-background text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-premium text-background/60 hover:text-background text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}
