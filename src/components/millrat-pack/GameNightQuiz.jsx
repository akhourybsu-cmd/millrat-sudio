import { useState } from 'react'
import { games } from '../../data/games'

const options = [
  { label: 'I want to accuse my friends', gameId: 'someones-y', emoji: '🕵️' },
  { label: 'I want to use my camera roll', gameId: 'scrapbook', emoji: '📸' },
  { label: 'I want quick strategy', gameId: 'footfalls', emoji: '🐀' },
  { label: 'I want breakfast betrayal', gameId: 'bad-eggs', emoji: '🍳' },
]

export function GameNightQuiz() {
  const [selected, setSelected] = useState(null)

  const pick = (gameId) => {
    setSelected(gameId)
    // TODO: analytics.track('quiz_completed', { result: gameId })
  }

  const result = selected ? games.find((g) => g.id === selected) : null

  return (
    <section className="bg-ink py-20 px-4" id="quiz">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-display text-paper text-4xl sm:text-5xl mb-3">
          Pick your game night.
        </h2>
        <p className="font-body text-paper/60 text-lg mb-10">What kind of chaos are you in the mood for?</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          {options.map((opt) => {
            const isSelected = selected === opt.gameId
            return (
              <button
                key={opt.gameId}
                type="button"
                onClick={() => pick(opt.gameId)}
                className={`group text-left rounded-xl px-6 py-5 border-2 transition-all duration-200 cursor-pointer ${
                  isSelected
                    ? 'border-green-sticker bg-green-sticker/10 shadow-paper-lg scale-[1.02]'
                    : 'border-white/15 bg-white/5 hover:border-white/30 hover:bg-white/10'
                }`}
              >
                <span className="text-3xl block mb-2">{opt.emoji}</span>
                <span className={`font-display text-lg block ${isSelected ? 'text-green-sticker' : 'text-paper'}`}>
                  {opt.label}
                </span>
              </button>
            )
          })}
        </div>

        {/* Result card */}
        {result && (
          <div className="animate-pop-in bg-paper rounded-2xl p-6 sm:p-8 text-left shadow-paper-lg max-w-2xl mx-auto card-cutout">
            <div className="flex items-start gap-4">
              {/* Game logo in accent-colored pill */}
              <div
                className="w-20 h-16 rounded-xl flex-shrink-0 flex items-center justify-center shadow-paper overflow-hidden p-1.5"
                style={{ backgroundColor: result.accentBg }}
              >
                <img
                  src={result.logoImage}
                  alt=""
                  aria-hidden="true"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="font-display text-ink/50 text-sm uppercase tracking-widest block mb-0.5">Tonight, play…</span>
                <h3 className="font-display text-ink text-2xl">{result.title}</h3>
                <p className="font-body text-ink/70 text-sm mt-1">{result.tagline}</p>
              </div>
            </div>

            {/* Component image */}
            <div
              className="my-4 rounded-xl overflow-hidden flex items-center justify-center"
              style={{ backgroundColor: result.accentBg, minHeight: '140px', maxHeight: '180px' }}
            >
              <img
                src={result.componentImage}
                alt={result.componentAlt}
                className="w-full object-contain drop-shadow-xl"
                style={{ maxHeight: '180px' }}
                loading="lazy"
                decoding="async"
              />
            </div>

            <p className="font-body text-ink/80 text-base leading-relaxed">{result.hook}</p>

            <div className="flex flex-wrap gap-2 mt-4">
              {result.genres.map((g) => (
                <span key={g} className="font-body font-semibold text-xs px-2 py-0.5 rounded-full text-paper" style={{ backgroundColor: result.accent }}>
                  {g}
                </span>
              ))}
              <span className="font-body font-semibold text-xs px-2 py-0.5 rounded-full bg-ink/10 text-ink/70">{result.players} players</span>
              <span className="font-body font-semibold text-xs px-2 py-0.5 rounded-full bg-ink/10 text-ink/70">{result.time}</span>
            </div>

            <a
              href="#games"
              className="mt-5 inline-block font-display text-sm px-5 py-2.5 rounded-lg text-paper shadow-sticker transition-all duration-150 hover:opacity-90"
              style={{ backgroundColor: result.accent }}
            >
              See the full lineup ↓
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
