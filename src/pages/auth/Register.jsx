import React, { useContext, useEffect, useState } from "react"
import Footer from '../../components/Footer'
import Navbar from '../../components/Navbar'
import CustomForm from '../../components/FormInput'
import '../../styles/register.css'
import axios from "axios"
import { useNavigate } from "react-router"

function Register() {
    const navigate = useNavigate()

    const [nama, setNama] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [noHp, setnoHp] = useState('')
    const token = localStorage.getItem("token");

    const formData = new FormData();
    formData.append('name', nama);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('no_hp', noHp);


    async function register(e) {
        e.preventDefault();

        const response = await axios.post('http://restapi.novastore.my.id/api/register', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((response) => {
            localStorage.setItem('token', response.data.access_token);
            console.log(response)
            navigate('/')
        }).catch((error) => {
            console.log(error)
        });
    }

    return (
        <form class="regis" onSubmit={register}>
            <Navbar />
            <p>Register</p>
            <div class="border-line"></div>
            <div class="container">
                <CustomForm title="NAME" type='text' value={nama} func={setNama} />
                <br />
                <CustomForm title="EMAIL" type='text' value={email} func={setEmail} />
                <br />
                <CustomForm title="PASSWORD" type='password' value={password} func={setPassword} />
                <br />
                <CustomForm title="PHONE NUMBER" type='number' value={noHp} func={setnoHp} />
            </div>
            <div class="btn-regis">
                {/* <p>Register</p> */}
                <input type="submit" value='Register' />
            </div>
            <div class="login-text">
                <p>I don’t have an account? <a href="login">Login</a></p>
            </div>
            <Footer />
        </form>
    );
}

export default Register