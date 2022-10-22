import React, {useState} from 'react'
import './navbar.scss'
import { Container } from 'react-bootstrap';
import {AiOutlineMenu} from 'react-icons/ai'
import logo from '../../assets/logo.svg'
import ToggleMenu from '../widgets/toggleMenu/ToggleMenu'



const Navbar = () => {

  const [showMenu, setShowMenu] = useState()

  return (
    <Container className='navbar-container flex-between'>
      <div className='flex-start'>
        <img src={logo} alt="" />
        <ul className='links flex-start'>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </div>
      <ul className='signupLogin flex-end'>
        <li>Login</li>
        <li>Sign Up</li>
      </ul>
      <div className='hamburger-menu '>
        <AiOutlineMenu onClick={() => setShowMenu((prev) => !prev)}/>
      </div>
      {showMenu && <ToggleMenu />}
    </Container>
  )
}

export default Navbar;  