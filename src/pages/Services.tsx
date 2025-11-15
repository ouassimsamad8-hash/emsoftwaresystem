import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { services } from '../data/services';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function Services() {
  usePageMetadata({
    titre: 'E&M Software System | Services',
    description: 'Stratégie produit, design, développement et modernisation : découvrez les services E&M Software System.'
  });

  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        titre="Nos services"
        sousTitre="Des offres modulaires qui couvrent tout le cycle de vie de vos produits numériques."
        align="center"
      />
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="rounded-3xl border border-border bg-surface/80 p-10 shadow-soft">
          <h3 className="text-2xl font-semibold text-heading">Un accompagnement de bout en bout</h3>
          <p className="mt-4 text-muted">
            Nous construisons une équipe dédiée qui s’intègre à votre organisation. Nos experts partagent vos outils, vos rituels
            et votre culture pour créer une dynamique commune.
          </p>
          <ul className="mt-6 space-y-3 text-body">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>Product discovery, cadrage et priorisation</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>Design d’expérience et tests utilisateurs continus</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>Développement, QA automatisée et DevOps</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>Support, formation et transfert de compétences</span>
            </li>
          </ul>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 p-10 text-body">
          <h3 className="text-2xl font-semibold text-heading">Engagements de service</h3>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-sm uppercase tracking-wide text-secondary">Gouvernance</dt>
              <dd className="text-heading">Comité stratégique mensuel et reporting hebdomadaire</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-secondary">Qualité</dt>
              <dd className="text-heading">Revue de code systématique, pipeline CI/CD industrialisé</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-secondary">Expérience</dt>
              <dd className="text-heading">Indicateurs NPS et CSAT suivis à chaque release</dd>
            </div>
            <div>
              <dt className="text-sm uppercase tracking-wide text-secondary">Sécurité</dt>
              <dd className="text-heading">Approche SecOps intégrée et audits réguliers</dd>
            </div>
          </dl>
        </div>
      </section>
    </div>
  );
}
