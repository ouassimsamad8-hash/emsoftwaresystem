import type { Project } from '../types/content';

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col gap-6 rounded-3xl bg-gradient-to-br from-surface to-background p-10 shadow-card transition-transform duration-200 hover:-translate-y-2">
      <div className="flex flex-col gap-2">
        <span className="text-sm uppercase tracking-wide text-secondary">{project.secteur}</span>
        <h3 className="text-2xl font-semibold text-heading">{project.titre}</h3>
      </div>
      <p className="text-muted">{project.description}</p>
      <ul className="space-y-2 text-sm text-body">
        {project.resultats.map((resultat) => (
          <li key={resultat} className="flex items-start gap-3">
            <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden />
            <span>{resultat}</span>
          </li>
        ))}
      </ul>
      <span className="sr-only">{project.imageAlt}</span>
    </article>
  );
}
