import React, { useState } from "react"
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import Title from '../../components/Title'

import '../../styles/profile.css'
import logo from '../../assets/asa.png'
import PaymentContainer from '../../components/PaymentContainer'

function Profile() {
    return (
        <div class="profile">
            <div>
                <Navbar />
            </div>

            <div class="row-container">
                <Title message='BOOT PROFILE: HELLO, UID 0010019' />
                <div class="btn">EDIT INFO</div>
                <div class="btn">LOGOUT</div>
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
            <Title message='Payment this month: 12 transaction' />
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