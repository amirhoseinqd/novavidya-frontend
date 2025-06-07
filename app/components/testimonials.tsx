import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "CTO, TechFlow Solutions",
    content:
      "NovaVidya transformed our business processes with their AI integration. The chatbot they developed increased our customer satisfaction by 40% and significantly reduced our support workload.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    position: "CEO, DataDriven Inc.",
    content:
      "The predictive analytics platform NovaVidya built for us has been a game-changer. We can now predict equipment failures before they happen, saving us thousands in maintenance costs.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    position: "Operations Manager, RetailMax",
    content:
      "Working with NovaVidya was exceptional. Their team understood our needs perfectly and delivered a smart inventory system that reduced our waste by 30%. Highly recommended!",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied clients have to say about working with NovaVidya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.position}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
