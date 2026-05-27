import { usePageMeta } from '../../hooks/usePageMeta'
import { AboutSection } from '../../components/millrat-pack/AboutSection'
import { KickstarterCTA } from '../../components/millrat-pack/CTAButton'

export default function AboutPage() {
  usePageMeta({
    title: 'About | Millrat Studio',
    description: "Nick and Adam started Millrat Studio after bonding over a design competition. Learn about the team behind MILLRAT Pack and Millrat Studio's mission.",
  })

  return (
    <main className="pt-16 bg-paper min-h-screen">
      {/* Page hero */}
      <div className="bg-ink py-20 px-4 text-center">
        <h1 className="font-display text-paper text-5xl sm:text-6xl mb-4">About Millrat Studio</h1>
        <p className="font-body text-paper/60 text-lg max-w-xl mx-auto leading-relaxed">
          Two designers. One shared obsession with game night.
        </p>
      </div>

      <AboutSection headingLevel="h2" />

      {/* Extra studio context */}
      <section className="bg-ink py-16 px-4 text-center" aria-label="Studio mission">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-display text-paper text-3xl mb-4">Our mission</h2>
          <p className="font-body text-paper/70 text-lg leading-relaxed mb-8">
            {/* TODO: replace with real studio mission statement from Nick & Adam */}
            Make games that don't require a dedicated game-night crew to enjoy. Fast enough for a Tuesday. Interesting enough for a Saturday.
          </p>
          <KickstarterCTA size="lg" />
        </div>
      </section>
    </main>
  )
}
