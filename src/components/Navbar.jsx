import { useState, useEffect } from 'react'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'services', label: 'Services' },
  { id: 'doctors', label: 'Doctors' },
  { id: 'contact', label: 'Contact' },
]

export function Logo() {
  return (
    <span className="flex items-center gap-2">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-brand-400 to-brand-600 text-white shadow-soft">
        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3.4 1-4.5 2.5C10.9 4 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
          <path d="M3.5 12h4l1.5-3 2.5 6 1.5-3h4" />
        </svg>
      </span>
      <span className="text-xl font-extrabold tracking-tight text-slate-900">
        Vital<span className="text-brand-600">Flow</span>
      </span>
    </span>
  )
}

export default function Navbar({ page, setPage }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const go = (id) => {
    setPage(id)
    setOpen(false)
  }

  return (
    <header
      className={
        'fixed inset-x-0 top-0 z-50 transition-all duration-500 ' +
        (scrolled
          ? 'bg-white/90 shadow-card backdrop-blur-xl py-3'
          : 'bg-transparent py-5')
      }
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <button onClick={() => go('home')} className="transition-transform duration-300 hover:scale-[1.03]">
          <Logo />
        </button>

        {/* Desktop links */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={
                'nav-link text-sm font-semibold transition-colors duration-300 ' +
                (page === l.id ? 'active text-brand-600' : 'text-slate-600 hover:text-brand-600')
              }
            >
              {l.label}
            </button>
          ))}
        </nav>

        <div className="hidden md:block">
          <button
            onClick={() => go('contact')}
            className="group relative overflow-hidden rounded-full bg-brand-600 px-6 py-2.5 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-lg active:scale-95"
          >
            <span className="relative z-10">Book Appointment</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-slate-200 bg-white text-slate-700 transition hover:bg-slate-50 md:hidden"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={
          'overflow-hidden transition-all duration-500 ease-in-out md:hidden ' +
          (open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0')
        }
      >
        <nav className="mx-5 mt-3 flex flex-col gap-1 rounded-2xl border border-slate-100 bg-white p-4 shadow-card">
          {links.map((l) => (
            <button
              key={l.id}
              onClick={() => go(l.id)}
              className={
                'rounded-xl px-4 py-3 text-left text-sm font-semibold transition-all duration-300 ' +
                (page === l.id
                  ? 'bg-brand-50 text-brand-700'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-brand-600')
              }
            >
              {l.label}
            </button>
          ))}
          <button
            onClick={() => go('contact')}
            className="mt-2 rounded-xl bg-brand-600 px-4 py-3 text-sm font-bold text-white transition hover:bg-brand-700"
          >
            Book Appointment
          </button>
        </nav>
      </div>
    </header>
  )
}
