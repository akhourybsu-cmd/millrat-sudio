const benefits = [
  {
    icon: '⚡',
    title: 'Easy to teach',
    body: 'Pick up and play in minutes. Every game is designed so the first round is the tutorial.',
  },
  {
    icon: '🎭',
    title: 'Different games, different moods',
    body: 'Deduction, photo chaos, rat racing, eggy gambling — one box covers every game-night vibe.',
  },
  {
    icon: '⏱',
    title: 'Short enough to play twice',
    body: '15–25 minutes per game. Finish one and immediately want to play another.',
  },
  {
    icon: '🏠',
    title: 'Built for real game nights',
    body: 'At the table, outside, before a D&D sesh, or on travel. Designed for how people actually play.',
  },
]

export function ProblemSolution() {
  return (
    <section className="bg-paper py-20 px-4 relative" id="problem">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="font-display text-ink text-4xl sm:text-5xl mb-4 leading-tight">
            Stop debating<br />what to play.
          </h2>
          <p className="font-body text-ink/70 text-lg max-w-2xl mx-auto leading-relaxed">
            MILLRAT Pack is a collection of quick, wildly different games in one box.
            Word deduction, photo-clue chaos, tactical rat racing, and eggy push-your-luck drama —
            all built for the kind of night where nobody wants to read a rulebook for 45 minutes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {benefits.map((b, i) => (
            <div
              key={b.title}
              className={`bg-white shadow-paper rounded-lg p-6 border-2 border-ink/5 card-cutout ${
                i % 2 === 0 ? '-rotate-[0.4deg]' : 'rotate-[0.3deg]'
              } hover:rotate-0 transition-transform duration-200`}
            >
              <div className="text-3xl mb-3">{b.icon}</div>
              <h3 className="font-display text-ink text-xl mb-2">{b.title}</h3>
              <p className="font-body text-ink/70 text-base leading-relaxed">{b.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
