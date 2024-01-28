import React from 'react'

const OnChangeEvent = () => {
  return (
    <div>
        <input type="text" onChange={event => console.log(event.target.value)}/>
    </div>
  )
}

export default OnChangeEvent