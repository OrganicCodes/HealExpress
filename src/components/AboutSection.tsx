import Link from 'next/link'
import { ArrowRight, Award, Shield, Heart, Clock } from 'lucide-react'

export default function AboutSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                About HealExpress
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Founded in 2020, HealExpress is revolutionizing emergency healthcare across India. 
                We bring fast, reliable, and affordable ambulance services powered by technology, 
                compassion, and professionalism.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Whether it's a local emergency or long-distance transfer, our fleet of Road, Rail, 
                and Air Ambulances are ready 24x7 with advanced life support, trained paramedics, 
                and live GPS tracking. From metro cities to rural villages, we ensure medical help 
                reaches in time.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Recognized by government bodies and awarded as one of India's best EMS startups, 
                HealExpress operates with the mission of "Bringing Hope to Life." We stand for 
                innovation, inclusion, and saving lives.
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 rounded-lg p-3">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Award Winning Service</h4>
                <p className="text-sm text-gray-600">Recognized by government bodies</p>
              </div>
            </div>

            <Link 
              href="/about" 
              className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-semibold"
            >
              <span>Read More</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          {/* Right Content - Image Placeholder */}
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Shield className="h-8 w-8 text-blue-600 mb-2" />
                    <h4 className="font-semibold text-gray-900">24/7 Service</h4>
                    <p className="text-sm text-gray-600">Always available when you need us</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Heart className="h-8 w-8 text-red-500 mb-2" />
                    <h4 className="font-semibold text-gray-900">Life Support</h4>
                    <p className="text-sm text-gray-600">Advanced medical equipment</p>
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Clock className="h-8 w-8 text-green-500 mb-2" />
                    <h4 className="font-semibold text-gray-900">Quick Response</h4>
                    <p className="text-sm text-gray-600">Fast emergency response</p>
                  </div>
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <Award className="h-8 w-8 text-yellow-500 mb-2" />
                    <h4 className="font-semibold text-gray-900">Certified</h4>
                    <p className="text-sm text-gray-600">Government recognized</p>
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
