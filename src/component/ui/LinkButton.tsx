import React from 'react'
import { Link } from 'react-router-dom'

interface LinkButtonProps {
    title : string,
    link : string
}
const LinkButton: React.FC<LinkButtonProps> = ({title, link}) => {
  return (
    <div>
        <Link to={`/${link}`} className='bg-primary py-2 px-4 rounded-full text-sm'>{title}</Link>
    </div>
  )
}

export default LinkButton