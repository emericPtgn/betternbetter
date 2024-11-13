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
        <div className='grow flex items-center gap-24 text-gray-500'>
            <span>Mentions légales</span>
            <span>©️ Copywrite - 2025</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
