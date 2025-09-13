import { Users, Stethoscope, Shield, Heart } from 'lucide-react'

export default function TeamSection() {
  const teamCategories = [
    {
      icon: Stethoscope,
      title: 'Medical Professionals',
      count: '200+',
      description: 'Doctors, nurses, and paramedics with specialized training in emergency medicine',
      color: 'blue'
    },
    {
      icon: Shield,
      title: 'Technical Team',
      count: '150+',
      description: 'Engineers and developers building cutting-edge healthcare technology',
      color: 'green'
    },
    {
      icon: Users,
      title: 'Support Staff',
      count: '100+',
      description: 'Customer service representatives and logistics coordinators',
      color: 'purple'
    }
  ]

  const leadership = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Chief Medical Officer',
      experience: '15+ years in Emergency Medicine',
      specialization: 'Trauma & Critical Care'
    },
    {
      name: 'Priya Sharma',
      role: 'Head of Operations',
      experience: '12+ years in Healthcare Management',
      specialization: 'Service Excellence'
    },
    {
      name: 'Amit Patel',
      role: 'Technology Director',
      experience: '10+ years in HealthTech',
      specialization: 'Digital Innovation'
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
            Meet the dedicated professionals who make HealExpress India's most trusted emergency medical service
          </p>
        </div>

        {/* Team Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {teamCategories.map((category, index) => (
            <div key={index} className="medical-card text-center group hover:shadow-xl transition-all duration-300">
              <div className={`rounded-lg p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getColorClasses(category.color)}`}>
                <category.icon className="h-10 w-10" />
              </div>
              
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
          ))}
        </div>

        {/* Leadership Team */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            Leadership Team
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="medical-card text-center group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Heart className="h-12 w-12 text-blue-600" />
                </div>
                
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
                  Every team member at HealExpress is driven by a shared commitment to saving lives 
                  and providing compassionate care. We believe that healthcare is not just a service, 
                  but a calling that requires dedication, expertise, and empathy.
                </p>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Continuous Learning</h4>
                <p className="text-gray-600 leading-relaxed">
                  Our team undergoes regular training and certification programs to stay updated with 
                  the latest medical practices, technology, and emergency response protocols. We invest 
                  in our people because they are our greatest asset.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
