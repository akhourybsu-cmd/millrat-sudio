import { games } from '../../data/games'
import { GameCard } from './GameCard'

export function GameLineup() {
  return (
    <section className="bg-paper py-20 px-4" id="games">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display text-ink text-4xl sm:text-5xl mb-3">The Pack</h2>
          <p className="font-body text-ink/60 text-lg max-w-xl mx-auto">
            Four games. Four moods. One box you'll actually open.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {games.map((game, i) => (
            <div
              key={game.id}
              className={`${i % 2 === 0 ? '-rotate-[0.3deg]' : 'rotate-[0.2deg]'} hover:rotate-0 transition-transform duration-300`}
            >
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
