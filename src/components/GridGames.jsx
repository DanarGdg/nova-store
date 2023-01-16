import React from 'react'
import GridGamesItems from './GridGamesItems'

function GridGames() {
  return (
    <div className='grid-games'>
        <GridGamesItems gameName="PUBG"/>
        <GridGamesItems gameName="Mobile Legend"/>
        <GridGamesItems gameName="Genshin Impact"/>
        <GridGamesItems gameName="Honkai Impact"/>
        <GridGamesItems gameName="Dragon Raja"/>
        <GridGamesItems gameName="League of Legends"/>
        <GridGamesItems gameName="Apex Legend"/>
        <GridGamesItems gameName="Ragnarok"/>
    </div>
  )
}

export default GridGames