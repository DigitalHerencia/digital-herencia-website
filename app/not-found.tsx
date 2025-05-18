"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"

// Create a client component that uses useSearchParams
function SearchParamsComponent() {
  const searchParams = useSearchParams()
  // Use searchParams here
  return <div>{/* Your component content */}</div>
}

// In your main component, wrap it in Suspense
export default function NotFound() {
  return (
    <div>
      <h1>404 - Page Not Found</h1>
      <Suspense fallback={<div>Loading search params...</div>}>
        <SearchParamsComponent />
      </Suspense>
      {/* Rest of your 404 page */}
    </div>
  )
}
