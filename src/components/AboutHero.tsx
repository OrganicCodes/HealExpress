import Image from 'next/image'
import { Shield, Heart, Clock, Award } from 'lucide-react'

export default function AboutHero() {
  return (
    <section className="gradient-bg text-white section-padding relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About Life Secure & Home Care
            </h1>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              Founded in 2020, Life Secure & Home Care is revolutionizing home healthcare across India. 
              We bring professional, reliable, and compassionate home care services powered by technology, 
              medical expertise, and genuine care for families.
            </p>
            
            {/* Hero Image */}
            <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8">
              <Image
                src="https://media.istockphoto.com/id/1199060494/photo/insurance-protecting-family-health-live-house-and-car-concept.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yp2O4mTDRzmlIRX9ciN7J3IV_FohRRqhbDhEgNEeMIM="
                alt="Professional home care team providing healthcare services"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>

          {/* Right Content - Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
              <Shield className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Certified Service</h3>
              <p className="text-sm text-blue-100">Government recognized</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
              <Heart className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Compassionate Care</h3>
              <p className="text-sm text-blue-100">Patient-first approach</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
              <Clock className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">24/7 Availability</h3>
              <p className="text-sm text-blue-100">Always ready to help</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
              <Award className="h-8 w-8 mx-auto mb-3 group-hover:scale-110 transition-transform duration-300" />
              <h3 className="font-semibold mb-2">Award Winning</h3>
              <p className="text-sm text-blue-100">Recognized excellence</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
