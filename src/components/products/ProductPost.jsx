import React, { useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ProductPost = () => {

    const navigate = useNavigate()

    const [product_name, setProductName] = useState('')
    const [code, setCode] = useState('')
    const [price, setPrice] = useState('')
    const [gst, setGst] = useState('')

    const SubmitHandler = event => {
        event.preventDefault()

        const product_data = {
            product_name: product_name,
            code: code,
            price: price,
            gst: gst
        }

        axios.post('http://127.0.0.1:1000/product/', product_data)
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

                <input type="submit" />
            </form>

        </div>
    )
}

export default ProductPost