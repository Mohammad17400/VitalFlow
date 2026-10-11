import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  return (
    <Reveal className={'max-w-2xl ' + alignClass}>
      {eyebrow && (
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-brand-600">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500 pulse-dot" />
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-slate-500">{subtitle}</p>}
    </Reveal>
  )
}
