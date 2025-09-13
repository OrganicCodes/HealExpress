import { Shield, CheckCircle, Clock, Users, FileText, Phone } from 'lucide-react'

export default function InsuranceSupport() {
  const insurancePartners = [
    'PBPartners',
    'CareGuarantee',
    'Bajaj Allianz',
    'ICICI Lombard',
    'HDFC ERGO',
    'New India Assurance',
    'Oriental Insurance',
    'United India Insurance'
  ]

  const services = [
    {
      icon: FileText,
      title: 'Real-time Policy Verification',
      description: 'Instant verification of your health insurance policy and coverage details',
      features: ['Policy validation', 'Coverage check', 'Eligibility verification', 'Instant confirmation']
    },
    {
      icon: CheckCircle,
      title: 'Cashless Claim Support',
      description: 'Seamless cashless ambulance services with direct billing to insurance company',
      features: ['Direct billing', 'No upfront payment', 'Claim processing', 'Fast approval']
    },
    {
      icon: Clock,
      title: 'Pre-authorization Support',
      description: 'Assistance with pre-authorization for planned medical procedures and transfers',
      features: ['Pre-auth assistance', 'Documentation help', 'Fast processing', 'Status tracking']
    },
    {
      icon: Users,
      title: 'Corporate Partnerships',
      description: 'Dedicated support for corporate health plans and employee medical emergencies',
      features: ['Corporate accounts', 'Bulk billing', 'Employee support', 'Custom plans']
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Insurance Support
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Seamless integration with leading insurance providers for hassle-free emergency medical services
          </p>
        </div>

        {/* Insurance Partners */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Our Insurance Partners
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {insurancePartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
                <div className="bg-blue-100 rounded-lg p-3 mb-3">
                  <Shield className="h-8 w-8 text-blue-600 mx-auto" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900">{partner}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <div key={index} className="medical-card group hover:shadow-xl transition-all duration-300">
              <div className="bg-blue-100 rounded-lg p-4 w-16 h-16 mb-6 flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                <service.icon className="h-8 w-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            How Insurance Support Works
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">1</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Call Emergency</h4>
              <p className="text-sm text-gray-600">Contact our 24/7 emergency hotline</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">2</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Policy Verification</h4>
              <p className="text-sm text-gray-600">We verify your insurance policy instantly</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">3</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Cashless Service</h4>
              <p className="text-sm text-gray-600">Ambulance dispatched with cashless billing</p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <span className="text-blue-600 font-bold text-xl">4</span>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Claim Processing</h4>
              <p className="text-sm text-gray-600">We handle all claim paperwork for you</p>
            </div>
          </div>
        </div>

        {/* Contact for Insurance Support */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Need Help with Insurance Claims?
          </h3>
          <p className="text-blue-100 mb-6">
            Our dedicated insurance support team is here to help you with all your claim-related queries
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors duration-200">
              <Phone className="h-4 w-4 inline mr-2" />
              Call Insurance Support
            </button>
            <button className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-400 transition-colors duration-200">
              Check Policy Status
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
