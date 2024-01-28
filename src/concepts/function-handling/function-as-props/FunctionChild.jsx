import React from 'react'

const FunctionChild = ({GetData}) => {
  return (
    <div>
        <button onClick={() => GetData("This is a React Project")}>Call Parent</button>
    </div>
  )
}

export default FunctionChild