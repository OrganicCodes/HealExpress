'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Phone, Menu, X, Heart, Clock } from 'lucide-react'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMenuOpen && !(event.target as Element).closest('nav')) {
        setIsMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [isMenuOpen])

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Partner With Us', href: '/partner' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`bg-white shadow-lg sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-xl' : 'shadow-lg'}`}>
      {/* Top Bar - Responsive visibility */}
      <div className="bg-blue-600 text-white py-1.5 sm:py-2 hidden sm:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-xs sm:text-sm">
            <div className="flex items-center space-x-3 sm:space-x-6">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Phone className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="font-medium text-xs sm:text-sm">+91-9264198199</span>
              </div>
              <div className="hidden md:flex items-center space-x-4">
                <span className="text-blue-100 text-xs sm:text-sm">Trusted by 50,000+ Families for Home Care Services 🇮🇳</span>
              </div>
            </div>
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-1.5 sm:space-x-2">
                <Heart className="h-3 w-3 sm:h-4 sm:w-4" />
                <span className="text-blue-100 text-xs sm:text-sm">24/7 Home Care Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container-custom">
        <div className="flex justify-between items-center py-2 sm:py-3 md:py-4">
          {/* Logo - Responsive sizing */}
          <Link href="/" className="flex-shrink-0">
            <Logo size="sm" className="sm:hidden" />
            <Logo size="md" className="hidden sm:block" />
          </Link>

          {/* Desktop Navigation - Better responsive breakpoints */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6 xl:space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors duration-200 px-2 py-1 rounded-md hover:bg-blue-50 text-sm lg:text-base"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons - Responsive sizing */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3">
            <Link 
              href="tel:+919264198199" 
              className="btn-primary flex items-center space-x-1.5 lg:space-x-2 text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
            >
              <Phone className="h-3 w-3 lg:h-4 lg:w-4" />
              <span className="hidden lg:inline">CALL NOW</span>
              <span className="lg:hidden">CALL</span>
            </Link>
            <Link 
              href="/contact" 
              className="btn-secondary text-xs lg:text-sm px-3 lg:px-4 py-1.5 lg:py-2"
            >
              <span className="hidden lg:inline">BOOK HOME CARE</span>
              <span className="lg:hidden">BOOK</span>
            </Link>
          </div>

          {/* Mobile menu button - Better touch target */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 transition-colors duration-200 touch-manipulation"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation - Enhanced with backdrop */}
        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-black bg-opacity-25 z-40 md:hidden"
              onClick={() => setIsMenuOpen(false)}
            />
            
            {/* Mobile Menu */}
            <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-200 shadow-lg z-50 md:hidden">
              <div className="container-custom py-4">
                <div className="flex flex-col space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="text-gray-700 hover:text-blue-600 font-medium py-3 px-4 rounded-md hover:bg-blue-50 transition-colors duration-200 text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Mobile CTA Buttons */}
                  <div className="flex flex-col space-y-3 pt-4 border-t border-gray-200 mt-4">
                    <Link 
                      href="tel:+919264198199" 
                      className="btn-primary flex items-center justify-center space-x-2 py-3 text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Phone className="h-5 w-5" />
                      <span>CALL NOW</span>
                    </Link>
                    <Link 
                      href="/contact" 
                      className="btn-secondary text-center py-3 text-base"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      BOOK HOME CARE
                    </Link>
                  </div>

                  {/* Mobile Contact Info */}
                  <div className="pt-4 border-t border-gray-200 mt-4 space-y-3">
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Phone className="h-4 w-4" />
                      <span>+91-9264198199</span>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-gray-600">
                      <Heart className="h-4 w-4" />
                      <span>24/7 Home Care Support</span>
                    </div>
                    <div className="text-xs text-gray-500 mt-2">
                      Trusted by 50,000+ Families for Home Care Services 🇮🇳
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  )
}
