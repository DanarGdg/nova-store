import React from 'react'
import Navbar from '../components/Navbar'
import Title from '../components/Title'
import mail from '../assets/mail.svg'
import google from '../assets/google.svg'
import '../styles/login-register.css'
import Footer from '../components/Footer'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

function Box(props){
    return(
        <div className={props.className}>
            <img src={props.img} alt="" />
            <p>{props.text}</p>
        </div>
    )
}

function LoginRegister() {
    const navigate = useNavigate()

    function loginGoogle(){
        console.log('click');
        axios.get('http://restapi.novastore.my.id/auth/google')
        
            .then((response) => {
            localStorage.setItem('token', response.data.token);
            console.log(response)
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }
  return (
    <div className='login-register'>
        <Navbar/>
        <Title message='Please login to save your transactions'/>
        <div className='wrapper-box'>
            <Link to={`/login`}>
                <Box img={mail} text='AUTHORIZE WITH EMAIL' className='purple box'/>
            </Link>
            <div  onClick={loginGoogle}>

            <Box img={google} text='AUTHORIZE WITH GOOGLE' className='orange box'/>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default LoginRegister