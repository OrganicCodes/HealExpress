import { Handshake, Users, TrendingUp, Award } from 'lucide-react'

export default function PartnerHero() {
  const benefits = [
    {
      icon: Handshake,
      title: 'Strategic Partnership',
      description: 'Join India\'s leading emergency medical service network'
    },
    {
      icon: Users,
      title: 'Expanded Reach',
      description: 'Access to 500+ districts and 2,00,000+ families'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunity',
      description: 'Scale your healthcare business with our platform'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Be part of an award-winning healthcare ecosystem'
    }
  ]

  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Partner With Us
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Join HealExpress in revolutionizing emergency healthcare across India. 
            Together, we can save more lives and build a stronger healthcare ecosystem.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
              <div className="bg-white/20 rounded-lg p-4 w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {benefit.title}
              </h3>
              <p className="text-blue-100 text-sm">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Make a Difference?
          </h3>
          <p className="text-blue-100 mb-6">
            Join thousands of healthcare professionals who trust HealExpress
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors duration-200">
              Become a Partner
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Download Partnership Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
