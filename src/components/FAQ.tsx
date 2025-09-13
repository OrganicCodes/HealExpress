'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What services does HealExpress provide?',
      answer: 'HealExpress provides comprehensive emergency medical services including Road Ambulance, Train Ambulance, Air Ambulance, Home Healthcare, Medical Equipment Rental, and Insurance Support. We serve 500+ districts across India with 24/7 emergency response.'
    },
    {
      question: 'Do you provide ambulance services in small towns and villages?',
      answer: 'Yes, we provide ambulance services across India including small towns and villages. Our network covers 500+ districts and 80+ tier-1 and tier-2 cities, ensuring medical help reaches even the most remote locations.'
    },
    {
      question: 'How do I book an ambulance in an emergency?',
      answer: 'You can book an ambulance by calling our 24/7 emergency hotline at +91-9264198199, using our website contact form, or through our mobile app. Our multilingual call center will guide you through the process and dispatch the nearest available ambulance.'
    },
    {
      question: 'What is a Train Ambulance and when is it needed?',
      answer: 'Train Ambulance is a specialized service that uses Indian Railways to create mobile ICU cabins within express trains. It\'s ideal for long-distance patient transfers, providing a cost-effective and stable option for critical patients requiring seamless inter-city transit.'
    },
    {
      question: 'How much time does it take for an ambulance to reach me?',
      answer: 'Our average response time is 2-3 minutes for dispatch and 8-12 minutes for arrival in urban areas. In rural areas, it may take 15-20 minutes depending on the location. We use GPS tracking to ensure the fastest possible response.'
    },
    {
      question: 'Is your ambulance staff medically trained?',
      answer: 'Yes, all our ambulance staff are medically trained and certified. Our team includes doctors, nurses, paramedics, and EMTs with specialized training in emergency medicine, life support, and patient care.'
    },
    {
      question: 'Do you offer air ambulance service across India?',
      answer: 'Yes, we offer comprehensive air ambulance services across India and internationally. Our fleet includes helicopters and fixed-wing aircraft specially modified with ICU setups, staffed with aviation medicine trained professionals.'
    },
    {
      question: 'Can I rent medical equipment like oxygen concentrators or ICU beds?',
      answer: 'Yes, we provide high-quality, sanitized medical equipment for rent including ICU beds, oxygen concentrators, BiPAP/CPAP machines, nebulizers, wheelchairs, and cardiac monitors. All equipment is delivered and installed by trained staff.'
    },
    {
      question: 'Do you support insurance-based ambulance services?',
      answer: 'Yes, we partner with leading insurance companies to provide cashless ambulance services. We offer real-time policy verification, claim processing, and financial guidance for all major health insurance providers.'
    },
    {
      question: 'Is HealExpress government certified or recognized?',
      answer: 'Yes, HealExpress is government certified and recognized by various healthcare institutions. We have received multiple awards including Startup India certification, Six Sigma Healthcare Award, and recognition from state governments.'
    },
    {
      question: 'Do you offer corporate partnerships for hospitals or events?',
      answer: 'Yes, we offer corporate partnerships for hospitals, healthcare institutions, and events. We provide dedicated support, bulk billing, and customized service plans for corporate clients and healthcare organizations.'
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about HealExpress's emergency services, booking process, and nationwide support system
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="medical-card">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left flex items-center justify-between p-6 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-lg"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 rounded-full p-2">
                      <HelpCircle className="h-5 w-5 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <ChevronUp className="h-5 w-5 text-gray-500" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-500" />
                    )}
                  </div>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <div className="border-t border-gray-100 pt-4">
                      <p className="text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Contact for More Questions */}
        <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-gray-600 mb-6">
            Our customer support team is here to help you with any additional questions or concerns
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+919264198199" 
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
            >
              Call Us: +91-9264198199
            </a>
            <a 
              href="mailto:support@healexpress.com" 
              className="bg-white hover:bg-gray-50 text-blue-600 font-semibold py-3 px-6 rounded-lg border border-blue-600 transition-colors duration-200"
            >
              Email Us: support@healexpress.com
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
