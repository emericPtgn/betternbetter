import { Activity } from "./Activity"
import { ReseauSocial } from "./ReseauSocial"

export interface Artiste {
    activities : Activity[],
    description : string,
    id: string,
    nom : string,
    pictPath : string,
    reseauxSociaux : ReseauSocial[],
    styles : string[]
} 