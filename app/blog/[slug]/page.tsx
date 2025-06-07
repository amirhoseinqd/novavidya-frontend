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
  LinkIcon,
} from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"
import Header from "../../components/header"
import Footer from "../../components/footer"

// This would typically come from a database or CMS
const blogPosts = {
  "future-of-ai-in-business-2024": {
    title: "The Future of AI in Business: Trends to Watch in 2024",
    excerpt:
      "Explore the latest AI trends that are reshaping industries and discover how businesses can leverage these technologies for competitive advantage in an increasingly digital world.",
    author: {
      name: "Sarah Chen",
      title: "Senior AI Researcher",
      avatar: "/placeholder.svg?height=64&width=64&query=professional woman author",
      bio: "Sarah is a Senior AI Researcher at NovaVidya with over 8 years of experience in machine learning and artificial intelligence. She specializes in natural language processing and has published numerous papers on AI ethics and responsible development.",
    },
    date: "December 15, 2024",
    readTime: "5 min read",
    category: "AI Trends",
    image: "/placeholder.svg?height=400&width=800&query=AI technology futuristic business dashboard",
    content: `
      <p>Artificial Intelligence is no longer a futuristic concept—it's a present reality that's transforming how businesses operate, compete, and serve their customers. As we move through 2024, several key trends are emerging that will define the next phase of AI adoption in the business world.</p>

      <h2>1. Generative AI Goes Mainstream</h2>
      <p>The breakthrough success of large language models has opened the floodgates for generative AI applications across industries. From content creation to code generation, businesses are finding innovative ways to leverage these powerful tools to enhance productivity and creativity.</p>

      <h2>2. AI-Powered Automation at Scale</h2>
      <p>Intelligent process automation is moving beyond simple rule-based systems to sophisticated AI-driven workflows that can handle complex decision-making. This shift is enabling businesses to automate entire processes that previously required human intervention.</p>

      <blockquote>"The companies that will thrive in the next decade are those that can successfully integrate AI into their core business processes while maintaining the human touch that customers value."</blockquote>

      <h2>3. Ethical AI and Responsible Development</h2>
      <p>As AI becomes more prevalent, businesses are increasingly focused on developing and deploying AI systems responsibly. This includes ensuring fairness, transparency, and accountability in AI decision-making processes.</p>

      <h2>4. Edge AI and Real-Time Processing</h2>
      <p>The push for real-time AI processing is driving the adoption of edge computing solutions. This trend is particularly important for applications requiring immediate responses, such as autonomous vehicles, industrial IoT, and augmented reality experiences.</p>

      <h2>Looking Ahead</h2>
      <p>The AI landscape in 2024 is characterized by rapid innovation, increased accessibility, and growing emphasis on responsible development. Businesses that can navigate these trends effectively will be well-positioned to leverage AI for competitive advantage while building trust with their customers and stakeholders.</p>

      <p>At NovaVidya, we're committed to helping businesses navigate this exciting landscape by providing cutting-edge AI solutions that are both powerful and responsible. Our team of experts stays at the forefront of these trends to ensure our clients can leverage the latest AI capabilities for their unique business needs.</p>
    `,
  },
  "smart-automation-cost-reduction": {
    title: "How We Reduced Client Costs by 40% with Smart Automation",
    excerpt:
      "A deep dive into our recent project where we implemented intelligent automation solutions that dramatically reduced operational costs for a manufacturing client.",
    author: {
      name: "Michael Rodriguez",
      title: "Lead Automation Engineer",
      avatar: "/placeholder.svg?height=64&width=64&query=professional man engineer",
      bio: "Michael is a Lead Automation Engineer at NovaVidya with over 10 years of experience in industrial automation and AI integration. He has successfully led numerous automation projects across manufacturing, logistics, and healthcare sectors.",
    },
    date: "December 10, 2024",
    readTime: "7 min read",
    category: "Case Study",
    image: "/placeholder.svg?height=400&width=800&query=automation manufacturing robots industrial",
    content: `
      <p>When our manufacturing client approached us with rising operational costs and inefficient processes, we knew that intelligent automation could be the solution. Over the course of six months, we implemented a comprehensive AI-powered automation system that not only reduced their costs by 40% but also improved overall productivity and quality.</p>

      <h2>The Challenge</h2>
      <p>Our client, a mid-sized automotive parts manufacturer, was facing several critical challenges: manual quality control processes were slow and error-prone, inventory management was reactive rather than predictive, and production scheduling was based on outdated methods that didn't account for real-time variables.</p>

      <h2>Our Approach</h2>
      <p>We developed a multi-faceted automation solution that addressed each pain point systematically. Our approach combined computer vision for quality control, machine learning for predictive inventory management, and AI-driven scheduling optimization.</p>

      <blockquote>"The transformation was remarkable. Not only did we see immediate cost savings, but our production quality improved significantly, and our team could focus on higher-value tasks." - Manufacturing Director</blockquote>

      <h2>Implementation Phase 1: Intelligent Quality Control</h2>
      <p>We deployed computer vision systems at critical inspection points throughout the production line. These AI-powered cameras could detect defects with 99.7% accuracy, compared to the previous 85% accuracy rate of manual inspection. This alone reduced waste by 25% and eliminated the need for three full-time quality control positions.</p>

      <h2>Implementation Phase 2: Predictive Inventory Management</h2>
      <p>Our machine learning algorithms analyzed historical usage patterns, seasonal trends, and production schedules to predict inventory needs with remarkable accuracy. This reduced inventory holding costs by 30% while eliminating stockouts that previously caused production delays.</p>

      <h2>Implementation Phase 3: AI-Driven Production Scheduling</h2>
      <p>The final piece was an intelligent scheduling system that optimized production runs based on real-time factors including machine availability, material inventory, order priorities, and energy costs. This optimization improved overall equipment effectiveness (OEE) by 22%.</p>

      <h2>Results and Impact</h2>
      <p>The results exceeded our client's expectations. Total operational costs were reduced by 40%, production throughput increased by 18%, and product quality improved significantly. The return on investment was achieved in just 14 months, well ahead of the projected 24-month timeline.</p>

      <p>This project demonstrates the transformative power of intelligent automation when applied thoughtfully and systematically. At NovaVidya, we believe that the best automation solutions don't just replace human workers—they augment human capabilities and create opportunities for more meaningful, strategic work.</p>
    `,
  },
  "ethical-ai-responsible-development": {
    title: "Building Ethical AI: Our Approach to Responsible Development",
    excerpt:
      "Learn about NovaVidya's commitment to ethical AI development and the frameworks we use to ensure our solutions are fair, transparent, and beneficial.",
    author: {
      name: "Dr. Emily Watson",
      title: "Head of AI Ethics",
      avatar: "/placeholder.svg?height=64&width=64&query=professional woman doctor researcher",
      bio: "Dr. Emily Watson leads NovaVidya's AI Ethics initiative and has a PhD in Computer Science with a focus on algorithmic fairness. She has published extensively on responsible AI development and serves on several industry ethics boards.",
    },
    date: "December 5, 2024",
    readTime: "6 min read",
    category: "Ethics",
    image: "/placeholder.svg?height=400&width=800&query=ethical AI development team diverse",
    content: `
      <p>As AI becomes increasingly powerful and pervasive, the responsibility to develop these technologies ethically has never been more critical. At NovaVidya, we've established comprehensive frameworks and practices to ensure that our AI solutions are not only effective but also fair, transparent, and beneficial to society.</p>

      <h2>Our Ethical AI Framework</h2>
      <p>Our approach to ethical AI is built on five core principles: Fairness, Accountability, Transparency, Human-Centricity, and Privacy. These principles guide every decision we make, from initial project conception to final deployment and ongoing monitoring.</p>

      <h2>Fairness and Bias Mitigation</h2>
      <p>We implement rigorous bias testing throughout our development process. This includes diverse dataset curation, algorithmic auditing, and continuous monitoring for discriminatory outcomes. Our teams are trained to recognize and address various forms of bias, including historical, representation, and measurement bias.</p>

      <blockquote>"Ethical AI isn't just about avoiding harm—it's about actively creating systems that promote equity and human flourishing." - Dr. Emily Watson</blockquote>

      <h2>Transparency and Explainability</h2>
      <p>We believe that AI systems should be interpretable and their decision-making processes should be explainable to stakeholders. We use techniques like LIME (Local Interpretable Model-agnostic Explanations) and SHAP (SHapley Additive exPlanations) to make our models more transparent.</p>

      <h2>Human-Centered Design</h2>
      <p>Our AI solutions are designed to augment human capabilities rather than replace human judgment entirely. We ensure that humans remain in control of critical decisions and that our systems provide meaningful ways for human oversight and intervention.</p>

      <h2>Privacy by Design</h2>
      <p>Privacy considerations are integrated into our development process from the beginning, not added as an afterthought. We implement techniques like differential privacy, federated learning, and data minimization to protect individual privacy while still enabling powerful AI capabilities.</p>

      <h2>Continuous Monitoring and Improvement</h2>
      <p>Ethical AI is not a one-time achievement but an ongoing commitment. We implement continuous monitoring systems to detect drift in model performance, changes in data distribution, and potential ethical issues that may emerge over time.</p>

      <p>Building ethical AI requires more than good intentions—it requires systematic processes, ongoing vigilance, and a commitment to putting human welfare at the center of technological advancement. At NovaVidya, we're proud to lead by example in responsible AI development.</p>
    `,
  },
  "ai-integration-process": {
    title: "From Concept to Deployment: Our AI Integration Process",
    excerpt:
      "Take a behind-the-scenes look at how we transform client ideas into fully functional AI-powered solutions, from initial consultation to final deployment.",
    author: {
      name: "David Kim",
      title: "AI Solutions Architect",
      avatar: "/placeholder.svg?height=64&width=64&query=professional asian man architect",
      bio: "David is an AI Solutions Architect at NovaVidya with expertise in system design and AI integration. He has led over 50 successful AI implementation projects and specializes in translating business requirements into technical solutions.",
    },
    date: "November 28, 2024",
    readTime: "8 min read",
    category: "Process",
    image: "/placeholder.svg?height=400&width=800&query=software development process workflow diagram",
    content: `
      <p>Transforming a business idea into a fully functional AI-powered solution requires a systematic approach that balances technical excellence with business objectives. At NovaVidya, we've refined our AI integration process over hundreds of projects to ensure consistent, successful outcomes for our clients.</p>

      <h2>Phase 1: Discovery and Assessment</h2>
      <p>Every successful AI project begins with a thorough understanding of the business problem. We conduct comprehensive stakeholder interviews, analyze existing processes, and assess data availability and quality. This phase typically takes 2-3 weeks and results in a detailed project roadmap.</p>

      <h2>Phase 2: Data Strategy and Preparation</h2>
      <p>Data is the foundation of any AI solution. We work with clients to identify, collect, and prepare the data needed for training and deployment. This includes data cleaning, feature engineering, and establishing data governance practices that will support long-term success.</p>

      <blockquote>"The quality of your AI solution is directly proportional to the quality of your data. We invest heavily in getting this foundation right." - David Kim</blockquote>

      <h2>Phase 3: Model Development and Training</h2>
      <p>With clean, well-structured data in hand, our team begins developing and training AI models. We use an iterative approach, starting with baseline models and progressively improving performance through feature engineering, hyperparameter tuning, and ensemble methods.</p>

      <h2>Phase 4: Integration and Testing</h2>
      <p>AI models don't operate in isolation—they need to integrate seamlessly with existing business systems. We develop robust APIs, implement proper error handling, and conduct extensive testing to ensure reliability and performance under real-world conditions.</p>

      <h2>Phase 5: Deployment and Monitoring</h2>
      <p>Deployment is just the beginning. We implement comprehensive monitoring systems to track model performance, data drift, and business impact. Our deployment strategy includes gradual rollouts, A/B testing, and fallback mechanisms to ensure smooth transitions.</p>

      <h2>Phase 6: Optimization and Scaling</h2>
      <p>Post-deployment, we work with clients to continuously optimize and scale their AI solutions. This includes performance tuning, feature additions, and expansion to new use cases as the business grows and evolves.</p>

      <h2>Our Collaborative Approach</h2>
      <p>Throughout this process, we maintain close collaboration with client teams. We believe in knowledge transfer and capability building, ensuring that our clients can maintain and evolve their AI solutions independently over time.</p>

      <p>This systematic approach has enabled us to deliver successful AI solutions across diverse industries and use cases. By combining technical expertise with business acumen, we help our clients realize the full potential of artificial intelligence.</p>
    `,
  },
  "machine-learning-healthcare": {
    title: "Machine Learning in Healthcare: Opportunities and Challenges",
    excerpt:
      "Examining the potential of ML in healthcare applications, including diagnostic tools, treatment optimization, and patient care improvements.",
    author: {
      name: "Dr. Lisa Thompson",
      title: "Healthcare AI Specialist",
      avatar: "/placeholder.svg?height=64&width=64&query=professional woman doctor healthcare",
      bio: "Dr. Lisa Thompson is a Healthcare AI Specialist at NovaVidya with an MD and PhD in Biomedical Informatics. She has over 12 years of experience in healthcare technology and has led numerous successful ML implementations in clinical settings.",
    },
    date: "November 20, 2024",
    readTime: "10 min read",
    category: "Healthcare",
    image: "/placeholder.svg?height=400&width=800&query=healthcare technology medical AI stethoscope",
    content: `
      <p>Healthcare stands at the forefront of the AI revolution, with machine learning technologies offering unprecedented opportunities to improve patient outcomes, reduce costs, and enhance the efficiency of care delivery. However, the healthcare sector also presents unique challenges that require careful consideration and specialized approaches.</p>

      <h2>Transformative Opportunities</h2>
      <p>Machine learning is revolutionizing healthcare across multiple domains. In diagnostic imaging, AI systems can now detect certain conditions with accuracy that matches or exceeds human specialists. Drug discovery processes that once took decades can now be accelerated through ML-powered molecular analysis and prediction.</p>

      <h2>Diagnostic Excellence</h2>
      <p>AI-powered diagnostic tools are showing remarkable results across various medical specialties. In radiology, deep learning models can identify early-stage cancers, predict stroke risk, and detect fractures with exceptional accuracy. These tools don't replace radiologists but augment their capabilities, allowing them to focus on complex cases while AI handles routine screenings.</p>

      <blockquote>"AI in healthcare isn't about replacing doctors—it's about giving them superpowers to provide better care for more patients." - Dr. Lisa Thompson</blockquote>

      <h2>Personalized Treatment Plans</h2>
      <p>Machine learning enables truly personalized medicine by analyzing vast amounts of patient data to predict treatment responses. By considering genetic factors, medical history, lifestyle, and real-time biomarkers, AI can help clinicians select the most effective treatments for individual patients.</p>

      <h2>Operational Efficiency</h2>
      <p>Beyond clinical applications, ML is optimizing healthcare operations. Predictive models can forecast patient admission rates, optimize staff scheduling, and manage inventory more effectively. These improvements reduce costs and ensure resources are available when and where they're needed most.</p>

      <h2>Unique Healthcare Challenges</h2>
      <p>Healthcare AI faces distinct challenges that don't exist in other industries. Regulatory compliance is paramount, with strict requirements for validation and approval. Patient privacy and data security are critical concerns that require specialized approaches to data handling and model development.</p>

      <h2>Data Quality and Interoperability</h2>
      <p>Healthcare data is often fragmented across different systems and formats. Electronic health records may be incomplete or inconsistent, and integrating data from various sources requires sophisticated data engineering approaches. Ensuring data quality while maintaining patient privacy adds another layer of complexity.</p>

      <h2>Ethical Considerations</h2>
      <p>Healthcare AI must navigate complex ethical terrain. Issues of algorithmic bias can have life-or-death consequences, making fairness and equity paramount. Transparency in AI decision-making is crucial for maintaining trust between patients and healthcare providers.</p>

      <h2>The Path Forward</h2>
      <p>Despite these challenges, the potential benefits of ML in healthcare are too significant to ignore. Success requires collaboration between technologists, clinicians, regulators, and patients. At NovaVidya, we're committed to developing healthcare AI solutions that are not only technically excellent but also ethically sound and clinically meaningful.</p>

      <p>The future of healthcare will be shaped by our ability to harness the power of machine learning while addressing its challenges responsibly. By working together, we can create AI systems that truly serve the goal of better health outcomes for all.</p>
    `,
  },
  "canadian-ai-adoption": {
    title: "Why Canadian Businesses Are Leading in AI Adoption",
    excerpt:
      "Discover how Canadian companies are embracing AI technologies and what makes the Canadian tech ecosystem particularly well-suited for AI innovation.",
    author: {
      name: "James Wilson",
      title: "Market Research Director",
      avatar: "/placeholder.svg?height=64&width=64&query=professional man business analyst",
      bio: "James Wilson is the Market Research Director at NovaVidya, specializing in AI market trends and adoption patterns. He has over 8 years of experience analyzing technology markets and has authored numerous reports on AI adoption across different industries and regions.",
    },
    date: "November 15, 2024",
    readTime: "4 min read",
    category: "Industry",
    image: "/placeholder.svg?height=400&width=800&query=Canadian technology innovation AI maple leaf",
    content: `
      <p>Canada has emerged as a global leader in artificial intelligence adoption, with Canadian businesses consistently ranking among the most AI-forward in international surveys. This leadership position isn't accidental—it's the result of unique advantages that make Canada an ideal environment for AI innovation and implementation.</p>

      <h2>Government Support and Investment</h2>
      <p>The Canadian government has made significant investments in AI research and development through initiatives like the Pan-Canadian Artificial Intelligence Strategy. This $125 million investment has established Canada as a global AI research hub, with world-class institutes in Montreal, Toronto, and Edmonton leading breakthrough research.</p>

      <h2>World-Class Talent Pool</h2>
      <p>Canada's universities consistently produce top-tier AI researchers and practitioners. The presence of AI pioneers like Geoffrey Hinton, Yoshua Bengio, and Richard Sutton has created a culture of excellence that attracts global talent and fosters innovation.</p>

      <blockquote>"Canada's combination of research excellence, government support, and business pragmatism creates the perfect storm for AI adoption." - James Wilson</blockquote>

      <h2>Diverse Industry Applications</h2>
      <p>Canadian businesses across sectors—from natural resources to financial services—are finding innovative ways to apply AI. This diversity of applications has created a robust ecosystem where learnings from one industry can be adapted and applied to others.</p>

      <h2>Regulatory Environment</h2>
      <p>Canada's balanced approach to AI regulation provides clarity for businesses while encouraging innovation. The proposed Artificial Intelligence and Data Act (AIDA) aims to create a framework that promotes responsible AI development without stifling innovation.</p>

      <h2>Cultural Factors</h2>
      <p>Canadian business culture tends to be collaborative and risk-aware, which aligns well with successful AI implementation. Companies are more likely to invest in proper planning, stakeholder engagement, and ethical considerations—factors that contribute to successful AI projects.</p>

      <h2>Success Stories</h2>
      <p>From Shopify's AI-powered e-commerce solutions to Canadian banks' fraud detection systems, success stories abound. These implementations serve as proof points that encourage other businesses to explore AI opportunities.</p>

      <p>As we look to the future, Canada's position as an AI leader seems secure. The combination of research excellence, government support, diverse industry applications, and cultural factors that favor thoughtful technology adoption creates an environment where AI can truly flourish.</p>
    `,
  },
}

