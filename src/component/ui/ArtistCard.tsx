import React from 'react'
import { ArtistCardProps } from '../../type/ArtistCardProps'

const ArtistCard : React.FC<ArtistCardProps> = ({artistName, dateConcert, pictPath}) => {
    const styleColor = dateConcert.split('T')[0].split('-')[2] === '30' ? 'blue-500' : 'orange-500';
  return (
    <div className='mx-auto md:w-[400px] md:h-[400px] rounded-3xl bg-blue-500 border-black border-t-[8px] border-l-[8px] border-r-[16px] border-b-[16px]' style={{backgroundImage: `url(https://127.0.0.1:8000${pictPath})`, backgroundPosition: 'center', backgroundSize: 'cover'}}>
        <div className={`md:w-full md:h-full rounded-xl bg-cover bg-center border-${styleColor} border-4`} >
            <div className='flex items-center pt-4'>
                <div className='flex-1 px-3'>
                    <div className='flex justify-center'>
                        <span className='font-inter font-extrabold text-xl text-white p-2 ' >{artistName}</span>
                    </div>
                </div>
                <div className='flex-1 px-3 flex justify-center'>
                    <div className={`flex w-fit px-3 justify-center rounded-full border-white border-2 bg-${styleColor}`}>
                        <span className='font-montserrat text-xs font-bold text-white border-black py-2 px-1'>{dateConcert.split('T')[0]}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ArtistCard
