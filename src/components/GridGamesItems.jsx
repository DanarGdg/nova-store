import React from 'react'
import pubg from '../assets/pubg.png'

function GridGamesItems(props) {
  return (
    <div className='grid-items'>
        <img src={pubg} alt="" />
        <div>{props.gameName}</div>
    </div>
  )
}

export default GridGamesItems