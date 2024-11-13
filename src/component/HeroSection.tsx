import React from 'react';
import traitBleu from '../ressources/illustrations/trait_bleu.svg'
import etoileRouge from '../ressources/illustrations/etoile_rouge.svg'
import downBorder from '../ressources/illustrations/down_border2.svg'
import marmotte from '../ressources/illustrations/marmotte v2.svg'
import { ChevronDownIcon } from '@heroicons/react/24/solid';
const HeroSection: React.FC = () => {
  

  return (
    <section id='heroSection' className='w-full h-[100vh]'>
      <div className='w-full h-full relative'>
        <div className='absolute z-20 w-full h-full flex flex-col items-center justify-start top-40 gap-5 text-center text-white font-bold font-inter '>
          <div className='w-fit h-fit items-center flex gap-3 '>
            <img className='w-8 h-auto' src={traitBleu} alt='' />
            <span className='text-xl'>Music festival</span>
            <img className='w-8 h-auto' src={traitBleu} alt='' />
          </div>
          <div className='flex flex-col text-6xl'>
            <span>LIVE EVENT</span>
            <span>AIX LES BAINS</span>
            <span>DU 7 AU 9 JUIN</span>
          </div>
          <div className='w-fit h-fit items-center flex gap-3 '>
            <img className='w-8 h-auto' src={etoileRouge} alt='' />
            <span className='text-xl'>SPACE EDITION</span>
            <img className='w-8 h-auto' src={etoileRouge} alt='' />
          </div>
        </div>
        <video src='/videoBG2.mp4' loop  autoPlay playsInline className='absolute w-full h-full object-cover -z-10'>
        </video>
        <div className='absolute inset-0 bg-black opacity-50 ' />
        <div className='absolute bottom-0 w-full sm:h-fit h-fit  '>
          <img src={downBorder} alt='' className='object-cover w-full h-full'/>
          <img className='absolute z-30 -bottom-10 left-[40%] size-96' src={marmotte} alt='' />
        </div>
        {/* <div className='absolute bottom-0 w-full h-28 flex justify-center'>
          <ChevronDownIcon className='animate-bounce size-16 text-white' />
        </div> */}
      </div>

    </section>
  );
};

export default HeroSection;
