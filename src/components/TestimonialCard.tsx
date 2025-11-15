import type { Testimonial } from '../types/content';

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <figure className="flex h-full flex-col gap-6 rounded-3xl border border-border bg-surface/60 p-8 backdrop-blur">
      <blockquote className="text-lg text-body">“{testimonial.citation}”</blockquote>
      <figcaption>
        <p className="text-heading font-semibold">{testimonial.nom}</p>
        <p className="text-sm text-muted">{testimonial.poste}</p>
      </figcaption>
    </figure>
  );
}
