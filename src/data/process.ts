import type { ProcessStep } from '../types/content';

export const processSteps: ProcessStep[] = [
  {
    id: 'explorer',
    titre: 'Explorer et comprendre',
    description:
      'Analyse approfondie de vos enjeux métier, ateliers avec vos équipes et cadrage fonctionnel et technique.'
  },
  {
    id: 'concevoir',
    titre: 'Concevoir et prototyper',
    description:
      'Design d’expérience, prototypage interactif et validation auprès des utilisateurs clés avant développement.'
  },
  {
    id: 'developper',
    titre: 'Développer et itérer',
    description:
      'Sprints courts, qualité de code irréprochable et intégration continue pour un delivery maîtrisé.'
  },
  {
    id: 'scaler',
    titre: 'Accélérer et pérenniser',
    description:
      'Suivi de la performance, optimisation continue et transfert de compétences à vos équipes internes.'
  }
];
