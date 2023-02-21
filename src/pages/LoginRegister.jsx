import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import mail from '../assets/mail.svg'
import google from '../assets/google.svg'
import '../styles/login-register.css'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

function Box(props){
    return(
        <div className={props.className}>
            <img src={props.img} alt="" />
            <p>{props.text}</p>
        </div>
    )
}

function LoginRegister() {
  return (
    <div className='login-register'>
        <Navbar/>
        <Title message='Please login to save your transactions'/>
        <div className='wrapper-box'>
            <Link to={`/login`}>
                <Box img={mail} text='AUTHORIZE WITH EMAIL' className='purple box'/>
            </Link>
            <Link to={`/register`}>
                <Box img={google} text='AUTHORIZE WITH GOOGLE' className='orange box'/>
            </Link>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginRegister