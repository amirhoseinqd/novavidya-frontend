import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"

const featuredPosts = [
  {
    slug: "future-of-ai-in-business-2024",
    title: "The Future of AI in Business: Trends to Watch in 2024",
    excerpt:
      "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage.",
    author: "Sarah Chen",
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "AI Trends",
    image: "/placeholder.svg?height=200&width=400&query=AI technology futuristic business",
  },
  {
    slug: "smart-automation-cost-reduction",
    title: "How We Reduced Client Costs by 40% with Smart Automation",
    excerpt:
      "A deep dive into our recent project where we implemented intelligent automation solutions that dramatically reduced operational costs for a manufacturing client.",
    author: "Michael Rodriguez",
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Case Study",
    image: "/placeholder.svg?height=200&width=400&query=automation manufacturing robots",
  },
  {
    slug: "ethical-ai-responsible-development",
    title: "Building Ethical AI: Our Approach to Responsible Development",
    excerpt:
      "Learn about NovaVidya's commitment to ethical AI development and the frameworks we use to ensure our solutions are fair, transparent, and beneficial.",
    author: "Dr. Emily Watson",
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Ethics",
    image: "/placeholder.svg?height=200&width=400&query=ethical AI development team",
  },
]

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Latest Insights</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends in AI, software development, and digital transformation through our
            expert insights and case studies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Link key={index} href={`/blog/${post.slug}`}>
              <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {post.category}
                    </Badge>
                  </div>
                </div>

                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-semibold line-clamp-2 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="pt-0">
                  <CardDescription className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</CardDescription>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1 text-sm text-gray-500">
                      <Calendar className="h-4 w-4" />
                      <span>{post.date}</span>
                    </div>

                    <Button variant="ghost" size="sm" className="group-hover:text-blue-600 p-0">
                      Read More
                      <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/blog">
            <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:border-blue-300">
              View All Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
