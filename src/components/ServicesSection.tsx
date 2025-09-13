import Link from 'next/link'
import { ArrowRight, Truck, Train, Plane, Home, Shield, Stethoscope } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Truck,
      title: 'Road Ambulance',
      description: 'Available 24/7 across India, our GPS-enabled road ambulances are equipped with ALS (Advanced Life Support) and BLS (Basic Life Support) systems. Whether it\'s an accident, cardiac arrest, stroke, or ICU transfer, our highly trained EMTs and paramedics ensure quick, safe, and medically assisted transport.',
      features: ['GPS Tracking', 'Life Support', 'Trained Staff', '24/7 Service']
    },
    {
      icon: Train,
      title: 'Train Ambulance',
      description: 'Ideal for long-distance patient transfers, our Train Ambulance services use Indian Railways to create mobile ICU cabins within express trains. Each trip is escorted by a qualified medical team, equipped with oxygen cylinders, monitors, ventilators, and stretchers.',
      features: ['Mobile ICU', 'Long Distance', 'Cost Effective', 'Stable Transport']
    },
    {
      icon: Plane,
      title: 'Air Ambulance',
      description: 'HealExpress Air Ambulance fleet includes helicopters and fixed-wing aircraft specially modified with ICU setups. Used for organ transfers, trauma, neonatal care, and high-risk patients, our air service is staffed with doctors, nurses, and paramedics trained in aviation medicine.',
      features: ['ICU Setup', 'Fast Transport', 'International', 'Specialized Care']
    },
    {
      icon: Home,
      title: 'Home Healthcare',
      description: 'Our Home Healthcare services bring hospital-grade care to your doorstep. We provide skilled nurses, general physicians, physiotherapists, elder care, wound management, post-surgical care, and remote diagnostics.',
      features: ['Skilled Nurses', 'Doctor Visits', 'Physiotherapy', 'Elder Care']
    },
    {
      icon: Shield,
      title: 'Insurance Support',
      description: 'We partner with leading insurance firms to provide real-time health policy enrollment, cashless claim support, and financial guidance. Whether for pre-hospitalization or emergency ambulance expenses, our backend team ensures patients can focus on care.',
      features: ['Cashless Claims', 'Policy Support', 'Financial Guidance', 'Quick Processing']
    },
    {
      icon: Stethoscope,
      title: 'Medical Equipment on Rent',
      description: 'HealExpress supplies high-quality, sanitized medical equipment for patients needing long- or short-term care at home. Our catalog includes ICU beds, oxygen concentrators, BiPAP/CPAP machines, nebulizers, wheelchairs, and cardiac monitors.',
      features: ['ICU Beds', 'Oxygen Support', 'Monitoring Equipment', 'Home Delivery']
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive emergency medical services designed to meet all your healthcare transportation needs
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="medical-card group hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
              <div className="bg-blue-100 rounded-lg p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mb-4 sm:mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <service.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              
              <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base flex-grow">
                {service.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-sm sm:text-base">Key Features:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-1.5 sm:space-x-2">
                      <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-600 rounded-full flex-shrink-0"></div>
                      <span className="text-xs sm:text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link 
                href="/services" 
                className="inline-flex items-center space-x-1.5 sm:space-x-2 text-blue-600 hover:text-blue-700 font-semibold group-hover:translate-x-1 transition-transform duration-200 text-sm sm:text-base mt-auto"
              >
                <span>Read More</span>
                <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/services" 
            className="btn-primary inline-flex items-center space-x-2"
          >
            <span>View All Services</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
