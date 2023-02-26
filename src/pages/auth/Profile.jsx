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
import { Link } from "react-router-dom"
import { useProfileApi } from "../../context/api/ProfileApi"

function Profile() {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");
    const context = useProfileApi()
    
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

    return (
        <div class="profile">
            <div>
                <Navbar />
            </div>

            <div class="row-container">
                <Title message={`BOOT PROFILE: HELLO, ${context.profileData.user?.name}`} />
                <Link to={'/edit-profile'}>
                    <div class="btn">EDIT INFO</div>
                </Link>
                <div class="btn" onClick={logout}>LOGOUT</div>
            </div>
            <div class="box">
                <h2 class='pop-up-text'>{context.profileData.user?.name}</h2>
                <img class="img-user" src={context.profileData.user?.pf_avatar} alt="" />
            </div>
            <div class="history-header">
                <h1 class="history-tittle">
                    HISTORY PAYMENT
                </h1>
                <div className="divider"></div>
            </div>
            <Title message={`Payment this month: ${context.profileData['history-payment']?.length} transaction`} />
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