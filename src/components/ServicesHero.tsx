import { Truck, Train, Plane, Home, Shield, Stethoscope } from 'lucide-react'

export default function ServicesHero() {
  const services = [
    { icon: Truck, name: 'Road Ambulance', color: 'blue' },
    { icon: Train, name: 'Train Ambulance', color: 'green' },
    { icon: Plane, name: 'Air Ambulance', color: 'purple' },
    { icon: Home, name: 'Home Healthcare', color: 'orange' },
    { icon: Shield, name: 'Insurance Support', color: 'indigo' },
    { icon: Stethoscope, name: 'Equipment Rental', color: 'red' }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      red: 'bg-red-100 text-red-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Comprehensive emergency medical services designed to meet all your healthcare 
            transportation and home care needs across India
          </p>
        </div>

        {/* Service Icons */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className={`rounded-2xl p-6 mb-4 group-hover:scale-110 transition-transform duration-300 ${getColorClasses(service.color)}`}>
                <service.icon className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-sm font-semibold text-white group-hover:text-yellow-300 transition-colors duration-300">
                {service.name}
              </h3>
            </div>
          ))}
        </div>

        {/* Key Features */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">24/7 Availability</h3>
              <p className="text-blue-100">Always ready when you need us</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Nationwide Coverage</h3>
              <p className="text-blue-100">Serving 500+ districts across India</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Advanced Technology</h3>
              <p className="text-blue-100">GPS tracking and life support systems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
