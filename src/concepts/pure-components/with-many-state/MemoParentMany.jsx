import React from 'react'
import { useState } from 'react'
import MemoChild from './MemoChild'

const MemoParentMany = () => {
    const [planet_name, setPlanetName] = useState('Earth')
    const [system_name, setSystemName] = useState('Solar System')

    const Update = () => {
        setPlanetName("Mars")
        setSystemName("Alpha Centuri")
    }

    const Revert = () => {
        setPlanetName("Earth")
        setSystemName("Solar System")
    }

    const UpdateOne = () => {
        setPlanetName("Jupiter")
        setSystemName("Solar System")
    }

    return (
        <div>
            <MemoChild planet_name={planet_name} system_name={system_name}></MemoChild>
            <button onClick={Update}>Change to Mars</button>
            <button onClick={Revert}>Change to Earth</button>
            <button onClick={UpdateOne}>Single Change</button>
        </div>
  )
}

export default MemoParentMany