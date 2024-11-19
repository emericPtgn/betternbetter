import React from 'react'

const programmationLoader = async () => {
    const response = await fetch('https://127.0.0.1:8000/public/api/artiste');
    if(!response.ok) throw new Error ('Failed to load programmation data');
    return response.json();
}

export default programmationLoader
