import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: 'user_data',
    initialState: [],
    reducers: {
        newUser(state, action) {
            state.push(action.payload)
        },

        updateUser(state, action) {

            const data = action.payload

            state[data['index']] = data['value']

            return state
        },

        deleteUser(state, action) {
            const index = action.payload

            state.splice(index, 1)

            return state
        }
    }
})


export const {newUser, updateUser, deleteUser} = userSlice.actions

export default userSlice.reducer