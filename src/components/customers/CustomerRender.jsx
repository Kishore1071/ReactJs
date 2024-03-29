import React from 'react'
import { useNavigate } from 'react-router-dom'

const CustomerRender = ({customer, selected_ids}) => {

  const navigate = useNavigate()
  return (
    <tr>
        <td>{customer.customer_name}</td>
        <td>{customer.company_name}</td>
        <td>{customer.age}</td>
        <td>{customer.phone_number}</td>
        <td>{customer.member_since}</td>
        <td>{customer.address}</td>
        <td>
            <button onClick={() => navigate(`/edit/customers/${customer.id}`)}>Edit</button>
        </td>
        <td>
            <input type="checkbox" onClick={() => selected_ids(customer.id)} />
        </td>
    </tr>
  )
}

export default CustomerRender