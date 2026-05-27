import { useEffect, useState } from 'react'
import { campaignConfig } from '../../data/campaign'

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(null)

  useEffect(() => {
    const target = new Date(targetDate).getTime()

    const tick = () => {
      const now = Date.now()
      const diff = target - now
      if (diff <= 0) {
        setTimeLeft(null)
        return
      }
      setTimeLeft({
        days: Math.floor(diff / 86400000),
        hours: Math.floor((diff % 86400000) / 3600000),
        minutes: Math.floor((diff % 3600000) / 60000),
        seconds: Math.floor((diff % 60000) / 1000),
      })
    }

    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [targetDate])

  return timeLeft
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <span className="font-display text-2xl leading-none text-ink">{String(value).padStart(2, '0')}</span>
      <span className="text-[10px] uppercase tracking-widest font-bold text-ink/60 mt-0.5">{label}</span>
    </div>
  )
}

// Compact sticker badge shown in hero / sticky header
export function CampaignBadge({ className = '' }) {
  const { status, launchDate } = campaignConfig
  const timeLeft = useCountdown(launchDate)

  if (status === 'live') {
    return (
      <span className={`inline-flex items-center gap-1.5 bg-green-sticker text-ink font-display px-4 py-1.5 rounded-full shadow-sticker text-sm animate-pulse-slow ${className}`}>
        <span className="w-2 h-2 bg-ink rounded-full inline-block animate-ping" />
        Now Live on Kickstarter!
      </span>
    )
  }

  if (status === 'ended') {
    return (
      <span className={`inline-flex items-center gap-1.5 bg-paper text-ink font-display px-4 py-1.5 rounded-full shadow-paper text-sm ${className}`}>
        Campaign Ended — Join Updates
      </span>
    )
  }

  // prelaunch — show countdown
  if (!timeLeft) return null
  return (
    <div className={`inline-flex flex-col items-center bg-green-sticker rounded-2xl px-5 py-3 shadow-paper ${className}`}>
      <span className="font-display text-xs uppercase tracking-widest text-ink/70 mb-1">Launching July 14</span>
      <div className="flex items-center gap-3">
        <CountdownUnit value={timeLeft.days} label="days" />
        <span className="font-display text-xl text-ink/50">:</span>
        <CountdownUnit value={timeLeft.hours} label="hrs" />
        <span className="font-display text-xl text-ink/50">:</span>
        <CountdownUnit value={timeLeft.minutes} label="min" />
        <span className="font-display text-xl text-ink/50">:</span>
        <CountdownUnit value={timeLeft.seconds} label="sec" />
      </div>
    </div>
  )
}
