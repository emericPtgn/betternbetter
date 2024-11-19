import { Concert } from "./Concert";
import { Artiste } from "./Artiste";

// Utilisation de types d'actions discriminés pour une meilleure sécurité de type
export type AppActions =
  | { type: 'FetchActivitiesDatas'; payload: Concert[] }
  | { type: 'FetchArtistesNames'; payload: string[] }
  | { type: 'FetchArtistes'; payload: Artiste[] };
 