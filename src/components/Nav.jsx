import React from 'react'
import logo from '../assets/images/logo.svg'
import menuicon from '../assets/icons/menu-icon.svg'

const Nav = () => {
  return (
    <header className=''>
        <nav className='flex items-center justify-between px-20 py-7'>
            <a href='/'>
                <img src={logo} 
                alt="logo" />
            </a>
            <a href="/">
                <img src={menuicon} 
                alt="menu-icon" />
            </a>

        </nav>
    </header>
  )
}

export default Nav;