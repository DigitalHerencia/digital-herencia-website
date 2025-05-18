"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GlitchText } from "@/components/ui/glitch-text"
import { Badge } from "@/components/ui/badge"
import { Check, ChevronRight, HelpCircle, Zap } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("monthly")

  const pricingTiers = [
    {
      name: "Startup",
      description: "Perfect for small businesses and startups looking to establish an online presence.",
      price: {
        monthly: 2499,
        yearly: 2199 * 12,
      },
      features: [
        "5-page responsive website",
        "Mobile-optimized design",
        "Basic SEO setup",
        "Contact form",
        "Social media integration",
        "Google Analytics",
        "1 month of support",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Business",
      description: "Ideal for growing businesses that need more advanced features and functionality.",
      price: {
        monthly: 4999,
        yearly: 4499 * 12,
      },
      features: [
        "10-page responsive website",
        "Custom animations",
        "Advanced SEO optimization",
        "Content management system",
        "E-commerce functionality (up to 50 products)",
        "Email newsletter integration",
        "Performance optimization",
        "3 months of support",
      ],
      cta: "Get Started",
      popular: true,
    },
    {
      name: "Enterprise",
      description: "For established businesses requiring custom solutions and advanced functionality.",
      price: {
        monthly: 9999,
        yearly: 8999 * 12,
      },
      features: [
        "Unlimited pages",
        "Custom web application development",
        "Advanced e-commerce (unlimited products)",
        "User authentication system",
        "Custom database integration",
        "API development",
        "Advanced analytics dashboard",
        "Performance optimization",
        "6 months of priority support",
        "Dedicated project manager",
      ],
      cta: "Contact Us",
      popular: false,
    },
  ]

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 0,
    }).format(price)
  }

  const calculateMonthly = (price: number) => {
    return formatPrice(price)
  }

  const calculateYearly = (price: number) => {
    return formatPrice(price)
  }

  const calculateSavings = (monthly: number, yearly: number) => {
    const monthlyCost = monthly * 12
    const yearlyCost = yearly
    const savings = monthlyCost - yearlyCost
    const percentage = Math.round((savings / monthlyCost) * 100)
    return `Save ${percentage}%`
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
                TRANSPARENT PRICING
              </div>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tighter">
                <GlitchText>Investment Tiers</GlitchText>
              </h1>
              <p className="text-white/70 md:text-xl/relaxed">
                Competitive rates for exceptional web development services in the Southwest.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-8 mb-12">
            <Tabs
              defaultValue="monthly"
              value={billingCycle}
              onValueChange={(value) => setBillingCycle(value as "monthly" | "yearly")}
              className="w-full max-w-md"
            >
              <TabsList className="grid w-full grid-cols-2 bg-white/5 border border-white/10">
                <TabsTrigger value="monthly" className="data-[state=active]:bg-white/10">
                  Pay Monthly
                </TabsTrigger>
                <TabsTrigger value="yearly" className="data-[state=active]:bg-white/10">
                  Pay Yearly
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Card
                  className={`bg-black h-full overflow-hidden cyberpunk-border ${
                    tier.popular ? "border-white/30 ring-1 ring-white/20 shadow-lg shadow-white/5" : "border-white/10"
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute top-0 right-0">
                      <Badge className="rounded-tl-none rounded-tr-none rounded-br-none m-0 bg-white text-black font-medium">
                        Most Popular
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="text-xl">{tier.name}</CardTitle>
                    <p className="text-white/70 text-sm mt-2">{tier.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex items-baseline">
                        <span className="text-4xl font-bold">
                          {billingCycle === "monthly"
                            ? calculateMonthly(tier.price.monthly)
                            : calculateYearly(tier.price.yearly)}
                        </span>
                        {billingCycle === "monthly" ? (
                          <span className="text-white/70 ml-2">/project</span>
                        ) : (
                          <span className="text-white/70 ml-2">/year</span>
                        )}
                      </div>
                      {billingCycle === "yearly" && (
                        <div className="flex items-center">
                          <Zap className="h-4 w-4 mr-1 text-white/70" />
                          <span className="text-sm text-white/70">
                            {calculateSavings(tier.price.monthly, tier.price.yearly)}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="space-y-3">
                      {tier.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start">
                          <Check className="h-5 w-5 mr-3 text-white/70 shrink-0 mt-0.5" />
                          <span className="text-sm text-white/90">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      asChild
                      className={`w-full ${tier.popular ? "" : "bg-white/10 hover:bg-white/20 text-white"}`}
                      variant={tier.popular ? "default" : "outline"}
                    >
                      <Link href="/contact" className="group">
                        {tier.cta}
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Projects Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-black border border-white/20 cyberpunk-border overflow-hidden">
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col items-center text-center space-y-6">
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Need a Custom Solution?</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Every business is unique. Contact me for a personalized quote tailored to your specific
                    requirements.
                  </p>
                  <Button asChild size="lg" className="mt-4 group">
                    <Link href="/contact">
                      Request Custom Quote
                      <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black grid-bg noise-bg">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              FREQUENTLY ASKED QUESTIONS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>Pricing FAQ</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Common questions about pricing and services.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            {[
              {
                question: "Do you offer payment plans?",
                answer:
                  "Yes, I offer flexible payment plans for all projects. Typically, this includes a 50% deposit to begin work, with the remaining balance due upon completion. For larger projects, we can arrange milestone-based payments.",
              },
              {
                question: "What's included in the pricing?",
                answer:
                  "All pricing includes design, development, testing, and the specified support period. It also includes basic training on how to use and update your website or application.",
              },
              {
                question: "Do you charge for revisions?",
                answer:
                  "Each project includes two rounds of revisions. Additional revisions are billed at an hourly rate of $125/hour, but I'll always discuss this with you before proceeding with extra work.",
              },
              {
                question: "Are there any ongoing costs?",
                answer:
                  "The project fee doesn't include ongoing costs such as domain registration, hosting, or third-party services. I can recommend affordable options and help set these up for you.",
              },
              {
                question: "How long does a typical project take?",
                answer:
                  "Project timelines vary based on complexity. Startup projects typically take 4-6 weeks, Business projects 8-12 weeks, and Enterprise projects 12-16 weeks or more.",
              },
              {
                question: "What if I need additional features later?",
                answer:
                  "I'm happy to add features to your project after launch. These are typically quoted separately based on the specific requirements and complexity.",
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
                <div className="flex items-start gap-2">
                  <h3 className="text-lg font-bold">{faq.question}</h3>
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-white/50 shrink-0 mt-1" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="max-w-xs text-sm">Click to expand</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </div>
                <p className="text-white/70 mt-2">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-black noise-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(0,0,0,0)_70%)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-4 mb-12">
            <div className="inline-block p-1 px-3 border border-white/10 rounded-full text-xs font-mono mb-4 bg-white/5">
              VALUE COMPARISON
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <GlitchText>How We Compare</GlitchText>
            </h2>
            <p className="max-w-[700px] text-white/70 md:text-xl/relaxed">
              Digital Herencia offers premium quality at competitive rates for the Southwest region.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-4 px-6 text-left font-medium text-lg">Service</th>
                  <th className="py-4 px-6 text-center font-medium text-lg">
                    Average Agency
                    <span className="block text-sm font-normal text-white/50">Southwest Region</span>
                  </th>
                  <th className="py-4 px-6 text-center font-medium text-lg">
                    Freelancer
                    <span className="block text-sm font-normal text-white/50">Variable Quality</span>
                  </th>
                  <th className="py-4 px-6 text-center font-medium text-lg">
                    Digital Herencia
                    <span className="block text-sm font-normal text-white/50">Premium Quality</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/90">Basic Website (5 pages)</td>
                  <td className="py-4 px-6 text-center text-white/70">$3,000 - $5,000</td>
                  <td className="py-4 px-6 text-center text-white/70">$1,500 - $3,000</td>
                  <td className="py-4 px-6 text-center font-medium">$2,499</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/90">Business Website (10 pages)</td>
                  <td className="py-4 px-6 text-center text-white/70">$5,000 - $10,000</td>
                  <td className="py-4 px-6 text-center text-white/70">$3,000 - $6,000</td>
                  <td className="py-4 px-6 text-center font-medium">$4,999</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/90">E-commerce Website</td>
                  <td className="py-4 px-6 text-center text-white/70">$8,000 - $15,000</td>
                  <td className="py-4 px-6 text-center text-white/70">$5,000 - $10,000</td>
                  <td className="py-4 px-6 text-center font-medium">$4,999 - $9,999</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-4 px-6 text-white/90">Custom Web Application</td>
                  <td className="py-4 px-6 text-center text-white/70">$15,000 - $30,000+</td>
                  <td className="py-4 px-6 text-center text-white/70">$10,000 - $20,000</td>
                  <td className="py-4 px-6 text-center font-medium">$9,999+</td>
                </tr>
                <tr>
                  <td className="py-4 px-6 text-white/90">Hourly Rate (Maintenance)</td>
                  <td className="py-4 px-6 text-center text-white/70">$150 - $200</td>
                  <td className="py-4 px-6 text-center text-white/70">$75 - $125</td>
                  <td className="py-4 px-6 text-center font-medium">$125</td>
                </tr>
              </tbody>
            </table>
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
                  <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Ready to get started?</h2>
                  <p className="text-white/70 md:text-xl/relaxed max-w-[600px]">
                    Let's discuss your project and find the perfect solution for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button asChild size="lg" className="group">
                      <Link href="/contact">
                        Contact Me
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg">
                      <Link href="/portfolio">View My Work</Link>
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
