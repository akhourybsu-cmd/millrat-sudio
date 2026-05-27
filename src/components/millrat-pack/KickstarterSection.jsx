import { campaignConfig } from '../../data/campaign'
import { assets } from '../../data/assets'
import { CampaignBadge } from './CampaignBadge'
import { KickstarterCTA, FreeGameCTA } from './CTAButton'

const CONTENT = {
  prelaunch: {
    eyebrow: 'Coming to Kickstarter',
    headline: 'Launching July 14.',
    sub: "Follow the campaign now so you don't miss launch-day pricing, updates, and stretch goals.",
    why: [
      'Be first to know when it goes live',
      'Lock in early-backer pricing at launch',
      'Get notified about stretch goals',
    ],
  },
  live: {
    eyebrow: 'Now live on Kickstarter',
    headline: 'Back Millrat Pack.',
    sub: 'Help bring four game-night favorites to tables everywhere. Pick your pledge and back the campaign.',
    why: [
      'Backer-exclusive pricing — better than retail',
      'Stretch goals unlock extra content',
      'Direct support for an indie studio',
    ],
  },
  ended: {
    eyebrow: 'Kickstarter has closed',
    headline: 'Missed the campaign?',
    sub: 'Join the update list for late pledges, retail availability, and future Millrat Studio games.',
    why: [
      'Late pledge options may open',
      'First to know about retail release',
      'Future Millrat game announcements',
    ],
  },
}

function ShareButtons() {
  const shareText = 'Check out MILLRAT Pack — 4 games for game night!'
  const shareUrl = typeof window !== 'undefined' ? window.location.href : 'https://millrat.com'

  const handleCopy = () => {
    navigator.clipboard.writeText(shareUrl).catch(() => {})
  }

  return (
    <div className="flex gap-3 flex-wrap items-center justify-center" aria-label="Share this page">
      <span className="font-body text-paper/50 text-sm" aria-hidden="true">Share:</span>
      <button
        type="button"
        onClick={handleCopy}
        className="font-body text-xs px-4 py-2 min-h-[36px] rounded-full bg-white/10 hover:bg-white/20 text-paper transition-colors"
        aria-label="Copy page link to clipboard"
      >
        Copy link
      </button>
      <a
        href={`https://x.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs px-4 py-2 min-h-[36px] inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-paper transition-colors"
        aria-label="Share on X (Twitter)"
      >
        Share on 𝕏
      </a>
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="font-body text-xs px-4 py-2 min-h-[36px] inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-paper transition-colors"
        aria-label="Share on Facebook"
      >
        Facebook
      </a>
      <a
        href={`mailto:?subject=${encodeURIComponent('You need to check this out')}&body=${encodeURIComponent(shareText + '\n' + shareUrl)}`}
        className="font-body text-xs px-4 py-2 min-h-[36px] inline-flex items-center rounded-full bg-white/10 hover:bg-white/20 text-paper transition-colors"
        aria-label="Share via email"
      >
        Email a friend
      </a>
    </div>
  )
}

export function KickstarterSection() {
  const { status } = campaignConfig
  const c = CONTENT[status]

  return (
    <section
      className="bg-ink py-24 px-4 relative overflow-hidden"
      id="kickstarter"
      aria-labelledby="ks-heading"
    >
      {/* Ambient green glow */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(0,201,120,0.10),transparent)] pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-3xl mx-auto text-center">
        {/* Campaign strip — decorative logo + Kickstarter sticker */}
        <div className="flex justify-center mb-8">
          <img
            src={assets.millratPack.kickstarterStrip}
            alt=""
            aria-hidden="true"
            className="object-contain drop-shadow-lg"
            style={{ maxHeight: '90px', maxWidth: '480px', width: '100%' }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Eyebrow sticker */}
        <div className="inline-block bg-green-sticker text-ink font-display px-6 py-2 rounded-full shadow-sticker -rotate-1 mb-8 text-sm" aria-hidden="true">
          {c.eyebrow}
        </div>

        <h2 id="ks-heading" className="font-display text-paper text-4xl sm:text-5xl lg:text-6xl mb-5 leading-tight">
          {c.headline}
        </h2>

        <p className="font-body text-paper/70 text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          {c.sub}
        </p>

        {/* Why bullets */}
        <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 mb-10 text-left sm:text-center" aria-label="Reasons to follow">
          {c.why.map((item) => (
            <li key={item} className="flex items-start sm:items-center gap-2 text-paper/80 font-body text-sm">
              <span className="w-5 h-5 rounded-full bg-green-sticker text-ink flex items-center justify-center text-xs font-bold shrink-0 mt-0.5 sm:mt-0" aria-hidden="true">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* Primary CTAs */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {/* TODO: analytics.track('kickstarter_section_click') */}
          <KickstarterCTA size="lg" />
          <FreeGameCTA size="lg" />
        </div>

        <CampaignBadge className="mx-auto mb-10" />

        {/* Share row */}
        <ShareButtons />

        {/* Campaign preview image */}
        <div className="mt-12 rounded-2xl overflow-hidden shadow-paper-lg ring-1 ring-white/10">
          <img
            src={assets.millratPack.kickstarterAd}
            alt="MILLRAT Pack Kickstarter campaign — four games for game night, launching July 14"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </section>
  )
}
