import React, { useState } from 'react'
import Dropdown from '../components/DropDown'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import PriceContainer from '../components/PriceContainer';
import RangeSlider from '../components/RangeSlider';
import '../styles/price-list.css'

function PriceList() {
  const options = [
    { value: "green", label: "Green" },
    { value: "blue", label: "Blue" },
    { value: "red", label: "Red" },
    { value: "yellow", label: "Yellow" },
    { value: "orange", label: "Orange" },
    { value: "pink", label: "Pink" },
    { value: "purple", label: "Purple" },
    { value: "grey", label: "Grey" }
  ];

  const [SelectedGame, setSelectedGame] = useState("");

  return (
    <div className='price-list'>
      <Navbar />
      <Dropdown
        placeHolder="Select..."
        options={options}
        selectedGame={SelectedGame}
      />
      <h2>Mobile Legend</h2>
      <RangeSlider />
      <PriceContainer />
      <Footer />
    </div>
  )
}

export default PriceList