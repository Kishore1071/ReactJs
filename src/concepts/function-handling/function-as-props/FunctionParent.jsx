import React from 'react'
import FunctionChild from './FunctionChild'

const FunctionParent = () => {

    const ConsoleLog = (child_text) => {
        console.log(`The text sent from the child is "${child_text}"`)
    }
    
    return (
        <div>
            <FunctionChild GetData={ConsoleLog}></FunctionChild>
        </div>
    )
}

export default FunctionParent