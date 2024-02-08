import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateEmployee, deleteEmployee } from '../../react-redux/slices/employeeSlice'
import { useNavigate } from 'react-router'

const EmployeeView = () => {

    const navigate = useNavigate()

    const employees = useSelector(state => state.employees)

    const employeeDispatch = useDispatch()

    const UpdateHandler = (event, index) => {
        employeeDispatch(updateEmployee({
            index: index,
            new_value: event.target.value
        }))
    }

    const DeleteHandler = index => employeeDispatch(deleteEmployee(index))

    let EmployeeList = employees.map((employee, index) => {
        return (
            <div key={index}>
                <input type="text" value={employee} onChange={event => UpdateHandler(event, index)}/>
                <button style={{backgroundColor: 'red', color: "white"}} onClick={() => DeleteHandler(index)}>X</button>
            </div>
        )
    })

    return (
        <div>
            <h1>EmployeeView</h1>
            {EmployeeList}
            <button onClick={() => navigate('/add/employee/')}>Add Employee Page</button>
        </div>
    )
}

export default EmployeeView