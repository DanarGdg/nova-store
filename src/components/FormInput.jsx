import React from 'react'

import '../styles/form.css'

function CustomForm({title, value, func, type}) {
  function handleChange(e) {
    func(e.target.value)
  }
  return (
    <div className='form'>
        <p>{title}</p>
        <input type={type} value={value} onChange={handleChange}></input>
    </div>
  )
}

export default CustomForm