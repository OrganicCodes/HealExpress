import Link from 'next/link'
import { Phone, Mail, MapPin, Shield, Heart, Clock, Award } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const services = [
    'Road Ambulance',
    'Train Ambulance', 
    'Air Ambulance',
    'Home Healthcare',
    'Equipment on Rent',
    'Insurance Support'
  ]

  const quickLinks = [
    'About Us',
    'Our Services',
    'Contact Us',
    'Career Opportunities',
    'Partner with Us'
  ]

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="container-custom py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <div className="space-y-4 sm:col-span-2 lg:col-span-1">
            <Logo size="md" />
            <p className="text-gray-300 text-sm leading-relaxed">
              India's trusted provider of emergency medical services including Road, Train, and Air Ambulance, Home Healthcare, and more.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <div className="bg-blue-600 p-2 rounded">
                <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="bg-blue-600 p-2 rounded">
                <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="bg-blue-600 p-2 rounded">
                <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
              <div className="bg-blue-600 p-2 rounded">
                <Award className="h-3 w-3 sm:h-4 sm:w-4" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Services */}
          <div>
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Key Services</h4>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4">Get in Touch</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm">+91-9264198199</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-blue-400 flex-shrink-0" />
                <span className="text-sm break-all">support@healexpress.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-4 w-4 text-blue-400 mt-1 flex-shrink-0" />
                <div className="text-sm">
                  <p>A/182, 2nd Floor, Near Lohiya Nagar Park</p>
                  <p>Opp. People Cooperative Hall, P C Colony</p>
                  <p>Kankarbagh, Patna, Bihar 800020</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">
              © {currentYear} HealExpress Pvt Ltd. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
