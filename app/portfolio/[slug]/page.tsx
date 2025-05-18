"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlitchText } from "@/components/ui/glitch-text"
import { ArrowLeft, ChevronRight } from "lucide-react"

export default function PortfolioDetailPage() {
  const params = useParams()
  const { slug } = params

  // Format the slug for display (convert-slug-to-title)
  const formatTitle = (slug: string) => {
    return slug
      .split("-")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ")
  }

  const title = formatTitle(slug as string)

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
                PROJECT DETAILS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>{title}</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">Detailed information about this project coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Placeholder Content */}
      <section className="py-16 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black border border-white/10 cyberpunk-border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="relative w-full h-64 rounded-lg overflow-hidden mb-6">
                    <Image src="/project-preview.png" alt={`${title} Preview`} fill className="object-cover" />
                  </div>
                  <h2 className="text-2xl font-bold">Project Details Coming Soon</h2>
                  <p className="text-white/70">
                    We're currently working on the detailed case study for this project. Check back soon for a complete
                    breakdown of the technologies used, challenges overcome, and results achieved.
                  </p>
                  <Button asChild size="lg" className="mt-4 group">
                    <Link href="/portfolio">
                      View Other Projects
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
