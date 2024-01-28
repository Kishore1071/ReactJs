import React from 'react'

const ShortCircut = () => {

    let is_admin_user = true

    let result = is_admin_user && <p>Welcome Admin</p>

    return (
        <div>
            {result}
        </div>
    )
}

export default ShortCircut