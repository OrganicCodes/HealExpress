import PartnerHero from '@/components/PartnerHero'
import PartnershipBenefits from '@/components/PartnershipBenefits'
import PartnershipTypes from '@/components/PartnershipTypes'
import PartnerProcess from '@/components/PartnerProcess'
import PartnerTestimonials from '@/components/PartnerTestimonials'

export default function PartnerPage() {
  return (
    <div className="min-h-screen">
      <PartnerHero />
      <PartnershipBenefits />
      <PartnershipTypes />
      <PartnerProcess />
      <PartnerTestimonials />
    </div>
  )
}
