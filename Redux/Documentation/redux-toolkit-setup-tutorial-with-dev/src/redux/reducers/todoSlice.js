import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
    name: "todo",
    initialState: [],
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: uuid(),
                text: action.payload,
            };
            // mutate the state
            state.push(todo);

            // we can also use the Redux immutable concept
            // return [...state, todo];
        },
    }
});

// this is dispatch
export const { addTodo } = todoSlice.actions;

// this is for configureStore 
export default todoSlice.reducer;