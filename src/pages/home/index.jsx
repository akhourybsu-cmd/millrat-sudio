import { Link } from 'react-router-dom'
import { usePageMeta } from '../../hooks/usePageMeta'
import { CTAButton, KickstarterCTA } from '../../components/millrat-pack/CTAButton'
import { games } from '../../data/games'
import { assets } from '../../data/assets'

// ─── Studio Philosophy pillars ─────────────────────────────────────────────
const pillars = [
  {
    icon: '⚡',
    title: 'Fast to teach.',
    body: 'Every game is designed so the first round is the tutorial. No 45-minute rulebook sessions.',
    rotate: '-rotate-[0.4deg]',
  },
  {
    icon: '🎭',
    title: 'High personality.',
    body: 'Our games have opinions. The mechanics, art, and copy all push in the same direction.',
    rotate: 'rotate-[0.3deg]',
  },
  {
    icon: '🃏',
    title: 'Table-tested.',
    body: 'Designed at real game nights, with real groups, until they actually worked. Then polished.',
    rotate: '-rotate-[0.2deg]',
  },
]

// ─── Future project placeholder slots ─────────────────────────────────────
const futureSlugs = ['Project 02', 'Project 03']

function FutureCard({ label }) {
  return (
    <div className="bg-white/5 border-2 border-dashed border-white/10 rounded-2xl p-8 flex flex-col items-center justify-center text-center min-h-[200px] gap-3">
      <span className="text-3xl opacity-40">🎲</span>
      <p className="font-display text-paper/30 text-lg">{label}</p>
      <p className="font-body text-paper/20 text-sm">Something new is brewing.</p>
    </div>
  )
}

