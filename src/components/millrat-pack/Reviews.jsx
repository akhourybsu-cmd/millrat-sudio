import { assets } from '../../data/assets'

const testimonials = [
  {
    quote: "I'm obsessed!",
    detail: "We played Someone's Y three times in a row. Nobody wanted to stop.",
    name: 'Nakeita',
    game: "Someone's Y",
    color: '#6B35B8',
  },
  {
    quote: 'This game is crazy!',
    detail: 'Bad Eggs had us screaming at each other within five minutes. In the best way.',
    name: 'Sam',
    game: 'Bad Eggs',
    color: '#FFC928',
  },
  {
    quote: 'Best game night in months.',
    detail: "Scrapbook turned into a two-hour trip through everyone's camera rolls. Absolute chaos.",
    name: 'Playtester',
    game: 'Scrapbook',
    color: '#5A3035',
  },
  {
    quote: 'Teach it in under 2 minutes.',
    detail: 'My family that hates long rulebooks actually played Footfalls three rounds without complaining.',
    name: 'Playtester',
    game: 'Footfalls',
    color: '#1268A8',
  },
]

function QuoteCard({ testimonial, rotateClass }) {
  return (
    <figure
      className={`bg-paper rounded-2xl p-6 shadow-paper card-cutout flex flex-col gap-3 ${rotateClass} hover:rotate-0 transition-transform duration-200`}
    >
      <blockquote className="font-display text-ink text-xl leading-tight">
        "{testimonial.quote}"
      </blockquote>
      <p className="font-body text-ink/70 text-sm leading-relaxed flex-1">
        {testimonial.detail}
      </p>
      <figcaption className="flex items-center gap-3 mt-auto pt-3 border-t border-ink/10">
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-paper text-xs font-display shrink-0" style={{ backgroundColor: testimonial.color }}>
          {testimonial.name[0]}
        </div>
        <div>
          <span className="font-body font-bold text-ink text-sm block">{testimonial.name}</span>
          <span className="font-body text-xs px-2 py-0.5 rounded-full text-paper" style={{ backgroundColor: testimonial.color }}>
            Tested {testimonial.game}
          </span>
        </div>
      </figcaption>
    </figure>
  )
}

const rotations = ['-rotate-[0.5deg]', 'rotate-[0.4deg]', '-rotate-[0.3deg]', 'rotate-[0.6deg]']

export function Reviews() {
  return (
    <section className="bg-ink py-20 px-4" id="reviews">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-paper text-4xl sm:text-5xl mb-3">Played by real groups.</h2>
          <p className="font-body text-paper/60 text-lg max-w-xl mx-auto">
            Not invented in a vacuum. These are from actual game nights.
          </p>
        </div>

        {/* Main testimonials photo — real players at a table */}
        <div className="rounded-2xl overflow-hidden shadow-paper-lg ring-1 ring-white/10 mb-12 max-w-4xl mx-auto">
          <img
            src={assets.millratPack.testimonials}
            alt="Three players laughing and reacting at a game table with MILLRAT Pack — real playtester reactions"
            className="w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* HTML quote cards — accessible even when image is not loaded */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <QuoteCard key={i} testimonial={t} rotateClass={rotations[i % rotations.length]} />
          ))}
        </div>
      </div>
    </section>
  )
}
