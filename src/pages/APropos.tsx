import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
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
      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <SectionHeader
            titre="Une équipe pluridisciplinaire dédiée à votre réussite"
            sousTitre="Depuis plus de 8 ans, nous accompagnons start-up, ETI et grands comptes dans leurs transformations numériques les plus ambitieuses."
          />
          <p className="text-muted">
            Nous réunissons des talents complémentaires capables de piloter vos projets de bout en bout : product strategists, designers, développeurs et experts cloud travaillent avec vos équipes pour construire un avantage compétitif durable.
          </p>
          <Button to="/contact">
            Rencontrons-nous
          </Button>
        </div>
        <div className="grid gap-6 rounded-3xl border border-border bg-surface/70 p-10 shadow-soft">
          <div className="grid grid-cols-2 gap-6 text-center">
            <div>
              <p className="text-4xl font-semibold text-heading">92 %</p>
              <p className="text-sm text-muted">des projets livrés avant la date cible</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-heading">3</p>
              <p className="text-sm text-muted">centres d’excellence en Europe</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-heading">4.9/5</p>
              <p className="text-sm text-muted">note moyenne de satisfaction client</p>
            </div>
            <div>
              <p className="text-4xl font-semibold text-heading">+25</p>
              <p className="text-sm text-muted">experts certifiés cloud et sécurité</p>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <SectionHeader
          titre="Nos valeurs"
          sousTitre="Elles guident nos décisions, nos recrutements et nos collaborations au quotidien."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {valeurs.map((valeur) => (
            <div key={valeur.titre} className="rounded-3xl border border-border bg-surface/80 p-8">
              <h3 className="text-xl font-semibold text-heading">{valeur.titre}</h3>
              <p className="mt-3 text-muted">{valeur.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12">
        <SectionHeader
          titre="Domaines d’expertise"
          sousTitre="Nous mettons en œuvre les meilleures pratiques pour délivrer des expériences performantes et évolutives."
        />
        <div className="grid gap-4 md:grid-cols-2">
          {expertises.map((expertise) => (
            <div key={expertise} className="flex items-start gap-3 rounded-3xl bg-surface/60 p-6">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span className="text-body">{expertise}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
