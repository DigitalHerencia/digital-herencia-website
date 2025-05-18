"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Code, Github, Linkedin, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/10 py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-lg font-bold">
              <Code className="h-6 w-6" />
              <span className="font-mono tracking-tight">DIGITAL HERENCIA</span>
            </Link>
            <p className="text-white/70 text-sm max-w-xs">
              Building modern progressive web applications for forward thinking businesses in New Mexico and beyond.
            </p>
            <div className="flex gap-4">
              <Link href="https://github.com/DigitalHerencia" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Twitter className="h-4 w-4" />
                  <span className="sr-only">Twitter</span>
                </Button>
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="h-8 w-8">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-right">
            <h3 className="text-sm font-medium mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services/data-analytics-dashboards"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Data Analytics Dashboards
                </Link>
              </li>
              <li>
                <Link
                  href="/services/event-management-systems"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Event Management Systems
                </Link>
              </li>
              <li>
                <Link
                  href="/services/legal-administrative-solutions"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Legal & Administrative Solutions
                </Link>
              </li>
              <li>
                <Link
                  href="/services/secure-communication-platforms"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Secure Communication Platforms
                </Link>
              </li>
              <li>
                <Link
                  href="/services/fleet-logistics-management"
                  className="text-white/70 hover:text-white transition-colors"
                >
                  Fleet & Logistics Management
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="mb-8">
            <h3 className="text-sm font-medium mb-4">Subscribe to Newsletter</h3>
            <p className="text-white/70 text-sm mb-4">Stay updated with the latest trends and technologies.</p>
            <form className="flex gap-2 max-w-md">
              <Input type="email" placeholder="Enter your email" className="bg-white/5 border-white/10" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">© {new Date().getFullYear()} Digital Herencia. All rights reserved.</p>
            <div className="flex flex-wrap gap-6 text-sm justify-center">
              <Link href="/" className="text-white/50 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/pricing" className="text-white/50 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link href="/blog" className="text-white/50 hover:text-white transition-colors">
                Blog
              </Link>
              <Link href="/contact" className="text-white/50 hover:text-white transition-colors">
                Contact
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="#" className="text-white/50 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
