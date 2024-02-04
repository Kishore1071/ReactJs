import React from 'react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import CustomerRender from './CustomerRender'
import { useNavigate } from 'react-router-dom'

const CustomerGet = () => {

    const navigate = useNavigate()

    const [customer_data, setCustomerData] = useState([])

    useEffect(() =>{
        axios.get('http://127.0.0.1:1000/customer')
        .then(response => setCustomerData(response.data))
        .catch(error => console.log(error))
    }, [])

    let customer_render = customer_data.length > 0 ? customer_data.map(customer => <CustomerRender key={customer.id} customer={customer}/>): <div>No Data Found</div>

    return (
        <div>

            <button onClick={() => navigate('/add/customers/')}>Add Customer</button>
            
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Company Name</th>
                        <th>Age</th>
                        <th>Phone Number</th>
                        <th>Member Since</th>
                        <th>Address</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {customer_render}
                </tbody>
            </table>
        </div>
    )
}

export default CustomerGet