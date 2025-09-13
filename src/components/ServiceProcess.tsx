import { Phone, MapPin, Clock, CheckCircle, Users, Shield } from 'lucide-react'

export default function ServiceProcess() {
  const processSteps = [
    {
      step: 1,
      icon: Phone,
      title: 'Call Emergency Hotline',
      description: 'Dial +91-9264198199 or use our app to request emergency medical assistance',
      details: 'Our multilingual call center is available 24/7 to take your emergency call'
    },
    {
      step: 2,
      icon: MapPin,
      title: 'Location Verification',
      description: 'Provide pickup and destination locations for accurate dispatch',
      details: 'GPS coordinates are captured for precise ambulance routing'
    },
    {
      step: 3,
      icon: Clock,
      title: 'Rapid Dispatch',
      description: 'Nearest available ambulance is dispatched within 2-3 minutes',
      details: 'Our dispatch system automatically selects the closest available unit'
    },
    {
      step: 4,
      icon: Users,
      title: 'Medical Team Arrival',
      description: 'Trained paramedics arrive with advanced life support equipment',
      details: 'Each team includes certified EMTs and paramedics with specialized training'
    },
    {
      step: 5,
      icon: Shield,
      title: 'Safe Transport',
      description: 'Patient is safely transported to the designated healthcare facility',
      details: 'Continuous monitoring and care during transport with real-time updates'
    },
    {
      step: 6,
      icon: CheckCircle,
      title: 'Handover & Follow-up',
      description: 'Seamless handover to hospital staff with complete medical records',
      details: 'Follow-up calls to ensure patient care and service satisfaction'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How Our Service Works
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple, fast, and reliable emergency medical response process
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < processSteps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-16 w-full h-0.5 bg-blue-200 z-0"></div>
              )}
              
              <div className="medical-card text-center relative z-10 group hover:shadow-xl transition-all duration-300">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                  <step.icon className="h-8 w-8 text-blue-600" />
                </div>
                
                <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {step.step}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {step.description}
                </p>
                
                <div className="bg-gray-50 rounded-lg p-3 text-sm text-gray-500">
                  {step.details}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Response Time */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Our Response Time Promise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">2-3 min</div>
              <p className="text-blue-100">Dispatch Time</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">8-12 min</div>
              <p className="text-blue-100">Urban Arrival</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-yellow-300 mb-2">15-20 min</div>
              <p className="text-blue-100">Rural Arrival</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
