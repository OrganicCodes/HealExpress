import { Heart, Shield, Users, Clock, Award, CheckCircle } from 'lucide-react'

export default function ValuesSection() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion First',
      description: 'We treat every patient and family with empathy, understanding, and genuine care. Our approach is always human-centered.',
      color: 'red'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'When you call HealExpress, you can count on us. We maintain the highest standards of service delivery and safety.',
      color: 'blue'
    },
    {
      icon: Users,
      title: 'Inclusivity',
      description: 'Healthcare is a right, not a privilege. We serve everyone regardless of location, economic status, or background.',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Urgency',
      description: 'Time is critical in emergencies. We respond quickly and efficiently to save lives when every second counts.',
      color: 'yellow'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We continuously improve our services, technology, and training to provide world-class emergency medical care.',
      color: 'purple'
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We operate with complete transparency, honesty, and ethical practices in all our interactions and services.',
      color: 'indigo'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'bg-red-100 text-red-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      yellow: 'bg-yellow-100 text-yellow-600',
      purple: 'bg-purple-100 text-purple-600',
      indigo: 'bg-indigo-100 text-indigo-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The principles that guide everything we do at HealExpress
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className={`rounded-lg p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${getColorClasses(value.color)}`}>
                <value.icon className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {value.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story Section */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Our Story
            </h3>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                HealExpress was born from a simple yet powerful realization: in India's vast landscape, 
                quality emergency medical care should be accessible to everyone, everywhere. Founded in 2020, 
                we started with a mission to bridge the gap between life-threatening emergencies and timely medical help.
              </p>
              <p>
                What began as a small team with big dreams has grown into India's most trusted emergency 
                medical service platform. Today, we serve over 2,00,000 families across 500+ districts, 
                but our core mission remains unchanged: bringing hope to life when it matters most.
              </p>
              <p>
                Our journey is marked by countless lives saved, families reunited, and communities strengthened. 
                Every ambulance dispatched, every call answered, every life touched — they all contribute to 
                our story of compassion, innovation, and unwavering commitment to serving humanity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
