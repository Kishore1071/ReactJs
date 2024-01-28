import React from 'react'

const List = () => {

    let super_heros = ["Ironman", "Superman", "Batman"]

    let result = super_heros.map(hero => <p>{hero}</p>)

    return (
        <div>
            {result}
        </div>
    )
}

export default List