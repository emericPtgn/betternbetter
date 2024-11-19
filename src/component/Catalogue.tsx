import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Artiste } from '../type/Artiste';
import ArtistCard from './ui/ArtistCard';
import sortDate from '../utils/sortDate';

const Catalogue: React.FC = () => {
  const programmation = useLoaderData() as Artiste[];

  if (!programmation || !Array.isArray(programmation)) {
    return <div>Oops, something went wrong</div>;
  }
  
  // Tri chronologique par dateConcert (croissant)
  const sortedProgrammation = sortDate(programmation)

  return (
    <section className='w-full h-full'>
      <div className="grid grid-cols-4 row-auto gap-2">
        {sortedProgrammation.map((item, index) => (
          <ArtistCard
            key={index}
            artistName={item.nom}
            dateConcert={item.activities[0]?.date || 'Date non disponible'}
            pictPath={item.pictPath}
          />
        ))}
      </div>
    </section>
  );
};

export default Catalogue;
