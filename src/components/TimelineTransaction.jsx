import React, { useState } from 'react'

function TimelineTransaction() {
  const [active, setActive] = useState(false)
  const [current, setCurrent] = useState(1)

  function handleClick(){
    setActive(!active)
  }

  return (
    <div className='timeline-transaction'>
        <div className={active ? 'timeline-number active-timeline' : 'timeline-number'} onClick={handleClick}>1</div>
        <div className={active ? 'timeline-line active-timeline-line' : 'timeline-line'}></div>
        <div className={active ? 'timeline-number active-timeline' : 'timeline-number'} onClick={handleClick}>2</div>
        <div className={active ? 'timeline-line line-second active-timeline-line' : 'timeline-line line-second'}></div>
        <div className='timeline-number'>3</div>
    </div>
  )
}

export default TimelineTransaction