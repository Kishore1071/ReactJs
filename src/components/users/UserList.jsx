import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUser, deleteUser } from '../../react-redux/slices/userSlice'
import { useNavigate } from 'react-router-dom'

const UserList = () => {

    const navigate = useNavigate()

    const userDispatch = useDispatch()

    const user_data = useSelector(state => state.users)

    const UpdateHandler = (event, index) => {
        userDispatch(updateUser({
            index: index,
            value: event.target.value
        }))
    }

    const DeleteHandler = index => userDispatch(deleteUser(index))

    let result = user_data.map((user, index) => {
        return (
            <React.Fragment>
                <input type="text" value={user} onChange={event => UpdateHandler(event, index)} />
                <button onClick={()=> DeleteHandler(index)}>x</button>
            </React.Fragment>
        )
    })

    return (
        <div>
            <button onClick={event => navigate('/add/user/')}>Back</button>
            {result}
        </div>
    )
}

export default UserList