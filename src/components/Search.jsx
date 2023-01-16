import React from 'react'
import search from '../assets/search.svg'

function Search(props) {
  return (
    <div className='search'>
        <input type="text" placeholder={props.placeholder}/>
        <div><img src={search} alt="" /></div>
    </div>
  )
}

export default Search