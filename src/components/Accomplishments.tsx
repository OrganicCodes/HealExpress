import Image from 'next/image'
import { Users, Heart, Building2, Home, Users2, Award } from 'lucide-react'

export default function Accomplishments() {
  const stats = [
    {
      icon: Heart,
      value: '98%',
      label: 'Patient Satisfaction',
      description: 'From Happy Families & Patients',
      image: 'https://media.istockphoto.com/id/1719539154/photo/home-care-healthcare-professional-hugging-senior-patient.webp?a=1&b=1&s=612x612&w=0&k=20&c=pdv1rxO0rDh42_--sN2nEImQTquD1g3Yu7nlI8EVBBo=',
      alt: 'Happy elderly patient with caregiver'
    },
    {
      icon: Users,
      value: '50,000+',
      label: 'Home Care Visits',
      description: 'Professional Care Delivered to Homes',
      image: 'https://plus.unsplash.com/premium_photo-1663036988004-3e134ce59780?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhvbWUlMjBDYXJlJTIwVmlzaXRzfGVufDB8fDB8fHww',
      alt: 'Home care visits and professional service'
    },
    {
      icon: Building2,
      value: '500+',
      label: 'Hospital Partners',
      description: 'Trusted Healthcare Network',
      image: 'https://media.istockphoto.com/id/638647102/photo/health-is-wealth.webp?a=1&b=1&s=612x612&w=0&k=20&c=asMx0iscjhk1aMRuVHNB8Yb7f1gihNpwcoTCuFWNuMU=',
      alt: 'Hospital partnership and healthcare network'
    },
    {
      icon: Home,
      value: '24/7',
      label: 'Home Care Support',
      description: 'Round-the-Clock Care Services'
    },
    {
      icon: Users2,
      value: '200+',
      label: 'Expert Caregivers',
      description: 'Certified Nurses & Healthcare Professionals'
    },
    {
      icon: Award,
      value: '8+',
      label: 'Awards & Recognitions',
      description: 'Excellence in Home Healthcare'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Achievements
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of families across India for professional home healthcare services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="medical-card text-center group hover:scale-105 transition-transform duration-300 h-full flex flex-col overflow-hidden">
              {/* Real Image for first stat */}
              {stat.image && (
                <div className="relative w-full h-32 sm:h-40 overflow-hidden">
                  <Image
                    src={stat.image}
                    alt={stat.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
              
              <div className="p-4 sm:p-6 flex flex-col flex-grow">
                {!stat.image && (
                  <div className="bg-blue-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
                  </div>
                )}
                
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm flex-grow">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
