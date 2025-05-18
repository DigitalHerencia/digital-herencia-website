"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { GlitchText } from "@/components/ui/glitch-text"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <div className="text-center space-y-6 max-w-md">
        <div className="text-9xl font-bold mb-4">
          <GlitchText>404</GlitchText>
        </div>
        <h1 className="text-3xl font-bold">Page Not Found</h1>
        <p className="text-white/70 mb-8">
          The page you're looking for doesn't exist or has been moved to another URL.
        </p>
        <Button asChild size="lg">
          <Link href="/">Return Home</Link>
        </Button>
      </div>
    </div>
  )
}
