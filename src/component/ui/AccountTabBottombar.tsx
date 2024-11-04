import React from 'react'
import { useLocation } from 'react-router-dom';

interface AccountTabBottombarProps {
  navigateTo : (url:string) => void,
  url: string
}

const AccountTabBottombar: React.FC<AccountTabBottombarProps> = ({navigateTo, url}) => {

  const location = useLocation();
  const activTabStyle = location.pathname === url ? 'text-white' : '';
  
  return (
    <div className={`basis-1/5 flex justify-center items-center hover:text-white cursor-pointer ${activTabStyle}`} onClick={()=>navigateTo(url)}>
      <div className='flex flex-col gap-1 items-center'>
          <svg className='h-5 w-5' fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
          </svg>
          <span>Compte</span>
      </div>
    </div>
  )
}

export default AccountTabBottombar
