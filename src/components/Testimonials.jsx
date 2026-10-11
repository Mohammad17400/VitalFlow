import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

const testimonials = [
  { name: 'Emily Johnson', img: 'https://randomuser.me/api/portraits/women/44.jpg', text: 'Their service was outstanding. They ensured I was comfortable and informed every step of the way.' },
  { name: 'Michael Roberts', img: 'https://randomuser.me/api/portraits/men/32.jpg', text: 'The support I received was excellent. They truly cared about my needs and exceeded my expectations.' },
  { name: 'Sophia Martinez', img: 'https://randomuser.me/api/portraits/women/68.jpg', text: 'I felt valued and cared for. Their team made every effort to provide exceptional support and service.' },
  { name: 'Olivia Harris', img: 'https://randomuser.me/api/portraits/women/65.jpg', text: 'They were attentive and thorough. Their professionalism and kindness made the entire process seamless.' },
  { name: 'James Anderson', img: 'https://randomuser.me/api/portraits/men/75.jpg', text: 'My experience was remarkable. They delivered exactly what they promised with care and dedication.' },
  { name: 'Daniel Thompson', img: 'https://randomuser.me/api/portraits/men/41.jpg', text: 'Their team was exceptional. They listened to my concerns and made sure all my needs were addressed.' },
]

export function Stars() {
  return (
    <div className="flex gap-0.5 text-amber-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z" />
        </svg>
      ))}
    </div>
  )
}

function Card({ t }) {
  return (
    <div className="group relative w-[320px] shrink-0 rounded-3xl border border-slate-100 bg-white p-6 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-soft sm:w-[380px]">
      <svg className="absolute right-6 top-6 h-8 w-8 text-brand-100 transition-colors duration-300 group-hover:text-brand-200" viewBox="0 0 24 24" fill="currentColor">
        <path d="M10 8c-3.3 0-6 2.7-6 6v2h5v-5H6.5C6.8 9.6 8.2 8.5 10 8.5zm10 0c-3.3 0-6 2.7-6 6v2h5v-5h-2.5c.3-1.4 1.7-2.5 3.5-2.5z" />
      </svg>
      <Stars />
      <p className="mt-4 text-sm leading-relaxed text-slate-500">&ldquo;{t.text}&rdquo;</p>
      <div className="mt-6 flex items-center gap-3">
        <img
          src={t.img}
          alt={t.name}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-brand-100 transition-transform duration-300 group-hover:scale-110"
        />
        <div>
          <p className="text-sm font-bold text-slate-900">{t.name}</p>
          <p className="text-xs text-slate-400">Happy Patient</p>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <section className="overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="What our satisfied and happy clients have to say"
        />
      </div>
      <Reveal className="mt-14" delay={150}>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-32" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-32" />
          <div className="animate-marquee flex w-max gap-6 px-5 hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Card key={i} t={t} />
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}
