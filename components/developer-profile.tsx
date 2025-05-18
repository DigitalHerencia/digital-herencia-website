"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  ExternalLink,
  FileCode,
  Github,
  Globe,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Server,
  Twitter,
} from "lucide-react"

interface TechItem {
  name: string
  icon: React.ReactNode
  category: "frontend" | "backend" | "database" | "deployment" | "tools"
}

interface Project {
  title: string
  description: string
  image: string
  tags: string[]
  link: string
  featured: boolean
}

export function DeveloperProfile() {
  const techStack: TechItem[] = [
    { name: "Next.js 15", icon: <Code className="h-4 w-4" />, category: "frontend" },
    { name: "React 19", icon: <Code className="h-4 w-4" />, category: "frontend" },
    { name: "TypeScript", icon: <FileCode className="h-4 w-4" />, category: "frontend" },
    { name: "Tailwind CSS", icon: <Layers className="h-4 w-4" />, category: "frontend" },
    { name: "Node.js", icon: <Server className="h-4 w-4" />, category: "backend" },
    { name: "Express", icon: <Server className="h-4 w-4" />, category: "backend" },
    { name: "MongoDB", icon: <Database className="h-4 w-4" />, category: "database" },
    { name: "Vercel", icon: <Globe className="h-4 w-4" />, category: "deployment" },
    { name: "ShadCN UI", icon: <Layers className="h-4 w-4" />, category: "tools" },
  ]

  const projects: Project[] = [
    {
      title: "Court Jester",
      description:
        "A Next.js justice-tech platform that turns court data into an organized flow of offender cases, motions, and real-time notifications.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e911740-8694-4a79-8b8f-c6535d1633a6-0EuUUW3ghAE4Zwtlj2mLYixlKee3w0.png",
      tags: ["Next.js", "TypeScript", "MongoDB", "Authentication"],
      link: "#",
      featured: true,
    },
    {
      title: "Competitive Advantage",
      description:
        "A comprehensive dashboard built using the OG MERN Stack specifically for merchandise allocation planning nerds in the New Mexico cannabis industry.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/612c395e-a742-4721-bea0-6749759ecb82-rnafjZcuyU9Cu4Y6T4yPsQrHJyXglC.png",
      tags: ["React", "Node.js", "Express", "MongoDB", "Data Visualization"],
      link: "#",
      featured: true,
    },
  ]

  return (
    <div className="relative overflow-hidden py-24 bg-black noise-bg">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
      <div className="container px-4 md:px-6 relative z-10">
        {/* Profile Header */}
        <div className="grid gap-12 md:grid-cols-[300px_1fr] items-start mb-16">
          <div className="relative">
            <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto overflow-hidden rounded-full border-2 border-white/20 cyberpunk-border">
              <Image src="/images/ivan-roman.png" alt="Ivan Roman" fill className="object-cover" />
            </div>
            <div className="absolute -bottom-2 -right-2 bg-black border border-white/20 rounded-full p-2">
              <Badge className="bg-green-500 border-none h-4 w-4 rounded-full p-0" />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <h1 className="text-4xl font-bold">Ivan Roman</h1>
                <Badge variant="outline" className="ml-2 bg-white/5">
                  Available for hire
                </Badge>
              </div>
              <p className="text-xl text-white/70 font-mono">Modern Indie Hacker • Next.js 15 & React 19 Enthusiast</p>
            </div>

            <div className="text-white/70">
              <p className="mb-4">
                <span className="font-mono text-white">~/[ivan]/Roman/[[...xn-ded-dev]]</span> • Haunted by Server-Side
                Spirits
              </p>
              <p className="mb-4">
                Mostly subversive, fully stacked indie hacker who occasionally builds modern progressive web
                applications for forward thinking businesses in New Mexico.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <div className="flex items-center text-white/70 text-sm">
                <MapPin className="h-4 w-4 mr-1" />
                New Mexico
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <Mail className="h-4 w-4 mr-1" />
                DigitalHerencia@Outlook.com
              </div>
              <div className="flex items-center text-white/70 text-sm">
                <Globe className="h-4 w-4 mr-1" />
                digitalherencia.vercel.com
              </div>
            </div>

            <div className="flex gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Github className="h-4 w-4" />
                Follow
              </Button>
              <Button variant="outline" size="sm" className="gap-2">
                <Mail className="h-4 w-4" />
                Contact
              </Button>
              <div className="flex gap-2">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Section */}
        <section className="mb-16">
          <div className="flex items-center gap-2 mb-6">
            <Code className="h-5 w-5 text-white/70" />
            <h2 className="text-2xl font-bold">My Tech Stack</h2>
          </div>

          <Card className="bg-black border border-white/10 cyberpunk-border overflow-hidden">
            <CardContent className="p-6">
              <div className="grid gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Frontend</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack
                      .filter((tech) => tech.category === "frontend")
                      .map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-white/5 py-1 px-3 gap-1.5">
                          {tech.icon}
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Backend</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack
                      .filter((tech) => tech.category === "backend" || tech.category === "database")
                      .map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-white/5 py-1 px-3 gap-1.5">
                          {tech.icon}
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Deployment & Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {techStack
                      .filter((tech) => tech.category === "deployment" || tech.category === "tools")
                      .map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-white/5 py-1 px-3 gap-1.5">
                          {tech.icon}
                          {tech.name}
                        </Badge>
                      ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Featured Projects */}
        <section>
          <div className="flex items-center gap-2 mb-6">
            <Layers className="h-5 w-5 text-white/70" />
            <h2 className="text-2xl font-bold">Featured Projects</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {projects
              .filter((project) => project.featured)
              .map((project, index) => (
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
                      <Button asChild variant="outline" className="w-full group">
                        <Link href={project.link}>
                          View Project
                          <ExternalLink className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
          </div>
        </section>

        {/* GitHub-style Activity Graph */}
        <section className="mt-16">
          <div className="flex items-center gap-2 mb-6">
            <Github className="h-5 w-5 text-white/70" />
            <h2 className="text-2xl font-bold">Contribution Activity</h2>
          </div>

          <Card className="bg-black border border-white/10 cyberpunk-border overflow-hidden">
            <CardContent className="p-6">
              <div className="grid grid-cols-52 gap-1 h-24">
                {Array.from({ length: 364 }).map((_, i) => {
                  // Generate random activity level (0-4)
                  const activityLevel = Math.floor(Math.random() * 5)
                  let bgColor = "bg-white/5"

                  if (activityLevel === 1) bgColor = "bg-white/10"
                  if (activityLevel === 2) bgColor = "bg-white/20"
                  if (activityLevel === 3) bgColor = "bg-white/30"
                  if (activityLevel === 4) bgColor = "bg-white/50"

                  return (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-sm ${bgColor} hover:bg-white/70 transition-colors`}
                      title={`${activityLevel} contributions`}
                    />
                  )
                })}
              </div>
              <div className="flex justify-between mt-2 text-xs text-white/50">
                <span>May 18, 2024</span>
                <span>Less</span>
                <div className="flex gap-1 items-center">
                  <div className="w-3 h-3 rounded-sm bg-white/5"></div>
                  <div className="w-3 h-3 rounded-sm bg-white/10"></div>
                  <div className="w-3 h-3 rounded-sm bg-white/20"></div>
                  <div className="w-3 h-3 rounded-sm bg-white/30"></div>
                  <div className="w-3 h-3 rounded-sm bg-white/50"></div>
                </div>
                <span>More</span>
                <span>May 18, 2025</span>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
