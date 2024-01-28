import React from 'react'
import { useReducer } from 'react'

const initialState = {
    firstCounter: 0,
    secondCounter: 0
}

let result

const countReducer = (currentState, action) => {
    if (action.type === 'Increment') {

        result = action.key === 'firstCounter' ? {... currentState, firstCounter: currentState.firstCounter + action.value} : {... currentState, secondCounter: currentState.secondCounter + action.value}

        return result
    }
    else if (action.type === 'Decrement') {

        result = action.key === 'firstCounter' ? {... currentState, firstCounter: currentState.firstCounter - action.value} : {... currentState, secondCounter: currentState.secondCounter - action.value}
        
        return result
    }
    else if (action.type === 'Reset') {
        return initialState
    }
    else {
        return currentState
    }
}
const ComplexReducer = () => {
    
    const [count, dispatchCount] = useReducer(countReducer, initialState)

    return (
        <div>
            <h1>Single Counter: {count.firstCounter}</h1>

            <button onClick={() => dispatchCount({type: 'Increment', key: 'firstCounter', value: 1})}>Increment</button>
            <button onClick={() => dispatchCount({type: 'Decrement', key: 'firstCounter', value: 1})}>Decrement</button>

            <h1>Five Counter: {count.secondCounter}</h1>
            <button onClick={() => dispatchCount({type: 'Increment', key: 'secondCounter', value: 5})}>Increment</button>
            <button onClick={() => dispatchCount({type: 'Decrement', key: 'secondCounter', value: 5})}>Decrement</button>

            <br />
            <br />

            <button onClick={() => dispatchCount({type: 'Reset'})}>Reset All</button>
        </div>
    )
}

export default ComplexReducer