import React from 'react'

const ListChild = ({laptop_data}) => {

    const {brand, model} = laptop_data

    return (
        <div>            
            <h1>My laptop brand is {brand}</h1>
            <p>My laptop model is {model}</p>
        </div>
    )
}

export default ListChild