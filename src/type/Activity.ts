export interface Activity  {
    artistesIds : string,
    artistesNames : string,
    date : string,
    description : string | null,
    formattedDate : string,
    id : string,
    marker : {
        nom : string
    },
    nom : string,
    type : string
}