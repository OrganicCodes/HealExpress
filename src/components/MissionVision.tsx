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
            Driving healthcare innovation with compassion and technology
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
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                HealExpress's vision is to become India's most trusted healthcare access platform — 
                responding to emergencies faster, providing reliable care at every doorstep, and 
                enabling the most remote corners of the country to experience modern emergency support.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We aim to be more than just a service provider. We aim to become the guardian angel 
                during health crises — the "Sanjeevani" of today's India. We are building a future 
                where quality healthcare isn't a privilege, but a promise delivered with dignity, 
                speed, and technology.
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
            
            <div className="space-y-4">
              <p className="text-gray-600 leading-relaxed">
                Our mission is rooted in our soul statement: "Bringing Hope to Life." Every ambulance 
                dispatched, every call answered, every life saved — brings us closer to that mission.
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">H</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Help:</span>
                    <span className="text-gray-600"> Provide urgent care when it's needed most.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">E</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Accessibility:</span>
                    <span className="text-gray-600"> Reach people in cities, towns, villages and railway stations.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">A</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Need:</span>
                    <span className="text-gray-600"> Respond to genuine medical needs with empathy.</span>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-blue-100 rounded-full p-2 mt-1">
                    <span className="text-blue-600 font-bold text-sm">L</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Urgency:</span>
                    <span className="text-gray-600"> Eliminate delay in emergency response through tech & training.</span>
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
            We are a movement driven by doctors, social workers, engineers, and visionaries. 
            Together, we're reshaping how India experiences emergency medical care — one ambulance, 
            one mission, one life at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
