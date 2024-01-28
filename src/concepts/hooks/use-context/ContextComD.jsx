import React from 'react'
import { useContext } from 'react'
import { SuperHeroName } from './ContextComA'

const ContextComD = () => {

    const hero_name = useContext(SuperHeroName)

    return (
        <div>
            <h1>ContextComD</h1>
            <p>{hero_name}</p>
        </div>
    )
}

export default ContextComD