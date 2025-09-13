import { Truck, Train, Plane, Home, Shield, Stethoscope, CheckCircle, Clock, MapPin, Users } from 'lucide-react'

export default function DetailedServices() {
  const services = [
    {
      icon: Truck,
      title: 'Road Ambulance',
      description: 'Available 24/7 across India, our GPS-enabled road ambulances are equipped with ALS (Advanced Life Support) and BLS (Basic Life Support) systems.',
      features: [
        'GPS-Enabled Fleet',
        'Advanced Life Support',
        'Trained EMTs & Paramedics',
        '24/7 Emergency Response',
        'Hospital Partnerships',
        'Real-time Tracking'
      ],
      useCases: [
        'Accident Emergencies',
        'Cardiac Arrest',
        'Stroke Cases',
        'ICU Transfers',
        'Trauma Cases',
        'General Emergencies'
      ],
      color: 'blue'
    },
    {
      icon: Train,
      title: 'Train Ambulance',
      description: 'Ideal for long-distance patient transfers, our Train Ambulance services use Indian Railways to create mobile ICU cabins within express trains.',
      features: [
        'Mobile ICU Setup',
        'Oxygen Cylinders',
        'Cardiac Monitors',
        'Ventilators',
        'Stretcher Support',
        'Medical Escort Team'
      ],
      useCases: [
        'Long Distance Transfers',
        'Inter-city Medical Transport',
        'Cost-effective ICU Transfer',
        'Stable Patient Transport',
        'Rural Area Access',
        'Planned Medical Transfers'
      ],
      color: 'green'
    },
    {
      icon: Plane,
      title: 'Air Ambulance',
      description: 'HealExpress Air Ambulance fleet includes helicopters and fixed-wing aircraft specially modified with ICU setups for critical patient transport.',
      features: [
        'ICU-Modified Aircraft',
        'Aviation Medicine Trained Staff',
        'Organ Transfer Capability',
        'International Routes',
        'Neonatal Care',
        'High-risk Patient Transport'
      ],
      useCases: [
        'Organ Transplants',
        'Trauma Emergencies',
        'Neonatal Care',
        'Critical Patient Transport',
        'International Medical Evacuation',
        'Time-critical Cases'
      ],
      color: 'purple'
    },
    {
      icon: Home,
      title: 'Home Healthcare',
      description: 'Our Home Healthcare services bring hospital-grade care to your doorstep with skilled nurses, doctors, and medical professionals.',
      features: [
        'Skilled Nursing Care',
        'Doctor Home Visits',
        'Physiotherapy Services',
        'Elder Care Specialists',
        'Wound Management',
        'Post-surgical Care'
      ],
      useCases: [
        'Post-surgery Recovery',
        'Elderly Care',
        'Chronic Disease Management',
        'Physiotherapy',
        'Wound Care',
        'Medication Management'
      ],
      color: 'orange'
    },
    {
      icon: Shield,
      title: 'Insurance Support',
      description: 'We partner with leading insurance firms to provide seamless cashless claim support and financial guidance for medical emergencies.',
      features: [
        'Cashless Claims',
        'Real-time Policy Verification',
        'Financial Guidance',
        'Pre-authorization Support',
        'Claim Processing',
        'Insurance Network Access'
      ],
      useCases: [
        'Emergency Ambulance Services',
        'Pre-hospitalization Support',
        'Corporate Health Plans',
        'Family Health Insurance',
        'Senior Citizen Plans',
        'Critical Illness Coverage'
      ],
      color: 'indigo'
    },
    {
      icon: Stethoscope,
      title: 'Medical Equipment on Rent',
      description: 'High-quality, sanitized medical equipment for short or long-term home care, delivered and installed by trained professionals.',
      features: [
        'ICU Beds',
        'Oxygen Concentrators',
        'BiPAP/CPAP Machines',
        'Cardiac Monitors',
        'Wheelchairs',
        'Nebulizers'
      ],
      useCases: [
        'Post-operative Care',
        'Elderly Care',
        'Chronic Respiratory Conditions',
        'Mobility Support',
        'Home ICU Setup',
        'Rehabilitation Support'
      ],
      color: 'red'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-100 text-blue-600',
      green: 'bg-green-100 text-green-600',
      purple: 'bg-purple-100 text-purple-600',
      orange: 'bg-orange-100 text-orange-600',
      indigo: 'bg-indigo-100 text-indigo-600',
      red: 'bg-red-100 text-red-600'
    }
    return colorMap[color as keyof typeof colorMap] || 'bg-gray-100 text-gray-600'
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Detailed Service Information
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Comprehensive emergency medical services tailored to meet every healthcare need
          </p>
        </div>

        <div className="space-y-16">
          {services.map((service, index) => (
            <div key={index} className="medical-card">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Service Header */}
                <div className="lg:col-span-1">
                  <div className={`rounded-2xl p-6 w-20 h-20 mb-6 flex items-center justify-center ${getColorClasses(service.color)}`}>
                    <service.icon className="h-10 w-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Features and Use Cases */}
                <div className="lg:col-span-2">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Features */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Use Cases */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                        <Clock className="h-5 w-5 text-blue-500 mr-2" />
                        Common Use Cases
                      </h4>
                      <ul className="space-y-2">
                        {service.useCases.map((useCase, useCaseIndex) => (
                          <li key={useCaseIndex} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {useCase}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
