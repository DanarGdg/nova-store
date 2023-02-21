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

function Home() {

  const [gameData, setGameData] = useState()
  const [loading, setLoading] = useState(false)


  useEffect(() => {
    async function gameDataApi(e) {
      setLoading(false)
      axios.get('http://restapi.novastore.my.id/api/home')
        .then((response) => {
          setGameData(response.data.data)
          setLoading(true)
        });
    }
    gameDataApi()
  }, [])

  return (
    <div className='home'>
      <Navbar />
      <ImageSlider slides={SliderData} />
      <div className='wrapper-below-carousel'>
        <p>Thank you for visiting our store, just reminder for always read the <br /> rules with correct :&#41;</p>
        <img src={contactLogo} alt="" />
      </div>
      <div className='wrapper-search'>
        <Search placeholder="Search Your Game Here" />
        <h1>TOP UP GAME</h1>
      </div>
      {loading ? <GridGames data={gameData} /> : <h1>Loading</h1>}

      <Footer />
    </div>
  )
}

export default Home