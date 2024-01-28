import React from 'react'

const ListIdAsKey = () => {

    let laptops = [
        {
            id: 1,
            brand: "Dell",
            model: "Inspiron 3542"
        },
        {
            id: 2,
            brand: "Asus",
            model: "Vivobook S15"
        }
    ]

    let result = laptops.map(lap => {
        return (
        <div key={lap.id}>            
            <h1>My laptop brand is {lap.brand}</h1>
            <p>My laptop model is {lap.model}</p>
        </div>
        )
    })

    return (
        <div>
            {result}
        </div>
    )
}

export default ListIdAsKey