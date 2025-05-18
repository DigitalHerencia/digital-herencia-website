"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlitchText } from "@/components/ui/glitch-text"
import { ChevronRight, Code, Cpu, Database, Globe, Lock, Rocket, Shield, Zap } from "lucide-react"

export default function FeaturesPage() {
  const features = [
    {
      title: "Performance",
      description: "Lightning-fast load times and smooth interactions",
      icon: <Zap className="h-6 w-6" />,
      content: (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Rocket className="h-6 w-6 mb-2" />
              <CardTitle>Edge Deployment</CardTitle>
              <CardDescription>
                Global CDN deployment ensures your site loads quickly anywhere in the world.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Automatic edge caching</li>
                  <li>Global presence in 300+ locations</li>
                  <li>Instant cache invalidation</li>
                  <li>99.99% uptime guarantee</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Code className="h-6 w-6 mb-2" />
              <CardTitle>Optimized Code</CardTitle>
              <CardDescription>Clean, efficient code that loads and executes quickly.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Automatic code splitting</li>
                  <li>Tree shaking for minimal bundle size</li>
                  <li>Image optimization</li>
                  <li>Lazy loading components</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Cpu className="h-6 w-6 mb-2" />
              <CardTitle>Server Components</CardTitle>
              <CardDescription>React Server Components for optimal client-side performance.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Zero client-side JavaScript by default</li>
                  <li>Streaming server rendering</li>
                  <li>Selective hydration</li>
                  <li>Reduced client bundle size</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "Security",
      description: "Enterprise-grade security for businesses of all sizes",
      icon: <Shield className="h-6 w-6" />,
      content: (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Lock className="h-6 w-6 mb-2" />
              <CardTitle>Authentication</CardTitle>
              <CardDescription>Secure authentication systems to protect user accounts.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>OAuth 2.0 integration</li>
                  <li>JWT token management</li>
                  <li>Two-factor authentication</li>
                  <li>Role-based access control</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Shield className="h-6 w-6 mb-2" />
              <CardTitle>Data Protection</CardTitle>
              <CardDescription>Comprehensive data security measures to keep information safe.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>End-to-end encryption</li>
                  <li>GDPR compliance</li>
                  <li>Data anonymization</li>
                  <li>Secure data storage</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Globe className="h-6 w-6 mb-2" />
              <CardTitle>Network Security</CardTitle>
              <CardDescription>Protection against common web vulnerabilities and attacks.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>DDoS protection</li>
                  <li>XSS and CSRF prevention</li>
                  <li>SQL injection protection</li>
                  <li>Regular security audits</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
    },
    {
      title: "Reliability",
      description: "Rock-solid infrastructure that scales with your business",
      icon: <Database className="h-6 w-6" />,
      content: (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Database className="h-6 w-6 mb-2" />
              <CardTitle>Scalable Architecture</CardTitle>
              <CardDescription>Systems designed to handle growth and traffic spikes.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Horizontal scaling</li>
                  <li>Load balancing</li>
                  <li>Auto-scaling resources</li>
                  <li>Microservices architecture</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Cpu className="h-6 w-6 mb-2" />
              <CardTitle>Redundancy</CardTitle>
              <CardDescription>Multiple layers of redundancy to prevent downtime.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Multi-region deployment</li>
                  <li>Database replication</li>
                  <li>Failover systems</li>
                  <li>Disaster recovery planning</li>
                </ul>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-black border border-white/10">
            <CardHeader>
              <Rocket className="h-6 w-6 mb-2" />
              <CardTitle>Monitoring</CardTitle>
              <CardDescription>Comprehensive monitoring and alerting systems.</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-sm text-white/70">
                <ul className="list-disc pl-4 space-y-2">
                  <li>Real-time performance metrics</li>
                  <li>Error tracking and reporting</li>
                  <li>Uptime monitoring</li>
                  <li>Proactive issue resolution</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      ),
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
                TECH STACK & CAPABILITIES
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Cutting-Edge Technology</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                Our tech stack is carefully selected for performance, reliability, and security. We use the latest
                technologies to build websites that are fast, secure, and scalable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Tabs Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <Tabs defaultValue="performance" className="w-full">
            <div className="flex justify-center mb-8">
              <TabsList className="bg-white/5 border border-white/10">
                {features.map((feature) => (
                  <TabsTrigger
                    key={feature.title.toLowerCase()}
                    value={feature.title.toLowerCase()}
                    className="data-[state=active]:bg-white/10"
                  >
                    <div className="flex items-center gap-2">
                      {feature.icon}
                      <span>{feature.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            {features.map((feature) => (
              <TabsContent key={feature.title.toLowerCase()} value={feature.title.toLowerCase()} className="mt-6">
                <div className="flex flex-col items-center text-center space-y-4 mb-12">
                  <h2 className="text-3xl font-bold tracking-tighter">{feature.title}</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[700px]">{feature.description}</p>
                </div>
                {feature.content}
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Tech Stack Grid */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              THE TOOLS WE USE
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Our Technology Stack</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              We use the latest technologies to build websites that are fast, secure, and scalable.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {[
              { name: "Next.js 15", description: "The React framework for production" },
              { name: "React 19", description: "A JavaScript library for building user interfaces" },
              { name: "TypeScript 5", description: "Typed JavaScript at any scale" },
              { name: "Tailwind CSS 4", description: "A utility-first CSS framework" },
              { name: "Node.js", description: "JavaScript runtime built on Chrome's V8 engine" },
              { name: "MongoDB", description: "Document-based, distributed database" },
              { name: "Express", description: "Fast, unopinionated, minimalist web framework" },
              { name: "Redux", description: "A predictable state container for JavaScript apps" },
              { name: "JWT", description: "JSON Web Tokens for secure authentication" },
              { name: "Material UI", description: "React components for faster development" },
              { name: "Python", description: "Programming language for data and automation" },
              { name: "Vercel", description: "Platform for frontend frameworks and static sites" },
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="p-6 border border-white/10 rounded-lg bg-white/5 hover:bg-white/10 transition-colors"
              >
                <h3 className="text-lg font-bold mb-2">{tech.name}</h3>
                <p className="text-sm text-white/70">{tech.description}</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to build your next project?</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Let's create something amazing together with our cutting-edge tech stack.
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
