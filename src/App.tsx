import React from 'react';
import './App.css';
import { DataLoader } from './ressources/data/FetchDataFromApi';
import Root from './routes/Root';

function App() {
  DataLoader();
  return (
    <>
    <Root />
    </>
  );
}

export default App;
