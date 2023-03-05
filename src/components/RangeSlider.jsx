import React, { useEffect } from 'react'
import { useState } from 'react'
import { useApiPrice } from '../context/api/PriceApi'

function RangeSlider({ selectedGame }) {
  const [color, setColor] = useState(null)

  const context = useApiPrice()

  function handleMove(e) {
    context.setValue(e.target.value)
  }

  useEffect(() => {
    if (context.value == 0) {
      context.setSelectedItem(0)
    }
    else if (context.value >= 0 && context.value <= 20) {
      context.setSelectedItem(context.listPrice[0]?.item)
    } else if (context.value >= 20 && context.value <= 40) {
      context.setSelectedItem(context.listPrice[1]?.item)
    } else if (context.value >= 40 && context.value <= 60) {
      context.setSelectedItem(context.listPrice[2]?.item)
    } else if (context.value >= 60 && context.value <= 80) {
      context.setSelectedItem(context.listPrice[3]?.item)
    } else if (context.value >= 80 && context.value <= 100) {
      context.setSelectedItem(context.listPrice[4]?.item)
    } else if (context.value >= 100) {
      context.setSelectedItem(context.step === 20 ? null : context.listPrice[5]?.item)
    }
    context.setStep(Math.round((100 / context.listPrice?.length) * 100) / 100)
    var x = context.value;
    setColor("linear-gradient(90deg, #FFC700 " + x + "%" + ", hsl(0, 0%, 100%) " + x + "%)")
  }, [
    context.value, context.listPrice, context.step, context.selectedItem, color
  ])

  return (
    <div className='range-slider'>
      <input type={'range'} onInput={handleMove} style={{ background: color }}
        disabled={selectedGame ? false : true}
        step={context.step}
        min={0} max={100.02}
        value={context.value}
      />
      <p>{context.selectedItem}</p>
    </div>
  )
}

export default RangeSlider