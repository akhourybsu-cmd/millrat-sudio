import { useState } from 'react'

function Chip({ children, style, className = '' }) {
  return (
    <span className={`font-body font-semibold text-xs px-2.5 py-1 rounded-full ${className}`} style={style}>
      {children}
    </span>
  )
}

export function GameCard({ game }) {
  const [expanded, setExpanded] = useState(false)
  const expandId = `how-it-plays-${game.id}`

  return (
    <article
      id={game.id}
      className="bg-paper rounded-2xl overflow-hidden shadow-paper-lg border border-ink/5 flex flex-col"
      style={{ borderTop: `4px solid ${game.accent}` }}
      aria-label={`${game.title} — ${game.tagline}`}
    >
      {/* Component render area */}
      <div
        className="relative flex items-center justify-center overflow-hidden"
        style={{ backgroundColor: game.accentBg, minHeight: '220px' }}
      >
        <img
          src={game.componentImage}
          alt={game.componentAlt}
          className="w-full object-contain p-4 drop-shadow-2xl"
          style={{ maxHeight: '260px' }}
          loading="lazy"
          decoding="async"
        />

        {/* Genre chips */}
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1.5" aria-label="Game genres">
          {game.genres.map((g) => (
            <Chip key={g} className="text-paper backdrop-blur-sm" style={{ backgroundColor: game.accent }}>
              {g}
            </Chip>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col gap-4 flex-1">
        {/* Logo + title */}
        <div>
          <img
            src={game.logoImage}
            alt=""
            aria-hidden="true"
            className="object-contain mb-2"
            style={{ maxHeight: '56px', maxWidth: '100%' }}
            loading="lazy"
            decoding="async"
          />
          <h3 className="font-display text-ink text-xl sm:text-2xl mb-1">{game.title}</h3>
          <p className="font-body text-ink/60 text-sm italic">{game.tagline}</p>
        </div>

        {/* Specs */}
        <div className="flex flex-wrap gap-2" aria-label="Game specifications">
          <Chip className="bg-ink/[0.07] text-ink/70">
            <span aria-hidden="true">👥 </span>
            <span>{game.players} players</span>
          </Chip>
          <Chip className="bg-ink/[0.07] text-ink/70">
            <span aria-hidden="true">⏱ </span>
            <span>{game.time}</span>
          </Chip>
          <Chip className="bg-ink/[0.07] text-ink/70">
            Ages {game.age}
          </Chip>
        </div>

        {/* Hook */}
        <p className="font-body text-ink/80 text-sm sm:text-base leading-relaxed flex-1">{game.hook}</p>

        {/* Best for */}
        <p className="font-body text-sm text-ink/70">
          <span className="font-bold text-ink/50 uppercase tracking-wide text-xs">Best for: </span>
          {game.bestFor}
        </p>

        {/* Expandable how it plays */}
        <div>
          <button
            type="button"
            id={`${expandId}-btn`}
            onClick={() => {
              setExpanded((v) => !v)
              // TODO: analytics.track('game_card_expanded', { game: game.id })
            }}
            className="w-full flex items-center justify-between font-display text-sm px-4 py-3 rounded-lg border-2 transition-all duration-150 min-h-[44px]"
            style={{ borderColor: game.accent, color: game.accent }}
            aria-expanded={expanded}
            aria-controls={expandId}
          >
            <span>How it plays</span>
            <span
              aria-hidden="true"
              className={`transition-transform duration-200 text-base ${expanded ? 'rotate-180' : ''}`}
            >
              ↓
            </span>
          </button>

          {expanded && (
            <div id={expandId} role="region" aria-labelledby={`${expandId}-btn`} className="mt-3 animate-slide-up">
              <ol className="list-decimal list-inside space-y-2 pl-1">
                {game.howItPlays.map((step, i) => (
                  <li key={i} className="font-body text-sm text-ink/75 leading-relaxed">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}
