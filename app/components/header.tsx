"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Menu, X, Brain } from "lucide-react"
import Link from "next/link"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isHomePage = pathname === "/"

  useEffect(() => {
    const handleSmoothScroll = (e: Event) => {
      const target = e.target as HTMLAnchorElement
      if (target.hash && isHomePage) {
        e.preventDefault()
        const element = document.querySelector(target.hash)
        if (element) {
          element.scrollIntoView({ behavior: "smooth" })
          setIsMenuOpen(false) // Close mobile menu if open
        }
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => link.addEventListener("click", handleSmoothScroll))

    return () => {
      links.forEach((link) => link.removeEventListener("click", handleSmoothScroll))
    }
  }, [isHomePage])

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">NovaVidya</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {isHomePage ? (
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
            ) : (
              <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </Link>
            )}

            <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
              Services
            </Link>

            {isHomePage ? (
              <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </a>
            ) : (
              <Link href="/#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                Projects
              </Link>
            )}

            {isHomePage ? (
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
            ) : (
              <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </Link>
            )}

            <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
              Contact
            </Link>

            <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
              Blog
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {isHomePage ? (
                <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </a>
              ) : (
                <Link href="/" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Home
                </Link>
              )}

              <Link href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </Link>

              {isHomePage ? (
                <a href="#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Projects
                </a>
              ) : (
                <Link href="/#projects" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Projects
                </Link>
              )}

              {isHomePage ? (
                <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Testimonials
                </a>
              ) : (
                <Link href="/#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                  Testimonials
                </Link>
              )}

              <Link href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </Link>

              <Link href="/blog" className="text-gray-700 hover:text-blue-600 transition-colors">
                Blog
              </Link>

              <Link href="/contact">
                <Button className="bg-blue-600 hover:bg-blue-700 w-full mt-4">Get Started</Button>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
