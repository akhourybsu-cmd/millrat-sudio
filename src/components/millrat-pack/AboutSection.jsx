import { campaignConfig } from '../../data/campaign'
import { assets } from '../../data/assets'

export function AboutSection() {
  const { socialUrls } = campaignConfig

  return (
    <section className="bg-paper py-20 px-4" id="about" aria-labelledby="about-heading">
      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* Founder photo — on dark panel so white annotations stay visible */}
          <div className="flex justify-center md:order-last">
            <div
              className="bg-ink rounded-2xl shadow-paper-lg overflow-hidden rotate-[0.5deg] hover:rotate-0 transition-transform duration-200 w-full max-w-xs"
            >
              <img
                src={assets.studio.adamAndNick}
                alt="Nick and Adam, founders of Millrat Studio — with hand-drawn arrows pointing to each of them"
                className="w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Copy */}
          <div>
            <p className="font-display text-purple-mill text-sm uppercase tracking-widest block mb-3">
              Meet the designers
            </p>
            <h2 id="about-heading" className="font-display text-ink text-3xl sm:text-4xl mb-4 leading-tight">
              Nick &amp; Adam,<br />Millrat Studio.
            </h2>
            <p className="font-body text-ink/75 text-base leading-relaxed mb-4">
              Nick and Adam started Millrat Studio after bonding over a design competition.
              Three years later, they packed their favorite game-night ideas into one box.
            </p>
            <p className="font-body text-ink/75 text-base leading-relaxed mb-6">
              Their goal: games that are easy to teach, fast to play, and different enough that game
              night never starts with a 45-minute debate. MILLRAT Pack is their answer.
            </p>

            {/* Social links — min 44px tap targets */}
            <div className="flex gap-3 flex-wrap">
              <a
                href={socialUrls.instagram}
                className="font-body font-bold text-sm px-5 py-2.5 min-h-[44px] flex items-center rounded-full bg-ink text-paper hover:bg-purple-mill transition-colors"
                aria-label="Follow Millrat Studio on Instagram"
              >
                Instagram
              </a>
              <a
                href={socialUrls.x}
                className="font-body font-bold text-sm px-5 py-2.5 min-h-[44px] flex items-center rounded-full bg-ink/10 text-ink hover:bg-ink hover:text-paper transition-colors"
                aria-label="Follow Millrat Studio on X (Twitter)"
              >
                𝕏 / Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
