import React from 'react'

const IfWithElementVariables = () => {

    let is_admin_user = true

    let result

    if (is_admin_user) {

        result = <p>Welcome Admin</p>
    }
    else {

        result = <p>Welcome Guest</p>
    }

    return (
        <div>
            {result}
        </div>
    )
}

export default IfWithElementVariables