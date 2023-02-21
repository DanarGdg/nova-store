import axios from 'axios'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.svg'
import shade from '../assets/shade.svg'
import '../styles/navbar.css'

function Navbar() {
    const token = localStorage.getItem("token");

    const navigate = useNavigate()

    async function logout(e) {
        const response = await axios.post('http://restapi.novastore.my.id/api/logout',{
        }).then((response) => {
            localStorage.removeItem("token");
            console.log(response)
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        });
    }
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

            <Link to={'/login-register'}>
                <div className='btn-special'>
                    {
                        token ? 
                        <>
                            <p>LOGOUT</p> 
                            <img src={shade} alt="" />
                        </>
                        :
                        <>
                            <p>DAFTAR/MASUK</p>
                            <img src={shade} alt="" />
                        </>
                    }
                </div>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar