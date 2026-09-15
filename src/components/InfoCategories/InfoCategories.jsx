import React from 'react'
import './InfoCategories.css'
const InfoCategories = (props) => {
  return (
    <div className='infocategories'>
        <img src={props.image} alt="" />
        <p>{props.title}</p>

    </div>
  )
}

export default InfoCategories