import legoData from './lego.json';

export interface LEGO {
  id: number;
  name: string;
  description: string;
  link: string;
  category: string;
  author: string;
  date_added: string;
  utilisation: string;
}

// Lire les données depuis le fichier JSON et les trier par ID décroissant (dernier ajouté en premier)
export const LEGOsData: LEGO[] = (legoData as LEGO[]).sort((a, b) => b.id - a.id);
