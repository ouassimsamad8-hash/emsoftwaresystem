import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { usePageMetadata } from '../hooks/usePageMetadata';

const billets = [
  {
    titre: '5 leviers pour accélérer la livraison de vos produits numériques',
    resume:
      'Découvrez comment structurer vos roadmaps, aligner vos équipes et industrialiser vos pratiques pour livrer plus vite avec qualité.'
  },
  {
    titre: 'Mettre en place un design system durable',
    resume:
      'Nos conseils pour créer des composants cohérents, documentés et adoptés par vos équipes produit et tech.'
  },
  {
    titre: 'Réussir la modernisation d’une plateforme critique',
    resume:
      'Les étapes clés pour réduire les risques et sécuriser la migration de vos systèmes existants.'
  }
];

export function Blog() {
  usePageMetadata({
    titre: 'E&M Software System | Blog',
    description: 'Nos analyses, bonnes pratiques et retours d’expérience seront bientôt disponibles sur le blog E&M Software System.'
  });

  return (
    <div className="flex flex-col gap-16 md:gap-20">
      <AnimatedSection>
        <SectionHeader
          titre="Blog"
          sousTitre="Bientôt disponible : nos retours d’expérience, analyses technologiques et bonnes pratiques."
          align="center"
          accent="Ressources"
          action={
            <Button to="/contact" variant="secondary">
              Être informé de la publication
            </Button>
          }
        />
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {billets.map((billet, index) => (
          <AnimatedSection key={billet.titre} delay={index * 80} className="rounded-3xl border border-white/5 bg-surface/80 p-8">
            <h3 className="text-xl font-semibold text-heading">{billet.titre}</h3>
            <p className="mt-3 text-muted">{billet.resume}</p>
            <p className="mt-6 text-sm text-secondary">Publication prochaine</p>
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
}
