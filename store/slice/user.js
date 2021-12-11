import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const Login = createAsyncThunk(
    "Login",
    async (arg, {
       getState
    }) => { // <-- destructure getState method
       const state = getState();
       let dt = state.user.auth
       return  dt
    }
 );
 

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        data: {},
        auth: false
    },
    reducers: {
        set(state) {
            state.auth = true
        }
    },
    extraReducers: builder => {
        builder.addCase(Login.fulfilled, (state, action) => {
            state.data = action.payload
        })
    }
})

export const { set } = userSlice.actions

export default userSlice.reducer
