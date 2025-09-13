import { Users, Heart, Award, TrendingUp } from 'lucide-react'

export default function CareersHero() {
  const highlights = [
    {
      icon: Users,
      title: '450+ Team Members',
      description: 'Join our growing team of healthcare professionals'
    },
    {
      icon: Heart,
      title: 'Mission-Driven',
      description: 'Work with purpose to save lives every day'
    },
    {
      icon: Award,
      title: 'Award-Winning',
      description: 'Be part of India\'s most trusted EMS platform'
    },
    {
      icon: TrendingUp,
      title: 'Growth Opportunities',
      description: 'Advance your career in healthcare technology'
    }
  ]

  return (
    <section className="gradient-bg text-white section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Be part of India's most trusted emergency medical service platform. 
            Help us save lives and build a healthier future for millions of families.
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 group hover:bg-white/20 transition-all duration-300">
              <div className="bg-white/20 rounded-lg p-4 w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {highlight.title}
              </h3>
              <p className="text-blue-100 text-sm">
                {highlight.description}
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
            Explore career opportunities and join our mission to revolutionize healthcare
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-4 px-8 rounded-lg transition-colors duration-200">
              View Open Positions
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200">
              Submit Your Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
