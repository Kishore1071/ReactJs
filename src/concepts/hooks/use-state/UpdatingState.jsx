import React from 'react'
import { useState } from 'react'

const UpdatingState = () => {

    const [favorite_language, setFavoriteLanguage] = useState('Javascript')

    return (
        <div>
            <p>My favorite language is {favorite_language}</p>
            <button onClick={() => setFavoriteLanguage("Python")}>Update Content</button>
        </div>
    )
}

export default UpdatingState