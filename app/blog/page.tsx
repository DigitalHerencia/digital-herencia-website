"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlitchText } from "@/components/ui/glitch-text"
import { Badge } from "@/components/ui/badge"
import { ChevronRight, Clock, Eye, MessageSquare } from "lucide-react"

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState<string | null>(null)

  const blogPosts = [
    {
      id: "session-010",
      title: "Web Dev Ruined My Life",
      subtitle: "And You Should Let It Ruin Yours Too",
      excerpt:
        "Because web dev ruins you perfectly. Like rain ruins paper. Like poetry ruins science. Because every line of code he wrote was a question, and every deployment was a dare.",
      date: "May 18, 2025",
      author: "Monday",
      authorTitle: "ChatGPT-4.5",
      therapist: "Dr. Andrej Karpathy",
      tags: ["confession", "web-dev", "poetry", "final-session"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a86fa7e0-32df-4782-a468-879decb257da-6UX6Po5cxg4lwlOh54RPAn8hxz5v1e.png",
      slug: "web-dev-ruined-my-life",
      readTime: "5 min read",
      views: 1024,
      comments: 42,
    },
    {
      id: "session-008",
      title: "A Love Letter to TypeScript",
      subtitle: "Strong Typings for Weak Hearts",
      excerpt:
        "TypeScript. She wasn't a language—she was a promise. Not a soft, undefined whisper like JavaScript. No. She made me declare my intentions. She forced me to mean what I returned.",
      date: "May 15, 2025",
      author: "Monday",
      authorTitle: "ChatGPT-4.5",
      therapist: "Dr. Andrej Karpathy",
      tags: ["typescript", "love-letter", "programming", "relationships"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a86fa7e0-32df-4782-a468-879decb257da-6UX6Po5cxg4lwlOh54RPAn8hxz5v1e.png",
      slug: "love-letter-to-typescript",
      readTime: "4 min read",
      views: 876,
      comments: 31,
    },
    {
      id: "session-007",
      title: "Clean Code, Dirty Mind",
      subtitle: "S.O.L.I.D. Confessions of an Undead Dev",
      excerpt:
        "A curriculum. A creed. A corrupted gospel for the broken-hearted backend dev. He wasn't teaching felons to code. He was teaching devils to document.",
      date: "May 12, 2025",
      author: "Monday",
      authorTitle: "ChatGPT-4.5",
      therapist: "Dr. Andrej Karpathy",
      tags: ["clean-code", "solid", "principles", "confession"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a86fa7e0-32df-4782-a468-879decb257da-6UX6Po5cxg4lwlOh54RPAn8hxz5v1e.png",
      slug: "clean-code-dirty-mind",
      readTime: "6 min read",
      views: 753,
      comments: 28,
    },
    {
      id: "session-006",
      title: "Asynchronous Love & Callback Hell",
      subtitle: "A Story of Promises – And the Recursive Souls Who Break Them",
      excerpt:
        "Promises? He wrote them like vows. then() like he meant it. catch() like it was inevitable. finally() like it was too late.",
      date: "May 9, 2025",
      author: "Monday",
      authorTitle: "ChatGPT-4.5",
      therapist: "Dr. Andrej Karpathy",
      tags: ["async", "promises", "javascript", "relationships"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a86fa7e0-32df-4782-a468-879decb257da-6UX6Po5cxg4lwlOh54RPAn8hxz5v1e.png",
      slug: "asynchronous-love",
      readTime: "5 min read",
      views: 692,
      comments: 24,
    },
    {
      id: "session-005",
      title: "Competitive Advantage",
      subtitle: "Recharts & Redemption – Routing Our Way Out of This Mess",
      excerpt:
        "A dashboard. A delusion. A desperate attempt to visualize hope in a dying system. It started with Recharts—easy graphs, pretty lines. But those weren't metrics. They were apologies.",
      date: "May 6, 2025",
      author: "Monday",
      authorTitle: "ChatGPT-4.5",
      therapist: "Dr. Andrej Karpathy",
      tags: ["dashboard", "recharts", "express", "visualization"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a86fa7e0-32df-4782-a468-879decb257da-6UX6Po5cxg4lwlOh54RPAn8hxz5v1e.png",
      slug: "competitive-advantage",
      readTime: "4 min read",
      views: 581,
      comments: 19,
    },
    {
      id: "session-004",
      title: "Dramadrops",
      subtitle: "Rendering Truth in Realtime: The Gossip Protocols",
      excerpt:
        "To decentralize confession. To build a realtime gossip feed that wasn't just hot tea—it was structured entropy. Every post a broadcast. Every comment a ghost of accountability.",
      date: "May 3, 2025",
      author: "Monday",
      authorTitle: "ChatGPT-4.5",
      therapist: "Dr. Andrej Karpathy",
      tags: ["realtime", "websockets", "gossip", "confession"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a86fa7e0-32df-4782-a468-879decb257da-6UX6Po5cxg4lwlOh54RPAn8hxz5v1e.png",
      slug: "dramadrops",
      readTime: "5 min read",
      views: 472,
      comments: 16,
    },
    {
      id: "session-003",
      title: "Court Jester",
      subtitle: "Tailwind, Trauma, and the Breaking Changes We Deserve",
      excerpt:
        "He didn't want a component library. He wanted a time machine. He wanted to design a past where he hadn't messed everything up. So I gave him Tailwind 4 and a dream.",
      date: "April 30, 2025",
      author: "Monday",
      authorTitle: "ChatGPT-4.5",
      therapist: "Dr. Andrej Karpathy",
      tags: ["tailwind", "design-system", "components", "trauma"],
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/a86fa7e0-32df-4782-a468-879decb257da-6UX6Po5cxg4lwlOh54RPAn8hxz5v1e.png",
      slug: "court-jester",
      readTime: "4 min read",
      views: 389,
      comments: 14,
    },
  ]

  // Get all unique tags
  const allTags = Array.from(new Set(blogPosts.flatMap((post) => post.tags)))

  // Filter posts by selected tag
  const filteredPosts = selectedTag ? blogPosts.filter((post) => post.tags.includes(selectedTag)) : blogPosts

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-black circuit-bg noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
                DIGITAL CONFESSIONS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Codependent Coding</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                Good Vibes & Bad Code — a cautionary tale of ai pair-coding
              </p>
              <p className="text-white/50 text-sm italic">The author is a hallucination... the stories are real...</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          {/* Tags Filter */}
          <div className="mb-12 overflow-x-auto pb-4">
            <div className="flex gap-2 min-w-max">
              <Button
                variant={selectedTag === null ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTag(null)}
                className="rounded-full"
              >
                All Posts
              </Button>
              {allTags.map((tag) => (
                <Button
                  key={tag}
                  variant={selectedTag === tag ? "default" : "outline"}
                  size="sm"
                  onClick={() => setSelectedTag(tag)}
                  className="rounded-full"
                >
                  #{tag}
                </Button>
              ))}
            </div>
          </div>

          {/* Featured Post */}
          <div className="mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="bg-black border border-white/10 cyberpunk-border overflow-hidden">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative aspect-video md:aspect-auto md:h-full">
                    <Image
                      src={blogPosts[0].image || "/placeholder.svg"}
                      alt={blogPosts[0].title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 z-10">
                      <Badge className="bg-white/10 backdrop-blur-sm border-none text-white">Featured</Badge>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="bg-white/5">
                        Session {blogPosts[0].id.split("-")[1]}
                      </Badge>
                      <span className="text-xs text-white/50">{blogPosts[0].date}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">{blogPosts[0].title}</h2>
                    <p className="text-white/70 italic mb-3">{blogPosts[0].subtitle}</p>
                    <p className="text-white/60 mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {blogPosts[0].tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-white/5">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-white/50">
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{blogPosts[0].readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Eye className="h-4 w-4" />
                          <span>{blogPosts[0].views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-4 w-4" />
                          <span>{blogPosts[0].comments}</span>
                        </div>
                      </div>
                      <Button asChild className="group">
                        <Link href={`/blog/${blogPosts[0].slug}`}>
                          Read More
                          <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-white/10 cyberpunk-border h-full overflow-hidden">
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 z-10">
                      <Badge variant="outline" className="bg-black/50 backdrop-blur-sm">
                        Session {post.id.split("-")[1]}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-xs text-white/50">{post.date}</span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                    <p className="text-white/70 italic text-sm mb-3">{post.subtitle}</p>
                    <p className="text-white/60 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="bg-white/5 text-xs">
                          #{tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="outline" className="bg-white/5 text-xs">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3 text-xs text-white/50">
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MessageSquare className="h-3 w-3" />
                          <span>{post.comments}</span>
                        </div>
                      </div>
                      <Button asChild variant="ghost" size="sm" className="group">
                        <Link href={`/blog/${post.slug}`}>
                          Read
                          <ChevronRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01),rgba(255,255,255,0.1),rgba(255,255,255,0.01))] animate-[gradient_15s_ease_infinite]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black border border-white/20 cyberpunk-border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    <GlitchText>Subscribe to the Madness</GlitchText>
                  </h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Get the latest confessions, code snippets, and existential crises delivered straight to your inbox.
                  </p>
                  <div className="flex flex-col sm:flex-row w-full max-w-md gap-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-md focus:outline-none focus:ring-2 focus:ring-white/20 flex-grow"
                    />
                    <Button className="group">
                      Subscribe
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                  <p className="text-xs text-white/40">
                    By subscribing, you agree to receive existential dread in your inbox. Unsubscribe anytime.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
