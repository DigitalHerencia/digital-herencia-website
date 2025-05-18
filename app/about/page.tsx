"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, ExternalLink, Github } from "lucide-react"

export default function AboutPage() {
  const techBadges = [
    {
      name: "Next.js 15",
      color: "000000",
      logo: "next.js",
      logoColor: "white",
      prefix: "Made with",
      url: "https://nextjs.org/",
    },
    {
      name: "React 19",
      color: "61DAFB",
      logo: "react",
      logoColor: "white",
      prefix: "Made with",
      url: "https://reactjs.org/",
    },
    {
      name: "Node.js",
      color: "339933",
      logo: "node.js",
      logoColor: "white",
      prefix: "Made with",
      url: "https://nodejs.org/",
    },
    {
      name: "MongoDB",
      color: "47A248",
      logo: "mongodb",
      logoColor: "white",
      prefix: "Made with",
      url: "https://www.mongodb.com/",
    },
    {
      name: "TypeScript",
      color: "3178C6",
      logo: "typescript",
      logoColor: "white",
      prefix: "Made with",
      url: "https://www.typescriptlang.org/",
    },
    {
      name: "Express",
      color: "000000",
      logo: "express",
      logoColor: "white",
      prefix: "Contains",
      url: "https://expressjs.com/",
    },
    {
      name: "Redux",
      color: "764ABC",
      logo: "redux",
      logoColor: "white",
      prefix: "Contains",
      url: "https://redux.js.org/",
    },
    {
      name: "JWT",
      color: "000000",
      logo: "json-web-tokens",
      logoColor: "white",
      prefix: "Contains",
      url: "https://jwt.io/",
    },
    {
      name: "Vercel",
      color: "000000",
      logo: "vercel",
      logoColor: "white",
      prefix: "Deployed on",
      url: "https://vercel.com/",
    },
    {
      name: "Clerk",
      color: "0055FF",
      logo: "clerk",
      logoColor: "white",
      prefix: "Uses",
      url: "https://clerk.dev/",
    },
    {
      name: "ShadCN",
      color: "000000",
      logo: "shadcn",
      logoColor: "white",
      prefix: "Uses",
      url: "https://ui.shadcn.com/",
    },
    {
      name: "JavaScript",
      color: "F7DF1E",
      logo: "javascript",
      logoColor: "black",
      prefix: "Uses",
      url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    },
    {
      name: "JSX",
      color: "61DAFB",
      logo: "react",
      logoColor: "white",
      prefix: "Uses",
      url: "https://reactjs.org/docs/introducing-jsx.html",
    },
    {
      name: "Material-UI",
      color: "0081CB",
      logo: "mui",
      logoColor: "white",
      prefix: "Contains",
      url: "https://mui.com/",
    },
    {
      name: "Python",
      color: "3776AB",
      logo: "python",
      logoColor: "white",
      prefix: "Uses",
      url: "https://www.python.org/",
    },
  ]

  const projects = [
    {
      title: "Court⚖️Jester",
      description:
        "A Next.js 15 justice‑tech platform that turns court chaos into an organized flow of offender cases, motions, and real‑time notifications.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/0e911740-8694-4a79-8b8f-c6535d1633a6-1i3EEFCN3Le9G8gMYmXMisWvROOCmH.png",
      repo: "https://github.com/DigitalHerencia/court-jester",
      technologies: ["Next.js 15", "React 19", "MongoDB", "Authentication"],
    },
    {
      title: "COMPETITIVE ADVANTAGE",
      description:
        "A comprehensive dashboard built using the OG MERN Stack specifically for merchandise allocation planning nerds in the New Mexico cannabis industry. Who said retail analytics aren't lit!",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/612c395e-a742-4721-bea0-6749759ecb82%20%281%29-VmWrcsCPyjmAxq1eWCb4Ad5zrx4JAR.png",
      screenshots: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-SuFd67O64dPzf62li71Zjpzk09edmM.png",
          caption: "Dashboard View - Sales metrics and competitor rankings",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ilp1BvzgQTO2CpfhWBLyswB7yRJzQe.png",
          caption: "Inventory Breakdown - Category analysis with interactive charts",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-miUPBdnnxYmvFBv5IT3K4ehnYvHdPv.png",
          caption: "Dispensary Directory - Comprehensive competitor tracking",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-8iS2JT3ydgni7u41aKjwpQWcQ7lnM8.png",
          caption: "Performance Comparison - Sales trend analysis over time",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-qfdmkU0QzlsrqV7RBemtYuQj1p9COc.png",
          caption: "Geographic Analysis - Dispensary location mapping",
        },
      ],
      repo: "https://github.com/DigitalHerencia/NM-Cannabis-Analytics",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Data Visualization"],
    },
    {
      title: "Hustler's Code",
      description:
        "A street-smart business management tool designed specifically for street entrepreneurs. Track inventory, manage clients, record sales, and forecast profits with an interface that keeps your data private.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_17-5-2025_5518_hustlerscode.vercel.app-FWnERPpMiY2fHqgfmawb2PeJm7cV7Y.jpeg",
      screenshots: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_17-5-2025_55044_hustlerscode.vercel.app-n7kyMd5S7foIq2garcJGASPpvpJFRD.jpeg",
          caption: "Pricing Calculator - Set prices to maximize profits",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ab4fe702-fe8d-494f-8cfe-c1ee6ff953c6-djdQ4yQafaoM6l6aIPT19jIXWdjowy.png",
          caption: "Cash Register - Track sales and manage inventory",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_17-5-2025_5518_hustlerscode.vercel.app-FWnERPpMiY2fHqgfmawb2PeJm7cV7Y.jpeg",
          caption: "Help & Guide - Learn the game, master the hustle",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_17-5-2025_5502_hustlerscode.vercel.app-i7jBdydPiI9dxKUI5HRX3iGRHgnufs.jpeg",
          caption: "Client Management - Get your money, no exceptions",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_17-5-2025_55023_hustlerscode.vercel.app-VqxdRkx1ITwLCuMt0zUi51pAz7RoNL.jpeg",
          caption: "Monthly Forecast - Track progress and plan moves",
        },
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot_17-5-2025_55044_hustlerscode.vercel.app-H9qBVz9xFzD5iSsPO8EYEhSJfh3rg5.jpeg",
          caption: "Pricing Calculator - Set prices to maximize profits",
        },
      ],
      repo: "https://github.com/DigitalHerencia/hustlers-code",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Dark Mode UI"],
    },
    {
      title: "Free The Homie",
      description:
        "A fundraising platform built to support community members in need. Features e-commerce functionality with direct proceeds to beneficiaries.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/55156802-9e12-4e46-bec9-459b39f0c690-6FTXstGTLK39HYzaAU1kjUptokaHl7.png",
      repo: "https://github.com/DigitalHerencia/free-the-homie",
      technologies: ["Next.js", "E-commerce", "Payment Processing", "Community Support"],
    },
  ]

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section with GitHub-style Header */}
      <section className="py-24 bg-black circuit-bg noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="relative w-64 h-64 md:w-72 md:h-72 mx-auto overflow-hidden rounded-full border-2 border-white/20 mb-6">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/177087060.jpg-mSm0YeLgJOuEfepm8UcSqQmwSN9jNE.jpeg"
                alt="Ivan Roman"
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">Ivan Roman</h1>
              <p className="text-white/70 md:text-xl/relaxed font-mono">
                Modern Indie Hacker • Next.js 15 & React 19 Enthusiast
              </p>
            </div>

            {/* GitHub-style Tech Badges */}
            <div className="flex flex-wrap justify-center gap-2 max-w-4xl mx-auto mt-8">
              {techBadges.map((badge, index) => (
                <Link key={index} href={badge.url} target="_blank" rel="noopener noreferrer" className="no-underline">
                  <div className="flex h-8 overflow-hidden rounded-md">
                    <div className="flex items-center bg-zinc-800 px-3 text-xs font-medium text-white">
                      {badge.prefix}
                    </div>
                    <div
                      className="flex items-center px-3 text-xs font-medium"
                      style={{
                        backgroundColor: `#${badge.color}`,
                        color: badge.logoColor === "white" ? "white" : "black",
                      }}
                    >
                      {badge.name}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">🛠️ My Tech Stack</h2>
          </div>

          <div className="prose prose-invert max-w-3xl mx-auto">
            <ul className="list-disc pl-6 space-y-2 text-white/70">
              <li>
                <span className="font-bold text-white">Languages:</span> JavaScript (ESNext), TypeScript, HTML5, CSS3
              </li>
              <li>
                <span className="font-bold text-white">Frontend:</span> Next.js 15, React 19, ShadCN UI (because
                aesthetics matter)
              </li>
              <li>
                <span className="font-bold text-white">UI Components:</span> ShadCN, Material-UI (Minimalism meets
                usability)
              </li>
              <li>
                <span className="font-bold text-white">Backend:</span> Node.js, Express.js (API routes: because
                server-side rendering isn't the only thing worth breaking)
              </li>
              <li>
                <span className="font-bold text-white">Data Visualization:</span> Nivo, D3.js (making numbers look
                almost interesting)
              </li>
              <li>
                <span className="font-bold text-white">Databases:</span> MongoDB (still the cool kid on the block)
              </li>
              <li>
                <span className="font-bold text-white">Authentication:</span> Clerk (because keeping users logged in is
                a skill)
              </li>
              <li>
                <span className="font-bold text-white">Deployment:</span> Vercel (Zero-config, infinite scalability, and
                maximum flex)
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">🚀 Featured Projects</h2>
          </div>

          <div className="space-y-24 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="border border-white/10 rounded-lg overflow-hidden bg-black/50 cyberpunk-border"
              >
                <div className="p-6">
                  <div className="flex flex-col space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="w-full md:w-1/2">
                        <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                        <p className="text-white/70 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="bg-white/5 border-white/20 text-white/80"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                        <Button asChild variant="outline" className="w-fit flex items-center gap-2">
                          <Link href={project.repo} target="_blank" rel="noopener noreferrer">
                            <Github className="h-4 w-4" />
                            View Repository
                            <ExternalLink className="h-3 w-3 ml-1" />
                          </Link>
                        </Button>
                      </div>
                      <div className="w-full md:w-1/2 relative aspect-video rounded-lg overflow-hidden border border-white/10">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={project.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* Project Screenshots Gallery */}
                    {project.screenshots && (
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-4 text-white/90">Project Screenshots</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {project.screenshots.map((screenshot, ssIndex) => (
                            <div key={ssIndex} className="space-y-2">
                              <div className="relative aspect-video rounded-lg overflow-hidden border border-white/10">
                                <Image
                                  src={screenshot.url || "/placeholder.svg"}
                                  alt={`${project.title} screenshot ${ssIndex + 1}`}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <p className="text-sm text-white/60 text-center">{screenshot.caption}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* GitHub Stats Section */}
      <section className="py-16 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">📈 GitHub Stats</h2>
          </div>

          <div className="flex justify-center">
            <div className="border border-white/10 rounded-lg overflow-hidden p-4 bg-black/50 cyberpunk-border">
              <Image
                src="https://github-readme-stats.vercel.app/api?username=DigitalHerencia&show_icons=true&theme=radical"
                alt="GitHub Stats"
                width={495}
                height={195}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01),rgba(255,255,255,0.1),rgba(255,255,255,0.01))] animate-[gradient_15s_ease_infinite]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black border border-white/20 cyberpunk-border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Let's Build Something Amazing</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                    vision.
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
