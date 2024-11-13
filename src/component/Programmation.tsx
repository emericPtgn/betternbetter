import React, { useEffect, useState, useRef } from 'react';
import { useAppContext } from '../ContexteApp';
import Button from './ui/Button';

const Programmation = () => {
  const [visible, setVisible] = useState(false);
  const [visibleDiv, setVisibleDiv] = useState(0);
  const { state } = useAppContext();
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      const interval = setInterval(() => {
        setVisibleDiv((prev) => (prev < 4 ? prev + 1 : prev));
      }, 500);

      return () => clearInterval(interval);
    }
  }, [visible]);

  return (
    <section ref={sectionRef} className='relative h-full w-full bg-black text-white flex flex-col items-center bg-contain bg-[url("/src/ressources/illustrations/stars_bg.jpg")]'>
      {/* Le titre apparaît en premier */}
      <h1 className={`mt-24 lg:text-5xl md:text-4xl text-3xl font-inter font-bold transition-opacity duration-200 ease-in-out ${
          visibleDiv >= 1 ? 'opacity-100' : 'opacity-0'}`}>
        PROGRAMMATION
      </h1>
      <div className='mt-24 flex flex-col gap-9 items-center'>
        {/* La première div d'artistes */}
        <div id='programmation-p1' className={`transition-opacity duration-500 ease-in-out ${
            visibleDiv >= 2 ? 'opacity-100' : 'opacity-0'} md:w-3/4 w-4/5 lg:text-4xl md:text-3xl text-2xl justify-center font-bold flex md:gap-y-6 gap-y-3 flex-wrap`}
>
          {state.artistes.map((item, index) => (
            <span key={index} className={`${index % 2 === 0 ? 'text-white' : 'text-primary'}  px-2`}>
              {item} /
            </span>
          ))}
        </div>

        {/* La deuxième div d'artistes */}
        <div id='programmation-p2' className={`transition-opacity duration-1000 ease-in-out ${
            visibleDiv >= 3 ? 'opacity-100' : 'opacity-0'} md:w-3/4 w-4/5 lg:text-4xl md:text-3xl text-2xl justify-center font-bold flex md:gap-y-6 gap-y-3 flex-wrap`}
>
          {state.artistes.map((item, index) => (
            <span key={index} className={`${index % 2 === 0 ? 'text-white' : 'text-primary'}  px-2`}>
              {item} /
            </span>
          ))}
        </div>
        <div id='programmation-p3' className={`my-16 transition-opacity duration-1500 ease-in-out ${
            visibleDiv >= 4 ? 'opacity-100' : 'opacity-0'}`}>
          <Button title='Découvrir la programmation'/>
        </div>
      </div>

    </section>
  );
};

export default Programmation;
