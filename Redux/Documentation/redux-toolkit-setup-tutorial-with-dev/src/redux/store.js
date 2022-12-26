import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./reducers/todoSlice";

export default configureStore({
    reducer: {
        todos: todoReducer,
        // state.todos comes from this attribute name
    }
});