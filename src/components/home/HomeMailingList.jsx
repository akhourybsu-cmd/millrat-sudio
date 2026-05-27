import { campaignConfig } from '../../data/campaign'

// ── HomeMailingList ───────────────────────────────────────────────────────────
// Pure native Mailchimp form POST — no fetch, no fake success state.
// Submits directly to Mailchimp's servers; a confirmation page opens in a new
// tab. No Mailchimp CSS or JS scripts are loaded.
//
// If mailchimpActionUrl is missing, falls back to a direct link.

export function HomeMailingList() {
  const {
    mailchimpActionUrl,
    mailchimpEmailFieldName,
    mailchimpBotFieldName,
    emailSignupUrl,
  } = campaignConfig

  return (
    <section className="bg-ink py-20 px-4" aria-labelledby="mailing-list-heading">
      <div className="max-w-2xl mx-auto text-center">

        {/* Sticker */}
        <div
          className="inline-block bg-yellow-egg text-ink font-display px-5 py-2 rounded-full shadow-sticker -rotate-1 mb-6 text-sm"
          aria-hidden="true"
        >
          Stay in the loop
        </div>

        <h2
          id="mailing-list-heading"
          className="font-display text-paper text-3xl sm:text-4xl lg:text-5xl mb-4 text-shadow-ink"
        >
          Be the first to know.
        </h2>
        <p className="font-body text-paper/60 text-base sm:text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          New games, Kickstarter launch alerts, and the occasional free thing.
          No noise — unsubscribe any time.
        </p>

        {mailchimpActionUrl ? (
          <form
            action={mailchimpActionUrl}
            method="post"
            target="_blank"
            noValidate
            className="max-w-md mx-auto"
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
              <label htmlFor="home-email-capture" className="sr-only">
                Email address
              </label>
              <input
                id="home-email-capture"
                type="email"
                name={mailchimpEmailFieldName}
                placeholder="your@email.com"
                required
                autoComplete="email"
                className="flex-1 font-body text-ink bg-paper rounded-lg px-4 py-3 border-2 border-transparent outline-none transition-all placeholder:text-ink/30 focus:border-purple-mill"
              />
              <button
                type="submit"
                className="font-display text-ink bg-green-sticker hover:bg-green-sticker-dark px-6 py-3 rounded-lg shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 whitespace-nowrap"
              >
                Count me in
              </button>
            </div>

            <p className="font-body text-paper/30 text-xs mt-3">
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
            Count me in →
          </a>
        )}
      </div>
    </section>
  )
}
