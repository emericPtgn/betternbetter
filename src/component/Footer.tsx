import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full h-[300px] bg-black px-20'>
      <div className='w-full h-full flex flex-col divide-y-[0.5px] divide-gray-600'>
        <div className='grow flex items-center justify-between text-gray-200'>
            <span>Partenaires</span>
            <span>Emploi</span>
            <span>Press</span>
        </div>
<<<<<<< HEAD
        <div className='grow flex items-center sm:gap-24 justify-between sm:justify-normal text-gray-500'>
=======
        <div className='grow flex items-center gap-24 text-gray-500'>
>>>>>>> 7392fa1 (add footer)
            <span>Mentions légales</span>
            <span>©️ Copywrite - 2025</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
