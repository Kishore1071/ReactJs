import React, { useReducer } from 'react'
import NestedComA from './NestedComA'

export const CountContext = React.createContext()

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


const MainComponent = () => {

    const [count, dispatchCount] = useReducer(reducer, initialState)

    return (
        <div>
            <h1>Counter: {count}</h1>
            <CountContext.Provider value={
                {
                    countState: count,
                    countDispatch: dispatchCount
                }
            }>
                <NestedComA></NestedComA>
            </CountContext.Provider>
        </div>
    )
}

export default MainComponent