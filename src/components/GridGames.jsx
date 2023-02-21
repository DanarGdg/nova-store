import React from 'react'
import GridGamesItems from './GridGamesItems'

function GridGames({ data }) {
  return (
    <div className='grid-games'>
      {
        data.map((game) => (
          <GridGamesItems gameName={game.nama} gameThumbnail={game.pf_thumbnail} />
        ))
      }
    </div >
  )
}

export default GridGames