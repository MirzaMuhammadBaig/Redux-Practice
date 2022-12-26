import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/counter/blogSlice';
import blogReducer from '../features/counter/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    blog: blogReducer,
  },
});