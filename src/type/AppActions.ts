import { Concert } from "./Concert";

// Utilisation de types d'actions discriminés pour une meilleure sécurité de type
export type AppActions =
  | { type: 'FetchActivitiesDatas'; payload: Concert[] }
  | { type: 'FetchArtistesNames'; payload: string[] };
