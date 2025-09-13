import ServicesHero from '@/components/ServicesHero'
import DetailedServices from '@/components/DetailedServices'
import ServiceProcess from '@/components/ServiceProcess'
import EquipmentRental from '@/components/EquipmentRental'
import InsuranceSupport from '@/components/InsuranceSupport'
import ServiceAreas from '@/components/ServiceAreas'

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <ServicesHero />
      <DetailedServices />
      <ServiceProcess />
      <EquipmentRental />
      <InsuranceSupport />
      <ServiceAreas />
    </div>
  )
}
