import { useState } from 'react'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'
import Testimonials, { Stars } from '../components/Testimonials'
import CTA from '../components/CTA'

const stats = [
  { value: '200K+', label: 'Cured & satisfied patients around the globe' },
  { value: '5000+', label: 'Appointments booked already' },
  { value: '5.0', label: 'Average rating from 980 reviews' },
  { value: '120+', label: 'Specialist doctors on our team' },
]

const whyItems = [
  {
    num: '01',
    title: 'Experienced Professionals',
    text: 'Our team of dedicated healthcare providers brings years of experience and expertise to deliver care you can trust.',
  },
  {
    num: '02',
    title: 'Advanced Technology',
    text: 'We utilize cutting-edge medical technology to provide accurate diagnoses and effective treatments for every patient.',
  },
]

const servicesPreview = [
  {
    title: 'General Consultation',
    text: 'Comprehensive check-ups and personalized treatment plans from experienced physicians.',
    img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Virtual Consultation',
    text: 'Talk to certified doctors from the comfort of your home, anytime you need us.',
    img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
  },
  {
    title: 'Laboratory Services',
    text: 'Fast, accurate lab testing with state-of-the-art equipment and quick results.',
    img: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80&auto=format&fit=crop',
  },
]

function AppointmentWidget() {
  const [sent, setSent] = useState(false)

  return (
    <Reveal delay={350} className="relative z-20 mx-auto -mt-14 max-w-5xl px-5 lg:px-8">
      <div className="rounded-[2rem] border border-slate-100 bg-white p-6 shadow-soft sm:p-8">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600">
            <span className="pulse-dot h-2 w-2 rounded-full bg-brand-500" />
            Virtual Consultation Available
          </span>
          <Stars />
        </div>
        {sent ? (
          <div className="flex flex-col items-center gap-3 py-8 text-center">
            <span className="grid h-14 w-14 place-items-center rounded-full bg-brand-50 text-brand-600">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6 9 17l-5-5" />
              </svg>
            </span>
            <p className="text-lg font-bold text-slate-900">Request received!</p>
            <p className="text-sm text-slate-500">Our team will contact you shortly to confirm your appointment.</p>
          </div>
        ) : (
          <form
            className="grid gap-4 md:grid-cols-4"
            onSubmit={(e) => { e.preventDefault(); setSent(true) }}
          >
            <div className="group">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">Name</label>
              <input
                required
                type="text"
                placeholder="Your name"
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">Doctor</label>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none transition-all duration-300 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                defaultValue=""
              >
                <option value="" disabled>Select doctor</option>
                <option>Dr. Sarah Mitchell</option>
                <option>Dr. James Carter</option>
                <option>Dr. Emily Chen</option>
                <option>Dr. Michael Ross</option>
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-slate-400">Location</label>
              <select
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600 outline-none transition-all duration-300 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100"
                defaultValue=""
              >
                <option value="" disabled>Select location</option>
                <option>Downtown Clinic</option>
                <option>Westside Medical Center</option>
                <option>Riverside Hospital</option>
                <option>Virtual (Online)</option>
              </select>
            </div>
            <div className="flex items-end">
              <button
                type="submit"
                className="group relative w-full overflow-hidden rounded-2xl bg-brand-600 px-6 py-3 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 active:scale-95"
              >
                <span className="relative z-10 inline-flex items-center justify-center gap-2">
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                  Find Doctor
                </span>
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              </button>
            </div>
          </form>
        )}
      </div>
    </Reveal>
  )
}

