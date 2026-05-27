import { usePageMeta } from '../../hooks/usePageMeta'

export default function ContactPage() {
  usePageMeta({
    title: 'Contact | Millrat Studio',
    description: 'Get in touch with Millrat Studio — press inquiries, partnerships, or just to say hi.',
  })

  return (
    <main className="pt-16 bg-paper min-h-screen">
      {/* Page hero */}
      <div className="bg-ink py-16 px-4 text-center">
        <h1 className="font-display text-paper text-4xl sm:text-5xl mb-3">Get in Touch</h1>
        <p className="font-body text-paper/60 text-base max-w-md mx-auto leading-relaxed">
          Press, partnerships, or just want to say hi? We'd love to hear from you.
        </p>
      </div>

      <section className="py-16 px-4" aria-label="Contact form">
        <div className="max-w-xl mx-auto">
          {/* TODO: wire this form to Formspree, Netlify Forms, or a backend POST endpoint */}
          <form className="flex flex-col gap-5" aria-label="Contact form" noValidate>
            <div>
              <label htmlFor="contact-name" className="font-body font-bold text-ink/80 text-sm block mb-1.5">
                Name <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Your name"
                required
                autoComplete="name"
                className="w-full font-body text-ink bg-white border-2 border-ink/15 focus:border-purple-mill rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-ink/30"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="font-body font-bold text-ink/80 text-sm block mb-1.5">
                Email <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="your@email.com"
                required
                autoComplete="email"
                className="w-full font-body text-ink bg-white border-2 border-ink/15 focus:border-purple-mill rounded-lg px-4 py-3 outline-none transition-colors placeholder:text-ink/30"
              />
            </div>

            <div>
              <label htmlFor="contact-subject" className="font-body font-bold text-ink/80 text-sm block mb-1.5">
                Subject
              </label>
              <select
                id="contact-subject"
                name="subject"
                className="w-full font-body text-ink bg-white border-2 border-ink/15 focus:border-purple-mill rounded-lg px-4 py-3 outline-none transition-colors"
              >
                <option value="">Select a topic…</option>
                <option value="press">Press / media inquiry</option>
                <option value="partnership">Partnership</option>
                <option value="kickstarter">Kickstarter question</option>
                <option value="games">Game feedback</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-message" className="font-body font-bold text-ink/80 text-sm block mb-1.5">
                Message <span aria-hidden="true" className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                placeholder="What's on your mind?"
                required
                className="w-full font-body text-ink bg-white border-2 border-ink/15 focus:border-purple-mill rounded-lg px-4 py-3 outline-none transition-colors resize-none placeholder:text-ink/30"
              />
            </div>

            <button
              type="submit"
              className="font-display text-ink bg-green-sticker hover:bg-green-sticker-dark px-6 py-3.5 rounded-lg shadow-sticker hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all duration-150 text-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  )
}
