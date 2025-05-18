"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { BarChart3, Calendar, ChevronDown, Code, FileText, Menu, MessageSquare, Truck } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleDropdown = (href: string) => {
    setOpenDropdown(openDropdown === href ? null : href)
  }

  const navItems = [
    {
      name: "Services",
      href: "/services",
      dropdown: true,
      items: [
        {
          name: "Data Analytics Dashboards",
          href: "/services/data-analytics-dashboards",
          icon: <BarChart3 className="h-4 w-4 mr-2" />,
        },
        {
          name: "Event Management Systems",
          href: "/services/event-management-systems",
          icon: <Calendar className="h-4 w-4 mr-2" />,
        },
        {
          name: "Legal & Administrative Solutions",
          href: "/services/legal-administrative-solutions",
          icon: <FileText className="h-4 w-4 mr-2" />,
        },
        {
          name: "Secure Communication Platforms",
          href: "/services/secure-communication-platforms",
          icon: <MessageSquare className="h-4 w-4 mr-2" />,
        },
        {
          name: "Fleet & Logistics Management",
          href: "/services/fleet-logistics-management",
          icon: <Truck className="h-4 w-4 mr-2" />,
        },
        {
          name: "Design Systems & Developer Tools",
          href: "/services/design-systems-developer-tools",
          icon: <Code className="h-4 w-4 mr-2" />,
        },
      ],
    },
    { name: "Features", href: "/features" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/80 backdrop-blur-md border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="container px-6 md:px-10 lg:px-12 relative">
        <div className="flex flex-row h-16 items-center justify-between py-2 px-2">
          <Link href="/" className="flex items-center text-lg font-bold">
            <Code className="h-5 w-5 mr-2" />
            <span className="font-mono tracking-tight">DIGITAL HERENCIA</span>
          </Link>

          <nav className="hidden lg:flex gap-8 mx-auto" role="navigation" aria-label="Main navigation">
            {navItems.map((item) =>
              item.dropdown ? (
                <DropdownMenu key={item.href}>
                  <DropdownMenuTrigger asChild>
                    <button
                      className={`text-sm font-medium transition-colors hover:text-white flex items-center gap-1 ${
                        pathname.includes(item.href) ? "text-white" : "text-white/70"
                      }`}
                      aria-expanded="false"
                      aria-label={`${item.name} menu`}
                    >
                      {item.name}
                      <ChevronDown className="h-4 w-4" aria-hidden="true" />
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="center" className="bg-black/90 backdrop-blur-md border-white/10 w-56">
                    {item.items?.map((subItem) => (
                      <DropdownMenuItem key={subItem.href} asChild>
                        <Link
                          href={subItem.href}
                          className="flex items-center cursor-pointer hover:bg-white/10 focus:bg-white/10 px-4 py-2"
                        >
                          {subItem.icon}
                          {subItem.name}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-sm font-medium transition-colors hover:text-white ${
                    pathname === item.href ? "text-white" : "text-white/70"
                  }`}
                  aria-current={pathname === item.href ? "page" : undefined}
                >
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="flex items-center gap-4">
            <Button asChild className="hidden lg:inline-flex">
              <Link href="/contact">Get Started</Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="lg:hidden h-10 w-10 rounded-full border-white/20 hover:bg-white/10 transition-colors"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black/95 backdrop-blur-md border-white/10 p-0 w-[300px] sm:w-[350px]"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-white/10">
                    <Link href="/" className="flex items-center gap-2 text-lg font-bold">
                      <Code className="h-6 w-6" />
                      <span className="font-mono tracking-tight">DIGITAL HERENCIA</span>
                    </Link>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon" className="rounded-full h-8 w-8 hover:bg-white/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M18 6 6 18" />
                          <path d="m6 6 12 12" />
                        </svg>
                        <span className="sr-only">Close</span>
                      </Button>
                    </SheetTrigger>
                  </div>

                  <div className="flex-1 overflow-auto py-4 px-2">
                    <nav className="flex flex-col gap-1" role="navigation" aria-label="Mobile navigation">
                      {navItems.map((item, idx) =>
                        item.dropdown ? (
                          <div key={item.href} className="mb-2">
                            <button
                              onClick={() => toggleDropdown(item.href)}
                              className={`w-full py-3 px-4 text-base font-medium rounded-md transition-all duration-200 flex items-center justify-between ${
                                pathname.includes(item.href)
                                  ? "bg-white/10 text-white"
                                  : "text-white/80 hover:bg-white/5 hover:text-white"
                              }`}
                              aria-expanded={openDropdown === item.href}
                              aria-controls={`dropdown-${item.href.replace(/\//g, "-")}`}
                              aria-label={`${item.name} menu`}
                            >
                              {item.name}
                              <ChevronDown
                                className={`h-4 w-4 opacity-70 transition-transform duration-200 ${
                                  openDropdown === item.href ? "transform rotate-180" : ""
                                }`}
                                aria-hidden="true"
                              />
                            </button>
                            {openDropdown === item.href && (
                              <div
                                id={`dropdown-${item.href.replace(/\//g, "-")}`}
                                className="mt-1 ml-3 border-l border-white/10 pl-4 py-1 space-y-1"
                                role="menu"
                                aria-labelledby={`dropdown-button-${item.href.replace(/\//g, "-")}`}
                              >
                                {item.items?.map((subItem) => (
                                  <Link
                                    key={subItem.href}
                                    href={subItem.href}
                                    className={`py-2 px-3 text-sm font-medium rounded-md transition-all duration-200 flex items-center ${
                                      pathname === subItem.href
                                        ? "text-white bg-white/5"
                                        : "text-white/70 hover:text-white hover:bg-white/5"
                                    }`}
                                    role="menuitem"
                                    aria-current={pathname === subItem.href ? "page" : undefined}
                                  >
                                    <span className="bg-white/5 p-1 rounded-md mr-2" aria-hidden="true">
                                      {subItem.icon}
                                    </span>
                                    {subItem.name}
                                  </Link>
                                ))}
                              </div>
                            )}
                          </div>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`py-3 px-4 text-base font-medium rounded-md transition-all duration-200 ${
                              pathname === item.href
                                ? "bg-white/10 text-white"
                                : "text-white/80 hover:bg-white/5 hover:text-white"
                            }`}
                            aria-current={pathname === item.href ? "page" : undefined}
                          >
                            {item.name}
                          </Link>
                        ),
                      )}
                    </nav>
                  </div>

                  <div className="p-4 border-t border-white/10">
                    <Button
                      asChild
                      className="w-full bg-white text-black hover:bg-white/90 transition-all duration-200"
                    >
                      <Link href="/contact" className="flex items-center justify-center gap-2">
                        Get Started
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </Link>
                    </Button>

                    <div className="flex justify-center gap-4 mt-6">
                      <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-white/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                          <path d="M9 18c-4.51 2-5-2-7-2" />
                        </svg>
                        <span className="sr-only">GitHub</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-white/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                        </svg>
                        <span className="sr-only">Twitter</span>
                      </Button>
                      <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 hover:bg-white/10">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-4 w-4"
                        >
                          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                          <rect width="4" height="12" x="2" y="9" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}
