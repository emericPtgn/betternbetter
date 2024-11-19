import React from 'react'

const ArtistCard = (artisteName : string, date : string, photo : string) => {
  return (
    <div className='w-full h-full rounded-2xl border-black border-4'>
        <div className='w-full h-full rounded-2xl flex bg-cover bg-center' style={{ backgroundImage: `url(${photo})`}}>
            <div className='flex justify-between'>
                <div className='grow px-3'>
                    <span className='font-montserrat font-bold tracking-tighter text-white border-4 border-black p-2 '>{artisteName}</span>
                </div>
                <div className='grow px-3'>
                    <div className='rounded-full border-white border-4 p-2 bg-blue'>
                        <span className='font-montserrat font-bold text-white'>{date}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default ArtistCard
