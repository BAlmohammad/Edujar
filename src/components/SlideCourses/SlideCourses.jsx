import React from 'react'
import './SlideCourses.css'
import SlideClients from '../SlideClients/SlideClients'
import InfoCategories from '../InfoCategories/InfoCategories'

const SlideCourses = () => {
  return (
    <div className='slidecourses'>
                <img className='left' src="img/arrowleft.svg"  alt="" />
        <div className='slide2'>
        <InfoCategories 
        image = '/img/D1.svg'
        />
        <InfoCategories 
        image = '/img/D2.svg'
        />
        <InfoCategories 
        image = '/img/D3.svg'
        />
        <InfoCategories 
        image = '/img/D4.svg'
        />
        <InfoCategories 
        image = '/img/D5.svg'
        /></div>
        <img className='right' src="/img/arrowright.svg" alt="" />
    </div>


  )
}

export default SlideCourses