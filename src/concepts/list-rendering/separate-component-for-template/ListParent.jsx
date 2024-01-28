import React from 'react'
import ListChild from './ListChild'

const ListParent = () => {

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

    let result = laptops.map(lap => <ListChild key={lap.id} laptop_data={lap}></ListChild>)

    return (
        <div>
            {result}
        </div>
    )
}

export default ListParent