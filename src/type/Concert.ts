export interface Concert {
    artistes: string[];           // Un tableau de noms d'artistes si plusieurs peuvent être associés
    artistesIds: string;          // L'ID de l'artiste (string)
    artistesNames: string;        // Nom de l'artiste (string)
    date: string;                 // Date du concert (string)
    description: string | null;   // Description, qui peut être null
    formattedDate: string;        // Date formatée (string)
    id: string;                   // ID unique du concert (string)
    marker: {
      id: string;                 // ID du marqueur (string)
      nom: string;                // Nom de la scène ou emplacement (string)
    };
    nom: string;                  // Nom du concert (string)
    type: string;                 // Type de l'événement (par exemple, "Concert")
  }
  