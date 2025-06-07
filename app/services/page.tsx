import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Zap, Users, Database, Shield, ArrowRight, CheckCircle } from "lucide-react"
import Link from "next/link"
import Header from "../components/header"
import Footer from "../components/footer"

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Seamlessly integrate artificial intelligence into your existing systems and workflows for enhanced automation and decision-making.",
    features: [
      "Custom AI model development",
      "Legacy system integration",
      "Real-time AI processing",
      "Performance optimization",
    ],
    pricing: "Starting at $15,000",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Build tailored software solutions from scratch, designed specifically for your business needs and requirements.",
    features: ["Full-stack development", "Mobile app development", "API development", "Cloud-native solutions"],
    pricing: "Starting at $25,000",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Automate repetitive tasks and streamline your business processes with intelligent AI-powered solutions.",
    features: ["Workflow automation", "Document processing", "Quality control systems", "Inventory management"],
    pricing: "Starting at $10,000",
  },
  {
    icon: Users,
    title: "Consultation & Strategy",
    description:
      "Get expert guidance on AI implementation strategies and digital transformation roadmaps for your organization.",
    features: ["AI readiness assessment", "Technology roadmapping", "Team training", "Change management"],
    pricing: "Starting at $5,000",
  },
  {
    icon: Database,
    title: "Data Analytics & ML",
    description:
      "Transform your data into actionable insights with machine learning models and advanced analytics platforms.",
    features: ["Predictive analytics", "Data visualization", "ML model training", "Business intelligence"],
    pricing: "Starting at $12,000",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance services to ensure your AI-powered solutions continue to perform optimally.",
    features: ["24/7 monitoring", "Performance tuning", "Security updates", "Feature enhancements"],
    pricing: "Starting at $2,000/month",
  },
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Assessment",
    description: "We analyze your business needs, current systems, and identify AI opportunities.",
  },
  {
    step: "02",
    title: "Strategy & Planning",
    description: "Develop a comprehensive roadmap with timelines, milestones, and success metrics.",
  },
  {
    step: "03",
    title: "Development & Integration",
    description: "Build and integrate AI solutions using cutting-edge technologies and best practices.",
  },
  {
    step: "04",
    title: "Testing & Optimization",
    description: "Rigorous testing and optimization to ensure peak performance and reliability.",
  },
  {
    step: "05",
    title: "Deployment & Training",
    description: "Smooth deployment with comprehensive team training and knowledge transfer.",
  },
  {
    step: "06",
    title: "Support & Evolution",
    description: "Ongoing support, monitoring, and continuous improvement of your AI solutions.",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI-Powered <span className="text-blue-600">Software Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your business with our comprehensive suite of AI integration and custom software development
              services. From consultation to deployment, we're your trusted partner in digital transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                View Our Work
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI and software development services tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="text-blue-600 bg-blue-50">
                        {service.pricing}
                      </Badge>
                      <Link href="/contact">
                        <Button variant="outline" size="sm">
                          Learn More
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful AI implementation and software development projects.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-blue-600 text-white rounded-lg flex items-center justify-center font-bold text-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-8 h-0.5 bg-gray-300 transform -translate-x-4"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI-powered solutions can help you achieve your business goals and stay ahead of the
            competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
