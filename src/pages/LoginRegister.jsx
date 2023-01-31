import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import mail from '../assets/mail.svg'
import google from '../assets/google.svg'
import '../styles/login-register.css'
import Footer from '../components/Footer'

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
            <Box img={mail} text='AUTHORIZE WITH EMAIL' className='purple box'/>
            <Box img={google} text='AUTHORIZE WITH GOOGLE' className='orange box'/>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginRegister