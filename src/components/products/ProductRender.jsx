import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductRender = ({product}) => {

    const navigate = useNavigate('')

    return (
        <tr>
            <td>{product.product_name}</td>
            <td>{product.code}</td>
            <td>{product.price}</td>
            <td>{product.gst}</td>
            <td>
                <button onClick={() => navigate(`/edit/products/${product.id}`)}>Edit</button>
            </td>
        </tr>
    )
}

export default ProductRender