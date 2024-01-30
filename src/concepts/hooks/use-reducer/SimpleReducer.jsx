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

const SimpleReducer = () => {

    const [count, dispatchCount] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => dispatchCount('Increment')}>Increment</button>
            <button onClick={() => dispatchCount('Decrement')}>Decrement</button>
            <button onClick={() => dispatchCount('Reset')}>Reset</button>
            <button onClick={() => dispatchCount('njdnjd')}>Some Change</button>
        </div>
    )
}

export default SimpleReducer