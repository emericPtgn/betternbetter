import { Concert } from "./Concert"
export interface Marker {
    id: string;
    lattitude : string;
    longitude : string;
    icone : string;
    nom : string;
    description : string;
    type: string;
    programmation : Concert[]
}