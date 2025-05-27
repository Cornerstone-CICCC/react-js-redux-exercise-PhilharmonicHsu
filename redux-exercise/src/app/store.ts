import { configureStore } from "@reduxjs/toolkit";
import UserReducer from '../components/User/UserSlice'

export const store = configureStore({
    reducer: {
        user: UserReducer
    }
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>