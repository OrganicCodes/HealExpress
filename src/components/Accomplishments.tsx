import { Users, Heart, Building2, Truck, Users2, Award } from 'lucide-react'

export default function Accomplishments() {
  const stats = [
    {
      icon: Heart,
      value: '100%',
      label: 'Positive Reviews',
      description: 'From Happy Patients & Families'
    },
    {
      icon: Users,
      value: '200,000+',
      label: 'Cases Handled',
      description: 'Emergency Patient Transfers Across India'
    },
    {
      icon: Building2,
      value: '1,000+',
      label: 'Hospital Partners',
      description: 'Trusted Network Across Country'
    },
    {
      icon: Truck,
      value: '2,000+',
      label: 'Ambulance Network',
      description: 'Fleet Including Road, Rail & Air Ambulances'
    },
    {
      icon: Users2,
      value: '450+',
      label: 'Team Members',
      description: 'Doctors, Paramedics & Tech Professionals'
    },
    {
      icon: Award,
      value: '12+',
      label: 'Awards & Recognitions',
      description: 'National & State Honors Since 2020'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Accomplishments
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Trusted by thousands of families across India for reliable emergency medical services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="medical-card text-center group hover:scale-105 transition-transform duration-300 h-full flex flex-col">
              <div className="bg-blue-100 rounded-full p-3 sm:p-4 w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600" />
              </div>
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-2">
                {stat.value}
              </div>
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600 text-xs sm:text-sm flex-grow">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
