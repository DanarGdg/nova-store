import React from 'react'
import { Link } from 'react-router-dom'
import { useApiHome } from '../context/api/homeApi'
import GridGamesItems from './GridGamesItems'

function GridGames({ data }) {
  const context = useApiHome()
  return (
    <div className='grid-games'>
      {
        data.map((game, i) => (
          <Link to={`/detail-game/${game.id}`} key={i}>
            <GridGamesItems gameName={game.nama} gameThumbnail={game.pf_thumbnail} />
          </Link>
        ))
      }
    </div >
  )
}

export default GridGames