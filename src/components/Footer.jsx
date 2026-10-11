import { Logo } from './Navbar'

const quickLinks = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'doctors', label: 'Doctors' },
  { id: 'contact', label: 'Contact' },
]

const serviceLinks = [
  'General Consultation',
  'Virtual Consultation',
  'Emergency Care',
  'Laboratory Services',
  'Cardiology',
  'Dental Care',
]

const socials = [
  {
    name: 'Facebook',
    path: 'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  },
  {
    name: 'Twitter',
    path: 'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  },
  {
    name: 'Instagram',
    path: 'M16 3H8a5 5 0 0 0-5 5v8a5 5 0 0 0 5 5h8a5 5 0 0 0 5-5V8a5 5 0 0 0-5-5zm-4 12.5A3.5 3.5 0 1 1 15.5 12 3.5 3.5 0 0 1 12 15.5zm5.2-8.2a.9.9 0 1 1 .9-.9.9.9 0 0 1-.9.9z',
  },
  {
    name: 'LinkedIn',
    path: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zM4 6a2 2 0 1 0-2-2 2 2 0 0 0 2 2z',
  },
]

export default function Footer({ setPage }) {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-slate-300">
      <div className="pointer-events-none absolute -left-32 -top-32 h-96 w-96 rounded-full bg-brand-600/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full bg-brand-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Logo />
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Providing advanced healthcare solutions with a compassionate touch
              for every patient. Your partner in health and wellness.
            </p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href="#"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 text-slate-300 transition-all duration-300 hover:-translate-y-1 hover:bg-brand-600 hover:text-white hover:shadow-lg"
                >
                  <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((l) => (
                <li key={l.id}>
                  <button
                    onClick={() => setPage(l.id)}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-brand-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-3" />
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Our Services</h4>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => setPage('services')}
                    className="group inline-flex items-center gap-2 text-sm text-slate-400 transition-colors duration-300 hover:text-brand-400"
                  >
                    <span className="h-1 w-1 rounded-full bg-brand-500 transition-all duration-300 group-hover:w-3" />
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-white">Newsletter</h4>
            <p className="mt-5 text-sm leading-relaxed text-slate-400">
              Subscribe to get health tips and updates from our doctors.
            </p>
            <form
              className="mt-5 flex overflow-hidden rounded-2xl bg-white/5 ring-1 ring-white/10 focus-within:ring-brand-500 transition"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="w-full bg-transparent px-4 py-3 text-sm text-white placeholder-slate-500 outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-brand-600 px-4 text-white transition-colors duration-300 hover:bg-brand-500"
                aria-label="Subscribe"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22l-4-9-9-4z" />
                </svg>
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 text-sm text-slate-500 sm:flex-row">
          <p>© 2026 VitalFlow. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="transition-colors hover:text-brand-400">Privacy Policy</a>
            <a href="#" className="transition-colors hover:text-brand-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
