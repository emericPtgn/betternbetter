import React from 'react'
import Button from './ui/Button'
import { ChevronDownIcon, UserCircleIcon, ShoppingCartIcon } from '@heroicons/react/24/solid'

interface Message {
  text: string,
  icon: string
}

const Navbar: React.FC = () => {
  const messages: Message[] = [
    {text: 'hello', icon: '🚨'},
    {text: "bongiorno", icon : '🔔'}, 
    {text: "halo", icon: '🛒'}
  ]
  return (
    <div className='hidden sm:block w-full bg-black text-white font-inter'>
      <div className='bg-white text-black w-full py-2 '>
        <div className='w-full h-auto flex justify-center gap-40 items-center'>
          {messages.map((item, index) => (
              <div className='flex gap-2 items-center' key={index}>
                <span className='font-extralight'>{item.text}</span>
              </div>
          ))}
        </div>
      </div>
      <div className='w-full py-4 px-20'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-8 md:gap-12'>
              <Button title={'Billeterie'} />
              <div className='flex gap-2'>
                <a href='/programme'>Programmation</a>
                <ChevronDownIcon className='size-5 text-white'/>
              </div>
            </div>
            <div className='flex gap-6 items-center'>
              <div className='flex gap-2 items-center'>
                <div className='w-fit h-fit bg-primary rounded-full p-[8px]'>
                  <ShoppingCartIcon className='size-4 text-white rounded' />
                </div>
                <span>Panier</span>
              </div>
              <div className='flex gap-2 items-center'>
                <div className='w-fit h-fit bg-primary rounded-full p-[8px]'>
                  <UserCircleIcon className='size-4 text-white'/>
                </div>
                <span>Compte</span>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Navbar
