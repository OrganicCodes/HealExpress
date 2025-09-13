import { Building2, Users, Truck, Stethoscope, Shield, Heart } from 'lucide-react'

export default function PartnershipTypes() {
  const partnershipTypes = [
    {
      icon: Building2,
      title: 'Hospital Partners',
      description: 'Partner with us to provide seamless patient transfers and emergency services',
      requirements: [
        'Licensed healthcare facility',
        'Minimum 50 bed capacity',
        '24/7 emergency department',
        'Qualified medical staff'
      ],
      benefits: [
        'Priority ambulance dispatch',
        'Direct billing system',
        'Real-time patient tracking',
        'Dedicated support team'
      ]
    },
    {
      icon: Users,
      title: 'Healthcare Professionals',
      description: 'Join our network of doctors, nurses, and paramedics',
      requirements: [
        'Valid medical license',
        'Emergency medicine experience',
        'CPR/BLS certification',
        'Background verification'
      ],
      benefits: [
        'Flexible work schedules',
        'Competitive compensation',
        'Professional development',
        'Insurance coverage'
      ]
    },
    {
      icon: Truck,
      title: 'Ambulance Operators',
      description: 'Partner with us to expand your ambulance fleet and reach',
      requirements: [
        'Valid ambulance permits',
        'GPS tracking system',
        'Life support equipment',
        'Trained medical staff'
      ],
      benefits: [
        'Increased business volume',
        'Technology support',
        'Marketing assistance',
        'Revenue sharing'
      ]
    },
    {
      icon: Stethoscope,
      title: 'Medical Equipment Suppliers',
      description: 'Supply medical equipment and devices for our services',
      requirements: [
        'Quality certifications',
        'Reliable supply chain',
        'Maintenance support',
        'Competitive pricing'
      ],
      benefits: [
        'Long-term contracts',
        'Bulk purchase orders',
        'Brand visibility',
        'Payment security'
      ]
    },
    {
      icon: Shield,
      title: 'Insurance Partners',
      description: 'Integrate with our platform for cashless emergency services',
      requirements: [
        'Valid insurance license',
        'Nationwide network',
        'Digital infrastructure',
        'Customer support'
      ],
      benefits: [
        'Increased policy sales',
        'Customer satisfaction',
        'Reduced claim processing',
        'Brand partnership'
      ]
    },
    {
      icon: Heart,
      title: 'Technology Partners',
      description: 'Develop innovative solutions for healthcare technology',
      requirements: [
        'Healthcare tech expertise',
        'Scalable solutions',
        'Data security compliance',
        'Integration capabilities'
      ],
      benefits: [
        'Market access',
        'Technical collaboration',
        'Revenue sharing',
        'Innovation recognition'
      ]
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partnership Types
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the partnership model that best fits your organization and goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <type.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {type.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {type.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {type.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                  <ul className="space-y-1">
                    {type.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-200">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
