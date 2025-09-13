import { Bed, Wind, Activity, Stethoscope, Heart } from 'lucide-react'

export default function EquipmentRental() {
  const equipment = [
    {
      icon: Bed,
      name: 'ICU Beds',
      description: 'Hospital-grade ICU beds with adjustable features and safety rails',
      features: ['Electric adjustment', 'Safety rails', 'Mattress included', 'Easy cleaning'],
      price: '₹500/day'
    },
    {
      icon: Wind,
      name: 'Oxygen Concentrators',
      description: 'Portable oxygen concentrators for home respiratory support',
      features: ['Portable design', 'Quiet operation', 'Low maintenance', 'Long-lasting'],
      price: '₹300/day'
    },
    {
      icon: Activity,
      name: 'BiPAP/CPAP Machines',
      description: 'Sleep apnea and respiratory support machines for home use',
      features: ['Auto-adjusting', 'Humidifier included', 'Data logging', 'Comfortable masks'],
      price: '₹400/day'
    },
    {
      icon: Activity,
      name: 'Wheelchairs',
      description: 'Lightweight and comfortable wheelchairs for mobility support',
      features: ['Lightweight frame', 'Comfortable seating', 'Foldable design', 'Easy transport'],
      price: '₹150/day'
    },
    {
      icon: Stethoscope,
      name: 'Cardiac Monitors',
      description: 'Portable cardiac monitoring devices for continuous heart monitoring',
      features: ['Real-time monitoring', 'Alarm system', 'Battery powered', 'Data storage'],
      price: '₹600/day'
    },
    {
      icon: Heart,
      name: 'Nebulizers',
      description: 'Medical nebulizers for respiratory medication delivery',
      features: ['Easy to use', 'Quiet operation', 'Portable', 'Child-friendly'],
      price: '₹200/day'
    }
  ]

  const rentalBenefits = [
    'Same-day delivery and setup',
    'Trained staff installation',
    '24/7 technical support',
    'Sanitized and certified equipment',
    'Flexible rental periods',
    'Insurance claim assistance'
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Medical Equipment on Rent
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            High-quality, sanitized medical equipment for short or long-term home care needs
          </p>
        </div>

        {/* Equipment Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {equipment.map((item, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <item.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {item.name}
              </h3>
              
              <p className="text-gray-600 mb-4 leading-relaxed">
                {item.description}
              </p>

              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features:</h4>
                <ul className="space-y-1">
                  {item.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-blue-600">
                  {item.price}
                </span>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Rental Benefits */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Why Choose HealExpress Equipment Rental?
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {rentalBenefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="bg-green-100 rounded-full p-2">
                    <Heart className="h-5 w-5 text-green-600" />
                  </div>
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 text-center">
              <p className="text-gray-600 mb-4">
                All equipment is sanitized, certified, and maintained by our trained technicians
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
                View All Equipment
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
