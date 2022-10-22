import React from 'react'
import './toggleMenu.scss'

const ToggleMenu = () => {
  return (
    <div className='menu-container'>
        <ul className='menu-links'>
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
          <hr />
        <ul className='menu-signuplogin'>
            <li>Login</li>
            <li>Sign Up</li>
      </ul>
    </div>
  )
}

export default ToggleMenu