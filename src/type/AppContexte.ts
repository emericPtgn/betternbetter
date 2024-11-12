import { Concert } from "./Concert";
import { Filtre } from "./Filtre";
import { Marker } from "./Marker";

export interface AppContexte {
    programmation: Concert[];
    filtres: Filtre[];
    donneesChargees: boolean;
    markers: Marker[];
    artistes: string[];
  }
  