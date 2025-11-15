import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function Projets() {
  usePageMetadata({
    titre: 'E&M Software System | Projets',
    description:
      'Découvrez une sélection de projets pilotés par E&M Software System : plateformes SaaS, fintech, santé et plus encore.'
  });

  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        titre="Nos réalisations"
        sousTitre="Quelques exemples de projets que nous avons menés avec nos clients."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      <section className="rounded-3xl border border-border bg-surface/70 p-10">
        <h3 className="text-2xl font-semibold text-heading">Une collaboration basée sur la confiance</h3>
        <p className="mt-4 text-muted">
          Nous intervenons sur des missions à fort enjeu business : optimisation de parcours clients, refonte de plateformes métiers,
          modernisation d’infrastructures et lancement de nouveaux services digitaux.
        </p>
        <p className="mt-4 text-muted">
          Chaque projet est piloté avec des indicateurs clés partagés, des rituels de synchronisation hebdomadaires et un reporting
          transparent. Nous capitalisons sur vos retours utilisateurs pour ajuster la roadmap en continu.
        </p>
      </section>
    </div>
  );
}
