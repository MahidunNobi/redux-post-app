import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const URL = "https://jsonplaceholder.typicode.com/users"

const initialState = []

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
            .addCase(fetchUsers.fulfilled, (state, action)=>{
                return action.payload
            })            
    }
})

export const getAllUsers = state => state.users

export default usersSlice.reducer