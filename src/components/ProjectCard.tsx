import type { Project } from '../types/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group relative flex h-full flex-col gap-6 overflow-hidden rounded-3xl border border-border/70 bg-surface/80 p-10 shadow-card transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_32px_90px_rgba(8,15,40,0.6)]">
      <div className="pointer-events-none absolute inset-0 bg-card-glow opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
      <div className="relative flex items-center justify-between text-sm uppercase tracking-wide text-secondary/80">
        <span>{project.secteur}</span>
        <span className="rounded-full border border-secondary/40 px-3 py-1 text-xs text-secondary/80">Étude de cas</span>
      </div>
      <div className="relative">
        <h3 className="text-2xl font-semibold text-heading">{project.titre}</h3>
        <p className="mt-4 text-muted">{project.description}</p>
      </div>
      <ul className="relative space-y-3 text-sm text-body">
        {project.resultats.map((resultat) => (
          <li key={resultat} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span>{resultat}</span>
          </li>
        ))}
      </ul>
      <span className="sr-only">{project.imageAlt}</span>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" aria-hidden />
    </article>
  );
}
