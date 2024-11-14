import React from 'react'
import photo1 from '../ressources/illustrations/festival_360x400.jpg'

const Newsletter = () => {
  return (
    <section className='flex justify-center w-full h-full py-10'>
      <div className='flex md:w-4/5 w-full h-fit border-4 border-white p-2 px-10 gap-2 rounded-md'>

        {/* Partie gauche : image (40 % de la largeur du conteneur) */}
        <div className='md:w-2/5 w-1/5 md:flex items-center justify-center hidden '>
          <img 
            src={photo1} 
            alt='' 
            className='w-full h-full object-cover rounded-md'
            loading="lazy"
          />
        </div>

        {/* Partie droite : texte et formulaire (60 % de la largeur du conteneur) */}
        <div className='flex flex-col md:w-3/5 w-full gap-y-6 bg-newWhite-100 p-4 rounded-md drop-shadow-xl'>
          <div className='h-1/4'>
            <p className="lg:text-2xl text-xl font-bold mb-3">Newsletter : accès pré-commandes</p>
            <p id='test' className="xl:text-base lg:text-sm text-xs">L'inscription gratuite à la newsletter permet de réserver vos places en avant-première et profiter d'offres exclusives.</p>
          </div>
          <form id='newsletter' method='post' className=" flex flex-col gap-4 grow justify-between">
            <input name='prenom' type='text' placeholder='Prénom' required className="w-full p-2 rounded" />
            <input name='nom' type='text' placeholder='Nom' required className="w-full p-2 rounded" />
            <input name='email' type='email' placeholder='Email' required className="w-full p-2 rounded" />
            <input name='tel' type='tel' placeholder='Téléphone' required className="w-full p-2 rounded" />
            <p className='text-xs font-montserrat'>Comment nous traitons les données : <span className='text-blue-950 underline font-semibold'>politique confidentialité</span></p>
            <div className="flex items-start">
              <input type="checkbox" required className="mr-2" />
              <span className="text-xs font-montserrat">
                RGPD : Vos données sont traitées de manière sécurisée et conforme à la réglementation. Vous pouvez les consulter, modifier ou supprimer à tout moment
              </span>
            </div>

            <input type='submit' value='Subscribe' className="w-full p-2 rounded bg-primary-500 text-white cursor-pointer" />
          </form>
        </div>

      </div>
    </section>
  )
}

export default Newsletter
