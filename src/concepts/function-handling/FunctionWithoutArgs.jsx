import React from 'react'

const FunctionWithoutArgs = () => {

    const LogData = () => {
        console.log("Function is called")
        console.log("Logging Data")
    }

    return (
        <div>
            <button onClick={LogData}>Log Data</button>
        </div>
    )
}

export default FunctionWithoutArgs