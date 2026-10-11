import Reveal from './Reveal'

export default function CTA({ setPage }) {
  return (
    <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-brand-600 via-brand-700 to-brand-800 px-8 py-16 text-center shadow-soft sm:px-16">
          <div className="pointer-events-none absolute -left-16 -top-16 h-64 w-64 rounded-full bg-white/10 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-20 -right-10 h-72 w-72 rounded-full bg-brand-400/20 blur-2xl" />
          <svg className="pointer-events-none absolute right-10 top-8 h-16 w-16 text-white/10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3.4 1-4.5 2.5C10.9 4 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
          </svg>

          <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-white">
            <span className="h-1.5 w-1.5 rounded-full bg-white pulse-dot" />
            Get Started
          </span>
          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Contact us for more information &amp; get started
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-brand-100">
            Our care team is available 24/7 to answer your questions and help you
            book the right specialist for your needs.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => setPage('contact')}
              className="group rounded-full bg-white px-8 py-3.5 text-sm font-bold text-brand-700 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl active:scale-95"
            >
              <span className="inline-flex items-center gap-2">
                Contact Us
                <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </button>
            <button
              onClick={() => setPage('doctors')}
              className="rounded-full border-2 border-white/40 px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10 active:scale-95"
            >
              Meet Our Doctors
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
