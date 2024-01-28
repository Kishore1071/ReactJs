import React from 'react'

const IfStatement = () => {

    let is_admin_user = true

    if (is_admin_user) {
        return (
            <div>
                <p>Welcome Admin</p>
            </div>
        )
    }
    else {

        return (
            <div>
                <p>Welcome Guest</p>
            </div>
        )
    }

}

export default IfStatement