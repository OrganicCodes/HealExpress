import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowRight, Shield, Heart, Clock, Home, Users, Stethoscope } from 'lucide-react'

export default function Hero() {
  return (
    <section className="gradient-bg text-white relative overflow-hidden min-h-screen flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-blue-800/90"></div>
      
      <div className="container-custom py-12 sm:py-16 lg:py-20 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-3 sm:space-y-4">
              <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-100">
                <Shield className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-xs sm:text-sm font-medium">Trusted by 50,000+ Families for Home Care Services 🇮🇳</span>
              </div>
              
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                Premium Healthcare
                <span className="block text-yellow-300 mt-1 sm:mt-2">at Your Home</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-blue-100 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Life Secure & Home Care provides comprehensive healthcare services including nursing care, elderly care, medical equipment, and 24/7 support.
                <span className="block font-semibold text-white mt-2 text-sm sm:text-base lg:text-lg">
                  Professional. Compassionate. Reliable. Trusted. Available 24/7.
                </span>
              </p>
            </div>

            {/* CTA Buttons - Enhanced mobile experience */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto lg:mx-0">
              <Link 
                href="tel:+919264198199" 
                className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 active:scale-95 touch-manipulation"
              >
                <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">CALL NOW</span>
              </Link>
              <Link 
                href="/contact" 
                className="bg-white hover:bg-gray-100 text-blue-600 font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-lg flex items-center justify-center space-x-2 transition-all duration-200 transform hover:scale-105 active:scale-95 touch-manipulation"
              >
                <span className="text-sm sm:text-base">BOOK HOME CARE</span>
                <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Link>
            </div>

            {/* Language Support - Responsive text */}
            <div className="flex items-center justify-center lg:justify-start space-x-2 text-blue-100">
              <Heart className="h-3 w-3 sm:h-4 sm:w-4 flex-shrink-0" />
              <span className="text-xs sm:text-sm">
                We speak Hindi, English, Bengali, Kannada, Tamil, Telugu and more.
              </span>
            </div>
          </div>

          {/* Right Content - Home Care Services with Real Images - Enhanced mobile */}
          <div className="relative mt-8 lg:mt-0">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/20">
              <div className="text-center space-y-4 sm:space-y-6">
                {/* Real Image of Home Care */}
                <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden mb-4">
                  <Image
                    src="https://plus.unsplash.com/premium_photo-1681995500987-33387f15a544?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhvbWUlMjBDYXJlJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D"
                    alt="Professional nurse providing home care to elderly patient"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>
                
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold">Home Care Services</h3>
                <div className="grid grid-cols-2 gap-2 sm:gap-4 text-xs sm:text-sm">
                  <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                    <Clock className="h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="font-semibold text-xs sm:text-sm">24/7 Care</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                    <Users className="h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="font-semibold text-xs sm:text-sm">Expert Nurses</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                    <Stethoscope className="h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="font-semibold text-xs sm:text-sm">Medical Care</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-2 sm:p-3">
                    <Heart className="h-4 w-4 sm:h-6 sm:w-6 mx-auto mb-1 sm:mb-2" />
                    <p className="font-semibold text-xs sm:text-sm">Compassionate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
