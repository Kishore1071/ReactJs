import React, { useState } from 'react'

const SingleInputFields = () => {

    const [array_value, setArrayValue] = useState([])

    const AddNewValue = () => {

        const new_value = [...array_value, ""]
        setArrayValue(new_value)
    }

    const UpdateChange = (event, index) => {

        const input_data = [...array_value]
        input_data[index] = event.target.value
        setArrayValue(input_data)
    }

    const DeleteValue = (index) => {
        
        const delete_value = [...array_value]
        delete_value.splice(index, 1)
        setArrayValue(delete_value)
    }

    const SubmitData = () => {
        console.log(array_value)
    }

    let new_input_field = array_value.map((data, index) => {
        return (
            <div key={index}>
                <input type="text" value={data} onChange={(event) => UpdateChange(event, index)}/>

                <button onClick={() => DeleteValue(index)}>X</button>
            </div>
        )
    })

    return (
        <div>
            <button onClick={() => AddNewValue()}>Add Input Field</button>
            {new_input_field}

            <div>
            <button onClick={SubmitData}>Submit Data</button>
            </div>
            
        </div>
    )
}

export default SingleInputFields