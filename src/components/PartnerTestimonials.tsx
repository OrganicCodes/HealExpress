import { Star, Quote, Building2, Users, Award } from 'lucide-react'

export default function PartnerTestimonials() {
  const testimonials = [
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Medical Director',
      organization: 'Apollo Hospitals, Delhi',
      rating: 5,
      text: 'Partnering with HealExpress has significantly improved our patient transfer capabilities. The seamless integration and 24/7 support have been exceptional.',
      partnership: 'Hospital Partner',
      duration: '2 years'
    },
    {
      name: 'Priya Sharma',
      role: 'Nursing Supervisor',
      organization: 'Fortis Healthcare',
      rating: 5,
      text: 'The training and support provided by HealExpress is outstanding. Our nursing staff feels confident and well-equipped to handle emergency situations.',
      partnership: 'Healthcare Professional',
      duration: '1.5 years'
    },
    {
      name: 'Amit Patel',
      role: 'Fleet Manager',
      organization: 'MediTrans Ambulance Services',
      rating: 5,
      text: 'Our partnership with HealExpress has tripled our business volume. The technology platform and customer support are top-notch.',
      partnership: 'Ambulance Operator',
      duration: '3 years'
    },
    {
      name: 'Dr. Suman Reddy',
      role: 'Emergency Medicine Specialist',
      organization: 'Max Healthcare',
      rating: 5,
      text: 'HealExpress provides the most reliable emergency medical services. Their response time and medical expertise are unmatched in the industry.',
      partnership: 'Medical Professional',
      duration: '2.5 years'
    },
    {
      name: 'Vikram Singh',
      role: 'Operations Head',
      organization: 'MediCare Equipment',
      rating: 5,
      text: 'Supplying equipment to HealExpress has been a game-changer for our business. Their quality standards and payment reliability are excellent.',
      partnership: 'Equipment Supplier',
      duration: '4 years'
    },
    {
      name: 'Anita Desai',
      role: 'Partnership Manager',
      organization: 'Bajaj Allianz Insurance',
      rating: 5,
      text: 'The integration with HealExpress has streamlined our claim processing and improved customer satisfaction. It\'s a win-win partnership.',
      partnership: 'Insurance Partner',
      duration: '2 years'
    }
  ]

  const stats = [
    {
      icon: Building2,
      value: '1,000+',
      label: 'Hospital Partners',
      description: 'Trusted healthcare facilities'
    },
    {
      icon: Users,
      value: '5,000+',
      label: 'Healthcare Professionals',
      description: 'Doctors, nurses, and paramedics'
    },
    {
      icon: Award,
      value: '98%',
      label: 'Partner Satisfaction',
      description: 'Based on annual surveys'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Partners Say
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our successful partners about their experience with HealExpress
          </p>
        </div>

        {/* Partner Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="medical-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <stat.icon className="h-8 w-8 text-blue-600" />
              </div>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-blue-100 rounded-full p-3 flex-shrink-0">
                  <Quote className="h-6 w-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-1 mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    "{testimonial.text}"
                  </p>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    {testimonial.partnership}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">{testimonial.organization}</p>
                <p className="text-xs text-gray-500">Partnership Duration: {testimonial.duration}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Join Our Network?
          </h3>
          <p className="text-blue-100 mb-6">
            Become part of India's most trusted emergency medical service network
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Apply for Partnership
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Contact Partnership Team
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
