import React, { useState } from 'react'
import { useContextDetailGame } from '../context/app/ContextDetailGame'

function TimelineTransaction() {
  const [active, setActive] = useState(false)
  const context = useContextDetailGame()

  function handleClick(){
    setActive(!active)
  }

  return (
    <div className='timeline-transaction'>
        <div className={context.active1 && context.idUser ? 'timeline-number active-timeline' : 'timeline-number'} onClick={handleClick}>1</div>
        <div className={context.active1 && context.idUser ? 'timeline-line active-timeline-line' : 'timeline-line'}></div>
        <div className={context.active1 && context.idUser && context.active2 ? 'timeline-number active-timeline' : 'timeline-number'} onClick={handleClick}>2</div>
        <div className={context.active1 && context.idUser && context.active2 ? 'timeline-line line-second active-timeline-line' : 'timeline-line line-second'}></div>
        {/* <div className='timeline-number'>3</div> */}
    </div>
  )
}

export default TimelineTransaction