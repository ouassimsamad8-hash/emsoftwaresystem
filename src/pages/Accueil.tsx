import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { SectionHeader } from '../components/SectionHeader';
import { ServiceCard } from '../components/ServiceCard';
import { ProcessTimeline } from '../components/ProcessTimeline';
import { TestimonialCard } from '../components/TestimonialCard';
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
      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <div className="flex flex-col gap-8">
          <p className="inline-flex items-center gap-2 self-start rounded-full border border-primary/40 bg-primary/10 px-4 py-2 text-sm text-primary-light">
            Partenaire technologique des organisations ambitieuses
          </p>
          <h1 className="font-display text-4xl text-heading md:text-5xl">
            Accélérez vos produits numériques avec une équipe experte et engagée
          </h1>
          <p className="text-lg text-muted">
            E&M Software System conçoit, développe et fait évoluer des plateformes logicielles performantes pour transformer vos
            ambitions en résultats concrets.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Button to="/contact">
              Discutons de votre projet
            </Button>
            <Button to="/projets" variant="secondary">
              Découvrir nos réalisations
            </Button>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-muted md:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold text-heading">+40</p>
              <p>projets livrés avec succès</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-heading">+20</p>
              <p>experts multidisciplinaires</p>
            </div>
            <div>
              <p className="text-3xl font-semibold text-heading">98 %</p>
              <p>de clients qui nous recommandent</p>
            </div>
          </div>
        </div>
        <div className="relative flex items-center justify-center">
          <div className="absolute inset-0 -z-10 animate-pulse rounded-full bg-primary/20 blur-3xl" aria-hidden />
          <div className="relative w-full max-w-md rounded-3xl border border-primary/40 bg-surface/80 p-10 text-sm backdrop-blur">
            <p className="text-heading font-semibold">Notre promesse</p>
            <p className="mt-3 text-muted">
              Une approche stratégique, des livrables impeccables et une équipe dédiée à vos indicateurs business.
            </p>
            <ul className="mt-6 space-y-3 text-body">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                <span>Architecture moderne, sécurisée et scalable</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                <span>Vision produit claire et priorisation continue</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-accent" aria-hidden />
                <span>Transparence totale sur l’avancement et la qualité</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-12" id="services">
        <SectionHeader
          titre="Des services pensés pour votre croissance"
          sousTitre="Nous mobilisons la meilleure combinaison de talents pour imaginer, construire et déployer vos solutions numériques."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </section>

      <section className="grid gap-12 md:grid-cols-2 md:items-center">
        <SectionHeader
          titre="Pourquoi nous choisir ?"
          sousTitre="Une vision stratégique, une exécution irréprochable et un accompagnement sur la durée."
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
          ].map((bloc) => (
            <div key={bloc.titre} className="rounded-3xl border border-border bg-surface/70 p-8">
              <h3 className="text-xl font-semibold text-heading">{bloc.titre}</h3>
              <p className="mt-3 text-muted">{bloc.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-12" id="processus">
        <SectionHeader
          titre="Notre processus éprouvé"
          sousTitre="Une méthodologie structurée pour sécuriser chaque phase de vos projets stratégiques."
        />
        <ProcessTimeline steps={processSteps} />
      </section>

      <section className="flex flex-col gap-12" id="temoignages">
        <SectionHeader
          titre="Ils nous font confiance"
          sousTitre="Des dirigeants et dirigeants produits qui recherchent un partenaire fiable et proactif."
        />
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-br from-primary-dark via-primary to-secondary p-12 text-center text-heading shadow-card">
        <h2 className="text-3xl font-bold md:text-4xl">Prêt à écrire la prochaine étape de votre roadmap ?</h2>
        <p className="mt-4 text-lg">
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
      </section>

      <div className="text-center text-sm text-muted">
        <Link to="/mentions-legales" className="hover:text-heading">
          Mentions légales
        </Link>{' '}
        ·{' '}
        <Link to="/politique-confidentialite" className="hover:text-heading">
          Politique de confidentialité
        </Link>
      </div>
    </div>
  );
}
