import ContactHero from '@/components/ContactHero'
import ContactForm from '@/components/ContactForm'
import OfficeLocations from '@/components/OfficeLocations'
import FAQ from '@/components/FAQ'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <ContactHero />
      <ContactForm />
      <OfficeLocations />
      <FAQ />
    </div>
  )
}
