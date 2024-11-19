import React from 'react'
import { Link } from 'react-router-dom'

interface ButtonProps {
  title : string
}

const Button: React.FC<ButtonProps> = ({title}) => {
  return (
    <div>
      <Link to='/billets' className='bg-primary py-2 px-4 rounded-full text-sm'>{title}</Link>
    </div>
  )
}

export default Button
