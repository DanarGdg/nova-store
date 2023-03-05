import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import '../styles/home.css'
import ImageSlider from '../components/imageSlider'
import { SliderData } from '../data/sliderData.js';
import contactLogo from '../assets/Contact.svg'
import Search from '../components/Search';
import GridGames from '../components/GridGames';
import Footer from '../components/Footer';
import axios from 'axios';
import { useApiHome } from '../context/api/homeApi';
import Loading from '../components/Loading';
import Loading3Dots from '../components/Loading3Dots';

function Home() {
  const context = useApiHome()

  return (
    <div className='home'>
      <Navbar />
      <ImageSlider slides={SliderData} />
      <div className='wrapper-below-carousel'>
        <p>Thank you for visiting our store, just reminder for always read the <br /> rules with correct :&#41;</p>
        <img src={contactLogo} alt="" />
      </div>
      <div className='wrapper-search'>
        <Search placeholder="Search Your Game Here" 
          value={context.search} 
          func={context.setSearch} 
          searchFunc={context.searchApi}
          loadingfunc={context.setLoading}
          setData={context.setGameData}
        />
        <h1>TOP UP GAME</h1>
      </div>
      {!context.loading ? <GridGames data={context.gameData} /> : <Loading3Dots/>}
      <Footer />
    </div>
  )
}

export default Home