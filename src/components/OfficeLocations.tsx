import { MapPin, Phone, Mail, Clock, Users, Building } from 'lucide-react'

export default function OfficeLocations() {
  const offices = [
    {
      city: 'Delhi NCR',
      address: 'Gurugram – 704 B, Unitech Arcadia Towers Sector 49, Gurugram 122018',
      phone: '+91-9264198199',
      email: 'delhi@healexpress.com',
      hours: '24/7 Emergency Service',
      services: ['Road Ambulance', 'Air Ambulance', 'Home Healthcare']
    },
    {
      city: 'Patna',
      address: 'A/182, 2nd Floor, Near Lohiya Nagar Park, Opp. People Cooperative Hall, P C Colony, Kankarbagh, Patna, Bihar 800020',
      phone: '+91-9264198199',
      email: 'patna@healexpress.com',
      hours: '24/7 Emergency Service',
      services: ['Road Ambulance', 'Train Ambulance', 'Home Healthcare']
    },
    {
      city: 'Mumbai',
      address: 'Bandra Kurla Complex, Mumbai, Maharashtra 400051',
      phone: '+91-9264198199',
      email: 'mumbai@healexpress.com',
      hours: '24/7 Emergency Service',
      services: ['Road Ambulance', 'Air Ambulance', 'Marine Ambulance']
    },
    {
      city: 'Bangalore',
      address: 'Electronic City, Bangalore, Karnataka 560100',
      phone: '+91-9264198199',
      email: 'bangalore@healexpress.com',
      hours: '24/7 Emergency Service',
      services: ['Road Ambulance', 'Air Ambulance', 'Tech Support']
    },
    {
      city: 'Chennai',
      address: 'T. Nagar, Chennai, Tamil Nadu 600017',
      phone: '+91-9264198199',
      email: 'chennai@healexpress.com',
      hours: '24/7 Emergency Service',
      services: ['Road Ambulance', 'Train Ambulance', 'Home Healthcare']
    },
    {
      city: 'Kolkata',
      address: 'Salt Lake City, Kolkata, West Bengal 700064',
      phone: '+91-9264198199',
      email: 'kolkata@healexpress.com',
      hours: '24/7 Emergency Service',
      services: ['Road Ambulance', 'Train Ambulance', 'Home Healthcare']
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Offices
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Find us across major Indian cities with 24/7 emergency medical services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-center space-x-3 mb-6">
                <div className="bg-blue-100 rounded-lg p-3">
                  <Building className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{office.city}</h3>
              </div>

              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-1" />
                  <div>
                    <p className="text-sm text-gray-600 leading-relaxed">{office.address}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">{office.phone}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">{office.email}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-gray-400" />
                  <div>
                    <p className="text-sm text-gray-600">{office.hours}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Services Available:</h4>
                  <div className="flex flex-wrap gap-2">
                    {office.services.map((service, serviceIndex) => (
                      <span key={serviceIndex} className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Information */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Nationwide Coverage
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">500+ Districts</h4>
                <p className="text-gray-600">Covered across India</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-green-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">80+ Cities</h4>
                <p className="text-gray-600">Tier-1 and Tier-2 cities</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Clock className="h-8 w-8 text-purple-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">24/7 Service</h4>
                <p className="text-gray-600">Always available when you need us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
