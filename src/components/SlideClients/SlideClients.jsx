import React from 'react'
import './SlideClients.css'
import InfoCategories from '../InfoCategories/InfoCategories'
const SlideClients = () => {
  return (
    <div className='slideclients'>
        <img className='left' src="/img/right.png"  alt="" />
        <div className='slide'>
        <InfoCategories 
        image = '/img/person1.png'
        />
        <InfoCategories 
        image = '/img/person2.png'
        />
        <InfoCategories 
        image = '/img/person3.png'
        />
        <InfoCategories 
        image = '/img/person4.png'
        />
        <InfoCategories 
        image = '/img/person5.png'
        /></div>
        <img className='right' src="/img/right.png" alt="" />
    </div>
  )
}

export default SlideClients