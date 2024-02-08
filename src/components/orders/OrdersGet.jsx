import React, { useEffect, useState } from 'react'
import axios from 'axios'
import OrdersRender from './OrdersRender'
import { useNavigate } from 'react-router-dom'

const OrdersGet = () => {

    const navigate = useNavigate()

    const [orders_data, setOrdersData] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:1000/order')
        .then(response => setOrdersData(response.data))
        .catch(error => console.log(error))
    }, [])

    const DeleteHandler = (id) => {
        axios.delete(`http://127.0.0.1:1000/order/${id}/`)
        .then(response => setOrdersData(response.data))
        .catch(error => console.log(error))
    }

    let table_data = orders_data.map(order => <OrdersRender order={order} DeleteHandler={DeleteHandler}></OrdersRender>)

    return (
        <div>
            <button onClick={() => navigate('/add/orders/')}>Add Orders</button>
            <br />
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Bill Date</th>
                        <th>Bill Amount</th>
                        <th>View</th>
                        <th>Edit</th>
                        <th>Delete</th>
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