import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'
import { PageHeader } from './Services'

const doctors = [
  { name: 'Dr. Sarah Mitchell', role: 'Cardiologist', img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=700&q=80&auto=format&fit=crop' },
  { name: 'Dr. James Carter', role: 'General Physician', img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80&auto=format&fit=crop' },
  { name: 'Dr. Emily Chen', role: 'Pediatrician', img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=700&q=80&auto=format&fit=crop' },
  { name: 'Dr. Michael Ross', role: 'Neurologist', img: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=700&q=80&auto=format&fit=crop' },
  { name: 'Dr. Olivia Grant', role: 'Dermatologist', img: 'https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=700&q=80&auto=format&fit=crop' },
  { name: 'Dr. Daniel Kim', role: 'Orthopedic Surgeon', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=700&q=80&auto=format&fit=crop' },
]

const socialIcons = [
  'M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z',
  'M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z',
  'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4V8h4v1.5A6 6 0 0 1 16 8zM2 9h4v12H2zM4 6a2 2 0 1 0-2-2 2 2 0 0 0 2 2z',
]

export default function Doctors({ setPage }) {
  return (
    <>
      <PageHeader
        eyebrow="Team"
        title="Meet Our Doctors"
        subtitle="Our dedicated and experienced team of specialists is here to care for you and your family."
      />

      <section className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {doctors.map((d, i) => (
            <Reveal key={d.name} delay={(i % 3) * 120}>
              <div className="group">
                <div className="relative overflow-hidden rounded-[2rem] shadow-card transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-soft">
                  <img
                    src={d.img}
                    alt={d.name}
                    className="h-96 w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-brand-900/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-x-0 bottom-6 flex justify-center gap-3 translate-y-6 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    {socialIcons.map((p, j) => (
                      <a
                        key={j}
                        href="#"
                        aria-label="Social link"
                        className="grid h-10 w-10 place-items-center rounded-full bg-white/20 text-white backdrop-blur transition-all duration-300 hover:bg-white hover:text-brand-600"
                      >
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d={p} />
                        </svg>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-600">
                    {d.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-brand-600">{d.role}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center" delay={200}>
          <button
            onClick={() => setPage('contact')}
            className="group relative overflow-hidden rounded-full bg-brand-600 px-8 py-4 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 active:scale-95"
          >
            <span className="relative z-10">Book a Consultation</span>
            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
          </button>
        </Reveal>
      </section>

      <Testimonials />
      <CTA setPage={setPage} />
    </>
  )
}
