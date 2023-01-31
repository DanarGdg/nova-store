import React from "react"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CustomForm from '../../components/FormInput'
import '../../styles/login.css'

function Login() {
    return(
        <div class="login">
            <Navbar/>
                <p>Login to your account</p>
                <div class="border-line"></div>
                <div class="container">
                <CustomForm title="EMAIL"/>
                <br />
                <CustomForm title="PASSWORD"/>
                </div>
                <div class="btn-login">
                    <p>Login</p>
                </div>
                <div class="regist-text">
                    <p>I don’t have an account? <a href="register">Regsister</a></p>
                </div>
            <Footer/>
        </div>
    );
}

export default Login