import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Artiste } from '../type/Artiste';

const Test: React.FC = () => {
  // Chargez les données et précisez que `programmation` est un tableau d'artistes
  const programmation = useLoaderData() as Artiste[];
  console.log(programmation)

  // Vérifiez si les données sont présentes et valides
  if (!programmation || !Array.isArray(programmation)) {
    return <p>La programmation est introuvable.</p>;
  }

  return (
    <div>
      {programmation.map((item, index) => (
        <div key={index}>
          <h2>{item.nom}</h2>
          {item.pictPath && (
            <img width={400} height={400} src={`https://127.0.0.1:8000${item.pictPath}`} alt={`Portrait de ${item.nom}`} />
          )}
        </div>
      ))}
    </div>
  );
};

export default Test;
