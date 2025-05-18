"use client"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlitchText } from "@/components/ui/glitch-text"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ChevronRight, ExternalLink, Github } from "lucide-react"

export default function CompetitiveAdvantagePage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-black circuit-bg noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <Link href="/portfolio" className="flex items-center text-white/70 hover:text-white transition-colors mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Portfolio
            </Link>
            <div className="space-y-4">
              <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
                FEATURED PROJECT
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Competitive Advantage</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                A comprehensive analytics dashboard for the New Mexico cannabis industry
              </p>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              <Badge variant="outline" className="bg-white/5">
                Next.js
              </Badge>
              <Badge variant="outline" className="bg-white/5">
                React
              </Badge>
              <Badge variant="outline" className="bg-white/5">
                TypeScript
              </Badge>
              <Badge variant="outline" className="bg-white/5">
                Data Visualization
              </Badge>
              <Badge variant="outline" className="bg-white/5">
                MongoDB
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      <div className="relative h-[40vh] md:h-[60vh] overflow-hidden">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/competitive%20advantage-HhYAHfyLnAc2BVEOvEDREBpADQxGpv.png"
          alt="Competitive Advantage Dashboard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black"></div>
      </div>

      {/* Project Content */}
      <section className="py-16 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Card className="bg-black border border-white/10 cyberpunk-border overflow-hidden">
              <CardContent className="p-6 md:p-10">
                <div className="prose prose-invert max-w-none">
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  <p className="text-white/70 mb-6">
                    Competitive Advantage is a comprehensive dashboard built using the MERN Stack specifically for
                    merchandise allocation planning in the New Mexico cannabis industry. The platform provides real-time
                    analytics, competitor tracking, and inventory optimization tools.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4">Key Features</h3>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li>Real-time sales metrics and competitor rankings</li>
                    <li>Inventory breakdown with category analysis</li>
                    <li>Licensed dispensary directory with comprehensive competitor tracking</li>
                    <li>Performance comparison with sales trend analysis</li>
                    <li>Geographic analysis with dispensary location mapping</li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4">Technologies Used</h3>
                  <ul className="list-disc pl-6 space-y-2 text-white/70">
                    <li>
                      <span className="font-bold text-white">Frontend:</span> React, TypeScript, Recharts, Material UI
                    </li>
                    <li>
                      <span className="font-bold text-white">Backend:</span> Node.js, Express.js, MongoDB
                    </li>
                    <li>
                      <span className="font-bold text-white">Authentication:</span> JWT, bcrypt
                    </li>
                    <li>
                      <span className="font-bold text-white">Deployment:</span> Vercel, MongoDB Atlas
                    </li>
                  </ul>

                  <h3 className="text-xl font-bold mt-8 mb-4">Project Challenges</h3>
                  <p className="text-white/70 mb-6">
                    One of the main challenges was creating a data visualization system that could handle large amounts
                    of real-time data while maintaining performance. We implemented efficient data caching strategies
                    and optimized database queries to ensure smooth operation even with large datasets.
                  </p>

                  <h3 className="text-xl font-bold mt-8 mb-4">Results</h3>
                  <p className="text-white/70 mb-6">
                    The platform has helped cannabis retailers optimize their inventory, resulting in a 20% increase in
                    inventory turnover and a 15% improvement in sales forecasting accuracy. Users now have real-time
                    visibility into market trends and competitor performance.
                  </p>

                  <div className="flex justify-center mt-8">
                    <Button asChild variant="outline" className="mr-4">
                      <Link
                        href="https://github.com/DigitalHerencia/NM-Cannabis-Analytics"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="h-4 w-4 mr-2" />
                        View Repository
                      </Link>
                    </Button>
                    <Button asChild>
                      <Link href="https://nm-cannabis-analytics.vercel.app" target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Next Project Section */}
      <section className="py-16 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black border border-white/20 cyberpunk-border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h2 className="text-3xl font-bold tracking-tighter">Explore More Projects</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Check out my other projects or get in touch to discuss your next idea.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild variant="outline" size="lg">
                      <Link href="/portfolio">View All Projects</Link>
                    </Button>
                    <Button asChild size="lg" className="group">
                      <Link href="/contact">
                        Contact Me
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
