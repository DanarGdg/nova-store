import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/About-us.css'

import logo from '../assets/logo.svg'
import logoInstagram from '../assets/instagram.svg'
import logoFacebook from '../assets/facebook.svg'
import logoTwitter from '../assets/twitter.svg'


function AboutUs() {
  return (
    <div class="about-us">
      <Navbar/>
      <div className="logo">
      <img src={logo} alt="" />
      </div>
      <div className="container-txt">
      <p>
        <h1>Welcome To Nova Store</h1><br/>
        <h2>Led by veterans of the managed Top-up business, we have taken our 20+ years of experience in complex hosting environments and made it our mission to simplify the cloud.</h2>
      <br/>
        <h5>VIST OUR SOCIAL MEDIA </h5>
      </p>
      </div>
      <div className="platform">
      <img src={logoInstagram} alt="" />
      <img src={logoFacebook} alt="" />
      <img src={logoTwitter} alt="" />
      </div>
      <Footer/>
    </div>
  )
}

export default AboutUs