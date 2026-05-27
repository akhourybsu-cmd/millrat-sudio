import { useState } from 'react'
import { campaignConfig } from '../../data/campaign'

// ── Email form abstraction ────────────────────────────────────────────────────
// Swap `submitEmail` to wire to Mailchimp, ConvertKit, Supabase, etc.
async function submitEmail(email) {
  // TODO: replace with real provider integration
  // Example Mailchimp: POST to campaignConfig.emailSignupUrl
  // Example Supabase: supabase.from('signups').insert({ email })
  await new Promise((r) => setTimeout(r, 800)) // simulated delay
  if (email.includes('error')) throw new Error('Signup failed — please try again.')
  return true
}

export function EmailCapture({ context = 'default' }) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email || !email.includes('@')) {
      setErrorMsg('Enter a valid email address.')
      setStatus('error')
      return
    }
    setStatus('loading')
    setErrorMsg('')
    try {
      await submitEmail(email)
      setStatus('success')
      setEmail('')
      // TODO: analytics.track('email_signup_success', { context })
    } catch (err) {
      setStatus('error')
      setErrorMsg(err.message)
    }
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

        {status === 'success' ? (
          <div className="animate-pop-in bg-green-sticker/10 border-2 border-green-sticker rounded-xl p-8">
            <div className="text-4xl mb-3">🎉</div>
            <p className="font-display text-ink text-xl">You're in.</p>
            <p className="font-body text-ink/70 mt-1">Someone's Y is coming your way.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            <div className="flex flex-col sm:flex-row gap-3">
              <label htmlFor="email-capture" className="sr-only">Email address</label>
              <input
                id="email-capture"
                type="email"
                value={email}
                onChange={(e) => { setEmail(e.target.value); if (status === 'error') setStatus('idle') }}
                placeholder="your@email.com"
                required
                autoComplete="email"
                disabled={status === 'loading'}
                className={`flex-1 font-body text-ink bg-white rounded-lg px-4 py-3 border-2 outline-none transition-all placeholder:text-ink/30 ${
                  status === 'error' ? 'border-red-500' : 'border-ink/15 focus:border-purple-mill'
                } disabled:opacity-60`}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="font-display text-ink bg-green-sticker hover:bg-green-sticker-dark px-6 py-3 rounded-lg shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 disabled:opacity-60 disabled:translate-x-0 disabled:translate-y-0 disabled:shadow-sticker whitespace-nowrap"
              >
                {status === 'loading' ? 'Sending…' : 'Get Free Game'}
              </button>
            </div>
            {status === 'error' && errorMsg && (
              <p role="alert" className="font-body text-red-500 text-sm mt-2 text-left">{errorMsg}</p>
            )}
            <p className="font-body text-ink/40 text-xs mt-3">No spam. Just game night stuff.</p>
          </form>
        )}
      </div>
    </section>
  )
}
