import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const CustomerPost = () => {

    const navigate = useNavigate()

    const [customer_name, setCustomerName] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [age, setAge] = useState('')
    const [company_name, setCompanyName] = useState('')
    const [member_since, setMemberSince] = useState('')

    const SubmitHandler = event => {
        event.preventDefault()

        const customer_data = {
            customer_name: customer_name,
            age: age,
            address: address,
            phone_number: phone_number,
            company_name: company_name,
            member_since: member_since
        }

        axios.post('http://127.0.0.1:1000/customer/', customer_data)
        .then(response => navigate('/all/customers/'))
        .catch(error => console.log(error))
    }

    return (
        <div>

            <button onClick={() => navigate('/all/customers/')}>Back</button>

            <form onSubmit={SubmitHandler}>

                <label htmlFor="">Customer Name</label>
                <br />
                <input type="text" value={customer_name} onChange={event => setCustomerName(event.target.value)}/>
                <br />

                <label htmlFor="">Company Name</label>
                <br />
                <input type="text" value={company_name} onChange={event => setCompanyName(event.target.value)}/>
                <br />

                <label htmlFor="">Age</label>
                <br />
                <input type="number" value={age} onChange={event => setAge(event.target.value)}/>
                <br />

                <label htmlFor="">Phone Number</label>
                <br />
                <input type="number" value={phone_number} onChange={event => setPhoneNumber(event.target.value)}/>
                <br />

                <label htmlFor="">Member Since</label>
                <br />
                <input type="date" value={member_since} onChange={event => setMemberSince(event.target.value)}/>
                <br />

                <label htmlFor="">Address</label>
                <br />
                <input type="text" value={address} onChange={event => setAddress(event.target.value)}/>
                <br />

                <input type="submit" />
            </form>
            
        </div>
    )
}
 
export default CustomerPost