import { MapPin, Phone, Clock, Users } from 'lucide-react'

export default function ServiceAreas() {
  const majorCities = [
    'Delhi NCR', 'Mumbai', 'Bangalore', 'Chennai', 'Kolkata', 'Hyderabad',
    'Pune', 'Ahmedabad', 'Jaipur', 'Lucknow', 'Kanpur', 'Nagpur',
    'Indore', 'Bhopal', 'Visakhapatnam', 'Patna', 'Vadodara', 'Ludhiana'
  ]

  const states = [
    'Delhi', 'Maharashtra', 'Karnataka', 'Tamil Nadu', 'West Bengal', 'Telangana',
    'Gujarat', 'Rajasthan', 'Uttar Pradesh', 'Madhya Pradesh', 'Andhra Pradesh',
    'Bihar', 'Punjab', 'Haryana', 'Kerala', 'Assam', 'Jharkhand', 'Odisha'
  ]

  const coverageStats = [
    {
      icon: MapPin,
      value: '500+',
      label: 'Districts Covered',
      description: 'Across all major states and union territories'
    },
    {
      icon: Users,
      value: '80+',
      label: 'Tier-1 & Tier-2 Cities',
      description: 'Including metros and emerging urban centers'
    },
    {
      icon: Clock,
      value: '24/7',
      label: 'Service Availability',
      description: 'Round-the-clock emergency response'
    },
    {
      icon: Phone,
      value: '20+',
      label: 'Languages Supported',
      description: 'Multilingual call center support'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Service Areas
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            HealExpress provides emergency medical services across India with comprehensive coverage
          </p>
        </div>

        {/* Coverage Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {coverageStats.map((stat, index) => (
            <div key={index} className="medical-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
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

        {/* Major Cities */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Major Cities We Serve
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {majorCities.map((city, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-blue-100 rounded-lg p-2 mb-2">
                  <MapPin className="h-6 w-6 text-blue-600 mx-auto" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{city}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* States Coverage */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            State-wise Coverage
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {states.map((state, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-green-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-300">
                <h4 className="text-sm font-semibold text-gray-900">{state}</h4>
                <p className="text-xs text-gray-600 mt-1">Full Coverage</p>
              </div>
            ))}
          </div>
        </div>

        {/* Service Coverage Map */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              HealExpress Pan India Coverage Map
            </h3>
            <p className="text-gray-600">
              Our multi-tier dispatch system operates 24/7, backed by multilingual call centers, 
              GPS-integrated ambulances, and strategic partnerships with 1,000+ hospitals.
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-8 text-center">
            <div className="bg-white rounded-full p-8 w-32 h-32 mx-auto mb-6 flex items-center justify-center">
              <MapPin className="h-16 w-16 text-blue-600" />
            </div>
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Nationwide Emergency Medical Services
            </h4>
            <p className="text-gray-600 mb-6">
              From bustling cities to remote villages, we ensure medical help reaches in time
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Urban Coverage</h5>
                <p className="text-sm text-gray-600">Metro cities and major urban centers</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Semi-Urban</h5>
                <p className="text-sm text-gray-600">Tier-2 and Tier-3 cities</p>
              </div>
              <div className="bg-white rounded-lg p-4">
                <h5 className="font-semibold text-gray-900 mb-2">Rural Areas</h5>
                <p className="text-sm text-gray-600">Villages and remote locations</p>
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
