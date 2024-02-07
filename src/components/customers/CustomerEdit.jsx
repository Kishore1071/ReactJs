import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const CustomerEdit = () => {

    const navigate = useNavigate()

    const params = useParams()
    const {id} = params

    const [customer_name, setCustomerName] = useState('')
    const [address, setAddress] = useState('')
    const [phone_number, setPhoneNumber] = useState('')
    const [age, setAge] = useState('')
    const [company_name, setCompanyName] = useState('')
    const [member_since, setMemberSince] = useState('')

    useEffect(() =>{
        axios.get(`http://127.0.0.1:1000/customer/${id}`)
        .then(response => {
            setCustomerName(response.data.customer_name)
            setCompanyName(response.data.company_name)
            setAge(response.data.age)
            setPhoneNumber(response.data.phone_number)
            setMemberSince(response.data.member_since)
            setAddress(response.data.address)
        })
        .catch(error => console.log(error))
    }, [id])

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

        axios.patch(`http://127.0.0.1:1000/customer/${id}/`, customer_data)
        .then(response => navigate('/all/customers/'))
        .catch(error => console.log(error))

    }

    const DeleteCustomer = (event) => {
        axios.delete(`http://127.0.0.1:1000/customer/${id}/`)
        .then(response => navigate('/all/customers/'))
        .catch(error => console.log(error))

    }

    return (
        <div>

            <button onClick={() => navigate('/all/customers/')}>Back</button>

            <form>

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

                <input type="button" value="Update" onClick={SubmitHandler}/>
                <input type="button" value="Delete" onClick={DeleteCustomer}/>
            </form>
        </div>
    )
}

export default CustomerEdit