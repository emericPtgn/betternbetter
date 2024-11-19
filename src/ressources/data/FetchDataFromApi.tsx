import React, { useEffect } from 'react'
import { AppActions } from '../../type/AppActions';
import { useAppContext } from '../../ContexteApp';
import { Concert } from '../../type/Concert';
import { Artiste } from '../../type/Artiste';


async function fetchActivitiesDatas(dispatch: React.Dispatch<AppActions>) {
  const url = 'https://api.testdwm.fr/public/api/activity';
  const url2 = 'https://127.0.0.1:8000/public/api/artiste';
  try {
    const response = await fetch(url);
    const response2 = await fetch(url2);
    const result: Concert[] = await response.json();
    const result2: Artiste[] = await response2.json();
    console.log(result2)

    console.log('FETCH DATA', result);
    console.log('FETCH ARTISTE', result2);

    // Dispatch pour FetchActivitiesDatas avec le tableau complet
    dispatch({ type: 'FetchActivitiesDatas', payload: result });

    // Extraire uniquement les noms des artistes pour FetchArtistesNames
    // const artistNames = result2.map((artist) => artist.nom);

    // dispatch({ type: 'FetchArtistesNames', payload: artistNames });
    dispatch({ type: 'FetchArtistes', payload: result2 });
  } catch (error) {
    console.log(error);
  }
}





function DataLoader(){
  const { dispatch } = useAppContext()

  useEffect(() => {
    fetchActivitiesDatas(dispatch)
  }, [dispatch]);

  return null;
}

export {DataLoader};