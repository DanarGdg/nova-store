import React from 'react'
import { useState } from 'react'

function RangeSlider() {
  const [value, setValue] = useState(0)
  const [color, setColor] = useState(null)

  function handleMove(e) {
    var x = e.target.value;
    setValue(e.target.value)
    setColor("linear-gradient(90deg, #FFC700 " + x + "%" + ", hsl(0, 0%, 100%) " + x + "%)")
  }
  return (
    <div className='range-slider'>
      <input type={'range'} onInput={handleMove} style={{ background: color }} />
      <p>{value} Diamonds</p>
    </div>
  )
}

export default RangeSlider