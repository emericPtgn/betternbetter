import React from 'react'
import { useAppContext } from '../ContexteApp'

const Catalogue = () => {
    const { state } = useAppContext();
  return (
    <section className='w-full h-full'>
      <div className="grid grid-cols-4 row-auto gap-2">

      </div>
    </section>
  )
}

export default Catalogue

