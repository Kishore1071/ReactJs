import React from 'react'
import { useState } from 'react'

const PreviousState = () => {

    const [count, setCount] = useState(0)

    const IncrementFive = () => {
        for (let i = 0; i < 5; i++) {
            setCount(previousState => previousState + 1)
        }
    }

    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={IncrementFive}>Increment Five</button>
        </div>
    )
}

export default PreviousState