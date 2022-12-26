import { createSlice } from "@reduxjs/toolkit"

const blogSlice = createSlice({
  name: 'blog',
  initialState: { blogs: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase((state, action) => {
      state.blogs.push(action.payload)
    })
  },
})

//selector
export const selectBlogs = (rootState) => rootState.blog.blogs
console.log(selectBlogs);

export default blogSlice.reducer