import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Rohan Patel',
      location: 'Ahmedabad, Gujarat',
      rating: 5,
      text: 'Excellent service! HealExpress provided timely medical assistance when we needed it most. Truly reliable home healthcare.',
      service: 'Home Healthcare'
    },
    {
      name: 'Priya Sharma',
      location: 'Jaipur, Rajasthan',
      rating: 5,
      text: 'Their nursing staff is very professional. Made my father\'s recovery smooth during his post-surgery care.',
      service: 'Nursing Care'
    },
    {
      name: 'Arjun Singh',
      location: 'Lucknow, Uttar Pradesh',
      rating: 5,
      text: 'Good physiotherapy services. Would recommend their experienced therapists for elderly care.',
      service: 'Physiotherapy'
    },
    {
      name: 'Ananya Reddy',
      location: 'Hyderabad, Telangana',
      rating: 5,
      text: '24/7 availability is their biggest strength. Emergency medical care at home saved us during late night crisis.',
      service: 'Emergency Care'
    },
    {
      name: 'Nandini Iyer',
      location: 'Chennai, Tamil Nadu',
      rating: 5,
      text: 'Trustworthy medical attendants for dementia patients. My mother feels comfortable with their caregivers.',
      service: 'Elder Care'
    },
    {
      name: 'Vikram Joshi',
      location: 'Pune, Maharashtra',
      rating: 5,
      text: 'Good palliative care support. Could improve their medical equipment range, but overall satisfactory experience.',
      service: 'Palliative Care'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What People Say About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Real stories from real families who trust HealExpress with their most precious moments
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                  <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded-full">
                    {testimonial.service}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-2xl font-bold text-gray-900">5.0</span>
            </div>
            <p className="text-gray-600 mb-6">
              Based on 810 reviews
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                powered by Google
              </h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
                Review Us on Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
