import { FileText, Phone, CheckCircle, Users, Award, Clock } from 'lucide-react'

export default function ApplicationProcess() {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: 'Submit Application',
      description: 'Fill out our online application form with your details and resume',
      details: 'Upload your resume, cover letter, and complete the application form'
    },
    {
      step: 2,
      icon: Phone,
      title: 'Initial Screening',
      description: 'Phone or video interview with our HR team',
      details: 'Brief conversation about your background and interest in the role'
    },
    {
      step: 3,
      icon: CheckCircle,
      title: 'Technical Assessment',
      description: 'Complete relevant tests or assignments for the position',
      details: 'Role-specific assessments to evaluate your skills and knowledge'
    },
    {
      step: 4,
      icon: Users,
      title: 'Panel Interview',
      description: 'Meet with the hiring manager and team members',
      details: 'In-depth discussion about the role, team fit, and your experience'
    },
    {
      step: 5,
      icon: Award,
      title: 'Reference Check',
      description: 'We contact your previous employers and references',
      details: 'Background verification and reference checks'
    },
    {
      step: 6,
      icon: Clock,
      title: 'Job Offer',
      description: 'Receive your offer letter and join our team',
      details: 'Welcome to HealExpress! Complete onboarding and start your journey'
    }
  ]

  return (
    <section className="bg-gray-50 section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Application Process
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our streamlined hiring process ensures we find the right fit for both you and our team
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
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Application Timeline
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1-2
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Days</h4>
                <p className="text-gray-600">Initial Screening</p>
              </div>
              <div className="text-center">
                <div className="bg-green-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3-5
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Days</h4>
                <p className="text-gray-600">Technical Assessment</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1-2
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Weeks</h4>
                <p className="text-gray-600">Final Interview & Offer</p>
              </div>
            </div>
          </div>
        </div>

        {/* Application CTA */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Apply?
          </h3>
          <p className="text-blue-100 mb-6">
            Join our mission to save lives and build a healthier future for India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-lg transition-colors duration-200">
              Browse Open Positions
            </button>
            <button className="bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Submit General Application
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
