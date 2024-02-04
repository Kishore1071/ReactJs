import React, { useEffect, useState } from 'react'
import axios from 'axios'

const OrdersGet = () => {

    const [orders_data, setOrdersData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:1000/order')
        .then(response => setOrdersData(response.data))
        .catch(error => console.log(error))
    })

    let table_data = orders_data.map(order => {
        return (
            <tr>
                <td>{order.customer.customer_name}</td>
                <td>{order.bill_date}</td>
                <td>{order.bill_amount}</td>
            </tr>
        )
    })

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Bill Date</th>
                        <th>Bill Amount</th>
                    </tr>
                </thead>
                <tbody>
                    {table_data}
                </tbody>
            </table>
        </div>
    )
}

export default OrdersGet