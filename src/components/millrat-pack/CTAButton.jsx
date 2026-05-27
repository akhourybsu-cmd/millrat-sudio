import { campaignConfig } from '../../data/campaign'

const variants = {
  primary: 'bg-green-sticker text-ink hover:bg-green-sticker-dark shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]',
  secondary: 'bg-transparent text-paper border-2 border-paper hover:bg-paper hover:text-ink shadow-paper',
  purple: 'bg-purple-mill text-paper hover:bg-purple-light shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]',
  outline: 'bg-transparent text-green-sticker border-2 border-green-sticker hover:bg-green-sticker hover:text-ink',
}

export function CTAButton({ variant = 'primary', href, onClick, children, className = '', size = 'md', analyticsEvent }) {
  const sizeClasses = size === 'lg'
    ? 'px-8 py-4 text-lg'
    : size === 'sm'
    ? 'px-4 py-2 text-sm'
    : 'px-6 py-3 text-base'

  const base = `inline-flex items-center justify-center gap-2 font-display rounded-lg transition-all duration-150 cursor-pointer select-none ${sizeClasses} ${variants[variant]} ${className}`

  const handleClick = () => {
    // TODO: fire analytics event
    // analytics.track(analyticsEvent ?? 'cta_click')
    onClick?.()
  }

  if (href) {
    return (
      <a href={href} className={base} onClick={handleClick} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={base} onClick={handleClick}>
      {children}
    </button>
  )
}

// Convenience wrappers that read campaign config automatically
export function KickstarterCTA({ size, className }) {
  const { status, kickstarterUrl } = campaignConfig
  const labels = {
    prelaunch: 'Notify Me on Kickstarter',
    live: 'Back on Kickstarter',
    ended: 'Join the Late Pledge List',
  }
  return (
    <CTAButton href={kickstarterUrl} variant="primary" size={size} className={className} analyticsEvent="kickstarter_cta_click">
      {labels[status]}
    </CTAButton>
  )
}

export function FreeGameCTA({ size, className }) {
  return (
    <CTAButton href={campaignConfig.freeGameUrl} variant="secondary" size={size} className={className} analyticsEvent="hero_email_click">
      Try Someone's Y Free
    </CTAButton>
  )
}
