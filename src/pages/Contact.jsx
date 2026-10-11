import { useState } from 'react'
import Reveal from '../components/Reveal'
import { PageHeader } from './Services'

const contactInfo = [
  {
    title: 'Call Us',
    value: '+1 (555) 123-4567',
    sub: 'Available 24/7 for emergencies',
    icon: (
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    ),
  },
  {
    title: 'Email Us',
    value: 'care@vitalflow.com',
    sub: 'We reply within 24 hours',
    icon: (
      <>
        <rect x="2" y="4" width="20" height="16" rx="3" />
        <path d="m22 7-10 6L2 7" />
      </>
    ),
  },
  {
    title: 'Visit Us',
    value: '123 Wellness Avenue',
    sub: 'New York, NY 10001',
    icon: (
      <>
        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
        <circle cx="12" cy="10" r="3" />
      </>
    ),
  },
  {
    title: 'Working Hours',
    value: 'Mon – Sat: 8:00 – 20:00',
    sub: 'Sunday: 9:00 – 14:00',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </>
    ),
  },
]

const inputClass =
  'w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm outline-none transition-all duration-300 placeholder:text-slate-400 focus:border-brand-400 focus:bg-white focus:ring-4 focus:ring-brand-100'

export default function Contact() {
  const [sent, setSent] = useState(false)

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Get in Touch"
        subtitle="Contact us for more information & get started — our team is ready to help you."
      />

      <section className="mx-auto max-w-7xl px-5 pb-24 lg:px-8">
        {/* Info cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((c, i) => (
            <Reveal key={c.title} delay={i * 100}>
              <div className="group h-full rounded-3xl border border-slate-100 bg-white p-7 text-center shadow-card transition-all duration-500 hover:-translate-y-2 hover:border-brand-200 hover:shadow-soft">
                <span className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-brand-50 text-brand-600 transition-all duration-500 group-hover:rotate-6 group-hover:bg-gradient-to-br group-hover:from-brand-500 group-hover:to-brand-700 group-hover:text-white group-hover:shadow-soft">
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    {c.icon}
                  </svg>
                </span>
                <h3 className="mt-5 text-sm font-bold uppercase tracking-wider text-slate-400">{c.title}</h3>
                <p className="mt-2 font-bold text-slate-900">{c.value}</p>
                <p className="mt-1 text-xs text-slate-400">{c.sub}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Form + map */}
        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-[2rem] border border-slate-100 bg-white p-8 shadow-card sm:p-10">
              <h2 className="text-2xl font-extrabold text-slate-900">Send us a message</h2>
              <p className="mt-2 text-sm text-slate-500">
                Fill in the form below and we will get back to you as soon as possible.
              </p>

              {sent ? (
                <div className="flex flex-col items-center gap-4 py-14 text-center">
                  <span className="grid h-16 w-16 place-items-center rounded-full bg-brand-50 text-brand-600">
                    <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                  </span>
                  <p className="text-xl font-bold text-slate-900">Message sent successfully!</p>
                  <p className="max-w-sm text-sm text-slate-500">
                    Thank you for reaching out. Our care team will contact you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSent(false)}
                    className="mt-2 rounded-full border-2 border-brand-600 px-6 py-2.5 text-sm font-bold text-brand-600 transition-all duration-300 hover:bg-brand-600 hover:text-white"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form
                  className="mt-8 space-y-5"
                  onSubmit={(e) => { e.preventDefault(); setSent(true) }}
                >
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input required type="text" placeholder="Full name" className={inputClass} />
                    <input required type="email" placeholder="Email address" className={inputClass} />
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <input type="tel" placeholder="Phone number" className={inputClass} />
                    <input type="text" placeholder="Subject" className={inputClass} />
                  </div>
                  <textarea
                    required
                    rows="5"
                    placeholder="How can we help you?"
                    className={inputClass + ' resize-none'}
                  />
                  <button
                    type="submit"
                    className="group relative w-full overflow-hidden rounded-2xl bg-brand-600 px-8 py-4 text-sm font-bold text-white shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-700 hover:shadow-xl active:scale-95 sm:w-auto"
                  >
                    <span className="relative z-10 inline-flex items-center gap-2">
                      Send Message
                      <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m22 2-7 20-4-9-9-4z" />
                        <path d="M22 2 11 13" />
                      </svg>
                    </span>
                    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="group relative h-[420px] overflow-hidden rounded-[2rem] border border-slate-100 shadow-card lg:h-full lg:min-h-[560px]">
              <iframe
                title="VitalFlow location"
                src="https://maps.google.com/maps?q=new%20york%20medical%20center&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0 grayscale-[30%] transition-all duration-700 group-hover:grayscale-0"
                loading="lazy"
              />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white/95 p-4 shadow-card backdrop-blur">
                <span className="pulse-dot grid h-10 w-10 place-items-center rounded-xl bg-brand-600 text-white">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </span>
                <div>
                  <p className="text-sm font-bold text-slate-900">VitalFlow Medical Center</p>
                  <p className="text-xs text-slate-400">123 Wellness Avenue, New York</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
