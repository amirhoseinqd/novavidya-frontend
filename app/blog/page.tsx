import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, User, ArrowRight, Clock } from "lucide-react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

const blogPosts = [
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
  {
    slug: "ai-integration-process",
    title: "From Concept to Deployment: Our AI Integration Process",
    excerpt:
      "Take a behind-the-scenes look at how we transform client ideas into fully functional AI-powered solutions, from initial consultation to final deployment.",
    author: "David Kim",
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Process",
    image: "/placeholder.svg?height=200&width=400&query=software development process workflow",
  },
  {
    slug: "machine-learning-healthcare",
    title: "Machine Learning in Healthcare: Opportunities and Challenges",
    excerpt:
      "Examining the potential of ML in healthcare applications, including diagnostic tools, treatment optimization, and patient care improvements.",
    author: "Dr. Lisa Thompson",
    date: "November 20, 2024",
    readTime: "10 min read",
    category: "Healthcare",
    image: "/placeholder.svg?height=200&width=400&query=healthcare technology medical AI",
  },
  {
    slug: "canadian-ai-adoption",
    title: "Why Canadian Businesses Are Leading in AI Adoption",
    excerpt:
      "Discover how Canadian companies are embracing AI technologies and what makes the Canadian tech ecosystem particularly well-suited for AI innovation.",
    author: "James Wilson",
    date: "November 15, 2024",
    readTime: "4 min read",
    category: "Industry",
    image: "/placeholder.svg?height=200&width=400&query=Canadian technology innovation AI",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">NovaVidya Blog</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Insights, trends, and expert perspectives on AI, software development, and digital transformation.
              </p>
            </div>
          </div>
        </div>

        {/* Blog Posts */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <Link key={index} href={`/blog/${post.slug}`}>
                <Card className="hover:shadow-lg transition-all duration-300 group cursor-pointer h-full">
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

                  <CardContent className="pt-0 flex-1 flex flex-col">
                    <CardDescription className="text-gray-600 mb-4 line-clamp-3 flex-1">{post.excerpt}</CardDescription>

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
            <Button size="lg" variant="outline" className="hover:bg-blue-50 hover:border-blue-300">
              Load More Posts
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
