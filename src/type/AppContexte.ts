import { Concert } from "./Concert";
import { Filtre } from "./Filtre";
import { Marker } from "./Marker";
import { Artiste } from "./Artiste";
import { ErrorPropTypes } from "./ErrorPropTypes";

export interface AppContexte {
    programmation: Concert[];
    filtres: Filtre[];
    donneesChargees: boolean;
    markers: Marker[];
    artistes: Artiste[];
    error: ErrorPropTypes[]
  }
  