import { Users, Heart, Building2, Truck, Award, Clock } from 'lucide-react'

export default function StatsSection() {
  const stats = [
    {
      icon: Heart,
      value: '100%',
      label: 'Positive Reviews',
      description: 'From Happy Patients & Families',
      color: 'text-red-500'
    },
    {
      icon: Users,
      value: '200,000+',
      label: 'Lives Saved',
      description: 'Emergency Patient Transfers Across India',
      color: 'text-blue-500'
    },
    {
      icon: Building2,
      value: '1,000+',
      label: 'Hospital Partners',
      description: 'Trusted Network Across Country',
      color: 'text-green-500'
    },
    {
      icon: Truck,
      value: '2,000+',
      label: 'Ambulance Fleet',
      description: 'Road, Rail & Air Ambulances',
      color: 'text-purple-500'
    },
    {
      icon: Users,
      value: '450+',
      label: 'Team Members',
      description: 'Doctors, Paramedics & Tech Professionals',
      color: 'text-indigo-500'
    },
    {
      icon: Award,
      value: '12+',
      label: 'Awards Won',
      description: 'National & State Honors Since 2020',
      color: 'text-yellow-500'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The measurable difference we've made in emergency healthcare across India
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="medical-card text-center group hover:scale-105 transition-transform duration-300">
              <div className="bg-gray-100 rounded-full p-4 w-20 h-20 mx-auto mb-6 flex items-center justify-center group-hover:bg-gray-200 transition-colors duration-300">
                <stat.icon className={`h-10 w-10 ${stat.color}`} />
              </div>
              <div className={`text-4xl md:text-5xl font-bold mb-3 ${stat.color}`}>
                {stat.value}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {stat.label}
              </h3>
              <p className="text-gray-600">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Impact Stories */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Clock className="h-12 w-12 text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Average Response Time</h3>
            <p className="text-3xl font-bold text-blue-600 mb-2">8 Minutes</p>
            <p className="text-gray-600">In urban areas</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Heart className="h-12 w-12 text-green-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Success Rate</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">99.8%</p>
            <p className="text-gray-600">Successful transfers</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full p-6 w-24 h-24 mx-auto mb-4 flex items-center justify-center">
              <Award className="h-12 w-12 text-purple-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Satisfaction</h3>
            <p className="text-3xl font-bold text-purple-600 mb-2">4.9/5</p>
            <p className="text-gray-600">Average rating</p>
          </div>
        </div>
      </div>
    </section>
  )
}
