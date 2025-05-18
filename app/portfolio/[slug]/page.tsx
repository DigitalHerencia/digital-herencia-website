import PortfolioDetailPageClient from "./PortfolioDetailPageClient"

// Add generateStaticParams function for static export
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter
  return [
    { slug: "competitive-advantage" },
    { slug: "wedding-planner" },
    { slug: "court-jester" },
    { slug: "signal-bridge" },
    { slug: "drama-drops" },
    { slug: "design-system-utility" },
    { slug: "hustlers-code" },
    { slug: "free-the-homie" },
  ]
}

export default function PortfolioDetailPage() {
  return <PortfolioDetailPageClient />
}
