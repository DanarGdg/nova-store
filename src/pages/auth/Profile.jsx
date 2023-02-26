import React, { useState } from "react"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Title from '../../components/Title'

import '../../styles/profile.css'
import logo from '../../assets/asa.png'
import PaymentContainer from '../../components/PaymentContainer'
import { useNavigate } from "react-router"
import axios from "axios"
import { useEffect } from "react"

function Profile() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const [profileData, setProfileData] = useState({})
    
    function logout() {
        axios.get('http://restapi.novastore.my.id/api/logout', {
            headers: {
                Authorization: `Bearer ${token}`,
            },     
        }).then((response) => {
            localStorage.removeItem("token");
            console.log(response)
            navigate('/login')
        }).catch((error) => {
            console.log(error)
        });
    }

    function getProfile() {
        axios.get('http://restapi.novastore.my.id/api/profile', {
            headers: {
                Authorization: `Bearer ${token}`,
            },            
        }).then((response) => {
            setProfileData(response.data.data)
        }).catch((error) => {
            console.log(error)
        });
    }

    useEffect(() => {
        getProfile()
    }, [])

    return (
        <div class="profile">
            <div>
                <Navbar />
            </div>

            <div class="row-container">
                <Title message={`BOOT PROFILE: HELLO, ${profileData.user?.name}`} />
                <div class="btn">EDIT INFO</div>
                <div class="btn" onClick={logout}>LOGOUT</div>
            </div>
            <div class="box">
                <h2 class='pop-up-text'>Asa</h2>
                <img class="img-user" src={logo} alt="" />
            </div>
            <div class="history-header">
                <h1 class="history-tittle">
                    HISTORY PAYMENT
                </h1>
                <div className="divider"></div>
            </div>
            <Title message={`Payment this month: ${profileData['history-payment']?.length} transaction`} />
            <div class="payment">
                <PaymentContainer />
            </div>
            <div class="payment">
                <PaymentContainer />
            </div>
            <Footer />
        </div>
    )
}

export default Profile