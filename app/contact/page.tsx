"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { GlitchText } from "@/components/ui/glitch-text"
import { Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log(formState)
    alert("Thanks for your message! I'll get back to you soon.")
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
  }

  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-black circuit-bg noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
            <div className="space-y-4">
              <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
                GET IN TOUCH
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Contact Me</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                Have a project in mind? Let's discuss how I can help bring your vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="grid gap-12 md:grid-cols-2">
            <Card className="bg-black border border-white/10 cyberpunk-border h-full">
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your name"
                      value={formState.name}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="Subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="bg-white/5 border-white/10"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      className="min-h-32 bg-white/5 border-white/10"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-5 h-5 mt-0.5 text-white/70" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <p className="text-white/70">contact@digitalherencia.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Phone className="w-5 h-5 mt-0.5 text-white/70" />
                    <div>
                      <h3 className="font-medium">Phone</h3>
                      <p className="text-white/70">(505) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-5 h-5 mt-0.5 text-white/70" />
                    <div>
                      <h3 className="font-medium">Location</h3>
                      <p className="text-white/70">New Mexico, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Connect</h2>
                <div className="flex space-x-4">
                  <Link href="https://github.com/DigitalHerencia" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Twitter className="h-5 w-5" />
                      <span className="sr-only">Twitter</span>
                    </Button>
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="icon">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-4">Working Hours</h2>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-white/70">Monday - Friday</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Saturday</span>
                    <span>By appointment</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/70">Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>FAQ</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Common questions about my services and process.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: "What is your typical project timeline?",
                answer:
                  "Project timelines vary depending on complexity, but most websites take 4-8 weeks from concept to launch. I'll provide a detailed timeline during our initial consultation.",
              },
              {
                question: "Do you offer ongoing maintenance?",
                answer:
                  "Yes, I offer various maintenance packages to keep your website secure, updated, and performing optimally after launch.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Each project is unique, so pricing is customized based on your specific requirements. I provide detailed quotes after understanding your project needs.",
              },
              {
                question: "Do you work with clients outside of New Mexico?",
                answer:
                  "While I'm based in New Mexico, I work with clients globally. All meetings can be conducted virtually.",
              },
              {
                question: "What technologies do you specialize in?",
                answer:
                  "I specialize in Next.js, React, TypeScript, Node.js, and MongoDB, but I'm proficient in a wide range of modern web technologies.",
              },
              {
                question: "How do we get started?",
                answer:
                  "Simply fill out the contact form on this page, and I'll reach out to schedule an initial consultation to discuss your project in detail.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-lg bg-white/5"
              >
                <h3 className="text-lg font-bold mb-2">{faq.question}</h3>
                <p className="text-white/70">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
