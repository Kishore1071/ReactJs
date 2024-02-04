import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductRender from './ProductRender';
import { useNavigate } from 'react-router-dom';

const ProductGet = () => {

    const navigate = useNavigate()

    const [product_data, setProductData] = useState('')

    useEffect(() => {
        axios.get('http://127.0.0.1:1000/product/')
        .then(response => setProductData(response.data))
        .catch(error => console.log(error))
    }, [])

    let product_render = product_data.length > 0 ? product_data.map(product => <ProductRender key={product.id} product={product}/>): <div>No Data Found</div>

    return (
        <div>

            <button onClick={() => navigate('/add/products/')}>Add Product</button>

            <table>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Code</th>
                        <th>Price</th>
                        <th>Gst %</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {product_render}
                </tbody>
            </table>
        </div>
    )
}

export default ProductGet