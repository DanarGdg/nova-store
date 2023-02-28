import React, { useState } from 'react'
import { useEffect } from 'react';
import Dropdown from '../components/DropDown'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import PriceContainer from '../components/PriceContainer';
import RangeSlider from '../components/RangeSlider';
import { useApiPrice } from '../context/api/PriceApi';
import '../styles/price-list.css'

function PriceList() {
  const context = useApiPrice()
  const [selectedGame, setSelectedGame] = useState("");
  let options = []
  context.listGame?.map((game) => {
    options.push(
      { value: game.id, label: game.nama },
    )
  })

  function handleChange(e){
    setSelectedGame(e.label)
    context.setGameId(e.value)
  }
  
  useEffect(() => {
    context.getListPrice().then((res) => {
      context.setListPrice(res.data.data)
    })
  }, [selectedGame])

  return (
    <div className='price-list'>
      <Navbar />
      <Dropdown
        placeHolder="Select..."
        options={options}
        onChange={handleChange}
      />
      <h2>{selectedGame}</h2>
      <RangeSlider />
      <div className='wrapper-price-container'>
        {selectedGame ? <PriceContainer /> : 'Pilih game'}
      </div>
      <Footer />
    </div>
  )
}

export default PriceList