import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'plateforme-saas-industrie',
    titre: 'Plateforme SaaS pour la performance industrielle',
    secteur: 'Industrie 4.0',
    description:
      'Conception et développement d’une plateforme temps réel permettant de superviser la production et d’anticiper les anomalies.',
    resultats: [
      'Réduction des incidents critiques de 32 %',
      'Gain de 18 % sur le temps de maintenance',
      'Adoption par plus de 400 opérateurs en 6 mois'
    ],
    imageAlt: 'Interface de plateforme industrielle'
  },
  {
    id: 'ecosysteme-fintech',
    titre: 'Écosystème digital pour une fintech',
    secteur: 'Services financiers',
    description:
      'Refonte complète du tunnel d’onboarding et des outils d’administration pour améliorer la conformité et l’expérience client.',
    resultats: [
      'Temps d’inscription divisé par deux',
      'Automatisation de 70 % des contrôles KYC',
      'Satisfaction client portée à 4,8/5'
    ],
    imageAlt: 'Application financière moderne'
  },
  {
    id: 'plateforme-sante',
    titre: 'Plateforme de coordination de soins',
    secteur: 'Santé',
    description:
      'Solution sécurisée reliant praticiens, patients et structures hospitalières autour d’un parcours de soins unifié.',
    resultats: [
      'Interopérabilité HL7 et hébergement HDS',
      'Diminution des délais de prise en charge de 24 %',
      'Portail patient noté 4,6/5 par les utilisateurs'
    ],
    imageAlt: 'Interface de santé connectée'
  }
];
