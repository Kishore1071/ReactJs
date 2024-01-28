import React, { useEffect, useState } from 'react'

const EffectAfterEveryUpdate = () => {

    const initial_person_name = 'Antony Stark'
    const initial_hero_name = 'Ironman'

    const [person_name, setPersonName] = useState(initial_person_name)
    const [hero_name, setHeroName] = useState(initial_hero_name)

    useEffect(() =>{
        console.log("Some data is changed")

        return () => {
            
        }
    })

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

export default EffectAfterEveryUpdate