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

function Home() {
  const context = useApiHome()
  // console.log(context)

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
      {context.loading ? <GridGames data={context.gameData} /> : <h1>Loading</h1>}
      <Footer />
    </div>
  )
}

export default Home