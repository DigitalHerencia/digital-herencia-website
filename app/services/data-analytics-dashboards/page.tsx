"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { GlitchText } from "@/components/ui/glitch-text"
import { Badge } from "@/components/ui/badge"
import { BarChart3, ChevronRight, LineChart, PieChart, TrendingUp } from "lucide-react"

export default function DataAnalyticsDashboardsPage() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="py-24 bg-black circuit-bg noise-bg relative">
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="flex flex-col space-y-6">
              <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5 w-fit">
                DATA ANALYTICS DASHBOARDS
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Transform Data Into Insights</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                Interactive data visualization platforms that transform complex data into actionable business insights.
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/612c395e-a742-4721-bea0-6749759ecb82-rnafjZcuyU9Cu4Y6T4yPsQrHJyXglC.png"
                  alt="Data Analytics Dashboard Example"
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
              <GlitchText>Dashboard Capabilities</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Powerful features that turn your data into a competitive advantage.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Real-time Analytics",
                description: "Live data updates that provide instant insights into your business performance.",
                icon: <TrendingUp className="h-8 w-8" />,
              },
              {
                title: "Interactive Visualizations",
                description: "Dynamic charts and graphs that allow users to explore data from multiple angles.",
                icon: <BarChart3 className="h-8 w-8" />,
              },
              {
                title: "Custom Reporting",
                description: "Tailored reports that focus on the metrics that matter most to your business.",
                icon: <PieChart className="h-8 w-8" />,
              },
              {
                title: "Predictive Insights",
                description: "Advanced algorithms that identify trends and forecast future performance.",
                icon: <LineChart className="h-8 w-8" />,
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
              How our data analytics dashboards solve problems across different industries.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                industry: "Retail & E-commerce",
                description:
                  "Track sales performance, inventory levels, and customer behavior to optimize your retail operations.",
                tags: ["Sales Analytics", "Inventory Management", "Customer Insights"],
              },
              {
                industry: "Healthcare",
                description:
                  "Monitor patient outcomes, resource utilization, and operational efficiency in healthcare settings.",
                tags: ["Patient Analytics", "Resource Tracking", "Compliance Monitoring"],
              },
              {
                industry: "Cannabis Market",
                description:
                  "Analyze market trends, track dispensary performance, and monitor regulatory compliance in the cannabis industry.",
                tags: ["Market Analysis", "Dispensary Metrics", "Compliance Tracking"],
              },
              {
                industry: "Finance",
                description:
                  "Visualize financial performance, risk factors, and market trends to make informed investment decisions.",
                tags: ["Financial Reporting", "Risk Analysis", "Market Intelligence"],
              },
              {
                industry: "Manufacturing",
                description:
                  "Track production efficiency, quality metrics, and supply chain performance to optimize operations.",
                tags: ["Production Analytics", "Quality Control", "Supply Chain Visibility"],
              },
              {
                industry: "Education",
                description:
                  "Monitor student performance, resource allocation, and institutional metrics to improve educational outcomes.",
                tags: ["Student Analytics", "Resource Management", "Institutional Metrics"],
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
              <GlitchText>Dashboard Development Process</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Our structured methodology for creating powerful data analytics solutions.
            </p>
          </div>

          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                step: "01",
                title: "Data Assessment",
                description:
                  "We begin by understanding your data sources, quality, and structure. This includes identifying key metrics, KPIs, and the questions you need your data to answer.",
              },
              {
                step: "02",
                title: "Dashboard Design",
                description:
                  "Our designers create wireframes and mockups of your dashboard, focusing on intuitive layouts, effective data visualization, and user experience that makes complex data easy to understand.",
              },
              {
                step: "03",
                title: "Development & Integration",
                description:
                  "Our developers build your dashboard using modern frameworks, ensuring it integrates seamlessly with your existing systems and data sources while maintaining optimal performance.",
              },
              {
                step: "04",
                title: "Testing & Refinement",
                description:
                  "We rigorously test the dashboard for accuracy, performance, and usability, making refinements based on your feedback to ensure it meets your specific business needs.",
              },
              {
                step: "05",
                title: "Deployment & Training",
                description:
                  "Once approved, we deploy your dashboard and provide comprehensive training to ensure your team can effectively use and maintain the system.",
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
              See how our data analytics solutions deliver real-world results.
            </p>
          </div>

          <Card className="bg-black border border-white/10 cyberpunk-border overflow-hidden">
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-video md:aspect-auto">
                  <Image
                    src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/612c395e-a742-4721-bea0-6749759ecb82-rnafjZcuyU9Cu4Y6T4yPsQrHJyXglC.png"
                    alt="NM Cannabis Analytics Dashboard"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <Badge className="w-fit mb-4" variant="outline">
                    Cannabis Industry
                  </Badge>
                  <h3 className="text-2xl font-bold mb-4">New Mexico Cannabis Market Analytics</h3>
                  <p className="text-white/70 mb-6">
                    We developed a comprehensive analytics dashboard for tracking cannabis market performance across New
                    Mexico, providing dispensary owners and industry stakeholders with real-time insights into sales
                    trends, regional performance, and competitive analysis.
                  </p>
                  <div className="space-y-2 mb-6">
                    <p className="font-medium">Key Results:</p>
                    <ul className="list-disc pl-5 text-white/70 space-y-1">
                      <li>20% increase in inventory optimization</li>
                      <li>15% improvement in sales forecasting accuracy</li>
                      <li>Real-time visibility into market trends and competitor performance</li>
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
                    Digital Herencia's analytics dashboard transformed how we understand our market. We now have
                    real-time insights that drive our business decisions and have seen a significant improvement in our
                    inventory management and sales forecasting.
                  </p>
                  <div className="mt-6">
                    <p className="font-bold">Sarah Johnson</p>
                    <p className="text-white/50 text-sm">CEO, Green Wellness Dispensary</p>
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
                    Ready to harness the power of your data?
                  </h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Let's create a custom analytics dashboard that transforms your data into actionable insights.
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
