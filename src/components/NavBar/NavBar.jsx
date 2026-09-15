import React from 'react'
import './NavBar.css'

const NavBar = () => {
  return (
    <div className='navbar'>
        
        <h1><span style={{color:"#21B573"}}>Edu</span>jar</h1>
    
    <ul className='ulnav'>
        <li>Home</li>
        <li>Courses</li>
        <li>About Us</li>
        <li>Works</li>
        <li>Blog</li>
        <li>Contact</li>
        </ul>

        <button className='btnsign'>Sign Up</button>
    
    </div>
  )
}

export default NavBar