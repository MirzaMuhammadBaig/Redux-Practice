import { configureStore } from "@reduxjs/toolkit";
import muffinReducer from "./reducers/muffinSlice";

const store = configureStore({
    reducer: {
        muffin: muffinReducer
    }
});

export default store;