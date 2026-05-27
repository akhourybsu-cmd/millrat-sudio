import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { KickstarterCTA } from '../millrat-pack/CTAButton'
import { CTAButton } from '../millrat-pack/CTAButton'

// Nav links differ by page context
const productNavLinks = [
  { label: 'The Pack', href: '#games' },
  { label: "What's in the Box", href: '#box' },
  { label: 'Kickstarter', href: '#kickstarter' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'FAQ', href: '#faq' },
]

const studioNavLinks = [
  { label: 'Our Games', href: '/millrat-pack' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  const isProductPage = location.pathname === '/millrat-pack'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
  }, [location])

  // Close menu if Escape key pressed
  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [menuOpen])

  const navLinks = isProductPage ? productNavLinks : studioNavLinks

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-ink/95 backdrop-blur-sm shadow-lg border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 shrink-0 group" aria-label="Millrat Studio — home">
            {/* TODO: replace with <img src="/assets/images/millrat-logo.svg" alt="Millrat Studio" className="h-8 w-auto" /> */}
            <div className="w-9 h-9 bg-purple-mill rounded-lg flex items-center justify-center shadow-paper group-hover:bg-purple-light transition-colors">
              <span className="font-display text-paper text-sm leading-none" aria-hidden="true">M</span>
            </div>
            <span className="font-display text-paper text-lg leading-none hidden sm:block">MILLRAT</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-6" aria-label="Main navigation">
            {navLinks.map((l) => (
              l.href.startsWith('/') ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-paper/70 hover:text-paper font-body font-semibold text-sm transition-colors rounded px-1"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-paper/70 hover:text-paper font-body font-semibold text-sm transition-colors rounded px-1"
                >
                  {l.label}
                </a>
              )
            ))}
          </nav>

          {/* Header CTA — context aware */}
          <div className="flex items-center gap-3">
            {isProductPage ? (
              <KickstarterCTA size="sm" className="hidden sm:inline-flex" />
            ) : (
              <CTAButton
                href="/millrat-pack"
                variant="primary"
                size="sm"
                className="hidden sm:inline-flex"
              >
                Explore Millrat Pack
              </CTAButton>
            )}

            {/* Hamburger */}
            <button
              type="button"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="lg:hidden p-2 rounded-md text-paper hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
            >
              <span aria-hidden="true" className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <span aria-hidden="true" className={`block w-5 h-0.5 bg-current my-1 transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
              <span aria-hidden="true" className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        <div
          id="mobile-nav"
          role="dialog"
          aria-label="Navigation menu"
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            menuOpen ? 'max-h-[480px] bg-ink/98 border-t border-white/10' : 'max-h-0'
          }`}
        >
          <nav className="px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((l) =>
              l.href.startsWith('/') ? (
                <Link
                  key={l.label}
                  to={l.href}
                  className="text-paper/80 hover:text-paper font-body font-bold text-base py-3 px-2 rounded-lg hover:bg-white/5 transition-colors block"
                >
                  {l.label}
                </Link>
              ) : (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-paper/80 hover:text-paper font-body font-bold text-base py-3 px-2 rounded-lg hover:bg-white/5 transition-colors block"
                >
                  {l.label}
                </a>
              )
            )}
            <div className="pt-3 pb-1 border-t border-white/10 mt-2">
              {isProductPage ? (
                <KickstarterCTA size="md" className="w-full justify-center" />
              ) : (
                <CTAButton href="/millrat-pack" variant="primary" size="md" className="w-full justify-center">
                  Explore Millrat Pack
                </CTAButton>
              )}
            </div>
          </nav>
        </div>
      </header>

      {/* Sticky mobile bottom CTA — product page only */}
      {isProductPage && (
        <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-ink/95 backdrop-blur-sm border-t border-white/10 px-4 py-3 safe-area-pb">
          <KickstarterCTA size="md" className="w-full justify-center" />
        </div>
      )}
    </>
  )
}