export default function HomePage() {
  usePageMeta({
    title: 'Millrat Studio — Playful Tabletop Games',
    description: 'Millrat Studio makes fast-to-teach, high-personality tabletop games for real game nights. Current release: MILLRAT Pack, 4 games in one box.',
  })

  return (
    <main>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] bg-ink flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_0%,rgba(107,53,184,0.30),transparent)] pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 py-20 text-center">
          {/* Logo mark — M placeholder until studio logo SVG is ready */}
          <div className="mx-auto mb-8 w-20 h-20 bg-purple-mill rounded-2xl flex items-center justify-center shadow-paper-lg" aria-hidden="true">
            {/* TODO: replace with <img src="/assets/images/millrat-logo.svg" alt="" className="w-12 h-12" /> */}
            <span className="font-display text-paper text-4xl leading-none">M</span>
          </div>

          <h1 className="font-display text-paper text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6 text-shadow-ink">
            Where game night<br />gets interesting.
          </h1>
          <p className="font-body text-paper/70 text-xl leading-relaxed max-w-2xl mx-auto mb-10">
            Millrat Studio makes fast-to-teach, high-personality tabletop games —
            built for the kind of night where everyone actually wants to play.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <CTAButton href="/millrat-pack" variant="primary" size="lg" analyticsEvent="home_explore_pack">
              Explore Millrat Pack
            </CTAButton>
            <KickstarterCTA size="lg" />
          </div>
        </div>
      </section>

      {/* ── Studio Philosophy ─────────────────────────────────────────────── */}
      <section className="bg-paper py-20 px-4" aria-labelledby="philosophy-heading">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 id="philosophy-heading" className="font-display text-ink text-4xl sm:text-5xl mb-3">
              How we make games.
            </h2>
            <p className="font-body text-ink/60 text-lg max-w-xl mx-auto">
              Three things we care about — and refuse to compromise on.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className={`bg-white rounded-2xl p-6 shadow-paper border border-ink/5 card-cutout ${p.rotate} hover:rotate-0 transition-transform duration-200`}
              >
                <div className="text-4xl mb-4" aria-hidden="true">{p.icon}</div>
                <h3 className="font-display text-ink text-xl mb-2">{p.title}</h3>
                <p className="font-body text-ink/70 text-base leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current Release ───────────────────────────────────────────────── */}
      <section className="bg-ink py-20 px-4" aria-labelledby="release-heading">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-10 flex-wrap gap-4">
            <div>
              <span className="font-display text-green-sticker text-xs uppercase tracking-widest block mb-1">Current Release</span>
              <h2 id="release-heading" className="font-display text-paper text-3xl sm:text-4xl">MILLRAT Pack</h2>
            </div>
            <span className="bg-green-sticker text-ink font-display px-4 py-1.5 rounded-full shadow-sticker text-sm -rotate-1 inline-block shrink-0">
              Kickstarter — July 14
            </span>
          </div>

          {/* Featured card */}
          <div className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden lg:grid lg:grid-cols-2 gap-0 hover:border-purple-mill/40 transition-colors duration-300">
            {/* Hero closeup photo */}
            <div className="relative overflow-hidden" style={{ minHeight: '280px' }}>
              <img
                src={assets.millratPack.heroCloseup}
                alt="MILLRAT Pack box surrounded by colorful tissue paper — four games in one box"
                className="w-full h-full object-cover"
                style={{ minHeight: '280px', maxHeight: '400px' }}
                loading="lazy"
                decoding="async"
              />
              {/* Dark gradient at bottom so logo art is legible */}
              <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/20 to-transparent pointer-events-none" aria-hidden="true" />
              {/* MILLRAT Pack logo art overlay */}
              <div className="absolute bottom-4 left-4">
                <img
                  src={assets.millratPack.logo}
                  alt=""
                  aria-hidden="true"
                  className="object-contain drop-shadow-lg"
                  style={{ maxHeight: '52px', maxWidth: '160px' }}
                />
              </div>
              {/* Game title badges */}
              <div className="absolute top-4 right-4 flex flex-col gap-1.5">
                {games.map((g) => (
                  <span
                    key={g.id}
                    className="font-display text-[10px] px-2.5 py-1 rounded-full text-paper shadow-sticker"
                    style={{ backgroundColor: g.accent }}
                  >
                    {g.title}
                  </span>
                ))}
              </div>
            </div>

            {/* Copy */}
            <div className="p-8 flex flex-col justify-between gap-6">
              <div>
                <p className="font-body text-paper/60 text-base leading-relaxed mb-6">
                  Four completely different games — deduction, photo chaos, rat racing, and push-your-luck breakfast drama — in one box designed for the kind of night where nobody wants to debate what to play.
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {['4 games', '15–25 min each', '2–6 players', 'Ages 10+'].map((chip) => (
                    <span key={chip} className="bg-white/10 text-paper/70 font-body font-semibold text-xs px-3 py-1.5 rounded-full border border-white/10">
                      {chip}
                    </span>
                  ))}
                </div>

                <ul className="space-y-2 mb-6">
                  {games.map((g) => (
                    <li key={g.id} className="flex items-center gap-2 font-body text-sm text-paper/70">
                      <span className="w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: g.accent }} aria-hidden="true" />
                      <strong className="text-paper font-bold">{g.title}</strong>
                      <span>— {g.tagline}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <CTAButton href="/millrat-pack" variant="primary" size="md" className="flex-1 justify-center" analyticsEvent="home_view_pack">
                  See the full pack →
                </CTAButton>
                <KickstarterCTA size="md" className="flex-1 justify-center" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Coming Up ─────────────────────────────────────────────────────── */}
      <section className="bg-ink pb-20 px-4" aria-labelledby="coming-up-heading">
        <div className="max-w-5xl mx-auto">
          <div className="mb-8">
            <h2 id="coming-up-heading" className="font-display text-paper/40 text-2xl">
              Up next from the studio
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {futureSlugs.map((label) => (
              <FutureCard key={label} label={label} />
            ))}
          </div>
          <p className="font-body text-paper/25 text-xs text-center mt-6">
            Follow us on social for sneak peeks — links in the footer.
          </p>
        </div>
      </section>

      {/* ── Meet the Makers ───────────────────────────────────────────────── */}
      <section className="bg-paper py-20 px-4" aria-labelledby="makers-heading">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* Copy */}
            <div className="text-center md:text-left">
              <h2 id="makers-heading" className="font-display text-ink text-4xl mb-4">
                Made by Nick &amp; Adam.
              </h2>
              <p className="font-body text-ink/70 text-lg leading-relaxed max-w-xl mx-auto md:mx-0 mb-8">
                Two designers who met at a design competition and couldn't stop making games.
                Three years later, their best game-night ideas are in one box.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-display text-purple-mill hover:text-purple-dark transition-colors text-lg"
              >
                Meet the studio →
              </Link>
            </div>

            {/* Founder photo — dark panel so white annotations remain legible */}
            <div className="flex justify-center">
              <div className="bg-ink rounded-2xl shadow-paper-lg overflow-hidden rotate-[0.5deg] hover:rotate-0 transition-transform duration-200" style={{ maxWidth: '380px', width: '100%' }}>
                <img
                  src={assets.studio.adamAndNick}
                  alt="Nick and Adam, founders of Millrat Studio"
                  className="w-full object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ────────────────────────────────────────────────────── */}
      <section className="bg-ink py-16 px-4 text-center" aria-label="Campaign call to action">
        <div className="max-w-xl mx-auto">
          <div className="inline-block bg-green-sticker text-ink font-display px-5 py-2 rounded-full shadow-sticker -rotate-1 mb-6 text-sm">
            Launching July 14
          </div>
          <h2 className="font-display text-paper text-3xl sm:text-4xl mb-4">
            Don't miss launch day.
          </h2>
          <p className="font-body text-paper/60 text-base mb-8 leading-relaxed">
            Follow the Kickstarter campaign now so you're there the moment it goes live.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <KickstarterCTA size="lg" />
            <CTAButton href="/millrat-pack" variant="secondary" size="lg">
              Explore the pack first
            </CTAButton>
          </div>
        </div>
      </section>
    </main>
  )
}
