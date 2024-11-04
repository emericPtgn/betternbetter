import React from 'react'
import { useLocation } from 'react-router-dom'

interface ArtistTabBottombarProps {
  navigateTo : (url:string) => void,
  url: string
}

const ArtistTabBottombar: React.FC<ArtistTabBottombarProps> = ({ navigateTo, url }) => {
  const location = useLocation();
  // console.log(location.pathname)
  // const endpoint = location.pathname.split('/')[1]
  const activTabStyle = location.pathname === url ? 'text-white' : ''
  return (
    <div className={`basis-1/5 flex justify-center items-center cursor-pointer ${activTabStyle}`} onClick={() => navigateTo(url)}>
      <div  className='flex flex-col items-center gap-1 hover:text-white'>
          <svg className='fill-current w-5 h-5' version="1.0" viewBox="0 0 64 64">
              <path d="M30.3 2.2c-.6.7-2.7 4.9-4.8 9.4l-3.6 8.1-8.7 1.2C1.4 22.6 0 23 0 24.5c0 .7 3.4 4.4 7.5 8.2l7.4 6.9-1.6 9.6c-.9 5.3-1.3 10.4-1 11.2.6 1.5 1.1 1.5 4.6-.4 5-2.5 4.9-2.5 5.3.3.3 2.1.7 2.2 9.8 2.2 9.1 0 9.5-.1 9.8-2.2.4-2.8.3-2.8 5.3-.3 3.5 1.9 4 1.9 4.6.4.3-.8-.1-5.9-1-11.2l-1.6-9.6 7.4-6.9c4.1-3.8 7.5-7.5 7.5-8.2 0-1.5-1.4-1.9-13.1-3.6l-8.7-1.2-4.3-9.1c-4.5-9.2-5.8-10.7-7.6-8.4zM36 15.1c1.9 3.9 4.2 7.4 5 7.9.8.4 4.4 1.1 8 1.5 3.6.4 6.9.9 7.3 1.2.5.3-1.9 3.4-5.3 6.8-4.7 5-6 6.9-5.6 8.7 1.3 5.6 2.6 14.2 2.2 14.5-1.1 1.1-5.6-2.3-6.1-4.8-.4-1.5-1.2-3.3-1.9-3.9-1.1-.8-1-1.7.5-4.7 1.1-2.2 1.6-4.7 1.3-6.2-.9-3.8-5.9-8.1-9.4-8.1s-8.5 4.3-9.4 8.1c-.3 1.5.2 4 1.3 6.2 1.5 3 1.6 3.9.5 4.7-.7.6-1.5 2.4-1.9 3.9-.5 2.5-5 5.9-6.1 4.8-.4-.3.9-8.9 2.2-14.5.4-1.8-.9-3.7-5.6-8.7-3.4-3.4-5.8-6.5-5.3-6.8.4-.3 3.7-.8 7.3-1.2 3.6-.4 7.2-1.1 8-1.5.8-.5 3.1-4 5-7.9 1.8-3.9 3.7-7.1 4-7.1.3 0 2.2 3.2 4 7.1zm.4 19.1c2 2.9 2 4.7-.1 7-3 3.4-10.3 1.2-10.3-3.1 0-3.1 3-6.1 6-6.1 1.8 0 3.4.8 4.4 2.2zm.4 15.6c.6.9 1.2 3.5 1.2 5.9V60H26v-4.3c0-4.4 1.3-7.1 4-8 2.1-.7 5.3.2 6.8 2.1z"/>
          </svg>
          <span>Artistes</span>
      </div>
    </div>
  )
}

export default ArtistTabBottombar
