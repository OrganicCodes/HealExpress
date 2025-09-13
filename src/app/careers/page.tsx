import CareersHero from '@/components/CareersHero'
import JobOpenings from '@/components/JobOpenings'
import WhyWorkWithUs from '@/components/WhyWorkWithUs'
import ApplicationProcess from '@/components/ApplicationProcess'
import EmployeeBenefits from '@/components/EmployeeBenefits'

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      <CareersHero />
      <WhyWorkWithUs />
      <JobOpenings />
      <EmployeeBenefits />
      <ApplicationProcess />
    </div>
  )
}
