import React from 'react'
import { useReducer } from 'react'

const initialState = {
    firstCounter: 0
}

const countReducer = (currentState, action) => {
    if (action.type === 'Increment') {
        return {firstCounter: currentState.firstCounter + 1}
    }
    else if (action.type === 'Decrement') {
        return {firstCounter: currentState.firstCounter - 1}
    }
    else if (action.type === 'Reset') {
        return initialState
    }
    else {
        return currentState
    }
}
const ReducerWithObject = () => {
    
    const [count, dispatchCount] = useReducer(countReducer, initialState)

    return (
        <div>
            <h1>Count: {count.firstCounter}</h1>
            <button onClick={() => dispatchCount({type: 'Increment'})}>Increment</button>
            <button onClick={() => dispatchCount({type: 'Decrement'})}>Decrement</button>
            <button onClick={() => dispatchCount({type: 'Reset'})}>Reset</button>
        </div>
    )
}

export default ReducerWithObject