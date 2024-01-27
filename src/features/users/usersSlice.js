import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users"

const initialState = {
    users:[],
    status: "idle",
    error: null
}

export const fetchUsers = createAsyncThunk("users/fetchUsers", async()=>{
    try {
        const response = await axios.get(URL)
        return response.data
    } catch (error) {
        return error.message
    }
})

export const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {},
    extraReducers(builder){
        builder
            .addCase(fetchUsers.pending, (state, action)=>{
                state.status = "loading"
            })
            .addCase(fetchUsers.fulfilled, (state, action)=>{
                state.status = "succeeded"
                state.users = state.users.concat(action.payload)
            })
            .addCase(fetchUsers.rejected, (state, action)=>{
                state.status = "failled"
                state.error = action.error.message
            })
    }
})

export const getAllUsers = state => state.users.users
export const getUsersStatus = state => state.users.status
export const getUsersError = state => state.users.error

export default usersSlice.reducer