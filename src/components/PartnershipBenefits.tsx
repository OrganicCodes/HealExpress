import { Building2, Users, TrendingUp, Shield, Clock, Award } from 'lucide-react'

export default function PartnershipBenefits() {
  const benefits = [
    {
      icon: Building2,
      title: 'Hospital Partnerships',
      description: 'Connect with 1,000+ hospitals and healthcare centers across India',
      features: [
        'Priority ambulance dispatch',
        'Seamless patient transfers',
        'Real-time tracking',
        'Dedicated support team'
      ]
    },
    {
      icon: Users,
      title: 'Healthcare Professional Network',
      description: 'Join our network of doctors, nurses, and paramedics',
      features: [
        'Flexible work opportunities',
        'Competitive compensation',
        'Professional development',
        '24/7 support system'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Technology Integration',
      description: 'Access our advanced healthcare technology platform',
      features: [
        'GPS tracking systems',
        'Patient management tools',
        'Real-time communication',
        'Data analytics dashboard'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance Partnerships',
      description: 'Partner with leading insurance companies for cashless services',
      features: [
        'Direct billing system',
        'Claim processing support',
        'Policy verification',
        'Financial guidance'
      ]
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock technical and operational support',
      features: [
        'Dedicated helpline',
        'Technical assistance',
        'Emergency response',
        'Training programs'
      ]
    },
    {
      icon: Award,
      title: 'Recognition & Growth',
      description: 'Be part of India\'s most trusted healthcare brand',
      features: [
        'Brand recognition',
        'Marketing support',
        'Growth opportunities',
        'Industry awards'
      ]
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partnership Benefits
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover the advantages of partnering with HealExpress and how we can help grow your healthcare business
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <benefit.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {benefit.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {benefit.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                {benefit.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
