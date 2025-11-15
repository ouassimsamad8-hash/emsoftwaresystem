import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { services } from '../data/services';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function Services() {
  usePageMetadata({
    titre: 'E&M Software System | Services',
    description: 'Stratégie produit, design, développement et modernisation : découvrez les services E&M Software System.'
  });

  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <AnimatedSection>
        <SectionHeader
          titre="Nos services"
          sousTitre="Des offres modulaires qui couvrent tout le cycle de vie de vos produits numériques."
          align="center"
          accent="Catalogue"
        />
      </AnimatedSection>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service, index) => (
          <AnimatedSection key={service.id} delay={index * 80}>
            <ServiceCard service={service} />
          </AnimatedSection>
        ))}
      </div>
      <AnimatedSection className="grid gap-12 rounded-[3rem] border border-white/5 bg-background/60 p-10 shadow-[0_32px_110px_rgba(8,15,40,0.55)] md:grid-cols-2 md:items-center">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-heading">Un accompagnement de bout en bout</h3>
          <p className="text-muted">
            Nous construisons une équipe dédiée qui s’intègre à votre organisation. Nos experts partagent vos outils, vos rituels et votre culture pour créer une dynamique commune.
          </p>
          <ul className="space-y-3 text-body">
            {[
              'Product discovery, cadrage et priorisation',
              'Design d’expérience et tests utilisateurs continus',
              'Développement, QA automatisée et DevOps',
              'Support, formation et transfert de compétences'
            ].map((element) => (
              <li key={element} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
                <span>{element}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="space-y-6 rounded-3xl border border-white/5 bg-surface/80 p-10">
          <h3 className="text-2xl font-semibold text-heading">Engagements de service</h3>
          <dl className="mt-6 space-y-4">
            <div>
              <dt className="text-xs uppercase tracking-[0.35em] text-secondary/80">Gouvernance</dt>
              <dd className="text-heading">Comité stratégique mensuel et reporting hebdomadaire</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.35em] text-secondary/80">Qualité</dt>
              <dd className="text-heading">Revue de code systématique, pipeline CI/CD industrialisé</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.35em] text-secondary/80">Expérience</dt>
              <dd className="text-heading">Indicateurs NPS et CSAT suivis à chaque release</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.35em] text-secondary/80">Sécurité</dt>
              <dd className="text-heading">Approche SecOps intégrée et audits réguliers</dd>
            </div>
          </dl>
        </div>
      </AnimatedSection>
    </div>
  );
}
