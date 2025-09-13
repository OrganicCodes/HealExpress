import AboutHero from '@/components/AboutHero'
import MissionVision from '@/components/MissionVision'
import TeamSection from '@/components/TeamSection'
import ValuesSection from '@/components/ValuesSection'
import StatsSection from '@/components/StatsSection'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <AboutHero />
      <MissionVision />
      <ValuesSection />
      <StatsSection />
      <TeamSection />
    </div>
  )
}
