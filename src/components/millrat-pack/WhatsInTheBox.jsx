import { assets } from '../../data/assets'
import { games } from '../../data/games'

export function WhatsInTheBox() {
  return (
    <section className="bg-ink py-20 px-4" id="box">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-paper text-4xl sm:text-5xl mb-3">What's in the Box</h2>
          <p className="font-body text-paper/60 text-lg max-w-xl mx-auto">
            One box. Four different reasons to say "one more game."
          </p>
        </div>

        {/* Overhead hero photo */}
        <div className="rounded-2xl overflow-hidden shadow-paper-lg ring-1 ring-white/10 mb-10">
          <img
            src={assets.millratPack.heroOverhead}
            alt="MILLRAT Pack opened flat from above — all four games visible inside: Someone's Y, Scrapbook, Footfalls, and Bad Eggs nestled in colorful tissue paper"
            className="w-full object-cover"
            style={{ maxHeight: '480px' }}
            loading="lazy"
            decoding="async"
          />
        </div>

        {/* Four game component spreads */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-paper shadow-paper rounded-xl overflow-hidden card-cutout hover:rotate-0 transition-transform duration-200"
              style={{ borderTop: `3px solid ${game.accent}` }}
            >
              <div
                className="flex items-center justify-center p-3"
                style={{ backgroundColor: game.accentBg, minHeight: '120px' }}
              >
                <img
                  src={game.componentImage}
                  alt={game.componentAlt}
                  className="w-full h-full object-contain drop-shadow-lg"
                  style={{ maxHeight: '110px' }}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="p-3 text-center">
                <span className="font-display text-ink text-sm leading-tight block">{game.title}</span>
                <span className="font-body text-ink/40 text-xs">{game.players} players · {game.time}</span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-body text-paper/40 text-xs mt-6">
          {/* TODO: confirm final component list with Nick & Adam before launch */}
          Component list is approximate — final contents confirmed at production.
        </p>
      </div>
    </section>
  )
}
