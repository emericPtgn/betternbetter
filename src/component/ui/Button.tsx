import React from 'react'

interface ButtonProps {
  title : string
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <div>
      <a href='/billets' className='bg-primary py-2 px-4 rounded-full'>{title}</a>
    </div>
  )
}

export default Button
