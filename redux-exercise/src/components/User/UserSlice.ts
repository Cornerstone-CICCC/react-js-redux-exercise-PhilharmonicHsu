import { createSlice } from "@reduxjs/toolkit";

interface UserState {
    firstname: string
    lastname: string
    age: number
}

const initialState: UserState = {
    firstname: 'Phil',
    lastname: 'Hsu',
    age: 20
}

export const UserClice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        incrementAge: (state) => {
            state.age += 1
        },
        setFirstname: (state, action) => {
            state.firstname = action.payload
        },
        setLastname: (state, action) => {
            state.lastname = action.payload
        }
    }
})

export const {incrementAge, setFirstname, setLastname} = UserClice.actions

export default UserClice.reducer