import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postUrl = "https://jsonplaceholder.typicode.com/posts?_limit=6"



const initialState = {
  posts: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async()=>{
  try {
    const response = await axios.get(postUrl)
    return response.data
  } catch (error) {
    return error.message
  }
})



export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {       
        state.posts.push(action.payload);
      },
      prepare: (title, body, userId) => {
        return {
          payload: {
            id: nanoid(),
            title,
            body,
            userId,
          },
        };
      },
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    modifyPost: (state, action) => {
      const { id, title, body, userId } = action.payload;
      state.posts = state.posts.map((post) =>
        post.id == id ? { ...post, title, body, userId } : post
      );
    },
  },
  extraReducers(builder){
    builder
      .addCase(fetchPosts.pending, (state, action)=>{
        state.status = "loading"
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = "succeeded"
        // Adding new posts to the exiting posts
        state.posts = state.posts.concat(action.payload)
      })
      .addCase(fetchPosts.rejected, (state, action)=>{
        state.status = "failed"
        state.error = action.error.message
      })
  }
});

export const getAllPosts = (state) => state.posts;
export const getPostsStatus = (state) => state.status;
export const getPostsError = (state) => state.error;

export const { addPost, deletePost, modifyPost } = postSlice.actions;

export default postSlice.reducer;
