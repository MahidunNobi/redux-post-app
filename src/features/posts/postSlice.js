import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  posts: [
    { id: 1, title: "Post-01", description: "Post Description" },
    { id: 2, title: "Post-02", description: "Post Description" },
  ],
};
export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: {
      reducer: (state, action) => {       
        state.posts.push(action.payload);
      },
      prepare: (title, description, author) => {
        return {
          payload: {
            id: nanoid(),
            title,
            description,
            author,
          },
        };
      },
    },
    deletePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload);
    },
    modifyPost: (state, action) => {
      const { id, title, description, author } = action.payload;
      state.posts = state.posts.map((post) =>
        post.id == id ? { ...post, title, description, author } : post
      );
    },
  },
});

export const getAllPosts = (state) => state.posts;

export const { addPost, deletePost, modifyPost } = postSlice.actions;

export default postSlice.reducer;
