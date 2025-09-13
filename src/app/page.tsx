import Hero from '@/components/Hero'
import Accomplishments from '@/components/Accomplishments'
import AboutSection from '@/components/AboutSection'
import ServicesSection from '@/components/ServicesSection'
import VisionMission from '@/components/VisionMission'
import Coverage from '@/components/Coverage'
import Awards from '@/components/Awards'
import WhyChooseUs from '@/components/WhyChooseUs'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Accomplishments />
      <AboutSection />
      <ServicesSection />
      <VisionMission />
      <Coverage />
      <Awards />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
    </div>
  )
}