import { campaignConfig } from '../../data/campaign'

// ── EmailCapture ─────────────────────────────────────────────────────────────
// Pure native Mailchimp form POST — no fetch, no fake success state.
// Submits directly to Mailchimp's servers; a confirmation page opens in a new
// tab. No Mailchimp CSS or JS scripts are loaded.
//
// If mailchimpActionUrl is missing, falls back to a direct link.

export function EmailCapture({ context = 'default' }) {
  const {
    mailchimpActionUrl,
    mailchimpEmailFieldName,
    mailchimpBotFieldName,
    emailSignupUrl,
  } = campaignConfig

  return (
    <section className="bg-paper py-16 px-4" id="free-game">
      <div className="max-w-xl mx-auto text-center">

        {/* Sticker */}
        <div className="inline-block bg-yellow-egg text-ink font-display px-5 py-2 rounded-full shadow-sticker rotate-1 mb-6 text-sm">
          Free to try — no cost
        </div>

        <h2 className="font-display text-ink text-3xl sm:text-4xl mb-3">
          Try Someone's Y free.
        </h2>
        <p className="font-body text-ink/70 text-base mb-8 leading-relaxed">
          Sign up and we'll send you a free print-and-play copy of Someone's Y.
          Try it before you back the campaign.
        </p>

        {mailchimpActionUrl ? (
          <form
            action={mailchimpActionUrl}
            method="post"
            target="_blank"
            noValidate
          >
            {/* Mailchimp anti-bot honeypot — must stay off-screen */}
            <div aria-hidden="true" className="absolute -left-[5000px]">
              <input
                type="text"
                name={mailchimpBotFieldName}
                tabIndex={-1}
                defaultValue=""
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email-capture" className="sr-only">
                Email address
              </label>
              <input
                id="email-capture"
                type="email"
                name={mailchimpEmailFieldName}
                placeholder="your@email.com"
                required
                autoComplete="email"
                className="flex-1 font-body text-ink bg-white rounded-lg px-4 py-3 border-2 border-ink/15 outline-none transition-all placeholder:text-ink/30 focus:border-purple-mill"
              />
              <button
                type="submit"
                className="font-display text-ink bg-green-sticker hover:bg-green-sticker-dark px-6 py-3 rounded-lg shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 whitespace-nowrap"
              >
                Get Free Game
              </button>
            </div>

            <p className="font-body text-ink/40 text-xs mt-3">
              After submitting, Mailchimp may open a confirmation page in a new tab.
            </p>
          </form>
        ) : (
          /* Fallback: direct link to Mailchimp landing page */
          <a
            href={emailSignupUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-display text-ink bg-green-sticker hover:bg-green-sticker-dark px-8 py-3 rounded-lg shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150"
          >
            Get Free Game →
          </a>
        )}
      </div>
    </section>
  )
}
