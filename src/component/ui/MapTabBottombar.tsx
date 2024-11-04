import React from 'react'
import { useLocation } from 'react-router-dom';

interface MapTabBottombarProps {
  navigateTo : (url:string) => void,
  url: string
}

const MapTabBottombar: React.FC<MapTabBottombarProps> = ({navigateTo, url}) => {
  const location = useLocation();
  const activTabStyle = location.pathname === url ? 'text-white' : '';
  
  return (
    <div className={`basis-1/5 flex justify-center items-center hover:text-white cursor-pointer ${activTabStyle}`} onClick={()=>navigateTo(url)} >
      <div className='flex flex-col items-center gap-1'>
          <svg className='h-5 w-5'  viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
          </svg>
          <span>Carte</span>
      </div>
    </div>
  )
}

export default MapTabBottombar
