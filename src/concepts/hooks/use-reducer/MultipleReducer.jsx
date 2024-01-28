import React from 'react'
import { useReducer } from 'react'

const initialState = 0

const reducer = (currentState, action) => {
    
    if (action === 'Increment') {
        return currentState + 1
    }
    else if (action === 'Decrement') {
        return currentState - 1
    }
    else if (action === 'Reset') {
        return initialState
    }
    else {
        return currentState
    }
}

const MultipleReducer = () => {

    const [count, dispatchCount] = useReducer(reducer, initialState)
    const [second_count, dispatchSecondCount] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatchCount('Increment')}>Increment</button>
            <button onClick={() => dispatchCount('Decrement')}>Decrement</button>
            <button onClick={() => dispatchCount('Reset')}>Reset</button>

            <h1>Second Count: {second_count}</h1>
            <button onClick={() => dispatchSecondCount('Increment')}>Increment</button>
            <button onClick={() => dispatchSecondCount('Decrement')}>Decrement</button>
            <button onClick={() => dispatchSecondCount('Reset')}>Reset</button>
        </div>
    )
}

export default MultipleReducer