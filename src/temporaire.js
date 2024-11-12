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