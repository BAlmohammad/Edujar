import React from 'react'
import './Categories.css'
import InfoEdujar from '../InfoEdujar/InfoEdujar'
import InfoCategories from '../InfoCategories/InfoCategories'

const Categories = () => {
  return (
    <div className='categories'>
      
        <img  className='arrow arrowLeft' src="/img/left.svg" alt="" />
        <div className='infocontainer'>
        <InfoCategories 
        image = '/img/Pen.svg'
        title = "Art &Design "
        />
        <InfoCategories 
        image = '/img/Chat.svg'
        title = "Communication  "
        />
        <InfoCategories 
        image = '/img/Bank.svg'
        title = "Finance & Bank   "
        />
        <InfoCategories 
        image = '/img/Chart.svg'
        title = "Marketing  "
        />
        <InfoCategories 
        image = '/img/Camera.svg'
        title = "Photography  "
        />
        </div>
        <img  className='arrow arrowRight' src="/img/left.svg" style={{transform:'rotate(180deg)'}} alt="" />
    </div>
  )
}

export default Categories