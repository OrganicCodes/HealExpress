import { Heart, Shield, Clock, Users, Award, TrendingUp, Home, BookOpen } from 'lucide-react'

export default function EmployeeBenefits() {
  const benefits = [
    {
      icon: Heart,
      title: 'Health Insurance',
      description: 'Comprehensive health coverage for you and your family',
      category: 'Health & Wellness'
    },
    {
      icon: Shield,
      title: 'Life Insurance',
      description: 'Life insurance coverage for financial security',
      category: 'Financial Security'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible working hours',
      category: 'Work-Life Balance'
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Regular team events and company outings',
      category: 'Culture & Community'
    },
    {
      icon: Award,
      title: 'Performance Bonus',
      description: 'Annual performance-based bonuses and incentives',
      category: 'Recognition'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Clear career progression paths and promotions',
      category: 'Professional Development'
    },
    {
      icon: Home,
      title: 'Remote Work',
      description: 'Work from home options for eligible positions',
      category: 'Flexibility'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: 'Training programs and skill development opportunities',
      category: 'Professional Development'
    }
  ]

  const categories = ['All', 'Health & Wellness', 'Financial Security', 'Work-Life Balance', 'Culture & Community', 'Recognition', 'Professional Development', 'Flexibility']

  const getCategoryColor = (category: string) => {
    const colorMap = {
      'Health & Wellness': 'bg-red-100 text-red-600',
      'Financial Security': 'bg-green-100 text-green-600',
      'Work-Life Balance': 'bg-blue-100 text-blue-600',
      'Culture & Community': 'bg-purple-100 text-purple-600',
      'Recognition': 'bg-yellow-100 text-yellow-600',
      'Professional Development': 'bg-indigo-100 text-indigo-600',
      'Flexibility': 'bg-orange-100 text-orange-600'
    }
    return colorMap[category as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Employee Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We believe in taking care of our team members with comprehensive benefits and perks
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                category === 'All' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className={`rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getCategoryColor(benefit.category)}`}>
                <benefit.icon className="h-6 w-6" />
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                {benefit.description}
              </p>

              <span className={`text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(benefit.category)}`}>
                {benefit.category}
              </span>
            </div>
          ))}
        </div>

        {/* Additional Perks */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Additional Perks & Perks
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Financial Benefits</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Provident Fund (PF) contribution</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Gratuity benefits</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Performance-based incentives</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Referral bonus program</span>
                  </li>
                </ul>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Work Environment</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Modern office spaces</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Free meals and snacks</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Gym and wellness facilities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Employee assistance program</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
