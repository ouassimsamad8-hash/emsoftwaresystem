import type { Testimonial } from '../types/content';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-border/70 bg-surface/70 p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(8,15,40,0.5)]">
      <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
        <div className="absolute -top-16 right-0 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
      </div>
      <blockquote className="relative text-lg text-body">
        <span className="absolute -left-3 -top-3 text-4xl text-primary/40" aria-hidden>“</span>
        <span className="relative">{testimonial.citation}</span>
      </blockquote>
      <figcaption className="relative flex flex-col gap-1">
        <p className="text-heading font-semibold">{testimonial.nom}</p>
        <p className="text-sm text-muted">{testimonial.poste}</p>
      </figcaption>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden />
    </figure>
  );
}
