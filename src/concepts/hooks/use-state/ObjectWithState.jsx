import React from 'react'
import { useState } from 'react'

const ObjectWithState = () => {

    const [laptop, setLaptop] = useState({
        brand: '',
        model: ''
    })

    return (
        <div>
            <form>

                <label>Brand</label>
                <input type="text" value={laptop.brand} onChange={event => setLaptop({...laptop, brand: event.target.value })}/>
                <br />

                <label>Model</label>
                <input type="text" value={laptop.model} onChange={event => setLaptop({...laptop, model: event.target.value })}/>

            </form>

            <h1>{JSON.stringify(laptop)}</h1>
        </div>
    )
}

export default ObjectWithState