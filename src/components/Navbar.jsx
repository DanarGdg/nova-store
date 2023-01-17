import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.svg'
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

            <Link to='/login-register'>
                <div className='btn-special'>
                    <p>DAFTAR/MASUK</p>
                    {/* <svg width="79" height="46" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_618_1123)"><path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"></path></g><defs><filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"></feGaussianBlur></filter><linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.6"></stop><stop offset="1" stop-color="white" stop-opacity="0.05"></stop></linearGradient></defs></svg> */}
                    <svg width="79" height="60" viewBox="0 0 79 60" fill="none" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_f_618_1123)"><path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"></path></g><defs><filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="60" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"></feGaussianBlur></filter><linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44" gradientUnits="userSpaceOnUse"><stop stop-color="white" stop-opacity="0.6"></stop><stop offset="1" stop-color="white" stop-opacity="0.05"></stop></linearGradient></defs></svg>
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar