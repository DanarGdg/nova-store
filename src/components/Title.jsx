import React from 'react'

function Title(props) {
  return (
    <div className='title'>
        &gt;&gt;&gt;<p>{props.message}</p>
    </div>
  )
}

export default Title