export default function Home({ setPage }) {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden pb-32 pt-32 lg:pt-40">
        <div className="pointer-events-none absolute -left-40 top-0 h-[500px] w-[500px] rounded-full bg-brand-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 bottom-0 h-[400px] w-[400px] rounded-full bg-cyan-50 blur-3xl" />
        <svg className="pointer-events-none absolute left-1/2 top-24 hidden -translate-x-1/2 opacity-[0.35] lg:block" width="900" height="500" viewBox="0 0 900 500" fill="none">
          <path d="M0 250 Q 225 100 450 250 T 900 250" stroke="#cffafe" strokeWidth="2" strokeDasharray="6 8" />
        </svg>

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          {/* Left */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-100 bg-white px-4 py-2 text-xs font-bold text-slate-700 shadow-sm">
                <Stars />
                5.0 <span className="font-medium text-slate-400">(980 Reviews)</span>
              </span>
            </Reveal>
            <Reveal delay={100}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-5xl xl:text-6xl">
                Partner in{' '}
                <span className="relative inline-block text-brand-600">
                  health
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 12" fill="none" preserveAspectRatio="none">
                    <path d="M2 9C60 2 140 2 198 9" stroke="#67e8f9" strokeWidth="5" strokeLinecap="round" />
                  </svg>
                </span>{' '}
                and wellness
              </h1>
            </Reveal>
            <Reveal delay={200}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-500">
                Providing advanced healthcare solutions with a compassionate touch
                for every patient. Book appointments, consult online, and get the
                care you deserve.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => setPage('contact')}
                  className="group relative overflow-hidden rounded-full bg-brand-600 px-8 py-4 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-1 hover:bg-brand-700 hover:shadow-xl active:scale-95"
                >
                  <span className="relative z-10 inline-flex items-center gap-2">
                    Book Appointment
                    <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                </button>
                <button
                  onClick={() => setPage('services')}
                  className="rounded-full border-2 border-slate-200 px-8 py-4 text-sm font-bold text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:border-brand-400 hover:text-brand-600 hover:shadow-lg active:scale-95"
                >
                  Our Services
                </button>
              </div>
            </Reveal>
            <Reveal delay={400}>
              <div className="mt-10 flex items-center gap-4">
                <div className="flex -space-x-3">
                  {['women/44', 'men/32', 'women/68', 'men/75'].map((p, i) => (
                    <img
                      key={i}
                      src={'https://randomuser.me/api/portraits/' + p + '.jpg'}
                      alt="patient"
                      className="h-11 w-11 rounded-full border-2 border-white object-cover shadow transition-transform duration-300 hover:-translate-y-1"
                    />
                  ))}
                </div>
                <p className="text-sm text-slate-500">
                  <span className="font-bold text-slate-900">200K+</span> cured &amp; satisfied
                  <br className="hidden sm:block" /> patients around the globe
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right */}
          <Reveal delay={250} className="relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-br from-brand-200/50 to-cyan-100/50 blur-xl" />
              <div className="group relative overflow-hidden rounded-[2.5rem] shadow-soft">
                <img
                  src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&q=80&auto=format&fit=crop"
                  alt="Doctor consulting a patient"
                  className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900/30 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>

              {/* Floating card: rating */}
              <div className="animate-floaty absolute -left-4 top-10 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur sm:-left-10">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-amber-50 text-amber-400">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">5.0 Rating</p>
                  <p className="text-xs text-slate-400">980+ verified reviews</p>
                </div>
              </div>

              {/* Floating card: appointments */}
              <div className="animate-floaty-delayed absolute -bottom-6 -right-2 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur sm:-right-8">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-brand-600">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="3" />
                    <path d="M16 2v4M8 2v4M3 10h18" />
                    <path d="m10 14 2 2 4-4" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-extrabold text-slate-900">5000+ Appointments</p>
                  <p className="text-xs text-slate-400">Patients booked already</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <AppointmentWidget />

      {/* ================= STATS ================= */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.value} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-slate-100 bg-white p-8 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-soft">
                <p className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-4xl font-extrabold text-transparent transition-transform duration-500 group-hover:scale-110">
                  {s.value}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">{s.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ================= WHY US ================= */}
      <section className="bg-slate-50/70 py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 lg:grid-cols-2 lg:px-8">
          <Reveal className="relative order-2 lg:order-1">
            <div className="group relative overflow-hidden rounded-[2.5rem] shadow-soft">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&q=80&auto=format&fit=crop"
                alt="Healthcare professional"
                className="h-[420px] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/40 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
            <div className="absolute -bottom-8 -right-4 rounded-3xl bg-brand-600 p-6 text-white shadow-soft sm:right-8">
              <p className="text-4xl font-extrabold">15+</p>
              <p className="mt-1 text-sm text-brand-100">Years of medical excellence</p>
            </div>
          </Reveal>

          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="Why us"
              title="Why choose VitalFlow for your healthcare?"
              subtitle="We combine experienced professionals with advanced technology to give you the best care possible."
            />
            <div className="mt-10 space-y-5">
              {whyItems.map((item, i) => (
                <Reveal key={item.num} delay={i * 150}>
                  <div className="group flex gap-6 rounded-3xl border border-transparent bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft">
                    <span className="bg-gradient-to-br from-brand-500 to-brand-700 bg-clip-text text-4xl font-extrabold text-transparent">
                      {item.num}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-600">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================= SERVICES PREVIEW ================= */}
      <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
        <SectionHeading
          eyebrow="Services"
          title="Personalized solutions for better health"
          subtitle="From routine check-ups to specialized care, we have the right service for every need."
        />
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {servicesPreview.map((s, i) => (
            <Reveal key={s.title} delay={i * 120}>
              <div className="group cursor-pointer overflow-hidden rounded-[2rem] bg-white shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-soft" onClick={() => setPage('services')}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={s.img}
                    alt={s.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-900/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 translate-y-3 rounded-full bg-white/95 px-4 py-1.5 text-xs font-bold text-brand-700 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    Learn more →
                  </span>
                </div>
                <div className="p-7">
                  <h3 className="text-lg font-bold text-slate-900 transition-colors duration-300 group-hover:text-brand-600">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{s.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-12 text-center" delay={200}>
          <button
            onClick={() => setPage('services')}
            className="group inline-flex items-center gap-2 rounded-full border-2 border-brand-600 px-8 py-3.5 text-sm font-bold text-brand-600 transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-600 hover:text-white hover:shadow-soft active:scale-95"
          >
            View All Services
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </Reveal>
      </section>

      <Testimonials />
      <CTA setPage={setPage} />
    </>
  )
}
