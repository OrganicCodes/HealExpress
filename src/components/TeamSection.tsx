import Image from 'next/image'
import { Users, Stethoscope, Shield, Heart } from 'lucide-react'

export default function TeamSection() {
  const teamCategories = [
    {
      icon: Stethoscope,
      title: 'Medical Professionals',
      count: '200+',
      description: 'Doctors, nurses, and caregivers with specialized training in home healthcare',
      color: 'blue',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80',
      alt: 'Medical professionals providing home care'
    },
    {
      icon: Shield,
      title: 'Technical Team',
      count: '150+',
      description: 'Engineers and developers building cutting-edge home healthcare technology',
      color: 'green',
      image: 'https://images.unsplash.com/photo-1669930605340-801a0be1f5a3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWVkaWNhbCUyMEVxdWlwbWVudCUyMFJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D',
      alt: 'Technical team working on healthcare technology'
    },
    {
      icon: Users,
      title: 'Support Staff',
      count: '100+',
      description: 'Customer service representatives and home care coordinators',
      color: 'purple',
      image: 'https://plus.unsplash.com/premium_photo-1664475465626-d3a01c077181?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1cHBvcnQlMjBTdGFmZiUyMGhvc3BpdGFsfGVufDB8fDB8fHww',
      alt: 'Support staff providing customer service'
    }
  ]

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Medical Officer',
      experience: '15+ years in Home Healthcare',
      specialization: 'Geriatric & Chronic Care',
      image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      alt: 'Dr. Rajesh Kumar - Chief Medical Officer'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      experience: '12+ years in Healthcare Management',
      specialization: 'Home Care Excellence',
      image: 'https://media.istockphoto.com/id/1316738511/photo/shot-of-an-attractive-young-nurse-sitting-and-bonding-with-her-senior-patient-in-his-kitchen.webp?a=1&b=1&s=612x612&w=0&k=20&c=v5NCAWrUK0MrmG79u-S1tJWlXm8ArKD2Zf3bCc8ny_M=',
      alt: 'Priya Sharma - Head of Operations'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Director',
      experience: '10+ years in HealthTech',
      specialization: 'Digital Home Care',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      alt: 'Amit Patel - Technology Director'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the dedicated professionals who make Life Secure & Home Care India's most trusted home healthcare service
          </p>
        </div>

        {/* Team Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamCategories.map((category, index) => (
            <div key={index} className="medical-card text-center group hover:shadow-xl transition-all duration-300 overflow-hidden">
              {/* Team Category Image */}
              <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                <Image
                  src={category.image}
                  alt={category.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                {/* Icon overlay */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2 group-hover:bg-white transition-colors duration-300">
                  <category.icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {category.count}
                </h3>
                <h4 className="text-lg font-semibold text-gray-700 mb-4">
                  {category.title}
                </h4>
                <p className="text-gray-600">
                  {category.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="medical-card text-center group hover:shadow-xl transition-all duration-300 overflow-hidden">
                {/* Leadership Image */}
                <div className="relative w-full h-48 sm:h-56 overflow-hidden">
                  <Image
                    src={leader.image}
                    alt={leader.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  {/* Heart icon overlay */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 group-hover:bg-white transition-colors duration-300">
                    <Heart className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    {leader.name}
                  </h4>
                  <p className="text-blue-600 font-semibold mb-3">
                    {leader.role}
                  </p>
                  <p className="text-sm text-gray-600 mb-2">
                    {leader.experience}
                  </p>
                  <p className="text-sm text-gray-500">
                    {leader.specialization}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Team Values */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What Drives Our Team
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Our Commitment</h4>
                <p className="text-gray-600 leading-relaxed">
                  Every team member at Life Secure & Home Care is driven by a shared commitment to improving lives 
                  and providing compassionate home care. We believe that healthcare is not just a service, 
                  but a calling that requires dedication, expertise, and genuine care for families.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Continuous Learning</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team undergoes regular training and certification programs to stay updated with 
                  the latest home healthcare practices, technology, and care protocols. We invest 
                  in our people because they are our greatest asset in delivering quality care.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
