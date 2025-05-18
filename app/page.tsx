"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  BarChart3,
  Calendar,
  ChevronRight,
  Code,
  Cpu,
  Database,
  FileText,
  Globe,
  Layers,
  Lock,
  MessageSquare,
  Rocket,
  Shield,
  Truck,
  Zap,
} from "lucide-react"
import { GlitchText } from "@/components/ui/glitch-text"

export default function Home() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.5, 0])

  const benefits = [
    {
      title: "Lightning Fast",
      description: "Websites that load in milliseconds, not seconds. Speed is not just a feature, it's a requirement.",
      icon: <Zap className="h-8 w-8" />,
    },
    {
      title: "Bulletproof Security",
      description: "Enterprise-grade security for businesses of all sizes. Your data stays yours.",
      icon: <Shield className="h-8 w-8" />,
    },
    {
      title: "Future-Proof Tech",
      description: "Built with the latest technologies that scale with your business needs.",
      icon: <Cpu className="h-8 w-8" />,
    },
    {
      title: "Global Reach",
      description: "Edge-optimized applications that perform flawlessly worldwide.",
      icon: <Globe className="h-8 w-8" />,
    },
  ]

  const services = [
    {
      title: "Data Analytics Dashboards",
      description: "Interactive data visualization platforms that transform complex data into actionable insights.",
      icon: <BarChart3 className="h-12 w-12" />,
      link: "/portfolio",
    },
    {
      title: "Event Management Systems",
      description: "Streamlined planning tools for photographers, event coordinators, and wedding professionals.",
      icon: <Calendar className="h-12 w-12" />,
      link: "/portfolio",
    },
    {
      title: "Legal & Administrative Solutions",
      description: "Secure platforms for legal professionals to manage cases, documents, and court schedules.",
      icon: <FileText className="h-12 w-12" />,
      link: "/portfolio",
    },
    {
      title: "Secure Communication Platforms",
      description: "Encrypted messaging and communication systems for sensitive information exchange.",
      icon: <MessageSquare className="h-12 w-12" />,
      link: "/portfolio",
    },
    {
      title: "Fleet & Logistics Management",
      description: "Real-time tracking and management solutions for transportation and logistics companies.",
      icon: <Truck className="h-12 w-12" />,
      link: "/portfolio",
    },
    {
      title: "Design Systems & Developer Tools",
      description: "Custom utilities and frameworks that streamline the development process.",
      icon: <Code className="h-12 w-12" />,
      link: "/portfolio",
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section
        ref={ref}
        className="relative h-screen flex items-center justify-center overflow-hidden bg-black circuit-bg noise-bg"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black z-10"></div>
        <div className="container relative z-20 px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter">
                <GlitchText>Digital Herencia</GlitchText>
              </h1>
              <p className="max-w-[700px] text-white/70 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                Building modern progressive web applications for forward thinking businesses in New Mexico and beyond.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="group">
                <Link href="/contact">
                  Get Started
                  <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/portfolio">View Portfolio</Link>
              </Button>
            </div>
            <div className="absolute bottom-10 left-0 right-0 flex justify-center animate-bounce">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-white/50"
              >
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              WHY CHOOSE DIGITAL HERENCIA
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Disrupt. Build. Scale.</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              We build websites that break through the noise and deliver real business results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-white/10 cyberpunk-border h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-white/5">{benefit.icon}</div>
                    <h3 className="text-xl font-bold">{benefit.title}</h3>
                    <p className="text-white/70">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              SPECIALIZED SERVICES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>What We Do</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Tailored digital solutions for modern businesses across various industries.
            </p>
          </div>

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
                    <Button asChild variant="link" className="mt-4 group">
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

      {/* Featured Projects Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              FEATURED PROJECTS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Recent Work</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Check out some of my latest projects built with cutting-edge technology.
            </p>
          </div>

          <div className="flex flex-col gap-12">
            {/* Project 1 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-white/10 cyberpunk-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/09b931e1-ec51-4130-add4-39337908a058-jhhB1F1Z7L7UVbNPlTHtrYlVo7ORBP.png"
                  alt="NM Cannabis Analytics"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">FleetFusion</h3>
                    <p className="text-white/70 mb-4">
                      A fleet management solution for trucking companies with real-time analytics and dispatch tools.
                    </p>
                    <Button asChild variant="outline" size="sm" className="group">
                      <Link href="/portfolio">
                        View Project
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Project 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg border border-white/10 cyberpunk-border">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55156802-9e12-4e46-bec9-459b39f0c690-6FTXstGTLK39HYzaAU1kjUptokaHl7.png"
                  alt="Justice-Tech Admin"
                  width={600}
                  height={400}
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">Free The Homie</h3>
                    <p className="text-white/70 mb-4">
                      A fundraising platform built to support community members in need with e-commerce functionality.
                    </p>
                    <Button asChild variant="outline" size="sm" className="group">
                      <Link href="/portfolio">
                        View Project
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-12">
            <Button asChild size="lg" className="group">
              <Link href="/portfolio">
                View All Projects
                <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              CUTTING-EDGE TECHNOLOGY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Modern Tech Stack</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Built with the latest technologies for performance, reliability, and security.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {[
              { name: "Next.js 15", icon: <Code className="h-8 w-8" /> },
              { name: "React 19", icon: <Layers className="h-8 w-8" /> },
              { name: "TypeScript", icon: <Code className="h-8 w-8" /> },
              { name: "Node.js", icon: <Cpu className="h-8 w-8" /> },
              { name: "MongoDB", icon: <Database className="h-8 w-8" /> },
              { name: "Express", icon: <Rocket className="h-8 w-8" /> },
              { name: "Redux", icon: <Layers className="h-8 w-8" /> },
              { name: "JWT", icon: <Lock className="h-8 w-8" /> },
              { name: "Material UI", icon: <Layers className="h-8 w-8" /> },
              { name: "Python", icon: <Code className="h-8 w-8" /> },
              { name: "JavaScript", icon: <Code className="h-8 w-8" /> },
              { name: "JSX", icon: <Code className="h-8 w-8" /> },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center p-4 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                {tech.icon}
                <span className="mt-2 text-sm font-medium">{tech.name}</span>
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    Ready to build something <span className="gradient-text">revolutionary</span>?
                  </h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Let's create a digital experience that sets you apart from the competition.
                  </p>
                  <Button asChild size="lg" className="mt-4 group">
                    <Link href="/contact">
                      Start Your Project
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
