import { Award, Star, Trophy, Medal, Shield, CheckCircle } from 'lucide-react'

export default function Awards() {
  const awards = [
    {
      icon: Award,
      title: 'Startup India Certified',
      description: 'Recognized by Government of India'
    },
    {
      icon: Trophy,
      title: 'Best Emergency Service Award',
      description: 'Healthcare Excellence Recognition'
    },
    {
      icon: Medal,
      title: 'Six Sigma Healthcare Award',
      description: 'Quality Management Excellence'
    },
    {
      icon: Shield,
      title: 'CSR Health Impact Awards',
      description: 'Social Responsibility Recognition'
    },
    {
      icon: Star,
      title: 'Medgate Excellence Award',
      description: 'Medical Service Excellence'
    },
    {
      icon: CheckCircle,
      title: 'Healthcare Innovation Award',
      description: 'Innovation in Medical Services'
    }
  ]

  const newsArticles = [
    'Business Standard',
    'Startup Bharat',
    'ANI News',
    'Speed India News',
    'Medicircle',
    'Buland Duniya',
    'The Startup Lab',
    'Thip Media'
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why India Trusts HealExpress
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            From national awards to international recognition — HealExpress has been acknowledged 
            for innovation, medical service excellence, and building India's most inclusive 
            emergency healthcare network.
          </p>
        </div>

        {/* Awards Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Awards & Recognitions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg p-4 w-16 h-16 mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <award.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  {award.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {award.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* News & Articles */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            News & Articles
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {newsArticles.map((article, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <div className="w-full h-16 bg-gradient-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-sm">{article.split(' ')[0]}</span>
                  </div>
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-2">
                  {article}
                </h4>
                <button className="text-blue-600 hover:text-blue-700 text-xs font-medium">
                  Read Full Article
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Founder on Josh Talks
            </h3>
            <p className="text-gray-600 mb-6">
              Learn about our journey and vision from our founder's inspiring talk about 
              revolutionizing emergency healthcare in India.
            </p>
            <div className="bg-white rounded-lg p-6 shadow-lg">
              <div className="bg-gray-100 rounded-lg p-4 mb-4">
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-green-100 rounded flex items-center justify-center">
                  <div className="text-center">
                    <div className="bg-blue-600 text-white rounded-full p-3 w-16 h-16 mx-auto mb-2 flex items-center justify-center">
                      <span className="text-2xl">▶</span>
                    </div>
                    <p className="text-gray-600 font-medium">Watch Founder's Talk</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-600">
                "Bringing Hope to Life - The HealExpress Story"
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
