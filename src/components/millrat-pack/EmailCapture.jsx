import { useState } from 'react'
import { campaignConfig } from '../../data/campaign'

// ── Mailchimp native form post ────────────────────────────────────────────────
// Submits to Mailchimp's servers directly (new tab) — no Mailchimp JS/CSS loaded.
// Bot honeypot field is hidden off-screen; Mailchimp's servers check it server-side.

export function EmailCapture({ context = 'default' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | error | submitted
  const [errorMsg, setErrorMsg] = useState('')

  const formAction =
    campaignConfig.mailchimpActionUrl || campaignConfig.emailSignupUrl || '#'

  const handleSubmit = (e) => {
    // Client-side validation only — if invalid, block native submit
    if (!email || !email.includes('@')) {
      e.preventDefault()
      setErrorMsg('Enter a valid email address.')
      setStatus('error')
      return
    }
    // Valid — let the native POST proceed (opens Mailchimp confirm page in new tab)
    setStatus('submitted')
    setErrorMsg('')
    // TODO: analytics.track('email_signup_success', { context })
  }

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
          Sign up and we'll send you a free print-and-play copy of Someone's Y. Try it before you back the campaign.
        </p>

        {status === 'submitted' ? (
          <div className="animate-pop-in bg-green-sticker/10 border-2 border-green-sticker rounded-xl p-8">
            <div className="text-4xl mb-3">🎉</div>
            <p className="font-display text-ink text-xl">Almost there!</p>
            <p className="font-body text-ink/70 mt-1">
              Check the new tab to confirm your signup — then Someone's Y is on its way.
            </p>
          </div>
        ) : (
          <form
            action={formAction}
            method="post"
            target="_blank"
            noValidate
            onSubmit={handleSubmit}
          >
            {/* Mailchimp honeypot — hidden off-screen, must not be filled by humans */}
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
              <label htmlFor="email-capture" className="sr-only">Email address</label>
              <input
                id="email-capture"
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
                className={`flex-1 font-body text-ink bg-white rounded-lg px-4 py-3 border-2 outline-none transition-all placeholder:text-ink/30 ${
                  status === 'error' ? 'border-red-500' : 'border-ink/15 focus:border-purple-mill'
                }`}
              />
              <button
                type="submit"
                className="font-display text-ink bg-green-sticker hover:bg-green-sticker-dark px-6 py-3 rounded-lg shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 whitespace-nowrap"
              >
                Get Free Game
              </button>
            </div>

            {status === 'error' && errorMsg && (
              <p role="alert" className="font-body text-red-500 text-sm mt-2 text-left">
                {errorMsg}
              </p>
            )}
            <p className="font-body text-ink/40 text-xs mt-3">No spam. Just game night stuff.</p>
          </form>
        )}
      </div>
    </section>
  )
}
