import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    posts: [
        {id: 1, title: "Post-01", description: "Post Description"},
        {id: 2, title: "Post-02", description: "Post Description"},
    ]
}
export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: (state, action)=>{

            const newPost = {
                id: nanoid(),
                title: action.payload.title,
                description: action.payload.description
            }
            state.posts.push(newPost)
        },
        deletePost: (state, action)=>{
            state.posts = state.posts.filter(post => post.id !== action.payload)
        },
        editPost: (state, action)=>{
            const {id, title, descrption} = action.payload

            state.posts = state.posts.map(post => post.id == id ? {...post, title, descrption} : post)
        }
    }
})

export const getAllPosts = (state) => state.posts

export const {addPost, deletePost, editPost} = postSlice.actions

export default postSlice.reducer
