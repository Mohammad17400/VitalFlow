import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import CTA from '../components/CTA'

const services = [
  {
    title: 'General Consultation',
    text: 'Comprehensive health check-ups and personalized treatment plans tailored to your needs.',
    icon: (
      <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3.4 1-4.5 2.5C10.9 4 9.3 3 7.5 3A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4 3 5.5l7 7z" />
    ),
  },
  {
    title: 'Virtual Consultation',
    text: 'Connect with certified doctors online from anywhere — video calls, chat and e-prescriptions.',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="14" rx="3" />
        <path d="M8 21h8M12 18v3" />
        <path d="m10 9 2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Emergency Care',
    text: '24/7 emergency response with rapid ambulances and an always-ready critical care team.',
    icon: (
      <>
        <path d="M3 12h4l2 5 4-12 2 7h6" />
        <circle cx="12" cy="12" r="10" />
      </>
    ),
  },
  {
    title: 'Laboratory Services',
    text: 'Accurate diagnostics with state-of-the-art lab equipment and fast digital reports.',
    icon: (
      <>
        <path d="M9 3h6M10 3v6l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 18l-5-9V3" />
        <path d="M7 15h10" />
      </>
    ),
  },
  {
    title: 'Cardiology',
    text: 'Advanced heart care — from preventive screening to treatment by leading cardiologists.',
    icon: (
      <>
        <path d="M3 12h4l2 5 4-12 2 7h6" />
        <path d="M19 14c1.5-1.5 3-3.2 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.8 0-3.4 1-4.5 2.5" />
      </>
    ),
  },
  {
    title: 'Dental Care',
    text: 'Complete dental solutions — cleaning, whitening, orthodontics and painless procedures.',
    icon: (
      <path d="M12 5.5C10 3.8 7.2 3 4.8 4.1 2 5.4 1.6 8.9 3 12c1.2 2.6 2.5 4.4 3.2 7 .3 1.1 1.9 1.2 2.4.1l1.6-3.6c.5-1 2-1 2.5 0l1.6 3.6c.5 1.1 2.1 1 2.4-.1.7-2.6 2-4.4 3.2-7 1.4-3.1 1-6.6-1.8-7.9-2.4-1.1-5.2-.3-7.1 1.4z" />
    ),
  },
]

function PageHeader({ eyebrow, title, subtitle }) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-brand-50 via-white to-cyan-50 pb-20 pt-36 text-center">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-100/70 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-cyan-100/70 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-5">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600 shadow-sm">
            <span className="pulse-dot h-1.5 w-1.5 rounded-full bg-brand-500" />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">{title}</h1>
        </Reveal>
        <Reveal delay={200}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-slate-500">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  )
}

export { PageHeader }

export default function Services({ setPage }) {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Our Medical Services"
        subtitle="Personalized solutions for better health — explore the wide range of care we provide."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={(i % 3) * 120}>
              <div className="group relative h-full overflow-hidden rounded-[2rem] border border-slate-100 bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-3 hover:border-brand-200 hover:shadow-soft">
                <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-brand-50 transition-all duration-500 group-hover:scale-[1.8] group-hover:bg-brand-100/60" />
                <div className="relative">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-brand-700 text-white shadow-soft transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
                    <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      {s.icon}
                    </svg>
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-600">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.text}</p>
                  <button
                    onClick={() => setPage('contact')}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-600"
                  >
                    <span className="border-b-2 border-transparent transition-all duration-300 group-hover:border-brand-400">Book Now</span>
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTA setPage={setPage} />
    </>
  )
}
