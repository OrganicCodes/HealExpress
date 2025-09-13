import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Home, Users, Stethoscope, Heart, Clock, Shield } from 'lucide-react'

export default function ServicesSection() {
  const services = [
    {
      icon: Home,
      title: 'Home Nursing Care',
      description: 'Professional nursing care delivered right to your home. Our certified nurses provide 24/7 medical assistance, medication management, wound care, and post-surgical support for patients of all ages.',
      features: ['24/7 Care', 'Certified Nurses', 'Medication Management', 'Wound Care'],
      image: 'https://media.istockphoto.com/id/1403208210/photo/close-up-shot-of-doctor-counting-pulse-by-holding-hand-of-sick-patient-concept-of-health.webp?a=1&b=1&s=612x612&w=0&k=20&c=2zm_lamTy4NwRRFOwhtnuBZnCkuMSrCm1JazuSKqBOg=',
      alt: 'Professional nurse providing home care'
    },
    {
      icon: Users,
      title: 'Elderly Care Services',
      description: 'Comprehensive care for senior citizens including daily assistance, companionship, health monitoring, and specialized care for conditions like dementia, diabetes, and mobility issues.',
      features: ['Daily Assistance', 'Health Monitoring', 'Companionship', 'Specialized Care'],
      image: 'https://plus.unsplash.com/premium_photo-1663036900619-7ae7f6c3f2c9?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEVsZGVybHklMjBDYXJlJTIwU2VydmljZXN8ZW58MHx8MHx8fDA%3D',
      alt: 'Elderly care and companionship services'
    },
    {
      icon: Stethoscope,
      title: 'Doctor Home Visits',
      description: 'Qualified doctors visit your home for consultations, health check-ups, and medical assessments. Perfect for elderly patients, post-surgery recovery, and routine health monitoring.',
      features: ['Qualified Doctors', 'Health Check-ups', 'Medical Consultations', 'Routine Monitoring'],
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Doctor conducting home visit consultation'
    },
    {
      icon: Heart,
      title: 'Physiotherapy at Home',
      description: 'Professional physiotherapy services delivered at your doorstep. Our licensed therapists provide rehabilitation, pain management, and mobility improvement for patients recovering from injuries or surgeries.',
      features: ['Licensed Therapists', 'Pain Management', 'Rehabilitation', 'Mobility Improvement'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Physiotherapist providing home therapy'
    },
    {
      icon: Shield,
      title: 'Medical Equipment Rental',
      description: 'High-quality medical equipment available for rent including hospital beds, oxygen concentrators, wheelchairs, and monitoring devices. All equipment is sanitized and maintained to hospital standards.',
      features: ['Hospital Beds', 'Oxygen Support', 'Wheelchairs', 'Monitoring Devices'],
      image: 'https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVkaWNhbCUyMEVxdWlwbWVudCUyMFJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Medical equipment for home care'
    },
    {
      icon: Clock,
      title: 'Emergency Home Care',
      description: '24/7 emergency medical support at home. Our rapid response team provides immediate medical assistance, emergency medication administration, and coordinates with hospitals when needed.',
      features: ['24/7 Support', 'Rapid Response', 'Emergency Care', 'Hospital Coordination'],
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Emergency medical care at home'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Home Care Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive healthcare services delivered right to your home with professional care and compassion
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div key={index} className="medical-card group hover:shadow-2xl transition-all duration-300 h-full flex flex-col overflow-hidden">
              {/* Real Image */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 group-hover:bg-white transition-colors duration-300">
                  <service.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
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
