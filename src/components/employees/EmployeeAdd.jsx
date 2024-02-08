import React, { useState } from 'react'
import { newEmployee } from '../../react-redux/slices/employeeSlice'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'

const EmployeeAdd = () => {

    const navigate = useNavigate()

    const [employee, setEmployee] = useState('')
    const employeeDispatch = useDispatch()

    const AddEmployee = () => {
        employeeDispatch(newEmployee(employee))
        setEmployee('')
    }

    return (
        <div>
            <h1>Employees</h1>
            <input type="text" value={employee} onChange={event => setEmployee(event.target.value)}/>
            <button onClick={AddEmployee}>Add</button>

            <button onClick={() => navigate('/all/employee/')}>View All Employees</button>
        </div>
    )
}

export default EmployeeAdd