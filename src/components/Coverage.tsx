import { MapPin, Users, Phone, Train, Plane, Building2 } from 'lucide-react'

export default function Coverage() {
  const coverageStats = [
    {
      icon: MapPin,
      value: '500+',
      label: 'Districts Covered',
      description: 'Available in 500+ districts & 80+ tier-1, tier-2 cities'
    },
    {
      icon: Users,
      value: '20+',
      label: 'States Covered',
      description: 'Live GPS-tracked ambulances in 20+ states'
    },
    {
      icon: Phone,
      value: '24/7',
      label: 'Multilingual Support',
      description: 'Emergency support in local languages via call center'
    },
    {
      icon: Train,
      value: '100%',
      label: 'Railway Integration',
      description: 'Integrated with Indian Railways & regional air operators'
    },
    {
      icon: Building2,
      value: '1,000+',
      label: 'Hospital Partners',
      description: 'Preferred partner of 1000+ hospitals and care homes'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Coverage Across India
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            HealExpress has built one of the largest and most responsive emergency medical service 
            networks in India. From bustling cities like Mumbai and Delhi to the most remote towns 
            in Assam, Jharkhand, and Bihar — we've ensured that life-saving medical transport is 
            just a call away.
          </p>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
          {coverageStats.map((stat, index) => (
            <div key={index} className="medical-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Map Placeholder */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center space-y-6">
            <div className="bg-gradient-to-r from-blue-100 to-green-100 rounded-full p-6 w-32 h-32 mx-auto flex items-center justify-center">
              <MapPin className="h-16 w-16 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              HealExpress Pan India Coverage Map
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our multi-tier dispatch system operates 24/7, backed by multilingual call centers, 
              GPS-integrated ambulances, and strategic partnerships with 1,000+ hospitals.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-lg p-4 mb-3">
                  <Train className="h-6 w-6 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900">Rail Network</h4>
                <p className="text-sm text-gray-600">Connected across major railway routes</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-lg p-4 mb-3">
                  <Plane className="h-6 w-6 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900">Air Routes</h4>
                <p className="text-sm text-gray-600">Domestic and international coverage</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-lg p-4 mb-3">
                  <Building2 className="h-6 w-6 mx-auto" />
                </div>
                <h4 className="font-semibold text-gray-900">Hospital Network</h4>
                <p className="text-sm text-gray-600">Strategic partnerships nationwide</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 font-semibold">
            No matter where you are, <span className="text-blue-600">HealExpress zarur aayega</span>
          </p>
        </div>
      </div>
    </section>
  )
}
