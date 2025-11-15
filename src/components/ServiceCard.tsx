import type { Service } from '../types/content';

type ServiceCardProps = {
  service: Service;
};

export function ServiceCard({ service }: ServiceCardProps) {
  return (
    <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-border/80 bg-surface/80 p-8 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_32px_90px_rgba(8,15,40,0.6)]">
      <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
        <div className="absolute -top-24 right-0 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
        <div className="absolute -bottom-10 left-0 h-32 w-32 rounded-full bg-accent/20 blur-3xl" />
      </div>
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 text-3xl text-primary backdrop-blur-sm transition-transform duration-500 group-hover:animate-float" aria-hidden>
        {service.icone}
      </div>
      <div className="relative">
        <h3 className="text-2xl font-semibold text-heading">{service.titre}</h3>
        <p className="mt-3 text-muted">{service.description}</p>
      </div>
      <ul className="relative mt-4 space-y-3 text-sm text-body">
        {service.avantages.map((avantage) => (
          <li key={avantage} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
            <span>{avantage}</span>
          </li>
        ))}
      </ul>
      <span className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
    </article>
  );
}
