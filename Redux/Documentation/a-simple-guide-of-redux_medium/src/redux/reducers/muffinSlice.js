import { createSlice } from "@reduxjs/toolkit";

export const muffinSlice = createSlice({
    name: "muffin",
    initialState: [],
    reducers: {

        ////// we leave this method and use "Immer" which converts our impure function into pure function./////////

        // addMuffin: (state, action) => {
        //     return [...state, action.payload]
        // },
        // deleteMuffin: (state, action) => {
        //     let newMuffinArray = state
        //     return newMuffinArray.filter(muffin => muffin !== action.payload);
        // }

        ////// we will use this method. Here we will use Immer //////
        addMuffin: (state, action) => {
            state.push(action.payload)
        },
        deleteMuffin: (state, action) => {
            return state.filter(muffin => muffin !== action.payload);
        }
    }
});

export default muffinSlice.reducer;
const addMuffin = muffinSlice.actions.addMuffin;
const deleteMuffin = muffinSlice.actions.deleteMuffin;
export { addMuffin, deleteMuffin };
