import React from 'react'
import traitBleu from '../ressources/illustrations/trait_bleu.svg'
import planete1 from '../ressources/illustrations/planete_anneau.svg'
import planete2 from '../ressources/illustrations/planete_crateres.svg'
import fusee from '../ressources/illustrations/fusée.svg'

const Billeterie = () => {
  return (
    <div className='w-full h-full'>
      <div className='bg-newWhite-100 w-full h-full px-10 py-10'>
        <div className='w-full h-full grid grid-cols-1 md:grid-rows-auto grid-rows-auto bg-white-100 gap-10 rounded-2xl bg-white drop-shadow-2xl py-10'>
          
          <div className='w-full h-full rounded-2xl flex justify-center items-center gap-4'>
            <img className='w-8 h-auto object-contain' src={traitBleu} alt='' />
            <h2 className='text-center lg:text-6xl md:text-4xl text-3xl font-inter font-bold'>BILLETERIE</h2>
            <img className='w-8 h-auto object-contain' src={traitBleu} alt='' />
          </div>
          
          <div className='h-fit text-center font-montserrat font-medium text-xl'>
            <p>Rejoins la newsletter pour recevoir (avant les autres) la date d'ouverture de la billeterie...</p>
          </div>
          
          <div className='flex justify-center lg:items-end md:gap-8 gap-1 flex-wrap'>
            
            <div className='flex flex-col md:w-[362px] w-[296px] h-[360px] border-l-8 border-t-8 border-b-[16px] border-r-[16px] border-black rounded-2xl bg-blue'>
              <div className='flex flex-col h-full gap-y-6 py-6'>
                <div className='flex-grow flex justify-center'>
                  <img src={planete1} alt='' />
                </div>
                <div className='flex-grow flex flex-col items-center'>
                  <span className='font-bold md:text-3xl text-2xl text-white-100 font-inter'>PASS</span>
                  <span className='font-bold md:text-5xl text-3xl text-white font-inter'>ADVENTURE</span>
                </div>
                <div className='h-1/4 flex items-center justify-center'>
                  <span>Ven 03</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col md:w-[380px] w-[310px] h-[380px] border-l-8 border-t-8 border-b-[16px] border-r-[16px] border-black rounded-2xl bg-primary shadow-lg scale-105'>
              <div className='flex flex-col h-full gap-y-6 py-6'>
                <div className='flex-grow flex justify-center'>
                  <img src={fusee} alt='' />
                </div>
                <div className='flex-grow flex flex-col items-center'>
                  <span className='font-bold md:text-3xl text-2xl text-white-100 font-inter'>PASS</span>
                  <span className='font-bold md:text-5xl text-3xl text-white font-inter'>EXPLORER</span>
                </div>
                <div className='h-1/4 flex items-center justify-center'>
                  <span>Ven 03 - Sam 04</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col md:w-[362px] w-[296px] h-[360px] border-l-8 border-t-8 border-b-[16px] border-r-[16px] border-black rounded-2xl bg-slate-300'>
              <div className='flex flex-col h-full gap-y-6 py-6'>
                <div className='flex-grow flex justify-center'>
                  <img src={planete2} alt='' />
                </div>
                <div className='flex-grow flex flex-col items-center'>
                  <span className='font-bold md:text-3xl text-2xl text-white-100 font-inter'>PASS</span>
                  <span className='font-bold md:text-5xl text-3xl text-white font-inter'>JOURNEY</span>
                </div>
                <div className='h-1/4 flex items-center justify-center'>
                  <span>Week-end complet</span>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Billeterie
