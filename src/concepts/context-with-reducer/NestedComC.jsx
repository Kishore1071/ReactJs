import React from 'react'
import { useContext } from 'react'
import { CountContext } from './MainComponent'

const NestedComC = () => {

    const countContext = useContext(CountContext)

    return (
        <div>
            <h2>Component C</h2>
            <button onClick={() => countContext.countDispatch('Increment')}>Increment</button>
            <button onClick={() => countContext.countDispatch('Decrement')}>Decrement</button>
            <button onClick={() => countContext.countDispatch('Reset')}>Reset</button>
        </div>
    )
}

export default NestedComC