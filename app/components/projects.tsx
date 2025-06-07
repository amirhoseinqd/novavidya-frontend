import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    title: "E-Commerce AI Assistant",
    description:
      "Developed an intelligent chatbot for a major retail client that increased customer satisfaction by 40% and reduced support tickets by 60%.",
    technologies: ["React", "Node.js", "OpenAI GPT", "MongoDB"],
    category: "AI Integration",
  },
  {
    title: "Predictive Analytics Platform",
    description:
      "Built a comprehensive analytics dashboard that helps manufacturing companies predict equipment failures and optimize maintenance schedules.",
    technologies: ["Python", "TensorFlow", "React", "PostgreSQL"],
    category: "Machine Learning",
  },
  {
    title: "Document Processing System",
    description:
      "Created an automated document processing system using OCR and NLP that reduced manual data entry by 85% for a financial services firm.",
    technologies: ["Python", "OpenCV", "spaCy", "FastAPI"],
    category: "Automation",
  },
  {
    title: "Smart Inventory Management",
    description:
      "Developed an AI-powered inventory management system that optimizes stock levels and reduces waste by 30% for retail chains.",
    technologies: ["Vue.js", "Python", "scikit-learn", "MySQL"],
    category: "AI Integration",
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore some of our successful AI integration projects that have transformed businesses across various
            industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Badge variant="secondary">{project.category}</Badge>
                  <ExternalLink className="h-5 w-5 text-gray-400 hover:text-blue-600 cursor-pointer" />
                </div>
                <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4">{project.description}</CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
