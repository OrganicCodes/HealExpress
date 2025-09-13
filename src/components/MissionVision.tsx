import Image from 'next/image'
import { Target, Heart, Users, Clock, Shield, Award } from 'lucide-react'

export default function MissionVision() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission & Vision
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Driving home healthcare innovation with compassion and technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Vision */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-100 rounded-lg p-3">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            
            {/* Vision Image */}
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6">
              <Image
                src="https://plus.unsplash.com/premium_photo-1682089068775-36d058d06b7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fEhvbWUlMjBDYXJlJTIwU3VwcG9ydHxlbnwwfHwwfHx8MA%3D%3D"
                alt="Vision of home healthcare excellence"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Life Secure & Home Care's vision is to become India's most trusted home healthcare platform — 
                providing professional care at every doorstep, enabling families to receive quality medical 
                services in the comfort of their homes, and making healthcare accessible to all.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We aim to be more than just a service provider. We aim to become the trusted partner 
                for families during health challenges — the "Home Care Guardian" of today's India. We are building a future 
                where quality healthcare isn't a privilege, but a promise delivered with dignity, 
                compassion, and professional excellence.
              </p>
            </div>
          </div>

          {/* Mission */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-green-100 rounded-lg p-3">
                <Heart className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            
            {/* Mission Image */}
            <div className="relative w-full h-48 sm:h-56 rounded-xl overflow-hidden mb-6">
              <Image
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Mission of compassionate home care"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Our mission is rooted in our soul statement: "Bringing Care to Your Home." Every home visit 
                made, every family supported, every life improved — brings us closer to that mission.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">H</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Home Care:</span>
                    <span className="text-gray-600"> Provide professional care in the comfort of your home.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">E</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Excellence:</span>
                    <span className="text-gray-600"> Deliver highest quality healthcare services with compassion.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">A</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Accessibility:</span>
                    <span className="text-gray-600"> Make healthcare accessible to all families across India.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">L</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Love:</span>
                    <span className="text-gray-600"> Care for every family with genuine love and dedication.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Users className="h-8 w-8 text-blue-600" />
            <Clock className="h-8 w-8 text-green-600" />
            <Shield className="h-8 w-8 text-purple-600" />
          </div>
          <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
            We are a movement driven by doctors, nurses, caregivers, and healthcare professionals. 
            Together, we're reshaping how India experiences home healthcare — one family, 
            one home visit, one life at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
