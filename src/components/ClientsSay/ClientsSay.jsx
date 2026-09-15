import React from 'react'
import './ClientsSay.css'

const ClientsSay = (props) => {
  return (
    <div className='clientsay'>
        <h1>{props.say}</h1>
        <img src={props.coma} alt="" />
        <p>{props.title}</p>
    </div>
  )
}

export default ClientsSay