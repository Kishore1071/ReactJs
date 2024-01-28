import React from 'react'

const FunctionWithArgs = () => {

    const LogData = project_name => {
        console.log("Function is called")
        console.log(`Name of the project is ${project_name}`)
    }

    return (
        <div>
            <button onClick={() => LogData("React App")}>Log Project Name</button>
        </div>
    )
}

export default FunctionWithArgs