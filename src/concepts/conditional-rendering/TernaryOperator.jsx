import React from 'react'

const TernaryOperator = () => {

    let is_admin_user = true

    let result = is_admin_user ? <p>Welcome Admin</p> : <p>Welcome Guest</p>

    return (
        <div>
            {result}
        </div>
    )
}

export default TernaryOperator