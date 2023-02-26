import React, { useState } from "react"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CustomForm from '../../components/FormInput'
import '../../styles/login.css'
import { useNavigate } from "react-router"
import axios from "axios"

function Login() {
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);


    async function login(e) {
        e.preventDefault();

        const response = await axios.post('http://restapi.novastore.my.id/api/login', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.
            token);
            console.log(response)
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <form onSubmit={login} class="login">
            <Navbar />
            <p className="current-page">Login to your account</p>
            <div class="border-line"></div>
            <div class="container">
                <CustomForm title="EMAIL" type='text' value={email} func={setEmail} />
                <br />
                <CustomForm title="PASSWORD" type='password' value={password} func={setPassword} />
            </div>
            <div class="btn-login">
                <input type="submit" value='Login' />
            </div>
            <div class="regist-text">
                <p>I don’t have an account? <a href="register">Regsister</a></p>
            </div>
            <Footer />
        </form>
    );
}

export default Login