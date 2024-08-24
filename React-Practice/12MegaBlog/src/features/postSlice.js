import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  stats: 'idle',
  error: null,
};

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    removePost: (state, action) => {
      state.posts = state.posts.filter((post) => post.id !== action.payload.id);
    },
    updatePost: (state, action) => {
      const { id, content } = action.payload;
      const existingPost = state.posts.find((post) => post.id === id);
      if (existingPost) {
        existingPost.content = content;
      }
    },
    setStatus: (state, action) => {
      state.status = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { addPost, removePost, updatePost, setStatus, setError } =
  postSlice.actions;

export default postSlice.reducer;
