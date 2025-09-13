import { Heart, Users, Award, Clock, Shield, TrendingUp } from 'lucide-react'

export default function WhyWorkWithUs() {
  const reasons = [
    {
      icon: Heart,
      title: 'Meaningful Work',
      description: 'Every day, you\'ll be directly contributing to saving lives and helping families in their most critical moments.',
      color: 'red'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with a diverse team of healthcare professionals, engineers, and support staff who share your passion.',
      color: 'blue'
    },
    {
      icon: Award,
      title: 'Recognition & Growth',
      description: 'Be part of an award-winning organization with clear career advancement opportunities and professional development.',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and comprehensive benefits that support both your professional and personal life.',
      color: 'purple'
    },
    {
      icon: Shield,
      title: 'Job Security',
      description: 'Join a stable, growing company with strong financial backing and expanding operations across India.',
      color: 'indigo'
    },
    {
      icon: TrendingUp,
      title: 'Innovation & Technology',
      description: 'Work with cutting-edge healthcare technology and be part of digital transformation in emergency medical services.',
      color: 'orange'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'bg-red-100 text-red-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      orange: 'bg-orange-100 text-orange-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover what makes HealExpress a great place to work and grow your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className={`rounded-lg p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getColorClasses(reason.color)}`}>
                <reason.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {reason.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Company Culture */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Our Company Culture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">Our Values</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Compassion in every interaction</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Excellence in service delivery</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Innovation in healthcare solutions</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span>Integrity in all our actions</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <h4 className="text-xl font-semibold text-gray-900">What We Offer</h4>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Competitive salary packages</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Health insurance coverage</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Professional development programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Flexible work arrangements</span>
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
