import { Link } from 'react-router-dom'
import { campaignConfig } from '../../data/campaign'
import { KickstarterCTA } from '../millrat-pack/CTAButton'

export function Footer() {
  const { socialUrls } = campaignConfig
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink border-t border-white/10 pt-12 pb-24 lg:pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              {/* TODO: replace with real logo */}
              <div className="w-9 h-9 bg-purple-mill rounded-lg flex items-center justify-center shadow-paper">
                <span className="font-display text-paper text-sm">M</span>
              </div>
              <span className="font-display text-paper text-lg">MILLRAT STUDIO</span>
            </div>
            <p className="text-paper/60 font-body text-sm leading-relaxed">
              Making games for game night since 2023.<br />Boston, MA.
            </p>
            <div className="flex gap-3 mt-4">
              {/* TODO: wire up real social URLs */}
              <a href={socialUrls.instagram} aria-label="Instagram" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-mill transition-colors flex items-center justify-center text-paper/60 hover:text-paper text-xs font-bold">IG</a>
              <a href={socialUrls.tiktok} aria-label="TikTok" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-mill transition-colors flex items-center justify-center text-paper/60 hover:text-paper text-xs font-bold">TK</a>
              <a href={socialUrls.x} aria-label="X / Twitter" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-mill transition-colors flex items-center justify-center text-paper/60 hover:text-paper text-xs font-bold">𝕏</a>
              <a href={socialUrls.facebook} aria-label="Facebook" className="w-8 h-8 rounded-full bg-white/10 hover:bg-purple-mill transition-colors flex items-center justify-center text-paper/60 hover:text-paper text-xs font-bold">fb</a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-display text-paper mb-3">Explore</h3>
            <ul className="space-y-2">
              {[
                ['The Pack', '/#games'],
                ["What's in the Box", '/#box'],
                ['Kickstarter', '/#kickstarter'],
                ['Reviews', '/#reviews'],
                ['About Nick & Adam', '/about'],
                ['FAQ', '/#faq'],
              ].map(([label, href]) => (
                <li key={label}>
                  <a href={href} className="text-paper/60 hover:text-paper font-body text-sm transition-colors">{label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-display text-paper mb-3">Don't miss launch day</h3>
            <p className="text-paper/60 font-body text-sm mb-4 leading-relaxed">
              Follow the campaign on Kickstarter so you hear the moment it's live.
            </p>
            <KickstarterCTA size="md" />
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-paper/40 font-body text-xs">
          <p>© {year} Millrat Studio. All rights reserved.</p>
          <div className="flex gap-4">
            {/* TODO: add real privacy/contact pages */}
            <Link to="/contact" className="hover:text-paper/70 transition-colors">Contact</Link>
            <span>·</span>
            <a href="#" className="hover:text-paper/70 transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
