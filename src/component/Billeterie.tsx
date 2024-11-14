import React from 'react'
import traitBleu from '../ressources/illustrations/trait_bleu.svg'
import planete1 from '../ressources/illustrations/planete_anneau.svg'
import planete2 from '../ressources/illustrations/planete_crateres.svg'
import fusee from '../ressources/illustrations/fusée.svg'
import Button from './ui/Button'

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
          
          <div className='flex flex-col lg:flex-row justify-center items-center lg:justify-center gap-4'>
            
            <div className='flex flex-col w-[360px] h-fit border-l-8 border-t-8 border-b-[16px] border-r-[16px] border-black rounded-2xl bg-blue-300 cursor-pointer'>
              <div className='flex flex-col h-full gap-y-6 py-6'>
                <div className='flex-grow flex justify-center'>
                  <img src={planete1} alt='' />
                </div>
                <div className='flex-grow flex flex-col items-center'>
                  <span className='font-bold lg:text-3xl text-2xl text-white-100 font-inter'>PASS</span>
                  <span className='font-bold lg:text-3xl text-2xl text-white font-inter'>ADVENTURE</span>
                  <span className='font-bold lg:text-5xl text-3xl font-inter'>79€</span>
                </div>
                <div className='flex-grow grid grid-cols-1 grid-rows-4 px-8 font-regular text-sm'>
                  <div className='flex w-full justify-between items-center py-2'>
                    <span>Accès :</span>
                    <span>Ven 03</span>
                  </div>
                  <div className='flex w-full justify-between border-t-[1px] border-gray-100 py-2 '>
                    <span>Goodies :</span>
                    <span>Bracelet</span>
                  </div>
                  <div className='flex w-full justify-between border-t-[1px]  border-gray-100 py-2'>
                    <span>Dédicaces :</span>
                    <span>Disponible</span>
                  </div>
                </div>
                <div className='h-1/4 flex items-center justify-center'>
                  <span>Ven 03</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col w-[360px] h-fit border-l-8 border-t-8 border-b-[16px] border-r-[16px] border-black rounded-2xl bg-primary-500 shadow-lg scale-105 cursor-pointer'>
              <div className='flex flex-col h-full gap-y-6 py-6'>
                <div className='flex-grow flex justify-center'>
                  <img src={fusee} alt='' />
                </div>
                <div className='flex-grow flex flex-col items-center'>
                  <span className='font-bold lg:text-3xl text-2xl text-white-100 font-inter'>PASS</span>
                  <span className='font-bold lg:text-3xl text-2xl text-white font-inter'>EXPLORER</span>
                  <span className='font-bold lg:text-5xl text-3xl font-inter'>119€</span>
                </div>
                <div className='flex-grow grid grid-cols-1 grid-rows-4 px-8 font-normal text-sm'>
                  <div className='flex w-full justify-between items-center py-2'>
                    <span>Accès :</span>
                    <span>Ven 02 - Sam 04</span>
                  </div>
                  <div className='flex w-full justify-between border-t-[1px] border-gray-100 py-2 '>
                    <span>Goodies :</span>
                    <span>Lunettes de soleil</span>
                  </div>
                  <div className='flex w-full justify-between border-t-[1px]  border-gray-100 py-2'>
                    <span>Dédicaces :</span>
                    <span>Disponible</span>
                  </div>
                </div>
                <div className='h-1/4 flex items-center justify-center'>
                  <span>Ven 03 - Sam 04</span>
                </div>
              </div>
            </div>
            
            <div className='flex flex-col w-[360px] h-fit border-l-8 border-t-8 border-b-[16px] border-r-[16px] border-black rounded-2xl bg-slate-300 cursor-pointer'>
              <div className='flex flex-col h-full gap-y-6 py-6'>
                <div className='flex-grow flex justify-center'>
                  <img src={planete2} alt='' />
                </div>
                <div className='flex-grow flex flex-col items-center'>
                  <span className='font-bold lg:text-3xl text-2xl text-white-100 font-inter'>PASS</span>
                  <span className='font-bold lg:text-3xl text-2xl text-white font-inter'>JOURNEY</span>
                  <span className='font-bold lg:text-5xl text-3xl font-inter'>179€</span>
                </div>
                <div className='flex-grow grid grid-cols-1 grid-rows-4 px-8 font-regular text-sm'>
                  <div className='flex w-full justify-between items-center py-2'>
                    <span>Accès :</span>
                    <span>Complet</span>
                  </div>
                  <div className='flex w-full justify-between border-t-[1px] border-gray-100 py-2 '>
                    <span>Goodies :</span>
                    <span>Lunettes de soleil + Sac</span>
                  </div>
                  <div className='flex w-full justify-between border-t-[1px]  border-gray-100 py-2'>
                    <span>Dédicaces :</span>
                    <span>Disponible</span>
                  </div>
                </div>
                <div className='h-1/4 flex items-center justify-center'>
                  <span>Week-end complet</span>
                </div>
              </div>
            </div>
            
          </div>

          <div className='h-fit text-center font-montserrat font-medium text-base px-10'>
            <p>Rejoins la newsletter pour connaître <span className='font-bold'>(avant les autres)</span> la date d'ouverture de la billeterie...</p>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Billeterie
