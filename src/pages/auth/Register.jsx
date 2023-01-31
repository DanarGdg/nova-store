import React from "react"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CustomForm from '../../components/FormInput'
import '../../styles/register.css'

function Register() {
    return(
        <div class="regis">
            <Navbar/>
                <p>Register</p>
                <div class="border-line"></div>
                <div class="container">
                <CustomForm title="NAME"/>
                <br />
                <CustomForm title="EMAIL"/>
                <br />
                <CustomForm title="PASSWORD"/>
                <br />
                <CustomForm title="PHONE NUMBER"/>
                </div>
                <div class="btn-regis">
                    <p>Register</p>
                </div>
                <div class="login-text">
                    <p>I don’t have an account? <a href="login">Login</a></p>
                </div>
            <Footer/>
        </div>
    );
}

export default Register