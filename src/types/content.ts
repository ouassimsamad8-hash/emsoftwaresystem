export type Service = {
  id: string;
  titre: string;
  description: string;
  avantages: string[];
  icone: string;
};

export type Project = {
  id: string;
  titre: string;
  secteur: string;
  description: string;
  resultats: string[];
  imageAlt: string;
};

export type Testimonial = {
  id: string;
  nom: string;
  poste: string;
  citation: string;
};

export type ProcessStep = {
  id: string;
  titre: string;
  description: string;
};

export type NavigationLink = {
  path: string;
  label: string;
};
