import { Concert } from "./Concert";
import { Filtre } from "./Filtre";
import { Marker } from "./Marker";
import { Artiste } from "./Artiste";

export interface AppContexte {
    programmation: Concert[];
    filtres: Filtre[];
    donneesChargees: boolean;
    markers: Marker[];
    artistes: Artiste[];
  }
  