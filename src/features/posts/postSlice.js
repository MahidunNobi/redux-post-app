import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const postUrl = "https://jsonplaceholder.typicode.com/posts"



const initialState = {
  posts: [],
  status: "idle", // "idle" | "loading" | "succeeded" | "failed"
  error: null
};

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async()=>{
  try {
    const response = await axios.get(`${postUrl}?_limit=6`)
    return response.data
  } catch (error) {
    return error.message
  }
})

export const addNewPost = createAsyncThunk("posts/addNewPosts", async(initialPost)=>{
  try {
    const response = await axios.post(`${postUrl}?_limit=6`, initialPost)
    return response.data
  } catch (error) {
    return error.message
  }
})

export const updatePost = createAsyncThunk("posts/updatePost", async(initialPost)=>{
  const {id} = initialPost
  try {
    const res = await axios.put(`${postUrl}/${id}`, initialPost)
    return res.data
  } catch (error) {
    // return error.message
    return initialPost
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
      .addCase(addNewPost.fulfilled, (state, action)=>{
        action.payload.userId = Number(action.payload.userId)
        // console.log(action.payload)
        state.posts.unshift(action.payload)        
      })
      .addCase(updatePost.fulfilled, (state, action)=>{
        const {id} = action.payload
        state.posts = state.posts.map(post => post.id == id ? {...action.payload} : post)
      })
  }
});

export const getAllPosts = (state) => state.posts.posts;
export const getPostsStatus = (state) => state.posts.status;
export const getPostsError = (state) => state.posts.error;

export const { addPost, deletePost, modifyPost } = postSlice.actions;

export default postSlice.reducer;
