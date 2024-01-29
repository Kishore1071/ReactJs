import React from 'react'
import { useContext } from 'react'
import { SuperHeroNameOne } from './ContextComA'
import { SuperHeroNameTwo } from './ContextComA'

const ContextComD = () => {

    const hero_name_one = useContext(SuperHeroNameOne)
    const hero_name_two = useContext(SuperHeroNameTwo)

    return (
        <div>
            <h1>ContextComD</h1>
            <p>{hero_name_one}</p>
            <p>{hero_name_two}</p>
        </div>
    )
}

export default ContextComD