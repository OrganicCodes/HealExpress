import { Shield, Heart, Clock, Award } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About HealExpress
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed mb-8">
            Founded in 2020, HealExpress is revolutionizing emergency healthcare across India. 
            We bring fast, reliable, and affordable ambulance services powered by technology, 
            compassion, and professionalism.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Shield className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Certified Service</h3>
              <p className="text-sm text-blue-100">Government recognized</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Heart className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Compassionate Care</h3>
              <p className="text-sm text-blue-100">Patient-first approach</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Clock className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-sm text-blue-100">Always ready to help</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Award className="h-8 w-8 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm text-blue-100">Recognized excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
