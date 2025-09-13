'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, Clock, Send } from 'lucide-react'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    contactNumber: '',
    fromLocation: '',
    toLocation: ''
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with us 24/7 for emergency medical services or any healthcare needs
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Book Ambulance Now
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="contactNumber" className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Number
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <span className="text-gray-500 sm:text-sm">+91</span>
                  </div>
                  <input
                    type="tel"
                    id="contactNumber"
                    name="contactNumber"
                    value={formData.contactNumber}
                    onChange={handleInputChange}
                    placeholder="Enter 10-digit mobile number"
                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="fromLocation" className="block text-sm font-medium text-gray-700 mb-2">
                  From Location
                </label>
                <input
                  type="text"
                  id="fromLocation"
                  name="fromLocation"
                  value={formData.fromLocation}
                  onChange={handleInputChange}
                  placeholder="Pickup location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="toLocation" className="block text-sm font-medium text-gray-700 mb-2">
                  To Location
                </label>
                <input
                  type="text"
                  id="toLocation"
                  name="toLocation"
                  value={formData.toLocation}
                  onChange={handleInputChange}
                  placeholder="Destination location"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-lg flex items-center justify-center space-x-2 transition-colors duration-200"
              >
                <Send className="h-5 w-5" />
                <span>BOOK AMBULANCE</span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Emergency Contact */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Emergency Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="text-lg font-semibold text-red-800">+91-9264198199</p>
                    <p className="text-sm text-red-600">24/7 Emergency Hotline</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-semibold text-red-800">Always Available</p>
                    <p className="text-sm text-red-600">Rain, shine, or any emergency</p>
                  </div>
                </div>
              </div>
            </div>

            {/* General Contact */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Call Us</p>
                    <p className="text-gray-600">+91 92641 98199</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <p className="text-gray-600">support@healexpress.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <p className="font-semibold text-gray-900">Address</p>
                    <p className="text-gray-600 text-sm">
                      A/182, 2nd Floor, Near Lohiya Nagar Park<br />
                      Opp. People Cooperative Hall, P C Colony<br />
                      Kankarbagh, Patna, Bihar 800020
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Office Locations */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Our Offices
              </h3>
              <p className="text-gray-600 mb-4">
                Find us across major Indian cities
              </p>
              <div className="grid grid-cols-2 gap-2 text-sm">
                {['Delhi NCR', 'Patna', 'Assam', 'Jharkhand', 'Mumbai', 'Vellore', 'Bengaluru', 'Gurugram'].map((city, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-2 text-center">
                    {city}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
