import type React from "react"
import type { Metadata } from "next"
import ServicesClient from "./ServicesClient"

export const metadata: Metadata = {
  title: "Services | Digital Herencia",
  description: "Specialized web development services for modern businesses by Digital Herencia.",
}

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <ServicesClient>{children}</ServicesClient>
}
