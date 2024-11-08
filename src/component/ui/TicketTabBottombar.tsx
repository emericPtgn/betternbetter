import React from 'react'
import { useLocation } from 'react-router-dom'

interface TicketTabBottombarProps {
  navigateTo : (url:string) => void,
  url : string
} 

const TicketTabBottombar: React.FC<TicketTabBottombarProps> = ({ navigateTo, url }) => {
  const location = useLocation();
  const activTabStyle = location.pathname === url ? 'text-white' : '';

  return (
    <div className={`basis-1/5 flex justify-center items-center hover:text-white cursor-pointer ${activTabStyle}`} onClick={()=>navigateTo(url)}>
      <div className='flex flex-col items-center gap-1'>
        <svg className='fill-current h-5 w-5' version="1.0" viewBox="0 0 64 64">
          <path d="M.5 1C-.7 3 1.2 4 6 4c5.8 0 5.3-1.3 7 19.5.7 9.3.7 13.1 0 13.3-2.4.8-5 4.7-5 7.4 0 3.1 3.9 7.8 6.4 7.8 1.1 0 1.3.8.9 3.4-.9 5.8 5.3 10.2 11.2 8 2.3-.9 4.8-6.2 4.1-9C30 52 30 52 38.5 52s8.5 0 7.9 2.4c-.6 2.6 1 6.4 3.5 8.3 2.7 2 7 1.5 9.7-1.2 2.1-2.1 2.4-3.2 2.1-7.7l-.3-5.3-23.8-.5c-21.3-.4-24-.7-25-2.2-.8-1.3-.8-2.3 0-3.5 1-1.6 3.7-1.9 25-2.3l23.9-.5.7-5.3c.3-3 .8-9.9 1-15.5l.3-10.2-11.7-.3-11.7-.3-.3-2.7c-.4-3.6-3.2-3.6-3.6 0L35.9 8H15.1l-.3-3.8-.3-3.7L7.8.2C4 0 .9.3.5 1zM36 17.7c0 5.6 0 5.6-2 3.8-1.6-1.4-2.3-1.6-3.2-.7-1 1-.3 2.2 3 5.5l4.2 4.2 4.2-4.2c3.3-3.3 4-4.5 3-5.5-.9-.9-1.6-.7-3.2.7-2 1.8-2 1.8-2-3.8V12h20.1l-.6 9.7C58.5 37.8 61.2 36 38 36c-23 0-20.5 1.6-21.5-13.8L15.8 12H36v5.7zM26 53.5c2.6 3.2-1.3 8.1-4.7 5.9-1-.6-1.9-1.9-2.1-2.8-.8-3.8 4.3-6.1 6.8-3.1zm31 0c2.6 3.2-1.3 8.1-4.7 5.9-2.3-1.4-2.8-4.1-1.3-5.9 1.6-1.9 4.4-1.9 6 0z"/>
        </svg>
        <span>Billets</span>
      </div>
    </div>
  )
}

export default TicketTabBottombar
