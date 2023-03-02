import React, { useEffect } from 'react'
import { useState } from 'react'
import { useApiPrice } from '../context/api/PriceApi'

function RangeSlider() {
  const [value, setValue] = useState(0)
  const [selectedItem, setSelectedItem] = useState([])
  const [color, setColor] = useState(null)
  const context = useApiPrice()

  let fakeItem = [
    {
      item: 90
    },
    {
      item: 280
    },
    {
      item: 500 
    },
    {
      item: 1050 
    },
    {
      item: 90
    },
    {
      item: 90
    },
  ]

  function handleMove(e) {
    setValue(e.target.value)
  }
  
  useEffect(() => {
    console.log(value);
    var x = value;
    setColor("linear-gradient(90deg, #FFC700 " + x + "%" + ", hsl(0, 0%, 100%) " + x + "%)")
    // setSelectedItem
  },[value])

  return (
    <div className='range-slider'>
      <input type={'range'} onChange={handleMove} style={{ background: color }} 
        step={Math.round((100 / context.listPrice?.length) * 100) / 100}
        min={0} max={100.02}
        value={value}
        // step='25'
      />
      <p>{selectedItem}</p>
    </div>
  )
}

export default RangeSlider