import React from 'react';
import BottomNavbar from './component/BottomNavbar';
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';
import { DataLoader } from './ressources/data/FetchDataFromApi';
import Programmation from './component/Programmation';
import Billeterie from './component/Billeterie';
import Footer from './component/Footer';
import Newsletter from './component/Newsletter';

function App() {
  DataLoader();
  return (
    <div className='font-montserrat'>
      <Navbar />
      <BottomNavbar />
      <HeroSection />
      <Programmation />
      <Billeterie />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
