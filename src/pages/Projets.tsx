import { SectionHeader } from '../components/SectionHeader';
import { ProjectCard } from '../components/ProjectCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { projects } from '../data/projects';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function Projets() {
  usePageMetadata({
    titre: 'E&M Software System | Projets',
    description:
      'Découvrez une sélection de projets pilotés par E&M Software System : plateformes SaaS, fintech, santé et plus encore.'
  });

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <AnimatedSection>
        <SectionHeader
          titre="Nos réalisations"
          sousTitre="Quelques exemples de projets que nous avons menés avec nos clients."
          align="center"
          accent="Études de cas"
        />
      </AnimatedSection>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <AnimatedSection key={project.id} delay={index * 90}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection className="rounded-[3rem] border border-white/5 bg-background/70 p-10 shadow-[0_32px_110px_rgba(8,15,40,0.55)]">
        <h3 className="text-2xl font-semibold text-heading">Une collaboration basée sur la confiance</h3>
        <p className="mt-4 text-muted">
          Nous intervenons sur des missions à fort enjeu business : optimisation de parcours clients, refonte de plateformes métiers, modernisation d’infrastructures et lancement de nouveaux services digitaux.
        </p>
        <p className="mt-4 text-muted">
          Chaque projet est piloté avec des indicateurs clés partagés, des rituels de synchronisation hebdomadaires et un reporting transparent. Nous capitalisons sur vos retours utilisateurs pour ajuster la roadmap en continu.
        </p>
      </AnimatedSection>
    </div>
  );
}
