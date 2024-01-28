import React, { useState } from 'react'

const InputWithMultipleFields = () => {

    const [array_value, setArrayValue] = useState([])
    const [selected_index, setSelectedIndex] = useState('')

    const AddNewValue = () => {

        const new_value = [...array_value, {
            first_name: "",
            last_name: ""
        }]
        setArrayValue(new_value)
    }

    const AddNewOnTop = () => {

        const new_value = [...array_value]
        new_value.splice(0, 0, {
            first_name: "",
            last_name: ""
        })
        setArrayValue(new_value)
    }

    const FieldOnSelectedIndex = () => {

        const new_value = [...array_value]
        const actual_index = selected_index - 1

        new_value.splice(actual_index, 0, {
            first_name: "",
            last_name: ""
        })
        setArrayValue(new_value)
        setSelectedIndex('')
    }

    const UpdateFirstName = (event, index) => {

        const input_data = [...array_value]
        let selected_object = input_data[index]

        selected_object.first_name = event.target.value
        setArrayValue(input_data)
    }

    const UpdateLastName = (event, index) => {

        const input_data = [...array_value]
        let selected_object = input_data[index]

        selected_object.last_name = event.target.value
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

                <label htmlFor="">Sno: {index + 1}  </label>
                <label htmlFor="">First Name: </label>
                <input type="text" value={data.first_name} onChange={(event) => UpdateFirstName(event, index)}/>

                <label htmlFor="">Last Name: </label>
                <input type="text" value={data.last_name} onChange={(event) => UpdateLastName(event, index)}/>

                <button onClick={() => DeleteValue(index)}>X</button>
                
            </div>
        )
    })

    return (
        <div>

            <button onClick={() => AddNewValue()}>Add Input Field</button>
            <button onClick={() => AddNewOnTop()}>Add Input  on Top</button>
            <label htmlFor="">Enter Field After</label>
            <input type="number" value={selected_index} onChange={(event) => setSelectedIndex(event.target.value)} placeholder='Enter the field number'/>
            <button onClick={FieldOnSelectedIndex}>Submit</button>
            {new_input_field}

            <div>
                <button onClick={SubmitData}>Submit Data</button>
            </div>
            
        </div>
    )
}

export default InputWithMultipleFields