import React from 'react'
import { useState } from 'react'

const CreatingState = () => {

    const [favorite_language, setFavoriteLanguage] = useState('Javascript')

    return (
        <div>
            <p>My favorite language is {favorite_language}</p>
        </div>
    )
}

export default CreatingState