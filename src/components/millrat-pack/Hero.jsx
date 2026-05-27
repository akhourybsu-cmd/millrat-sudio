import { assets } from '../../data/assets'
import { CampaignBadge } from './CampaignBadge'
import { KickstarterCTA, FreeGameCTA } from './CTAButton'

export function Hero() {
  return (
    <section
      className="relative min-h-[100svh] bg-ink flex items-center overflow-hidden pt-16"
      aria-label="MILLRAT Pack hero"
    >
      {/* Background glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(107,53,184,0.35),transparent)] pointer-events-none" aria-hidden="true" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_80%_70%,rgba(107,53,184,0.15),transparent)] pointer-events-none" aria-hidden="true" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center w-full">

        {/* ── Left — copy (always first in DOM and on mobile) ── */}
        <div className="flex flex-col items-start gap-5 animate-slide-up">
          {/* Decorative product logo — hidden from screen readers, real heading follows */}
          <img
            src={assets.millratPack.logo}
            alt=""
            aria-hidden="true"
            className="object-contain -ml-1 drop-shadow-lg"
            style={{ maxHeight: '72px', maxWidth: '220px' }}
            loading="eager"
            decoding="sync"
          />

          <span className="bg-green-sticker text-ink font-display px-4 py-1.5 rounded-full shadow-sticker text-sm -rotate-1 inline-block">
            Launching on Kickstarter — July 14
          </span>

          <h1 className="font-display text-paper text-4xl sm:text-5xl lg:text-6xl xl:text-7xl leading-tight text-shadow-ink">
            4&nbsp;games made<br />for game&nbsp;night.
          </h1>

          <p className="font-body text-paper/80 text-lg sm:text-xl leading-relaxed max-w-lg">
            Stop debating what to play. Open the box and pick your chaos.
          </p>

          {/* Proof chips */}
          <div className="flex flex-wrap gap-2" aria-label="Product details">
            {['4 games', '15–25 min each', '2–6 players', 'Ages 10+'].map((chip) => (
              <span key={chip} className="bg-white/10 text-paper/70 font-body font-semibold text-sm px-3 py-1 rounded-full border border-white/10">
                {chip}
              </span>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 mt-1">
            {/* TODO: analytics.track('hero_kickstarter_click') */}
            <KickstarterCTA size="lg" />
            {/* TODO: analytics.track('hero_email_click') */}
            <FreeGameCTA size="lg" />
          </div>

          {/* Countdown badge */}
          <CampaignBadge className="mt-1" />
        </div>

        {/* ── Right — product hero photo ── */}
        <div className="flex justify-center items-center">
          <div className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md animate-float">
            <div className="rounded-2xl overflow-hidden shadow-paper-lg ring-1 ring-white/10">
              <img
                src={assets.millratPack.heroCloseup}
                alt="MILLRAT Pack box — four games nestled in colorful tissue paper, ready for game night"
                className="w-full object-cover"
                style={{ aspectRatio: '4/5', maxHeight: '520px' }}
                loading="eager"
                decoding="sync"
              />
            </div>

            {/* Floating game badges — hidden on xs, positioned relative to image */}
            <div
              aria-hidden="true"
              className="hidden sm:flex absolute -top-4 -right-8 w-16 h-16 lg:w-20 lg:h-20 bg-yellow-egg rounded-full shadow-sticker items-center justify-center text-ink font-display text-[9px] text-center leading-tight p-2 rotate-6 animate-wiggle"
            >
              Bad Eggs
            </div>
            <div
              aria-hidden="true"
              className="hidden sm:flex absolute -bottom-4 -left-8 w-14 h-14 lg:w-16 lg:h-16 bg-blue-footfalls rounded-full shadow-sticker items-center justify-center text-paper font-display text-[8px] text-center leading-tight p-2 -rotate-3"
            >
              Footfalls
            </div>
            <div
              aria-hidden="true"
              className="hidden sm:flex absolute top-1/3 -right-6 w-12 h-12 lg:w-14 lg:h-14 bg-brown-scrapbook rounded-full shadow-sticker items-center justify-center text-paper font-display text-[8px] text-center leading-tight p-1.5 rotate-2"
            >
              Scrapbook
            </div>
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-1 text-paper/30 font-body text-xs animate-bounce hidden lg:flex" aria-hidden="true">
        <span>scroll</span>
        <span>↓</span>
      </div>
    </section>
  )
}
