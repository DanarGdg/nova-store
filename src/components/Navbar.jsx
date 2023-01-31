import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
import shade from '../assets/shade.svg'
import '../styles/navbar.css'

function Navbar() {
  return (
    <nav className='nav'>
        <div className='logo-wrapper'>
            <img src={logo} alt="" />
            <p>NOVA STORE</p>
        </div>

        <div className='text-wrapper'>
            <ul>
                <li> <Link to='/'>HOME</Link> </li>
                <li> <Link to='/order-list'>ORDER LIST</Link> </li>
                <li> <Link to='/price-list'>PRICE LIST</Link> </li>
                <li> <Link to='/about-us'>ABOUT US</Link> </li>
            </ul>

            <div className='btn-special'>
                <p>DAFTAR/MASUK</p>
                <img src={shade} alt="" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar