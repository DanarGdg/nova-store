import React from 'react'
import search from '../assets/search.svg'
import { useApiHome } from '../context/api/homeApi'

function Search({ func, searchFunc, placeholder, value, loadingfunc, setData }) {

  function handleChange(e){
    func(e.target.value)
  }

  async function handleSearch(){
    searchFunc().then((response) => {
      loadingfunc(true)
      setData(response.data.data)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <div className='search'>
        <input className='input' type="text" placeholder={placeholder} value={value} onChange={handleChange}/>
        <div onClick={handleSearch}><img src={search} alt="" /></div>
    </div>
  )
}

export default Search