import React from 'react'

const MemoChild = ({planet_name}) => {

    console.log("Logging planet name", planet_name)

    return (
        <div>
            <p>Name of our planet is {planet_name}</p>
        </div>
    )
}

export default React.memo(MemoChild)