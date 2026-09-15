import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <section className='line1'>
          <span>
            <img src={props.image}  alt="" />
            <p>{props.title}</p>
          </span>
          <button>{props.type}</button>
        </section>
        <div className='desccard'>
          <h3>{props.infocourse}</h3>
          <p>{props.moreinfo}</p>
        </div>
        <hr />
        <section className='line2'>
        <button className='join'>Join</button>
        <img src={props.image2} alt="" />
        </section>
    </div>
  )
}

export default Card