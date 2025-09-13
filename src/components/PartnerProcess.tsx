import { FileText, Phone, CheckCircle, Handshake, Users, Award } from 'lucide-react'

export default function PartnerProcess() {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our partnership application form with your organization details',
      details: 'Provide basic information about your organization, services, and partnership goals'
    },
    {
      step: 2,
      icon: Phone,
      title: 'Initial Consultation',
      description: 'Schedule a call with our partnership team to discuss your needs',
      details: 'We\'ll review your application and discuss how we can work together'
    },
    {
      step: 3,
      icon: CheckCircle,
      title: 'Verification & Approval',
      description: 'We verify your credentials and approve your partnership application',
      details: 'Background checks, license verification, and compliance review'
    },
    {
      step: 4,
      icon: Handshake,
      title: 'Partnership Agreement',
      description: 'Sign the partnership agreement and set up your account',
      details: 'Legal documentation, terms & conditions, and account setup'
    },
    {
      step: 5,
      icon: Users,
      title: 'Training & Onboarding',
      description: 'Complete training programs and get familiar with our systems',
      details: 'Platform training, operational procedures, and best practices'
    },
    {
      step: 6,
      icon: Award,
      title: 'Go Live',
      description: 'Start your partnership journey with HealExpress',
      details: 'Full access to our platform and begin serving patients'
    }
  ]

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Partnership Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Simple and transparent process to become a HealExpress partner
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection Line */}
              {index < steps.length - 1 && (
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

        {/* Timeline */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Partnership Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1-2
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Days</h4>
                <p className="text-gray-600">Application Review</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3-5
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Days</h4>
                <p className="text-gray-600">Verification Process</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1-2
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Weeks</h4>
                <p className="text-gray-600">Training & Onboarding</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
