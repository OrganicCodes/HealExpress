import { Shield, Heart, MapPin, Award, Users, Clock, CheckCircle } from 'lucide-react'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: 'Expertise & Innovation',
      description: '5G Smart Ambulances, real-time tracking, and a seasoned team delivering world-class medical response.'
    },
    {
      icon: Heart,
      title: 'Patient-Centric Approach',
      description: 'Compassion-first care tailored for each patient\'s dignity, comfort, and safety.'
    },
    {
      icon: MapPin,
      title: 'Pan-India Reach',
      description: 'Services in metros, semi-urban, and even the remotest villages — truly inclusive healthcare.'
    },
    {
      icon: Award,
      title: 'Recognized & Awarded',
      description: 'From Startup India to Six Sigma Awards — recognized by government & healthcare institutions.'
    },
    {
      icon: Users,
      title: 'Complete Healthcare Ecosystem',
      description: 'Ambulances, doctors, diagnostics, hospital tie-ups, equipment, and insurance — all under one roof.'
    }
  ]

  const features = [
    '24/7 Emergency Response',
    'GPS-Enabled Fleet Tracking',
    'Advanced Life Support Systems',
    'Multilingual Support',
    'Government Certified',
    'Insurance Support',
    'Home Healthcare Services',
    'Nationwide Coverage'
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose HealExpress Always
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Because in the darkest moments, when no one else arrives — HealExpress does.
          </p>
        </div>

        {/* Main Message */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 md:p-12 text-white mb-12">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Emergencies don't wait. Neither do we.
            </h3>
            <p className="text-lg text-blue-100 leading-relaxed">
              Rain, floods, curfew, midnight or peak traffic — HealExpress has proven again and again 
              that nothing can stop us from reaching you.
            </p>
            <p className="text-blue-100 leading-relaxed">
              During the COVID-19 pandemic, when entire systems collapsed — our ambulances kept moving. 
              We delivered oxygen, provided ICU transfers, and reached places no one else would go. 
              While the country was locked down, we were on the roads saving lives.
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <p className="text-xl font-semibold">
                "Koi aaye ya na aaye, HealExpress zarur aayega."
              </p>
              <p className="text-blue-100 mt-2">
                This is not just a slogan — it's a lived reality.
              </p>
            </div>
          </div>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <reason.icon className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Features List */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              HealExpress - Always There
            </h3>
            <p className="text-gray-600">
              With over 2,00,000 lives served, 500+ districts covered, and every kind of ambulance 
              and medical support under one roof — HealExpress is not just a service. It's a mission to protect life.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
