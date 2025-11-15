import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { AnimatedSection } from '../components/AnimatedSection';
import { usePageMetadata } from '../hooks/usePageMetadata';

const valeurs = [
  {
    titre: 'Excellence technique',
    description:
      'Nous investissons continuellement dans la veille, la formation et la qualité de nos pratiques pour livrer des solutions fiables et performantes.'
  },
  {
    titre: 'Transparence et confiance',
    description:
      'Nos clients bénéficient d’une visibilité totale sur l’avancement, les décisions structurantes et les indicateurs clés.'
  },
  {
    titre: 'Impact mesurable',
    description:
      'Chaque intervention est guidée par les objectifs business de nos partenaires et évaluée sur la valeur délivrée.'
  }
];

const expertises = [
  'Product management et stratégie digitale',
  'UX/UI design et design system',
  'Architecture cloud et microservices',
  'Développement web et mobile TypeScript/React/Node.js',
  'Data engineering et analytics temps réel',
  'DevOps, sécurité applicative et FinOps'
];

export function APropos() {
  usePageMetadata({
    titre: 'E&M Software System | À propos',
    description: 'Découvrez l’équipe E&M Software System, ses valeurs et son expertise pour accélérer vos produits numériques.'
  });

  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <AnimatedSection className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <SectionHeader
            titre="Une équipe pluridisciplinaire dédiée à votre réussite"
            sousTitre="Depuis plus de 8 ans, nous accompagnons start-up, ETI et grands comptes dans leurs transformations numériques les plus ambitieuses."
            accent="À propos"
          />
          <p className="text-muted">
            Nous réunissons des talents complémentaires capables de piloter vos projets de bout en bout : product strategists, designers, développeurs et experts cloud travaillent avec vos équipes pour construire un avantage compétitif durable.
          </p>
          <Button to="/contact">
            Rencontrons-nous
          </Button>
        </div>
        <AnimatedSection delay={100} className="grid gap-6 rounded-[3rem] border border-white/5 bg-background/60 p-10 shadow-[0_32px_110px_rgba(8,15,40,0.55)]">
          <div className="grid grid-cols-2 gap-6 text-center">
            {[{ valeur: '92 %', label: 'des projets livrés avant la date cible' }, { valeur: '3', label: 'centres d’excellence en Europe' }, { valeur: '4.9/5', label: 'note moyenne de satisfaction client' }, { valeur: '+25', label: 'experts certifiés cloud et sécurité' }].map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-surface/80 p-6 shadow-inner">
                <p className="text-4xl font-semibold text-heading">{stat.valeur}</p>
                <p className="text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </AnimatedSection>

      <AnimatedSection className="flex flex-col gap-12">
        <SectionHeader
          titre="Nos valeurs"
          sousTitre="Elles guident nos décisions, nos recrutements et nos collaborations au quotidien."
          accent="Culture"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {valeurs.map((valeur, index) => (
            <AnimatedSection key={valeur.titre} delay={index * 80} className="rounded-3xl border border-white/5 bg-surface/80 p-8">
              <h3 className="text-xl font-semibold text-heading">{valeur.titre}</h3>
              <p className="mt-3 text-muted">{valeur.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="flex flex-col gap-12">
        <SectionHeader
          titre="Domaines d’expertise"
          sousTitre="Nous mettons en œuvre les meilleures pratiques pour délivrer des expériences performantes et évolutives."
          accent="Expertise"
        />
        <div className="grid gap-4 md:grid-cols-2">
          {expertises.map((expertise, index) => (
            <AnimatedSection key={expertise} delay={index * 60} className="flex items-start gap-3 rounded-3xl border border-white/5 bg-surface/70 p-6">
              <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
              <span className="text-body">{expertise}</span>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>
    </div>
  );
}