const relatedPosts = [
  {
    slug: "smart-automation-cost-reduction",
    title: "How We Reduced Client Costs by 40% with Smart Automation",
    excerpt: "A deep dive into our recent project where we implemented intelligent automation solutions...",
    readTime: "7 min read",
    image: "/placeholder.svg?height=150&width=250&query=automation manufacturing robots",
  },
  {
    slug: "ethical-ai-responsible-development",
    title: "Building Ethical AI: Our Approach to Responsible Development",
    excerpt: "Learn about NovaVidya's commitment to ethical AI development and the frameworks we use...",
    readTime: "6 min read",
    image: "/placeholder.svg?height=150&width=250&query=ethical AI development team",
  },
  {
    slug: "machine-learning-healthcare",
    title: "Machine Learning in Healthcare: Opportunities and Challenges",
    excerpt: "Examining the potential of ML in healthcare applications, including diagnostic tools...",
    readTime: "10 min read",
    image: "/placeholder.svg?height=150&width=250&query=healthcare technology medical AI",
  },
]

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts[params.slug as keyof typeof blogPosts]

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <div className="bg-gray-50">
        {/* Breadcrumb Navigation */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link href="/blog">
              <Button variant="ghost" className="hover:bg-gray-100">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </Button>
            </Link>
          </div>
        </div>

        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div className="flex items-center space-x-4">
                <Avatar className="h-12 w-12">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-semibold text-gray-900">{post.author.name}</p>
                  <p className="text-sm text-gray-500">{post.author.title}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between border-t border-b border-gray-200 py-4 mb-8">
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                  <ThumbsUp className="h-4 w-4 mr-1" />
                  42
                </Button>

                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                  <MessageCircle className="h-4 w-4 mr-1" />
                  12
                </Button>

                <Button variant="ghost" size="sm" className="text-gray-600 hover:text-blue-600">
                  <Bookmark className="h-4 w-4" />
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
                  <LinkIcon className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </header>

          {/* Featured Image */}
          <div className="mb-8">
            <img
              src={post.image || "/placeholder.svg"}
              alt={post.title}
              className="w-full h-64 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none mb-12 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-gray-900 [&>h2]:mt-8 [&>h2]:mb-4 [&>p]:text-gray-700 [&>p]:leading-relaxed [&>p]:mb-6 [&>blockquote]:border-l-4 [&>blockquote]:border-blue-500 [&>blockquote]:pl-6 [&>blockquote]:my-8 [&>blockquote]:italic [&>blockquote]:text-gray-700 [&>blockquote]:bg-blue-50 [&>blockquote]:py-4 [&>blockquote]:rounded-r-lg"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Bio */}
          <Card className="mb-12">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={post.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {post.author.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{post.author.name}</h3>
                  <p className="text-gray-600 mb-3">{post.author.bio}</p>
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
              {relatedPosts.map((relatedPost, index) => (
                <Link key={index} href={`/blog/${relatedPost.slug}`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={relatedPost.image || "/placeholder.svg"}
                        alt={relatedPost.title}
                        className="w-full h-40 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2 hover:text-blue-600 transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3 line-clamp-2">{relatedPost.excerpt}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500 flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {relatedPost.readTime}
                        </span>
                        <Button variant="ghost" size="sm" className="text-blue-600 hover:text-blue-700 p-0">
                          Read More
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </div>

      <Footer />
    </div>
  )
}
