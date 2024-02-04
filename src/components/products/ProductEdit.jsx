import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const ProductEdit = () => {

    const navigate = useNavigate()

    const params = useParams()
    const {id} = params

    const [product_name, setProductName] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [gst, setGst] = useState('')

    useEffect(() => {
        axios.get(`http://127.0.0.1:1000/product/${id}`)
        .then(response => {
            setProductName(response.data.product_name)
            setCode(response.data.code)
            setPrice(response.data.price)
            setGst(response.data.gst)
        })
    }, [id])

    const SubmitHandler = event => {

        event.preventDefault()

        const product_data = {
            product_name: product_name,
            code: code,
            price: price,
            gst: gst
        }

        axios.patch(`http://127.0.0.1:1000/product/${id}/`, product_data)
        .then(response => navigate('/all/products/'))
        .catch(error => console.log(error))
    }

    const DeleteCustomer = () => {
        axios.delete(`http://127.0.0.1:1000/product/${id}/`)
        .then(response => navigate('/all/products/'))
        .catch(error => console.log(error))
    }

    return (
        <div>

            <button onClick={() => navigate('/all/products/')}>Back</button>

            <form onSubmit={SubmitHandler}>

                <label htmlFor="">Product Name</label>
                <br />
                <input type="text" value={product_name} onChange={event => setProductName(event.target.value)}/>
                <br />

                <label htmlFor="">Code</label>
                <br />
                <input type="text" value={code} onChange={event => setCode(event.target.value)}/>
                <br />

                <label htmlFor="">Price</label>
                <br />
                <input type="number" value={price} onChange={event => setPrice(event.target.value)}/>
                <br />

                <label htmlFor="">Gst %</label>
                <br />
                <input type="number" value={gst} onChange={event => setGst(event.target.value)}/>
                <br />

                <input type="submit" value='Update'/>

                <input type="button" value="Delete" onClick={DeleteCustomer}/>

            </form>

        </div>
    )
}

export default ProductEdit