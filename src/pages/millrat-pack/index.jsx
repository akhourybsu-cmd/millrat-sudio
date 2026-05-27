import { usePageMeta } from '../../hooks/usePageMeta'
import { Hero } from '../../components/millrat-pack/Hero'
import { ProblemSolution } from '../../components/millrat-pack/ProblemSolution'
import { GameNightQuiz } from '../../components/millrat-pack/GameNightQuiz'
import { GameLineup } from '../../components/millrat-pack/GameLineup'
import { WhatsInTheBox } from '../../components/millrat-pack/WhatsInTheBox'
import { KickstarterSection } from '../../components/millrat-pack/KickstarterSection'
import { EmailCapture } from '../../components/millrat-pack/EmailCapture'
import { Reviews } from '../../components/millrat-pack/Reviews'
import { AboutSection } from '../../components/millrat-pack/AboutSection'
import { FAQAccordion } from '../../components/millrat-pack/FAQAccordion'

export default function MillratPackPage() {
  usePageMeta({
    title: 'MILLRAT Pack — 4 Games for Game Night | Millrat Studio',
    description: 'MILLRAT Pack: 4 wildly different games in one box — deduction, photo chaos, rat racing, and push-your-luck drama. Launching on Kickstarter July 14.',
  })

  return (
    <main>
      <Hero />
      <ProblemSolution />
      <GameNightQuiz />
      <GameLineup />
      <WhatsInTheBox />
      <KickstarterSection />
      <EmailCapture />
      <Reviews />
      <AboutSection />
      <FAQAccordion />
    </main>
  )
}
