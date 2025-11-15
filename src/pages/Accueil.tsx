import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TestimonialCard } from '../components/TestimonialCard';
import { AnimatedSection } from '../components/AnimatedSection';
import { services } from '../data/services';
import { processSteps } from '../data/process';
import { testimonials } from '../data/testimonials';
import { usePageMetadata } from '../hooks/usePageMetadata';

export function Accueil() {
  usePageMetadata({
    titre: 'E&M Software System | Accueil',
    description:
      'E&M Software System imagine et développe des solutions logicielles sur mesure pour accélérer vos produits numériques.'
  });

  return (
    <div className="flex flex-col gap-24 md:gap-32">
      <AnimatedSection className="relative grid gap-12 overflow-hidden rounded-[3rem] border border-white/5 bg-background/70 px-8 py-14 shadow-[0_40px_140px_rgba(8,15,40,0.6)] md:grid-cols-[1.1fr_0.9fr] md:px-16">
        <div className="absolute -top-20 right-0 h-48 w-48 rounded-full bg-primary/20 blur-3xl" aria-hidden />
        <div className="absolute -bottom-24 left-10 h-60 w-60 rounded-full bg-accent/20 blur-3xl" aria-hidden />
        <div className="flex flex-col gap-8">
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm text-primary-light shadow-inner">
            Partenaire technologique des organisations ambitieuses
          </p>
          <h1 className="font-display text-4xl leading-tight text-heading md:text-5xl">
            Accélérez vos produits numériques avec une équipe experte et engagée
          </h1>
          <p className="max-w-xl text-lg text-muted">
            E&M Software System conçoit, développe et fait évoluer des plateformes logicielles performantes pour transformer vos ambitions en résultats concrets.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button to="/contact">
              Discutons de votre projet
            </Button>
            <Button to="/projets" variant="secondary">
              Découvrir nos réalisations
            </Button>
          </div>
          <div className="grid gap-5 text-sm text-muted md:grid-cols-3">
            {[{ valeur: '+40', libelle: 'projets livrés avec succès' }, { valeur: '+20', libelle: 'experts multidisciplinaires' }, { valeur: '98 %', libelle: 'de clients qui nous recommandent' }].map((element) => (
              <div key={element.libelle} className="rounded-2xl border border-white/5 bg-surface/80 p-5 shadow-inner">
                <p className="text-3xl font-semibold text-heading">{element.valeur}</p>
                <p>{element.libelle}</p>
              </div>
            ))}
          </div>
        </div>
        <AnimatedSection delay={120} className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 animate-pulse-soft rounded-[2.5rem] bg-card-glow opacity-70" aria-hidden />
          <div className="relative w-full max-w-md rounded-[2.5rem] border border-white/10 bg-surface/80 p-10 text-sm shadow-card backdrop-blur">
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-primary/70">
              <span className="h-px w-8 bg-gradient-to-r from-primary to-accent" aria-hidden />
              <span>Notre promesse</span>
            </div>
            <p className="mt-4 text-heading font-semibold">Créer des produits mémorables, mesurables et évolutifs.</p>
            <p className="mt-3 text-muted">
              Une approche stratégique, des livrables impeccables et une équipe dédiée à vos indicateurs business.
            </p>
            <ul className="mt-6 space-y-3 text-body">
              {[
                'Architecture moderne, sécurisée et scalable',
                'Vision produit claire et priorisation continue',
                'Transparence totale sur l’avancement et la qualité'
              ].map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-gradient-to-r from-primary to-accent" aria-hidden />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-2xl border border-white/5 bg-background/80 p-4 text-xs text-muted">
              <p className="font-semibold text-heading">Engagement qualité</p>
              <p>Revues de code quotidiennes, pipeline CI/CD industrialisé et indicateurs de fiabilité partagés.</p>
            </div>
          </div>
        </AnimatedSection>
      </AnimatedSection>

      <AnimatedSection id="services" className="flex flex-col gap-12">
        <SectionHeader
          titre="Des services pensés pour votre croissance"
          sousTitre="Nous mobilisons la meilleure combinaison de talents pour imaginer, construire et déployer vos solutions numériques."
          accent="Offre E&M"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <AnimatedSection key={service.id} delay={index * 80}>
              <ServiceCard service={service} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="grid gap-12 md:grid-cols-2 md:items-center">
        <SectionHeader
          titre="Pourquoi nous choisir ?"
          sousTitre="Une vision stratégique, une exécution irréprochable et un accompagnement sur la durée."
          accent="Différenciation"
        />
        <div className="grid gap-6">
          {[
            {
              titre: 'Une équipe engagée à vos côtés',
              description:
                'Product managers, designers et ingénieurs travaillent main dans la main pour sécuriser chaque étape de votre projet.'
            },
            {
              titre: 'Une culture de la performance',
              description:
                'Indicateurs partagés, rituels agiles et amélioration continue nous permettent d’aller vite sans compromis sur la qualité.'
            },
            {
              titre: 'Des partenariats durables',
              description:
                'Nous co-construisons une trajectoire de transformation sur plusieurs cycles pour maximiser la valeur délivrée.'
            }
          ].map((bloc, index) => (
            <AnimatedSection key={bloc.titre} delay={index * 100} className="rounded-3xl border border-white/5 bg-surface/80 p-8">
              <h3 className="text-xl font-semibold text-heading">{bloc.titre}</h3>
              <p className="mt-3 text-muted">{bloc.description}</p>
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection id="processus" className="flex flex-col gap-12">
        <SectionHeader
          titre="Notre processus éprouvé"
          sousTitre="Une méthodologie structurée pour sécuriser chaque phase de vos projets stratégiques."
          accent="Méthodologie"
        />
        <ProcessTimeline steps={processSteps} />
      </AnimatedSection>

      <AnimatedSection id="temoignages" className="flex flex-col gap-12">
        <SectionHeader
          titre="Ils nous font confiance"
          sousTitre="Des dirigeants et dirigeants produits qui recherchent un partenaire fiable et proactif."
          accent="Témoignages"
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <AnimatedSection key={testimonial.id} delay={index * 80}>
              <TestimonialCard testimonial={testimonial} />
            </AnimatedSection>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-primary-dark via-primary to-secondary p-12 text-center text-heading shadow-[0_40px_120px_rgba(8,15,40,0.65)]">
        <div className="absolute inset-0 opacity-40 mix-blend-screen" aria-hidden>
          <div className="animate-aurora h-full w-full bg-[radial-gradient(circle_at_20%_20%,rgba(248,250,252,0.4),transparent_55%)]" />
        </div>
        <h2 className="text-3xl font-bold md:text-4xl">Prêt à écrire la prochaine étape de votre roadmap ?</h2>
        <p className="mt-4 text-lg text-heading/90">
          Programmons un échange pour comprendre vos enjeux et bâtir un plan d’action opérationnel.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-4">
          <Button to="/contact" variant="secondary" className="bg-heading text-background hover:bg-heading/90">
            Nous contacter
          </Button>
          <Button to="/services" variant="ghost" className="text-heading">
            Voir nos services
          </Button>
        </div>
        <p className="mt-6 text-sm text-heading/80">
          Réponse garantie sous 24 h ouvrées, engagement de confidentialité systématique.
        </p>
      </AnimatedSection>

      <AnimatedSection className="text-center text-sm text-muted">
        <Link to="/mentions-legales" className="hover:text-heading">
          Mentions légales
        </Link>{' '}
        ·{' '}
        <Link to="/politique-confidentialite" className="hover:text-heading">
          Politique de confidentialité
        </Link>
      </AnimatedSection>
    </div>
  );
}
