import { configureStore } from "@reduxjs/toolkit";
import postsReducers from "../features/posts/postSlice"

export const store = configureStore({
    reducer: {
        posts: postsReducers
    }
})