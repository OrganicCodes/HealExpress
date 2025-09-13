import { Phone, Mail, MapPin, Clock, Heart, Shield } from 'lucide-react'

export default function ContactHero() {
  const contactMethods = [
    {
      icon: Phone,
      title: 'Emergency Hotline',
      value: '+91-9264198199',
      description: '24/7 Emergency Medical Services',
      color: 'red'
    },
    {
      icon: Mail,
      title: 'Email Support',
      value: 'support@healexpress.com',
      description: 'General inquiries and support',
      color: 'blue'
    },
    {
      icon: MapPin,
      title: 'Head Office',
      value: 'Patna, Bihar',
      description: 'A/182, 2nd Floor, Near Lohiya Nagar Park',
      color: 'green'
    },
    {
      icon: Clock,
      title: 'Service Hours',
      value: '24/7 Available',
      description: 'Emergency services always available',
      color: 'purple'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'bg-red-100 text-red-600',
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            We are here to help you 24/7. Get in touch with us for emergency medical services, 
            general inquiries, or any healthcare needs.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactMethods.map((method, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
              <div className={`rounded-lg p-3 w-12 h-12 mb-4 flex items-center justify-center ${getColorClasses(method.color)}`}>
                <method.icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {method.title}
              </h3>
              <p className="text-blue-100 font-medium mb-2">
                {method.value}
              </p>
              <p className="text-blue-200 text-sm">
                {method.description}
              </p>
            </div>
          ))}
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-500/20 backdrop-blur-sm rounded-2xl p-8 border border-red-300/30 text-center">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Heart className="h-8 w-8 text-red-300" />
            <Shield className="h-8 w-8 text-red-300" />
          </div>
          <h3 className="text-2xl font-bold text-white mb-4">
            Medical Emergency?
          </h3>
          <p className="text-red-100 mb-6">
            For immediate medical assistance, call our emergency hotline now
          </p>
          <a 
            href="tel:+919264198199" 
            className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-lg inline-flex items-center space-x-2 transition-colors duration-200"
          >
            <Phone className="h-5 w-5" />
            <span>CALL EMERGENCY: +91-9264198199</span>
          </a>
        </div>
      </div>
    </section>
  )
}
