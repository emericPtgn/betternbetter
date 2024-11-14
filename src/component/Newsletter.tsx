import React from 'react'
import photo1 from '../ressources/illustrations/festival_360x400.jpg'

const Newsletter = () => {
  return (
    <section className='flex justify-center w-full h-full py-10'>
      <div className='flex w-4/5 md:w-3/4 h-fit border-4 border-red-600s p-2 gap-2 rounded-md'>

        {/* Partie gauche : image (40 % de la largeur du conteneur) */}
        <div className='w-2/5 md:flex items-center justify-center hidden '>
          <img 
            src={photo1} 
            alt='' 
            className='w-full h-full object-cover rounded-md'
            loading="lazy"
          />
        </div>

        {/* Partie droite : texte et formulaire (60 % de la largeur du conteneur) */}
        <div className='flex flex-col w-3/5 bg-newWhite-100 p-4 rounded-md'>
          <div className='h-1/3'>
            <p className="text-2xl font-bold mb-3">TITLE</p>
            <p className="text-base mb-4 leading-8 font-montserrat">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi dolor sed commodi ad itaque. Libero ducimus repellat laboriosam error obcaecati odio sunt dolores perspiciatis ab cumque recusandae, nesciunt, nemo consequatur.</p>
          </div>
          <form id='newsletter' method='post' className="space-y-4 flex flex-col justify-between grow">
            <input name='prenom' type='text' placeholder='Prénom' required className="w-full p-2 rounded" />
            <input name='prenom' type='text' placeholder='Nom' required className="w-full p-2 rounded" />
            <input name='email' type='email' placeholder='Email' required className="w-full p-2 rounded" />
            <p className='text-xs font-montserrat'>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            <div className="flex align-top start-0 ">
              <input type='checkbox' required className="mr-2" />
              <span className='text-xs font-montserrat'>RGPD : Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ab ullam exercitationem neque adipisci reprehenderit rem, libero asperiores officia commodi accusamus</span>
            </div>
            <input type='submit' value='Subscribe' className="w-full p-2 rounded bg-primary-500 text-white cursor-pointer" />
          </form>
        </div>

      </div>
    </section>
  )
}

export default Newsletter
