import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Brain, Code, Zap, Users, Database, Shield } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "AI Integration",
    description:
      "Seamlessly integrate artificial intelligence into your existing systems and workflows for enhanced automation and decision-making.",
  },
  {
    icon: Code,
    title: "Custom Software Development",
    description:
      "Build tailored software solutions from scratch, designed specifically for your business needs and requirements.",
  },
  {
    icon: Zap,
    title: "Process Automation",
    description:
      "Automate repetitive tasks and streamline your business processes with intelligent AI-powered solutions.",
  },
  {
    icon: Users,
    title: "Consultation & Strategy",
    description:
      "Get expert guidance on AI implementation strategies and digital transformation roadmaps for your organization.",
  },
  {
    icon: Database,
    title: "Data Analytics & ML",
    description:
      "Transform your data into actionable insights with machine learning models and advanced analytics platforms.",
  },
  {
    icon: Shield,
    title: "Maintenance & Support",
    description:
      "Ongoing support and maintenance services to ensure your AI-powered solutions continue to perform optimally.",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer comprehensive AI-powered software solutions to help businesses innovate and stay ahead in the
            digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
