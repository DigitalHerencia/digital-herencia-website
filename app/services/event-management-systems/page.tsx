"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlitchText } from "@/components/ui/glitch-text"
import { Badge } from "@/components/ui/badge"
import { Calendar, ChevronRight, ImagePlus, ListChecks, Users } from "lucide-react"

export default function EventManagementSystemsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-black circuit-bg noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5 w-fit">
                EVENT MANAGEMENT SYSTEMS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Streamline Your Events</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                Powerful planning tools for photographers, event coordinators, and wedding professionals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="group">
                  <Link href="/contact">
                    Get Started
                    <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/portfolio">View Examples</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative overflow-hidden rounded-lg border border-white/10">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f3d194b8-dc37-4f60-8b9e-fc5b5a1642a6-Fgy5ORHm57lo6AQ2PiCI1JJ7FdVtBA.png"
                  alt="Event Management System Example"
                  width={600}
                  height={400}
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              KEY FEATURES
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Powerful Event Tools</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Comprehensive features designed for event professionals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Scheduling & Timeline",
                description:
                  "Create detailed event timelines and schedules with automated reminders and notifications.",
                icon: <Calendar className="h-8 w-8" />,
              },
              {
                title: "Client Management",
                description: "Manage client information, communications, and preferences in one centralized location.",
                icon: <Users className="h-8 w-8" />,
              },
              {
                title: "Shot Lists & Planning",
                description: "Create and manage comprehensive shot lists and event details for flawless execution.",
                icon: <ListChecks className="h-8 w-8" />,
              },
              {
                title: "Gallery Management",
                description: "Organize, share, and deliver event photos and media with elegant client galleries.",
                icon: <ImagePlus className="h-8 w-8" />,
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-white/10 cyberpunk-border h-full">
                  <CardContent className="p-6 flex flex-col items-center text-center space-y-4">
                    <div className="p-3 rounded-full bg-white/5">{feature.icon}</div>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                    <p className="text-white/70">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              APPLICATIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Industry Solutions</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              How our event management systems serve different professionals.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                industry: "Wedding Photography",
                description:
                  "Comprehensive tools for wedding photographers to manage timelines, shot lists, and client expectations.",
                tags: ["Timeline Management", "Shot Lists", "Client Galleries"],
              },
              {
                industry: "Corporate Events",
                description:
                  "Streamlined planning for corporate event managers handling multiple events and stakeholders.",
                tags: ["Vendor Management", "Budget Tracking", "Attendee Registration"],
              },
              {
                industry: "Concert & Festival Production",
                description:
                  "Robust tools for managing complex production schedules, artist requirements, and stage management.",
                tags: ["Production Scheduling", "Artist Management", "Stage Planning"],
              },
              {
                industry: "Conference Organization",
                description:
                  "End-to-end management for conference organizers handling speakers, sessions, and attendees.",
                tags: ["Speaker Management", "Session Scheduling", "Attendee Experience"],
              },
              {
                industry: "Social Event Planning",
                description:
                  "Intuitive tools for social event planners coordinating venues, catering, and guest experiences.",
                tags: ["Venue Coordination", "Catering Management", "Guest Lists"],
              },
              {
                industry: "Sports Event Management",
                description:
                  "Specialized features for sports event coordinators managing competitions, participants, and logistics.",
                tags: ["Competition Scheduling", "Participant Management", "Results Tracking"],
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border border-white/10 cyberpunk-border h-full">
                  <CardContent className="p-6 flex flex-col space-y-4">
                    <h3 className="text-xl font-bold">{useCase.industry}</h3>
                    <p className="text-white/70 flex-grow">{useCase.description}</p>
                    <div className="flex flex-wrap gap-2 pt-4">
                      {useCase.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="bg-white/5">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              OUR APPROACH
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Development Process</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Our structured methodology for creating powerful event management solutions.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Workflow Analysis",
                description:
                  "We begin by understanding your current event management processes, pain points, and specific requirements to identify opportunities for improvement.",
              },
              {
                step: "02",
                title: "System Design",
                description:
                  "Our designers create wireframes and mockups of your event management system, focusing on intuitive interfaces and efficient workflows.",
              },
              {
                step: "03",
                title: "Development",
                description:
                  "Our developers build your custom system using modern frameworks, ensuring it's responsive, fast, and works across all devices.",
              },
              {
                step: "04",
                title: "Testing & Refinement",
                description:
                  "We rigorously test the system with real-world scenarios, making refinements based on your feedback to ensure it meets your specific needs.",
              },
              {
                step: "05",
                title: "Training & Launch",
                description:
                  "We provide comprehensive training and support during the launch phase to ensure a smooth transition to your new event management system.",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center text-xl font-bold">
                  {process.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-white/70">{process.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              CASE STUDY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Featured Project</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              See how our event management solutions deliver real-world results.
            </p>
          </div>

          <Card className="bg-black border border-white/10 cyberpunk-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/f3d194b8-dc37-4f60-8b9e-fc5b5a1642a6-Fgy5ORHm57lo6AQ2PiCI1JJ7FdVtBA.png"
                    alt="Wedding Day Schedule System"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="outline">
                    Wedding Photography
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">Wedding Planner Pro</h3>
                  <p className="text-white/70 mb-6">
                    We developed a comprehensive wedding planning system for professional photographers to manage
                    timelines, shot lists, and client expectations. The system streamlines the entire wedding
                    photography workflow from booking to final delivery.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="font-medium">Key Results:</p>
                    <ul className="list-disc pl-5 text-white/70 space-y-1">
                      <li>40% reduction in administrative time</li>
                      <li>Improved client satisfaction through better expectation management</li>
                      <li>Seamless coordination between photographers and wedding vendors</li>
                    </ul>
                  </div>
                  <Button asChild className="w-fit">
                    <Link href="/portfolio">
                      View Full Case Study
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black border border-white/10 cyberpunk-border">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <div className="text-4xl font-serif">"</div>
                  <p className="text-white/70 italic text-xl">
                    The wedding planning system from Digital Herencia has completely transformed how I run my
                    photography business. I'm spending less time on admin and more time being creative. My clients love
                    the organization and professionalism it brings to their special day.
                  </p>
                  <div className="mt-6">
                    <p className="font-bold">Michael Chen</p>
                    <p className="text-white/50 text-sm">Owner, Eternal Moments Photography</p>
                  </div>
                </div>
              </CardContent>
            </Card>
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to streamline your events?</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Let's create a custom event management system that transforms your workflow and elevates your client
                    experience.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="group">
                      <Link href="/contact">
                        Schedule a Consultation
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/portfolio">View More Examples</Link>
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
