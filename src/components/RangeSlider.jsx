import React from 'react'
import { useState } from 'react'
import { useApiPrice } from '../context/api/PriceApi'

function RangeSlider() {
  const [value, setValue] = useState(0)
  const [color, setColor] = useState(null)
  const context = useApiPrice()
  var lowest = Number.POSITIVE_INFINITY;
  var highest = Number.NEGATIVE_INFINITY;
  var tmp;
  for (var i = context.listPrice?.length - 1; i >= 0; i--) {
    tmp = context.listPrice[i]?.price;
    if (tmp < lowest) lowest = tmp;
    if (tmp > highest) highest = tmp;
  }
  console.log(lowest, highest)
  function handleMove(e) {
    var x = e.target.value;
    setValue(e.target.value)
    setColor("linear-gradient(90deg, #FFC700 " + x + "%" + ", hsl(0, 0%, 100%) " + x + "%)")
    // context.listPrice.map((data) => {
    //   if (x == data.price) {
    //     setValue(data.item)
    //   }
    // }
    // )
  }
  return (
    <div className='range-slider'>
      <input type={'range'} onChange={handleMove} style={{ background: color }} step='25'/>
      <p>{value} Diamonds</p>
    </div>
  )
}

export default RangeSlider