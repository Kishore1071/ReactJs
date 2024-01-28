import React from 'react'
import { useState } from 'react'

const CollectingFormData = () => {
    
    const [real_name, setRealName] = useState('')
    const [hero_name, setHeroName] = useState('')

    const SubmitHandler = event => {
        event.preventDefault()

        setRealName('')
        setHeroName('')

        let hero_data = {
            real_name: real_name,
            hero_name: hero_name
        }

        console.log(hero_data)
    }

    return (
        <div>
            <form onSubmit={SubmitHandler}>
                <label htmlFor="">Real Name</label>
                <input type="text" value={real_name} onChange={event => setRealName(event.target.value)}/>
                <br />
                <label htmlFor="">Hero Name</label>
                <input type="text" value={hero_name} onChange={event => setHeroName(event.target.value)}/>
                <br />
                <input type="submit" />
            </form>
        </div>
    )
}

export default CollectingFormData