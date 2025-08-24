"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown, HelpCircle } from "lucide-react"

const faqs = [
  {
    question: "What services does Growth Nations Web offer?",
    answer:
      "We offer comprehensive web development services including custom website development, UI/UX design, e-commerce solutions, SEO optimization, branding, and ongoing maintenance. Our team specializes in modern technologies like React, Next.js, and cloud platforms.",
  },
  {
    question: "How long does it typically take to complete a project?",
    answer:
      "Project timelines vary depending on complexity and scope. A simple website typically takes 2-4 weeks, while complex web applications can take 2-6 months. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
  },
  {
    question: "Do you provide ongoing support and maintenance?",
    answer:
      "Yes! We offer comprehensive maintenance packages that include security updates, performance monitoring, content updates, and technical support. We believe in long-term partnerships with our clients to ensure their websites continue to perform optimally.",
  },
  {
    question: "What is your development process like?",
    answer:
      "Our process includes discovery and planning, design and prototyping, development and testing, and launch and optimization. We use agile methodologies and maintain constant communication with clients throughout each phase to ensure the final product exceeds expectations.",
  },
  {
    question: "Can you help with SEO and digital marketing?",
    answer:
      "We provide comprehensive SEO optimization including technical SEO, content strategy, local SEO, and performance tracking. We also offer digital marketing consultation to help you maximize your online presence and reach your target audience effectively.",
  },
  {
    question: "Do you work with businesses of all sizes?",
    answer:
      "Yes, we work with everyone from startups to enterprise companies. Our scalable solutions and flexible approach allow us to adapt to different business needs and budgets while maintaining the same high quality standards across all projects.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We specialize in modern web technologies including React, Next.js, TypeScript, Node.js, Python, and various cloud platforms like AWS and Vercel. We stay current with the latest technologies to ensure your project uses the best tools available.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain transparent communication through regular updates, scheduled check-ins, and dedicated project management tools. You'll have direct access to your project manager and can track progress in real-time throughout the development process.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(false)
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

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-40 right-20 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center gap-2 glass rounded-full px-6 py-3 mb-6">
            <HelpCircle className="w-4 h-4 text-primary" />
            <span className="text-premium text-sm font-medium text-foreground">FAQ</span>
          </div>
          <h2 className="heading-premium text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-premium text-xl text-muted-foreground max-w-3xl mx-auto">
            Find answers to common questions about our services, process, and how we can help your business grow.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`glass rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-lg ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-primary/5 transition-colors duration-200"
              >
                <h3 className="heading-premium text-lg text-foreground pr-4">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="p-6 pt-0 border-t border-border/50">
                  <p className="text-premium text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
