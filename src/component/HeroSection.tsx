import React, { useRef, useEffect } from 'react';
import test from '../ressources/illustrations/Calque_1.png';
import test2 from '../ressources/illustrations/layout_heroSection.svg';

const HeroSection: React.FC = () => {
  const mainNavRef = useRef<HTMLElement | null>(null);
  const heroSectionRef = useRef<HTMLElement | null>(null);
  const bottombarNavRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    mainNavRef.current = document.querySelector('#mainNavbar');
    heroSectionRef.current = document.querySelector('#heroSection');
    bottombarNavRef.current = document.querySelector('#bottombarNav');

    const updateHeroHeight = () => {
      const isMobile = window.innerWidth <= 768;

      if (heroSectionRef.current) {
        if (isMobile && bottombarNavRef.current) {
          // Mobile : calcule la hauteur en fonction du bottombar
          heroSectionRef.current.style.height = `calc(100vh - ${bottombarNavRef.current.offsetHeight}px)`;
        } else if (mainNavRef.current) {
          // Desktop : calcule la hauteur en fonction du mainNavbar
          heroSectionRef.current.style.height = `calc(100vh - ${mainNavRef.current.offsetHeight}px)`;
        }
      }
    };

    // Calcul initial de la hauteur
    updateHeroHeight();

    // Réécoute le redimensionnement de la fenêtre
    window.addEventListener('resize', updateHeroHeight);
    // Écoute le changement d'orientation pour les appareils mobiles
    window.addEventListener('orientationchange', updateHeroHeight);

    return () => {
      window.removeEventListener('resize', updateHeroHeight);
      window.removeEventListener('orientationchange', updateHeroHeight);
    };
  }, []);

  return (
    <section id='heroSection' className='w-full h-full'>
      <div className='w-full h-full relative'>
        <div className='absolute z-20 w-full h-full flex flex-col justify-center items-center text-white font-bold font-inter text-4xl'>
          <span>LIVE EVENT</span>
          <span>AIX-LES-BAINS</span>
          <span>DU 07 AU 09 JUIN</span>
        </div>
        <video src='/2022395-hd_1920_1080_30fps.mp4' autoPlay loop muted className='absolute w-full h-full object-cover -z-10'>
        </video>
        <div className='absolute inset-0 bg-black opacity-50 ' />
        <div className='w-full h-full relative'>
          <img src={test} alt='' className='absolute bottom-0 z-10'/>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
