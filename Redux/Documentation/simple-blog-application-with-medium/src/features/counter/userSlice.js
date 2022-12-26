import { createSlice } from "@reduxjs/toolkit"

// export const fetchUserById = createAsyncThunk(
//     'USER_FETCH_USER_BY_ID',
//     async (args, { dispatch }) => {
//         const response = await userAPI.fetchUserById(args.userId)
//         dispatch(fetchBlogsByUserId(args)) //dispatch another action
//         return response.data
//     }
// )

const userSlice = createSlice({
    name: 'user',
    initialState: { user: { id: 1, name: '' } },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase((state, action) => {
            state.user = action.payload
        })
    },
})

export const selectUser = (rootState) => rootState.user.user

export default userSlice.reducer