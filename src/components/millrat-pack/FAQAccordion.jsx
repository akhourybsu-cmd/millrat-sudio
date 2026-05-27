import { useState } from 'react'

const faqs = [
  {
    q: 'Is MILLRAT Pack one game or four games?',
    a: 'Four completely separate games — each with its own components, rulebook, and play style — all packaged in one outer box. You can play them in any order and in any combination across a game night.',
  },
  {
    q: 'When does the Kickstarter launch?',
    a: 'July 14, 2026. Follow the campaign now and you\'ll get notified the moment it goes live — and be first to access launch-day pricing.',
  },
  {
    q: 'How long does each game take?',
    a: "Someone's Y: ~15 minutes. Scrapbook and Footfalls: ~20 minutes each. Bad Eggs: ~25 minutes. Short enough to play two in one night.",
  },
  {
    q: 'Can I try a game before backing?',
    a: "Yes — sign up on this page and we'll send you a free print-and-play copy of Someone's Y. No purchase required.",
  },
  {
    q: 'What ages is this for?',
    a: "Most games in the pack are rated 10+. Scrapbook is 12+ because it uses your real camera roll, and some photos might be adult-in-context. All games are family-appropriate in their content.",
  },
  {
    q: 'Is this good for casual players?',
    a: "Absolutely. Every game is designed to be explained in under 5 minutes. The first round is the tutorial. You don't need to be a board game enthusiast to have fun.",
  },
  {
    q: "What's in the box?",
    a: 'The outer MILLRAT Pack box contains four individual game boxes, each with cards, tokens, dice or tiles, and a rulebook. Final component counts are confirmed at production.',
  },
  {
    q: 'Will this be available after Kickstarter?',
    a: 'Retail availability is a goal after the campaign. Backers always get it first and at the best price. Sign up for the email list to hear about retail options.',
  },
  {
    q: 'Where will it ship?',
    a: 'Shipping regions will be confirmed during the Kickstarter campaign. Follow the campaign or join the email list to stay updated.',
  },
  {
    q: 'Where can I get campaign updates?',
    a: "Follow the Kickstarter campaign, sign up for our email list, or follow Millrat Studio on Instagram and X. Updates go out in all three places.",
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  const panelId = `faq-panel-${index}`
  const btnId = `faq-btn-${index}`

  return (
    <div className={`border border-ink/10 rounded-xl overflow-hidden transition-shadow duration-200 ${open ? 'shadow-paper' : ''}`}>
      <h3>
        <button
          type="button"
          id={btnId}
          aria-expanded={open}
          aria-controls={panelId}
          className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left bg-white hover:bg-paper/50 transition-colors min-h-[56px]"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-display text-ink text-base leading-snug">{item.q}</span>
          <span
            aria-hidden="true"
            className={`text-purple-mill font-display text-xl shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          >
            +
          </span>
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={btnId}
        hidden={!open}
      >
        {open && (
          <div className="px-5 pb-5 bg-white animate-slide-up">
            <p className="font-body text-ink/70 text-base leading-relaxed border-t border-ink/8 pt-4">
              {item.a}
            </p>
          </div>
        )}
      </div>
    </div>
  )
}

export function FAQAccordion() {
  return (
    <section className="bg-paper py-20 px-4" id="faq" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <h2 id="faq-heading" className="font-display text-ink text-4xl sm:text-5xl mb-3">FAQ</h2>
          <p className="font-body text-ink/60 text-base">Everything you want to know before backing.</p>
        </div>

        <ul className="flex flex-col gap-3 list-none p-0 m-0" aria-label="Frequently asked questions">
          {faqs.map((item, i) => (
            <li key={item.q}>
              <FAQItem item={item} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
