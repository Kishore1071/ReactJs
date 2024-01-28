import React from 'react'

const ListIndexAsKey = () => {

    let super_heros = ["Ironman", "Superman", "Batman"]

    let result = super_heros.map((hero, index) => <p key={index}>{hero}</p>)

    return (
        <div>
            {result}
        </div>
    )
}

export default ListIndexAsKey