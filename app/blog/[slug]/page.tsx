import BlogPostClientPage from "./BlogPostClientPage"

// Add generateStaticParams function for static export
export async function generateStaticParams() {
  // Return an array of objects with the slug parameter for all blog posts
  return [
    { slug: "web-dev-ruined-my-life" },
    { slug: "a-love-letter-to-typescript" },
    { slug: "clean-code-dirty-mind" },
    { slug: "asynchronous-love-and-callback-hell" },
    { slug: "competitive-advantage" },
    { slug: "dramadrops" },
    { slug: "court-jester" },
  ]
}

export default function BlogPostPage() {
  return <BlogPostClientPage />
}
