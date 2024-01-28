import React from 'react'
import { useState, useEffect } from 'react'

const ArrayWithState = () => {
    const [languages, setLanguages] = useState([])
    const [user_input, setUserInput] = useState('')

    const AddLanguages = event => {
        event.preventDefault()
        setLanguages([... languages, user_input])
        setUserInput('')
    }

    let result = languages.map((lang, index) => <li key={index}>{lang}</li>)

    return (
        <div>
            <form>
                <input type="text" value={user_input}  onChange={event => setUserInput(event.target.value)}/>
                <input style={{marginLeft: "10px"}} type="submit" onClick={AddLanguages}/>
            </form>

            <h1>Programming Languages</h1>
            <ul>
                {result}
            </ul>
        </div>
    )
}

export default ArrayWithState