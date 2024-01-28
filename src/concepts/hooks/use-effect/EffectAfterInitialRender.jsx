import React from 'react'
import { useState, useEffect } from 'react'

const EffectAfterInitialRender = () => {

    const initial_person_name = 'Antony Stark'
    const [person_name, setPersonName] = useState(initial_person_name)

    useEffect(() =>{
        console.log("Some data is changed")
    }, [])

    return (
        <div>
            Name of the person is {person_name}
            <br />
            <button onClick={() => setPersonName('Bruce Wayne')}>Update Person Name</button>
            <button onClick={() => setPersonName(initial_person_name)}>Reset Person Name</button>
            <br />
        </div>
    )
}

export default EffectAfterInitialRender