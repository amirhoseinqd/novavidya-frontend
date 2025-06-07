"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  ArrowLeft,
  Calendar,
  Clock,
  Bookmark,
  ThumbsUp,
  MessageCircle,
  Twitter,
  Linkedin,
  Facebook,
  Link,
} from "lucide-react"

interface BlogPostProps {
  onBack?: () => void
}

export default function BlogPost({ onBack }: BlogPostProps) {
  const [isBookmarked, setIsBookmarked] = useState(false)
  const [likes, setLikes] = useState(42)
  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
    setLikes(isLiked ? likes - 1 : likes + 1)
  }

  const relatedPosts = [
    {
      title: "How We Reduced Client Costs by 40% with Smart Automation",
      excerpt: "A deep dive into our recent project where we implemented intelligent automation solutions...",
      readTime: "7 min read",
      image: "/placeholder.svg?height=150&width=250&query=automation manufacturing robots",
    },
    {
      title: "Building Ethical AI: Our Approach to Responsible Development",
      excerpt: "Learn about NovaVidya's commitment to ethical AI development and the frameworks we use...",
      readTime: "6 min read",
      image: "/placeholder.svg?height=150&width=250&query=ethical AI development team",
    },
    {
      title: "Machine Learning in Healthcare: Opportunities and Challenges",
      excerpt: "Examining the potential of ML in healthcare applications, including diagnostic tools...",
      readTime: "10 min read",
      image: "/placeholder.svg?height=150&width=250&query=healthcare technology medical AI",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Button variant="ghost" onClick={onBack} className="mb-4 hover:bg-gray-100">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Article Header */}
        <header className="mb-8">
          <div className="mb-4">
            <Badge variant="secondary" className="mb-4">
              AI Trends
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            The Future of AI in Business: Trends to Watch in 2024
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these
            technologies for competitive advantage in an increasingly digital world.
          </p>

          {/* Meta Information */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div className="flex items-center space-x-4">
              <Avatar className="h-12 w-12">
                <AvatarImage src="/placeholder.svg?height=48&width=48&query=professional woman author" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold text-gray-900">Sarah Chen</p>
                <p className="text-sm text-gray-500">Senior AI Researcher</p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-500">
              <div className="flex items-center space-x-1">
                <Calendar className="h-4 w-4" />
                <span>December 15, 2024</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>5 min read</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
            <div className="flex items-center space-x-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleLike}
                className={`${isLiked ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}
              >
                <ThumbsUp className={`h-4 w-4 mr-1 ${isLiked ? "fill-current" : ""}`} />
                {likes}
              </Button>

              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <MessageCircle className="h-4 w-4 mr-1" />
                12
              </Button>

              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`${isBookmarked ? "text-blue-600" : "text-gray-600"} hover:text-blue-600`}
              >
                <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-current" : ""}`} />
              </Button>
            </div>

            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 mr-2">Share:</span>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <Linkedin className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                <Link className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-8">
          <img
            src="/placeholder.svg?height=400&width=800&query=AI technology futuristic business dashboard"
            alt="AI technology in business"
            className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-gray-700 leading-relaxed mb-6">
            Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how
            businesses operate, compete, and serve their customers. As we move through 2024, several key trends are
            emerging that will define the next phase of AI adoption in the business world.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Generative AI Goes Mainstream</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The breakthrough success of large language models has opened the floodgates for generative AI applications
            across industries. From content creation to code generation, businesses are finding innovative ways to
            leverage these powerful tools to enhance productivity and creativity.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. AI-Powered Automation at Scale</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Intelligent process automation is moving beyond simple rule-based systems to sophisticated AI-driven
            workflows that can handle complex decision-making. This shift is enabling businesses to automate entire
            processes that previously required human intervention.
          </p>

          <blockquote className="border-l-4 border-blue-500 pl-6 my-8 italic text-gray-700 bg-blue-50 py-4 rounded-r-lg">
            "The companies that will thrive in the next decade are those that can successfully integrate AI into their
            core business processes while maintaining the human touch that customers value."
          </blockquote>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Ethical AI and Responsible Development</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            As AI becomes more prevalent, businesses are increasingly focused on developing and deploying AI systems
            responsibly. This includes ensuring fairness, transparency, and accountability in AI decision-making
            processes.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Edge AI and Real-Time Processing</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The push for real-time AI processing is driving the adoption of edge computing solutions. This trend is
            particularly important for applications requiring immediate responses, such as autonomous vehicles,
            industrial IoT, and augmented reality experiences.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Looking Ahead</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The AI landscape in 2024 is characterized by rapid innovation, increased accessibility, and growing emphasis
            on responsible development. Businesses that can navigate these trends effectively will be well-positioned to
            leverage AI for competitive advantage while building trust with their customers and stakeholders.
          </p>

          <p className="text-gray-700 leading-relaxed">
            At NovaVidya, we're committed to helping businesses navigate this exciting landscape by providing
            cutting-edge AI solutions that are both powerful and responsible. Our team of experts stays at the forefront
            of these trends to ensure our clients can leverage the latest AI capabilities for their unique business
            needs.
          </p>
        </div>

        {/* Author Bio */}
        <Card className="mb-12">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src="/placeholder.svg?height=64&width=64&query=professional woman author" />
                <AvatarFallback>SC</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Chen</h3>
                <p className="text-gray-600 mb-3">
                  Sarah is a Senior AI Researcher at NovaVidya with over 8 years of experience in machine learning and
                  artificial intelligence. She specializes in natural language processing and has published numerous
                  papers on AI ethics and responsible development.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">
                    <Twitter className="h-4 w-4 mr-1" />
                    Follow
                  </Button>
                  <Button variant="outline" size="sm">
                    <Linkedin className="h-4 w-4 mr-1" />
                    Connect
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Related Posts */}
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 line-clamp-2">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-500 flex items-center">
                      <Clock className="h-3 w-3 mr-1" />
                      {post.readTime}
                    </span>
                    <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </article>
    </div>
  )
}
