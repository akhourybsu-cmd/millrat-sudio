import { useState } from 'react'
import { campaignConfig } from '../../data/campaign'

// ── Mailing list section for the homepage ────────────────────────────────────
// Same Mailchimp native form POST as EmailCapture — different copy and context.

export function HomeMailingList() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | submitted
  const [errorMsg, setErrorMsg] = useState('')

  const formAction =
    campaignConfig.mailchimpActionUrl || campaignConfig.emailSignupUrl || '#'

  const handleSubmit = (e) => {
    if (!email || !email.includes('@')) {
      e.preventDefault()
      setErrorMsg('Enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('submitted')
    setErrorMsg('')
    // TODO: analytics.track('home_email_signup', { context: 'home_mailing_list' })
  }

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

        {status === 'submitted' ? (
          <div className="animate-pop-in bg-green-sticker/10 border-2 border-green-sticker rounded-2xl px-8 py-10 max-w-md mx-auto">
            <div className="text-4xl mb-3" aria-hidden="true">🎉</div>
            <p className="font-display text-paper text-xl mb-1">Almost there!</p>
            <p className="font-body text-paper/60 text-sm">
              Check the new tab to confirm — then you're on the list.
            </p>
          </div>
        ) : (
          <form
            action={formAction}
            method="post"
            target="_blank"
            noValidate
            onSubmit={handleSubmit}
            className="max-w-md mx-auto"
          >
            {/* Mailchimp honeypot — off-screen, do not remove */}
            <div aria-hidden="true" className="absolute -left-[5000px]">
              <input
                type="text"
                name={campaignConfig.mailchimpBotFieldName}
                tabIndex={-1}
                defaultValue=""
                readOnly
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="home-email-capture" className="sr-only">
                Email address
              </label>
              <input
                id="home-email-capture"
                type="email"
                name={campaignConfig.mailchimpEmailFieldName}
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                  if (status === 'error') setStatus('idle')
                }}
                placeholder="your@email.com"
                required
                autoComplete="email"
                className={`flex-1 font-body text-ink bg-paper rounded-lg px-4 py-3 border-2 outline-none transition-all placeholder:text-ink/30 ${
                  status === 'error'
                    ? 'border-red-400'
                    : 'border-transparent focus:border-purple-mill'
                }`}
              />
              <button
                type="submit"
                className="font-display text-ink bg-green-sticker hover:bg-green-sticker-dark px-6 py-3 rounded-lg shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 whitespace-nowrap"
              >
                Count me in
              </button>
            </div>

            {status === 'error' && errorMsg && (
              <p role="alert" className="font-body text-red-400 text-sm mt-2 text-left">
                {errorMsg}
              </p>
            )}

            <p className="font-body text-paper/25 text-xs mt-3">
              No spam. Just game night stuff.
            </p>
          </form>
        )}
      </div>
    </section>
  )
}
