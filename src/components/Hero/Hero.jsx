import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <img className='img1' src={"/img/G.png" }alt="s" />
        <div>
        <h2>Learn with us anywhere with the best <span className='underline'>experts</span></h2>
        <p> we collaborate with 275+ leding universities and companies</p>
        <section className='search'>
        </section>    
         </div>
        <div className='imgdiv'><img className='img2' src={"/img/G1.png"} alt="" /></div>


    </div>
  )
}

export default Hero