import React from 'react'
import homeIcon from '../../ressources/icon/home_24px.png'

interface MaintabBottombarProps {
  navigateTo : (url:string) => void,
  url: string
}

const MaintabBottombar:React.FC<MaintabBottombarProps> = ({navigateTo, url}) => {
  return (
    <div className='basis-1/5 flex justify-center items-center cursor-pointer' onClick={()=>navigateTo(url)}>
      <div className='absolute -top-7'>
        <div className='flex items-center justify-center bg-primary rounded-full w-[64px] h-[64px] border-4 relative'>
          <img src={homeIcon} alt='test' />
        </div>
      </div>
    </div>
  )
}

export default MaintabBottombar
