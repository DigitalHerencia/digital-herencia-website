"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlitchText } from "@/components/ui/glitch-text"
import { BarChart3, Calendar, ChevronRight, Code, FileText, MessageSquare, Truck } from "lucide-react"

export default function ServicesPage() {
  const services = [
    {
      title: "Data Analytics Dashboards",
      description: "Interactive data visualization platforms that transform complex data into actionable insights.",
      icon: <BarChart3 className="h-12 w-12" />,
      link: "/services/data-analytics-dashboards",
    },
    {
      title: "Event Management Systems",
      description: "Streamlined planning tools for photographers, event coordinators, and wedding professionals.",
      icon: <Calendar className="h-12 w-12" />,
      link: "/services/event-management-systems",
    },
    {
      title: "Legal & Administrative Solutions",
      description: "Secure platforms for legal professionals to manage cases, documents, and court schedules.",
      icon: <FileText className="h-12 w-12" />,
      link: "/services/legal-administrative-solutions",
    },
    {
      title: "Secure Communication Platforms",
      description: "Encrypted messaging and communication systems for sensitive information exchange.",
      icon: <MessageSquare className="h-12 w-12" />,
      link: "/services/secure-communication-platforms",
    },
    {
      title: "Fleet & Logistics Management",
      description: "Real-time tracking and management solutions for transportation and logistics companies.",
      icon: <Truck className="h-12 w-12" />,
      link: "/services/fleet-logistics-management",
    },
    {
      title: "Design Systems & Developer Tools",
      description: "Custom utilities and frameworks that streamline the development process.",
      icon: <Code className="h-12 w-12" />,
      link: "/services/design-systems-developer-tools",
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-black circuit-bg noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
                SPECIALIZED EXPERTISE
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Our Services</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                Tailored digital solutions for modern businesses across various industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="bg-black border border-white/10 cyberpunk-border h-full hover:border-white/30 transition-all duration-300">
                  <CardContent className="p-8 flex flex-col items-center text-center space-y-4">
                    <div className="p-4 rounded-full bg-white/5 text-white mb-2 group-hover:bg-white/10 transition-colors duration-300">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-white/70">{service.description}</p>
                    <Button asChild className="mt-4 group">
                      <Link href={service.link}>
                        Learn More
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              HOW WE WORK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Our Process</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              A structured approach to delivering exceptional results.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Discovery",
                description: "Understanding your business, goals, and requirements through in-depth consultation.",
              },
              {
                step: "02",
                title: "Planning",
                description: "Creating a detailed roadmap and technical architecture for your project.",
              },
              {
                step: "03",
                title: "Development",
                description: "Building your application with clean, efficient code and regular updates.",
              },
              {
                step: "04",
                title: "Launch & Support",
                description: "Deploying your project and providing ongoing maintenance and support.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold text-white/20 mb-4">{process.step}</div>
                <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                <p className="text-white/70">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01),rgba(255,255,255,0.1),rgba(255,255,255,0.01))] animate-[gradient_15s_ease_infinite]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black border border-white/20 cyberpunk-border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to get started?</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Let's discuss your project and find the perfect solution for your business.
                  </p>
                  <Button asChild size="lg" className="mt-4 group">
                    <Link href="/contact">
                      Contact Us
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
