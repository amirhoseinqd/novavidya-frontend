import Header from "./components/header"
import Hero from "./components/hero"
import Services from "./components/services"
import Projects from "./components/projects"
import BlogSection from "./components/blog-section"
import Testimonials from "./components/testimonials"
import Contact from "./components/contact"
import Footer from "./components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <BlogSection />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}
