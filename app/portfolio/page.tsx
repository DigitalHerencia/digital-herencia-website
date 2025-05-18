"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { GlitchText } from "@/components/ui/glitch-text"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ExternalLink } from "lucide-react"

export default function PortfolioPage() {
  const projects = [
    {
      title: "Competitive Advantage",
      description: "A comprehensive analytics dashboard for tracking cannabis market performance across New Mexico.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/competitive%20advantage-HhYAHfyLnAc2BVEOvEDREBpADQxGpv.png",
      tags: ["Next.js", "React", "TypeScript", "Data Visualization"],
      link: "/portfolio/competitive-advantage",
    },
    {
      title: "Wedding Planner Pro",
      description: "A wedding planning application with scheduling tools for photographers and event coordinators.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/photo-pro-1tS8g9DCQuzBQBYIS3swJBpbpRfzEE.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Calendar API"],
      link: "/portfolio/wedding-planner",
    },
    {
      title: "Court Jester",
      description: "An administrative dashboard for legal professionals to manage cases, documents, and court dates.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/courtjester-blaxusBpEEuA7UgeCoF9F7bd3WdmYw.png",
      tags: ["Next.js", "React", "Node.js", "Authentication"],
      link: "/portfolio/court-jester",
    },
    {
      title: "SignalBridge",
      description: "A secure communication platform connecting incarcerated individuals with their support networks.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/signal%20bridge-D3BF6Xlo90SXr2HgwOsdhoxHZXGPcp.png",
      tags: ["React", "Node.js", "WebSockets", "Security"],
      link: "/portfolio/signal-bridge",
    },
    {
      title: "DramaDrops",
      description: "An anonymous social platform for sharing stories and discussions in a secure environment.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-aVxVYR6SWaiJmZ1EGcB97caBaxSIQ2.png",
      tags: ["Next.js", "MongoDB", "Express", "Node.js"],
      link: "/portfolio/drama-drops",
    },
    {
      title: "Design System Utility",
      description: "A developer tool for creating and managing design systems with Tailwind CSS integration.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dc224125-baac-4d9f-b4a3-bb2346457bf4-6WMTHTqVMhIP14tCZV8lENY2G2s16W.png",
      tags: ["React", "TypeScript", "Tailwind CSS", "Design Systems"],
      link: "/portfolio/design-system-utility",
    },
    {
      title: "Hustler's Code",
      description:
        "A street-smart business management tool designed for entrepreneurs to track sales, manage inventory, and forecast profits with a secure, private interface.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hustlers%20code-dBtf4D9upG69enfitY6OrLWp1KfJHM.png",
      tags: ["Next.js", "React", "TypeScript", "Dark Mode UI", "Business Tools"],
      link: "/portfolio/hustlers-code",
    },
    {
      title: "Free The Homie",
      description:
        "A fundraising platform built to support community members in need, featuring e-commerce functionality with direct proceeds to beneficiaries.",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/freethehomie-oOELsQrpBdf5568OzgAT2zkrqLFbgb.png",
      tags: ["Next.js", "E-commerce", "Payment Processing", "Community Support"],
      link: "/portfolio/free-the-homie",
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
                MY WORK
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Portfolio</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                A showcase of my recent projects and the technologies I've worked with.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-white/10 cyberpunk-border h-full overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-white/70 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-white/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button asChild variant="outline" className="w-full group">
                      <Link href={project.link}>
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardFooter>
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
              HOW I WORK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>My Process</GlitchText>
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

      {/* Testimonials Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              CLIENT FEEDBACK
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>What Clients Say</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Don't just take my word for it - hear what my clients have to say.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "Ivan delivered a website that exceeded our expectations. The performance is incredible, and the design stands out from our competitors.",
                author: "Sarah Johnson",
                company: "TechStart Inc.",
              },
              {
                quote:
                  "Working with Digital Herencia was a game-changer for our business. Our new website loads lightning fast and has significantly improved our conversion rates.",
                author: "Michael Chen",
                company: "Innovate Solutions",
              },
              {
                quote:
                  "The attention to detail and technical expertise that Ivan brings to the table is unmatched. Our project was delivered on time and on budget.",
                author: "Alex Rodriguez",
                company: "Future Finance",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-white/10 cyberpunk-border h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="text-4xl font-serif mb-4">"</div>
                    <p className="text-white/70 italic flex-grow">{testimonial.quote}</p>
                    <div className="mt-6">
                      <p className="font-bold">{testimonial.author}</p>
                      <p className="text-white/50 text-sm">{testimonial.company}</p>
                    </div>
                  </CardContent>
                </Card>
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to start your project?</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Let's create something amazing together that sets you apart from the competition.
                  </p>
                  <Button asChild size="lg" className="mt-4 group">
                    <Link href="/contact">
                      Get In Touch
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
