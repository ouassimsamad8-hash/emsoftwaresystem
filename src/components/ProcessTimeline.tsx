import type { ProcessStep } from '../types/content';

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative grid gap-10 md:grid-cols-2">
      <span className="pointer-events-none absolute left-4 top-6 hidden h-[calc(100%-3rem)] w-px bg-gradient-to-b from-primary/40 via-border/60 to-transparent md:block" aria-hidden />
      {steps.map((step, index) => (
        <li
          key={step.id}
          className="group relative flex flex-col gap-4 overflow-hidden rounded-3xl border border-border/70 bg-surface/70 p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_80px_rgba(8,15,40,0.5)]"
        >
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden>
            <div className="absolute -top-12 right-0 h-32 w-32 rounded-full bg-primary/20 blur-3xl" />
          </div>
          <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-wide text-primary">
            <span className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-base text-primary">
              {String(index + 1).padStart(2, '0')}
            </span>
            <span>Étape {index + 1}</span>
          </div>
          <h3 className="text-2xl font-semibold text-heading">{step.titre}</h3>
          <p className="text-muted">{step.description}</p>
          <span className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" aria-hidden />
        </li>
      ))}
    </ol>
  );
}
