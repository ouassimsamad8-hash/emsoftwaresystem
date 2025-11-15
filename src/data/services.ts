import type { Service } from '../types/content';

export const services: Service[] = [
  {
    id: 'conception-produits',
    titre: 'Conception de produits numériques',
    description:
      'Nous accompagnons vos équipes de l’idéation à la mise en production pour créer des expériences utilisateurs fluides et engageantes.',
    avantages: [
      'Ateliers de co-création et discovery',
      'Prototypage rapide et tests utilisateurs',
      'Design system maintenable et évolutif'
    ],
    icone: '🎨'
  },
  {
    id: 'developpement-sur-mesure',
    titre: 'Développement sur mesure',
    description:
      'Des applications web et mobiles performantes construites sur des architectures robustes et sécurisées.',
    avantages: [
      'Stack moderne et cloud-native',
      'Livraisons incrémentales et automatisées',
      'Maintenance proactive et support dédié'
    ],
    icone: '⚙️'
  },
  {
    id: 'modernisation-si',
    titre: 'Modernisation de systèmes',
    description:
      'Nous refondons vos outils métiers et intégrons vos systèmes existants pour accélérer votre transformation numérique.',
    avantages: [
      'Audit technique et roadmap de modernisation',
      'Migration progressive sans rupture',
      'Gouvernance et gestion du changement'
    ],
    icone: '🚀'
  }
];
