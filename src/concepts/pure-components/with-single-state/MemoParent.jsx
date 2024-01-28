import React from 'react'
import { useState } from 'react'
import MemoChild from './MemoChild'

const MemoParent = () => {
    const [planet_name, setPlanetName] = useState('Earth')

    return (
        <div>
            <MemoChild planet_name={planet_name}></MemoChild>
            <button onClick={() => setPlanetName("Mars")}>Change to Mars</button>
            <button onClick={() => setPlanetName("Earth")}>Change to Earth</button>
        </div>
  )
}

export default MemoParent