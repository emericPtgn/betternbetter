import React from 'react';
import BottomNavbar from './component/BottomNavbar';
import './App.css';
import Navbar from './component/Navbar';
import HeroSection from './component/HeroSection';

function App() {
  return (
    <div className='font-montserrat'>
      <Navbar />
      <BottomNavbar />
      <HeroSection />
    </div>
  );
}

export default App;
