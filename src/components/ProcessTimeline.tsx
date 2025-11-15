import type { ProcessStep } from '../types/content';

type ProcessTimelineProps = {
  steps: ProcessStep[];
};

export function ProcessTimeline({ steps }: ProcessTimelineProps) {
  return (
    <ol className="relative grid gap-8 md:grid-cols-2">
      {steps.map((step, index) => (
        <li key={step.id} className="flex flex-col gap-4 rounded-3xl bg-surface/80 p-8 shadow-soft">
          <span className="text-sm font-semibold uppercase tracking-wide text-primary">
            Étape {index + 1}
          </span>
          <h3 className="text-2xl font-semibold text-heading">{step.titre}</h3>
          <p className="text-muted">{step.description}</p>
        </li>
      ))}
    </ol>
  );
}
