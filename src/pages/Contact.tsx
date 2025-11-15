import { FormEvent, useState } from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { Button } from '../components/Button';
import { usePageMetadata } from '../hooks/usePageMetadata';

type FormulaireContact = {
  nom: string;
  email: string;
  societe: string;
  message: string;
};

type ErreursContact = Partial<Record<keyof FormulaireContact, string>>;

const valeurInitiale: FormulaireContact = {
  nom: '',
  email: '',
  societe: '',
  message: ''
};

export function Contact() {
  const [formulaire, setFormulaire] = useState<FormulaireContact>(valeurInitiale);
  const [erreurs, setErreurs] = useState<ErreursContact>({});
  const [soumis, setSoumis] = useState(false);

  usePageMetadata({
    titre: 'E&M Software System | Contact',
    description: 'Contactez E&M Software System pour discuter de votre projet logiciel et obtenir un plan d’action personnalisé.'
  });

  const valider = (donnees: FormulaireContact): ErreursContact => {
    const nouvellesErreurs: ErreursContact = {};

    if (!donnees.nom.trim()) {
      nouvellesErreurs.nom = 'Merci d’indiquer votre nom et prénom.';
    }

    if (!donnees.email.trim()) {
      nouvellesErreurs.email = 'Nous avons besoin de votre email professionnel.';
    } else if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(donnees.email)) {
      nouvellesErreurs.email = 'L’adresse email ne semble pas valide.';
    }

    if (!donnees.societe.trim()) {
      nouvellesErreurs.societe = 'Indiquez le nom de votre société ou organisation.';
    }

    if (donnees.message.trim().length < 20) {
      nouvellesErreurs.message = 'Présentez votre projet en quelques phrases (20 caractères minimum).';
    }

    return nouvellesErreurs;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const resultatValidation = valider(formulaire);
    setErreurs(resultatValidation);

    if (Object.keys(resultatValidation).length === 0) {
      setSoumis(true);
      setFormulaire(valeurInitiale);
    }
  };

  return (
    <div className="flex flex-col gap-16">
      <SectionHeader
        titre="Contactez-nous"
        sousTitre="Décrivez-nous vos enjeux, nous vous recontactons sous 24 h ouvrées pour organiser un premier échange."
        align="center"
      />
      <div className="grid gap-10 rounded-3xl border border-border bg-surface/80 p-10 md:grid-cols-2">
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-heading">Parlons de votre projet</h3>
          <p className="text-muted">
            Que vous souhaitiez lancer un nouveau produit, moderniser un outil métier ou renforcer votre équipe, nos experts sont prêts
            à vous accompagner.
          </p>
          <ul className="space-y-3 text-body">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>Réponse personnalisée sous 24 heures ouvrées</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>Signature d’un accord de confidentialité si nécessaire</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-primary" aria-hidden />
              <span>Atelier de cadrage offert pour les projets stratégiques</span>
            </li>
          </ul>
          <div className="rounded-3xl bg-surface/60 p-6">
            <p className="text-sm uppercase tracking-wide text-secondary">Nous joindre directement</p>
            <p className="mt-3 text-heading">contact@emsoftwaresystem.com</p>
            <p className="text-muted">+33 1 86 95 32 10</p>
          </div>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
          <div>
            <label htmlFor="nom" className="text-sm font-medium text-heading">
              Nom complet
            </label>
            <input
              id="nom"
              name="nom"
              type="text"
              value={formulaire.nom}
              onChange={(event) => setFormulaire({ ...formulaire, nom: event.target.value })}
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              required
              aria-invalid={Boolean(erreurs.nom)}
              aria-describedby={erreurs.nom ? 'erreur-nom' : undefined}
            />
            {erreurs.nom ? (
              <p id="erreur-nom" className="mt-1 text-sm text-secondary">
                {erreurs.nom}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-medium text-heading">
              Email professionnel
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formulaire.email}
              onChange={(event) => setFormulaire({ ...formulaire, email: event.target.value })}
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              required
              aria-invalid={Boolean(erreurs.email)}
              aria-describedby={erreurs.email ? 'erreur-email' : undefined}
            />
            {erreurs.email ? (
              <p id="erreur-email" className="mt-1 text-sm text-secondary">
                {erreurs.email}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="societe" className="text-sm font-medium text-heading">
              Société
            </label>
            <input
              id="societe"
              name="societe"
              type="text"
              value={formulaire.societe}
              onChange={(event) => setFormulaire({ ...formulaire, societe: event.target.value })}
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              required
              aria-invalid={Boolean(erreurs.societe)}
              aria-describedby={erreurs.societe ? 'erreur-societe' : undefined}
            />
            {erreurs.societe ? (
              <p id="erreur-societe" className="mt-1 text-sm text-secondary">
                {erreurs.societe}
              </p>
            ) : null}
          </div>
          <div>
            <label htmlFor="message" className="text-sm font-medium text-heading">
              Votre message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={formulaire.message}
              onChange={(event) => setFormulaire({ ...formulaire, message: event.target.value })}
              className="mt-2 w-full rounded-2xl border border-border bg-background px-4 py-3 text-body focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/40"
              required
              aria-invalid={Boolean(erreurs.message)}
              aria-describedby={erreurs.message ? 'erreur-message' : undefined}
            />
            {erreurs.message ? (
              <p id="erreur-message" className="mt-1 text-sm text-secondary">
                {erreurs.message}
              </p>
            ) : null}
          </div>
          <Button variant="primary" className="w-full">
            Envoyer ma demande
          </Button>
          {soumis ? (
            <p className="text-sm text-accent">
              Merci ! Votre message a bien été transmis. Nous revenons vers vous très vite.
            </p>
          ) : null}
        </form>
      </div>
    </div>
  );
}
