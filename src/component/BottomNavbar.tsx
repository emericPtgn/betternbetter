import React from 'react'
import MaintabBottombar from './ui/MaintabBottombar'
import ArtistTabBottombar from './ui/ArtistTabBottombar'
import TicketTabBottombar from './ui/TicketTabBottombar'
import MapTabBottombar from './ui/MapTabBottombar'
import AccountTabBottombar from './ui/AccountTabBottombar'
import useNavigateTo from '../utils/hook/useNavigateTo'

const BottomNavbar = () => {
  const navigateTo = useNavigateTo();
  return (
    <section className='fixed bottom-0 w-full  bg-black py-2 sm:hidden'>
        <div className='relative flex h-full items-center justify-around text-neutral-400 text-[10px] font-inter'>
            <ArtistTabBottombar  navigateTo={navigateTo} url={'/artistes'}/>
            <TicketTabBottombar navigateTo={navigateTo} url={'/billets'} />
            <MaintabBottombar navigateTo={navigateTo} url={'/'}  />
            <MapTabBottombar navigateTo={navigateTo} url={'/carte'} />
            <AccountTabBottombar navigateTo={navigateTo} url={'/compte'}/>
        </div>
    </section>
  )
}

export default BottomNavbar
