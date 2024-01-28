import React from 'react'
import { useState, useEffect } from 'react'

const EffectForSelectedStates = () => {

    const initial_person_name = 'Antony Stark'
    const initial_hero_name = 'Ironman'

    const [person_name, setPersonName] = useState(initial_person_name)
    const [hero_name, setHeroName] = useState(initial_hero_name)

    useEffect(() =>{
        console.log("Some data is changed")
    }, [person_name])

    return (
        <div>
            Name of the person is {person_name}
            <br />
            <button onClick={() => setPersonName('Bruce Wayne')}>Update Person Name</button>
            <button onClick={() => setPersonName(initial_person_name)}>Reset Person Name</button>
            <br />
            
            His hero name is {hero_name}
            <br />  
            <button onClick={() => setHeroName('Batman')}>Update Hero Name</button>
            <button onClick={() => setHeroName(initial_hero_name)}>Reset Hero Name</button>
        </div>
    )
}

export default EffectForSelectedStates