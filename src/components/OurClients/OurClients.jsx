import React from 'react'
import './OurClients.css'
import SlideClients from '../SlideClients/SlideClients'
import ClientsSay from '../ClientsSay/ClientsSay'

const OurClients = () => {
  return (
    <div className='ourclients'>
      <ClientsSay 
         say = "What our client’s say"
         coma = '/img/coma.svg'
         title= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim."
        
      />
      <SlideClients  />

    </div>
  )
}

export default OurClients