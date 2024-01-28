import React from 'react'

const MemoChildMany = ({planet_name, system_name}) => {

    console.log("Logging planet name", planet_name)
    console.log("Logging system name", system_name)

    return (
        <div>
            <p>Name of our planet is {planet_name}</p>
            <p>Our System name is {system_name}</p>
        </div>
    )
}

export default React.memo(MemoChildMany)