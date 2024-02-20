import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { newUser } from '../../react-redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const User = () => {

    const navigate = useNavigate()

    const [user, setUser] = useState('')

    const userDispatch = useDispatch()


    const AddNewUser = event => {
        userDispatch(newUser(user))
        navigate('/all/user/')

    }

    return (
        <div>
            <label htmlFor="">User Name</label>
            <input type="text" value={user} onChange={event => setUser(event.target.value)}/>
            <input type="submit" onClick={AddNewUser}/>
        </div>
    )
}

export default User